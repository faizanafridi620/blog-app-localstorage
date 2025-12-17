# React Blog Application (LocalStorage)

A fully functional blog application built using **React** and **Tailwind CSS**, with data persistence using **LocalStorage**.  
This project implements advanced frontend concepts such as **soft delete with auto purge**, **persistent pagination**, and **search functionality**.

---

## 🛠 Tech Stack

- **React** – Frontend library for building UI components
- **Tailwind CSS** – Utility-first CSS framework for styling
- **React Router** – Client-side routing and navigation
- **Context API** – Global state management for blogs, search, and pagination
- **LocalStorage** – Persistent data storage in the browser

---

## ✨ Features
- Create, edit, delete blogs
- Image upload with preview (stored as Base64)
- Soft delete with auto purge
- Search by **Title** or **Author**
- Pagination with persistence
- Responsive UI (Tailwind CSS)
- LocalStorage based persistence

---


## 🧠 Brain Task Selected
### ✅ Soft Delete + Auto Purge

### Why this approach?
- Soft delete prevents accidental permanent deletion
- Blogs are marked as deleted instead of being immediately removed
- Auto purge permanently removes deleted blogs after a fixed time
- Improves data safety and real-world usability

---

## ⚙️ Logic Task Selected
### ✅ Persistent Pagination

### Why this approach?
- Keeps user on the same page after refresh
- Page number is stored in LocalStorage
- Improves user experience in large blog lists

---

## 🚀 How to Run the Project

- **Clone the repository**
  ```bash
  git clone https://github.com/your-username/react-blog-app-localstorage.git
- **Navigate to project directory**
- ```bash
  cd react-blog-app-localstorage
- **Install dependencies**
  ```bash
  npm install
- **Start the App**
- ```bash
   npm run dev

---

## 🗂 Folder Structure

```
blogApp/
│
├── node_modules/
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── AddBlog.jsx
│   │   ├── BlogCard.jsx
│   │   ├── BlogForm.jsx
│   │   ├── Blogs.jsx
│   │   ├── EditBlog.jsx
│   │   ├── Navbar.jsx
│   │   └── Pages.jsx
│   │
│   ├── context/
│   │   ├── BlogContext.jsx
│   │   └── index.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

