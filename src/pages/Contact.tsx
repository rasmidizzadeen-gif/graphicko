import { Layout } from "@/components/layout/Layout";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 relative">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-primary/5 -z-10" />
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Info Side */}
            <div>
              <FadeIn>
                <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Let's build something <span className="gradient-text-primary">great.</span></h1>
                <p className="text-xl text-muted-foreground mb-12 max-w-md">
                  Whether you have a specific project in mind or just want to explore possibilities, our team is ready to talk.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 border border-white/5">
                      <Mail className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email Us</h4>
                      <p className="text-muted-foreground mb-2">For general inquiries and project requests.</p>
                      <a href="mailto:hello@graphicko.com" className="text-primary hover:underline font-medium">hello@graphicko.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 border border-white/5">
                      <MessageSquare className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
                      <p className="text-muted-foreground mb-2">Need a quicker response?</p>
                      <a href="#" className="text-primary hover:underline font-medium">+1 (555) 123-4567</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 border border-white/5">
                      <MapPin className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Office</h4>
                      <p className="text-muted-foreground">
                        125 Creative Ave, Suite 400<br />
                        New York, NY 10012<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Form Side */}
            <div>
              <FadeIn delay={0.2} className="bg-card border border-white/5 rounded-3xl p-8 shadow-2xl relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[60px] rounded-full -z-10" />
                
                <h3 className="text-2xl font-bold mb-6 font-display">Send us a message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-muted-foreground">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="bg-background border-white/10 h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-muted-foreground">Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" type="email" className="bg-background border-white/10 h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Company (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company Ltd" className="bg-background border-white/10 h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Project Details</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project goals, timeline, and budget..." 
                              className="bg-background border-white/10 min-h-[150px] resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full h-14 text-lg" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                    </Button>
                  </form>
                </Form>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
