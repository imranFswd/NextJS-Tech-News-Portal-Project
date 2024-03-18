

import FeaturedBrandsSection from "@/components/main/featured/FeaturedBrandsSection";
import FeaturedSection from "@/components/main/featured/FeaturedSection";
import HeroSection from "@/components/main/hero/HeroSection";
import TestimonialCards from "@/components/main/testimonial/TestimonialCards";
import { Spotlight } from "@/components/ui/aceternity/Spotlight";


export default function Home() {
  return (
    <div>
      <div>
        <div>

        <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
        />

        

        <HeroSection />

        <FeaturedSection />

        <TestimonialCards />

        <FeaturedBrandsSection />

        

        </div>    
      </div>
    </div>
  );
}
