import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent {
  userid:any=""
  constructor(private api:ApiService){
    this.userid=localStorage.getItem("userid")
    let data:any ={"id":this.userid}
  
   this.api.fetchEmpById(data).subscribe(
    (response:any)=>{
      this.userdata=response
    }
   )
}  

userdata:any=[]
}
