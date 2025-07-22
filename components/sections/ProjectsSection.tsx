import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "コーポレートランディングページ",
      description: "企業向けの高品質なランディングページ。SEO最適化、コンバージョン重視の設計、アニメーション効果、レスポンシブデザインを実装。",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO"],
      githubUrl: "https://github.com",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Eコマースプラットフォーム",
      description: "Next.js 14とSupabaseを使用したモダンなEコマースサイト。リアルタイム在庫管理、決済システム統合、レスポンシブデザインを実装。",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "#",
      featured: true
    },
    {
      title: "タスク管理アプリ",
      description: "チーム向けのリアルタイムタスク管理システム。ドラッグ&ドロップ機能、リアルタイム同期、進捗トラッキング機能を搭載。",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      githubUrl: "https://github.com",
      liveUrl: "#",
      featured: true
    },
    {
      title: "AIパワード分析ダッシュボード",
      description: "機械学習を活用したデータ分析ダッシュボード。リアルタイムデータ可視化、予測分析、カスタマイズ可能なチャート機能。",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Vue.js", "Python", "FastAPI", "Chart.js", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "#",
      featured: false
    },
    {
      title: "ポートフォリオサイト",
      description: "モダンなポートフォリオサイト。アニメーション、レスポンシブデザイン、SEO最適化を重視した設計。",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX"],
      githubUrl: "https://github.com",
      liveUrl: "#",
      featured: false
    },
    {
      title: "リアルタイムチャットアプリ",
      description: "WebSocketを使用したリアルタイムチャットアプリケーション。プライベートメッセージ、グループチャット、ファイル共有機能。",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "Node.js", "Socket.io", "Redis", "JWT"],
      githubUrl: "https://github.com",
      liveUrl: "#",
      featured: false
    },
    {
      title: "天気予報アプリ",
      description: "位置情報ベースの天気予報アプリ。美しいアニメーション、7日間予報、天気アラート機能を実装。",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React Native", "TypeScript", "OpenWeather API", "Expo"],
      githubUrl: "https://github.com",
      liveUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            主要な制作実績
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            これまでに開発した主要なプロジェクトをご紹介します
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></div>
                </div>
                <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent className="p-0 space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center space-x-2"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          <span>GitHub</span>
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="flex items-center space-x-2"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground text-center">その他のプロジェクト</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="px-8"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              GitHub で全てのプロジェクトを見る
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;