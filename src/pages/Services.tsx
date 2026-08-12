import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  Copy,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function Services() {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(""), 2000);
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
              className="text-sm font-medium text-primary"
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
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Services & Pricing</h1>
          <p className="text-lg opacity-90">
            Choose the perfect plan for your company registration
          </p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Tabs defaultValue="zambians" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="zambians" className="text-base">
                For Zambians
              </TabsTrigger>
              <TabsTrigger value="foreigners" className="text-base">
                For Foreigners & Diaspora
              </TabsTrigger>
            </TabsList>

            {/* Zambians Tab */}
            <TabsContent value="zambians">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Limited Company */}
                <Card className="border-2 border-primary/20 hover:border-primary/50 transition">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">
                      Limited Company Registration
                    </CardTitle>
                    <div className="text-4xl font-bold text-accent mt-4">
                      K4,990
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <p className="font-semibold text-foreground">Includes:</p>
                      {[
                        "Company Name Search",
                        "PACRA Certificate",
                        "ZRA TPIN Registration",
                        "Company Seal",
                        "Service Fee",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="text-accent mt-1 flex-shrink-0" />
                          <span className="text-foreground/80">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 bg-accent/10 p-3 rounded-lg">
                      <Clock className="text-accent" size={18} />
                      <span className="text-sm font-medium text-foreground">
                        5-7 Working Days. 100% Online.
                      </span>
                    </div>
                    <Button
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href="https://wa.me/260979333072?text=Hello%20Raising%20Ventures%21%20I%20need%20Limited%20Company%20Registration%20%28K4%2C990%29.%20Please%20send%20requirements%20and%20timeline.%20Ready%20to%20proceed%20immediately.">
                        Get Started
                        <ArrowRight className="ml-2" size={18} />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Business Name */}
                <Card className="border-2 border-accent/20 hover:border-accent/50 transition">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">
                      Business Name Registration
                    </CardTitle>
                    <div className="text-4xl font-bold text-accent mt-4">
                      K1,700
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <p className="font-semibold text-foreground">Includes:</p>
                      {[
                        "PACRA Registration",
                        "ZRA TPIN",
                        "Business Certificate",
                        "Service Fee",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="text-accent mt-1 flex-shrink-0" />
                          <span className="text-foreground/80">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 bg-accent/10 p-3 rounded-lg">
                      <Clock className="text-accent" size={18} />
                      <span className="text-sm font-medium text-foreground">
                        3-5 Working Days. 100% Online.
                      </span>
                    </div>
                    <Button
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90"
                      asChild
                    >
                      <a href="https://wa.me/260979333072?text=Hello%20Raising%20Ventures%21%20I%20need%20Business%20Name%20Registration%20%28K1%2C700%29.%20Please%20send%20requirements%20and%20timeline.%20Ready%20to%20proceed%20immediately.">
                        Get Started
                        <ArrowRight className="ml-2" size={18} />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Foreigners Tab */}
            <TabsContent value="foreigners">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* New Company */}
                <Card className="border-2 border-primary/20 hover:border-primary/50 transition">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      New Zambian Company
                    </CardTitle>
                    <div className="text-3xl font-bold text-accent mt-4">
                      $800 USD
                    </div>
                    <p className="text-xs text-foreground/60 mt-2">
                      For Foreign Nationals
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <p className="font-semibold text-foreground">Includes:</p>
                      {[
                        "Name Search",
                        "PACRA Registration",
                        "ZRA TPIN",
                        "Company Seal",
                        "Compliance Guidance",
                        "Service Fee",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="text-accent mt-1 flex-shrink-0" />
                          <span className="text-sm text-foreground/80">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 bg-accent/10 p-3 rounded-lg">
                      <Clock className="text-accent" size={18} />
                      <span className="text-xs font-medium text-foreground">
                        7-10 Days. We handle PACRA foreign requirements.
                      </span>
                    </div>
                    <Button
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-sm"
                      asChild
                    >
                      <a href="https://wa.me/260979333072?text=Hello%20Raising%20Ventures%21%20I%20need%20New%20Zambian%20Company%20Registration%20%28%24800%20USD%29%20as%20a%20foreign%20national.%20Please%20provide%20requirements%20and%20next%20steps.%20Ready%20to%20proceed.">
                        Get Started
                        <ArrowRight className="ml-2" size={16} />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Branch Registration */}
                <Card className="border-2 border-accent/20 hover:border-accent/50 transition md:col-span-1">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      Branch Registration
                    </CardTitle>
                    <div className="text-3xl font-bold text-accent mt-4">
                      $2,000 USD
                    </div>
                    <p className="text-xs text-foreground/60 mt-2">
                      Foreign Company Branch
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <p className="font-semibold text-foreground">Includes:</p>
                      {[
                        "PACRA Registration",
                        "ZRA Setup",
                        "Compliance Setup",
                        "Full Documentation",
                        "Service Fee",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="text-accent mt-1 flex-shrink-0" />
                          <span className="text-sm text-foreground/80">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <p className="text-xs text-foreground/70">
                        <strong>Note:</strong> Requires documents from parent
                        company
                      </p>
                    </div>
                    <div className="flex items-center gap-2 bg-accent/10 p-3 rounded-lg">
                      <Clock className="text-accent" size={18} />
                      <span className="text-xs font-medium text-foreground">
                        10-15 Days
                      </span>
                    </div>
                    <Button
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-sm"
                      asChild
                    >
                      <a href="https://wa.me/260979333072?text=Hello%20Raising%20Ventures%21%20I%20need%20Branch%20Registration%20%28%242%2C000%20USD%29%20for%20my%20foreign%20company.%20I%20have%20parent%20company%20documents%20ready.%20Please%20advise%20next%20steps.">
                        Get Started
                        <ArrowRight className="ml-2" size={16} />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Additional Services */}
                <div className="space-y-6">
                  <Card className="border-2 border-primary/20 hover:border-primary/50 transition">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">
                        Bank Account Assistance
                      </CardTitle>
                      <div className="text-2xl font-bold text-accent mt-4">
                        $150 USD / K1,500
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-foreground/80">
                        Help opening corporate bank accounts after registration.
                      </p>
                      <p className="text-xs text-foreground/60">
                        Bank requirements vary.
                      </p>
                      <Button
                        size="sm"
                        className="w-full bg-primary hover:bg-primary/90 text-sm"
                        asChild
                      >
                        <a href="https://wa.me/260979333072?text=Hello%20Raising%20Ventures%21%20I%20need%20Bank%20Account%20Assistance%20%28%24150%20USD%29%20after%20company%20registration.%20Please%20explain%20the%20process%20and%20bank%20requirements.">
                          Learn More
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-accent/20 hover:border-accent/50 transition">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">
                        Consultation
                      </CardTitle>
                      <div className="text-2xl font-bold text-accent mt-4">
                        $50 USD / K500
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-foreground/80">
                        Expert guidance on registration process.
                      </p>
                      <div className="text-xs space-y-2 text-foreground/60">
                        <p>
                          ✓ Credited to registration if you sign within 7 days
                        </p>
                        <p>✓ Free for returning clients</p>
                      </div>
                      <Button
                        size="sm"
                        className="w-full bg-accent hover:bg-accent/90 text-sm"
                        asChild
                      >
                        <a href="https://wa.me/260979333072?text=Hello%20Raising%20Ventures%21%20I%20would%20like%20to%20book%20a%20consultation%20%28%2450%20USD%29.%20Please%20confirm%20availability%20and%20schedule%20a%20call%20at%20your%20earliest%20convenience.">
                          Book Now
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Payment Instructions */}
      <section className="bg-accent/10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Payment Instructions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Zambians */}
            <Card className="border-2 border-accent">
              <CardHeader>
                <CardTitle className="text-primary">For Zambians</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-3">
                    Mobile Money
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-border flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-primary">
                      +260 979 333 072
                    </span>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          "+260 979 333 072",
                          "zambian-phone"
                        )
                      }
                      className="p-2 hover:bg-gray-100 rounded transition"
                    >
                      <Copy
                        size={16}
                        className={
                          copied === "zambian-phone"
                            ? "text-accent"
                            : "text-foreground/60"
                        }
                      />
                    </button>
                  </div>
                  <p className="text-xs text-foreground/60 mt-2">
                    Raising Ventures Zambia Limited
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* For Foreigners */}
            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-primary">For Foreigners</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-3">
                    Bank Transfer in USD
                  </p>
                  <div className="bg-accent/5 p-4 rounded-lg border border-accent/30">
                    <p className="text-sm text-foreground/80">
                      Account details provided after form submission
                    </p>
                  </div>
                  <p className="text-xs text-foreground/60 mt-3">
                    We accept USD, GBP, EUR via wire transfer
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Important Note */}
          <Card className="mt-8 border-2 border-accent/50 bg-accent/5">
            <CardContent className="pt-6">
              <p className="text-sm font-semibold text-foreground mb-3">
                ⚡ Important
              </p>
              <p className="text-foreground/80">
                After payment, send proof via WhatsApp to{" "}
                <span className="font-bold">+260 979 333 072</span>. We start
                your registration within{" "}
                <span className="font-bold">2 hours</span> of receiving payment.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Questions?</h2>
          <p className="text-lg mb-8 opacity-90">
            Our AI assistant is available 24/7. Or reach out directly.
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
              <a href="mailto:airsite.mundia@gmail.com">
                <Mail size={18} className="mr-2" />
                Email Us
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
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link to="/" className="block hover:opacity-80">
                  Home
                </Link>
                <Link to="/why-us" className="block hover:opacity-80">
                  Why Us
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
