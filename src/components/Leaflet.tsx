import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Brain, 
  Map, 
  GraduationCap, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles, 
  Globe, 
  BookOpen, 
  FileCheck,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PanelProps {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  content: string[];
  isOpen: boolean;
  onClick: () => void;
  key?: React.Key;
}

const Panel = ({ id, title, subtitle, icon, color, content, isOpen, onClick }: PanelProps) => {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={cn(
        "relative cursor-pointer overflow-hidden transition-all duration-500 ease-in-out",
        isOpen ? "flex-[4] h-[600px] md:h-auto" : "flex-1 h-[150px] md:h-auto",
        "border-r border-white/10 last:border-r-0"
      )}
      initial={false}
    >
      <div className={cn("absolute inset-0 opacity-20", color)} />
      
      <div className="relative h-full flex flex-col p-6 md:p-8">
        {/* Header Section */}
        <div className={cn(
          "flex items-center gap-4 transition-all duration-500",
          isOpen ? "mb-8" : "mb-0"
        )}>
          <div className={cn(
            "p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl",
            "transition-transform duration-500",
            isOpen ? "scale-110" : "scale-100"
          )}>
            {icon}
          </div>
          
          <div className={cn(
            "transition-all duration-500",
            !isOpen && "md:opacity-0 md:translate-x-4"
          )}>
            <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
            <p className="text-sm text-white/60 font-medium">{subtitle}</p>
          </div>
        </div>

        {/* Collapsed Title (Vertical) */}
        {!isOpen && (
          <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
            <span className="rotate-90 text-2xl font-black text-white/10 uppercase tracking-widest whitespace-nowrap">
              {title}
            </span>
          </div>
        )}

        {/* Expanded Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="flex-1 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  {content.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
                      <p className="text-white/80 text-lg leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                <Button variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white hover:text-black transition-all rounded-full px-8">
                  Explore Services <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Badge variant="secondary" className="bg-white/10 text-white/60 border-none">
                  0{id}
                </Badge>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interaction Hint */}
        {!isOpen && (
          <motion.div 
            className="absolute bottom-6 right-6 text-white/20"
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default function Leaflet() {
  const [activePanel, setActivePanel] = useState<number | null>(0);

  const panels = [
    {
      id: 1,
      title: "AI Solutions",
      subtitle: "AIOS: Proactive Intelligence",
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      color: "bg-blue-600",
      content: [
        "Complete Data Sovereignty: Total control with no third-party dependencies.",
        "Proactive Intelligence: Surfaces what matters before you even ask.",
        "Powerful Yet Simple: Enterprise capability without technical barriers.",
        "Workflow Enhancement: Amplifies judgment instead of substituting it."
      ]
    },
    {
      id: 2,
      title: "Geo Spatial & GIS",
      subtitle: "Location Intelligence",
      icon: <Map className="w-8 h-8 text-emerald-400" />,
      color: "bg-emerald-600",
      content: [
        "Advanced Spatial Mapping & Visualization",
        "Remote Sensing data analysis and interpretation",
        "Custom GIS software development & integration",
        "Real-time location tracking and fleet management"
      ]
    },
    {
      id: 3,
      title: "Trainings",
      subtitle: "Knowledge Transfer",
      icon: <GraduationCap className="w-8 h-8 text-amber-400" />,
      color: "bg-amber-600",
      content: [
        "Professional Certification in GIS & AI",
        "Corporate workshops on digital transformation",
        "Hands-on technical bootcamps for developers",
        "Executive seminars on emerging technologies"
      ]
    },
    {
      id: 4,
      title: "ISO Compliance",
      subtitle: "Quality Assurance",
      icon: <ShieldCheck className="w-8 h-8 text-purple-400" />,
      color: "bg-purple-600",
      content: [
        "ISO 9001:2015 Quality Management Systems",
        "ISO 27001 Information Security Management",
        "Compliance auditing and gap analysis",
        "Process optimization and documentation"
      ]
    }
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center font-sans">
      <div className="max-w-7xl w-full">
        {/* Leaflet Container */}
        <Card className="bg-zinc-900/50 border-white/10 overflow-hidden backdrop-blur-2xl shadow-2xl">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row min-h-[600px]">
              {panels.map((panel, index) => (
                <Panel
                  key={panel.id}
                  id={panel.id}
                  title={panel.title}
                  subtitle={panel.subtitle}
                  icon={panel.icon}
                  color={panel.color}
                  content={panel.content}
                  isOpen={activePanel === index}
                  onClick={() => setActivePanel(index)}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
