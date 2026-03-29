import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { 
  Scissors, Sparkles, Hand, Heart, Crown, 
  Flower, Palette, Wand2, Gem, ArrowRight 
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Crown,
    title: "Bridal Makeup",
    description: "Flawless bridal makeup with HD finish and luxury trial sessions.",
    price: "From $250",
    image: "https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: Scissors,
    title: "Couture Hair Styling",
    description: "Elegant updos and avant-garde styles with floral enhancements.",
    price: "From $150",
    image: "https://images.unsplash.com/photo-1696835196034-cf22e2b72736?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: Gem,
    title: "Pre-Bridal Rituals",
    description: "Complete skin detoxification and radiance-boosting luxury prep.",
    price: "From $180",
    image: "https://images.unsplash.com/photo-1664549761426-6a1cb1032854?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: Sparkles,
    title: "Gala & Party Look",
    description: "High-glam transformations for elite events and celebrations.",
    price: "From $80",
    image: "https://images.unsplash.com/photo-1505830623932-d9d4d8089283?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: Heart,
    title: "Skin Rejuvenation",
    description: "Advanced facials including 24K Gold and Diamond therapy.",
    price: "From $60",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: Hand,
    title: "Artisanal Mehndi",
    description: "Intricate bridal henna patterns blending tradition with modern art.",
    price: "From $50",
    image: "https://images.unsplash.com/photo-1737214475292-949c0bf920b0?q=80&w=1000&auto=format&fit=crop"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-amber-500 text-xs font-bold tracking-[0.5em] uppercase mb-4 block"
          >
            Exquisite Offerings
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-white mb-6"
          >
            Our Royal <span className="italic text-amber-200">Services</span>
          </motion.h2>
          <div className="w-24 h-[1px] bg-amber-500 mx-auto mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group bg-neutral-900/40 border-white/5 backdrop-blur-md overflow-hidden hover:border-amber-500/30 transition-all duration-500 h-full flex flex-col">
                  {/* Image Container with Gold Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4">
                       <div className="p-2 bg-amber-500 text-black rounded-lg inline-block shadow-lg">
                          <Icon className="w-5 h-5" />
                       </div>
                    </div>
                  </div>

                  <CardHeader className="flex-grow pt-8">
                    <CardTitle className="text-2xl text-white font-serif mb-3 group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {service.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0 pb-8 flex justify-between items-center">
                    <span className="text-xl font-bold text-amber-400 tracking-tight">
                      {service.price}
                    </span>
                    <button className="text-amber-200 text-xs uppercase tracking-widest flex items-center gap-2 group/btn font-bold">
                      Details 
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}