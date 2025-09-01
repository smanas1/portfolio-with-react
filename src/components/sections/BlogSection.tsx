import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable APIs with Node.js and Express",
      excerpt: "Learn how to design and implement RESTful APIs that can handle high traffic and scale with your application's growth.",
      date: "2024-08-15",
      readTime: "5 min read",
      category: "Backend",
      tags: ["Node.js", "Express", "API Design"]
    },
    {
      id: 2,
      title: "React Best Practices for 2024",
      excerpt: "Discover the latest patterns and practices for building maintainable and performant React applications in 2024.",
      date: "2024-08-10",
      readTime: "7 min read",
      category: "Frontend",
      tags: ["React", "TypeScript", "Performance"]
    },
    {
      id: 3,
      title: "Database Design with MongoDB vs PostgreSQL",
      excerpt: "A comprehensive comparison of NoSQL and SQL databases, helping you choose the right solution for your project.",
      date: "2024-08-05",
      readTime: "6 min read",
      category: "Database",
      tags: ["MongoDB", "PostgreSQL", "Database Design"]
    },
    {
      id: 4,
      title: "TypeScript Tips for Better Code Quality",
      excerpt: "Advanced TypeScript techniques that will make your code more robust, maintainable, and developer-friendly.",
      date: "2024-07-28",
      readTime: "4 min read",
      category: "Development",
      tags: ["TypeScript", "Code Quality", "Best Practices"]
    }
  ]

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Latest <span className="text-gradient">Blog Posts</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights and tutorials on modern web development, best practices, and technology trends
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {blogPosts.map((post) => (
              <Card key={post.id} className="card-gradient border-border/50 hover:shadow-md transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Posts Button */}
          <div className="text-center">
            <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}