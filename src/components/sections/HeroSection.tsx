import {
  ArrowDown,
  Download,
  FileUser,
  Github,
  GithubIcon,
  Linkedin,
  LucideGithub,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/profile-picture.jpg";
import { Link } from "react-router-dom";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10" />

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Picture */}
          <div className="relative mx-auto w-32 h-32 md:w-52 md:h-52 animate-fade-in-up">
            <img
              src="https://res.cloudinary.com/dtyqscfja/image/upload/v1756720166/portfolio/output-onlinepngtools_xxbllf.png"
              alt="SM Anas - MERN Stack Developer"
              className="w-full h-full rounded-full object-cover border-4 border-primary shadow-lg"
            />
            <div className="absolute inset-0 rounded-full  animate-glow" />
          </div>

          {/* Name and Title */}
          <div
            className="space-y-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              SM <span className="text-gradient">Anas</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
              MERN Stack Developer
            </h2>
          </div>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Building modern web solutions with{" "}
            <span className="text-blue-500 font-semibold">React</span>,
            <span className="text-accent font-semibold"> Next.js</span>,
            <span className="text-green-600 font-semibold"> Node.js</span>,
            <span className="text-blue-700 font-semibold"> TypeScript</span>,
            and
            <span className="text-green-600 font-semibold"> MongoDB</span>
          </p>

          {/* Description */}
          <p
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Passionate about creating dynamic, user-focused web applications
            that deliver exceptional digital experiences.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="w-full sm:w-auto hero-gradient text-white hover:scale-105 transition-all shadow-md"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Link to="https://drive.google.com/file/d/14aWMtipJRXYGCdMg3wi4sAtPIyBdPr92/view?usp=sharing">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto hover:scale-105 transition-all"
              >
                Download Resume
                <FileUser className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <Button
              variant="ghost"
              size="sm"
              className="hover:scale-110 transition-all"
              asChild
            >
              <a
                href="https://github.com/smanas1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:scale-110 transition-all"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/smanas1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
