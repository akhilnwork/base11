"use client";

import { useState } from "react";

// Enhanced validation rules
const validationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s]+$/,
    message: "Name can only contain letters and spaces",
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please enter a valid email address",
  },
  phone: {
    required: true,
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
    message: "Please enter a valid phone number",
  },
  subject: {
    required: true,
    minLength: 3,
    maxLength: 100,
    pattern: /^[a-zA-Z0-9\s\-_.,!?]+$/,
    message: "Subject contains invalid characters",
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000,
    pattern: /^[a-zA-Z0-9\s\-_.,!?@#$%^&*()+={}[\]|\\:";'<>?/~`]+$/,
    message: "Message contains invalid characters",
  },
};

export function useFormValidation() {
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const rules = validationRules[name];
    if (!rules) return [];

    const fieldErrors = [];

    // Required validation
    if (rules.required && !value.trim()) {
      fieldErrors.push(
        `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
      );
    }

    // Skip other validations if field is empty and not required
    if (!value.trim() && !rules.required) {
      return fieldErrors;
    }

    // Length validations
    if (
      value.trim() &&
      rules.minLength &&
      value.trim().length < rules.minLength
    ) {
      fieldErrors.push(
        `${name.charAt(0).toUpperCase() + name.slice(1)} must be at least ${rules.minLength} characters`,
      );
    }

    if (rules.maxLength && value.trim().length > rules.maxLength) {
      fieldErrors.push(
        `${name.charAt(0).toUpperCase() + name.slice(1)} must be less than ${rules.maxLength} characters`,
      );
    }

    // Pattern validation
    if (rules.pattern && value.trim() && !rules.pattern.test(value.trim())) {
      fieldErrors.push(rules.message);
    }

    return fieldErrors;
  };

  const validateForm = (formData) => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((fieldName) => {
      const fieldErrors = validateField(fieldName, formData[fieldName]);
      if (fieldErrors.length > 0) {
        newErrors[fieldName] = fieldErrors;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const clearFieldError = (fieldName) => {
    if (errors[fieldName]) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: [],
      }));
    }
  };

  const clearAllErrors = () => {
    setErrors({});
  };

  const hasFieldError = (fieldName) => {
    return errors[fieldName] && errors[fieldName].length > 0;
  };

  const getFieldErrors = (fieldName) => {
    return errors[fieldName] || [];
  };

  return {
    errors,
    validateField,
    validateForm,
    clearFieldError,
    clearAllErrors,
    hasFieldError,
    getFieldErrors,
    validationRules,
  };
}

export default useFormValidation;
