'use client';

const VIDEOS = [
  { id: 'VVFQ79Mwf0g', name: 'Відео-відгук', country: '' },
];

export default function VideoReviews() {
  if (VIDEOS.length === 0) return null;

  return (
    <section className="py-10 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEOS.map((v) => (
            <div
              key={v.id}
              className="rounded-2xl overflow-hidden shadow-md border border-gray-100"
            >
              <div className="relative w-full aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
