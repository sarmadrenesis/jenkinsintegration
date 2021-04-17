import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/core/popup/popup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCartDialog(){
    alert('test')
    const dialogRef = this.dialog.open(PopupComponent , {
      width: "80%",
      height: "90%",
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
