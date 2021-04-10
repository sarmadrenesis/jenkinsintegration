import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';
import {Observable} from "rxjs/index";
import * as moment from 'moment'
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  // filterParams = {
  //   comparator: function (filterLocalDateAtMidnight, cellValue) {
  //     const cleanCellValue = moment(cellValue).format('MM/DD/YYYY')
  //     const cleanFilterLocalDate = moment(filterLocalDateAtMidnight).format('MM/DD/YYYY')
  //     if (cleanFilterLocalDate === cleanCellValue) {
  //       return 0;
  //     }
  //     if (cleanCellValue < cleanFilterLocalDate) {
  //       return -1;
  //     }
  //     if (cleanCellValue > cleanFilterLocalDate) {
  //       return 1;
  //     }
  //   },
  //   closeOnApply: true,
  //   buttons: ['clear']
  // }

  constructor(private http: HttpClient, private sharedService: SharedService) { }


  getDevices() {
    return this.http.get(this.getBaseUrl() + 'devices', this.sharedService.getHeaders())
  }

  getBaseUrl() {
    return environment.baseUrl;
  }

  getCompaniesColumns() {
    return [
      {headerName: 'POS ID', field: 'posid'},
      {headerName: 'Transaction ID', field: 'transaction_id'},
      {headerName: 'STRN', field: 'strn'},
      {headerName: 'Invoice Number', field: 'invoice_number'},
      {headerName: 'Operator ID', field: 'oper_id'},
      // {headerName: 'DateOfReceipt', field: 'date_of_receipt',filter: 'agDateColumnFilter', filterParams: this.filterParams, suppressMenu: false, valueFormatter: (params) => {
      //   return moment(params.value).format('MM/DD/YYYY')
      // }},
      {headerName: 'TimeOfReceipt', field: 'time_of_receipt'},
      {headerName: 'Payment Mode', field: 'payment_mode'},
      {headerName: 'Card Type', field: 'card_type'},
      {headerName: 'Total Quantity', field: 'total_quantity'},
      {headerName: 'Amount Before Tax', field: 'amount_before_tax'},
      {headerName: 'Total Sales Tax', field: 'total_sales_tax'},
      {headerName: 'Total Amount', field: 'total_amount'},
      {headerName: 'Sales Man', field: 'sales_man'},
    ]
  }

  getTransactionColumns() {
    return [
      {headerName: 'POS ID', field: 'posid'},
      {headerName: 'Transaction ID', field: 'transaction_id'},
      {headerName: 'STRN', field: 'strn'},
      {headerName: 'Invoice Number', field: 'invoice_number'},
      {headerName: 'Operator ID', field: 'oper_id'},
      // {headerName: 'DateOfReceipt', field: 'date_of_receipt',filter: 'agDateColumnFilter', filterParams: this.filterParams, suppressMenu: false, valueFormatter: (params :any) => {
      //   return moment(params.value).format('MM/DD/YYYY')
      // }},
      {headerName: 'TimeOfReceipt', field: 'time_of_receipt'},
      {headerName: 'Payment Mode', field: 'payment_mode'},
      {headerName: 'Card Type', field: 'card_type'},
      {headerName: 'Total Quantity', field: 'total_quantity'},
      {headerName: 'Amount Before Tax', field: 'amount_before_tax'},
      {headerName: 'Total Sales Tax', field: 'total_sales_tax'},
      {headerName: 'Total Amount', field: 'total_amount'},
      {headerName: 'Sales Man', field: 'sales_man'},
    ]
  }

  getDevicesRows() {
    return [
      {headerName: 'PosID', field: 'posid'},
      {headerName: 'Store Name', field: 'store_name'},
      {headerName: 'Store Status', field: 'sotre_status'},
      {headerName: 'Store Address', field: 'store_address'},
      {headerName: 'Ship Code', field: 'ship_code'},
      {headerName: 'Last Update', field: 'last_update'},
      {headerName: 'Risc Version', field: 'version'}
    ]
  }

  getTransactionsRows() {
    return [
      {headerName: 'PosID', field: 'posid'},
      {headerName: 'Transaction ID', field: 'transaction_id'},
      {headerName: 'STRN', field: 'strn'},
      {headerName: 'Invoice Number', field: 'invoice_number'},
      {headerName: 'Operator ID', field: 'oper_id'},
      {headerName: 'DateOfReceipt', field: 'date_of_receipt'},
      {headerName: 'TimeOfReceipt', field: 'time_of_receipt'},
      {headerName: 'Payment Mode', field: 'payment_mode'},
      {headerName: 'Card Type', field: 'card_type'},
      {headerName: 'Total Quantity', field: 'total_quantity'},
      {headerName: 'Amount Before Tax', field: 'amount_before_tax'},
      {headerName: 'Total Sales Tax', field: 'total_sales_tax'},
      {headerName: 'Total Amount', field: 'total_amount'},
      {headerName: 'Sales Man', field: 'sales_man'},
      {headerName: 'Cash Paid', field: 'cash_paid'},
      {headerName: 'Change Cash', field: 'change_cash'},
      {headerName: 'Invoice Type', field: 'invoice_type'},
      {headerName: 'Refusin', field: 'refusin'},
      {headerName: 'Store Code', field: 'store_code'},
      {headerName: 'Totoal Sales Tax Percentage', field: 'total_sales_tax_percentage'},
      {headerName: 'Last Update',field:'last_updated'}]
  }


  getTransactionRows(posid:any, startDate:any, endDate:any) {
    return this.http.get(this.getBaseUrl() + `transactions/${posid}?startDate=${startDate}&endDate=${endDate}`, this.sharedService.getHeaders())
  }

  exportTransactions(posid:any, startDate:any, endDate:any):Observable<any> {
    let options = {
      headers: this.sharedService.getHeaders().headers,
      responseType: 'text' as 'json'
    }
    return this.http.get(this.getBaseUrl() + `transactions/exportToCsv/${posid}?startDate=${startDate}&endDate=${endDate}`, options)
  }
  changeUserPassword(password:any){
    return this.http.post(this.getBaseUrl() + `currentUser/changePassword`,password, this.sharedService.getHeaders())
  }
  getCurrentUser():Observable<any>{
    return this.http.get(this.getBaseUrl() + `currentUser`, this.sharedService.getHeaders())
  }
  updateCurrentUser(user:any){
    return this.http.put(this.getBaseUrl() + `currentUser`, user, this.sharedService.getHeaders())
  }
}
