import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";

const ContactForm = (props: any) => {
  const { t } = useTranslation("contact");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  if (submitted) {
    return (
      <div className=" flex h-[500px] flex-col items-center justify-center">
        <h2 className="text-3xl font-bold tracking-tight text-dark-brown-900 sm:text-4xl">
          Thank you for contacting us!
        </h2>

        <p className="mt-2 text-center text-lg leading-8 text-gray-600">
          We will get back to you as soon as possible.
        </p>

        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded bg-dark-brown-600 py-2 px-4 font-bold text-white hover:bg-dark-brown-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName) {
      setFirstNameError("Please enter your first name.");
    }
    if (!lastName) {
      setLastNameError("Please enter your last name.");
    }

    if (!phoneNumber) {
      setPhoneNumberError("Please enter your phone number.");
    }

    if (!email) {
      setEmailError("Please enter your email address.");
    }
    if (!message) {
      setMessageError("Please enter a message.");
    }

    if (firstName && lastName && email && message) {
      let data = {
        firstName,
        lastName,
        phoneNumber,
        email,
        message,
      };

      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 200) {
          setSubmitted(true);
          setFirstName("");
          setLastName("");
          setPhoneNumber("");
          setEmail("");
          setMessage("");
        }
      });
    }
  };

  // "contact-first-name": "First Name",
  // "contact-last-name": "Last Name",
  // "contact-email": "Email",
  // "contact-phone": "Phone",
  // "contact-message": "Message",
  // "contact-submit": "Submit"

  return (
    <div className="isolate  py-24 px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-dark-brown-900 sm:text-4xl">
          {t("contact-header")}
        </h2>
        <p className="mt-2 text-center text-lg leading-8 text-gray-600">
          {t("contact-subheader")}
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              {t("contact-first-name")}
            </label>
            <div className="mt-2.5">
              <input
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setFirstNameError("");
                }}
                value={firstName}
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className={`block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-brown-600 sm:text-sm sm:leading-6 ${
                  firstNameError ? "ring-2 ring-red-500" : ""
                }`}
              />
              {firstNameError && (
                <p className="mt-2 text-sm text-red-500">{firstNameError}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              {t("contact-last-name")}
            </label>
            <div className="mt-2.5">
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                  setLastNameError("");
                }}
                value={lastName}
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className={`block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-brown-600 sm:text-sm sm:leading-6 ${
                  lastNameError ? "ring-2 ring-red-500" : ""
                }`}
              />
              {lastNameError && (
                <p className="mt-2 text-sm text-red-500">{lastNameError}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              {t("contact-phone")}
            </label>
            <div className="mt-2.5">
              <input
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  setPhoneNumberError("");
                }}
                value={phoneNumber}
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className={`block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-brown-600 sm:text-sm sm:leading-6 ${
                  phoneNumberError ? "ring-2 ring-red-500" : ""
                }`}
              />
              {phoneNumberError && (
                <p className="mt-2 text-sm text-red-500">{phoneNumberError}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              {t("contact-email")}
            </label>
            <div className="mt-2.5">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                value={email}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className={`block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-brown-600 sm:text-sm sm:leading-6 ${
                  emailError ? "ring-2 ring-red-500" : ""
                }`}
              />
              {emailError && (
                <p className="mt-2 text-sm text-red-500">{emailError}</p>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              {t("contact-message")}
            </label>
            <div className="mt-2.5">
              <textarea
                onChange={(e) => {
                  setMessage(e.target.value);
                  setMessageError("");
                }}
                value={message}
                name="message"
                id="message"
                rows={4}
                className={`block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-brown-600 sm:text-sm sm:leading-6 ${
                  messageError ? "ring-2 ring-red-500" : ""
                }`}
              ></textarea>
              {messageError && (
                <p className="mt-2 text-sm text-red-500">{messageError}</p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <span className="block w-full rounded-md shadow-sm">
            <button
              type="submit"
              className="focus:shadow-outline-indigo flex w-full justify-center rounded-md border border-transparent bg-dark-brown-600 py-2 px-4 text-sm font-medium text-white transition duration-150 ease-in-out hover:bg-dark-brown-700 focus:border-dark-brown-700 focus:outline-none active:bg-dark-brown-700"
            >
              {t("contact-submit")}
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
