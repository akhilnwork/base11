"use client";
import { useState } from "react";
import ButtonAction from "../button/ButtonAction";
import { cn } from "@/utils/cn";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // Common class names
  const baseInputClasses =
    "w-full px-6 py-4 rounded-[40px] h-[50px] border transition-all duration-200 focus:outline-none focus:ring-2";
  const baseTextareaClasses =
    "w-full px-6 py-4 rounded-[30px] border transition-all duration-200 focus:outline-none focus:ring-2 resize-none";

  const normalInputClasses =
    "bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-blue-200";
  const errorInputClasses =
    "bg-red-50 border-red-300 focus:border-red-500 focus:ring-red-200";

  // Validation rules
  const validationRules = {
    name: {
      required: true,
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-Z\s]+$/,
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    phone: {
      required: true,
      pattern: /^[\+]?[1-9][\d]{0,15}$/,
    },
    subject: {
      required: true,
      minLength: 3,
      maxLength: 100,
    },
    message: {
      required: true,
      minLength: 10,
      maxLength: 1000,
    },
  };

  // Validate individual field
  const validateField = (name, value) => {
    const rules = validationRules[name];
    const fieldErrors = [];

    if (rules.required && !value.trim()) {
      fieldErrors.push(
        `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
      );
    }

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

    if (rules.pattern && !rules.pattern.test(value.trim())) {
      switch (name) {
        case "email":
          fieldErrors.push("Please enter a valid email address");
          break;
        case "phone":
          fieldErrors.push("Please enter a valid phone number");
          break;
        case "name":
          fieldErrors.push("Name can only contain letters and spaces");
          break;
        default:
          fieldErrors.push(
            `${name.charAt(0).toUpperCase() + name.slice(1)} format is invalid`,
          );
      }
    }

    return fieldErrors;
  };

  // Validate all fields
  const validateForm = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: [],
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldErrors = validateField(name, value);

    if (fieldErrors.length > 0) {
      setErrors((prev) => ({
        ...prev,
        [name]: fieldErrors,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus(""), 3000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClassName = (fieldName) => {
    const hasError = errors[fieldName] && errors[fieldName].length > 0;
    return cn(
      baseInputClasses,
      hasError ? errorInputClasses : normalInputClasses,
    );
  };

  const getTextareaClassName = (fieldName) => {
    const hasError = errors[fieldName] && errors[fieldName].length > 0;
    return cn(
      baseTextareaClasses,
      hasError ? errorInputClasses : normalInputClasses,
    );
  };

  return (
    <div className="col-span-7 w-full">
      <div className="bg-white shadow-[0px_0px_60px_rgba(0,0,0,0.15)] rounded-[30px] p-8">
        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">
              Message sent successfully! We'll get back to you soon.
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 font-medium">
              Something went wrong. Please try again.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your Name*"
                className={getInputClassName("name")}
                required
              />
              {errors.name && errors.name.length > 0 && (
                <div className="mt-2 text-red-600 text-sm">
                  {errors.name.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your Email*"
                className={getInputClassName("email")}
                required
              />
              {errors.email && errors.email.length > 0 && (
                <div className="mt-2 text-red-600 text-sm">
                  {errors.email.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Phone and Subject Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your Phone Number*"
                className={getInputClassName("phone")}
                required
              />
              {errors.phone && errors.phone.length > 0 && (
                <div className="mt-2 text-red-600 text-sm">
                  {errors.phone.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              )}
            </div>

            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Subject*"
                className={getInputClassName("subject")}
                required
              />
              {errors.subject && errors.subject.length > 0 && (
                <div className="mt-2 text-red-600 text-sm">
                  {errors.subject.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Write your message here*"
              rows={6}
              className={getTextareaClassName("message")}
              required
            />
            {errors.message && errors.message.length > 0 && (
              <div className="mt-2 text-red-600 text-sm">
                {errors.message.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <ButtonAction
              title="Send Message"
              type="white"
              onClick={handleSubmit}
              disabled={isSubmitting}
              isSubmitting={isSubmitting}
              buttonType="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
