import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ApiService } from './api.service';
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

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

  // onlineStatusData = new Subject()
  // offlineStatusData = new Subject()
  onlineStatusData = []
  prevOfflineStatusData = []
  offlineStatusData = []
  constructor(private apiService: ApiService) { }

  updateOnlineStatusData(data) {
    // this.onlineStatusData.next(data)
    // this.onlineStatusData = data
    // this.prevOfflineStatusData = data
  }

  updateOfflineStatusData(data) {
    // this.offlineStatusData.next(data)
    this.offlineStatusData = data
  }

  addAlert(data) {
    return this.apiService.add('widgets/alert', data)
  }

  getAlertColDefs() {
    return [
      {headerName: 'POSID', field: 'posid', cellRenderer: 'AlertCellRenderer', width: '300'},
      {headerName: 'Status', field: 'message', cellRenderer: 'AlertCellRenderer', width: '300'},
      {headerName: 'Date/Time', field: 'last_update', cellRenderer: 'AlertCellRenderer', width: '250', filter: 'agDateColumnFilter', filterParams: this.filterParams, valueFormatter: (data) => {
        return moment(data.value).format('MM/DD/YYYY h:mm:ss a')
      }}
    ]
  }

  getAlertRowData() {
    return this.apiService.get('widgets/getAlerts')
  }
}
