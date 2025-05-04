import { getDictionary } from '@/i18n/dictionary';
import Image from 'next/image';

export default async function About({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen py-20">
      <div className="container-custom">
        <div className="relative mb-20">
          <h1 className="section-title text-5xl md:text-6xl font-bold text-center mb-4 text-white drop-shadow-lg">
            {dict.about}
          </h1>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-red-500 rounded"></div>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="relative mb-12">
            <h2 className="text-4xl font-bold text-center mb-4 text-white drop-shadow-lg">Миссия ARTTEK</h2>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-red-500 rounded"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 mb-6">
                ARTTEK - это современная художественная галерея, созданная для поддержки 
                и продвижения современного искусства. Мы стремимся создать пространство, 
                где художники могут свободно выражать себя, а зрители - открывать для себя 
                новые грани искусства.
              </p>
              <p className="text-gray-300">
                Наша цель - стать мостом между художниками и аудиторией, способствовать 
                культурному обмену и развитию современного искусства.
              </p>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/images/gallery1.jpg"
                alt="ARTTEK Gallery"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="relative mb-12">
            <h2 className="text-4xl font-bold text-center mb-4 text-white drop-shadow-lg">Команда</h2>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-red-500 rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/team1.jpg"
                  alt="Анна"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Анна</h3>
              <p className="text-gray-300">Директор галереи</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/team2.jpg"
                  alt="Мария"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Мария</h3>
              <p className="text-gray-300">Куратор</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/team3.jpg"
                  alt="Иван"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Иван</h3>
              <p className="text-gray-300">Технический директор</p>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section>
          <div className="relative mb-12">
            <h2 className="text-4xl font-bold text-center mb-4 text-white drop-shadow-lg">Партнёры</h2>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-red-500 rounded"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="relative aspect-[3/2]">
              <Image
                src="/images/partner1.png"
                alt="Партнёр 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[3/2]">
              <Image
                src="/images/partner2.png"
                alt="Партнёр 2"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[3/2]">
              <Image
                src="/images/partner3.png"
                alt="Партнёр 3"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[3/2]">
              <Image
                src="/images/partner4.png"
                alt="Партнёр 4"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 