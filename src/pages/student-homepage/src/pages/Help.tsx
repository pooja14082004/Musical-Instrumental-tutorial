import { HelpCircle, MessageCircle, Mail, Phone, ChevronRight, Book, Video, FileQuestion } from "lucide-react";
import StudentLayout from "@/components/layouts/StudentLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How do I upload my practice videos?",
    answer: "Go to the Upload section from the sidebar, click on the upload zone to select your video file, add an optional caption, choose your visibility settings, and click Upload Media.",
  },
  {
    question: "How do credit points work?",
    answer: "Credit points are earned by completing lessons, uploading practice videos, and participating in live sessions. You can use credits to unlock premium content and features.",
  },
  {
    question: "Can I change my instrumental class?",
    answer: "Yes, you can request a class change by contacting your tutor or through the Help section. Class changes may require administrative approval.",
  },
  {
    question: "How do I join a live session?",
    answer: "Navigate to the Live section to see currently live and upcoming sessions. Click on any live session card to join immediately.",
  },
  {
    question: "What video formats are supported?",
    answer: "We support MP4, MOV, AVI, and WebM formats. For best results, we recommend MP4 with H.264 encoding.",
  },
];

const helpCategories = [
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Watch guides on using the platform",
  },
  {
    icon: Book,
    title: "Documentation",
    description: "Detailed guides and manuals",
  },
  {
    icon: FileQuestion,
    title: "FAQs",
    description: "Quick answers to common questions",
  },
];

const Help = () => {
  return (
    <StudentLayout>
      <div className="p-8 animate-fade-in">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">
            How can we <span className="gold-text">help</span>?
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Find answers to common questions or get in touch with our support team
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {helpCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card p-6 hover-lift cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="glass-card p-6 mb-12">
          <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-border rounded-lg px-4 data-[state=open]:bg-secondary/30"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Support */}
        <div className="glass-card p-8">
          <h2 className="text-2xl font-display font-semibold text-foreground mb-6 text-center">
            Still need help?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="h-auto py-6 flex flex-col items-center gap-3 border-border hover:border-primary hover:bg-primary/5"
            >
              <MessageCircle className="w-6 h-6 text-primary" />
              <div className="text-center">
                <p className="font-medium text-foreground">Live Chat</p>
                <p className="text-xs text-muted-foreground">Get instant support</p>
              </div>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-6 flex flex-col items-center gap-3 border-border hover:border-primary hover:bg-primary/5"
            >
              <Mail className="w-6 h-6 text-primary" />
              <div className="text-center">
                <p className="font-medium text-foreground">Email Us</p>
                <p className="text-xs text-muted-foreground">support@musichub.com</p>
              </div>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-6 flex flex-col items-center gap-3 border-border hover:border-primary hover:bg-primary/5"
            >
              <Phone className="w-6 h-6 text-primary" />
              <div className="text-center">
                <p className="font-medium text-foreground">Call Us</p>
                <p className="text-xs text-muted-foreground">+91 98765 43210</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Help;
