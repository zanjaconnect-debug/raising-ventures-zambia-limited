import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Home, AlertCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function Property() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    propertyType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi Raising Ventures Property Desk!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCountry: ${formData.country}\nProperty Type: ${formData.propertyType}\nBudget: ${formData.budget}\n\nMessage: ${formData.message}`;
    window.open(
      `https://wa.me/260979333072?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
    toast.success("Opening WhatsApp...");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-30 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition">
            <Logo className="h-8" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/services"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              Services & Pricing
            </Link>
            <Link
              to="/why-us"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              Why Us
            </Link>
            <Link to="/property" className="text-sm font-medium text-primary">
              Property Desk
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Buying Property, Farm, Car or Mine in Zambia?
          </h1>
          <p className="text-lg opacity-90">
            We connect international investors to verified sellers
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Info */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Important Note */}
                <Card className="border-2 border-accent/50 bg-accent/5">
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <AlertCircle className="text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground mb-2">
                          Important
                        </p>
                        <p className="text-sm text-foreground/70">
                          Foreigners must have a registered company in Zambia
                          first.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* How It Works */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    How It Works
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        step: "1",
                        title: "Submit Your Details",
                        desc: "Tell us what you're looking for",
                      },
                      {
                        step: "2",
                        title: "We Connect You",
                        desc: "We match you with verified sellers",
                      },
                      {
                        step: "3",
                        title: "Negotiate & Close",
                        desc: "We guide you through the process",
                      },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-3">
                        <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">
                            {item.title}
                          </p>
                          <p className="text-sm text-foreground/60">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Commission Info */}
                <Card className="border border-primary/20 bg-primary/5">
                  <CardContent className="pt-6">
                    <p className="text-sm font-semibold text-primary mb-2">
                      💰 Commission Model
                    </p>
                    <p className="text-sm text-foreground/70">
                      We earn commission from sellers. You pay no extra fee.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Tell Us What You're Looking For
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your full name"
                        className="mt-2"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Email *
                      </label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your@email.com"
                        className="mt-2"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Phone Number *
                      </label>
                      <Input
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+260 9XX XXX XXX"
                        className="mt-2"
                      />
                    </div>

                    {/* Country */}
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Country *
                      </label>
                      <Input
                        required
                        value={formData.country}
                        onChange={(e) =>
                          setFormData({ ...formData, country: e.target.value })
                        }
                        placeholder="Your country"
                        className="mt-2"
                      />
                    </div>

                    {/* Property Type */}
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        What are you looking for? *
                      </label>
                      <select
                        required
                        value={formData.propertyType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            propertyType: e.target.value,
                          })
                        }
                        className="w-full mt-2 px-3 py-2 border border-border rounded-md bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select property type</option>
                        <option value="residential">Residential Property</option>
                        <option value="commercial">Commercial Property</option>
                        <option value="farm">Farm/Agricultural Land</option>
                        <option value="mining">Mining Claim/Concession</option>
                        <option value="car">Vehicle/Car</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Budget Range *
                      </label>
                      <Input
                        required
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        placeholder="e.g., $100,000 - $500,000 USD"
                        className="mt-2"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Additional Details
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us more about what you're looking for..."
                        className="mt-2 min-h-24"
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-white"
                    >
                      Submit & Connect on WhatsApp
                      <ArrowRight className="ml-2" size={18} />
                    </Button>

                    <p className="text-xs text-foreground/60 text-center">
                      By submitting, you'll be connected via WhatsApp for
                      further discussion.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="bg-primary/5 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            What We Can Help With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Home,
                title: "Residential Property",
                desc: "Houses, apartments, and residential land in prime locations",
              },
              {
                icon: Home,
                title: "Commercial Property",
                desc: "Office spaces, retail, warehouses, and commercial land",
              },
              {
                icon: Home,
                title: "Agricultural Land",
                desc: "Farms, plantations, and agricultural concessions",
              },
              {
                icon: Home,
                title: "Mining Claims",
                desc: "Mining concessions and mineral exploration rights",
              },
              {
                icon: Home,
                title: "Vehicles",
                desc: "Commercial and personal vehicles",
              },
              {
                icon: Home,
                title: "Other Assets",
                desc: "Heavy equipment, machinery, and other valuable assets",
              },
            ].map((item, idx) => (
              <Card key={idx} className="border border-border hover:border-primary/50 transition">
                <CardContent className="pt-6">
                  <item.icon className="text-accent mb-4" size={32} />
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Why Choose Our Property Desk
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                title: "Verified Sellers",
                desc: "We work only with legitimate, verified property sellers",
              },
              {
                title: "Expert Guidance",
                desc: "Our team guides you through every step of the process",
              },
              {
                title: "No Extra Fees",
                desc: "We earn commission from sellers, not from you",
              },
              {
                title: "Legal Support",
                desc: "We ensure all transactions are compliant and secure",
              },
            ].map((item, idx) => (
              <Card key={idx} className="border border-border">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Property?</h2>
          <p className="text-lg mb-8 opacity-90">
            Submit your details above or contact us directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/260979333072"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100"
              >
                <Phone size={18} className="mr-2" />
                WhatsApp Us
              </Button>
            </a>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white"
              asChild
            >
              <a href="mailto:property@raisingventures.zm">
                <Mail size={18} className="mr-2" />
                Email Property Desk
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <Logo className="h-8 mb-4" />
              <p className="text-sm opacity-90">
                Raising Ventures Zambia Limited
              </p>
              <p className="text-xs opacity-75 mt-2">Since 2016</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link to="/" className="block hover:opacity-80">
                  Home
                </Link>
                <Link to="/services" className="block hover:opacity-80">
                  Services & Pricing
                </Link>
                <Link to="/why-us" className="block hover:opacity-80">
                  Why Us
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="https://wa.me/260979333072"
                  className="flex items-center gap-2 hover:opacity-80"
                >
                  <Phone size={16} />
                  +260 979 333 072
                </a>
                <a
                  href="mailto:property@raisingventures.zm"
                  className="flex items-center gap-2 hover:opacity-80"
                >
                  <Mail size={16} />
                  property@raisingventures.zm
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-75">
            <p>© 2026 Raising Ventures Zambia. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
