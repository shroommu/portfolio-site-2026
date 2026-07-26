"use client";

import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState<null | boolean>(null);

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, subject, message }),
    }).then((res) => {
      if (res.ok) {
        setEmail("");
        setSubject("");
        setMessage("");
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    });
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-[32px] md:text-[48px] text-center">Contact Me</h1>
      <p className="text-center mb-4">
        Feel free to reach out to me by filling out the form below!
      </p>
      <form className="flex flex-col" onSubmit={onSubmit}>
        <label htmlFor="email" className="block mb-2">
          Your Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full p-2 border border-gray-400 rounded-md mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="subject" className="block mb-2">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="w-full p-2 border border-gray-400 rounded-md mb-4"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <label htmlFor="message" className="block mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full p-2 border border-gray-400 rounded-md mb-4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-[var(--theme-color-accent)] text-background rounded-md hover:bg-[var(--theme-color-accent-dark)] mx-auto"
        >
          Send Message
        </button>
        {success === true && (
          <p className="text-[var(--theme-color-accent)] mt-4">
            Message sent successfully!
          </p>
        )}
        {success === false && (
          <p className="text-[var(--theme-color-accent)] mt-4">
            Failed to send message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
