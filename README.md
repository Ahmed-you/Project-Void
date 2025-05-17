# 📚 Project Void - Library Web App

A simple, mobile-first library website that allows users to browse books, place orders, and leave messages. Built with Node.js, Express, and PostgreSQL.

---

## 🚀 Features

* View detailed book listings
* Order copies of books
* Submit guest messages to the admin
* Mobile-first design
* Server-side and client-side testing

---

## 🧱 Database Schema (PostgreSQL)

### 📝 Table: `notes`

Stores guest messages sent to the admin.

| Column Name | Type      | Description            |
| ----------- | --------- | ---------------------- |
| note\_id    | SERIAL PK | Unique note identifier |
| email       | TEXT      | Guest email address    |
| message     | TEXT      | Message content        |

### 📖 Table: `books`

Stores metadata and details of each book.

| Column Name | Type      | Description                    |
| ----------- | --------- | ------------------------------ |
| book\_id    | SERIAL PK | Unique book ID                 |
| title       | TEXT      | Title of the book              |
| cover\_url  | TEXT      | Cover image URL                |
| images      | TEXT\[]   | Array of additional image URLs |
| category    | TEXT      | Classification or genre        |
| price\_usd  | NUMERIC   | Price in USD                   |
| price\_egp  | NUMERIC   | Price in EGP                   |
| language    | TEXT      | Language of the book           |
| pages       | INT       | Number of pages                |
| isbn        | TEXT      | ISBN number                    |
| size\_cm    | TEXT      | Size in centimeters            |
| size\_inch  | TEXT      | Size in inches                 |

### 🛒 Table: `orders`

Stores purchase requests from users.

| Column Name | Type      | Description                      |
| ----------- | --------- | -------------------------------- |
| order\_id   | SERIAL PK | Unique order ID                  |
| username    | TEXT      | Name of buyer                    |
| phone       | TEXT      | Phone number                     |
| location    | TEXT      | General location (city, area)    |
| address     | TEXT      | Exact address                    |
| book\_id    | INT FK    | Book being ordered               |
| quantity    | INT       | Number of copies                 |
| notes       | TEXT      | Additional delivery instructions |

### 🔑 Table: `admins`

Stores admin login credentials.

| Column Name | Type      | Description     |
| ----------- | --------- | --------------- |
| admin\_id   | SERIAL PK | Unique admin ID |
| name        | TEXT      | Admin username  |
| password    | TEXT      | Hashed password |

---

## 🧽 User Journey

### 🏠 Homepage

* User sees intro mission and welcome statement
* Directed to explore book sections

### 📚 Explore Books

* Users browse through a catalog of books
* Can click to view detailed info about a selected book
* Options to download book info (PDF) or place an order

### 👤 About Page

* Displays a short bio/profile for the admin/editor

### 📬 Contact Form

* Users fill in email and message to contact the admin

---

## ⚙️ Architecture Overview

```
Frontend         Backend             Database (PostgreSQL on Heroku)
----------       -----------------   -------------------------------
HTML/CSS/JS  ->  Node.js + Express  ->  books, notes, orders, admins tables
                  |
                  --> GET/POST endpoints
```

---

## 🦪 Testing Plan

* Use **Supertest** for route testing:

  * `GET /books`
  * `POST /orders`
  * `POST /notes`
* Unit test pure functions:

  * Server-side (e.g., form validation, sanitization)
  * Client-side (e.g., UI logic, field validators)

---

## 🔐 Security Practices

* Use parameterized queries via `pg` to prevent SQL injection

---

## 🛠 Build Scripts

Include a `build.sql` file or script with:

```sql
CREATE TABLE books (...);
CREATE TABLE notes (...);
CREATE TABLE orders (...);
CREATE TABLE admins (...);
```

Use a setup command in `package.json`:

```json
"scripts": {
  "build-db": "psql -f build.sql"
}
```

---

## 🌐 Deployment
* Hosted on githun action
---
