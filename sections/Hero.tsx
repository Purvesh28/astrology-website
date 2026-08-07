"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center px-6 pt-32"
    >

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-yellow-500/10 blur-3xl rounded-full top-[-200px] right-[-100px]" />

      <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-3xl rounded-full bottom-[-100px] left-[-100px]" />
{/* Zodiac Circle */}
<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 120,
    repeat: Infinity,
    ease: "linear",
  }}
  className="
    absolute

    left-[-55%]
    sm:left-[-45%]
    md:left-[-30%]
    lg:left-[-20%]

    top-1/2
    -translate-y-1/2

    z-[-1]

    w-[420px] h-[420px]
    sm:w-[650px] sm:h-[650px]
    md:w-[950px] md:h-[950px]
    lg:w-[1200px] lg:h-[1200px]

    opacity-30
    sm:opacity-35
    md:opacity-40

    pointer-events-none
  "
>

  <Image
    src="/images/zw.svg"
    alt="Zodiac Circle"
    fill
    priority
    className="object-contain"
  />

</motion.div>
      <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">



        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center lg:text-left"
        >

          {/* Golden Glow Behind Image */}
          <div className="absolute w-[280px] h-[280px] md:w-[340px] md:h-[340px] bg-yellow-500/20 blur-3xl rounded-full z-0" />

          

          {/* Father Image */}
          <div
            className="
              relative z-10

              w-[240px] h-[320px]
              sm:w-[300px] sm:h-[400px]
              md:w-[340px] md:h-[460px]

              rounded-[40px]
              overflow-hidden

              border border-white/10

              shadow-2xl shadow-yellow-500/20
            "
          >

            <Image
              src="/images/Father.JPG"
              alt="Astrologer"
              fill
              className="object-cover"
            />

          </div>

        </motion.div>

        

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left"
        >




          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-5">
            Vedic Astrology & Spiritual Guidance
          </p>
          

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Discover Clarity <br />
            Through Ancient Wisdom
          </h1>


          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            Personalized astrology consultations to guide your
            career, relationships, business, and life journey
            with authentic Vedic insights.
          </p>


          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">

            <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-md">
              <h3 className="text-2xl font-bold text-yellow-400">
                25+
              </h3>

              <p className="text-white/60 text-sm">
                Years Experience
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-md">
              <h3 className="text-2xl font-bold text-yellow-400">
                150k +
              </h3>

              <p className="text-white/60 text-sm">
                Consultations
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-md">
              <h3 className="text-2xl font-bold text-yellow-400">
                98%
              </h3>

              <p className="text-white/60 text-sm">
                Client Satisfaction
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-5">

            <Button text="Book Consultation" />

            <Button
              text="WhatsApp Now"
              href="https://wa.me/919327052242"
              variant="secondary"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}