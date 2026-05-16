export default function BookingPage() {
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
          action="https://formspree.io/f/mwvygljw"
          method="POST"
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

          <textarea
            name="message"
            placeholder="Additional Notes"
            rows={5}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-4 rounded-2xl font-semibold hover:bg-yellow-400 transition"
          >
            Submit Booking
          </button>

        </form>

      </div>

    </main>
  );
}