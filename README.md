
# 🕒 Clock-In/Out System with Leave Management

A full-stack web application that enables employees to **clock in/out**, manage **leave requests**, and update personal details. It features secure **authentication**, **role-based access**, and robust **form validation**. Built with Spring Boot Angular 19 and deployed on Vercel.

## 🚀 Live Demo

Access the deployed app on [Vercel] (https://angular-attendance-and-leave-mgmt-system-g1jv98d71.vercel.app)

## 🔐 Key Features

### 👤 Authentication & Roles
- Secure login and registration via Spring Security
- Role-based access:
  - **Employee**
  - **Supervisor**

### 🕒 Clock-In/Out
- Employees can:
  - Clock in and out daily
  - View their own attendance logs

### 📅 Leave Management
- Employees can:
  - Submit leave requests
  - View status of requests
- Supervisors can:
  - View all employee leave requests
  - Approve or decline requests with reasons

### 🧾 Employee Profile
- Employees can:
  - Update personal details (e.g., name, contact info)

### 📊 Supervisor Dashboard
- View all employee clock-in/out logs
- Manage leave approvals with contextual feedback

### ✅ Form Validation
- **Leave Requests**:
  - Start date must be before end date
  - Past dates are not allowed
- **Registration Form**:
  - Name: letters only
  - Email: valid format
  - Password: minimum length and complexity
  - Required fields must be filled

## 🧰 Tech Stack

### 🔧 Backend

- **Spring Boot**
- **Spring Security**
- **Spring Data JPA**
- **Hibernate ORM**
- **RESTful Controllers**
- **Service Layer Architecture**
- **Seeder** for initial data population
- **CORS Configuration** for frontend-backend communication

### 🎨 Frontend-Angular


- **Angular Framework**
- **RxJS** for reactive programming
- **Routing** with lazy-loaded modules
- **Auth Guards** and **Role Guards** for route protection
- **Reactive Forms** with validation
- **Services** for API communication
- **Modular Pages** (Login, Dashboard, Profile, Leave, etc.)
- **Reusable Components** (Navbar, Sidebar, Form Inputs, etc.)
- - **Responsive to all Device Screen Sizes including Mobile Phones and Tablets**



### 🗄️ Database
SQL


### 🚀 Deployment

- Frontend: Vercel
- Backend: Render : https://employeeattendanceandmgmtsystem.onrender.com/
- 
## For Employee 
Register with your own credentials then login.(Allows concurrent login)
1. Clock in/out with reasons(applicable only if you clock in after 8am or if you clock out before pm  )
2. View your Attendance Records
3. View your Leave Requests Records with your Reasons and Supervisors reasons for either approving or declining your leave requests
4. Add/Edit/Delete your Leave Requests.
5. View/Edit your Personal details.
6. Logout
   
## Seeded Credentials for supervisor:
Email: supervisor@company.com
Password: supersecure
1.Login
2.View All Employees Attendance Records(All-time)
3.View Only Attendance for Today.
3. View All Requests Leave.
4.View Each Individual leave request (with more details about it)
5. Respond to each Leave Request(APPROVE/REJECT with reason)
6.Logout

### 🚧  Supervisors will be able to export attendance logs and leave request records in:

## CSV format for spreadsheet analysis and/or PDF format for printable reports(coming in future)





