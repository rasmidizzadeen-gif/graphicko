import { Layout } from "@/components/layout/Layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";

// Unsplash placeholders for blog
const POSTS = [
  {
    id: 1,
    title: "10 Social Media Design Trends to Watch in 2026",
    category: "Design",
    excerpt: "Stay ahead of the curve with these emerging visual trends that are dominating social platforms.",
    date: "Oct 12, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80" /* abstract phone social media */
  },
  {
    id: 2,
    title: "Why Minimalist Branding is Still Winning",
    category: "Branding",
    excerpt: "In a world of visual noise, stripping away the excess is often the most powerful way to stand out.",
    date: "Sep 28, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80" /* minimalist desk setup */
  },
  {
    id: 3,
    title: "The Ultimate Guide to Meta Ads for E-commerce",
    category: "Marketing",
    excerpt: "Stop wasting ad spend. Learn our exact framework for testing and scaling paid social campaigns.",
    date: "Sep 15, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" /* analytics screen */
  },
  {
    id: 4,
    title: "How to Build a Design System from Scratch",
    category: "UI/UX",
    excerpt: "Consistency is key to a premium product experience. Here's how to structure your Figma files for scale.",
    date: "Aug 30, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80" /* design tools */
  },
  {
    id: 5,
    title: "SEO vs Paid Ads: Where Should You Invest First?",
    category: "Strategy",
    excerpt: "Breaking down the pros, cons, and timelines of organic search versus paid acquisition.",
    date: "Aug 14, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80" /* strategy notebook */
  },
  {
    id: 6,
    title: "Typography Rules Every Founder Should Know",
    category: "Design",
    excerpt: "You don't need to be a designer, but understanding basic typography can save your pitch deck.",
    date: "Jul 22, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80" /* typography letters */
  }
];

export default function Blog() {
  return (
    <Layout>
      <section className="pt-32 pb-16 text-center border-b border-white/5">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Our <span className="gradient-text-primary">Insights</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts, strategies, and tutorials from our team of designers and marketers.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map((post) => (
              <StaggerItem key={post.id}>
                <Link href={`#`} className="block group h-full">
                  <article className="bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-semibold text-primary">
                        {post.category}
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      
                      <div className="mt-auto flex items-center text-sm font-semibold text-primary">
                        Read Article <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </Layout>
  );
}
