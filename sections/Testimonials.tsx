const testimonials = [
  {
    name: "Priya Sharma",
    role: "Entrepreneur",
    message:
      "The astrology consultation gave me incredible clarity about my career and future decisions. Truly life-changing.",
  },

  {
    name: "Rahul Mehta",
    role: "Software Engineer",
    message:
      "Very accurate insights and guidance. The birth chart analysis helped me understand myself deeply.",
  },

  {
    name: "Ananya Patel",
    role: "Business Owner",
    message:
      "Professional, insightful, and spiritually uplifting experience. Highly recommended for anyone seeking guidance.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 px-6">
      
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What Our Clients Say
          </h2>

          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Hear from people who discovered clarity, confidence,
            and transformation through our spiritual guidance.
          </p>

        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {testimonials.map((testimonial, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition duration-300"
            >

              {/* Stars */}
              <div className="text-yellow-400 text-xl mb-6">
                ★★★★★
              </div>

              {/* Message */}
              <p className="text-white/70 leading-relaxed mb-8">
                "{testimonial.message}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">

                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    {testimonial.name}
                  </h3>

                  <p className="text-white/50 text-sm">
                    {testimonial.role}
                  </p>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}