const stats = [
  {
    number: "10K+",
    label: "Happy Clients",
  },

  {
    number: "12+",
    label: "Years Experience",
  },

  {
    number: "95%",
    label: "Positive Feedback",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
            About Us
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Guiding Souls Through <br />
            Ancient Wisdom
          </h2>

          <p className="text-white/70 text-lg leading-relaxed mb-6">
            We combine traditional Vedic astrology with modern spiritual
            guidance to help individuals discover clarity, purpose, and
            confidence in their journey.
          </p>

          <p className="text-white/70 text-lg leading-relaxed mb-10">
            From birth chart analysis to relationship compatibility and
            career insights, our mission is to empower lives through
            cosmic understanding.
          </p>

          <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition duration-300">
            Learn More
          </button>

        </div>

        {/* Right Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">

          {stats.map((stat, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition duration-300"
            >
              
              <h3 className="text-5xl font-bold text-yellow-400 mb-3">
                {stat.number}
              </h3>

              <p className="text-white/70 text-lg">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}