"use client";
import { useState } from "react";
import ButtonAction from "../button/ButtonAction";
import { cn } from "@/utils/cn";
import { useFormSubmission } from "@/hooks/useFormSubmission";
import { useFormValidation } from "@/hooks/useFormValidation";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const { isSubmitting, submitStatus, submitForm, resetForm } =
    useFormSubmission();
  const {
    errors,
    validateForm,
    validateField,
    clearFieldError,
    clearAllErrors,
    hasFieldError,
    getFieldErrors,
  } = useFormValidation();

  // Common class names
  const baseInputClasses =
    "w-full px-6 py-4 rounded-[40px] h-[50px] border transition-all duration-200 focus:outline-none focus:ring-2";
  const baseTextareaClasses =
    "w-full px-6 py-4 rounded-[30px] border transition-all duration-200 focus:outline-none focus:ring-2 resize-none";

  const normalInputClasses =
    "bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-blue-200";
  const errorInputClasses =
    "bg-red-50 border-red-300 focus:border-red-500 focus:ring-red-200";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    clearFieldError(name);
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

    const result = await submitForm(formData, "Contact Us");

    if (result.success) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});

      // Reset success message after 3 seconds
      setTimeout(() => resetForm(), 3000);
    }
  };

  const getInputClassName = (fieldName) => {
    return cn(
      baseInputClasses,
      hasFieldError(fieldName) ? errorInputClasses : normalInputClasses,
    );
  };

  const getTextareaClassName = (fieldName) => {
    return cn(
      baseTextareaClasses,
      hasFieldError(fieldName) ? errorInputClasses : normalInputClasses,
    );
  };

  return (
    <div className="col-span-7 w-full">
      <div className="bg-white shadow-[0px_0px_60px_rgba(0,0,0,0.15)] rounded-[30px] p-8">
        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">
              Message sent successfully! We&apos;ll get back to you soon.
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
              {hasFieldError("name") && (
                <div className="mt-2 text-red-600 text-sm">
                  {getFieldErrors("name").map((error, index) => (
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
              {hasFieldError("email") && (
                <div className="mt-2 text-red-600 text-sm">
                  {getFieldErrors("email").map((error, index) => (
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
              {hasFieldError("phone") && (
                <div className="mt-2 text-red-600 text-sm">
                  {getFieldErrors("phone").map((error, index) => (
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
              {hasFieldError("subject") && (
                <div className="mt-2 text-red-600 text-sm">
                  {getFieldErrors("subject").map((error, index) => (
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
            {hasFieldError("message") && (
              <div className="mt-2 text-red-600 text-sm">
                {getFieldErrors("message").map((error, index) => (
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
