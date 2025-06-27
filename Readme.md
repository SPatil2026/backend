# Video Sharing Platform Backend

A professional Node.js backend API for a video sharing platform with user authentication, video management, and social features.

## 🚀 Features

- **User Management**: Registration, login, profile management with JWT authentication
- **Video Operations**: Upload, view, manage videos with Cloudinary integration
- **Social Features**: Comments, likes, subscriptions, playlists, and tweets
- **Security**: Password hashing, JWT tokens (access & refresh), CORS protection
- **File Handling**: Image and video upload with Multer and Cloudinary
- **Database**: MongoDB with Mongoose ODM and pagination support

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT & bcrypt
- **File Storage**: Cloudinary
- **File Upload**: Multer
- **Environment**: dotenv
- **Development**: Nodemon

## 📁 Project Structure

```
src/
├── controllers/     # Business logic
├── models/         # Database schemas
├── routes/         # API endpoints
├── middlewares/    # Custom middleware
├── utils/          # Helper functions
├── db/            # Database connection
├── app.js         # Express app configuration
└── index.js       # Server entry point
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Cloudinary account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chai-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   PORT=8000
   MONGODB_URI=your_mongodb_connection_string
   CORS_ORIGIN=*
   ACCESS_TOKEN_SECRET=your_access_token_secret
   ACCESS_TOKEN_EXPIRY=1d
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   REFRESH_TOKEN_EXPIRY=10d
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:8000`

## 📚 API Endpoints

### Base URL: `http://localhost:8000/api/v1`

### User Routes
- `POST /users/register` - User registration
- `POST /users/login` - User login
- `POST /users/logout` - User logout
- `GET /users/profile` - Get user profile
- `PATCH /users/avatar` - Update avatar
- `PATCH /users/cover-image` - Update cover image

## 🗃️ Database Models

- **User**: Authentication, profile, watch history
- **Video**: Video content, metadata, ownership
- **Comment**: User comments on videos
- **Like**: Like system for videos/comments
- **Subscription**: User subscription system
- **Playlist**: User-created playlists
- **Tweet**: Social media features

## 🔧 Development

### Scripts

- `npm run dev` - Start development server with nodemon

### Code Structure

- **Controllers**: Handle business logic and API responses
- **Models**: Define database schemas with Mongoose
- **Routes**: Define API endpoints and route handlers
- **Middlewares**: Authentication, file upload, error handling
- **Utils**: Reusable utility functions and helpers

## 🙏 Acknowledgments

- Built as part of the "Chai aur Code" backend development series
- Thanks to the Node.js and Express.js communities