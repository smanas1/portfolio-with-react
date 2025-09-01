import { Code, Database, Globe, Smartphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Excellence",
      description: "Crafting responsive and interactive user interfaces with React, Next.js, and TypeScript"
    },
    {
      icon: Database,
      title: "Backend Mastery",
      description: "Building robust APIs and server-side applications with Node.js, Express.js, and MongoDB"
    },
    {
      icon: Globe,
      title: "Full-Stack Solutions",
      description: "End-to-end web application development from concept to deployment"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Creating seamless experiences across all devices with responsive design principles"
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate MERN stack developer dedicated to building exceptional web experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Passionate About Modern Web Development
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  With a deep focus on the MERN stack, I specialize in creating dynamic, 
                  user-focused web applications that deliver exceptional performance and user experience. 
                  My expertise spans across the entire development lifecycle, from initial concept 
                  to final deployment.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in writing clean, maintainable code and staying current with the latest 
                  technologies and best practices. Every project is an opportunity to push boundaries 
                  and create something meaningful that makes a real impact.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold">My Development Philosophy</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    User-centered design approach
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Performance and scalability focused
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Clean, maintainable code architecture
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Continuous learning and improvement
                  </li>
                </ul>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="card-gradient border-border/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 hero-gradient rounded-lg flex items-center justify-center">
                      <highlight.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}