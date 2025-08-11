import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
const projects = [
    {
      title: "Job Application Portal",
      description: "A full-stack web platform with role-based access for Students, HRs, and Admins to manage job applications seamlessly. Includes secure authentication, job posting, applicant tracking, and RESTful API integration with MySQL backend.",
      technologies: ["React.js", "Node.js", "MySQL", "REST API", "Authentication"],
      liveUrl: "https://jobapplication.magicloops.app/",
      githubUrl: "https://github.com/mmdnayeem4705/Job-apply-portal",
      category: "Full Stack Web App"
    },
    {
      title: "Medical Record Storage DApp",
      description: "Built a secure Web3-based doctor appointment app where patients submit medical forms and book appointments using ETH via MetaMask. Patient data is stored on a local blockchain and accessible only to the assigned doctor, ensuring privacy and decentralization.",
      technologies: ["Web3", "Blockchain", "Ethereum", "MetaMask", "Smart Contracts"],
      liveUrl: "https://dappmedica-iah44zaco-kings-projects-4bf43fd1.vercel.app/",
      githubUrl: "https://github.com/mmdnayeem4705/Doctor-Appointment-Booking-using-blockchain",
      category: "Blockchain DApp"
    },
    {
      title: "Nayeem Store - E-Commerce Platform",
      description: "This project is a modern e-commerce web app built with Frontend Technologies and Firebase. It features user registration, login, product browsing, dynamic cart management with quantity controls and a responsive Bootstrap UI. The app supports real-time search, order history and secure checkout.",
      technologies: ["React.js", "Firebase", "Bootstrap", "Real-time Search", "Cart Management"],
      liveUrl: "https://ecommerce-website-using-react-js-q972-i8ys3zseh.vercel.app/",
      githubUrl: "https://github.com/mmdnayeem4705/Ecommerce_website_using_ReactJs",
      category: "E-Commerce Web App"
    },
    {
      title: "Eye Detection For Safe Driving",
      description: "Developed a real-time system that detects driver drowsiness by tracking eye movements and triggers an alert using a beep sound if the eyes remain closed for more than 20 seconds, enhancing road safety and reducing the risk of accidents.",
      technologies: ["Python", "Computer Vision", "OpenCV", "Real-time Processing", "AI/ML"],
      githubUrl: "https://github.com/mmdnayeem4705/Drowsiness_Detection",
      category: "AI/ML Application"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-inter">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world applications with cutting-edge technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="p-6 card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-[1.02] group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <Badge variant="outline" className="mb-3 text-primary border-primary/50">
                  {project.category}
                </Badge>
                <h3 className="text-xl font-bold mb-3 font-inter group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                {project.liveUrl && (
                  <Button 
                    asChild 
                    size="sm" 
                    className="hero-gradient hover:opacity-90"
                  >
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                <Button 
                  asChild
                  variant="outline" 
                  size="sm"
                  className="border-primary/50 hover:bg-primary/10"
                >
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;