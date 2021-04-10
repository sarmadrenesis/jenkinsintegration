import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

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
  constructor(private apiService: ApiService) { }

  getStoreSearchColDefs() {
    return [
      {headerName: 'POS ID', field: 'posid'},
      {headerName: 'Transaction ID', field: 'transaction_id'},
      {headerName: 'STRN', field: 'strn'},
      {headerName: 'Invoice Number', field: 'invoice_number'},
      {headerName: 'Operator ID', field: 'oper_id'},
      {headerName: 'DateOfReceipt', field: 'date_of_receipt',filter: 'agDateColumnFilter', filterParams: this.filterParams, suppressMenu: false, valueFormatter: (params) => {
        return moment(params.value).format('MM/DD/YYYY')
      }},
      {headerName: 'TimeOfReceipt', field: 'time_of_receipt'},
      {headerName: 'Payment Mode', field: 'payment_mode'},
      {headerName: 'Card Type', field: 'card_type', width: 150},
      {headerName: 'Total Quantity', field: 'total_quantity'},
      {headerName: 'Amount Before Tax', field: 'amount_before_tax'},
      {headerName: 'Total Sales Tax', field: 'total_sales_tax'},
      {headerName: 'Total Amount', field: 'total_amount'},
      {headerName: 'Sales Man', field: 'sales_man'},
    ]
  }

  getSapSearchColDefs(actions) {
    return [
      {headerName: 'USIN', field: 'transaction_id', width: 150},
      {headerName: 'POS ID', field: 'posid', width: 150},
      {headerName: 'Invoice Number', field: 'invoice_number'},
      {headerName: 'Imported At',filter: 'agDateColumnFilter', filterParams: this.filterParams, field: 'last_updated', valueFormatter: (params) => {
        return moment(params.value).format('MM/DD/YYYY h:mm:ss')
      }},
      {headerName: 'Posted At', field: 'posted_at',filter: 'agDateColumnFilter', filterParams: this.filterParams}, 
      {headerName: 'Status', field: 'posted', cellRenderer: 'statusRenderer', width: 200},
      {headerName: 'Billing Date', field: 'date_of_receipt',filter: 'agDateColumnFilter', filterParams: this.filterParams, suppressMenu: false, valueFormatter: (params) => {
        return moment(params.value).format('MM/DD/YYYY h:mm:ss')
      }},
      {headerName: 'Buyer Name', field: 'buyer_name'},
      {headerName: 'Buyer CNIC', field: 'buyer_cnic'},
      {headerName: 'Buyer NTN', field: 'buyer_ntn'},
      {headerName: 'Buyer STRN', field: 'buyer_strn'},
      {headerName: 'Buyer Address', field: 'buyer_address'},
      {headerName: 'Total Sale Value', field: 'amount_before_tax'},
      {headerName: 'TotalQuantity', field: 'total_quantity'},
      {headerName: 'InvoiceType', field: 'invoice_type'},
      {headerName: 'TotalBillAmount', field: 'total_amount'},
      {headerName: 'TotalTaxCharged', field: 'total_sales_tax'},
      {headerName: 'Sold To Party', field: 'sold_to'},
      {headerName: 'Sold To PartyName', field: 'sold_to_party'},
      {headerName: 'Ship To Party', field: 'ship_to_party'},
      {headerName: 'Ship To PartyName', field: 'ship_to_party_name'},
      {headerName: 'Sales Doc.', field: 'sales_order'},
      {headerName: 'Customer PO', field: 'customer_po'},
      {headerName: 'Imported By', field: 'imported_by', width: 240},
      actions == 1 ? {headerName: 'Actions', cellRenderer: 'actionCellRenderer',pinned: 'right', cellRendererParams: {download: true}, filter: false, width: 180, sortable: false} : {hide: true}
    ]
  }

  searchData(body) {
    return this.apiService.add('search', {searchTerm: body})
  }
}
