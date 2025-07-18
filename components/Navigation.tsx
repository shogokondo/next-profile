'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOnHero, setIsOnHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);
      
      // Check if we're still on the hero section
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsOnHero(scrollY < heroHeight - 200);
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'ホーム', id: 'hero' },
    { label: 'スキル', id: 'skills' },
    { label: 'プロジェクト', id: 'projects' },
    { label: 'お問い合わせ', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Code className={`h-8 w-8 ${isOnHero && !isScrolled ? 'text-white' : 'text-primary'}`} />
            <span className={`text-xl font-semibold tracking-wide ${isOnHero && !isScrolled ? 'text-white' : 'text-foreground'}`}>
              Web Developer
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${
                  isOnHero && !isScrolled 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-foreground/80 hover:text-foreground'
                } transition-all duration-300 font-medium text-sm tracking-wide uppercase hover:scale-105`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isOnHero && !isScrolled ? 'text-white hover:text-white hover:bg-white/10' : ''}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 border-b ${
              isOnHero && !isScrolled 
                ? 'bg-slate-900/95 backdrop-blur-sm border-slate-700/50' 
                : 'bg-background border-border'
            }`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 transition-colors duration-200 font-medium ${
                    isOnHero && !isScrolled
                      ? 'text-white/90 hover:text-white hover:bg-white/10'
                      : 'text-foreground/80 hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;