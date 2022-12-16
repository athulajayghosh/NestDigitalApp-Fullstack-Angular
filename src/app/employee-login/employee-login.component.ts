import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  username=""
  password=""
  userdata:any={}
  constructor(private api:ApiService , private route:Router){

  }
  readvalue=()=>{
    let data={"username" : this.username,"password":this.password}
    console.log(data)
    this.api.fetchemplogin(data).subscribe(
      (response:any)=>{
        this.username=""
        this.password=""
        if (response.status == "success") {
          let userid=response.id
          console.log(userid)
          localStorage.setItem("userid",userid)

          this.route.navigate(["/empprofile"])
        } else {
          alert(response.message)
        }   

      }
    )}
}
