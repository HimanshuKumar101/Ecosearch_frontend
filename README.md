# Ecosearch Assignment

This project is a simple Express server that handles newsletter signups and sends a confirmation email to the user.

## Features

- Handles newsletter signups via a POST endpoint
- Sends a confirmation email to the user using Nodemailer
- Validates email addresses
- Enables CORS for all routes

## Setup

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd Ecosearch-Assignment
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your email credentials:
   ```env
   EMAIL=your-email@gmail.com
   PASSWORD=your-email-password
   ```

4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### POST /join-waitlist

Handles newsletter signups and sends a confirmation email to the user.

#### Request

- Body: `application/x-www-form-urlencoded`
  - `email` (string): The email address of the user.

#### Response

- `200 OK`: If the email was sent successfully.
  ```json
  {
    "success": true,
    "message": "Thank you for joining our waitlist!"
  }
  ```
- `400 Bad Request`: If the email address is invalid.
  ```json
  {
    "success": false,
    "message": "Invalid email address."
  }
  ```
- `500 Internal Server Error`: If there was an error sending the email.
  ```json
  {
    "success": false,
    "message": "Error sending email."
  }
  ```

## Middleware

- `body-parser`: Parses incoming request bodies.
- `cors`: Enables Cross-Origin Resource Sharing (CORS) for all routes.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

