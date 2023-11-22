import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import {Car} from '../../car.model'
import { Router } from '@angular/router';
import { OwnerService } from 'src/app/owner/owner.service';
import { CarDetails } from 'src/app/cardetails.model';


@Component({
  selector: 'app-checkoptions',
  templateUrl: './checkoptions.component.html',
  styleUrls: ['./checkoptions.component.css']
})
export class CheckoptionsComponent {
  carArray:Car[]=[];
  carDetailsArray:CarDetails[]=[];
  isClicked:boolean=false;
  constructor(private adminService:AdminService,private router:Router,private service:OwnerService){};
  ngOnInit(): void {
      this.displayList();
  }
  displayList(){
    this.adminService.getCarList().subscribe(cars=>{
      const temp=JSON.stringify(cars);
      let cars1=JSON.parse(temp);
      this.carArray=cars1;
      })
  }
  onClicked(car:any){
    this.isClicked=true;
    if(this.isClicked){
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.service.getCarList(car.id).subscribe(data=>{
          this.carDetailsArray=data;
      });
    } 
    
  }
  onSendEnquiry(){
    
  }

}
