const joi = require("joi");
exports. validateFormData= async(req, res, next)=>{
  const { mobileNo, email, password, name } = req.body;
  console.log(req.body)
  const errors = {};
  const schema = joi.object({
    mobileNo: joi
      .number()
      .integer()
      .min(1000000000)
    .max(9999999999)
      .required()
      .label("Mobile Number"),
    email: joi
      .string()
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      .required()
      .label("Email")
      .messages({
        "string.pattern.base": "Please enter a valid email address.",
      }),
    password: joi
      .string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)
      .required()
      .label("Password")
      .messages({
        "string.pattern.base":
          "The password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit.",
      }),
    name: joi.string().required().label("Name"),
  });

  const validation = schema.validate({
    mobileNo,
    email,
    password,
    name,
  });

  if (validation.error) {
    // Process validation errors
    validation.error.details.forEach((error) => {
      const { path, message } = error;
      // Store individual error messages
      errors[path[0]] = message;
    });

    // Attach error messages to the request object
    req.validationErrors = errors;

    // Pass control to the next middleware or return a response with errors
    return res.status(400).json({ errors });
  }

  // No validation errors, proceed to the next middleware or route handler
  next();


}


