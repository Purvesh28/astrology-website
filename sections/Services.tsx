"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Birth Chart Reading",
    description:
      "Detailed analysis of your birth chart to understand personality, strengths, and destiny.",
  },

  {
    title: "Career Guidance",
    description:
      "Astrological insights to help you choose the right career path and opportunities.",
  },

  {
    title: "Relationship Compatibility",
    description:
      "Understand emotional and spiritual compatibility with your partner.",
  },

  {
    title: "Numerology Consultation",
    description:
      "Discover the hidden meaning behind your numbers and life path.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6">
      
      <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="max-w-7xl mx-auto"
>
        
        {/* Section Header */}
        <div className="text-center mb-20">
          
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
            Our Services
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Spiritual Guidance <br />
            Tailored For You
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Explore our personalized astrology services designed to
            bring clarity, direction, and balance into your life.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {services.map((service, index) => (
            
            <motion.div
  key={index}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.2 }}
  viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition duration-300"
            >
              
              <div className="w-14 h-14 rounded-full bg-yellow-500/20 flex items-center justify-center mb-6">
                ✦
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-white/70 leading-relaxed">
                {service.description}
              </p>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}