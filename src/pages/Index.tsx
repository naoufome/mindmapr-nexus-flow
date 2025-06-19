import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ThreeBackground } from "@/components/ThreeBackground";
import { FloatingIcons } from "@/components/FloatingIcons";
import { Hero3D } from "@/components/Hero3D";
import { 
  Brain, 
  Zap, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Play,
  CheckCircle
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "Visual Mind Mapping",
      description: "Create beautiful, interactive mind maps with drag-and-drop nodes and connections."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built for speed with smooth animations and real-time collaboration features."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share your thoughts and collaborate with team members in real-time."
    },
    {
      icon: Sparkles,
      title: "Smart Organization",
      description: "AI-powered suggestions to help organize and connect your ideas intelligently."
    }
  ];

  const benefits = [
    "Organize complex thoughts visually",
    "Boost productivity by 40%",
    "Collaborate seamlessly with teams",
    "Export to multiple formats",
    "Sync across all devices"
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle relative">
      <ThreeBackground />
      <FloatingIcons />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Organize Your
                <span className="block text-gradient">Thoughts</span>
                <span className="block">Beautifully</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                MindMapr transforms chaos into clarity. Create stunning mind maps, 
                organize complex ideas, and boost your productivity with our intuitive visual interface.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-neon text-white hover:opacity-90 transition-all duration-300 hover:scale-105">
                <Link to="/dashboard">
                  Start Creating <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="glass border-white/20 hover:scale-105 transition-all duration-300">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero 3D Visual */}
          <div className="mt-16 relative">
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto animate-float backdrop-blur-xl bg-white/5">
              <Hero3D />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why Choose <span className="text-gradient">MindMapr</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of thought organization with our cutting-edge features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass border-white/10 p-6 hover:scale-105 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="p-3 bg-gradient-neon rounded-lg w-fit">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Unlock Your <span className="text-gradient">Creative Potential</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Join thousands of creators, students, and professionals who have 
                  transformed their thinking process with MindMapr.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-neon-blue flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="bg-gradient-neon text-white hover:opacity-90 transition-opacity">
                <Link to="/dashboard">
                  Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="glass rounded-2xl p-8 animate-float" style={{ animationDelay: '1s' }}>
                <div className="aspect-square bg-gradient-subtle rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Sparkles className="h-20 w-20 text-neon-pink mx-auto animate-glow" />
                    <p className="text-lg font-medium">Productivity Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="glass border-white/10 p-12">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Ready to Transform Your <span className="text-gradient">Thinking</span>?
              </h2>
              <p className="text-xl text-muted-foreground">
                Start creating beautiful mind maps today. No credit card required.
              </p>
              <Button asChild size="lg" className="bg-gradient-neon text-white hover:opacity-90 transition-opacity">
                <Link to="/dashboard">
                  Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
