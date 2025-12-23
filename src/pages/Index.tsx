import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Accommodation from "@/components/Accommodation";
import Amenities from "@/components/Amenities";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Accommodation />
        <Amenities />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
