import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-emp',
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.css']
})
export class SearchEmpComponent {
  empcode=""
  searchData:any=[]
  constructor(private api:ApiService , private route:Router){

  }
  readvalue=()=>{
    let data1:any ={"empcode":this.empcode}
    console.log(data1)
    this.api.searchEmp(data1).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length == 0) {
          alert("Invalid Employee Code")
          
        } else {
          this.searchData=(response)
          
        }
      }
    ) 
  }
  // deletebtn=(id:any)=> {
  //   let data:any={ "id":id}
  //   this.api.deleteEmp(data).subscribe(
  //     (response:any)=>{
  //       console.log(response)
  //       if (response.status == "success") {
  //         alert("Employee deleted Successfully")
  //         this.route.navigate(['/'])

  //       } else {
  //         alert("Invalid")
  //       }
  }
//   )
// }
// }
