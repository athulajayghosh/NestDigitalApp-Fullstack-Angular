import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

addEmp=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addEmployee",dataToSend)
  } 
updateEmployee = (datatoSend:any)=>{
    return this.http.post("http://localhost:8080/editEmployee", datatoSend)
  }
  getLeaveDetails = (datatoSend:any)=>{
    return this.http.post("http://localhost:8080/getEmployeeLeavesbalance", datatoSend)
  }
searchEmp=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/searchEmployee",dataToSend)
  } 
viewallemp=()=>
  {
    return this.http.get("http://localhost:8080/viewAllEmployee")
  } 
addSecurity=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addSecurity",dataToSend)
  } 
viewallsec=()=>
  {
    return this.http.get("http://localhost:8080/viewAllSecurity")
  } 
pendingLeaves=()=>
  {
    return this.http.get("http://localhost:8080/pendingleaves")
  } 
  
fetchemplogin=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/employeeLogin",dataToSend)
  } 
fetchEmpById=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/employeeProfile",dataToSend)
  } 
applyLeave=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/applyLeave",dataToSend)
  } 
  addVisEntry = (datatoSend:any) =>{
    return this.http.post("http://localhost:8080/addVisEntryLog",datatoSend)
  }
  addVisExit = (datatoSend:any) =>{
    return this.http.post("http://localhost:8080/addVisExitLog",datatoSend)
  }
empLeaveStatus=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/getEmployeeLeaves",dataToSend)
  } 
empLeaveDecision=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/updateLeaves",dataToSend)
  } 
securityLogin=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/securityLogin",dataToSend)
  } 
  addEmpEntry = (datatoSend:any)=>{
    return this.http.post("http://localhost:8080/addEmpEntryLog", datatoSend)
  }

  addEmpExit = (datatoSend:any)=>{
    return this.http.post("http://localhost:8080/addEmpExitLog", datatoSend)
  }
  searchLogs = (datatoSend:any)=>{
    return this.http.post("http://localhost:8080/searchEmpLog",datatoSend)
  }

  searchVisLogs = (datatoSend:any)=>{
    return this.http.post("http://localhost:8080/searchVisLog",datatoSend)
  }
  getSecEmpLogs = ()=>{
    return this.http.get("http://localhost:8080/viewSecEmpLog")
  }

  getSecVisLogs = ()=>{
    return this.http.get("http://localhost:8080/viewSecVisLog")
  }



}
