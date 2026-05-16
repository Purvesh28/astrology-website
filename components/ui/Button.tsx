import Link from "next/link";

type ButtonProps = {
  text: string;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  text,
  href = "/booking",
  variant = "primary",
}: ButtonProps) {
  return (
    <Link href={href}>
      <button
        className={`
          px-8 py-4 rounded-full font-semibold transition duration-300
          
          ${
            variant === "primary"
              ? "bg-yellow-500 text-black hover:bg-yellow-400 shadow-lg shadow-yellow-500/20"
              : "border border-white/20 hover:bg-white/10 text-white"
          }
        `}
      >
        {text}
      </button>
    </Link>
  );
}