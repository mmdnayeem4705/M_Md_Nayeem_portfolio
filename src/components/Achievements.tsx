import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Code, Target, Award } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Competitive Programming Excellence",
      description: "Achieved 5-star ratings in Python, C, and Java, and 4-star in C++ on competitive coding platforms.",
      icon: <Trophy className="w-6 h-6" />,
      color: "primary",
      stats: "5⭐ Python, C, Java | 4⭐ C++"
    },
    {
      title: "Problem Solving Mastery",
      description: "Solved over 250 problems across HackerRank and LeetCode, demonstrating strong algorithmic thinking and programming proficiency.",
      icon: <Code className="w-6 h-6" />,
      color: "success",
      stats: "250+ Problems Solved"
    },
    {
      title: "Multi-Language Proficiency",
      description: "Demonstrated expertise across multiple programming languages with consistent high ratings and problem-solving capabilities.",
      icon: <Target className="w-6 h-6" />,
      color: "accent",
      stats: "4+ Programming Languages"
    },
    {
      title: "Platform Recognition",
      description: "Recognized on HackerRank and LeetCode for consistent performance and dedication to continuous learning.",
      icon: <Award className="w-6 h-6" />,
      color: "highlight",
      stats: "HackerRank & LeetCode"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-inter">
            Achievements & <span className="text-primary">Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating milestones in competitive programming and problem solving
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title} 
              className="p-6 card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-${achievement.color}/20 text-${achievement.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 font-inter group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  <Badge 
                    variant="outline" 
                    className={`border-${achievement.color}/50 text-${achievement.color} hover:bg-${achievement.color}/10`}
                  >
                    {achievement.stats}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto p-8 card-gradient border-border/50">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Trophy className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold font-inter">Competitive Programming Portfolio</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Strong foundation in algorithmic problem solving with demonstrated excellence across 
              multiple programming languages and platforms. Consistently achieving top ratings 
              and maintaining active participation in competitive programming challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="border-primary/50 text-primary px-4 py-2">
                HackerRank Profile
              </Badge>
              <Badge variant="outline" className="border-accent/50 text-accent px-4 py-2">
                LeetCode Profile
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;