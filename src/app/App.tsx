import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Models } from "./components/Models";
import { BookingForm } from "./components/BookingForm";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="hero">
        <Hero onBookNow={scrollToBooking} />
      </div>
      <Services />
      <Models />
      <Testimonials />
      <BookingForm />
      <Footer />
      <Toaster />
    </div>
  );
}
