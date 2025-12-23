import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-property.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-end pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern accommodation property in Pretoria"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center w-full">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 opacity-0 animate-fade-up">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
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

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border opacity-0 animate-fade-up animate-delay-400 max-w-xl mx-auto">
            <div>
              <p className="text-3xl font-semibold text-foreground font-heading">12/12</p>
              <p className="text-sm text-muted-foreground mt-1">Month Leases</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-foreground font-heading">Wi-Fi</p>
              <p className="text-sm text-muted-foreground mt-1">Included</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-foreground font-heading">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Managed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
