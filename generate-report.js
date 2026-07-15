const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel,
  Table, TableRow, TableCell, WidthType, AlignmentType,
  BorderStyle
} = require('docx');

const doc = new Document({
  sections: [
    {
      children: [
        new Paragraph({
          text: 'Week 1 – Student Management REST API',
          heading: HeadingLevel.TITLE,
          alignment: AlignmentType.CENTER,
        }),
        new Paragraph({
          text: 'Node.js Development Internship - Internship Report',
          heading: HeadingLevel.HEADING_2,
          alignment: AlignmentType.CENTER,
        }),
        new Paragraph({ spacing: { after: 200 } }),
        new Paragraph({
          text: '1. Introduction',
          heading: HeadingLevel.HEADING_1,
        }),
        new Paragraph(
          'This report documents the implementation of a Student Management REST API developed as part of Week 1 of the Node.js Development Internship. The API provides CRUD (Create, Read, Update, Delete) operations for managing student records using Node.js, Express.js, and MongoDB.'
        ),
        new Paragraph({ spacing: { after: 200 } }),

        new Paragraph({
          text: '2. Technology Stack',
          heading: HeadingLevel.HEADING_1,
        }),
        new Paragraph('• Runtime: Node.js'),
        new Paragraph('• Framework: Express.js'),
        new Paragraph('• Database: MongoDB with Mongoose ODM'),
        new Paragraph('• Validation: Joi'),
        new Paragraph('• Environment Management: dotenv'),
        new Paragraph({ spacing: { after: 200 } }),

        new Paragraph({
          text: '3. Implementation Steps',
          heading: HeadingLevel.HEADING_1,
        }),
        new Paragraph({
          text: '3.1 Project Setup',
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph(
          'Initialized a Node.js project with npm. Installed dependencies: express, mongoose, dotenv, joi, cors, and nodemon as a dev dependency.'
        ),
        new Paragraph({
          text: '3.2 Database Connection',
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph(
          'Configured MongoDB connection using Mongoose. Connection string is stored in the .env file for security and configurability.'
        ),
        new Paragraph({
          text: '3.3 Student Model',
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph(
          'Created a Mongoose schema with fields: name, email (unique), age, course, enrollmentDate, and status (active/inactive/graduated). Includes built-in validation and timestamps.'
        ),
        new Paragraph({
          text: '3.4 Validation Middleware',
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph(
          'Implemented input validation using Joi to ensure all required fields are present and meet the defined constraints before processing requests.'
        ),
        new Paragraph({
          text: '3.5 CRUD Routes',
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph(
          'Created RESTful endpoints: POST (create), GET (list with pagination/filtering), GET/:id (single), PUT/:id (full update), PATCH/:id (partial update), DELETE/:id (remove).'
        ),
        new Paragraph({ spacing: { after: 200 } }),

        new Paragraph({
          text: '4. API Documentation',
          heading: HeadingLevel.HEADING_1,
        }),
        new Paragraph({
          text: 'Base URL: http://localhost:5000/api/students',
        }),
        new Paragraph({ spacing: { after: 100 } }),

        new Table({
          rows: [
            new TableRow({
              children: ['Method', 'Endpoint', 'Description'].map(h => new TableCell({
                children: [new Paragraph({ text: h, bold: true })],
                width: { size: 2000, type: WidthType.DXA },
              })),
            }),
            ...([
              ['POST', '/api/students', 'Create a new student'],
              ['GET', '/api/students', 'Get all students (paginated)'],
              ['GET', '/api/students/:id', 'Get student by ID'],
              ['PUT', '/api/students/:id', 'Full update student'],
              ['PATCH', '/api/students/:id', 'Partial update student'],
              ['DELETE', '/api/students/:id', 'Delete student'],
              ['GET', '/api/students?status=active', 'Filter by status'],
              ['GET', '/api/students?page=1&limit=5', 'Pagination'],
            ]).map(row => new TableRow({
              children: row.map(cell => new TableCell({
                children: [new Paragraph(cell)],
                width: { size: 2000, type: WidthType.DXA },
              })),
            })),
          ],
        }),
        new Paragraph({ spacing: { after: 200 } }),

        new Paragraph({
          text: '5. Testing Results',
          heading: HeadingLevel.HEADING_1,
        }),
        new Paragraph({
          text: '5.1 Create Student (POST)',
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph('• Status: 201 Created'),
        new Paragraph('• Response: Successfully created student record with all fields'),
        new Paragraph({
          text: '5.2 Get All Students (GET)',
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph('• Status: 200 OK'),
        new Paragraph('• Response: Returns paginated list with count and total pages'),
        new Paragraph({
          text: '5.3 Update Student (PUT)',
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph('• Status: 200 OK'),
        new Paragraph('• Response: Fully replaces student data'),
        new Paragraph({
          text: '5.4 Delete Student (DELETE)',
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph('• Status: 200 OK'),
        new Paragraph('• Response: Removes student and returns success message'),
        new Paragraph({
          text: '5.5 Input Validation',
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph('• Status: 400 Bad Request on invalid data'),
        new Paragraph('• Response: Returns array of detailed validation error messages'),
        new Paragraph({ spacing: { after: 200 } }),

        new Paragraph({
          text: '6. Screenshots',
          heading: HeadingLevel.HEADING_1,
        }),
        new Paragraph(
          'Screenshots of Postman testing for each endpoint should be inserted here.'
        ),
        new Paragraph({ spacing: { after: 200 } }),

        new Paragraph({
          text: '7. Conclusion',
          heading: HeadingLevel.HEADING_1,
        }),
        new Paragraph(
          'The Student Management REST API was successfully implemented with all required CRUD operations. Input validation ensures data integrity, and the pagination/filtering features provide efficient data retrieval. The API is production-ready and can be extended with authentication, logging, and additional business logic as needed.'
        ),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(path.join(__dirname, 'Report.docx'), buffer);
  console.log('Report.docx generated successfully');
});
