import Link from 'next/link';

interface JoinClubButtonProps {
  text: string;
  lang: string;
}

export default function JoinClubButton({ text, lang }: JoinClubButtonProps) {
  return (
    <Link
      href={`/${lang}/join`}
      className="relative inline-flex items-center justify-center px-10 py-4 font-bold text-black bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 border-2 border-white hover:bg-black hover:text-white hover:border-red-500 hover:shadow-red-500/40"
    >
      <span className="relative z-10 text-lg tracking-wide">
        {text}
      </span>
      <span className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-500 transition-all duration-300" />
      <span className="absolute inset-0 rounded-2xl group-hover:shadow-2xl group-hover:shadow-red-500/40 transition-transform duration-300" />
    </Link>
  );
} 