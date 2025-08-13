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
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden bg-gradient-to-br from-primary to-accent p-1 animate-float">
            <img 
              src="/lovable-uploads/3cc7a1ad-54ea-4580-9169-d6b3d3d237a8.png" 
              alt="Mulla Mohammed Nayeem - Profile Picture" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          
          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-inter">
            <span className="text-glow">Mulla Mohammed</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Nayeem</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-inter">
            Computer Science Engineering Student & Full Stack Developer
          </p>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about building real-world web and AI solutions. Experienced in developing 
            scalable applications including job portals, e-commerce sites, and blockchain-based medical apps.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;