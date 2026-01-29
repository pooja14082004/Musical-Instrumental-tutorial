import StudentSidebar from "@/components/StudentSidebar";

interface StudentLayoutProps {
  children: React.ReactNode;
}

const StudentLayout = ({ children }: StudentLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <StudentSidebar />
      <main className="ml-64 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default StudentLayout;
