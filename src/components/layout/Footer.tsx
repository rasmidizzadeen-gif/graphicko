import { Link } from "wouter";
import { ArrowRight, Instagram, Twitter, Linkedin, Facebook, Dribbble } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-20 pb-10 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center rotate-45">
                <div className="w-3 h-3 bg-background rounded-sm -rotate-45" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                Graphicko<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Design that works. Marketing that grows. We are a digital agency pushing the boundaries of what's possible for ambitious brands.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {[Instagram, Twitter, Linkedin, Facebook, Dribbble].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Cols */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-display font-semibold text-lg mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              {['About Us', 'Services', 'Portfolio', 'Case Studies', 'Careers'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-lg mb-6">Services</h4>
            <ul className="flex flex-col gap-4">
              {['Brand Identity', 'Web Design', 'Social Media', 'Google Ads', 'SEO'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-lg mb-6">Stay in the loop</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest insights on design and marketing delivered to your inbox.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-secondary border border-white/10 rounded-lg px-4 py-3 w-full text-sm focus:outline-none focus:border-primary transition-colors"
                required
              />
              <Button type="submit" size="icon" className="shrink-0 rounded-lg">
                <ArrowRight size={18} />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Graphicko Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
