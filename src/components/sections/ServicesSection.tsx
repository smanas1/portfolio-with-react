import { Code, Database, Globe, Smartphone, Zap, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Fullstack Development",
      description: "Complete MERN stack development services from concept to deployment, ensuring seamless integration between frontend and backend systems.",
      features: ["React & Next.js Frontend", "Node.js Backend", "MongoDB Database", "API Development"]
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Modern, responsive user interfaces built with React, Next.js, and TypeScript, focusing on performance and user experience.",
      features: ["React Applications", "Next.js Websites", "TypeScript Integration", "Responsive Design"]
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side applications with RESTful APIs, database design, and secure authentication systems using Node.js and Express.",
      features: ["REST API Development", "Database Design", "Authentication Systems", "Server Architecture"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Creating applications that work seamlessly across all devices with responsive design principles and mobile optimization.",
      features: ["Responsive Layouts", "Mobile Optimization", "Cross-Browser Testing", "Progressive Web Apps"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing web applications for speed, SEO, and user experience through modern development practices and tools.",
      features: ["Code Optimization", "SEO Enhancement", "Performance Audits", "Bundle Optimization"]
    },
    {
      icon: Shield,
      title: "Secure Development",
      description: "Implementing security best practices, authentication systems, and data protection measures for robust applications.",
      features: ["Secure Authentication", "Data Protection", "Security Audits", "Best Practices"]
    }
  ]

  const process = [
    { step: "01", title: "Discovery", description: "Understanding your requirements and project goals" },
    { step: "02", title: "Planning", description: "Creating detailed project roadmap and technical architecture" },
    { step: "03", title: "Development", description: "Building your application with regular updates and feedback" },
    { step: "04", title: "Testing", description: "Comprehensive testing across devices and browsers" },
    { step: "05", title: "Deployment", description: "Launching your application with ongoing support" },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              My <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive MERN stack development services to bring your ideas to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="card-gradient border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 hero-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Development Process */}
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Development <span className="text-gradient">Process</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A streamlined approach to deliver high-quality results on time and within budget
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {process.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto hero-gradient rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border" />
                    )}
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}