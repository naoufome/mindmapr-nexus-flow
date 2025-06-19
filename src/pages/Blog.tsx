
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Clock, 
  User, 
  Search, 
  ArrowRight,
  Brain,
  Lightbulb,
  Target,
  Zap
} from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Science Behind Visual Thinking",
      excerpt: "Discover how mind mapping leverages the brain's natural visual processing to enhance memory and creativity.",
      author: "Dr. Sarah Chen",
      readTime: "5 min read",
      publishDate: "Dec 15, 2023",
      tags: ["Neuroscience", "Productivity"],
      featured: true,
      icon: Brain
    },
    {
      id: 2,
      title: "10 Mind Mapping Techniques for Better Learning",
      excerpt: "Master these proven techniques to accelerate your learning and retention with visual mind maps.",
      author: "Mike Rodriguez",
      readTime: "8 min read",
      publishDate: "Dec 12, 2023",
      tags: ["Learning", "Study Tips"],
      featured: false,
      icon: Lightbulb
    },
    {
      id: 3,
      title: "Goal Setting with Visual Mind Maps",
      excerpt: "Transform your goal-setting process using mind maps to create clearer paths to success.",
      author: "Jennifer Park",
      readTime: "6 min read",
      publishDate: "Dec 10, 2023",
      tags: ["Goals", "Planning"],
      featured: false,
      icon: Target
    },
    {
      id: 4,
      title: "Boost Team Collaboration with Shared Mind Maps",
      excerpt: "Learn how teams are using collaborative mind mapping to improve communication and innovation.",
      author: "Alex Thompson",
      readTime: "7 min read",
      publishDate: "Dec 8, 2023",
      tags: ["Collaboration", "Teams"],
      featured: false,
      icon: Zap
    },
    {
      id: 5,
      title: "From Chaos to Clarity: Organizing Complex Projects",
      excerpt: "Break down complex projects into manageable pieces using strategic mind mapping approaches.",
      author: "Emily Davis",
      readTime: "10 min read",
      publishDate: "Dec 5, 2023",
      tags: ["Project Management", "Organization"],
      featured: false,
      icon: Brain
    },
    {
      id: 6,
      title: "Creative Problem Solving with Mind Maps",
      excerpt: "Unlock your creative potential and solve problems more effectively using visual thinking techniques.",
      author: "David Kim",
      readTime: "6 min read",
      publishDate: "Dec 3, 2023",
      tags: ["Creativity", "Problem Solving"],
      featured: false,
      icon: Lightbulb
    }
  ];

  const categories = ["All", "Productivity", "Learning", "Creativity", "Teams", "Research"];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">
              The <span className="text-gradient">MindMapr</span> Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and techniques to master the art of visual thinking and boost your productivity.
            </p>
          </div>

          {/* Search and Categories */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 glass border-white/20"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button 
                  key={category} 
                  variant="outline" 
                  size="sm"
                  className="glass border-white/20 hover:bg-gradient-neon hover:text-white transition-all"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Article */}
          {featuredPost && (
            <Card className="glass border-white/10 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Badge className="bg-gradient-neon text-white">Featured</Badge>
                    <h2 className="text-3xl font-bold leading-tight">{featuredPost.title}</h2>
                    <p className="text-lg text-muted-foreground">{featuredPost.excerpt}</p>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <span>{featuredPost.publishDate}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  
                  <Button className="bg-gradient-neon text-white hover:opacity-90 transition-opacity">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-subtle rounded-2xl flex items-center justify-center">
                    <featuredPost.icon className="h-24 w-24 text-neon-blue" />
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Regular Articles */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Card key={post.id} className="glass border-white/10 p-6 hover:scale-105 transition-transform duration-300 group cursor-pointer">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-neon rounded-xl">
                      <post.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold group-hover:text-neon-blue transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground">{post.excerpt}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <Card className="glass border-white/10 p-8 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Stay Updated</h3>
                <p className="text-muted-foreground">
                  Get the latest mind mapping tips, productivity insights, and creative techniques delivered to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email..." 
                  className="flex-1 glass border-white/20"
                />
                <Button className="bg-gradient-neon text-white hover:opacity-90 transition-opacity">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
