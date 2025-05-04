import { getDictionary } from '@/i18n/dictionary';
import ArtistCard from '@/components/ArtistCard';

export default async function Artists({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  // Пример расширенного массива художников
  const artists = [
    {
      name: 'Мария Родригес',
      bio: 'Современная художница, работающая в стиле абстрактного экспрессионизма. Её работы отражают эмоциональную глубину и динамику цвета. Участница международных выставок, резидент ARTTEK.',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      style: 'Абстрактный экспрессионизм',
      direction: 'Живопись',
      slug: 'maria-rodriguez',
      isResident: true,
      isClubMember: true,
      portfolioUrl: '#',
      contactEmail: 'maria@arttek.com',
      contactWhatsApp: '34640977144',
      artworks: [
        {
          imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262',
          title: 'Танец цвета',
          description: 'Холст, масло, 2024',
          price: '€1,800',
          available: true,
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1549887534-1541e9326642',
          title: 'Городские ритмы',
          description: 'Холст, акрил, 2024',
          price: '€1,500',
          available: true,
        },
      ],
    },
    {
      name: 'Алехандро Гарсия',
      bio: 'Мастер городского пейзажа, чьи работы передают атмосферу и энергию современной Барселоны. Его картины находятся в частных коллекциях по всей Европе.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      style: 'Реализм',
      direction: 'Городской пейзаж',
      slug: 'alejandro-garcia',
      isResident: true,
      isClubMember: false,
      portfolioUrl: '#',
      contactEmail: 'alejandro@arttek.com',
      artworks: [
        {
          imageUrl: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb',
          title: 'Рассвет над Барселоной',
          description: 'Холст, масло, 2024',
          price: '€2,200',
          available: true,
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1511860810434-a92f84c6f01d',
          title: 'Готический квартал',
          description: 'Холст, масло, 2023',
          price: '€1,900',
          available: true,
        },
      ],
    },
    {
      name: 'София Мартинес',
      bio: 'Художница, работающая в технике современной акварели. Её работы отличаются особой легкостью и прозрачностью. Член клуба ARTTEK.',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      style: 'Современная акварель',
      direction: 'Пейзаж, Натюрморт',
      slug: 'sofia-martinez',
      isResident: false,
      isClubMember: true,
      portfolioUrl: '#',
      contactEmail: 'sofia@arttek.com',
      contactWhatsApp: '34640977144',
      artworks: [
        {
          imageUrl: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8',
          title: 'Средиземноморский сад',
          description: 'Бумага, акварель, 2024',
          price: '€800',
          available: true,
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1582454235987-03c51c8455ff',
          title: 'Цветущий май',
          description: 'Бумага, акварель, 2024',
          price: '€750',
          available: true,
        },
      ],
    },
    {
      name: 'Марк Торрес',
      bio: 'Современный скульптор, работающий с металлом и деревом. Его работы исследуют взаимодействие природных форм и геометрии.',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      style: 'Современная скульптура',
      direction: 'Скульптура',
      slug: 'marc-torres',
      isResident: true,
      isClubMember: true,
      portfolioUrl: '#',
      contactEmail: 'marc@arttek.com',
      artworks: [
        {
          imageUrl: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca',
          title: 'Волны времени',
          description: 'Металл, дерево, 2024',
          price: '€3,500',
          available: true,
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1554188248-986adbb73be4',
          title: 'Космическая геометрия',
          description: 'Металл, 2024',
          price: '€2,800',
          available: true,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container-custom">
        <div className="relative mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 text-white drop-shadow-lg">
            {dict.artists}
            <span className="block mx-auto mt-2 md:mt-3 w-24 h-1 bg-red-500 rounded-full"></span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto">
            Талантливые художники, создающие уникальные произведения искусства в различных стилях и техниках
          </p>
        </div>
        {/* Filters */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Фильтры</h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <button className="px-4 py-2 text-sm md:text-base bg-black/40 border border-white/20 rounded-lg hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 text-white/90 hover:text-white">
              Все
            </button>
            <button className="px-4 py-2 text-sm md:text-base bg-black/40 border border-white/20 rounded-lg hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 text-white/90 hover:text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              Резиденты
            </button>
            <button className="px-4 py-2 text-sm md:text-base bg-black/40 border border-white/20 rounded-lg hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 text-white/90 hover:text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Члены клуба
            </button>
            <button className="px-4 py-2 text-sm md:text-base bg-black/40 border border-white/20 rounded-lg hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 text-white/90 hover:text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Доступно
            </button>
            <button className="px-4 py-2 text-sm md:text-base bg-black/40 border border-white/20 rounded-lg hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 text-white/90 hover:text-white">
              Абстракция
            </button>
            <button className="px-4 py-2 text-sm md:text-base bg-black/40 border border-white/20 rounded-lg hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 text-white/90 hover:text-white">
              Реализм
            </button>
          </div>
        </div>
        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {artists.map((artist) => (
            <ArtistCard key={artist.slug} {...artist} />
          ))}
        </div>
      </div>
    </div>
  );
} 