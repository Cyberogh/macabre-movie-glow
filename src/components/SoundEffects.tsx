import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const SoundEffects = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with ambient Halloween sounds (wind, creaking)
    // Using a Halloween ambient sound from a reliable source
    audioRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2459/2459-preview.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(err => {
        console.log('Audio autoplay prevented:', err);
      });
      setIsPlaying(true);
    }
  };

  return (
    <button
      onClick={toggleSound}
      className="fixed bottom-8 right-8 z-50 bg-halloween-blood/80 hover:bg-halloween-blood backdrop-blur-sm p-4 rounded-full shadow-glow-red transition-all duration-300 hover:scale-110 group"
      aria-label={isPlaying ? 'Mute sound' : 'Play sound'}
    >
      {isPlaying ? (
        <Volume2 className="w-6 h-6 text-halloween-ghost animate-pulse" />
      ) : (
        <VolumeX className="w-6 h-6 text-halloween-ghost" />
      )}
      <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/90 text-halloween-ghost text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-cinzel">
        {isPlaying ? 'Mute Ambient Sounds' : 'Play Ambient Sounds'}
      </span>
    </button>
  );
};
