
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Plus, 
  Brain, 
  FileText, 
  Clock, 
  Share, 
  Star,
  Search,
  Filter
} from "lucide-react";
import { Input } from "@/components/ui/input";

const Dashboard = () => {
  const recentMindMaps = [
    {
      id: "1",
      title: "Product Roadmap Q2",
      description: "Strategic planning for upcoming product features",
      lastModified: "2 hours ago",
      nodes: 24,
      collaborators: 3,
      isStarred: true,
      tags: ["Product", "Strategy"]
    },
    {
      id: "2", 
      title: "Learning JavaScript",
      description: "Personal study notes and concepts",
      lastModified: "1 day ago",
      nodes: 18,
      collaborators: 1,
      isStarred: false,
      tags: ["Learning", "Tech"]
    },
    {
      id: "3",
      title: "Project Alpha Ideas",
      description: "Brainstorming session for new project",
      lastModified: "3 days ago",
      nodes: 32,
      collaborators: 5,
      isStarred: true,
      tags: ["Brainstorm", "Innovation"]
    },
    {
      id: "4",
      title: "Marketing Campaign",
      description: "Social media strategy and content planning",
      lastModified: "1 week ago",
      nodes: 15,
      collaborators: 2,
      isStarred: false,
      tags: ["Marketing", "Social"]
    }
  ];

  const quickStats = [
    { label: "Mind Maps", value: "12", icon: Brain },
    { label: "Total Nodes", value: "89", icon: FileText },
    { label: "Hours Saved", value: "24", icon: Clock },
    { label: "Collaborators", value: "8", icon: Share }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Welcome back!</h1>
              <p className="text-muted-foreground">Continue organizing your thoughts and ideas.</p>
            </div>
            <Button asChild className="bg-gradient-neon text-white hover:opacity-90 transition-opacity">
              <Link to="/editor">
                <Plus className="mr-2 h-4 w-4" />
                New Mind Map
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickStats.map((stat, index) => (
              <Card key={index} className="glass border-white/10 p-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-neon rounded-lg">
                    <stat.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search your mind maps..." 
                className="pl-10 glass border-white/20"
              />
            </div>
            <Button variant="outline" className="glass border-white/20">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          {/* Recent Mind Maps */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Recent Mind Maps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentMindMaps.map((mindMap) => (
                <Card key={mindMap.id} className="glass border-white/10 p-6 hover:scale-105 transition-transform duration-300 group cursor-pointer">
                  <Link to={`/editor/${mindMap.id}`}>
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold text-lg group-hover:text-neon-blue transition-colors">
                              {mindMap.title}
                            </h3>
                            {mindMap.isStarred && (
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{mindMap.description}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {mindMap.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{mindMap.lastModified}</span>
                        <div className="flex items-center space-x-4">
                          <span>{mindMap.nodes} nodes</span>
                          <span>{mindMap.collaborators} collaborators</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <Card className="glass border-white/10 p-8">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">Ready to create something amazing?</h3>
              <p className="text-muted-foreground">Start with a template or create from scratch.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline" className="glass border-white/20">
                  <Link to="/editor">
                    <FileText className="mr-2 h-4 w-4" />
                    Blank Mind Map
                  </Link>
                </Button>
                <Button asChild variant="outline" className="glass border-white/20">
                  <Link to="/blog">
                    <Brain className="mr-2 h-4 w-4" />
                    Browse Templates
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
