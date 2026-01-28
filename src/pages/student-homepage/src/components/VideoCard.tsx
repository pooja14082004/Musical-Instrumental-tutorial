import { Play, Eye, Heart, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  thumbnail: string;
  title: string;
  instructor?: string;
  duration: string;
  views?: number;
  likes?: number;
  className?: string;
  isOwnVideo?: boolean;
}

const VideoCard = ({
  thumbnail,
  title,
  instructor,
  duration,
  views,
  likes,
  className,
  isOwnVideo = false,
}: VideoCardProps) => {
  return (
    <div className={cn("video-card group", className)}>
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="video-overlay absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>
        {/* Duration badge */}
        <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/80 text-xs font-medium text-white flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {duration}
        </div>
        {/* Own video badge */}
        {isOwnVideo && (
          <div className="absolute top-2 left-2 px-2 py-1 rounded-full bg-primary/90 text-xs font-medium text-primary-foreground">
            Your Video
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        {instructor && (
          <p className="text-sm text-muted-foreground mb-3">{instructor}</p>
        )}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          {views !== undefined && (
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              {views.toLocaleString()} views
            </span>
          )}
          {likes !== undefined && (
            <span className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5" />
              {likes.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
