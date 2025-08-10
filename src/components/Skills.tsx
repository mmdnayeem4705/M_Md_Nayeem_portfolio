import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Wrench, Lightbulb, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["C", "C++", "Python", "Java"],
      color: "tech-blue"
    },
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
      color: "primary"
    },
    {
      title: "Database Servers",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "PostgreSQL", "Firebase", "Supabase", "MongoDB"],
      color: "success"
    },
    {
      title: "Backend Framework",
      icon: <Terminal className="w-6 h-6" />,
      skills: ["Node.js", "PHP", "Spring Boot", "Java"],
      color: "highlight"
    },
    {
      title: "Programming Concepts",
      icon: <Lightbulb className="w-6 h-6" />,
      skills: ["OOPS", "Data Structures"],
      color: "accent"
    },
    {
      title: "Tools & Applications",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Eclipse IDE", "VS Code", "Postman", "MySQL Workbench", "Git", "MS Office", "n8n", "WEKA"],
      color: "primary"
    }
  ];

  return (
    <section className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-inter">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across multiple technologies and frameworks
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="p-6 card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-${category.color}/20 text-${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold font-inter">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;