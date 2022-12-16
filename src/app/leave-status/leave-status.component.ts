import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-status',
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.css']
})
export class LeaveStatusComponent {
  userid:any=""
  constructor(api:ApiService){
    this.userid=localStorage.getItem("userid")
    let data1:any ={"id":this.userid}
    api.empLeaveStatus(data1).subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }

  readAccept=()=>
  {
    

          }


 data:any=[]
}
