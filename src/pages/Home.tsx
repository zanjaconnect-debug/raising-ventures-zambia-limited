import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { CheckCircle2, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
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
            <Link
              to="/property"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              Property Desk
            </Link>
            <a
              href="https://wa.me/260979333072"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent hover:text-accent/80 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full -ml-36 -mb-36" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Register Your Company in Zambia in 7 Days.
              <span className="text-accent"> 100% Online.</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Raising Ventures Zambia - Since 2016. PACRA, ZRA, Bank Account.
              For Locals & Foreigners.
            </p>

            {/* Trust Bar */}
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-12">
              <div className="flex flex-col md:flex-row gap-4 text-sm text-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-accent" size={18} />
                  <span>9+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-accent" size={18} />
                  <span>100% Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-accent" size={18} />
                  <span>Diaspora & International Welcome</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white"
                >
                  For Zambians - View Prices
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white"
                >
                  For Foreigners - View Prices
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-primary/5 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                1000+
              </div>
              <p className="text-foreground/70">Companies Registered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">9+</div>
              <p className="text-foreground/70">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">48hrs</div>
              <p className="text-foreground/70">Average Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Simple 4-Step Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Submit Details",
                desc: "Provide company info via chat or form",
              },
              {
                step: "2",
                title: "Make Payment",
                desc: "Mobile money or bank transfer",
              },
              {
                step: "3",
                title: "We Handle It",
                desc: "Complete PACRA & ZRA registration",
              },
              {
                step: "4",
                title: "Get Certificates",
                desc: "Digital delivery in 3-7 days",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Register Your Company?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Start your registration today. We're available 24/7 via chat,
            WhatsApp, or email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/260979333072?text=Hello%20Raising%20Ventures%21%20I%20want%20to%20register%20my%20company%20in%20Zambia.%20Please%20send%20pricing%20options%20and%20requirements%20based%20on%20my%20needs.%20Ready%20to%20start%20immediately."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100"
              >
                <Phone size={18} className="mr-2" />
                WhatsApp Us Now
              </Button>
            </a>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white"
              asChild
            >
              <Link to="/services">View All Services</Link>
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
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="https://wa.me/260979333072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition"
                >
                  <Phone size={16} />
                  +260 979 333 072
                </a>
                <a
                  href="mailto:airsite.mundia@gmail.com"
                  className="flex items-center gap-2 hover:opacity-80 transition"
                >
                  <Mail size={16} />
                  airsite.mundia@gmail.com
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link to="/services" className="block hover:opacity-80">
                  Services & Pricing
                </Link>
                <Link to="/why-us" className="block hover:opacity-80">
                  Why Us
                </Link>
                <Link to="/property" className="block hover:opacity-80">
                  Property Desk
                </Link>
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
