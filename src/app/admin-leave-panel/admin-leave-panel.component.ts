import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-leave-panel',
  templateUrl: './admin-leave-panel.component.html',
  styleUrls: ['./admin-leave-panel.component.css']
})
export class AdminLeavePanelComponent {
  constructor(private api:ApiService){
    api.pendingLeaves().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }

  empId=""
  id=""
  leaveStatus=""
  fromDate=""
  toDate=""
  leaveType=""

  LeaveEvent = (id:any,empId:any, leaveStatus:any, leaveType:any,fromDate:any,toDate:any,) => {
    let data: any = { 
      "empId": empId,
      "id": id,  
      "leaveStatus": leaveStatus, 
      "fromDate": fromDate, 
      "toDate": toDate,
      "leaveType": leaveType  
    }
    console.log(data)
    this.api.empLeaveDecision(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          if(leaveStatus == 1){
            alert("Leave Approved")
          }else{
            alert("Leave Rejected")
          }
          window.location.reload()
        }else{
          alert("failed")
          window.location.reload() 
        }
        
      }
    )
}

 data:any=[]



  
}
