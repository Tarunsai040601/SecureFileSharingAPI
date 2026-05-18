# SecureFileSharingAPI

🔐 Secure File Sharing API
A robust backend application built with Node.js, Express.js, MongoDB, and JWT Authentication that enables secure user authentication and file metadata management with role-based access control.


📌 Project Overview
This API provides:

Secure user registration and login with JWT-based authentication

Password encryption using bcrypt

File metadata CRUD operations (Create, Read, Update, Delete)

Role-based authorization (Admin / User)

Search and pagination support

Soft delete and ownership-based access control

Global error handling and input validation


🛠️ Technology Stack

Node.js

Express.js

MongoDB + MongooseDatabase and 

Authentication 

bcryptjs



📁 Folder Structure


src/
├── config/
│   └── db.js                  # MongoDB connection
├── controllers/
│   ├── authController.js      # Register & Login logic
│   └── fileController.js      # File CRUD logic
├── middleware/
│   ├── authMiddleware.js      # JWT verification
│   ├── roleMiddleware.js      # Admin/User role check
│   └── validationMiddleware.js# express-validator rules
├── models/
│   ├── User.js                # User schema
│   └── File.js                # File schema
├── routes/
│   ├── authRoutes.js          # /api/auth/*
│   └── fileRoutes.js          # /api/files/*
├── utils/
│   └── errorHandler.js        # Global error handler
└── server.js                  # App entry point
