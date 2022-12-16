import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall-emp',
  templateUrl: './viewall-emp.component.html',
  styleUrls: ['./viewall-emp.component.css']
})
export class ViewallEmpComponent {
  constructor(api:ApiService){
    api.viewallemp().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }

 data:any=[]
}
