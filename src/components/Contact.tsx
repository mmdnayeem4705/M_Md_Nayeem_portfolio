import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MapPin, Download, Code, Instagram, Twitter } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "mmdnayeem4705@gmail.com",
      href: "mailto:mmdnayeem4705@gmail.com",
      color: "primary"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 7013827080",
      href: "tel:+917013827080",
      color: "success"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "mmdnayeem4705",
      href: "https://github.com/mmdnayeem4705",
      color: "accent"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/mulla-mohammed-nayeem-09b33a361/",
      color: "highlight"
    },
    {
      icon: <Code className="w-5 h-5" />,
      label: "LeetCode",
      value: "Mulla_Mohammed_Nayeem",
      href: "https://leetcode.com/u/Mulla_Mohammed_Nayeem/",
      color: "primary"
    },
    {
      icon: <Code className="w-5 h-5" />,
      label: "HackerRank",
      value: "mmdnayeem4705",
      href: "https://www.hackerrank.com/profile/mmdnayeem4705",
      color: "accent"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      value: "@m_md_nayeem",
      href: "https://www.instagram.com/m_md_nayeem/",
      color: "highlight"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      value: "@m_md_nayeem1314",
      href: "https://x.com/m_md_nayeem1314",
      color: "primary"
    }
  ];

  return (
    <section className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-inter">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.label} 
                className="p-6 card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a 
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 w-full"
                >
                  <div className={`p-3 rounded-lg bg-${method.color}/20 text-${method.color} group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold font-inter mb-1 group-hover:text-primary transition-colors">
                      {method.label}
                    </h3>
                    <p className="text-muted-foreground">{method.value}</p>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <ContactForm />
            
            {/* Call to Action */}
            <Card className="p-8 card-gradient border-border/50 text-center flex flex-col justify-center">
              <div className="mb-6">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-inter mb-2">Based in Bangalore, India</h3>
                <p className="text-muted-foreground">
                  Available for internships, freelance projects, and full-time opportunities
                </p>
              </div>
              
              <div className="flex flex-col gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="hero-gradient hover:opacity-90 transition-opacity"
                  onClick={() => window.open('mailto:mmdnayeem4705@gmail.com')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me Directly
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary/50 hover:bg-primary/10"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;