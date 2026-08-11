# Lead Management System

A full-stack Lead Management System built with **FastAPI, React, MongoDB Atlas, and JWT Authentication**.

The application provides a CRM-style interface for managing leads, users, authentication, lead status, priorities, search, filtering, sorting, pagination, and dashboard statistics.

---

## 🚀 Features

### Authentication & Authorization

* User registration
* User login
* JWT-based authentication
* Protected routes
* Role-based user information
* Secure password hashing
* Logout functionality

### Lead Management

* Create new leads
* View all leads
* View individual leads
* Update leads
* Delete leads
* Search leads
* Filter leads by:

  * Status
  * Priority
  * Source
* Sort leads by:

  * Created date
  * Updated date
  * Name
  * Company
  * Priority
  * Status
* Ascending and descending sorting
* Pagination

### Dashboard

The dashboard provides an overview of the lead management system.

Statistics include:

* Total Leads
* New Leads
* Contacted Leads
* Qualified Leads
* Won Leads
* Lost Leads
* High Priority Leads

The dashboard also displays the five most recently created leads.

### User Management

* View registered users
* Display user name
* Display user email
* Display user role
* Admin/user role badges
* User profile page

### Frontend UI

* Responsive dashboard layout
* Header
* Sidebar navigation
* Protected pages
* Loading states
* Error messages
* Success messages
* Responsive tables
* Bootstrap-based UI
* Clean and consistent page design

---

## 🛠️ Tech Stack

### Backend

* Python
* FastAPI
* MongoDB Atlas
* PyMongo
* Pydantic
* JWT Authentication
* Passlib / bcrypt

### Frontend

* React
* Vite
* JavaScript
* Axios
* React Router
* Bootstrap

### Database

* MongoDB Atlas

---

## 📂 Project Structure

### Backend

```text
Lead_Management_System/
│
├── app/
│   ├── api/
│   │   └── v1/
│   │       ├── auth.py
│   │       ├── leads.py
│   │       └── users.py
│   │
│   ├── core/
│   │   ├── config.py
│   │   ├── database.py
│   │   ├── dependencies.py
│   │   └── security.py
│   │
│   ├── models/
│   │   ├── lead.py
│   │   └── user.py
│   │
│   ├── repositories/
│   │   ├── lead_repository.py
│   │   └── user_repository.py
│   │
│   ├── schemas/
│   │   ├── lead.py
│   │   └── user.py
│   │
│   ├── services/
│   │   ├── auth_service.py
│   │   ├── lead_service.py
│   │   └── user_service.py
│   │
│   └── main.py
│
├── .env
├── .gitignore
├── requirements.txt
└── README.md
```

### Frontend

```text
Lead_Management_Frontend/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── Sidebar.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Leads.jsx
│   │   ├── CreateLead.jsx
│   │   ├── EditLead.jsx
│   │   ├── Users.jsx
│   │   └── Profile.jsx
│   │
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── leadService.js
│   │   └── userService.js
│   │
│   ├── utils/
│   │   └── auth.js
│   │
│   ├── constants/
│   │   └── leadOptions.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

---

## 🌐 API Versioning

All backend API endpoints are available under:

```text
/api/v1
```

### Authentication

```text
POST /api/v1/auth/register
POST /api/v1/auth/login
```

### Users

```text
GET /api/v1/users/me
GET /api/v1/users
```

### Leads

```text
POST /api/v1/leads
GET /api/v1/leads
GET /api/v1/leads/{lead_id}
PUT /api/v1/leads/{lead_id}
DELETE /api/v1/leads/{lead_id}
```

The leads listing endpoint supports search, filtering, sorting, and pagination.

---

## ⚙️ Backend Setup

Open the backend project in VS Code.

Create and activate a virtual environment:

```bash
python -m venv venv
```

### Windows

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file and configure the required environment variables.

Example:

```env
DATABASE_NAME=lead_management
SECRET_KEY=your_secret_key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

Start the FastAPI server:

```bash
uvicorn app.main:app --reload
```

Backend will run at:

```text
http://127.0.0.1:8000
```

Swagger documentation:

```text
http://127.0.0.1:8000/docs
```

---

## ⚛️ Frontend Setup

Open the frontend project in VS Code.

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

The frontend will normally run at:

```text
http://localhost:5173
```

---

## 🔐 Authentication Flow

1. User registers an account.
2. User logs in using email and password.
3. Backend validates the credentials.
4. Backend generates a JWT access token.
5. Frontend stores the token in `localStorage`.
6. Protected routes check whether the user is authenticated.
7. The user's email and role are extracted from the JWT.
8. User can access the dashboard and lead management features.
9. Logout removes the stored authentication information.

---

## 📊 Dashboard

The dashboard provides a quick overview of the current leads.

It displays:

```text
Total Leads
New Leads
Contacted Leads
Qualified Leads
Won Leads
Lost Leads
High Priority Leads
```

It also displays the five most recently created leads.

---

## 👥 User Interface

The application contains:

### Header

* Application name
* Logged-in user information
* Logout button

### Sidebar

* Dashboard
* Leads
* Create Lead
* Users
* Profile
* Logout

### Pages

* Login
* Register
* Dashboard
* Leads
* Create Lead
* Edit Lead
* Users
* Profile

---

## 🧪 Testing

The API can be tested using FastAPI Swagger:

```text
http://127.0.0.1:8000/docs
```

Frontend functionality can be tested through:

```text
http://localhost:5173
```

Important features to test:

* Registration
* Login
* Logout
* Dashboard statistics
* Create lead
* Edit lead
* Delete lead
* Search
* Filtering
* Sorting
* Pagination
* Users page
* Profile page
* Protected routes

---

## 🔒 Security

* Passwords are hashed before being stored.
* JWT tokens are used for authentication.
* Protected API endpoints require authentication.
* Frontend protected routes prevent unauthenticated access.
* Sensitive configuration values are stored in `.env`.
* `.env` should not be committed to GitHub.

---

## 📌 Project Status

The Lead Management System is currently implemented with:

* Authentication
* JWT authorization
* Lead CRUD
* Search
* Filtering
* Sorting
* Pagination
* Dashboard statistics
* User management
* User profile
* Protected routes
* Responsive UI
* Bootstrap styling

The core Lead Management System functionality and frontend UI are complete.

```
```
