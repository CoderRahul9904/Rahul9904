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
      company: "TechCorp Solutions",
      position: "Senior Full-Stack Developer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      description: [
        "Led development of a microservices architecture serving 50k+ daily users",
        "Mentored junior developers and established coding standards",
        "Reduced application load time by 40% through optimization techniques"
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
      logo: "🏢"
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "Frontend Developer",
      duration: "2020 - 2022",
      location: "Remote",
      description: [
        "Built responsive web applications using React and TypeScript",
        "Collaborated with design team to implement pixel-perfect UI/UX",
        "Implemented automated testing reducing bugs by 60%"
      ],
      technologies: ["React", "TypeScript", "Tailwind", "Jest", "Figma"],
      logo: "🚀"
    },
    {
      id: 3,
      company: "Digital Agency Co",
      position: "Web Developer",
      duration: "2019 - 2020",
      location: "New York, NY",
      description: [
        "Developed custom WordPress themes and plugins for clients",
        "Optimized website performance and SEO for better rankings",
        "Maintained and updated existing client websites"
      ],
      technologies: ["WordPress", "PHP", "JavaScript", "MySQL", "SCSS"],
      logo: "💼"
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