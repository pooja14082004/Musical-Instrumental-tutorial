import { useEffect, useState } from "react";
import { ChevronRight, Sparkles } from "lucide-react";
import StudentLayout from "@/components/layouts/StudentLayout";
import VideoCard from "@/components/VideoCard";

type UploadItem = {
  id: number;
  thumbnail: string;
  title: string;
  duration: string;
  views: number;
  likes: number;
  isOwnVideo: boolean;
};

const StudentHome = () => {
  const [myUploads, setMyUploads] = useState<UploadItem[]>([]);

  useEffect(() => {
  const fetchUploads = async () => {
    try {
      const res = await fetch("http://localhost:5000/files/student");
      const data = await res.json();

     const mapped = data.map(
  (item: { file: string; url: string }, index: number) => ({
    id: index,
    thumbnail: item.url, // <-- Firebase direct
    title: item.file,
    duration: "N/A",
    views: 0,
    likes: 0,
    isOwnVideo: true,
  })
);


      setMyUploads(mapped);
    } catch (error) {
      console.error("Error loading student uploads:", error);
    }
  };

  fetchUploads();
}, []);


  return (
    <StudentLayout>
      <div className="p-8 animate-fade-in">
        
        {/* Welcome Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Welcome back</span>
          </div>
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">
            Continue Your <span className="gold-text">Learning Journey</span>
          </h1>
          <p className="text-muted-foreground">
            Review the materials you uploaded for your classes
          </p>
        </div>

        {/* My Uploads Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-display font-semibold text-foreground">
              My Uploads
            </h2>
            <button className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors font-medium">
              View all
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {myUploads.length === 0 ? (
            <p className="text-muted-foreground">You haven't uploaded anything yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {myUploads.map((item, index) => (
                <div
                  key={item.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <VideoCard {...item} />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </StudentLayout>
  );
};

export default StudentHome;
