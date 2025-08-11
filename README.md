
# 🕒 Clock-In/Out System with Leave Management

A full-stack web application that enables employees to **clock in/out**, manage **leave requests**, and update personal details. It features secure **authentication**, **role-based access**, and robust **form validation**. Built with Spring Boot and deployed on Vercel.

## 🚀 Live Demo

Access the deployed app on [Vercel] https://angular-attendance-and-leave-mgmt-system-ityvh2ksq.vercel.app/loginn

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



### 🗄️ Database



### 🚀 Deployment

- Frontend: Vercel
- Backend: Render : https://employeeattendanceandmgmtsystem.onrender.com/


