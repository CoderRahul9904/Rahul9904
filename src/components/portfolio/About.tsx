import { Card, CardContent } from "@/components/ui/card"

const About = () => {
  const skills = [
    "Problem Solving",
    "Team Leadership", 
    "UI/UX Design",
    "Agile Development",
    "Code Review",
    "Mentoring"
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white text-6xl font-bold shadow-lg">
                AJ
              </div>
            </div>
            
            {/* Bio */}
            <div className="md:col-span-2 space-y-6">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience 
                  creating digital solutions that bridge the gap between design and functionality. 
                  I love turning complex problems into simple, beautiful designs.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
              
              {/* Core Skills */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Core Strengths</h3>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <Card key={skill} className="border-border/50">
                      <CardContent className="p-3">
                        <span className="text-sm font-medium">{skill}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About