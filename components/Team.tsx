import Image from 'next/image';
import TeamCarousel from './TeamCarousel';

export interface Member {
  name: string;
  role: string;
  photo: string;
  email?: string;
  phone?: string;
}

const TEAM: Member[] = [
  { name: 'Світлана', role: 'Генеральний директор', photo: '/team/IMG_7888.JPG', email: 'ceo.openvisa@gmail.com' },
  { name: 'Аніта', role: 'Операційний директор', photo: '/team/IMG_5783.JPG' },
  { name: 'Світлана', role: 'Керівник департаменту працевлаштування за кордоном', photo: '/team/IMG_5809.JPG' },
  { name: 'Людмила', role: 'Старший менеджер з працевлаштування за кордоном', photo: '/team/IMG_5801.JPG' },
  { name: 'Інна', role: 'Менеджер з працевлаштування за кордоном', photo: '/team/IMG_5747.JPG' },
  { name: 'Дмитро', role: 'Менеджер з працевлаштування за кордоном', photo: '/team/IMG_5737.JPG' },
  { name: 'Наталія', role: 'Менеджер з працевлаштування', photo: '/team/natalia.JPG' },
  { name: 'Ольга', role: 'Старший менеджер з працевлаштування за кордоном', photo: '/team/IMG_0118.JPG' },
  { name: 'Ольга', role: 'Рекрутер', photo: '/team/IMG_5716.JPG' },
  { name: 'Яна', role: 'Дірект-менеджер', photo: '/team/IMG_5728.JPG' },
  { name: 'Єлизавета', role: 'Керівник відділу СММ', photo: '/team/IMG_5702.JPG' },
  { name: 'Ірина', role: 'Контент-креаторка', photo: '/team/IMG_5697.JPG' },
  { name: 'Денис', role: 'Візуальний-креатор', photo: '/team/IMG_5705.JPG' },
  { name: 'Анастасія', role: 'Менеджер з туризму', photo: '/team/IMG_5735.JPG' },
  { name: 'Анна', role: 'Помічник бухгалтера', photo: '/team/IMG_5742.JPG' },
  { name: 'Світлана', role: 'Адміністратор', photo: '/team/IMG_5730.JPG', phone: '+380970774947' },
];

// Горизонтальні (3:2) та портретні (2:3) фото — групуємо за орієнтацією,
// щоб пропорції контейнера збігались з фото і нічого не обрізалось.
const GROUP_LANDSCAPE = [
  '/team/IMG_5831.JPG',
  '/team/IMG_5817.JPG',
];
const GROUP_PORTRAIT = [
  '/team/IMG_5827.JPG',
  '/team/IMG_5813.JPG',
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-[#f8f9fb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3057] mb-3">
            Наша команда
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Понад 15 спеціалістів — від рекрутерів до операційного директора —
            працюють над вашим працевлаштуванням.
          </p>
        </div>

        {/* Спільні фото: горизонтальні в один ряд, портретні в інший */}
        <div className="mb-14 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            {GROUP_LANDSCAPE.map((src) => (
              <div
                key={src}
                className="relative rounded-2xl aspect-[3/2] overflow-hidden"
              >
                <Image
                  src={src}
                  alt="Команда Jobs Go VN"
                  fill
                  sizes="50vw"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {GROUP_PORTRAIT.map((src) => (
              <div
                key={src}
                className="relative rounded-2xl aspect-[2/3] overflow-hidden"
              >
                <Image
                  src={src}
                  alt="Команда Jobs Go VN"
                  fill
                  sizes="50vw"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Team carousel — full bleed */}
      <div className="mt-2">
        <TeamCarousel members={TEAM} />
      </div>
    </section>
  );
}
