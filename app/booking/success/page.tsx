"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function SuccessContent() {
  const searchParams = useSearchParams();

  const bookingId = searchParams.get("bookingId");
  const paymentId = searchParams.get("paymentId");

  return (
    <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-white/5 border border-yellow-500/30 rounded-3xl p-10 text-center">

        <div className="text-6xl mb-6">✅</div>

        <h1 className="text-4xl font-bold mb-4 text-yellow-400">
          Payment Successful
        </h1>

        <p className="text-white/70 mb-8">
          Thank you for booking your astrology consultation.
        </p>

        <div className="bg-black/30 rounded-2xl p-6 text-left space-y-4">
          <div>
            <p className="text-white/50 text-sm">Booking ID</p>
            <p className="font-semibold">{bookingId}</p>
          </div>

          <div>
            <p className="text-white/50 text-sm">Payment ID</p>
            <p className="font-semibold break-all">{paymentId}</p>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/booking"
            className="bg-yellow-500 text-black px-6 py-3 rounded-xl"
          >
            Book Another
          </Link>

          <Link
            href="/"
            className="border border-yellow-500 px-6 py-3 rounded-xl"
          >
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function BookingSuccessPage() {
  return (
    <Suspense fallback={<div className="text-white p-10">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}