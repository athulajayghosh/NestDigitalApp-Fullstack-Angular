import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-nest-logs',
  templateUrl: './nest-logs.component.html',
  styleUrls: ['./nest-logs.component.css']
})
export class NestLogsComponent {
  constructor(private api:ApiService,private route:Router){}
  empCode =""

  addEntry = ()=>{
    let data:any = {
      "empCode":this.empCode
    }
    this.api.addEmpEntry(data).subscribe(
      (response:any)=>{
        if(response.status == "success"){
          alert("success")
          window.location.reload()
        }else{
          alert("Employee is in Leave")
        }
      }
    )
  }

  addExit = ()=>{
    let data:any = {
      "empCode":this.empCode
    }
    this.api.addEmpExit(data).subscribe(
      (response:any)=>{
        if(response.status == "success"){
          alert("success")
          window.location.reload()
        }else{
          alert("Employee entry not found")
        }
      }
    )
  }
}
