import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentHome from "../../homepage/src/pages/pages/StudentHome";
import StudentProfile from "../../homepage/src/pages/StudentProfile";
import UploadMedia from "../../homepage/src/pages/UploadMedia";
import LiveSessions from "../../homepage/src/pages/LiveSessions";
import Help from "../../homepage/src/pages/Help";
import NotFound from "../../homepage/src/pages/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentHome />} />
          <Route path="/profile" element={<StudentProfile />} />
          <Route path="/upload" element={<UploadMedia />} />
          <Route path="/live" element={<LiveSessions />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
