import CTASection from "@/components/CTASection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import VideoTestimonial from "@/components/VideoTestimonial";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <Hero />
      <Features />
      <VideoTestimonial />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
