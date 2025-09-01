import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript", level: 95 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },

        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "REST APIs", level: 92 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Shadcn UI", level: 85 },

        { name: "Docker", level: 70 },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Team Collaboration", level: 90 },
        { name: "Communication", level: 88 },
        { name: "Project Management", level: 85 },
        { name: "Time Management", level: 92 },
        { name: "Continuous Learning", level: 98 },
      ],
    },
  ];

  const technologies = [
    {
      name: "React",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
    },
    {
      name: "Next.js",
      icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/vercel.png",
    },
    {
      name: "TypeScript",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/250px-Typescript_logo_2020.svg.png",
    },
    {
      name: "Node.js",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    },
    { name: "MongoDB", icon: "https://img.icons8.com/color/512/mongodb.png" },
    {
      name: "PostgreSQL",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency
              levels
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="card-gradient border-border/50 hover:shadow-md transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technology Tags */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-5 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default flex items-center gap-2"
                >
                  <img src={tech.icon} alt={tech.name} className="h-5 w-5" />
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
