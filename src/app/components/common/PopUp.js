"use client";
import React, { useState } from "react";
import Image from "next/image";
import ButtonAction from "../button/ButtonAction";
import { useFormSubmission } from "@/hooks/useFormSubmission";
import { useFormValidation } from "@/hooks/useFormValidation";

const PopUp = ({ isOpen, onClose, title, preTitle }) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    clearFieldError(name);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldErrors = validateField(name, value);
    if (fieldErrors.length > 0) {
      setErrors((prev) => ({ ...prev, [name]: fieldErrors }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const result = await submitForm(formData, title || "Contact Form");

    if (result.success) {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});
    }
  };

  const handleSuccessContinue = () => {
    resetForm();
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setErrors({});
    if (onClose) onClose();
  };

  const inputBase =
    "w-full px-4 sm:px-6 h-11 sm:h-12 bg-neutral-100 rounded-[40px] outline outline-1 outline-offset-[-1px] outline-black text-black placeholder-black/60 font-['Poppins'] text-sm sm:text-base";
  const textareaBase =
    "w-full px-4 sm:px-6 py-3 sm:py-4 bg-neutral-100 rounded-[30px] outline outline-1 outline-offset-[-1px] outline-black text-black placeholder-black/60 font-['Poppins'] text-sm sm:text-base resize-none";
  const errorRing = "ring-2 ring-red-300";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 ">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      <div className="relative w-full max-w-[1083px] mx-auto bg-stone-400/30 rounded-[30px] shadow-[0px_0px_60px_0px_rgba(0,0,0,0.15)] p-6 sm:p-8 my-4 max-h-[90vh] ">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Title */}
        <div className="mb-4 sm:mb-6">
          <hgroup
            className="space-y-2 sm:space-y-4"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            {preTitle && (
              <p className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-gray-400 text-white text-xs sm:text-sm rounded-lg">
                {preTitle}
              </p>
            )}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-geometr415-lt-bt tracking-tight leading-tight capitalize text-black">
              {title}
            </h2>
          </hgroup>
        </div>
        {submitStatus === "success" && null}
        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 font-medium">
              Something went wrong. Please try again.
            </p>
          </div>
        )}

        {submitStatus !== "success" && (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Name*"
                  className={`${inputBase} ${hasFieldError("name") ? errorRing : ""}`}
                  required
                />
                {hasFieldError("name") && (
                  <div className="mt-2 text-red-600 text-sm">
                    {getFieldErrors("name").map((e, i) => (
                      <p key={i}>{e}</p>
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
                  className={`${inputBase} ${hasFieldError("email") ? errorRing : ""}`}
                  required
                />
                {hasFieldError("email") && (
                  <div className="mt-2 text-red-600 text-sm">
                    {getFieldErrors("email").map((e, i) => (
                      <p key={i}>{e}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Number*"
                  className={`${inputBase} ${hasFieldError("phone") ? errorRing : ""}`}
                  required
                />
                {hasFieldError("phone") && (
                  <div className="mt-2 text-red-600 text-sm">
                    {getFieldErrors("phone").map((e, i) => (
                      <p key={i}>{e}</p>
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
                  className={`${inputBase} ${hasFieldError("subject") ? errorRing : ""}`}
                  required
                />
                {hasFieldError("subject") && (
                  <div className="mt-2 text-red-600 text-sm">
                    {getFieldErrors("subject").map((e, i) => (
                      <p key={i}>{e}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Write your message here*"
                rows={4}
                className={`${textareaBase} ${hasFieldError("message") ? errorRing : ""} sm:rows-6`}
                required
              />
              {hasFieldError("message") && (
                <div className="mt-2 text-red-600 text-sm">
                  {getFieldErrors("message").map((e, i) => (
                    <p key={i}>{e}</p>
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-start">
              <ButtonAction
                title="Send Message"
                type="white"
                disabled={isSubmitting}
                isSubmitting={isSubmitting}
                buttonType="submit"
              />
            </div>
          </form>
        )}

        {submitStatus === "success" && (
          <PopUpMessage onContinue={handleSuccessContinue} />
        )}
      </div>
    </div>
  );
};

function PopUpMessage({ onContinue }) {
  return (
    <div className="flex items-center justify-center min-h-[300px] sm:min-h-[400px] relative">
      <div className="relative w-full max-w-[300px] mx-4 sm:mx-0 rounded-[10px] bg-white min-h-[220px] flex flex-col items-center justify-center p-4 sm:p-6 box-border text-center text-xl sm:text-2xl text-black font-geometr415-lt-bt">
        <div className="self-stretch flex flex-col items-center justify-start gap-3 z-[0]">
          <h3 className="tracking-[0.01em] uppercase text-lg sm:text-2xl">
            Success
          </h3>
          <div className="text-sm sm:text-base font-poppins">
            <p className="m-0">{`Your Details have been `}</p>
            <p className="m-0">submitted successfully</p>
          </div>
        </div>

        <div className="flex w-20 h-20 sm:w-25 sm:h-25 border-4 border-white absolute left-1/2 transform -translate-x-1/2 -top-[40px] sm:-top-[50px] bg-darkgray-150 rounded-full p-2.5 box-border items-center justify-center">
          <Image
            className="w-[40px] sm:w-[50px]"
            width={50}
            height={40}
            sizes="100vw"
            alt=""
            src="/svg/tick.svg"
          />
        </div>

        <div className="flex absolute -bottom-[20px] sm:-bottom-[25px]">
          <ButtonAction
            title="Continue"
            type="gray"
            onClick={onContinue}
            className="mt-4 sm:mt-6"
          />
        </div>
      </div>
    </div>
  );
}

export default PopUp;
