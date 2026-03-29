import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

interface HeroProps {
  onBookNow: () => void;
}

export function Hero({ onBookNow }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Setup */}
      <div className="absolute inset-0 z-0">
        <video 
          src="https://v.ftcdn.net/18/83/72/68/240_F_1883726883_H0UoyTsL5AOiLKgRnKIDCN8TMnt3TMKC_ST.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Professional Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="w-8 h-8 mr-2" />
          <span className="text-lg tracking-widest uppercase text-amber-200">Premium Beauty Care</span>
        </div>
        <h1 className="text-5xl md:text-7xl mb-6 font-serif">
          Enhance Your Natural Beauty
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
          Experience luxury beauty treatments in a serene and elegant environment
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-rose-600 hover:bg-rose-700 rounded-full transition-transform hover:scale-105"
            onClick={onBookNow}
          >
            Book Appointment
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 rounded-full transition-transform hover:scale-105"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
}