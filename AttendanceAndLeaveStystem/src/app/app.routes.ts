import { provideRouter, Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

import { redirectGuard } from './services/redirect.guard';

import { SupervisorpageComponent } from './pages/supervisorpage/supervisorpage.component';
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component';
import { EditemployeedetailsComponent } from './pages/editemployeedetails/editemployeedetails.component';
import { LeaveRequestPageComponent } from './pages/leave-request-page/leave-request-page.component';
import { AddLeaveRequestPageComponent } from './pages/add-leave-request-page/add-leave-request-page.component';
import { AttendanceLogsPageComponent } from './pages/attendance-logs-page/attendance-logs-page.component';
import { EditLeaveRequestsComponent } from './components/leave-requests/edit-leave-requests/edit-leave-requests.component';
import { DeleteLeaveComponent } from './components/leave-requests/delete-leave/delete-leave.component';
import { CurrentDayAttendancePageComponent } from './pages/current-day-attendance-page/current-day-attendance-page.component';
import { AllLeaveRequestsPageComponent } from './pages/all-leave-requests-page/all-leave-requests-page.component';
import { RespondToLeaveComponent } from './components/supervisordashboard/respond-to-leave/respond-to-leave.component';
import { roleGuard } from './role.guard';
import { UnauthorisedPageComponent } from './pages/unauthorised-page/unauthorised-page.component';
import { RouteNotFoundPageComponent } from './pages/route-not-found-page/route-not-found-page.component';

export const routes: Routes = [
  { path: 'loginn', component: LoginPageComponent, canActivate: [redirectGuard] }, // Apply redirect guard to login page
  { path: 'register', component: RegisterPageComponent, canActivate: [redirectGuard] }, // Apply redirect guard to register page

  {
    path: '',
    component: MainLayoutComponent,
    canActivateChild: [authGuard], // Apply guard to all child routes
    children: [
      { path: '', component: HomePageComponent,canActivate:[roleGuard],data: { role: 'EMPLOYEE' } },
      { path: 'home', component: HomePageComponent,canActivate:[roleGuard],data: { role: 'EMPLOYEE' } },
       
 
      { path: 'supervisorpage', component: SupervisorpageComponent,canActivate:[roleGuard],data: { role: 'SUPERVISOR' } }, // Apply role guard to supervisor page
      { path: 'employeedetailspage', component: EmployeeDetailsComponent,canActivate:[roleGuard],data: { role: 'EMPLOYEE' } },
      { path: 'editemployeedetail', component: EditemployeedetailsComponent,canActivate:[roleGuard],data: { role: 'EMPLOYEE' } },
      { path: 'LeaveRequestPage', component: LeaveRequestPageComponent,canActivate:[roleGuard],data: { role: 'EMPLOYEE' } },
       { path: 'AddLeaveRequestPage', component: AddLeaveRequestPageComponent,canActivate:[roleGuard],data: { role: 'EMPLOYEE' } },
       { path: 'EmployeeAttendenceLogs', component: AttendanceLogsPageComponent,canActivate:[roleGuard],data: { role: 'EMPLOYEE' } },
        { path: 'EditMyLeaveRequests/:id', component: EditLeaveRequestsComponent,canActivate:[roleGuard],data: { role: 'EMPLOYEE' } },
        { path: 'DeleteMyLeaveRequests/:id', component: DeleteLeaveComponent,canActivate:[roleGuard],data: { role: 'EMPLOYEE' } },
        { path: 'CurrentDayPage', component: CurrentDayAttendancePageComponent,canActivate:[roleGuard],data: { role: 'SUPERVISOR' } },
        { path: 'SupervisorViewAllLeaves', component: AllLeaveRequestsPageComponent,canActivate:[roleGuard],data: { role: 'SUPERVISOR' } },
          { path: 'SupervisorRespondToLeaveRequest/:id', component: RespondToLeaveComponent,canActivate:[roleGuard],data: { role: 'SUPERVISOR' } },
           { path: 'unauthorized', component: UnauthorisedPageComponent },
            { path: 'lost', component: RouteNotFoundPageComponent },
          
    ]
  }
];
