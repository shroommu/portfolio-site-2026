"use client";

import { useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, subject, message }),
      });

      if (res.ok) {
        setEmail("");
        setSubject("");
        setMessage("");
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const isSending = status === "sending";

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
          required
          autoComplete="email"
          spellCheck={false}
          placeholder="you@example.com…"
          className="w-full p-2 border border-gray-400 rounded-md mb-4 bg-[var(--background-light)]"
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
          required
          autoComplete="off"
          placeholder="Project inquiry…"
          className="w-full p-2 border border-gray-400 rounded-md mb-4 bg-[var(--background-light)]"
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
          required
          placeholder="Hi Alex, I wanted to reach out about…"
          className="w-full p-2 border border-gray-400 rounded-md mb-4 bg-[var(--background-light)]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          disabled={isSending}
          className="px-4 py-2 bg-[var(--theme-color-accent)] text-[var(--on-accent)] rounded-md hover:bg-[var(--theme-color-accent-light)] disabled:opacity-60 disabled:cursor-not-allowed mx-auto"
        >
          {isSending ? "Sending…" : "Send Message"}
        </button>
        <div aria-live="polite" className="mt-4 text-center">
          {status === "success" && (
            <p className="text-[var(--color-success)]">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="text-[var(--color-error)]">
              Failed to send message. Please try again, or reach out on
              LinkedIn instead.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
