import { Layout } from "@/components/layout/Layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

const CATEGORIES = ["All", "Branding", "Web Design", "Marketing", "Social Media"];

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Vortex FinTech",
    category: "Branding",
    image: "port-branding.png",
    desc: "Complete visual identity and brand guidelines for a disruptive neo-bank."
  },
  {
    id: 2,
    title: "Lumina Health",
    category: "Web Design",
    image: "port-web.png",
    desc: "UI/UX design system for a telemedicine application."
  },
  {
    id: 3,
    title: "Aura Skincare",
    category: "Social Media",
    image: "port-social.png",
    desc: "Instagram grid takeover and ongoing content creation."
  },
  {
    id: 4,
    title: "NovaBrew Coffee",
    category: "Branding",
    image: "case-nova.png",
    desc: "Packaging design and local cafe branding."
  },
  {
    id: 5,
    title: "PureGlow Cosmetics",
    category: "Marketing",
    image: "case-pureglow.png",
    desc: "Paid social campaign that generated 300% ROAS."
  },
  {
    id: 6,
    title: "TechVault Security",
    category: "Web Design",
    image: "case-techvault.png",
    desc: "B2B SaaS website redesign focused on lead generation."
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = PORTFOLIO_ITEMS.filter(item => 
    activeFilter === "All" || item.category === activeFilter
  );

  return (
    <Layout>
      <section className="pt-32 pb-12 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Our <span className="gradient-text-primary">Work</span></h1>
            <p className="text-xl text-muted-foreground">
              A curated selection of projects where design meets strategy to deliver exceptional results.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filters */}
          <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-3 mb-16">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                  activeFilter === category 
                    ? "bg-primary text-white" 
                    : "bg-secondary text-muted-foreground hover:text-white hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </FadeIn>

          {/* Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" key={activeFilter}>
            {filteredItems.map((item) => (
              <StaggerItem key={item.id}>
                <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-card border border-white/5">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/${item.image}`} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-center p-8">
                    <span className="text-primary text-sm font-bold tracking-wider uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {item.category}
                    </span>
                    <h3 className="text-3xl font-display font-bold mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-8 max-w-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                      {item.desc}
                    </p>
                    <Link href="/case-studies">
                      <Button variant="outline" className="border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                        View Details <ArrowUpRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No projects found for this category.
            </div>
          )}
        </div>
      </section>

      <section className="py-24 border-t border-white/5 text-center bg-secondary/10">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Want to see more specific examples?</h2>
            <p className="text-muted-foreground mb-8">We have a private portfolio of specialized projects.</p>
            <Link href="/contact">
              <Button>Request Private Portfolio</Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
