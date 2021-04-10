import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  updateRows$: Subject<string> = new Subject()
  constructor() { }

  updateRowsStatus(value :any) {
    this.updateRows$.next(value)
  }
}
