"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function BookingSuccessPage() {
  const searchParams = useSearchParams();

  const bookingId = searchParams.get("bookingId");
  const paymentId = searchParams.get("paymentId");

  return (
    <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-white/5 border border-yellow-500/30 rounded-3xl p-10 text-center">

        <div className="text-6xl mb-6">
          ✅
        </div>

        <h1 className="text-4xl font-bold mb-4 text-yellow-400">
          Payment Successful
        </h1>

        <p className="text-white/70 mb-8">
          Thank you for booking your astrology consultation.
          Your payment has been received successfully.
        </p>

        <div className="bg-black/30 rounded-2xl p-6 text-left space-y-4">

          <div>
            <p className="text-white/50 text-sm">Booking ID</p>

            <p className="font-semibold text-lg">
              {bookingId}
            </p>
          </div>

          <div>
            <p className="text-white/50 text-sm">Payment ID</p>

            <p className="font-semibold text-lg break-all">
              {paymentId}
            </p>
          </div>

        </div>

        <p className="mt-8 text-white/70">
          We will review your birth details and contact you shortly.
        </p>

        <div className="mt-10 flex gap-4 justify-center">

          <Link
            href="/booking"
            className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400"
          >
            Book Another
          </Link>

          <Link
            href="/"
            className="border border-yellow-500 px-6 py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
          >
            Home
          </Link>

        </div>

      </div>
    </main>
  );
}