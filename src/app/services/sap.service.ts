import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { environment } from 'src/environments/environment';
import { SharedService } from './shared.service';
import { ApiService } from './api.service';
import { of } from 'rxjs';
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class SapService {
  constructor(private http: HttpClient, private sharedService: SharedService, public apiService: ApiService) { }
  csvJsonToFBR(json){
    json = json.data
    var fbr:any[] = []
    let transactions = []
    let transactionsObj = _.groupBy(json, 'bill.doc.')
    for (const key of Object.keys(transactionsObj)) {
      // if (key == "") debugger
      if(key !== "")transactions.push(transactionsObj[key])
    }

    transactions.forEach(item => {
      if(item[0]['sold-to pt'] == "") return
      let fbrObj: any = {}
      fbrObj.InvoiceNumber = '';
      fbrObj.POSID = item[0]['pos id'];
      fbrObj.SoldTo = item[0]['sold-to pt']
      fbrObj.SalesOrder = item[0]['sales doc.']
      fbrObj.CustomerPO = item[0]['customer po']
      fbrObj.ShipToParty = item[0]['ship-to-party']
      fbrObj.StoreName = ''
      fbrObj.USIN = item[0]['bill.doc.'];
      fbrObj.DateTime = moment(this.dateConvertor(item[0]['billing date'])).format('MM/DD/YY 06:00:00')
      fbrObj.BuyerNTN = item[0]['buyerntn'];
      fbrObj.BuyerCNIC = item[0]['buyercnic'];
      fbrObj.BuyerName = item[0]['buyername'];
      fbrObj.BuyerStrn = item[0]['buyerstrn'];
      fbrObj.BuyerAddress= item[0]['buyeraddress'];
      fbrObj.BuyerPhoneNumber = "";
      fbrObj.PaymentMode = 6;
      fbrObj.TotalSaleValue = item.reduce(this.totalSale,0).toFixed(2)
      fbrObj.TotalQuantity = item.reduce(this.totalQuantity,0)
      fbrObj.Discount = 0;
      fbrObj.FurtherTax = item[0]['further tax'];
      fbrObj.InvoiceType = this.getInvoiceType(item[0]['billt']);
      fbrObj.RefUSIN = item[0]['refusin'];
      
      fbrObj.SoldToParty = item[0]['sold-to party']
      fbrObj.ShipToPartyName = item[0]['ship-to-party name']
      fbrObj.Items =[]
      item.forEach(prod =>{
        let invoiceItem: any = {}
        invoiceItem.ItemCode = prod['material'].replace(/-/g, "");
        invoiceItem.ItemName = prod['itemname'];
        invoiceItem.PCTCode = prod['hscode'] //prod['material'].replace(/-/g, "");
        invoiceItem.Quantity = this.cleanInt(prod['billed quantity']);
        invoiceItem.SaleValue = this.cleanFloat(prod['net value']);
        invoiceItem._taxAmount = this.cleanFloat(prod['salestaxamount']);
        invoiceItem._totalNet = parseFloat(invoiceItem.SaleValue) + parseFloat(invoiceItem._taxAmount)
        invoiceItem._totalAdvExcluded = this.cleanFloat(prod['net value'])
        invoiceItem.InvoiceType = this.getInvoiceType(prod['billt'])
        // invoiceItem.TaxCharged = invoiceItem.InvoiceType == 1 ? invoiceItem._totalAdvExcluded - invoiceItem.SaleValue : invoiceItem._taxAmount
        invoiceItem.TaxCharged = this.cleanFloat(prod['salestaxamount'])
        invoiceItem.TaxRate = Math.round(invoiceItem.TaxCharged / invoiceItem.SaleValue * 100);
        // invoiceItem.TotalAmount = invoiceItem.InvoiceType == 1 ?invoiceItem._totalAdvExcluded : invoiceItem._taxAmount
        invoiceItem.RefUSIN = invoiceItem.InvoiceType !== 1 ? prod['refusin']: '';
        invoiceItem.Discount = 0
        invoiceItem.DiscountPercentage = 0
        invoiceItem.DiscountCode = 0
        invoiceItem.FurtherTax = prod['further tax']
        invoiceItem.TotalAmount = prod['valueexclusiveadvancetax']
        prod.TaxCharged = invoiceItem['Sales Tax']
        invoiceItem.DeliveryNumber = prod['delivery number']
        invoiceItem.SalesTaxAmount = prod['salestaxamount']
        invoiceItem.AdvanceTax = prod['advance tax'];
        fbrObj.Items.push(invoiceItem)
      })
      fbrObj.TotalBillAmount = item.reduce(this.totalBill,0).toFixed(2)
      fbrObj.TotalTaxCharged = item.reduce(this.totalTax,0).toFixed(2)
      fbrObj.TotalAdvanceTaxCharged = item.reduce(this.totalAdvanceTax,0).toFixed(2)
      fbrObj.TotalTaxandNet = item.reduce(this.totalTaxandNet, 0).toFixed(2)
      fbrObj.totalSalesTaxPercentage = fbrObj.TotalTaxCharged / fbrObj.TotalBillAmount * 100
      fbr.push(fbrObj)
    })
    return fbr
  }

  totalAdvanceTax(acc, current) {
    const cleanValue = current['advance tax'].replace(',', "")
    return acc +  parseFloat(cleanValue)
  }

  totalTaxandNet(acc, current) {
    const cleanValue = current['total of tax & net value'].replace(',', "")
    return acc + parseFloat(cleanValue)
  }

  dateConvertor(str) {
      const splitDate = str.split('.')
      return new Date(+splitDate[2], splitDate[1] - 1, +splitDate[0])
  }
  cleanInt(str){
    return parseInt(str.replace(',',""))
  }
  cleanFloat(str){
    return parseFloat(str.replace(',',"")).toFixed(2)
  }
  getInvoiceType(type){
    if(type.toLowerCase() == 'zf2') return 1;
    else if(type.toLowerCase() == 'zre' || type.toLowerCase() == 'dg') return 3
    else if(type.toLowerCase() == 'Debit' || type.toLowerCase() == 'dr') return 2
  }
  getTotals(item){
    if(item[0]['type'] == 'invoice'){
    }
  }  
  totalSale(acc, current){
    const cleanCurrent = current['net value'].replace(',', "")
    return acc + parseFloat(cleanCurrent)

  }
  totalQuantity(acc, current){
    return acc + parseInt(current['billed quantity'])
  }
  totalBill(acc, current){
    return acc +  parseFloat(current.valueexclusiveadvancetax)
  }
  totalTax(acc, current){
    const cleanCurrent = current['salestaxamount'].replace(',', "")
    return acc +  parseFloat(cleanCurrent)
  }
  getPdfList(id) {
    return this.http.get(this.getBaseUrl() + `sap/listPdf/${id}`, this.sharedService.getHeaders())
  }
  downloadPdf(file) {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    headers = headers.set('Authorization', `Bearer ${this.sharedService.getUserToken()}`)
    return this.http.get(this.getBaseUrl() + `sap/downloadPdf?fileName=${file}`, { headers: headers, responseType: 'blob' })
  }

  getBaseUrl() {
    return environment.baseUrl
  }
  filterParams = {
    comparator: function (filterLocalDateAtMidnight, cellValue) {
      const cleanCellValue = moment(cellValue).format('MM/DD/YYYY')
      const cleanFilterLocalDate = moment(filterLocalDateAtMidnight).format('MM/DD/YYYY')
      if (cleanFilterLocalDate === cleanCellValue) {
        return 0;
      }
      if (cleanCellValue < cleanFilterLocalDate) {
        return -1;
      }
      if (cleanCellValue > cleanFilterLocalDate) {
        return 1;
      }
    },
    closeOnApply: true,
    buttons: ['clear']
  }
  getColumnDefs(){
    let colDefs = [
      {headerName: 'USIN', field: 'USIN', cellRenderer: 'viewRenderer', checkboxSelection: true, headerCheckboxSelection: true},
      {headerName: 'Ref USIN', field: 'RefUsin'},
      {headerName: 'Sold To', field: 'SoldTo'},
      {headerName: 'Sold To Party', field: 'SoldToParty'},
      {headerName: 'POS Id', field: 'POSID'},
      {headerName: 'Billing Date', field: 'DateTime',filter: 'agDateColumnFilter', filterParams: this.filterParams, suppressMenu: false, valueFormatter: (params) => {
        return moment(params.value).format('MM/DD/YYYY h:mm:ss')
      }},
      {headerName: 'Buyer NTN', field: 'BuyerNTN'},
      {headerName: 'Buyer Name', field: 'BuyerName'},
      {headerName: 'Buyer CNIC', field: 'BuyerCnic'},
      {headerName: 'Buyer STRN', field: 'BuyerStrn'},
      {headerName: 'Buyer Address', field: 'BuyerAddress'},
      {headerName: 'Total Sale Value', field: 'TotalSaleValue'},
      {headerName: 'TotalQuantity', field: 'TotalQuantity'},
      {headerName: 'Discount', field: 'Discount'},
      {headerName: 'InvoiceType', field: 'InvoiceType'},
      {headerName: 'TotalBillAmount', field: 'TotalBillAmount'},
      {headerName: 'TotalTaxCharged', field: 'TotalTaxCharged'},
      // {headerName: 'Sales Tax', field: 'SalesTax'},
      {headerName: 'Sales Doc.', field: 'SalesOrder'},
      {headerName: 'Ship To Party.', field: 'ShipToParty'},
      {headerName: 'Ship To Party Name', field: 'ShipToPartyName'}
      // {headerName: "Actions", cellRenderer: 'actionCellRenderer', cellRendererParams: {
      //   view: true,
      //   fbrPost: true
      // }}
    ]
    return colDefs
  }

  getTransactionHistory() {
    return this.http.get(this.getBaseUrl() + `sap/transactionHistory`, this.sharedService.getHeaders())
  }
  getTransactionHistoryByPosted() {
    return this.http.get(this.getBaseUrl() + 'sap/transactionHistoryByPosted', this.sharedService.getHeaders())
  }
  getTransactionHistoryByPending() {
    return this.http.get(this.getBaseUrl() + 'sap/transactionHistoryByPending', this.sharedService.getHeaders())
  }
  postDataToFBR(body){
    return this.apiService.postToFbr('http://localhost:8524/api/IMSFiscal/GetInvoiceNumberByModel',body)
  }
  saveData(body){
    //return of({success: true})
    return this.apiService.add('sap/saveTransaction',body)
  }
  verifyDublicates(body){
    //return of({success: true})
    return this.apiService.add('sap/verifyDublicates',body)
  }
  getTransactionProducts(transactionId){
    return this.apiService.get('sap/getTransactionProducts/'+transactionId)
  }

  uploadCsvFIle(file){
    const formData = new FormData();
    formData.append('file', file)
    return this.http.post(this.getBaseUrl()+'upload/uploadCsvFile',formData)
  }
     
  updateTransaction(transactionId, transaction){
    return this.apiService.edit('sap/updateTransaction/'+transactionId, transaction)
  }

  csvExport(type,body) {
    return this.apiService.add(`sap/csvExport/${type}`, body)
  }

  bulkDownload(body) {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/zip');
    headers = headers.set('Authorization', `Bearer ${this.sharedService.getUserToken()}`)
    return this.http.post(`${this.getBaseUrl()}sap/downloadBulkPdf`, body ,{ headers: headers, responseType: 'blob' })
  }
}
