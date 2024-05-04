# URL Shortener Web Application 

URL Shortener Web Application! This URL Shortener is a powerful tool that allows you to convert long, complex URLs into concise and easy-to-share links. Built with React, Node.js, and MongoDB, our application provides users with a seamless and secure platform to shorten URLs and manage their shortened links efficiently. It allows users to securely login with their passwords using JWT authentication.

## Demo 

Watch a quick video demonstration of My URL Shortener Web Application:

## **1 Featuring** 
   - `Register`: POST Data to MongoDB Database
   - `Login`: GET Data from MongoDB Database
   - `URL Shortening`: You can convert long, complex URLs into concise, easy-to-share links.




## **2 Featuring** 
   - `MongoDB User Data`: View User Data on MongoDB Database
   - `JWT Token Generation`: For Secure user authentication
   - `URL Clicks Count`: You can view the URL link's clicks count.



## **3 Featuring** 
   - `Forgot Password`: Mail Sent to Registered User's Mail ID using SMTP Protocol
   - `JWT Token Generation`: For Secure user authentication
   - `Reset Password`: PUT Data to MongoDB Database
   - `Login`: using New Password
   - `URL Shortening`: You can convert long, complex URLs into concise, easy-to-share links.




## **4 Featuring** 
   - `JWT Token Expiry`: After a Password Reset expiration for enhanced security





## Features 

- **URL Shortening**: Shorten long URLs into concise, easy-to-share links.
- **URL Management**: View, edit, and delete your shortened URLs from your dashboard.
- **Statistics**: Track statistics such as clicks and views for each shortened URL.
- **JWT Authentication**: Secure user authentication with JSON Web Tokens.
- **Password Reset**: Seamless password reset functionality for users.
- **Email Notifications**: Nodemailer integration to send password reset emails.
- **JWT Token Expiry**: Automatic expiration of JWT tokens for enhanced security.
- **Signup**: User registration with email and password.
- **Authorize Email**: Validate email addresses to ensure they are legitimate.
- **Password Validation**: Ensure strong password requirements for user security.
- **React Frontend**: Modern and intuitive user interface built with React.
- **Node.js Backend**: Robust backend server developed with Node.js.
- **MongoDB Integration**: Integration with MongoDB for efficient data storage.






## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/url-shortener.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd url-shortener
   ```

3. **Install Dependencies for the Frontend**:

   ```bash
   cd client
   npm install
   ```

4. **Install Dependencies for the Backend**:

   ```bash
   cd ..
   cd server
   npm install
   ```

5. **Set up Environment Variables**:

   - Create a `.env` file in the `server` directory.
   - Define the following variables:

     ```plaintext
     PORT=8090
     MONGODB_URI=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     ```
## Usage 

1. **Start the Backend Server**:

   ```bash
   cd server
   npm start
   ```

2. **Start the Frontend Development Server**:

   ```bash
   cd client
   npm start
   ```

3. **Visit `http://localhost:3000`** in your web browser to access the application.
