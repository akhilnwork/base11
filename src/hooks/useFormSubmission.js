"use client";

import { useState } from "react";

export function useFormSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const submitForm = async (formData, formTitle = "Contact Form") => {
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Create form data with form title included
      const submitData = {
        ...formData,
        form: formTitle,
      };

      console.log("Form submission data:", submitData);

      // POST to API endpoint
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitData),
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("API response:", result);

      setSubmitStatus("success");
      return { success: true, data: result };
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitStatus("");
  };

  return {
    isSubmitting,
    submitStatus,
    submitForm,
    resetForm,
  };
}

export default useFormSubmission;
