import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  edit:boolean = true

  empcode=""
  searchData:any=[]
  constructor(private api:ApiService , private route:Router){

  }
  readvalue=()=>{
    let data1:any ={"empcode":this.empcode}
    console.log(data1)
    this.api.searchEmp(data1).subscribe(
      (response:any)=>{
        if (response.length == 0) {
          alert("Invalid Employee Code")
          
        } else {
          this.searchData=(response)
          console.log(this.searchData)
          localStorage.setItem("empid",this.searchData[0].id)
          console.log("id=",)
          
        }
      }
    ) 
  }
i = ""
  deletebtn =(i:any)=>{}
  
  editbtn =()=>{
    this.edit = false
  }
  cancelbtn =()=>{
    this.edit = true
  }
  
  name1= ""
  email1= ""
  phone1= ""
  designation1= ""
  username1=""
  password =""
  savebtn = ()=>{
    
    let data:any = {
      id: localStorage.getItem("empid"),
      empCode: this.empcode,
      name: this.name1,
      email: this.email1,
      phone: this.phone1,
      designation: this.designation1,
      username: this.username1,
      password: this.password
   }
   console.log(data)
   this.api.updateEmployee(data).subscribe(
    (response:any)=>{
      if(response.status=="success"){
        alert("Employee data updated Successfully")
        this.edit=true
        this.route.navigate(["/editEmp"])
      }else{
        alert("Error in editing employee")
        this.route.navigate(["/editEmp"])
      }
    }
   )
  }

}
