import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar as CalendarIcon, Sparkles, Send } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import { motion } from "framer-motion";

const services = [
  "Bridal Makeup",
  "Bridal Hair Styling",
  "Pre-Bridal Packages",
  "Party Makeup",
  "Facial & Skin Care",
  "Mehndi (Henna) Art",
  "Full Bridal Package"
];

const timeSlots = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM", "7:00 PM"];

export function BookingForm() {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    time: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !formData.name || !formData.service) {
      toast.error("Please complete the required royal details");
      return;
    }
    toast.success("Your luxury experience is being scheduled!");
    // Reset Logic here...
  };

  return (
    <section id="booking" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Aesthetic Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full -translate-x-1/2" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span className="text-amber-200 text-xs font-bold tracking-[0.5em] uppercase">Private Concierge</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Reserve Your <span className="italic text-amber-200">Spot</span>
          </h2>
          <p className="text-gray-400 font-light tracking-wide max-w-lg mx-auto">
            Schedule your personalized beauty ritual with our master artists. 
            Limited slots available for the current season.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative group"
        >
          {/* Decorative Border Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/30 to-yellow-200/10 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <form 
            onSubmit={handleSubmit} 
            className="relative space-y-8 bg-neutral-900/60 backdrop-blur-2xl p-8 md:p-12 rounded-3xl border border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-amber-100/70 text-[10px] uppercase tracking-widest ml-1">Full Name</Label>
                <Input
                  id="name"
                  className="bg-white/5 border-white/10 text-white h-12 focus:border-amber-500/50 transition-all rounded-xl"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-amber-100/70 text-[10px] uppercase tracking-widest ml-1">Phone Number</Label>
                <Input
                  id="phone"
                  className="bg-white/5 border-white/10 text-white h-12 focus:border-amber-500/50 transition-all rounded-xl"
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <Label className="text-amber-100/70 text-[10px] uppercase tracking-widest ml-1">Desired Service</Label>
                <Select onValueChange={(v) => setFormData({ ...formData, service: v })}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 rounded-xl">
                    <SelectValue placeholder="Select Experience" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/10 text-white">
                    {services.map((s) => (
                      <SelectItem key={s} value={s} className="focus:bg-amber-500 focus:text-black cursor-pointer">{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date Picker */}
              <div className="space-y-2">
                <Label className="text-amber-100/70 text-[10px] uppercase tracking-widest ml-1">Preferred Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full h-12 justify-start text-left bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl transition-all">
                      <CalendarIcon className="mr-3 h-4 w-4 text-amber-500" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-neutral-900 border-white/10">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      className="bg-neutral-900 text-white rounded-xl"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Selection */}
              <div className="space-y-2 md:col-span-2">
                <Label className="text-amber-100/70 text-[10px] uppercase tracking-widest ml-1">Select Time Slot</Label>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData({...formData, time})}
                      className={`py-3 rounded-xl text-xs font-bold tracking-widest transition-all border ${
                        formData.time === time 
                        ? "bg-amber-500 border-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]" 
                        : "bg-white/5 border-white/10 text-white hover:border-amber-500/50"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="space-y-2">
              <Label htmlFor="notes" className="text-amber-100/70 text-[10px] uppercase tracking-widest ml-1">Special Instructions</Label>
              <Textarea
                id="notes"
                className="bg-white/5 border-white/10 text-white min-h-[120px] focus:border-amber-500/50 transition-all rounded-2xl"
                placeholder="Any specific requests for our team?"
              />
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full h-14 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-black uppercase tracking-[0.2em] text-xs rounded-2xl transition-all shadow-[0_10px_30px_rgba(245,158,11,0.2)] flex gap-3"
            >
              Submit Request <Send className="w-4 h-4" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}