# Student Management REST API

Live URL: 
https://student-management-api--moneshkd07.replit.app
 
A Node.js + Express + MongoDB REST API for managing students with full CRUD operations, input validation and search/filter capabilities.
  
## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Validation:** Joi
- **Environment:** dotenv (.env)
 
## Setup

1. **Clone / Extract** the project
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment:**
   - Copy `.env.example` to `.env`
   - Update `MONGODB_URI` with your MongoDB connection string
   - Set desired `PORT` (For the localhost)

4. **Start the server:**
   ```bash
   npm start        # production
   npm run dev      # development (with nodemon)
   ```

5. Server runs at `http://localhost:5000`
 
## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/students` | Create a new student |
| GET | `/api/students` | Get all students |
| GET | `/api/students/:id` | Get a single student by ID |
| PUT | `/api/students/:id` | Update a student (full replace) |
| PATCH | `/api/students/:id` | Partially update a student |
| DELETE | `/api/students/:id` | Delete a student |

### Query Parameters (GET all)

- `page` - Page number (default: 1)
- `limit` - Results per page (default: 10)
- `status` - Filter by status (active / inactive / graduated)
- `course` - Search by course name (case-insensitive)

## Request Body Schema
Input Validation
```json
{
  "name": "string (2-100 chars, required)",
  "email": "valid email (required, unique)",
  "age": "number (5-100, required)",
  "course": "string (required)",
  "status": "active | inactive | graduated (default: active)"
}
```
 
## Sample Request

```bash
curl -X POST http://localhost:5000/api/students \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Smith","email":"jane@example.com","age":22,"course":"Engineering"}'
```

## Postman Collection

Import `postman_collection.json` into Postman to test all endpoints.



---------------------------------------------------------------------------------------------------------------------
Created By: 
  [@Monesh Devadiga](https://github.com/Monesh-Devadiga)
