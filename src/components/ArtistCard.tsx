import Image from 'next/image';
import Link from 'next/link';

interface Artwork {
  imageUrl: string;
  title: string;
  description?: string;
  price?: string;
  available?: boolean;
}

interface ArtistCardProps {
  name: string;
  bio: string;
  imageUrl: string;
  style: string;
  direction?: string;
  slug: string;
  isResident?: boolean;
  isClubMember?: boolean;
  portfolioUrl?: string;
  artworks?: Artwork[];
  contactEmail?: string;
  contactWhatsApp?: string;
}

export default function ArtistCard({
  name,
  bio,
  imageUrl,
  style,
  direction,
  slug,
  isResident = false,
  isClubMember = false,
  portfolioUrl,
  artworks = [],
  contactEmail,
  contactWhatsApp,
}: ArtistCardProps) {
  return (
    <div className="group bg-black rounded-xl shadow-lg p-6 flex flex-col">
      <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isResident && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
            Резидент
          </div>
        )}
        {isClubMember && (
          <div className="absolute top-2 left-2 bg-white text-black px-2 py-1 rounded text-sm font-bold">
            ARTTEK Club
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold mb-1 group-hover:text-red-500 transition-colors">
        {name}
      </h3>
      <p className="text-sm text-gray-400 mb-1">{style}{direction ? ` / ${direction}` : ''}</p>
      <p className="text-gray-300 mb-2 line-clamp-3">{bio}</p>
      {portfolioUrl && (
        <a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline font-semibold mb-2">Портфолио</a>
      )}
      {/* Gallery of works */}
      {artworks && artworks.length > 0 && (
        <div className="mt-6">
          <h4 className="font-bold text-2xl text-white mb-4">Галерея работ</h4>
          <div className="grid grid-cols-1 gap-6">
            {artworks.map((art, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden">
                {/* Image Section */}
                <div className="relative aspect-square">
                  <Image 
                    src={art.imageUrl} 
                    alt={art.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                    {art.title}
                  </h3>
                  {art.description && (
                    <p className="text-zinc-400 text-sm md:text-base mb-4">
                      {art.description}
                    </p>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      {art.price && (
                        <div className="flex flex-col">
                          <span className="text-zinc-400 text-sm">Стоимость</span>
                          <span className="text-[#00FF85] text-2xl font-bold">
                            {art.price}
                          </span>
                        </div>
                      )}
                      {art.available && (
                        <div className="flex items-center gap-2 bg-[#002E15] rounded-full px-4 py-1.5">
                          <span className="w-2 h-2 bg-[#00FF85] rounded-full animate-pulse"></span>
                          <span className="text-[#00FF85] text-sm">Доступно</span>
                        </div>
                      )}
                    </div>

                    {(art.available && (contactEmail || contactWhatsApp)) && (
                      <a
                        href={contactWhatsApp ? `https://wa.me/${contactWhatsApp}` : `mailto:${contactEmail}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-center py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] font-medium"
                      >
                        Связаться для покупки
                      </a>
                    )}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -z-10" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 