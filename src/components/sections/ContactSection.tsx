import { useState } from "react";
import { Mail, Phone, Linkedin, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "smanas.net@gmail.com",
      link: "mailto:smanas.net@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "01303839889",
      link: "tel:01303839889",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "SM Anas",
      link: "https://www.linkedin.com/in/smanas1/",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Rajshahi, Bangladesh",
      link: null,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setIsSubmitting(false);

    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your project to life? Get in touch and let's create
              something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to discuss new projects and opportunities.
                  Whether you have a specific idea in mind or need consultation
                  on your next web application, I'm here to help bring your
                  vision to reality.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="card-gradient border-border/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-medium text-sm text-muted-foreground">
                            {info.title}
                          </h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-foreground hover:text-primary transition-colors truncate block"
                              target={
                                info.link.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                info.link.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                            >
                              {info.value}
                            </a>
                          ) : (
                            <span className="text-foreground truncate block">
                              {info.value}
                            </span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-card-gradient rounded-xl p-6 border border-border/50">
                <h4 className="font-semibold mb-2">
                  Ready to Start Your Project?
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Let's discuss your requirements and how I can help you achieve
                  your goals.
                </p>
                <Button className="hero-gradient text-white hover:scale-105 transition-all">
                  Schedule a Call
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name *</label>
                      <Input
                        placeholder="Your name"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email *</label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject *</label>
                    <Input
                      placeholder="Project inquiry"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message *</label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full hero-gradient text-white hover:scale-105 transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
