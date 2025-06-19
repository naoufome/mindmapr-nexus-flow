
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "@/components/ModeToggle";
import { 
  User, 
  Mail, 
  Bell, 
  Shield, 
  Palette, 
  Download,
  Crown,
  Star,
  Calendar
} from "lucide-react";

const Profile = () => {
  const stats = [
    { label: "Mind Maps Created", value: "47", icon: Star },
    { label: "Days Active", value: "89", icon: Calendar },
    { label: "Collaborations", value: "23", icon: User },
    { label: "Total Nodes", value: "1,247", icon: Crown }
  ];

  const achievements = [
    { title: "First Mind Map", description: "Created your first mind map", earned: true },
    { title: "Collaborator", description: "Shared a mind map with a team member", earned: true },
    { title: "Power User", description: "Created 50+ mind maps", earned: false },
    { title: "Early Adopter", description: "Joined during beta period", earned: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Header */}
          <Card className="glass border-white/10 p-8">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-24 h-24 bg-gradient-neon rounded-full flex items-center justify-center">
                <User className="h-12 w-12 text-white" />
              </div>
              <div className="text-center sm:text-left space-y-2">
                <h1 className="text-3xl font-bold">Alex Thompson</h1>
                <p className="text-muted-foreground">Creative Mind Mapper</p>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  <Badge className="bg-gradient-neon text-white">Pro Member</Badge>
                  <Badge variant="secondary">Early Adopter</Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="glass border-white/10 p-6 text-center">
                <div className="space-y-2">
                  <div className="p-2 bg-gradient-neon rounded-lg w-fit mx-auto">
                    <stat.icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Profile Settings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Personal Information */}
            <Card className="glass border-white/10 p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <User className="mr-2 h-5 w-5" />
                Personal Information
              </h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="Alex Thompson" className="glass border-white/20" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="alex@example.com" className="glass border-white/20" />
                </div>
                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Input id="bio" defaultValue="UX Designer & Creative Thinker" className="glass border-white/20" />
                </div>
                <Button className="w-full bg-gradient-neon text-white hover:opacity-90 transition-opacity">
                  Update Profile
                </Button>
              </div>
            </Card>

            {/* Preferences */}
            <Card className="glass border-white/10 p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <Palette className="mr-2 h-5 w-5" />
                Preferences
              </h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Theme</p>
                    <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
                  </div>
                  <ModeToggle />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive updates about your mind maps</p>
                  </div>
                  <input type="checkbox" defaultChecked className="toggle" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Auto-save</p>
                    <p className="text-sm text-muted-foreground">Automatically save your work</p>
                  </div>
                  <input type="checkbox" defaultChecked className="toggle" />
                </div>

                <Button variant="outline" className="w-full glass border-white/20">
                  <Download className="mr-2 h-4 w-4" />
                  Export All Data
                </Button>
              </div>
            </Card>
          </div>

          {/* Achievements */}
          <Card className="glass border-white/10 p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <Crown className="mr-2 h-5 w-5" />
              Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className={`p-4 rounded-lg border ${
                  achievement.earned 
                    ? 'bg-gradient-subtle border-neon-blue/20' 
                    : 'bg-muted/10 border-muted'
                }`}>
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${
                      achievement.earned 
                        ? 'bg-gradient-neon text-white' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <Crown className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Account Actions */}
          <Card className="glass border-white/10 p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <Shield className="mr-2 h-5 w-5" />
              Account & Security
            </h2>
            <div className="space-y-4">
              <Button variant="outline" className="w-full glass border-white/20">
                Change Password
              </Button>
              <Button variant="outline" className="w-full glass border-white/20">
                Download Account Data
              </Button>
              <Button variant="destructive" className="w-full">
                Delete Account
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
