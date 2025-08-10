import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Code, Instagram, Twitter } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-primary-foreground animate-float">
            MN
          </div>
          
          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-inter">
            <span className="text-glow">Mulla Mohammed</span>
            <br />
            <span className="hero-gradient bg-clip-text text-transparent">Nayeem</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-inter">
            Computer Science Engineering Student & Full Stack Developer
          </p>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about building real-world web and AI solutions. Experienced in developing 
            scalable applications including job portals, e-commerce sites, and blockchain-based medical apps.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="hero-gradient hover:opacity-90 transition-opacity">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
              <ExternalLink className="w-5 h-5 mr-2" />
              View Projects
            </Button>
          </div>
          
          {/* Contact Links */}
          <Card className="max-w-2xl mx-auto p-6 card-gradient border-border/50">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              <a 
                href="mailto:mmdnayeem4705@gmail.com"
                className="flex flex-col items-center gap-2 text-sm hover:text-primary transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-xs">Email</span>
              </a>
              <a 
                href="tel:+917013827080"
                className="flex flex-col items-center gap-2 text-sm hover:text-primary transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-xs">Call</span>
              </a>
              <a 
                href="https://github.com/mmdnayeem4705"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-sm hover:text-primary transition-colors group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-xs">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/mulla-mohammed-nayeem-09b33a361/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-sm hover:text-primary transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-xs">LinkedIn</span>
              </a>
              <a 
                href="https://leetcode.com/u/Mulla_Mohammed_Nayeem/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-sm hover:text-primary transition-colors group"
              >
                <Code className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-xs">LeetCode</span>
              </a>
              <a 
                href="https://www.hackerrank.com/profile/mmdnayeem4705"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-sm hover:text-primary transition-colors group"
              >
                <Code className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-xs">HackerRank</span>
              </a>
            </div>
            <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-border/50">
              <a 
                href="https://www.instagram.com/m_md_nayeem/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors group"
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-xs">Instagram</span>
              </a>
              <a 
                href="https://x.com/m_md_nayeem1314"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors group"
              >
                <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-xs">Twitter</span>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;