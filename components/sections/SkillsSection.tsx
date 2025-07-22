import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Palette, Server } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "フロントエンド",
      icon: <Code className="h-6 w-6" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML5", "CSS3"],
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "バックエンド",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB", "REST API"],
      color: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "データベース",
      icon: <Database className="h-6 w-6" />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma", "SQL", "NoSQL"],
      color: "from-purple-500/10 to-pink-500/10"
    },
    {
      title: "デザイン・ツール",
      icon: <Palette className="h-6 w-6" />,
      skills: ["Figma", "Adobe XD", "Git", "Docker", "AWS", "Vercel", "GitHub"],
      color: "from-orange-500/10 to-red-500/10"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            スキル・技術
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            現代のWeb開発に必要な幅広い技術スタックを習得しています
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br ${category.color} hover:scale-105`}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-primary mx-auto mb-2">
                  {category.icon}
                </div>
                <CardTitle className="text-lg font-semibold">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs bg-background/60 text-foreground hover:bg-background/80 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/20">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                学習継続中の技術
              </h3>
              <p className="text-muted-foreground">
                常に新しい技術を学び続けています。現在はAI/ML統合、Web3技術、
                そして最新のフロントエンドフレームワークに焦点を当てています。
              </p>
              <div className="flex flex-wrap justify-center gap-2 pt-4">
                {["AI/ML", "Web3", "GraphQL", "Rust", "Go", "Kubernetes"].map((tech, index) => (
                  <Badge key={index} className="bg-primary/10 text-primary border-primary/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default SkillsSection;