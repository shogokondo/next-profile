import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Shield, Zap, Award, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/"
              className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">ポートフォリオに戻る</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                制作実績
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-blue-600 hover:bg-blue-700 text-white mb-4">
              コーポレートランディングページ
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              ビジネスを
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                加速させる
              </span>
              <br />
              デジタル体験
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              最新のWeb技術とデザイン思考を融合し、あなたのビジネスの成長を支える
              高品質なランディングページを制作いたします
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                無料相談を予約
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                制作事例を見る
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              なぜ選ばれるのか
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              数多くの企業様に選ばれる理由があります
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
                title: "コンバージョン最適化",
                description: "データに基づいた設計で、訪問者を顧客に変換する確率を最大化します"
              },
              {
                icon: <Zap className="h-8 w-8 text-blue-600" />,
                title: "高速パフォーマンス",
                description: "最新技術により、ページ読み込み速度を大幅に向上させます"
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: "SEO完全対応",
                description: "検索エンジンで上位表示されるよう、SEO対策を徹底的に実装します"
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "ユーザー体験重視",
                description: "直感的で使いやすいインターフェースで、ユーザーの満足度を向上させます"
              },
              {
                icon: <Award className="h-8 w-8 text-blue-600" />,
                title: "プロフェッショナル品質",
                description: "企業レベルの高品質な制作で、ブランドイメージを向上させます"
              },
              {
                icon: <Star className="h-8 w-8 text-blue-600" />,
                title: "継続サポート",
                description: "制作後も継続的なサポートで、長期的な成功をお手伝いします"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              使用技術
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              最新かつ実績のある技術スタックで開発しています
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", 
              "React", "Node.js", "Vercel", "SEO", "Analytics", "Figma"
            ].map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <Badge variant="secondary" className="w-full justify-center">
                  {tech}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              実績・成果
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              数字で証明される確かな成果
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "300%",
                label: "コンバージョン率向上",
                description: "平均的な改善率"
              },
              {
                number: "2.5秒",
                label: "ページ読み込み時間",
                description: "業界平均の半分以下"
              },
              {
                number: "95%",
                label: "クライアント満足度",
                description: "継続依頼率"
              }
            ].map((stat, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-slate-900 mb-2">
                    {stat.label}
                  </div>
                  <p className="text-slate-600">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              制作プロセス
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              確実な成果を生み出すための体系的なアプローチ
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "ヒアリング・分析",
                description: "ビジネス目標とターゲットを詳細に分析"
              },
              {
                step: "02",
                title: "戦略・設計",
                description: "コンバージョンを最大化する戦略を策定"
              },
              {
                step: "03",
                title: "デザイン・開発",
                description: "最新技術で高品質なページを制作"
              },
              {
                step: "04",
                title: "テスト・最適化",
                description: "パフォーマンスを測定し継続的に改善"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-slate-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            あなたのビジネスを次のレベルへ
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            高品質なランディングページで、ビジネスの成長を加速させませんか？
            まずは無料相談からお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3">
              <CheckCircle className="mr-2 h-5 w-5" />
              無料相談を予約
            </Button>
            <Link href="/#contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3">
                お問い合わせ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400 mb-4">
            © 2024 Web Developer Portfolio. All rights reserved.
          </p>
          <Link 
            href="/"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            ポートフォリオサイトに戻る
          </Link>
        </div>
      </footer>
    </div>
  );
}