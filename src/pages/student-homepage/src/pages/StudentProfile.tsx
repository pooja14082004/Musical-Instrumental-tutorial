import { Mail, Award, Music2, Camera, Film, Edit2 } from "lucide-react";
import StudentLayout from "@/components/layouts/StudentLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const profileData = {
  name: "John Student",
  email: "john.student@email.com",
  instrumentClass: "Guitar - Intermediate",
  credits: 2450,
  avatar: "JS",
  joinedDate: "Jan 2024",
  totalVideos: 12,
  totalPhotos: 28,
};

const uploadedVideos = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop",
    title: "My Guitar Practice - Week 3",
    date: "2 days ago",
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=300&fit=crop",
    title: "Learning Fingerstyle - Progress",
    date: "5 days ago",
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop",
    title: "Cover Song Attempt #1",
    date: "1 week ago",
  },
];

const uploadedPhotos = [
  { id: 1, url: "https://images.unsplash.com/photo-1558098329-a11cff621064?w=400&h=400&fit=crop" },
  { id: 2, url: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=400&h=400&fit=crop" },
  { id: 3, url: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=400&fit=crop" },
  { id: 4, url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop" },
  { id: 5, url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" },
  { id: 6, url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop" },
];

const StudentProfile = () => {
  return (
    <StudentLayout>
      <div className="p-8 animate-fade-in">
        {/* Profile Header */}
        <div className="glass-card p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-28 h-28 rounded-2xl gold-gradient flex items-center justify-center text-4xl font-display font-bold text-primary-foreground">
                {profileData.avatar}
              </div>
              <button className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors">
                <Edit2 className="w-4 h-4" />
              </button>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-display font-bold text-foreground mb-2">
                {profileData.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {profileData.email}
                </span>
                <span className="flex items-center gap-2">
                  <Music2 className="w-4 h-4" />
                  {profileData.instrumentClass}
                </span>
              </div>
            </div>

            {/* Credits */}
            <div className="flex flex-col items-center p-4 rounded-xl bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold gold-text">{profileData.credits.toLocaleString()}</span>
              </div>
              <span className="text-sm text-muted-foreground">Credit Points</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{profileData.totalVideos}</p>
              <p className="text-sm text-muted-foreground">Videos</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{profileData.totalPhotos}</p>
              <p className="text-sm text-muted-foreground">Photos</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{profileData.joinedDate}</p>
              <p className="text-sm text-muted-foreground">Joined</p>
            </div>
          </div>
        </div>

        {/* Uploads Tabs */}
        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="bg-card border border-border mb-6">
            <TabsTrigger value="videos" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Film className="w-4 h-4" />
              My Videos
            </TabsTrigger>
            <TabsTrigger value="photos" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Camera className="w-4 h-4" />
              My Photos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {uploadedVideos.map((video) => (
                <div key={video.id} className="glass-card overflow-hidden group hover-lift cursor-pointer">
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{video.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="photos" className="animate-fade-in">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {uploadedPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="aspect-square rounded-xl overflow-hidden group hover-lift cursor-pointer"
                >
                  <img
                    src={photo.url}
                    alt={`Photo ${photo.id}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </StudentLayout>
  );
};

export default StudentProfile;
