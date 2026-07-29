"use client";

import { useLoading } from "@/context/LoadingContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function BookingPage() {
  const { showLoader, hideLoader } = useLoading();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise<boolean>((resolve) => {
      const existingScript = document.getElementById("razorpay-checkout");

      if (existingScript) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.id = "razorpay-checkout";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  // Save the form reference BEFORE any await
  const form = e.currentTarget;

  const data = {
    firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
    lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
    dob: (form.elements.namedItem("dob") as HTMLInputElement).value,
    birthPlace: (form.elements.namedItem("birthPlace") as HTMLInputElement).value,
    birthTime: (form.elements.namedItem("birthTime") as HTMLInputElement).value,
    phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
    packageId: (form.elements.namedItem("packageId") as HTMLSelectElement).value,
    message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
  };

  const razorpayLoaded = await loadRazorpayScript();

  if (!razorpayLoaded) {
    alert("Failed to load Razorpay.");
    return;
  }

  setLoading(true);
  showLoader();

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
      console.log("Booking API Response:", result);

      if (result.success) {

        const options = {
          key: result.key,
          amount: result.amount,
          currency: result.currency,
          name: "ShreeParshuram Astrology",
          description: "Astrology Consultation",
          order_id: result.orderId,

          prefill: {
            name: `${data.firstName} ${data.lastName}`,
            contact: data.phone,
          },

          theme: {
            color: "#2563eb",
          },

          handler: async function (response: any) {
            console.log("Payment Success:", response);

            try {
              const verifyResponse = await fetch("/api/payment/verify", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  bookingId: result.bookingId,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              });

              const verifyResult = await verifyResponse.json();

              console.log("Verification Result:", verifyResult);

              if (verifyResult.success) {

                form.reset();

                router.push(
                  `/booking/success?bookingId=${verifyResult.bookingId}&paymentId=${verifyResult.razorpay_payment_id}`
                );

              } else {
                alert("Payment Verification Failed!");
              }

            } catch (err) {
              console.error(err);
              alert("Unable to verify payment.");
            }
          },
        };

        const razorpay = new (window as any).Razorpay(options);

        razorpay.open();

      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to submit booking.");
    } finally {
        setLoading(false);
        hideLoader();
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

          <input
            type="date"
            name="dob"
            required
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
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

          <div>
            <label className="block mb-2 text-white/80">
              Consultation Package
            </label>

            <select
              name="packageId"
              required
              defaultValue="test"
              className="w-full rounded-2xl border border-yellow-500 bg-[#1d1d2f] text-white px-5 py-4 appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="test">
                Basic Horoscope Reading - ₹1
              </option>
              <option value="basic">
                Basic Horoscope Reading - ₹499
              </option>

              <option value="advance">
                Advanced Horoscope Consultation - ₹999
              </option>

              <option value="career">
                Career Consultation - ₹999
              </option>

              <option value="marriage">
                Marriage Consultation - ₹1499
              </option>

              <option value="business">
                Business Consultation - ₹2999
              </option>

            </select>
          </div>

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