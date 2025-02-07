I'll create a detailed README.md file for your project:


# User Authentication API

A secure and scalable user authentication API built with Hapi.js, PostgreSQL, and Sequelize ORM. This project implements user registration with email and password, featuring input validation, password hashing, and rate limiting.

## Features

- User registration with email/password
- Input validation using Joi
- Password hashing with bcrypt
- Rate limiting for API endpoints
- PostgreSQL database with Sequelize ORM
- Complete test suite using Jest
- Environment-based configuration

## Tech Stack

- **Framework**: Hapi.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Authentication**: bcrypt
- **Validation**: Joi
- **Testing**: Jest & Supertest
- **Rate Limiting**: hapi-rate-limit

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=5000
HOST=localhost
DB_URL=postgresql://username:password@localhost:5432/database_name
```

## Project Structure

```
├── controllers/
│   └── userController.js    # User-related business logic
├── models/
│   └── User.js             # User database model
├── routes/
│   └── userRoutes.js       # API route definitions
├── validators/
│   └── userValidator.js    # Input validation schemas
├── tests/
│   └── user.test.js        # Test suite
└── index.js                # Application entry point
```

## API Documentation

### Register User
Creates a new user account.

**Endpoint:** `POST /api/users`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Success Response (201):**
```json
{
  "id": "uuid-string",
  "email": "user@example.com"
}
```

**Error Response (400):**
```json
{
  "error": "Error message"
}
```

## Security Features

### Password Security
- Passwords are hashed using bcrypt with a salt round of 10
- Plain text passwords are never stored

### Rate Limiting
- 100 requests per user per hour
- 50 requests per path per hour
- Rate limit headers included in responses

### Input Validation
- Email format validation
- Minimum password length of 8 characters
- Required field validation

## Testing

Run the test suite:
```bash
npm test
```

The test suite includes:
- User registration validation
- Error handling for invalid inputs
- Database interaction tests

## Error Handling

The API implements comprehensive error handling:
- Validation errors (400)
- Database errors (400)
- Rate limiting errors (429)
- Server errors (500)

## Development

Start the development server:
```bash
npm run dev
```

The server will start on `http://localhost:5000` (or the port specified in your .env file)

## Production Deployment

For production deployment:

1. Set appropriate environment variables
2. Build the application:
```bash
npm run build
```

3. Start the production server:
```bash
npm start
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Best Practices

- Use environment variables for configuration
- Follow the error handling patterns
- Write tests for new features
- Document API changes
- Follow the existing code style
