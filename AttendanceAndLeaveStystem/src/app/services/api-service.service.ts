import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = 'https://employeeattendanceandmgmtsystem.onrender.com/api/auth/login';
  private apiUrlRegistration = 'https://employeeattendanceandmgmtsystem.onrender.com/api/auth/signup';
  private apiUrlMyRole = 'https://employeeattendanceandmgmtsystem.onrender.com/api/auth/me';
  private apiUrlClockin = 'https://employeeattendanceandmgmtsystem.onrender.com/api/employee/logging/clockin';
    private apiUrlClockout = 'https://employeeattendanceandmgmtsystem.onrender.com/api/employee/logging/clockout';
      private apiUrlCurrentStatus = 'https://employeeattendanceandmgmtsystem.onrender.com/api/employee/logging/status';
      private apiUrlGetAllMyLogs = 'https://employeeattendanceandmgmtsystem.onrender.com/api/employee/logging/mylogs';
      private apiUrlEditEmployeeDetails = 'https://employeeattendanceandmgmtsystem.onrender.com/api/employee/logging/Edit';
          private apiUrlEmployeemyDetails = 'https://employeeattendanceandmgmtsystem.onrender.com/api/employee/logging/myDetails';
  private apiUrlAddLeave="https://employeeattendanceandmgmtsystem.onrender.com/api/leave/requestforleave";
  private apiUrlLogout="https://employeeattendanceandmgmtsystem.onrender.com/api/logout";
  private apiUrlEditLeave="https://employeeattendanceandmgmtsystem.onrender.com/api/leave/myrequests/editrequests";
private apiUrlDeleteLeave="https://employeeattendanceandmgmtsystem.onrender.com/api/leave/myrequests/deleterequests";
 private apiUrlGetAllLeaves="https://employeeattendanceandmgmtsystem.onrender.com/api/leave/myrequests";
  private apiUrlGetleavebyId="https://employeeattendanceandmgmtsystem.onrender.com/api/leave/";
  private apiUrlGetAllEmployeesLogs="https://employeeattendanceandmgmtsystem.onrender.com/api/supervisor/overview";
  private apiUrlGetAllEmployeesTodayLogs="https://employeeattendanceandmgmtsystem.onrender.com/api/supervisor/todayAttendance";
  private apiUrlGetAllLeaveRequests="https://employeeattendanceandmgmtsystem.onrender.com/api/supervisor/all";
  private apiUrlUpdateLeaveStatus="https://employeeattendanceandmgmtsystem.onrender.com/api/supervisor/leave/actioning";
  constructor(private http: HttpClient) { }
getLoggedInUserRole(): Observable<any> {
    return this.http.get<any>(this.apiUrlMyRole, { withCredentials: true });
  }
  postData(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, payload, {withCredentials: true });
  }
  EditLeaveRequest(payload: any): Observable<any> {
    return this.http.put<any>(this.apiUrlEditLeave, payload, {withCredentials: true });
  }
   DeleteLeaveRequest(payload: any): Observable<any> {
  return this.http.delete<any>(this.apiUrlDeleteLeave, {
    body: payload,
    withCredentials: true
  });
}
  Logout(): Observable<any> {
    return this.http.get(this.apiUrlLogout,  {withCredentials: true });
  }
  GetLeavebyId(id:Number): Observable<any> {
    return this.http.get(this.apiUrlGetleavebyId+id,  {withCredentials: true });
  }
  
  
 clockIn(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrlClockin, payload, { withCredentials: true });
  }
  clockOut(payload:any): Observable<any> {
    return this.http.post<any>(this.apiUrlClockout, payload, { withCredentials: true });
  }
   getClockStatus(): Observable<any> {
    return this.http.get<any>(this.apiUrlCurrentStatus, { withCredentials: true });
  }

   SupervisorgetAllLeave(): Observable<any> {
    return this.http.get<any>(this.apiUrlGetAllLeaveRequests, { withCredentials: true });
  }
   getTodaysLogs(): Observable<any> {
    return this.http.get<any>(this.apiUrlGetAllEmployeesTodayLogs, { withCredentials: true });
  }
     getallemployeesClockStatus(): Observable<any> {
    return this.http.get<any>(this.apiUrlGetAllEmployeesLogs, { withCredentials: true });
  }
   getAllLeaveRequests(): Observable<any> {
    return this.http.get<any>(this.apiUrlGetAllLeaves, { withCredentials: true });
  }
   getAllMyLogs(): Observable<any> {
    return this.http.get<any>(this.apiUrlGetAllMyLogs, { withCredentials: true });
  }
  postRegistrationData(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrlRegistration, payload);
  }
   getMyEmployeeDetails(): Observable<any> {
    return this.http.get<any>(this.apiUrlEmployeemyDetails, { withCredentials: true });
  }
  
   getSearchInventoryData(): Observable<any> {
    return this.http.get("");
  }
 postInventoryData(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrlAddLeave, payload, { withCredentials: true });
  }
  SupervisorUpdateLeaveStatus(payload: any): Observable<any> {
    return this.http.put<any>(this.apiUrlUpdateLeaveStatus, payload, { withCredentials: true });
  }
   postEditedEmployeeDetails(payload: any): Observable<any> {
    return this.http.put<any>(this.apiUrlEditEmployeeDetails, payload, { withCredentials: true });
  }
  getLoggedinUser(): Observable<any> {
    return this.http.get("");
  }



  }





