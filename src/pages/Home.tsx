import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowRight, MonitorSmartphone, PenTool, TrendingUp, Search } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Clean minimal background */}
        <div className="absolute inset-0 -z-10">
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
            style={{
              backgroundImage: "radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Soft blue glow top-right */}
          <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
          {/* Soft blue glow bottom-left */}
          <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/60 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium tracking-wide">Award-Winning Creative Agency</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-6">
                Design That <span className="gradient-text-primary">Works.</span><br />
                Marketing That <span className="gradient-text-primary">Grows.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                We blend stunning visual aesthetics with data-driven marketing strategies to elevate ambitious brands to category leaders.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="flex flex-wrap items-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="group">
                  Start a Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg">
                  View Our Work
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CLIENTS LOGO BAR */}
      <section className="py-12 border-y border-white/5 bg-secondary/30">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest font-semibold">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using simple typography logos since we don't have actual SVG logos */}
            {['Vortex', 'Lumina', 'Stratos', 'Nexus', 'Echo'].map((name) => (
              <h3 key={name} className="font-display font-bold text-2xl tracking-tight">{name}</h3>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <FadeIn className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Expertise</h2>
              <p className="text-xl text-muted-foreground">Comprehensive solutions tailored to scale your brand's digital presence.</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/services">
                <Button variant="ghost" className="group">
                  View All Services
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: PenTool, title: "Brand Identity", desc: "Logos, guidelines, and visual systems that leave a lasting mark." },
              { icon: MonitorSmartphone, title: "UI/UX Design", desc: "Intuitive, beautiful interfaces for web and mobile applications." },
              { icon: TrendingUp, title: "Performance Ads", desc: "Data-driven campaigns across social and search platforms." },
              { icon: Search, title: "SEO Strategy", desc: "Organic growth systems to dominate search engine results." }
            ].map((service, i) => (
              <StaggerItem key={i}>
                <div className="bg-card border border-white/5 rounded-2xl p-8 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,102,255,0.15)] transition-all duration-300 group h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon size={24} className="text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="py-32 bg-secondary/20 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Selected Work</h2>
            <p className="text-xl text-muted-foreground">A glimpse into projects that transformed businesses.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <Link href="/portfolio" className="group block relative overflow-hidden rounded-2xl aspect-[4/3] bg-card">
                <img 
                  src={`${import.meta.env.BASE_URL}images/port-branding.png`} 
                  alt="Brand Identity" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-xs font-semibold text-primary mb-3">Branding</div>
                  <h3 className="text-3xl font-display font-bold text-white mb-2">Vortex FinTech</h3>
                  <p className="text-white/70">Complete brand identity overhaul</p>
                </div>
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/portfolio" className="group block relative overflow-hidden rounded-2xl aspect-[4/3] bg-card">
                <img 
                  src={`${import.meta.env.BASE_URL}images/port-web.png`} 
                  alt="Web Design" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-xs font-semibold text-primary mb-3">UI/UX Design</div>
                  <h3 className="text-3xl font-display font-bold text-white mb-2">Lumina Health App</h3>
                  <p className="text-white/70">Mobile app design and design system</p>
                </div>
              </Link>
            </FadeIn>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="min-w-[200px]">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center">Client Success</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Graphicko completely transformed our visual identity. Our conversion rates doubled within two months of launching the new site.",
                author: "Sarah Jenkins",
                role: "CMO, NovaBrew",
              },
              {
                quote: "Their data-driven approach to our ad campaigns lowered our CPA by 45%. True professionals who deliver measurable results.",
                author: "Marcus Chen",
                role: "Founder, TechVault",
              },
              {
                quote: "The brand guidelines they created gave us exactly the premium feel we needed to enter the luxury market. Exceptional work.",
                author: "Elena Rodriguez",
                role: "CEO, PureGlow",
              }
            ].map((testimonial, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-card border border-white/5 rounded-2xl p-8 relative h-full">
                  <div className="text-6xl text-primary/20 font-serif absolute top-6 left-6 leading-none">"</div>
                  <p className="text-lg leading-relaxed mb-8 relative z-10 pt-6">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold text-lg border border-white/10">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[100px] rounded-full -z-10" />
        
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">Ready to dominate your market?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Stop settling for average. Let's build a brand and marketing engine that leaves your competitors behind.
            </p>
            <Link href="/contact">
              <Button size="lg" className="h-16 px-10 text-lg group">
                Let's Talk About Your Project
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
