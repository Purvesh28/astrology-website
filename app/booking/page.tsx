"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function BookingPage() {
  const [loading, setLoading] = useState(false);
  const [dob, setDob] = useState<Date | null>(null);
  const [birthTime, setBirthTime] = useState<Date | null>(null);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;

    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      // dob: (form.elements.namedItem("dob") as HTMLInputElement).value,
      dob: dob ? dob.toISOString().split("T")[0] : "",

      birthPlace: (form.elements.namedItem("birthPlace") as HTMLInputElement).value,
      // birthTime: (form.elements.namedItem("birthTime") as HTMLInputElement).value,
      birthTime: birthTime ? birthTime.toLocaleTimeString("en-GB", {hour: "2-digit",minute: "2-digit",hour12: false,}) : "",
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch("/api/booking", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (result.success) {
        alert("Booking submitted successfully!");

        form.reset();

        setDob(null);
        setBirthTime(null);
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-32">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
            Astrology Consultation
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Book Your Session
          </h1>

          <p className="text-white/70 text-lg">
            Fill in your birth details for personalized guidance.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />
          </div>

          <DatePicker
            selected={dob}
            onChange={(date) => setDob(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Date of Birth"
            maxDate={new Date()}
            showYearDropdown
            showMonthDropdown
            dropdownMode="select"
            yearDropdownItemNumber={100}
            scrollableYearDropdown
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white"
            wrapperClassName="w-full"
          />

          <input
            type="text"
            name="birthPlace"
            placeholder="Birth Place"
            required
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

          <input
            type="time"
            name="birthTime"
            required
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />
          
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

          <textarea
            name="message"
            placeholder="Additional Notes"
            rows={5}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 text-black py-4 rounded-2xl font-semibold hover:bg-yellow-400 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Submit Booking"}
          </button>
        </form>
      </div>
    </main>
  );
}