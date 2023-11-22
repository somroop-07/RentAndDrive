import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DateRangeDialogComponent } from 'src/app/date-range-dialog/date-range-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent {
  constructor(private router:Router,private dialog:MatDialog){

  }
  onClickFirst(){
    const dialogRef = this.dialog.open(DateRangeDialogComponent);
    //this.router.navigate(["/users"]);

  }
  onClickSecond(){
    this.router.navigate(["/addcardetails"])
  }

}
