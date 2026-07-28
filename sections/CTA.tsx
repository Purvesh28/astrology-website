import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section id="contact" className="py-28 px-6">

      <div className="max-w-6xl mx-auto rounded-[40px] border border-white/10 bg-white/5 p-12 md:p-20 text-center">

        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-5">
          Begin Your Journey
        </p>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
          Discover What The <br />
          Stars Reveal About You
        </h2>

        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Book a personalized astrology consultation today.
        </p>

        <Button text="Book Consultation" />


      </div>

    </section>
  );
}