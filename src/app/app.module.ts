import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddempComponent } from './addemp/addemp.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { SearchEmpComponent } from './search-emp/search-emp.component';
import { ViewallEmpComponent } from './viewall-emp/viewall-emp.component';
import { AddsecurityComponent } from './addsecurity/addsecurity.component';
import { ViewallsecComponent } from './viewallsec/viewallsec.component';
import { EmployeeNavComponent } from './employee-nav/employee-nav.component';
import { EmpProfileComponent } from './emp-profile/emp-profile.component';
import { AddLeaveComponent } from './add-leave/add-leave.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { AdminLeavePanelComponent } from './admin-leave-panel/admin-leave-panel.component';
import { SecurityNavComponent } from './security-nav/security-nav.component';
import { SecurityloginComponent } from './securitylogin/securitylogin.component';
import { NestLogsComponent } from './nest-logs/nest-logs.component';
import { NestGuestLogsComponent } from './nest-guest-logs/nest-guest-logs.component';
import { ViewNestLogsComponent } from './view-nest-logs/view-nest-logs.component';
import { ViewNestGuestLogsComponent } from './view-nest-guest-logs/view-nest-guest-logs.component';
import { AdminviewNestLogsComponent } from './adminview-nest-logs/adminview-nest-logs.component';
import { AdminviewNestGuestLogsComponent } from './adminview-nest-guest-logs/adminview-nest-guest-logs.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';


const myRoute:Routes=[
  {path:"",
  component:HomepageComponent},
  {path:"userlogin",
  component:EmployeeLoginComponent},
  {path:"adminlogin",
  component:AdminLoginComponent},
  {path:"addemp",
  component:AddempComponent},
  {path:"searchemp",
  component:SearchEmpComponent},
  {path:"viewallemp",
  component:ViewallEmpComponent},
  {path:"addsec",
  component:AddsecurityComponent},
  {path:"viewallsec",
  component:ViewallsecComponent},
  {path:"empprofile",
  component:EmpProfileComponent},
  {path:"leavereq",
  component:AddLeaveComponent},
  {path:"leavestat",
  component:LeaveStatusComponent},
  {path:"adminleavepanel",
  component:AdminLeavePanelComponent},
  {path:"seclogin",
  component:SecurityloginComponent},
  {path:"nestLogs",
  component:NestLogsComponent},
  {path:"nestGuestLogs",
  component:NestGuestLogsComponent},
  {path:"viewnestLogs",
  component:ViewNestLogsComponent},
  {path:"viewnestguestLogs",
  component:ViewNestGuestLogsComponent},
  {path:"AdminviewnestLogs",
  component:AdminviewNestLogsComponent},
  {path:"AdminviewnestguestLogs",
  component:AdminviewNestGuestLogsComponent},
  {path:"editEmp",
  component:EditEmployeeComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    EmployeeLoginComponent,
    AdminLoginComponent,
    AddempComponent,
    AdminNavComponent,
    SearchEmpComponent,
    ViewallEmpComponent,
    AddsecurityComponent,
    ViewallsecComponent,
    EmployeeNavComponent,
    EmpProfileComponent,
    AddLeaveComponent,
    LeaveStatusComponent,
    AdminLeavePanelComponent,
    SecurityNavComponent,
    SecurityloginComponent,
    NestLogsComponent,
    NestGuestLogsComponent,
    ViewNestLogsComponent,
    ViewNestGuestLogsComponent,
    AdminviewNestLogsComponent,
    AdminviewNestGuestLogsComponent,
    EditEmployeeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
