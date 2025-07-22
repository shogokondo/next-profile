'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Code2, Sparkles, Zap } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 pt-16"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Centered Stars - distributed vertically */}
        {/* Large Stars */}
        <div className="absolute top-[15%] left-[20%] w-3 h-3 bg-white/80 rounded-full animate-pulse z-10" style={{animationDuration: '4.2s', animationDelay: '0.2s', animation: 'pulse 4.2s ease-in-out 0.2s infinite, float 2.5s ease-in-out infinite'}}></div>
        <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-white/80 rounded-full animate-pulse z-10" style={{animationDuration: '3.5s', animationDelay: '0.2s', animation: 'pulse 4.2s ease-in-out 0.2s infinite, float 2.5s ease-in-out infinite'}}></div>
        <div className="absolute top-[25%] left-[75%] w-2 h-2 bg-yellow-100/90 rounded-full animate-pulse z-10" style={{animationDuration: '5.8s', animationDelay: '1.8s', animation: 'pulse 5.8s ease-in-out 1.8s infinite, sway 2.1s ease-in-out infinite'}}></div>
        <div className="absolute top-[45%] left-[30%] w-3 h-3 bg-blue-100/70 rounded-full animate-pulse z-10" style={{animationDuration: '6.1s', animationDelay: '3.2s', animation: 'pulse 6.1s ease-in-out 3.2s infinite, drift 2.8s ease-in-out infinite'}}></div>
        <div className="absolute top-[65%] left-[80%] w-2 h-2 bg-white/75 rounded-full animate-pulse z-10" style={{animationDuration: '4.9s', animationDelay: '0.8s', animation: 'pulse 4.9s ease-in-out 0.8s infinite, float 2.3s ease-in-out infinite'}}></div>
        <div className="absolute top-[85%] left-[40%] w-3 h-3 bg-amber-100/85 rounded-full animate-pulse z-10" style={{animationDuration: '5.3s', animationDelay: '2.1s', animation: 'pulse 5.3s ease-in-out 2.1s infinite, sway 2.6s ease-in-out infinite'}}></div>
        <div className="absolute top-[35%] left-[85%] w-2 h-2 bg-blue-50/80 rounded-full animate-pulse z-10" style={{animationDuration: '6.8s', animationDelay: '4.2s', animation: 'pulse 6.8s ease-in-out 4.2s infinite, drift 1.9s ease-in-out infinite'}}></div>
        <div className="absolute top-[55%] left-[15%] w-3 h-3 bg-white/75 rounded-full animate-pulse z-10" style={{animationDuration: '4.6s', animationDelay: '1.3s', animation: 'pulse 4.6s ease-in-out 1.3s infinite, float 2.7s ease-in-out infinite'}}></div>
        
        {/* Medium Stars */}
        <div className="absolute top-[10%] left-[25%] w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse z-10" style={{animationDuration: '6.5s', animationDelay: '1.7s', animation: 'pulse 6.5s ease-in-out 1.7s infinite, sway 3.2s ease-in-out infinite'}}></div>
        <div className="absolute top-[20%] left-[70%] w-1.5 h-1.5 bg-yellow-50/70 rounded-full animate-pulse z-10" style={{animationDuration: '7.2s', animationDelay: '3.6s', animation: 'pulse 7.2s ease-in-out 3.6s infinite, drift 2.8s ease-in-out infinite'}}></div>
        <div className="absolute top-[35%] left-[60%] w-1.5 h-1.5 bg-blue-50/55 rounded-full animate-pulse z-10" style={{animationDuration: '6.8s', animationDelay: '2.3s', animation: 'pulse 6.8s ease-in-out 2.3s infinite, float 3.5s ease-in-out infinite'}}></div>
        <div className="absolute top-[40%] left-[15%] w-1.5 h-1.5 bg-white/65 rounded-full animate-pulse z-10" style={{animationDuration: '7.9s', animationDelay: '0.9s', animation: 'pulse 7.9s ease-in-out 0.9s infinite, sway 2.4s ease-in-out infinite'}}></div>
        <div className="absolute top-[55%] left-[90%] w-1.5 h-1.5 bg-amber-50/70 rounded-full animate-pulse z-10" style={{animationDuration: '6.3s', animationDelay: '4.1s', animation: 'pulse 6.3s ease-in-out 4.1s infinite, drift 3.1s ease-in-out infinite'}}></div>
        <div className="absolute top-[70%] left-[35%] w-1.5 h-1.5 bg-white/55 rounded-full animate-pulse z-10" style={{animationDuration: '8.7s', animationDelay: '2.8s', animation: 'pulse 8.7s ease-in-out 2.8s infinite, float 2.7s ease-in-out infinite'}}></div>
        <div className="absolute top-[80%] left-[65%] w-1.5 h-1.5 bg-blue-50/60 rounded-full animate-pulse z-10" style={{animationDuration: '7.5s', animationDelay: '1.4s', animation: 'pulse 7.5s ease-in-out 1.4s infinite, sway 3.3s ease-in-out infinite'}}></div>
        <div className="absolute top-[90%] left-[50%] w-1.5 h-1.5 bg-white/65 rounded-full animate-pulse z-10" style={{animationDuration: '6.6s', animationDelay: '3.9s', animation: 'pulse 6.6s ease-in-out 3.9s infinite, drift 2.9s ease-in-out infinite'}}></div>
        <div className="absolute top-[30%] left-[10%] w-1.5 h-1.5 bg-yellow-50/60 rounded-full animate-pulse z-10" style={{animationDuration: '8.1s', animationDelay: '0.6s', animation: 'pulse 8.1s ease-in-out 0.6s infinite, float 3.4s ease-in-out infinite'}}></div>
        <div className="absolute top-[60%] left-[95%] w-1.5 h-1.5 bg-white/70 rounded-full animate-pulse z-10" style={{animationDuration: '7.3s', animationDelay: '2.7s', animation: 'pulse 7.3s ease-in-out 2.7s infinite, sway 2.6s ease-in-out infinite'}}></div>
        <div className="absolute top-[75%] left-[20%] w-1.5 h-1.5 bg-amber-50/55 rounded-full animate-pulse z-10" style={{animationDuration: '6.9s', animationDelay: '4.5s', animation: 'pulse 6.9s ease-in-out 4.5s infinite, drift 3.0s ease-in-out infinite'}}></div>
        <div className="absolute top-[95%] left-[75%] w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse z-10" style={{animationDuration: '8.2s', animationDelay: '1.8s', animation: 'pulse 8.2s ease-in-out 1.8s infinite, float 2.5s ease-in-out infinite'}}></div>
        
        {/* Small Stars */}
        <div className="absolute top-[8%] left-[45%] w-1 h-1 bg-white/50 rounded-full animate-pulse z-10" style={{animationDuration: '8.8s', animationDelay: '2.1s', animation: 'pulse 8.8s ease-in-out 2.1s infinite, sway 4.2s ease-in-out infinite'}}></div>
        <div className="absolute top-[18%] left-[85%] w-1 h-1 bg-yellow-50/45 rounded-full animate-pulse z-10" style={{animationDuration: '9.4s', animationDelay: '5.4s', animation: 'pulse 9.4s ease-in-out 5.4s infinite, drift 3.8s ease-in-out infinite'}}></div>
        <div className="absolute top-[28%] left-[25%] w-1 h-1 bg-white/55 rounded-full animate-pulse z-10" style={{animationDuration: '8.2s', animationDelay: '3.8s', animation: 'pulse 8.2s ease-in-out 3.8s infinite, float 4.5s ease-in-out infinite'}}></div>
        <div className="absolute top-[38%] left-[90%] w-1 h-1 bg-blue-50/45 rounded-full animate-pulse z-10" style={{animationDuration: '7.9s', animationDelay: '1.6s', animation: 'pulse 7.9s ease-in-out 1.6s infinite, sway 3.3s ease-in-out infinite'}}></div>
        <div className="absolute top-[48%] left-[55%] w-1 h-1 bg-white/50 rounded-full animate-pulse z-10" style={{animationDuration: '9.7s', animationDelay: '6.7s', animation: 'pulse 9.7s ease-in-out 6.7s infinite, drift 4.9s ease-in-out infinite'}}></div>
        <div className="absolute top-[58%] left-[10%] w-1 h-1 bg-amber-50/45 rounded-full animate-pulse z-10" style={{animationDuration: '8.6s', animationDelay: '4.3s', animation: 'pulse 8.6s ease-in-out 4.3s infinite, float 3.6s ease-in-out infinite'}}></div>
        <div className="absolute top-[68%] left-[80%] w-1 h-1 bg-white/55 rounded-full animate-pulse z-10" style={{animationDuration: '9.1s', animationDelay: '2.9s', animation: 'pulse 9.1s ease-in-out 2.9s infinite, sway 4.1s ease-in-out infinite'}}></div>
        <div className="absolute top-[78%] left-[40%] w-1 h-1 bg-yellow-50/45 rounded-full animate-pulse z-10" style={{animationDuration: '8.8s', animationDelay: '7.2s', animation: 'pulse 8.8s ease-in-out 7.2s infinite, drift 3.9s ease-in-out infinite'}}></div>
        <div className="absolute top-[88%] left-[70%] w-1 h-1 bg-white/45 rounded-full animate-pulse z-10" style={{animationDuration: '8.3s', animationDelay: '3.5s', animation: 'pulse 8.3s ease-in-out 3.5s infinite, float 4.4s ease-in-out infinite'}}></div>
        <div className="absolute top-[95%] left-[30%] w-1 h-1 bg-blue-50/50 rounded-full animate-pulse z-10" style={{animationDuration: '9.2s', animationDelay: '5.1s', animation: 'pulse 9.2s ease-in-out 5.1s infinite, sway 3.7s ease-in-out infinite'}}></div>
        <div className="absolute top-[12%] left-[15%] w-1 h-1 bg-white/45 rounded-full animate-pulse z-10" style={{animationDuration: '8.0s', animationDelay: '1.9s', animation: 'pulse 8.0s ease-in-out 1.9s infinite, drift 4.3s ease-in-out infinite'}}></div>
        <div className="absolute top-[22%] left-[95%] w-1 h-1 bg-amber-50/50 rounded-full animate-pulse z-10" style={{animationDuration: '9.9s', animationDelay: '6.3s', animation: 'pulse 9.9s ease-in-out 6.3s infinite, float 3.5s ease-in-out infinite'}}></div>
        <div className="absolute top-[32%] left-[5%] w-1 h-1 bg-white/45 rounded-full animate-pulse z-10" style={{animationDuration: '8.5s', animationDelay: '4.7s', animation: 'pulse 8.5s ease-in-out 4.7s infinite, sway 4.6s ease-in-out infinite'}}></div>
        <div className="absolute top-[42%] left-[65%] w-1 h-1 bg-yellow-50/50 rounded-full animate-pulse z-10" style={{animationDuration: '8.8s', animationDelay: '2.4s', animation: 'pulse 8.8s ease-in-out 2.4s infinite, drift 3.4s ease-in-out infinite'}}></div>
        <div className="absolute top-[52%] left-[85%] w-1 h-1 bg-white/45 rounded-full animate-pulse z-10" style={{animationDuration: '7.8s', animationDelay: '7.8s', animation: 'pulse 7.8s ease-in-out 7.8s infinite, float 4.7s ease-in-out infinite'}}></div>
        <div className="absolute top-[62%] left-[25%] w-1 h-1 bg-blue-50/50 rounded-full animate-pulse z-10" style={{animationDuration: '10.1s', animationDelay: '3.1s', animation: 'pulse 10.1s ease-in-out 3.1s infinite, sway 3.8s ease-in-out infinite'}}></div>
        <div className="absolute top-[72%] left-[90%] w-1 h-1 bg-white/45 rounded-full animate-pulse z-10" style={{animationDuration: '8.7s', animationDelay: '5.8s', animation: 'pulse 8.7s ease-in-out 5.8s infinite, drift 4.0s ease-in-out infinite'}}></div>
        <div className="absolute top-[82%] left-[15%] w-1 h-1 bg-amber-50/50 rounded-full animate-pulse z-10" style={{animationDuration: '9.3s', animationDelay: '4.6s', animation: 'pulse 9.3s ease-in-out 4.6s infinite, float 3.2s ease-in-out infinite'}}></div>
        <div className="absolute top-[92%] left-[85%] w-1 h-1 bg-white/45 rounded-full animate-pulse z-10" style={{animationDuration: '8.1s', animationDelay: '2.7s', animation: 'pulse 8.1s ease-in-out 2.7s infinite, sway 4.8s ease-in-out infinite'}}></div>
        <div className="absolute top-[5%] left-[60%] w-1 h-1 bg-yellow-50/50 rounded-full animate-pulse z-10" style={{animationDuration: '9.0s', animationDelay: '6.9s', animation: 'pulse 9.0s ease-in-out 6.9s infinite, drift 3.1s ease-in-out infinite'}}></div>
        
        {/* Micro Stars */}
        <div className="absolute top-[5%] left-1/2 transform -translate-x-1/2 w-px h-px bg-white/12 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-[12%] left-1/2 transform -translate-x-1/2 -translate-x-4 w-px h-px bg-blue-100/8 rounded-full animate-ping delay-1200"></div>
        <div className="absolute top-[22%] left-1/2 transform -translate-x-1/2 translate-x-6 w-px h-px bg-purple-100/12 rounded-full animate-pulse delay-800"></div>
        <div className="absolute top-[32%] left-1/2 transform -translate-x-1/2 w-px h-px bg-cyan-100/8 rounded-full animate-ping delay-400"></div>
        <div className="absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-x-8 w-px h-px bg-indigo-100/12 rounded-full animate-pulse delay-1600"></div>
        <div className="absolute top-[52%] left-1/2 transform -translate-x-1/2 translate-x-10 w-px h-px bg-white/8 rounded-full animate-ping delay-600"></div>
        <div className="absolute top-[62%] left-1/2 transform -translate-x-1/2 w-px h-px bg-blue-50/12 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-[72%] left-1/2 transform -translate-x-1/2 -translate-x-6 w-px h-px bg-purple-50/8 rounded-full animate-ping delay-200"></div>
        <div className="absolute top-[82%] left-1/2 transform -translate-x-1/2 translate-x-8 w-px h-px bg-cyan-50/12 rounded-full animate-pulse delay-1400"></div>
        <div className="absolute top-[92%] left-1/2 transform -translate-x-1/2 w-px h-px bg-indigo-50/8 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-[97%] left-1/2 transform -translate-x-1/2 -translate-x-4 w-px h-px bg-white/8 rounded-full animate-pulse delay-900"></div>
        <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 translate-x-4 w-px h-px bg-blue-50/12 rounded-full animate-ping delay-1300"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-r from-blue-600/6 to-indigo-600/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-l from-purple-600/5 to-indigo-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-600/3 to-slate-600/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Main Content */}
          <div className="space-y-4">
            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="block text-white mb-2">コードで</span>
                <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  未来を
                </span>
                <span className="block text-white">デザインする</span>
              </h1>
              
              <div className="max-w-3xl mx-auto space-y-3">
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
                  革新的なWebソリューションで
                  <br className="hidden sm:block" />
                  あなたのアイデアを現実に変える
                </p>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  最新技術とクリエイティブなデザインを融合し、
                  <br className="hidden sm:block" />
                  ユーザーの心を動かすデジタル体験を創造します
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-2.5 text-sm font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 border-0"
                onClick={() => scrollToSection('projects')}
              >
                <Code2 className="mr-2 h-4 w-4" />
                作品を見る
              </Button>
              <Button
                variant="outline"
                className="border-2 border-slate-700 hover:border-blue-400 text-slate-300 hover:text-white px-6 py-2.5 text-sm font-semibold bg-slate-900/40 backdrop-blur-xl hover:bg-slate-800/60 transition-all duration-300 hover:shadow-lg"
                onClick={() => scrollToSection('contact')}
              >
                お問い合わせ
              </Button>
            </div>
          </div>

          {/* Portfolio Showcase */}
          <div className="pt-8">
            <div className="inline-flex items-center space-x-3 text-slate-400 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-600"></div>
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium">制作実績</span>
              <Sparkles className="h-4 w-4 text-blue-400" />
              <div className="h-px w-12 bg-gradient-to-r from-slate-600 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                { 
                  title: 'コーポレートLP', 
                  description: 'Next.js × Tailwind CSS',
                  image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
                  color: 'from-blue-500/20 to-cyan-500/20',
                  href: '/lp'
                },
                { 
                  title: 'Eコマースサイト', 
                  description: 'Next.js × Supabase',
                  image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
                  color: 'from-purple-500/20 to-pink-500/20',
                  href: '#'
                },
                { 
                  title: 'タスク管理アプリ', 
                  description: 'React × Node.js',
                  image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
                  color: 'from-green-500/20 to-emerald-500/20',
                  href: '#'
                }
              ].map((project, index) => (
                <a
                  key={project.title}
                  href={project.href}
                  className="group relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/40 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-slate-600"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects')
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative z-10 p-3">
                    <div className="aspect-video mb-2 rounded-md overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xs font-semibold text-white mb-1">{project.title}</h3>
                    <p className="text-xs text-slate-300">{project.description}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="text-xs text-slate-400 hover:text-slate-300 transition-colors duration-300 font-medium"
              >
                すべての制作実績を見る →
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-6 pb-32">
            <div className="flex items-center justify-center space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 bg-slate-900/60 backdrop-blur-xl border border-slate-700/40 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:border-slate-600"
              >
                <Github className="h-4 w-4 text-slate-400 hover:text-white transition-colors duration-300" />
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="group p-2.5 bg-slate-900/60 backdrop-blur-xl border border-slate-700/40 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:border-slate-600"
              >
                <Mail className="h-4 w-4 text-slate-400 hover:text-white transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('skills')}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 group"
      >
        <div className="flex flex-col items-center space-y-2 text-slate-400 hover:text-slate-300 transition-colors">
          <span className="text-xs font-medium">SCROLL</span>
          <div className="w-5 h-8 border-2 border-slate-700 rounded-full flex justify-center">
            <div className="w-0.5 h-2 bg-slate-400 rounded-full mt-1.5 animate-bounce"></div>
          </div>
        </div>
      </button>
    </section>
  );
};

export default HeroSection;