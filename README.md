# 🚀 CRM Lead Management System – Frontend

A modern and responsive **CRM Lead Management System frontend** built using **React.js, Vite, Axios, React Router, and Bootstrap**.

This application provides a complete frontend interface for managing CRM leads, users, authentication, profiles, and role-based navigation. It communicates with a **FastAPI backend** through REST APIs and uses **JWT authentication** for secure access to protected resources.

---

# 📌 Table of Contents

- [📖 Project Overview](#-project-overview)
- [🎯 Project Objectives](#-project-objectives)
- [✨ Features](#-features)
- [🔐 Authentication Features](#-authentication-features)
- [👤 User Profile](#-user-profile)
- [🛡️ Role-Based UI](#️-role-based-ui)
- [📊 Lead Management](#-lead-management)
- [🔄 Authentication Flow](#-authentication-flow)
- [🔒 API Authentication](#-api-authentication)
- [⚠️ 401 Unauthorized Handling](#️-401-unauthorized-handling)
- [🛣️ Frontend Routes](#️-frontend-routes)
- [🧱 Technology Stack](#-technology-stack)
- [📁 Project Structure](#-project-structure)
- [⚙️ Environment Configuration](#️-environment-configuration)
- [📦 Installation](#-installation)
- [▶️ Running the Application](#️-running-the-application)
- [🔑 Login](#-login)
- [👥 User Registration](#-user-registration)
- [📈 Dashboard](#-dashboard)
- [👤 Profile Page](#-profile-page)
- [👨‍💼 User Management](#-user-management)
- [📋 Lead Management](#-lead-management-1)
- [➕ Create Lead](#-create-lead)
- [✏️ Edit Lead](#️-edit-lead)
- [🗑️ Delete Lead](#️-delete-lead)
- [🔎 Search Leads](#-search-leads)
- [🎯 Filter Leads](#-filter-leads)
- [↕️ Sorting](#️-sorting)
- [📄 Pagination](#-pagination)
- [🚪 Logout](#-logout)
- [⏳ Loading State](#-loading-state)
- [🔐 Protected Routes](#-protected-routes)
- [📡 Backend Integration](#-backend-integration)
- [🧪 Testing](#-testing)
- [✅ Authentication Testing](#-authentication-testing)
- [🐛 Error Handling](#-error-handling)
- [📱 Responsive Design](#-responsive-design)
- [🔄 Application Flow](#-application-flow)
- [📊 Project Status](#-project-status)
- [🚧 Future Improvements](#-future-improvements)
- [📚 Learning Outcomes](#-learning-outcomes)
- [👨‍💻 Developer](#-developer)

---

# 📖 Project Overview

The **CRM Lead Management System** is a web-based application designed to manage and organize business leads.

The frontend provides an interactive user interface where authenticated users can:

- Login securely
- Logout securely
- View the CRM dashboard
- View leads
- Create leads
- Edit leads
- Delete leads
- Search leads
- Filter leads
- Sort leads
- Navigate through paginated lead records
- View their profile
- View users
- Access role-specific navigation
- Manage their authentication session

The frontend communicates with the FastAPI backend using REST APIs.

---

# 🎯 Project Objectives

The main objectives of the project are:

- Build a professional CRM frontend
- Implement JWT-based authentication
- Create protected application routes
- Centralize authentication state
- Connect React with FastAPI
- Implement CRUD operations for leads
- Implement search, filtering, sorting and pagination
- Create a reusable application layout
- Implement role-based UI
- Display current user information
- Handle expired authentication sessions
- Provide a clean and responsive user experience

---

# ✨ Features

## 🔐 Authentication

- User login
- User registration interface
- JWT token authentication
- Authentication context using React Context API
- Persistent authentication state
- Automatic dashboard redirection after login
- Automatic login redirection for unauthenticated users
- Logout functionality
- Authentication loading state
- Current user retrieval
- Session expiration handling
- Centralized API authentication

---

## 📊 Dashboard

The dashboard provides an overview of the CRM application.

It includes:

- Application header
- Current user information
- Sidebar navigation
- CRM navigation
- Lead management access
- User management access for administrators
- Profile access
- Logout functionality

---

## 📋 Lead Management

Users can manage CRM leads through the frontend.

Lead functionality includes:

- View leads
- Create leads
- Edit leads
- Delete leads
- Search leads
- Filter leads
- Sort leads
- Pagination

---

## 👤 User Profile

The profile page displays the currently authenticated user's information.

Profile information includes:

- Full Name
- Email
- Phone Number
- Role
- Account Status

The information is retrieved from the backend using:

```text
GET /api/v1/users/me