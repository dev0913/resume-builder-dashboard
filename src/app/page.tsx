
import Banner from "@/components/home/BannerSection";
import Details from "@/components/home/DetailSection";
import FAQs from "@/components/home/FAQSection";
import Hero from "@/components/home/HeroSection";
import Templates from "@/components/home/TemplateSection";
import Testimonials from "@/components/home/TestimonialSection";
import Footer from "@/components/includes/Footer";
import Header from "@/components/includes/Header";






export default function Home() {



  return (


    <div className="bg-[#1E1E1E] text-white overflow-hidden font-[archivo]">
    <Header />  
    <Hero />
    <Templates />
    <Details />
    <Details />
    <Testimonials />
    <Banner />
    <FAQs />
    <Footer />

   </div>
  );
}
