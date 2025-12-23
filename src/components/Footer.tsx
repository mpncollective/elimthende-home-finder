import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#accommodation", label: "Accommodation" },
    { href: "#amenities", label: "Amenities" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  const propertyTypes = [
    "Single Rooms",
    "En-Suite Rooms",
    "Family Houses",
    "Student Accommodation",
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Elimthende Properties & Logistics" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Professional property rental in the City of Tshwane. 
              Quality accommodation for students and families.
            </p>
            <p className="text-background/50 text-xs">
              Pretoria • Centurion • Surrounding Areas
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="font-semibold text-background mb-4 font-heading">
              Property Types
            </h4>
            <ul className="space-y-3">
              {propertyTypes.map((type) => (
                <li key={type}>
                  <span className="text-sm text-background/70">
                    {type}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-background mb-4 font-heading">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm text-background/70">
              <p>City of Tshwane</p>
              <p>Pretoria, South Africa</p>
              <a 
                href="http://elimthendeproperty.co.za/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-background transition-colors"
              >
                elimthendeproperty.co.za
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © {currentYear} Elimthende Properties & Logistics. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
