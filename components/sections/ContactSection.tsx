import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "contact@example.com",
      href: "mailto:contact@example.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "電話",
      value: "+81 90-XXXX-XXXX",
      href: "tel:+819000000000"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "所在地",
      value: "東京, 日本",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-gray-600"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            お問い合わせ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            新しいプロジェクトについてのご相談や、お仕事のご依頼をお待ちしています
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                お気軽にご連絡ください
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Webアプリケーションの開発、UI/UXデザイン、技術コンサルティングなど、
                幅広いご相談に対応いたします。まずはお気軽にお問い合わせください。
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-foreground">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                ソーシャルメディア
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground transition-colors p-2 rounded-lg hover:bg-muted ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20">
              <CardContent className="p-0">
                <h4 className="font-semibold text-foreground mb-2">
                  対応可能な業務
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Webアプリケーション開発</li>
                  <li>• UI/UXデザインコンサルティング</li>
                  <li>• 技術選定・アーキテクチャ設計</li>
                  <li>• 既存システムの改善・最適化</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-xl font-semibold">
                メッセージをお送りください
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      お名前 *
                    </label>
                    <Input
                      id="name"
                      placeholder="山田太郎"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      メールアドレス *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    件名 *
                  </label>
                  <Input
                    id="subject"
                    placeholder="プロジェクトについてのご相談"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    メッセージ *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="プロジェクトの詳細、ご要望、ご質問などをお聞かせください..."
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  メッセージを送信
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  通常24時間以内にご返信いたします
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;