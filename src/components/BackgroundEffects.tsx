import { useEffect, useState } from 'react';

export const BackgroundEffects = () => {
  const [bats, setBats] = useState<number[]>([]);

  useEffect(() => {
    // Create random bats at intervals
    const interval = setInterval(() => {
      setBats(prev => [...prev, Date.now()]);
      setTimeout(() => {
        setBats(prev => prev.slice(1));
      }, 15000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Mist layers */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-halloween-fog/20 to-transparent animate-mist" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-halloween-fog/15 to-transparent animate-mist" 
             style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating bats */}
      {bats.map((id) => (
        <div
          key={id}
          className="absolute top-1/4 left-0 text-2xl animate-bat opacity-60"
          style={{ animationDelay: `${Math.random() * 2}s` }}
        >
          🦇
        </div>
      ))}

      {/* Glowing pumpkins scattered */}
      <div className="absolute bottom-20 left-10 text-6xl opacity-40 animate-glow">
        🎃
      </div>
      <div className="absolute top-1/3 right-20 text-5xl opacity-30 animate-glow" 
           style={{ animationDelay: '1s' }}>
        🎃
      </div>
    </div>
  );
};
