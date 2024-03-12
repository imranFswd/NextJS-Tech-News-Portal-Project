
import Header from "@/components/header/Header";
import FeaturedSection from "@/components/main/featured/FeaturedSection";
import HeroSection from "@/components/main/hero/HeroSection";
import TestimonialCards from "@/components/main/testimonial/TestimonialCards";
import { Spotlight } from "@/components/ui/Spotlight";


export default function Home() {
  return (
    <div>
      <div>

        <div>

        <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
        />

        <Header />

        <HeroSection />

        <FeaturedSection />

        <TestimonialCards />

        </div>


        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="hidden">
          <h1 className="text-4xl">
            <span className="text-green-600">Welcome</span>
            <span className="pl-2">to world most popular</span>
            <span className="text-red-600 inline-block pl-2">Tech News</span>
            <span className="pl-2">portal</span>
          </h1>
        </div>


      </main>

      
      </div>
    </div>
  );
}
