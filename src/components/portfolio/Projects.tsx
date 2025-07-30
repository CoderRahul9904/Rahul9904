import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import GhumoWorld from "@/assets/GhumoWorld.png"
import FitMeal from "@/assets/FitMeal.jpeg"
import bar from "@/assets/bar.png"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "FitMeal - Nutrition Tracking Platform",
      description: "A nutrition tracking application that lets users log meals, track calories and macronutrients, and visualize their dietary trends over time. Features include intuitive meal logging, dynamic charts for nutrient breakdown, and secure user authentication.",
      image: FitMeal,
      technologies: ["React", "Node.js", "TypeScript", "GrapQL", "Tailwind"," MongoDB", "Apollo Server", "JWT"],
      liveUrl: "https://fit-meal-5m9w.vercel.app/",
      githubUrl: "https://github.com/CoderRahul9904/FitMeal"
    },
    {
      id: 2,
      title: "GhumoWorld - Flight Booking System",
      description: "A full‑featured flight booking platform featuring real‑time flight search, seat selection, booking management, and user profile dashboards. Integrated with third‑party APIs for live pricing and availability, with secure payment processing and dynamic itinerary generation.",
      image: GhumoWorld,
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDb", "Tailwind CSS", "Stripe API", "Amadeus API"],
      liveUrl: "https://ghumo-world-3d6v.vercel.app/",
      githubUrl: "https://github.com/CoderRahul9904/GhumoWorld"
    },
    {
      id: 3,
      title: "Stock Price Bar Chart",
      description: "Daily closing stock prices shown as vertical bars. Users can hover over bars to see detailed price information.",
      image: bar,
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDb", "Tailwind CSS"],
      liveUrl: "https://bar-builder-spark.vercel.app/",
      githubUrl: "https://github.com/CoderRahul9904/bar-builder-spark"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="group hover:shadow-lg transition-shadow duration-300 border-border/50"
              >
                <CardHeader>
                  {/* Project Image/Icon */}
                  <img className="w-full h-38 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center text-4xl mb-4"
                    src={project.image}
                    alt={project.title}
                  />
                  
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Live Demo
                      </a>
                    </Button>
                    
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-3 w-3" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects