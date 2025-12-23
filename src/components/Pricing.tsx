import { Check, Info } from "lucide-react";

const pricingDetails = [
  {
    category: "Student Rooms",
    items: [
      { label: "Single Room", value: "R7,000 / month" },
      { label: "En-Suite Room", value: "R9,000 / month" },
    ],
  },
  {
    category: "Deposits",
    items: [
      { label: "Single Room Deposit", value: "R8,000" },
      { label: "En-Suite Deposit", value: "R9,500" },
    ],
  },
  {
    category: "Additional Fees",
    items: [
      { label: "Admin Fee", value: "R1,782.50" },
      { label: "Garage (optional)", value: "R600 / month" },
    ],
  },
];

const inclusions = [
  "Wi-Fi connection",
  "Water included",
  "Furnished room",
  "Shared kitchen access",
  "Laundry facilities",
  "Common lounge & dining",
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-background/20 backdrop-blur-md border border-background/30 text-sm font-medium text-background mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-background mb-6">
            Rental Information
          </h2>
          <p className="text-lg text-background/70">
            Clear, upfront pricing with no hidden costs. All rentals are on a 12-month lease with rent paid in advance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Pricing Table */}
          <div className="space-y-8">
            {pricingDetails.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold text-background mb-4 font-heading">
                  {section.category}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex items-center justify-between p-4 bg-background/10 backdrop-blur-sm rounded-lg border border-background/20 hover:bg-background/15 transition-colors"
                    >
                      <span className="text-background/80">{item.label}</span>
                      <span className="font-semibold text-background">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* What's Included */}
          <div>
            <div className="bg-background/10 backdrop-blur-md rounded-2xl border border-background/20 p-8 shadow-subtle">
              <h3 className="text-xl font-semibold text-background mb-6 font-heading">
                What's Included
              </h3>
              <ul className="space-y-4 mb-8">
                {inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-background/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-background" />
                    </div>
                    <span className="text-background/80">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Note */}
              <div className="flex gap-3 p-4 bg-background/10 backdrop-blur-sm rounded-lg border border-background/20">
                <Info className="h-5 w-5 text-background/60 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-background/60">
                  <p className="mb-1">
                    <strong className="text-background/80">Prepaid electricity</strong> — You control your usage and costs.
                  </p>
                  <p>
                    <strong className="text-background/80">Viewing by appointment</strong> — Contact us to schedule a visit.
                  </p>
                </div>
              </div>
            </div>

            {/* Family Houses Note */}
            <div className="mt-6 p-6 bg-background/10 backdrop-blur-md rounded-xl border border-background/20 shadow-subtle">
              <h4 className="font-semibold text-background mb-2 font-heading">
                Family Houses
              </h4>
              <p className="text-sm text-background/70">
                Pricing for family houses varies based on size, location, and features. 
                Contact us for available properties and to arrange a viewing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
