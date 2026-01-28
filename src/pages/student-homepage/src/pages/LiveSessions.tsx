import { Radio, Users, Clock, Play, Calendar } from "lucide-react";
import StudentLayout from "@/components/layouts/StudentLayout";
import { Button } from "@/components/ui/button";

const liveSessions = [
  {
    id: 1,
    title: "Live Guitar Masterclass",
    instructor: "Prof. Rajan Kumar",
    thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop",
    viewers: 234,
    isLive: true,
  },
  {
    id: 2,
    title: "Piano Practice Session",
    instructor: "Mr. David Chen",
    thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop",
    viewers: 156,
    isLive: true,
  },
];

const upcomingSessions = [
  {
    id: 1,
    title: "Vocal Training Workshop",
    instructor: "Ms. Ananya Reddy",
    date: "Tomorrow, 4:00 PM",
    duration: "1 hour",
  },
  {
    id: 2,
    title: "Music Theory Basics",
    instructor: "Dr. Priya Sharma",
    date: "Jan 15, 6:00 PM",
    duration: "45 mins",
  },
  {
    id: 3,
    title: "Rhythm & Beats Workshop",
    instructor: "Mr. Karthik",
    date: "Jan 17, 5:30 PM",
    duration: "1.5 hours",
  },
];

const LiveSessions = () => {
  return (
    <StudentLayout>
      <div className="p-8 animate-fade-in">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-red-500 mb-2">
            <Radio className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-medium">Live Now</span>
          </div>
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">
            Live <span className="gold-text">Sessions</span>
          </h1>
          <p className="text-muted-foreground">
            Join live classes and interact with your tutors in real-time
          </p>
        </div>

        {/* Currently Live */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
            Happening Now
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {liveSessions.map((session) => (
              <div
                key={session.id}
                className="glass-card overflow-hidden group hover-lift cursor-pointer"
              >
                <div className="relative aspect-video">
                  <img
                    src={session.thumbnail}
                    alt={session.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Live badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500 text-white text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    LIVE
                  </div>

                  {/* Viewers */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 text-white text-sm">
                    <Users className="w-4 h-4" />
                    {session.viewers}
                  </div>

                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center">
                      <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {session.title}
                    </h3>
                    <p className="text-white/70">{session.instructor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Sessions */}
        <section>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
            Upcoming Sessions
          </h2>
          <div className="space-y-4">
            {upcomingSessions.map((session) => (
              <div
                key={session.id}
                className="glass-card p-5 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    {session.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {session.instructor}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {session.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {session.duration}
                  </span>
                </div>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Set Reminder
                </Button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </StudentLayout>
  );
};

export default LiveSessions;
