# React Authentication Landing Page

A modern, responsive **React-based landing page application** with a complete **authentication system**, including **Sign Up, Sign In, Remember Me**, **protected routes**, and **Dark/Light mode toggle**.  
This project demonstrates real-world React concepts, clean UI/UX, and frontend best practices.

---

## 🚀 Features Implemented

### 🔐 Authentication System
- **Sign Up**
  - User registration with input validation
  - Prevents duplicate accounts
- **Sign In**
  - Email & password authentication
  - Validates credentials against registered users
- **Remember Me**
  - Persists login using `localStorage`
  - Session-based login using `sessionStorage`
- **Logout**
  - Clears authentication state securely
- **Protected Routes**
  - Landing page accessible **only to authenticated users**

---

### 🌗 Dark / Light Mode
- Toggle available in the **top navigation bar**
- User preference stored in `localStorage`
- Automatically restored on page refresh
- Proper contrast handling for readability

---

### 🖥️ Landing Page
- **Hero Section**
  - App name, tagline, and call-to-action buttons
- **Features Section**
  - Highlights key functionalities
- **Testimonials Section**
  - Sample user feedback
- **Footer**
- Fully **responsive** for desktop, tablet, and mobile devices

---

### 🎨 UI & UX
- Card-based layouts
- Clean typography & spacing
- Modern color palette
- Smooth hover effects
- Professional SaaS-style design

---

## 🛠️ Technologies Used

- **React.js**
- **React Router DOM**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **Local Storage & Session Storage**
- **Vite** (for fast development & bundling)

---

## 📂 Project Structure
src/
│── components/
│ └── ProtectedRoute.jsx
│
│── context/
│ └── AuthContext.jsx
│
│── pages/
│ ├── SignIn.jsx
│ ├── SignUp.jsx
│ └── Landing.jsx
│
│── styles/
│ ├── auth.css
│ └── landing.css
│
│── App.jsx
│── main.jsx



---

## ▶️ How to Run the Project

git clone https://github.com/pratyakshi843/react-auth-landing

cd react-auth-landing

2️⃣ Install dependencies
npm install
3️⃣ Start the development server
npm run dev
4️⃣ Open in browser
http://localhost:5173
