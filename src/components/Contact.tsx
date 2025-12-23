import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "City of Tshwane",
    detail: "Pretoria, Centurion & surrounding areas",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "Contact on enquiry",
    detail: "We'll respond within 24 hours",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@elimthendeproperty.co.za",
    detail: "General enquiries & bookings",
  },
  {
    icon: Clock,
    label: "Viewings",
    value: "By Appointment",
    detail: "Schedule a property viewing",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted",
      description: "Thank you for your interest. We will contact you shortly.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-background border border-border text-sm font-medium text-muted-foreground mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Book a Viewing Today
          </h2>
          <p className="text-lg text-muted-foreground">
            Interested in our accommodation? Reach out to schedule a viewing or ask any questions you may have.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-semibold text-foreground">{item.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                </div>
              </div>
            ))}

            {/* Trust Note */}
            <div className="p-6 bg-card rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-2 font-heading">
                Why Choose Us
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Professionally managed properties</li>
                <li>• Clear rental terms and agreements</li>
                <li>• Structured tenant processes</li>
                <li>• Secure deposits handled responsibly</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl border border-border p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 font-heading">
              Send an Enquiry
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your accommodation needs..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-background resize-none"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
              >
                Submit Enquiry
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
