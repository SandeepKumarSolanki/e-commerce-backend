<!-- LOGO -->
<p align="center">
  <img src="https://your-logo-or-banner-url.com/logo.png" alt="E-Commerce Logo" width="200" />
</p>

<h1 align="center">🛒 Full Stack E-Commerce Web App</h1>

<p align="center">
  A powerful and modern full-stack E-Commerce platform built with <b>React, Express, MongoDB, and Stripe</b>.<br />
  Includes full Admin Panel, User Authentication, Cloudinary image uploads, Razorpay/Stripe payments, and more.
</p>

<p align="center">
  <a href="https://e-commerce-frontend.vercel.app/">🌐 Live Frontend</a> • 
  <a href="https://e-commerce-backend-fawn-kappa.vercel.app/">🚀 Live Backend API</a> • 
  <a href="#features">📋 Features</a> • 
  <a href="#api-endpoints">🔌 API</a> • 
  <a href="#screenshots">📸 Screenshots</a>
</p>

---

## 📁 Project Structure


---

## 🚀 Tech Stack

**Frontend:**
- React.js
- React Router DOM
- React Toastify
- Axios

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- JWT Authentication
- Bcrypt Password Hashing
- Multer (for file uploads)
- Cloudinary (image hosting)
- Stripe & Razorpay (payment gateways)

---

## 🔐 Features

### 👤 User Features
- Signup / Login with JWT
- Product browsing and filtering
- Secure Checkout with Razorpay & Stripe
- Order history
- Wishlist & cart functionality

### 🛠️ Admin Panel
- Admin login
- Create, update, delete products
- View all users
- Manage orders
- Upload images to Cloudinary

---

## 🧪 API Endpoints (Backend)

| Method | Endpoint                      | Description                 |
|--------|-------------------------------|-----------------------------|
| POST   | `/api/auth/register`         | Register a new user        |
| POST   | `/api/auth/login`            | User login                 |
| GET    | `/api/products`              | Get all products           |
| POST   | `/api/products` (admin)      | Create new product         |
| POST   | `/api/payment/stripe`        | Stripe payment session     |
| POST   | `/api/payment/razorpay`      | Razorpay payment order     |

> Full documentation coming soon via Postman or Swagger.

---

## 🧰 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/e-commerce-app.git
cd e-commerce-app

# Backend setup
cd backend
npm install
touch .env  # Add your environment variables
npm start

# Frontend setup
cd ../frontend
npm install
npm run dev  # or npm start


MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx
STRIPE_SECRET_KEY=xxx
RAZORPAY_KEY_ID=xxx
RAZORPAY_KEY_SECRET=xxx


---

