import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "internship",
      title: "Java Full Stack Internship",
      company: "Infosys Spring Boot",
      duration: "Completed",
      description: "Completed a Full Stack Java Development 0.6 virtual internship at Infosys, gaining hands-on experience in building scalable web applications using Spring Boot, Java, MySQL, and frontend technologies like HTML, CSS, JavaScript, and React.js.",
      technologies: ["Java", "Spring Boot", "MySQL", "React.js", "HTML", "CSS", "JavaScript"],
      icon: <Building className="w-5 h-5" />
    },
    {
      type: "internship",
      title: "Industry Ready Java Spring Developer",
      company: "Telusko",
      duration: "Currently Pursuing",
      description: "Currently doing this certification to gain knowledge and experience by doing projects on Back-End Java.",
      technologies: ["Java", "Spring Framework", "Backend Development"],
      icon: <Building className="w-5 h-5" />
    },
    {
      type: "internship",
      title: "Data Analyst Intern",
      company: "Unified Mentor",
      duration: "Completed",
      description: "Completed a Data Analyst internship at Unified Mentor, demonstrating proficiency in data cleaning, visualization, and insight extraction from real-world datasets using analytical tools.",
      technologies: ["Data Analysis", "Data Visualization", "Statistical Analysis", "Analytical Tools"],
      icon: <Building className="w-5 h-5" />
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "GITAM University, Bangalore",
      duration: "2022 - 2026",
      description: "Currently pursuing B-Tech in Computer Science Engineering with focus on software development, algorithms, and emerging technologies.",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      degree: "Intermediate - MPC",
      institution: "Sri Sudha Junior Intermediate College",
      duration: "2020 - 2022",
      description: "Completed intermediate education in Mathematics, Physics, and Chemistry stream.",
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-inter">
            Experience & <span className="text-primary">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey and academic background
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Internships */}
          <div>
            <h3 className="text-2xl font-bold mb-8 font-inter flex items-center gap-3">
              <Building className="w-6 h-6 text-primary" />
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card 
                  key={exp.title} 
                  className="p-6 card-gradient border-border/50 hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/20 text-primary flex-shrink-0">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-lg font-semibold font-inter">{exp.title}</h4>
                        <Badge variant={exp.duration === "Currently Pursuing" ? "default" : "outline"}>
                          {exp.duration}
                        </Badge>
                      </div>
                      <p className="text-primary font-medium mb-3">{exp.company}</p>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 font-inter flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={edu.degree} 
                  className="p-6 card-gradient border-border/50 hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-accent/20 text-accent flex-shrink-0">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold font-inter mb-2">{edu.degree}</h4>
                      <p className="text-primary font-medium mb-1">{edu.institution}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{edu.duration}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;