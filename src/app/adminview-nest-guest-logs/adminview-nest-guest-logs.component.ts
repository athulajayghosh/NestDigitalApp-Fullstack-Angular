import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminview-nest-guest-logs',
  templateUrl: './adminview-nest-guest-logs.component.html',
  styleUrls: ['./adminview-nest-guest-logs.component.css']
})
export class AdminviewNestGuestLogsComponent {
  date=""
  constructor(private api:ApiService){
    api.getSecVisLogs().subscribe(
      (response:any)=>{
        console.log(response)
        this.visitorLogs = response
      }
    )
  }

  searchLog = ()=>{
    this.api.searchVisLogs({"date":this.date}).subscribe(
      (response:any)=>{
        this.searchData = response
      }
    )
  }

  visitorLogs:any = []
  searchData:any = []
}
