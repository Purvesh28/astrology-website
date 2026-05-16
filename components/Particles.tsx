export default function Particles() {
  const particles = Array.from({ length: 40 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      
      {particles.map((_, index) => (
        
        <span
          key={index}
          className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 4}s`,
          }}
        />

      ))}

    </div>
  );
}