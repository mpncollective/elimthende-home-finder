import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import roomSingle from "@/assets/room-single.jpg";
import roomEnsuite from "@/assets/room-ensuite.jpg";
import familyHouse from "@/assets/family-house.jpg";

const accommodationTypes = [
  {
    id: 1,
    title: "Single Room",
    description: "Lockable private room with study space, perfect for focused students.",
    price: "R7,000",
    period: "per month",
    deposit: "R8,000",
    image: roomSingle,
    features: [
      "Private lockable room",
      "Quarter bed & base",
      "Study table & chair",
      "Bookshelf included",
      "Two side tables",
      "Side lamp",
    ],
  },
  {
    id: 2,
    title: "En-Suite Room",
    description: "Private room with your own bathroom for added comfort and privacy.",
    price: "R9,000",
    period: "per month",
    deposit: "R9,500",
    image: roomEnsuite,
    featured: true,
    features: [
      "Private en-suite bathroom",
      "Quarter bed & base",
      "Study table & chair",
      "Bookshelf included",
      "Bar fridge (selected)",
      "Side lamp & tables",
    ],
  },
  {
    id: 3,
    title: "Family House",
    description: "Full houses available for families seeking privacy and stability.",
    price: "On Enquiry",
    period: "",
    deposit: "Varies",
    image: familyHouse,
    features: [
      "Full standalone house",
      "Private garden space",
      "Multiple bedrooms",
      "Family-friendly area",
      "Long-term rental",
      "Viewing required",
    ],
  },
];

const Accommodation = () => {
  return (
    <section id="accommodation" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-background border border-border text-sm font-medium text-muted-foreground mb-4">
            Our Properties
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Explore Our Accommodation
          </h2>
          <p className="text-lg text-muted-foreground">
            From student rooms near IIE Varsity College to family houses across Tshwane, 
            we offer professionally managed properties to suit your needs.
          </p>
        </div>

        {/* Accommodation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodationTypes.map((item) => (
            <div
              key={item.id}
              className={`bg-card rounded-2xl overflow-hidden shadow-subtle hover:shadow-hover transition-all duration-300 hover:-translate-y-1 ${
                item.featured ? "ring-2 ring-primary" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {item.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Popular
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 font-heading">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-2xl font-semibold text-foreground">
                    {item.price}
                  </span>
                  {item.period && (
                    <span className="text-sm text-muted-foreground">
                      {item.period}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Deposit Info */}
                <p className="text-xs text-muted-foreground mb-4">
                  Deposit: {item.deposit}
                </p>

                {/* CTA */}
                <Button 
                  className={`w-full gap-2 ${
                    item.featured 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  Enquire Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
