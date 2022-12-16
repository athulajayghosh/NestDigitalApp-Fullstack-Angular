import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor( private route:Router){}
  adminUsername=""
  adminpass=""
  adminValues=()=>{
    let admincredentials:any={
      adminUsername:this.adminUsername,
      adminpass:this.adminpass
    }   
  console.log(admincredentials);
  if (this.adminUsername=="admin" && this.adminpass=="12345") {
    this.route.navigate(["/addemp"])
  } else {
    alert("Invalid Credentials")
  }
} 
}
