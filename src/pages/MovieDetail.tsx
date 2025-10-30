import { useParams, useNavigate } from 'react-router-dom';
import { movies } from '@/data/movies';
import { ArrowLeft } from 'lucide-react';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import graveyardBg from '@/assets/graveyard-bg.jpg';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-halloween-ghost text-xl font-cinzel">Movie not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-halloween-midnight text-halloween-ghost relative">
      {/* Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${graveyardBg})` }}
      />
      <BackgroundEffects />

      {/* Content */}
      <div className="relative z-10">
        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-8 left-8 flex items-center gap-2 text-halloween-ghost hover:text-halloween-flame transition-colors duration-300 font-cinzel font-semibold group"
        >
          <ArrowLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-2" />
          Back to Collection
        </button>

        {/* Trailer section */}
        <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-glow-red border-4 border-halloween-blood/30 mb-12">
            <iframe
              className="w-full h-full"
              src={`${movie.trailer}?autoplay=1&mute=1&controls=1&rel=0`}
              title={movie.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Movie info card */}
          <div className="bg-card/80 backdrop-blur-xl rounded-3xl border-2 border-halloween-blood/40 p-8 lg:p-12 shadow-glow-red">
            <div className="grid md:grid-cols-[300px,1fr] gap-8 lg:gap-12">
              {/* Movie poster */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-fire opacity-50 blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="relative rounded-2xl w-full shadow-glow-orange border-4 border-halloween-flame/40"
                />
              </div>

              {/* Movie details */}
              <div className="space-y-6">
                <h1 className="font-nosifer text-4xl lg:text-5xl text-halloween-blood drop-shadow-[0_0_20px_rgba(220,38,38,0.8)] animate-flicker">
                  {movie.title}
                </h1>
                
                <div className="h-1 w-full bg-gradient-to-r from-halloween-blood via-halloween-flame to-halloween-candle rounded-full" />

                <p className="font-cinzel text-lg text-halloween-ghost/90 leading-relaxed">
                  {movie.description}
                </p>

                {/* Watch Now button */}
                <button className="group relative px-8 py-4 bg-gradient-fire text-white font-cinzel font-bold text-lg rounded-xl overflow-hidden shadow-glow-orange hover:shadow-glow-red transition-all duration-500 hover:scale-105">
                  {/* Dripping blood effect */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-halloween-blood">
                    <div className="absolute top-0 left-1/4 w-1 h-4 bg-halloween-blood rounded-b-full animate-float" />
                    <div className="absolute top-0 left-1/2 w-1 h-6 bg-halloween-blood rounded-b-full animate-float" style={{ animationDelay: '0.3s' }} />
                    <div className="absolute top-0 left-3/4 w-1 h-3 bg-halloween-blood rounded-b-full animate-float" style={{ animationDelay: '0.6s' }} />
                  </div>
                  
                  <span className="relative z-10 group-hover:animate-flicker">
                    Watch Now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
