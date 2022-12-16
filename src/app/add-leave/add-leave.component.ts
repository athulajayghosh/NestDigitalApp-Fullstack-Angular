import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.css']
})

export class AddLeaveComponent {
leaveDetails:any =[]
empId =""
leaveStatus =""
fromDate =""
toDate =""
remarks =""
leaveType =""

constructor(private api:ApiService){
  let id = localStorage.getItem("userid")
  api.getLeaveDetails({"id":id}).subscribe(
    (response:any)=>{
      this.leaveDetails = response
      console.log(this.leaveDetails)
    }
  )
}

  readleaveData=()=>{
    let data:any={
      empId : localStorage.getItem("userid"),
      leaveStatus : "0",
      fromDate : this.fromDate,
      toDate : this.toDate,
      remarks : this.remarks,
      leaveType : this.leaveType
    }

    this.api.applyLeave(data).subscribe(
      (response)=>{
      console.log(response)
      alert("Leave Applied")
      this.leaveStatus =""
      this.fromDate =""
      this.toDate =""
      this.remarks =""

      })


    }

}
