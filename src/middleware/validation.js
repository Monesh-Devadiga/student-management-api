const Joi = require('joi');

const studentSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100).required().messages({
    'string.empty': 'Name is required',
    'string.min': 'Name must be at least 2 characters',
    'string.max': 'Name cannot exceed 100 characters',
  }),
  email: Joi.string().trim().email().required().messages({
    'string.empty': 'Email is required',
    'string.email': 'Please provide a valid email',
  }),
  age: Joi.number().integer().min(5).max(100).required().messages({
    'number.base': 'Age must be a number',
    'number.min': 'Age must be at least 5',
    'number.max': 'Age cannot exceed 100',
  }),
  course: Joi.string().trim().required().messages({
    'string.empty': 'Course is required',
  }),
  enrollmentDate: Joi.date().optional(),
  status: Joi.string()
    .valid('active', 'inactive', 'graduated')
    .optional()
    .messages({
      'any.only': 'Status must be one of: active, inactive, graduated',
    }),
});

const validateStudent = (req, res, next) => {
  const { error } = studentSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors,
    });
  }

  next();
};

module.exports = { validateStudent };
