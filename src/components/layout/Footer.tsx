import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gradient">SM Anas</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Passionate MERN stack developer creating modern web solutions
                that deliver exceptional user experiences.
              </p>
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:scale-110 transition-all p-2"
                  asChild
                >
                  <a
                    href="https://github.com/smanas1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:scale-110 transition-all p-2"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/smanas1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:scale-110 transition-all p-2"
                  asChild
                >
                  <a href="mailto:smanas.net@gmail.com">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection("#home")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left text-sm"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("#about")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left text-sm"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("#skills")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left text-sm"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("#projects")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left text-sm"
                >
                  Projects
                </button>
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <nav className="flex flex-col space-y-2">
                <span className="text-muted-foreground text-sm">
                  Frontend Development
                </span>
                <span className="text-muted-foreground text-sm">
                  Backend Development
                </span>
                <span className="text-muted-foreground text-sm">
                  Full Stack Solutions
                </span>
                <span className="text-muted-foreground text-sm">
                  API Development
                </span>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <strong>Email:</strong>
                  <br />
                  <a
                    href="mailto:smanas.net@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    smanas.net@gmail.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <strong>Phone:</strong>
                  <br />
                  <a
                    href="tel:01303839889"
                    className="hover:text-primary transition-colors"
                  >
                    01303839889
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <strong>Location:</strong>
                  <br />
                  Rajshahi, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} SM Anas. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
