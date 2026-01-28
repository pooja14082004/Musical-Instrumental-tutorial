import { useState, useRef } from "react";
import { Upload, Image, Film, X, Globe, Lock, Users, Check } from "lucide-react";
import StudentLayout from "@/components/layouts/StudentLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type FileType = "image" | "video" | null;
type Visibility = "public" | "private" | "specific";

const UploadMedia = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileType, setFileType] = useState<FileType>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const [visibility, setVisibility] = useState<Visibility>("public");
  const [specificPerson, setSpecificPerson] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
    
    // Determine file type
    if (file.type.startsWith("image/")) {
      setFileType("image");
    } else if (file.type.startsWith("video/")) {
      setFileType("video");
    }

    // Create preview
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFileType(null);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    
    setIsUploading(true);
    // Simulate upload
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsUploading(false);
    setUploadSuccess(true);
    
    // Reset after showing success
    setTimeout(() => {
      setUploadSuccess(false);
      handleRemoveFile();
      setCaption("");
      setVisibility("public");
      setSpecificPerson("");
    }, 3000);
  };

  const visibilityOptions = [
    { value: "public" as Visibility, label: "Public", icon: Globe, description: "Everyone can see this" },
    { value: "private" as Visibility, label: "Private", icon: Lock, description: "Only you can see this" },
    { value: "specific" as Visibility, label: "Specific Person", icon: Users, description: "Share with specific people" },
  ];

  return (
    <StudentLayout>
      <div className="p-8 max-w-3xl mx-auto animate-fade-in">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-foreground mb-2">
            Upload <span className="gold-text">Media</span>
          </h1>
          <p className="text-muted-foreground">
            Share your music journey with photos and videos
          </p>
        </div>

        {/* Upload Zone */}
        <div className="glass-card p-6 mb-6">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,video/*"
            onChange={handleFileSelect}
            className="hidden"
            id="file-upload"
          />

          {!selectedFile ? (
            <label
              htmlFor="file-upload"
              className="upload-zone flex flex-col items-center justify-center cursor-pointer min-h-[300px]"
            >
              <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-4">
                <Upload className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Choose a file to upload
              </h3>
              <p className="text-muted-foreground text-center mb-4">
                Drag and drop or click to browse
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Image className="w-4 h-4" />
                  Images
                </span>
                <span className="flex items-center gap-1.5">
                  <Film className="w-4 h-4" />
                  Videos
                </span>
              </div>
            </label>
          ) : (
            <div className="space-y-4">
              {/* Preview */}
              <div className="relative rounded-xl overflow-hidden bg-black/20">
                {fileType === "image" && preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full max-h-[400px] object-contain mx-auto"
                  />
                )}
                {fileType === "video" && preview && (
                  <video
                    src={preview}
                    controls
                    className="w-full max-h-[400px] object-contain mx-auto"
                  />
                )}
                <button
                  onClick={handleRemoveFile}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* File info */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                {fileType === "image" ? (
                  <Image className="w-5 h-5 text-primary" />
                ) : (
                  <Film className="w-5 h-5 text-primary" />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {selectedFile.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Caption */}
        <div className="glass-card p-6 mb-6">
          <label className="block text-sm font-medium text-foreground mb-2">
            Caption <span className="text-muted-foreground">(optional)</span>
          </label>
          <Textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Add a caption to your upload..."
            className="bg-input border-border focus:border-primary resize-none"
            rows={3}
          />
        </div>

        {/* Visibility */}
        <div className="glass-card p-6 mb-8">
          <label className="block text-sm font-medium text-foreground mb-4">
            Visibility
          </label>
          <div className="space-y-3">
            {visibilityOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setVisibility(option.value)}
                className={cn(
                  "w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 text-left",
                  visibility === option.value
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50 bg-transparent"
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center",
                    visibility === option.value
                      ? "gold-gradient"
                      : "bg-secondary"
                  )}
                >
                  <option.icon
                    className={cn(
                      "w-5 h-5",
                      visibility === option.value
                        ? "text-primary-foreground"
                        : "text-muted-foreground"
                    )}
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{option.label}</p>
                  <p className="text-sm text-muted-foreground">
                    {option.description}
                  </p>
                </div>
                {visibility === option.value && (
                  <div className="w-6 h-6 rounded-full gold-gradient flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Specific Person Input */}
          {visibility === "specific" && (
            <div className="mt-4 animate-scale-in">
              <Input
                value={specificPerson}
                onChange={(e) => setSpecificPerson(e.target.value)}
                placeholder="Enter email or username..."
                className="bg-input border-border focus:border-primary"
              />
            </div>
          )}
        </div>

        {/* Upload Button */}
        <Button
          onClick={handleUpload}
          disabled={!selectedFile || isUploading}
          className={cn(
            "w-full h-14 text-lg font-semibold rounded-xl transition-all duration-300",
            uploadSuccess
              ? "bg-green-500 hover:bg-green-500"
              : "gold-gradient hover:opacity-90"
          )}
        >
          {isUploading ? (
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Uploading...
            </span>
          ) : uploadSuccess ? (
            <span className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              Uploaded Successfully!
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Upload Media
            </span>
          )}
        </Button>
      </div>
    </StudentLayout>
  );
};

export default UploadMedia;
