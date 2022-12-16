import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallsec',
  templateUrl: './viewallsec.component.html',
  styleUrls: ['./viewallsec.component.css']
})
export class ViewallsecComponent {
  constructor(api:ApiService){
    api.viewallsec().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }

 data:any=[]
}
