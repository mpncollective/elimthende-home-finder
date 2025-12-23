import { 
  Wifi, 
  Zap, 
  Utensils, 
  WashingMachine, 
  Sofa, 
  Car,
  Lock,
  ShieldCheck
} from "lucide-react";

const amenities = [
  {
    icon: Wifi,
    title: "Wi-Fi Included",
    description: "Stay connected with reliable internet access included in your rent.",
  },
  {
    icon: Zap,
    title: "Prepaid Electricity",
    description: "Control your usage with prepaid electricity - pay for what you use.",
  },
  {
    icon: Utensils,
    title: "Fully Equipped Kitchen",
    description: "Shared kitchen with all essential appliances for meal preparation.",
  },
  {
    icon: WashingMachine,
    title: "Laundry Facilities",
    description: "On-site laundry facilities available for all residents.",
  },
  {
    icon: Sofa,
    title: "Furnished Rooms",
    description: "Rooms come furnished with bed, desk, chair, and storage.",
  },
  {
    icon: Car,
    title: "Garage Available",
    description: "Secure garage parking available at R600 per month.",
  },
  {
    icon: Lock,
    title: "Lockable Rooms",
    description: "Each room has its own lock for your privacy and security.",
  },
  {
    icon: ShieldCheck,
    title: "Managed Property",
    description: "Professionally managed with clear rental terms and processes.",
  },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary border border-border text-sm font-medium text-muted-foreground mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Amenities & Features
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need for comfortable living, all included in our professionally managed properties.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/20 hover:shadow-subtle transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <amenity.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-heading">
                {amenity.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Shared Areas Note */}
        <div className="mt-16 p-8 bg-secondary rounded-2xl border border-border">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2 font-heading">
                Shared Living Spaces
              </h3>
              <p className="text-muted-foreground">
                Our student accommodation features open-plan shared areas including a comfortable lounge, 
                dining area, fully equipped kitchen, and laundry facilities. Perfect for a balanced lifestyle 
                of study and social interaction.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-block px-6 py-3 bg-background rounded-lg text-sm font-medium text-foreground">
                Close to IIE Varsity College
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
