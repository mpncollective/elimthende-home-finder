import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/background.png";

const Hero = () => {
  return (
    <section id="home" className="relative h-[calc(85vh+150px)] flex items-end pb-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern accommodation property in Pretoria"
          className="w-full h-full object-cover object-bottom"
        />
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'linear-gradient(to top, #f5f5f5 0%, #f5f5f5 20%, rgba(245, 245, 245, 0.8) 30%, rgba(245, 245, 245, 0.4) 45%, rgba(245, 245, 245, 0.1) 60%, transparent 75%)' 
          }} 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-12 pb-16 md:pb-32 text-center w-full">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 backdrop-blur-md border border-white/20 mb-8 opacity-0 animate-fade-up">
            <MapPin className="h-4 w-4 text-foreground" />
            <span className="text-sm font-medium text-foreground">
              City of Tshwane, Pretoria
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 opacity-0 animate-fade-up animate-delay-100">
            Quality Accommodation You Can Trust
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 opacity-0 animate-fade-up animate-delay-200">
            Professionally managed student rooms and family houses in Pretoria and Centurion. 
            Secure, comfortable, and conveniently located near IIE Varsity College.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center opacity-0 animate-fade-up animate-delay-300">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base px-8"
              asChild
            >
              <a href="#accommodation">
                View Accommodation
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
