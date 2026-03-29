import { Crown, Sparkles, Heart, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const bridalLooks = [
  {
    name: "Traditional Royal Bride",
    specialty: "Heritage Makeup",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    description: "Classic red and gold aesthetics with heavy kohl eyes."
  },
  {
    name: "Maharani Signature",
    specialty: "Elite Bridal Style",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop",
    description: "Opulent jewelry coordination with matte finish glam."
  },
  {
    name: "Soft Glow Elegance",
    specialty: "Minimalist Luxury",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop",
    description: "Dewy skin and nude tones for a sophisticated day look."
  },
  {
    name: "Golden Hour Glam",
    specialty: "Reception Evening",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=800&auto=format&fit=crop",
    description: "Shimmering lids and bold lips for the grand finale."
  },
  {
    name: "Modern Fusion",
    specialty: "Contemporary Art",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800&auto=format&fit=crop",
    description: "Global techniques meeting Indian traditions."
  },
  {
    name: "Vintage Velvet",
    specialty: "Retro Bridal",
    image: "https://images.unsplash.com/photo-1505830623932-d9d4d8089283?q=80&w=800&auto=format&fit=crop",
    description: "Deep tones and winged liners for a timeless appeal."
  },
  {
    name: "Ethereal Christian Bride",
    specialty: "White Wedding",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=800&auto=format&fit=crop",
    description: "Pristine and clean makeup with subtle highlighting."
  },
  {
    name: "Festive Mehndi Glam",
    specialty: "Vibrant Celebration",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    description: "Playful colors and smudge-proof long-wear finish."
  }
];

export function Models() {
  return (
    <section id="models" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Decorative Text in background */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[12vw] font-serif text-white/[0.03] select-none whitespace-nowrap z-0">
        BEAUTY • PORTFOLIO • ROYAL
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center mb-6"
          >
            <div className="h-[1px] w-12 bg-amber-500/50" />
            <Crown className="w-8 h-8 text-amber-500 mx-4" />
            <div className="h-[1px] w-12 bg-amber-500/50" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-white mb-6"
          >
            The Bridal <span className="italic text-amber-200">Gallery</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 max-w-2xl mx-auto font-light tracking-wide"
          >
            Explore our curated selection of signature bridal transformations. Each look is a masterpiece designed for the modern royalty.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bridalLooks.map((look, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative h-[450px] rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl"
            >
              {/* Image with Parallax-like effect */}
              <img
                src={look.image}
                alt={look.name}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
              />

              {/* Sophisticated Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

              {/* Floating Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-amber-400 text-[10px] uppercase tracking-[0.3em] font-bold">
                        {look.specialty}
                      </span>
                      <h3 className="text-xl text-white font-serif mt-1">{look.name}</h3>
                    </div>
                    <div className="p-2 rounded-full bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4 text-amber-200" />
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {look.description}
                  </p>
                </div>
              </div>

              {/* Heart Icon Toggle */}
              <button className="absolute top-6 right-6 p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-amber-500 hover:border-amber-500 transition-all duration-300">
                <Heart className="w-4 h-4 text-white" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-20"
        >
          <button
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-12 py-5 bg-transparent border border-amber-500/50 text-amber-400 overflow-hidden rounded-full transition-all hover:text-black"
          >
            <div className="absolute inset-0 bg-amber-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 font-bold uppercase tracking-widest text-xs flex items-center gap-3">
              Consult with Our Artists <Sparkles className="w-4 h-4" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}