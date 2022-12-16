import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addsecurity',
  templateUrl: './addsecurity.component.html',
  styleUrls: ['./addsecurity.component.css']
})
export class AddsecurityComponent {
  name=""
  email=""
  phone=""
  username=""
  password=""
  cpassword=""

  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={
      name : this.name,
      email:this.email,
      phone:this.phone,
      username:this.username,
      password:this.password
      }
      console.log(data)
      if (this.password==this.cpassword) {
        this.api.addSecurity(data).subscribe(
          (response)=>{
          console.log(response)
          alert("Secutity Added")
          }
        )
          }
      else{
        alert("Password & Confirm Password does't match , Try Again")
        this.password=""
        this.cpassword=""
      }
}
}