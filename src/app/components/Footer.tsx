import { Sparkles, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand & Philosophy */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-500 rounded-lg">
                <Sparkles className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-serif tracking-tighter">
                Royal <span className="text-amber-400 italic">Radiance</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Crafting timeless beauty through artisanal techniques and luxury wellness rituals. 
              Your sanctuary for high-fashion transformations.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-amber-500 hover:text-black transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links / Services */}
          <div>
            <h3 className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-8">Our Signature</h3>
            <ul className="space-y-4 text-gray-400 text-sm font-light">
              <li className="hover:text-amber-200 transition-colors cursor-pointer tracking-wide">Bridal Masterclass</li>
              <li className="hover:text-amber-200 transition-colors cursor-pointer tracking-wide">Luxury Skin Rituals</li>
              <li className="hover:text-amber-200 transition-colors cursor-pointer tracking-wide">Couture Hair Art</li>
              <li className="hover:text-amber-200 transition-colors cursor-pointer tracking-wide">Global Aesthetics</li>
              <li className="hover:text-amber-200 transition-colors cursor-pointer tracking-wide">Membership Elite</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-8">Get In Touch</h3>
            <div className="space-y-5 text-gray-400 text-sm font-light">
              <div className="flex items-start gap-4 group cursor-pointer">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                <span className="group-hover:text-white transition-colors">
                  123 Luxury Avenue, <br /> New Delhi, India 110001
                </span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="group-hover:text-white transition-colors">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="group-hover:text-white transition-colors">concierge@royalradiance.com</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/5 backdrop-blur-md">
            <h3 className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-6 flex items-center gap-2">
              <Clock className="w-4 h-4" /> Studio Hours
            </h3>
            <div className="space-y-4 text-xs tracking-widest">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-500 font-medium">MON - FRI</span>
                <span className="text-white">09:00 — 20:00</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-500 font-medium">SATURDAY</span>
                <span className="text-white">10:00 — 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 font-medium">SUNDAY</span>
                <span className="text-amber-400 italic font-bold uppercase">Reserved</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">
            &copy; {currentYear} Royal Radiance Studio. Designed for Excellence.
          </p>
          <div className="flex gap-8 text-[10px] text-gray-500 uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}