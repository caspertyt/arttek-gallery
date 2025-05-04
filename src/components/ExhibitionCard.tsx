import Image from 'next/image';
import Link from 'next/link';

interface ExhibitionCardProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  slug: string;
}

export default function ExhibitionCard({
  title,
  description,
  imageUrl,
  date,
  slug,
}: ExhibitionCardProps) {
  return (
    <Link href={`/exhibitions/${slug}`} className="group">
      <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-400 mb-2">{date}</p>
      <p className="text-gray-300">{description}</p>
    </Link>
  );
} 