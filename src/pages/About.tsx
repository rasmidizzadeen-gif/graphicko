import { Layout } from "@/components/layout/Layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { Award, Globe, Users, Zap } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Projects Completed", value: "250+" },
    { label: "Team Members", value: "18" },
    { label: "Industry Awards", value: "12" },
    { label: "Years Experience", value: "8" },
  ];

  const values = [
    { icon: Zap, title: "Ruthless Execution", desc: "We don't just dream up ideas. We execute them with precision and speed." },
    { icon: Award, title: "Uncompromising Quality", desc: "Good enough is never enough. We strive for excellence in every pixel." },
    { icon: Users, title: "True Partnership", desc: "We act as an extension of your team, fully invested in your success." },
    { icon: Globe, title: "Data-Driven Creativity", desc: "Beautiful design backed by hard analytics and performance metrics." },
  ];

  return (
    <Layout>
      {/* HERO */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/20 -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
                We build brands for the <span className="gradient-text-primary">modern era.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Graphicko was founded on a simple premise: creative agencies shouldn't just make things look pretty. They should drive measurable business growth.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 border-y border-white/5 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            {stats.map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative rounded-2xl overflow-hidden aspect-square border border-white/10 bg-secondary flex items-center justify-center">
                {/* Abstract placeholder instead of team photo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-400/10" />
                <div className="text-center p-8 relative z-10">
                   <h3 className="font-display font-bold text-3xl mb-2">Our Studio</h3>
                   <p className="text-muted-foreground">Based in New York, working globally.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">The Graphicko Story</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Started in 2018 by two designers who were tired of the traditional agency model. We saw a disconnect between beautiful creative work and actual business performance.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We built Graphicko to bridge that gap. Today, we're a tight-knit team of strategists, designers, and growth marketers who obsess over ROI just as much as typography.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We don't take on every project that comes our way. We partner with ambitious founders and teams who are ready to dominate their categories.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-secondary/30 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide every decision we make.</p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, i) => (
              <StaggerItem key={i}>
                <div className="bg-card border border-white/5 p-8 rounded-2xl h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </Layout>
  );
}
