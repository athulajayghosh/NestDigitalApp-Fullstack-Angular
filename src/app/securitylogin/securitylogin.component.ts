import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-securitylogin',
  templateUrl: './securitylogin.component.html',
  styleUrls: ['./securitylogin.component.css']
})
export class SecurityloginComponent {
  username=""
  password=""
  userdata:any={}
  constructor(private api:ApiService , private route:Router){

  }
  readvalue=()=>{
    let data={"username" : this.username,"password":this.password}
    console.log(data)
    this.api.securityLogin(data).subscribe(
      (response:any)=>{
        this.username=""
        this.password=""
        if (response.status == "success") {
          let userid=response.userid
          console.log(userid)
          localStorage.setItem("userid",userid)

          this.route.navigate(["/nestLogs"])
        } else {
          alert(response.message)
        }   

      }
    )}
}
