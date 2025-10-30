import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface MovieCardProps {
  id: string;
  title: string;
  image: string;
}

export const MovieCard = ({ id, title, image }: MovieCardProps) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/movie/${id}`)}
    >
      {/* Pumpkin shape container */}
      <div className="relative w-full aspect-[3/4] transition-all duration-500 ease-out hover:scale-105">
        {/* Pumpkin glow effect */}
        <div className={`absolute inset-0 bg-gradient-pumpkin rounded-3xl transition-all duration-500 ${
          isHovered ? 'opacity-80 blur-2xl scale-110' : 'opacity-40 blur-xl'
        }`} />
        
        {/* Main pumpkin body */}
        <div className="relative h-full bg-gradient-to-br from-halloween-flame/90 to-halloween-pumpkin/80 rounded-3xl border-4 border-halloween-flame/50 overflow-hidden shadow-glow-orange">
          {/* Carved effect overlay */}
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
          
          {/* Movie poster inside pumpkin */}
          <div className="absolute inset-4 rounded-2xl overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>

          {/* Embers effect */}
          {isHovered && (
            <>
              <div className="absolute bottom-4 left-1/4 w-2 h-2 bg-halloween-candle rounded-full animate-float-ember" 
                   style={{ animationDelay: '0s' }} />
              <div className="absolute bottom-6 right-1/3 w-1.5 h-1.5 bg-halloween-flame rounded-full animate-float-ember" 
                   style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-8 left-1/2 w-1 h-1 bg-halloween-candle rounded-full animate-float-ember" 
                   style={{ animationDelay: '1s' }} />
            </>
          )}
        </div>

        {/* Pumpkin stem */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-6 bg-gradient-to-b from-green-700 to-green-900 rounded-t-full" />
      </div>

      {/* Movie title */}
      <h3 className="mt-6 text-center font-nosifer text-xl text-halloween-blood drop-shadow-[0_0_10px_rgba(255,69,0,0.8)] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,69,0,1)]">
        {title}
      </h3>
    </div>
  );
};
