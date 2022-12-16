import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminview-nest-logs',
  templateUrl: './adminview-nest-logs.component.html',
  styleUrls: ['./adminview-nest-logs.component.css']
})
export class AdminviewNestLogsComponent {
  date=""
  constructor(private api:ApiService){
    api.getSecEmpLogs().subscribe(
      (response:any)=>{
        console.log(response)
        this.secemplogs = response
      }
    )
  }

  searchLog = ()=>{
    this.api.searchLogs({"date":this.date}).subscribe(
      (response:any)=>{
        this.searchData = response
      }
    )
  }

  secemplogs:any = []
  searchData:any = []
}
