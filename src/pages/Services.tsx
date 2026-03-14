import { Layout } from "@/components/layout/Layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Link } from "wouter";
import { 
  Palette, BoxSelect, Image as ImageIcon, LayoutGrid, Printer, 
  Megaphone, Target, Search, BarChart3, Mail, Globe, ArrowRight, CheckCircle2
} from "lucide-react";

export default function Services() {
  const designServices = [
    { title: "Logo & Brand Identity", desc: "Comprehensive brand systems, logos, typography, and color palettes that tell your unique story.", icon: Palette },
    { title: "UI/UX Design", desc: "Intuitive, user-centric interfaces for web and mobile applications that drive engagement.", icon: LayoutGrid },
    { title: "Packaging Design", desc: "Premium product packaging that stands out on shelves and creates memorable unboxing experiences.", icon: BoxSelect },
    { title: "Social Media Graphics", desc: "Eye-catching templates and custom illustrations tailored for Instagram, LinkedIn, and more.", icon: ImageIcon },
    { title: "Print & Editorial", desc: "High-quality brochures, business cards, billboards, and physical marketing collateral.", icon: Printer },
  ];

  const marketingServices = [
    { title: "Performance Advertising", desc: "High-ROI campaigns across Facebook, Instagram, Google, and TikTok ads.", icon: Target },
    { title: "Search Engine Optimization", desc: "Technical and content SEO strategies to rank your website at the top of Google.", icon: Search },
    { title: "Social Media Management", desc: "End-to-end community building, content calendar creation, and engagement strategy.", icon: Megaphone },
    { title: "Website Creation", desc: "Professional, fast, and conversion-optimized websites designed to turn visitors into customers.", icon: Globe },
    { title: "Data Analytics & CRO", desc: "Conversion rate optimization and deep analytics to ensure every marketing dollar counts.", icon: BarChart3 },
    { title: "Email Marketing", desc: "Automated flows and newsletters that nurture leads and drive repeat sales.", icon: Mail },
  ];

  return (
    <Layout>
      {/* PAGE HEADER */}
      <section className="pt-32 pb-20 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Our <span className="gradient-text-primary">Services</span></h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We offer a holistic approach to brand growth, combining world-class design with ruthless, data-backed marketing execution.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* GRAPHIC DESIGN CATEGORY */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
              <FadeIn>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                  <Palette className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-4xl font-display font-bold mb-4">Graphic Design</h2>
                <p className="text-muted-foreground mb-8">
                  First impressions matter. We craft visual identities that command attention, build trust, and communicate your value instantly.
                </p>
                <ul className="space-y-4 mb-8">
                  {['Research & Discovery', 'Concept Exploration', 'Iterative Refinement', 'Final Asset Delivery'].map((step) => (
                    <li key={step} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      {step}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            <div className="lg:col-span-8">
              <StaggerContainer className="grid sm:grid-cols-2 gap-6">
                {designServices.map((service, i) => (
                  <StaggerItem key={i}>
                    <div className="bg-card border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 h-full">
                      <service.icon className="w-10 h-10 text-primary mb-6" />
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL MARKETING CATEGORY */}
      <section className="py-24 bg-secondary/20 border-y border-white/5 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start lg:order-2">
              <FadeIn>
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-4xl font-display font-bold mb-4">Digital Marketing</h2>
                <p className="text-muted-foreground mb-8">
                  Beautiful design is useless if no one sees it. Our marketing systems are built to generate traffic, capture leads, and scale revenue predictably.
                </p>
                <ul className="space-y-4 mb-8">
                  {['Audience Targeting', 'A/B Testing Creatives', 'Funnel Optimization', 'ROI Tracking & Scaling'].map((step) => (
                    <li key={step} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                      {step}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            <div className="lg:col-span-8 lg:order-1">
              <StaggerContainer className="grid sm:grid-cols-2 gap-6">
                {marketingServices.map((service, i) => (
                  <StaggerItem key={i}>
                    <div className="bg-background border border-white/5 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-300 h-full shadow-lg shadow-black/20">
                      <service.icon className="w-10 h-10 text-blue-400 mb-6" />
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Not sure what you need?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Book a free discovery call. We'll analyze your current brand and marketing efforts and give you an actionable roadmap.
            </p>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-lg">
                Book Discovery Call
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
