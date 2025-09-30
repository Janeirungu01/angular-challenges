# 🔐 Angular Challenge: Authentication & Data Table

This project is an Angular app built to practice **authentication with route guards** and **data table handling** (pagination, filtering, and sorting) while consuming random apis.  
It is divided into two main tasks:

- **Task 1: Authentication Module**
- **Task 2: Data Table with Filtering & Pagination**

---

## 🚀 Features

### Task 1: Authentication Module
- Login form using **Angular Reactive Forms**
- Input validation for **email** and **password**
- Calls API: [reqres.in/login](https://reqres.in/api/login)
- Stores JWT token in **localStorage/sessionStorage**
- Displays **authenticated status** in navbar
- Logout functionality
- Protects `/dashboard` route using **Angular Guard**

- test credentials username: **eve.holt@reqres.in** password: **cityslicka**

### Task 2: Data Table
- Fetches data from:
  - [JSONPlaceholder Users API](https://jsonplaceholder.typicode.com/users)  
  - or [FakeStore API](https://fakestoreapi.com/)
- Displays data in a **responsive Angular Material table**
- Supports:
  - Pagination
  - Search/Filter
  - Sorting by column headers

---

## 🛠️ Tech Stack
- [Angular](https://angular.io/) 20
- Angular Reactive Forms
- Angular Router (with Guards)
- Angular Material (Paginator, Sort)
- TypeScript
- HTML / CSS

---

## 📂 Project Setup

Clone the repository:
```bash
git clone https://github.com/Janeirungu01/angular-challenges
cd angular-challenges
