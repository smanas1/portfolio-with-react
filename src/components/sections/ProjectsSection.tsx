import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import walletProject from "@/assets/wallet-project.jpg";
import ecommerceProject from "@/assets/ecommerce.png";

export function ProjectsSection() {
  const projects = [
    {
      title: "Wallet Management System",
      description:
        "A comprehensive financial management application built with the MERN stack, featuring real-time transaction tracking, and detailed analytics with interactive charts and reports.",
      image: walletProject,
      technologies: [
        "React",
        "Shadcn UI",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TypeScript",
        "Chart.js",
      ],
      features: [
        "Real-time transaction tracking",
        "Interactive charts and reports",
        "Secure authentication system",
        "Responsive mobile design",
      ],
      github: "https://github.com/smanas1/Assignment-06-Backend",
      demo: "https://banglapay.smanas.net/",
      status: "Featured",
    },
    {
      title: "Ecommerce Platform",
      description:
        "A full-featured ecommerce application built with the MERN stack, providing seamless shopping experiences with secure payment integration, order management, and responsive UI.",
      image: ecommerceProject,
      technologies: [
        "React",
        "Shadcn UI",
        "Node.js",
        "Express.js",
        "MongoDB",
        "SSLCOMMERZ API",
      ],
      features: [
        "Product listing with search and filter",
        "Shopping cart and checkout system",
        "Secure user authentication and authorization",
        "Order and payment management",
        "Responsive and user-friendly design",
      ],
      github: "https://github.com/smanas1/ecommerce-server",
      demo: "https://ecommerce.smanas.net/",
      status: "Featured",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing my latest work and technical expertise through
              real-world applications
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="card-gradient border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={
                        project.status === "Featured" ? "default" : "secondary"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 hero-gradient text-white"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="hover:scale-105 transition-all"
            >
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
