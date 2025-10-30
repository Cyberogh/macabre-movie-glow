import { useParams, useNavigate } from 'react-router-dom';
import { movies } from '@/data/movies';
import { ArrowLeft, Play } from 'lucide-react';
import { BackgroundEffects } from '@/components/BackgroundEffects';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-halloween-midnight">
        <p className="text-halloween-ghost text-xl font-cinzel">Movie not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-halloween-midnight text-halloween-ghost relative overflow-hidden">
      <BackgroundEffects />

      {/* Hero Section with Video Background */}
      <div className="relative h-screen">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster={movie.image}
          >
            <source src={movie.trailer} type="video/mp4" />
          </video>
          {/* Dark gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-halloween-midnight via-halloween-midnight/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-halloween-midnight via-transparent to-halloween-midnight/80" />
        </div>

        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-8 left-8 z-20 flex items-center gap-2 text-halloween-ghost hover:text-halloween-flame transition-colors duration-300 font-cinzel font-semibold group"
        >
          <ArrowLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-2" />
          Back to Collection
        </button>

        {/* Content */}
        <div className="relative z-10 h-full flex items-end pb-24 px-8 lg:px-16">
          <div className="max-w-7xl w-full">
            {/* Movie Title */}
            <h1 className="font-nosifer text-5xl lg:text-7xl text-halloween-blood drop-shadow-[0_0_30px_rgba(220,38,38,0.9)] animate-flicker mb-6">
              {movie.title}
            </h1>

            {/* Rating badges placeholder - using generic badges for now */}
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-halloween-blood/80 backdrop-blur-sm rounded text-sm font-cinzel font-semibold">
                Horror
              </span>
              <span className="px-3 py-1 bg-halloween-flame/80 backdrop-blur-sm rounded text-sm font-cinzel font-semibold">
                Thriller
              </span>
              <span className="text-halloween-ghost/80 font-cinzel text-sm">2024</span>
            </div>

            {/* Description */}
            <p className="font-cinzel text-lg text-halloween-ghost/90 leading-relaxed max-w-3xl mb-8">
              {movie.description}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <a
                href={movie.watchNowLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-halloween-blood hover:bg-halloween-flame text-white font-cinzel font-bold text-lg rounded-xl overflow-hidden shadow-glow-red hover:shadow-glow-orange transition-all duration-500 hover:scale-105 flex items-center gap-3"
              >
                {/* Dripping blood effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-halloween-blood">
                  <div className="absolute top-0 left-1/4 w-1 h-4 bg-halloween-blood rounded-b-full animate-float" />
                  <div className="absolute top-0 left-1/2 w-1 h-6 bg-halloween-blood rounded-b-full animate-float" style={{ animationDelay: '0.3s' }} />
                  <div className="absolute top-0 left-3/4 w-1 h-3 bg-halloween-blood rounded-b-full animate-float" style={{ animationDelay: '0.6s' }} />
                </div>
                
                <Play className="w-6 h-6 fill-current" />
                <span className="relative z-10 group-hover:animate-flicker">
                  Watch Now
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="relative z-10 px-8 lg:px-16 pb-16 -mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[300px,1fr] gap-8 lg:gap-12">
            {/* Movie Poster */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-fire opacity-50 blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <img
                src={movie.image}
                alt={movie.title}
                className="relative rounded-2xl w-full shadow-glow-orange border-4 border-halloween-flame/40"
              />
            </div>

            {/* Extended Description & Details */}
            <div className="bg-card/60 backdrop-blur-xl rounded-3xl border-2 border-halloween-blood/40 p-8 shadow-glow-red">
              <h2 className="font-nosifer text-3xl text-halloween-flame mb-4">About this film</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-halloween-blood via-halloween-flame to-halloween-candle rounded-full mb-6" />
              
              <p className="font-cinzel text-halloween-ghost/90 leading-relaxed mb-6">
                {movie.description}
              </p>

              <div className="space-y-3 font-cinzel text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-halloween-flame font-semibold min-w-[100px]">Genre:</span>
                  <span className="text-halloween-ghost/80">Horror, Thriller</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-halloween-flame font-semibold min-w-[100px]">Language:</span>
                  <span className="text-halloween-ghost/80">EN</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-halloween-flame font-semibold min-w-[100px]">Release:</span>
                  <span className="text-halloween-ghost/80">2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
