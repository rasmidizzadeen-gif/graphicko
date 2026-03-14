import { Layout } from "@/components/layout/Layout";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowRight, BarChart, Users, TrendingUp } from "lucide-react";
import { Link } from "wouter";

const CASES = [
  {
    id: "nova",
    client: "NovaBrew Coffee",
    industry: "F&B / Retail",
    image: "case-nova.png",
    title: "Rebranding a local favorite into a national contender.",
    problem: "NovaBrew had amazing coffee but looked like a generic corner shop. They wanted to expand into wholesale distribution but retail buyers weren't taking their packaging seriously.",
    solution: "We executed a complete ground-up rebrand. We developed a bold, minimalist packaging system that stood out on crowded shelves, paired with a dynamic e-commerce website.",
    stats: [
      { label: "Increase in online sales", value: "215%", icon: TrendingUp },
      { label: "New retail partnerships", value: "42", icon: Users },
      { label: "Brand awareness growth", value: "+80%", icon: BarChart }
    ]
  },
  {
    id: "pureglow",
    client: "PureGlow Skincare",
    industry: "Beauty / E-com",
    image: "case-pureglow.png",
    title: "Scaling DTC revenue with high-converting creative ads.",
    problem: "PureGlow's paid social campaigns were suffering from ad fatigue. Their Customer Acquisition Cost (CAC) was too high to scale profitably.",
    solution: "We designed a library of 50+ new video and static ad creatives focused on user-generated content styles and educational hooks, combined with aggressive A/B testing.",
    stats: [
      { label: "Reduction in CAC", value: "-45%", icon: TrendingUp },
      { label: "Return on Ad Spend", value: "3.2x", icon: Users },
      { label: "New monthly customers", value: "5k+", icon: BarChart }
    ]
  },
  {
    id: "techvault",
    client: "TechVault Security",
    industry: "B2B SaaS",
    image: "case-techvault.png",
    title: "Redesigning a SaaS platform to maximize lead generation.",
    problem: "TechVault had enterprise-grade software but their website felt dated and confusing. Potential enterprise clients were bouncing before requesting a demo.",
    solution: "A complete UX/UI overhaul of their marketing site. We simplified the messaging, implemented a dark-mode premium aesthetic to build trust, and optimized the demo funnel.",
    stats: [
      { label: "Demo requests", value: "+140%", icon: TrendingUp },
      { label: "Bounce rate reduction", value: "-35%", icon: Users },
      { label: "Time on site", value: "+2.5m", icon: BarChart }
    ]
  }
];

export default function CaseStudies() {
  return (
    <Layout>
      <section className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Case <span className="gradient-text-primary">Studies</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deep dives into how we solve complex business challenges with creative solutions.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 pb-32 flex flex-col gap-32">
        {CASES.map((study, index) => (
          <section key={study.id} className="relative">
            <div className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <FadeIn direction={index % 2 !== 0 ? "right" : "left"}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl shadow-primary/5">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/${study.image}`} 
                      alt={study.client} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-sm font-semibold">
                      {study.industry}
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <FadeIn direction={index % 2 !== 0 ? "left" : "right"} delay={0.2}>
                  <h3 className="text-primary font-bold tracking-wider uppercase mb-2">{study.client}</h3>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight">{study.title}</h2>
                  
                  <div className="space-y-6 mb-10">
                    <div className="bg-secondary/30 p-6 rounded-xl border border-white/5">
                      <h4 className="font-bold mb-2 text-white/90">The Challenge</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{study.problem}</p>
                    </div>
                    <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                      <h4 className="font-bold mb-2 text-primary">Our Solution</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                    {study.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>

            </div>
          </section>
        ))}
      </div>

      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl font-display font-bold mb-6 text-white">Your brand could be our next success story.</h2>
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="text-primary bg-white hover:bg-white/90">
                Start the Conversation
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
