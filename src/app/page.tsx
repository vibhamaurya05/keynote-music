import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import FeaturedCourses from "@/components/ui/FeaturedCourses";
import UpcomingWebinars from "@/components/ui/UpcomingWebinars";
import WhyChooseUs from "@/components/ui/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        
        <HeroSection/>
        <FeaturedCourses/>
        <WhyChooseUs/>
        <MusicSchoolTestimonials/>
        <UpcomingWebinars/>
    </main>    
  );
}
