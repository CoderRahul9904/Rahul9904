import { Badge } from "@/components/ui/badge"

interface Skill {
  name: string
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
}

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: "Expert" as const },
        { name: "TypeScript", level: "Advanced" as const },
        { name: "Next.js", level: "Advanced" as const },
        { name: "Tailwind CSS", level: "Expert" as const },
        { name: "Vue.js", level: "Intermediate" as const },
        { name: "JavaScript", level: "Expert" as const },
        { name: "HTML", level: "Expert" as const }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: "Expert" as const },
        { name: "Python", level: "Advanced" as const },
        { name: "PostgreSQL", level: "Advanced" as const },
        { name: "MongoDB", level: "Expert" as const },
        { name: "GraphQL", level: "Advanced" as const },
        { name: "REST APIs", level: "Expert" as const },
        { name: "Groovy", level: "Advanced" as const }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: "Expert" as const },
        { name: "Docker", level: "Expert" as const },
        { name: "AWS", level: "Advanced" as const },
        { name: "Jenkins", level: "Expert" as const },
        { name: "Figma", level: "Intermediate" as const },
        { name: "Jest", level: "Advanced" as const },
        { name: "CI/CD", level: "Expert" as const },
      ]
    }
  ]

  const getLevelColor = (level: Skill["level"]) => {
    switch (level) {
      case "Expert":
        return "bg-primary text-primary-foreground"
      case "Advanced":
        return "bg-primary/80 text-primary-foreground"
      case "Intermediate":
        return "bg-secondary text-secondary-foreground"
      case "Beginner":
        return "bg-muted text-muted-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div key={category.title} className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="group hover:scale-105 transition-transform duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <Badge 
                          variant="secondary" 
                          className={`${getLevelColor(skill.level)} text-xs`}
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills