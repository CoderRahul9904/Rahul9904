import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Experience {
  id: number
  company: string
  position: string
  duration: string
  location: string
  description: string[]
  technologies: string[]
  logo: string
}

const Experience = () => {
  const experiences: Experience[] = [
  {
    id: 1,
    company: "Anantixia LLP",
    position: "Full-Stack Developer (Internship)",
    duration: "Nov 2024 – Present",
    location: "Gurugram, Haryana",
    description: [
      "Provisioned and configured Sanity CMS and dev environments from the ground up, reducing onboarding time by 75%",
      "Authored and maintained Jenkins pipelines to automate build and deployment workflows",
      "Architected and deployed NGINX as a blue‑green load balancer with automated SSL certificate management",
      "Integrated AWS services (S3, ECS, CloudWatch) for storage, container orchestration, and real‑time monitoring"
    ],
    technologies: ["React", "Node.js", "Sanity CMS", "NGINX", "Docker", "AWS"],
    logo: "🏢"
  },
  {
    id: 2,
    company: "Oasis Infobyte",
    position: "Web Developer",
    duration: "Jun 2024 – Jul 2024",
    location: "Remote",
    description: [
      "Designed and implemented a nutrition tracking platform in React with responsive UI/UX",
      "Integrated GraphQL APIs via Apollo Server for efficient meal-data querying and mutations",
      "Secured user sessions with cookie‑based authentication and JWT token management",
      "Optimized front‑end performance and state management for seamless user experience"
    ],
    technologies: ["React", "GraphQL", "Apollo Server", "JWT", "CSS Modules"],
    logo: "🚀"
  }

  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Work Experience
          </h2>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={exp.id} className="border-border/50 hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    {/* Company Logo */}
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                      {exp.logo}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl">{exp.position}</CardTitle>
                          <CardDescription className="text-primary font-medium">
                            {exp.company} • {exp.location}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {exp.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Description */}
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
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

export default Experience