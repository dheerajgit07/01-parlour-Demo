import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    service: "Bridal Package",
    rating: 5,
    text: "Absolutely stunning work! The team made me feel like a princess on my wedding day. Their attention to detail in the Royal Bridal look is unmatched.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  },
  {
    name: "Emily Rodriguez",
    service: "Couture Hair Styling",
    rating: 5,
    text: "Best salon experience ever! The atmosphere is so luxurious and the stylists are true artists. I've never felt more confident with my hair.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    name: "Jessica Chen",
    service: "Gold Facial Ritual",
    rating: 5,
    text: "The 24K Gold facial treatment was incredibly relaxing. My skin has a natural radiance that lasted for weeks. Truly a premium experience!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-[10px] font-bold tracking-[0.4em] uppercase mb-6"
          >
            Voice of Elegance
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-white mb-6"
          >
            Client <span className="italic text-amber-200">Experiences</span>
          </motion.h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative bg-neutral-900/40 border-white/5 backdrop-blur-xl h-full group hover:border-amber-500/30 transition-all duration-500 shadow-2xl">
                <CardContent className="pt-10 pb-8 px-8">
                  {/* Quote Icon Decoration */}
                  <Quote className="absolute top-6 right-8 w-10 h-10 text-amber-500/10 group-hover:text-amber-500/20 transition-colors" />
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-tr from-amber-500 to-yellow-200 rounded-full opacity-30 blur-sm group-hover:opacity-60 transition-opacity" />
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="relative w-16 h-16 rounded-full object-cover border-2 border-black"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-serif text-lg tracking-wide">{testimonial.name}</h4>
                      <p className="text-amber-400/80 text-[10px] uppercase tracking-widest font-bold">{testimonial.service}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed italic font-light tracking-wide">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Professional Trust Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
        >
          {/* Aap yahan real brand icons ya text add kar sakte hain */}
          <span className="text-white font-serif tracking-[0.2em] uppercase text-sm italic">Vogue Reviewed</span>
          <span className="text-white font-serif tracking-[0.2em] uppercase text-sm italic">Luxury Spa Certified</span>
          <span className="text-white font-serif tracking-[0.2em] uppercase text-sm italic">Bride's Choice 2026</span>
        </motion.div>
      </div>
    </section>
  );
}