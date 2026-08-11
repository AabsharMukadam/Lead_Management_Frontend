# Lead Management System - Frontend

A React-based frontend for a full-stack CRM Lead Management System.

The application connects to a FastAPI backend and MongoDB database to provide authentication, lead management, user management, filtering, sorting, pagination, and dashboard statistics.

---

## 🚀 Features

### Authentication

- User registration
- User login
- JWT authentication
- Secure token storage using browser local storage
- Protected routes
- Automatic authentication handling
- Logout functionality
- Session expiration handling

### Dashboard

- Total leads count
- New leads count
- Contacted leads count
- Qualified leads count
- Won leads count
- Lost leads count
- High-priority leads count
- Recent leads table
- Refresh dashboard data

### Lead Management

- View all leads
- Search leads by:
  - Name
  - Email
  - Company
  - Phone
- Filter leads by:
  - Status
  - Priority
  - Source
- Sort leads by:
  - Created date
  - Updated date
  - Name
  - Company
  - Priority
  - Status
- Ascending and descending sorting
- Pagination
- Create new leads
- Edit existing leads
- Delete leads
- Delete confirmation
- Loading states
- Success and error messages
- Frontend validation

### User Management

- View registered users
- Display user name
- Display user email
- Display user role
- Role badges for administrators and regular users

### User Profile

- Display logged-in user's email
- Display logged-in user's role

---

## 🛠️ Tech Stack

- React
- Vite
- JavaScript
- Axios
- React Router
- Bootstrap
- FastAPI
- MongoDB Atlas
- JWT Authentication

---

## 📂 Project Structure

```text
Lead_Management_Frontend/
│
├── public/
│
├── src/
│   │
│   ├── api/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── LeadCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── Sidebar.jsx
│   │
│   ├── constants/
│   │   └── leadOptions.js
│   │
│   ├── pages/
│   │   ├── CreateLead.jsx
│   │   ├── Dashboard.jsx
│   │   ├── EditLead.jsx
│   │   ├── Leads.jsx
│   │   ├── Login.jsx
│   │   ├── Profile.jsx
│   │   ├── Register.jsx
│   │   └── Users.jsx
│   │
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── leadService.js
│   │   └── userService.js
│   │
│   ├── styles/
│   │   ├── auth.css
│   │   ├── dashboard.css
│   │   └── leads.css
│   │
│   ├── utils/
│   │   └── auth.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
