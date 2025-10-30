import { MovieCard } from '@/components/MovieCard';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { movies } from '@/data/movies';
import graveyardBg from '@/assets/graveyard-bg.jpg';

const Index = () => {
  return (
    <main className="min-h-screen bg-halloween-midnight text-halloween-ghost relative overflow-x-hidden">
      {/* Background with graveyard texture */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${graveyardBg})` }}
      />
      <BackgroundEffects />

      {/* Content */}
      <div className="relative z-10 px-4 py-16 lg:py-24">
        {/* Header section */}
        <header className="text-center mb-16 lg:mb-24">
          <h1 className="font-creepster text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-8 animate-flicker"
              style={{
                WebkitTextStroke: '2px hsl(var(--flame-orange))',
                color: 'hsl(var(--blood-red))',
                textShadow: '0 0 30px hsl(var(--flame-orange)), 0 0 60px hsl(var(--blood-red))',
              }}>
            Macabre Movie Night
            <br />
            Recommendations
          </h1>

          {/* Blood drip divider with cobwebs */}
          <div className="relative max-w-4xl mx-auto h-12 flex items-center justify-center">
            {/* Cobwebs on sides */}
            <div className="absolute left-0 text-6xl opacity-40">🕸️</div>
            <div className="absolute right-0 text-6xl opacity-40">🕸️</div>
            
            {/* Blood drips */}
            <div className="flex gap-8 items-start">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-halloween-blood rounded-b-full animate-float"
                  style={{
                    height: `${20 + i * 8}px`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </header>

        {/* Movie grid */}
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
            {movies.map((movie, index) => (
              <div
                key={movie.id}
                className="opacity-0 animate-[fade-in_0.8s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <MovieCard
                  id={movie.id}
                  title={movie.title}
                  image={movie.image}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Footer ambiance */}
        <footer className="mt-24 text-center">
          <p className="font-cinzel text-halloween-ghost/60 text-sm tracking-widest">
            Enter if you dare... 💀
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
