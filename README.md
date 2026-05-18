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



⚙️ Installation & Setup


Node.js

MongoDB Atlas account (or local MongoDB)

npm 


🔐 Environment Variables

Create a .env file in the root directory. Refer to .env.example:

PORT=5000

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/filedb

JWT_SECRET=your_super_secret_key

JWT_EXPIRES_IN=7d

NODE_ENV=development


🚀 Run Commands


npm run dev      # Start with nodemon (development)

npm start        # Start in production mode

npm test         # Run tests (if configured)


📡 API Endpoints🔑 Authentication


Register — POST /api/auth/register

Login — POST /api/auth/login


📂 File Management


All file routes require Authorization: Bearer <token> header.

Create File — POST /api/files
Get All Files — GET /api/files


🌐 Deployment
This application is deployed on Render using MongoDB Atlas as the cloud database.

Live API URL: https://securefilesharingapi-2.onrender.com

GitHub Repository: https://github.com/Tarunsai040601/SecureFileSharingAPI/tree/main/Backend
