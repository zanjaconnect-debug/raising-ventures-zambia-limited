import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  Shield,
  Users,
  Zap,
  Phone,
  Mail,
  Star,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function WhyUs() {
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
            <Link to="/why-us" className="text-sm font-medium text-primary">
              Why Us
            </Link>
            <Link
              to="/property"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              Property Desk
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Why Choose Raising Ventures?</h1>
          <p className="text-lg opacity-90">
            9+ years of expertise in company registration and compliance
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <p className="text-xl text-foreground/80 leading-relaxed">
              Since 2016, Raising Ventures Zambia has helped Zambians and
              International Investors register companies 100% online. We
              specialize in PACRA foreign compliance and branch registration.
            </p>
          </div>

          {/* Why Us Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Clock,
                title: "Fast & Efficient",
                desc: "3-7 working days. We handle everything while you focus on your business.",
              },
              {
                icon: Shield,
                title: "100% Compliant",
                desc: "PACRA certified. ZRA registered. All government requirements met.",
              },
              {
                icon: Zap,
                title: "Fully Online",
                desc: "No office visits. Submit documents digitally. Get certificates online.",
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Dedicated specialists in PACRA, ZRA, and foreign investment regulations.",
              },
              {
                icon: CheckCircle2,
                title: "Transparent Pricing",
                desc: "No hidden fees. Clear pricing for Zambians and Foreigners.",
              },
              {
                icon: Star,
                title: "24/7 Support",
                desc: "AI chat, WhatsApp, email. We're here when you need us.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="border border-border hover:border-primary/50 transition">
                <CardContent className="pt-6">
                  <item.icon className="text-accent mb-4" size={32} />
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Specializations */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Our Specializations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "PACRA Foreign Compliance",
                  desc: "We handle all foreign investor requirements for PACRA registration.",
                },
                {
                  title: "Branch Registration",
                  desc: "Register your international company's branch in Zambia seamlessly.",
                },
                {
                  title: "Diaspora Services",
                  desc: "Specially designed services for Zambians living abroad.",
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-accent/5 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Chileshe M.",
                role: "Tech Startup Founder",
                text: "Raising Ventures made company registration effortless. From start to finish in 5 days. Highly recommended!",
                rating: 5,
              },
              {
                name: "James K.",
                role: "International Investor",
                text: "As a foreigner, I was worried about the process. Their team guided me through every step. Excellent service!",
                rating: 5,
              },
              {
                name: "Nalumino P.",
                role: "Diaspora Entrepreneur",
                text: "Registered my company from abroad without any hassle. The 24/7 support was invaluable. Thank you!",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="border border-border">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join 1000+ companies that trust Raising Ventures Zambia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100"
              >
                View Services & Pricing
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <a
              href="https://wa.me/260979333072"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white"
              >
                <Phone size={18} className="mr-2" />
                WhatsApp Us
              </Button>
            </a>
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
                <Link to="/property" className="block hover:opacity-80">
                  Property Desk
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
                  href="mailto:airsite.mundia@gmail.com"
                  className="flex items-center gap-2 hover:opacity-80"
                >
                  <Mail size={16} />
                  airsite.mundia@gmail.com
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
