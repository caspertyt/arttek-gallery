import { getDictionary } from '@/i18n/dictionary';
import Image from 'next/image';

export default async function Gallery({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  // Данные галереи
  const galleryItems = [
    {
      id: 1,
      title: 'Выставка современного искусства',
      imageUrl: '/images/Галерея/1.jpg',
      date: '25 января 2025',
    },
    {
      id: 2,
      title: 'Вернисаж "Новые горизонты"',
      imageUrl: '/images/Галерея/2.jpg',
      date: '25 января 2025',
    },
    {
      id: 3,
      title: 'Мастер-класс по живописи',
      imageUrl: '/images/Галерея/3.jpg',
      date: '25 января 2025',
    },
    {
      id: 4,
      title: 'Вечер современного искусства',
      imageUrl: '/images/Галерея/4.jpg',
      date: '25 января 2025',
    },
    {
      id: 5,
      title: 'Специальное мероприятие',
      imageUrl: '/images/Галерея/5.jpg',
      date: '25 января 2025',
    },
    {
      id: 6,
      title: 'Зимняя выставка',
      imageUrl: '/images/Галерея/9.jpg',
      date: '25 января 2025',
    },
    {
      id: 7,
      title: 'Приглашение на выставку',
      imageUrl: '/images/Галерея/10.jpg',
      date: '25 января 2025',
    },
    {
      id: 8,
      title: 'Открытие выставки',
      imageUrl: '/images/Галерея/11.jpg',
      date: '25 января 2025',
    },
    {
      id: 9,
      title: 'Выставка современного искусства',
      imageUrl: '/images/Галерея/14.jpg',
      date: '25 января 2025',
    },
    {
      id: 10,
      title: 'Вернисаж',
      imageUrl: '/images/Галерея/16.jpg',
      date: '25 января 2025',
    },
    {
      id: 11,
      title: 'Мастер-класс',
      imageUrl: '/images/Галерея/18.jpg',
      date: '25 января 2025',
    },
    {
      id: 12,
      title: 'Вечер искусства',
      imageUrl: '/images/Галерея/21.jpg',
      date: '25 января 2025',
    },
    {
      id: 13,
      title: 'Выставка',
      imageUrl: '/images/Галерея/23.jpg',
      date: '25 января 2025',
    },
    {
      id: 14,
      title: 'Специальное мероприятие',
      imageUrl: '/images/Галерея/expo.jpg',
      date: '25 января 2025',
    },
    {
      id: 15,
      title: 'Новая выставка',
      imageUrl: '/images/Галерея/IMG20231210143958.jpg',
      date: '10 декабря 2024',
    },
    {
      id: 16,
      title: 'Выставка современного искусства',
      imageUrl: '/images/Галерея/IMG20250125172335.jpg',
      date: '25 января 2025',
    },
    {
      id: 17,
      title: 'Вернисаж',
      imageUrl: '/images/Галерея/IMG20250125182224.jpg',
      date: '25 января 2025',
    },
    {
      id: 18,
      title: 'Мастер-класс',
      imageUrl: '/images/Галерея/IMG20250125185701.jpg',
      date: '25 января 2025',
    },
    {
      id: 19,
      title: 'Вечер искусства',
      imageUrl: '/images/Галерея/IMG20250125193759.jpg',
      date: '25 января 2025',
    },
    {
      id: 20,
      title: 'Специальное мероприятие',
      imageUrl: '/images/Галерея/WhatsApp Image 2025-02-06 at 22.45.34 (2).jpeg',
      date: '6 февраля 2025',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16">
        <div className="container-custom px-4 md:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center">
            {dict.gallery}
            <span className="block mx-auto mt-4 w-24 h-1 bg-red-500 rounded-full"></span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Фотографии с наших выставок, мероприятий и специальных проектов
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 md:py-12">
        <div className="container-custom px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square overflow-hidden rounded-xl bg-black/50 border border-white/10 hover:border-red-500 transition-all duration-300"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={item.id <= 6}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 