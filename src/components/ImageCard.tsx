import Image from 'next/image';
import Link from 'next/link';

interface ImageCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  lang: string;
}

export default function ImageCard({ title, description, imageUrl, href, lang }: ImageCardProps) {
  return (
    <Link href={`/${lang}${href}`} className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  );
} 