# Full Stack Authentication with Next.js and MongoDB

## Overview

This repository demonstrates a full-stack authentication system using Next.js for the frontend and MongoDB for the backend. The authentication flow includes user registration, login, and protected routes.

## Technologies Used

- [Next.js](https://nextjs.org/) - A React framework for building server-rendered and statically generated web applications.
- [MongoDB](https://www.mongodb.com/) - A NoSQL database for scalable and flexible data storage.
- [Node.js](https://nodejs.org/) - A JavaScript runtime for building scalable network applications.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js and npm](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) or MongoDB atlas

## Getting Started

1. **Download this directory:**

  I. Go to this site 'https://download-directory.github.io/'
  II. Paste this link and press enter 'https://github.com/Azalmonawwar/nextjs/tree/main/nextauthapplication'
  III. Extract zip in nextauthapplication

2. **Install dependencies:**

   ```bash
   cd nextauthapplication
   npm install
   ```

3. **Set up MongoDB:**

   - Create a MongoDB database and obtain the connection URI.
   - Update the `.env` file with your MongoDB URI:
   - For other environment variables I have provided sample env.

     ```env
     MONGODB_URI=your_mongodb_uri
     ```
     

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application should now be running on [http://localhost:3000](http://localhost:3000).

## Features

- **User Registration:** Users can sign up with a valid email and password.
- **User Login:** Existing users can log in securely.
- **Protected Routes:** Certain routes are protected and require authentication.
- **Authentication Middleware:** Middleware to check the user's authentication status.

## Folder Structure

- `pages/`: Contains Next.js pages.
- `utils/`: Utility functions and helper files.
- `/src/app/api/`: Backend API routes.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.
