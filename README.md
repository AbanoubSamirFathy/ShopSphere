# ShopSphere

A modern e-commerce web application built using React and Vite. 
The application allows users to browse products, search by category, view product details, and manage a shopping cart with a clean and responsive user interface.

## Live Demo

https://shop-sphere-rose.vercel.app/

---

# Installation & Running the App

## 1. Clone the repository

```bash
git clone https://github.com/AbanoubSamirFathy/ShopSphere.git
```

## 2. Navigate to the project folder

```bash
cd ShopSphere
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start the development server

```bash
npm run dev
```

## 5. Open the application in your browser

```bash
http://localhost:5173
```

---

# Tools & Libraries Used

- React — Building the user interface
- Vite — Fast development environment and bundler
- React Router DOM — Client-side routing
- Tailwind CSS — Styling and responsive design
- Font Awesome / Lucide React — Icons
- Fetch API — Fetching data from APIs
- React Context API — Global state management
- Fake Store API — Product and category data source

---

# Features

- Browse all products
- View product details
- Search products
- Filter products by category
- Add products to cart
- Responsive design for different screen sizes
- Loading and error handling states

---

# Challenges & Solutions

## 1. Managing Cart State Across Components

### Challenge
Handling cart data between multiple components without prop drilling.

### Solution
Used React Context API to create a global cart state accessible throughout the application.

---

## 2. API Error Handling

### Challenge
The application needed to handle failed API requests gracefully.

### Solution
Implemented loading and error states to improve user experience and prevent crashes.

---

## 3. Organizing the Project Structure

### Challenge
As the project grew, managing files and components became difficult.

### Solution
Separated the project into organized folders such as:

- components
- pages
- context
- services
- routes
- assets

---

## 4. Responsive UI Design

### Challenge
Ensuring the application works properly on mobile, tablet, and desktop screens.

### Solution
Used Tailwind CSS utility classes to create a fully responsive layout.

---

# Project Structure

```bash
src/
│
├── assets/
├── components/
├── context/
├── layouts/
├── pages/
├── routes/
├── services/
├── App.jsx
└── main.jsx
```

---

# Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_BASE_URL=https://fakestoreapi.com
```

---

# Author

Developed by Abanoub Samir