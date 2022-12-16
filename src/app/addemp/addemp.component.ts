import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {
  empcode=""
  name=""
  designation=""
  email=""
  companyname=""
  phone=""
  username=""
  password=""
  cpassword=""
//-----------------------


  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={
      name : this.name,
      empcode:this.empcode,
      designation:this.designation,
      phone:this.phone,
      email:this.email,
      username:this.username,
      password:this.password
      }
      console.log(data)
      if (this.password==this.cpassword) {
        this.api.addEmp(data).subscribe(
          (response)=>{
          console.log(response)
          alert("Employee Added")
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