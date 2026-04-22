import React from "react";
import { motion } from "motion/react";
import { 
  Brain, 
  Map, 
  GraduationCap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Leaflet from "./Leaflet";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
          </div>
          <span className="text-xl font-black text-white tracking-tighter">CODES-MATRIX</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Services", "Solutions", "Training", "Compliance"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-white/60 hover:text-white transition-colors">
              {item}
            </a>
          ))}
          <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-[#050505] border-b border-white/5 p-6 space-y-4"
        >
          {["Services", "Solutions", "Training", "Compliance"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block text-lg font-medium text-white/60">
              {item}
            </a>
          ))}
          <Button className="w-full bg-white text-black hover:bg-white/90 rounded-full">
            Get Started
          </Button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full mb-6 bg-blue-500/5">
              Pioneering the Digital Frontier
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
              ENGINEERING THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 animate-gradient">FUTURE OF DATA</span>
            </h1>
            <p className="mt-8 text-white/40 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
              Codes-Matrix delivers high-performance AI, Geo-Spatial intelligence, and rigorous compliance frameworks for the modern enterprise.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-blue-600/20">
              Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-full px-10 h-14 text-lg font-bold">
              View Case Studies
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureSection = () => {
  const features = [
    {
      title: "Precision AI",
      desc: "Neural networks designed for industrial-scale accuracy.",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Spatial Mastery",
      desc: "Unlocking the power of location with advanced GIS.",
      icon: <Map className="w-6 h-6" />
    },
    {
      title: "Elite Training",
      desc: "Upskilling teams for the next generation of tech.",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: "Global Standards",
      desc: "ISO-certified processes for absolute security.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-white/40 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              READY TO <br />
              <span className="text-emerald-400">SCALE UP?</span>
            </h2>
            <p className="text-white/40 text-xl font-medium">
              Join 120+ global enterprises that trust Codes-Matrix for their most critical digital infrastructure.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Mail className="w-5 h-5" />, text: "solutions@codes-matrix.com" },
                { icon: <Phone className="w-5 h-5" />, text: "+92 323 5300079" },
                { icon: <MapPin className="w-5 h-5" />, text: "Dubai • Islamabad • Lahore" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white/60">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-emerald-400">
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-zinc-900/50 border-white/10 backdrop-blur-xl p-8 rounded-3xl">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest">First Name</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Last Name</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Email Address</label>
                <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 transition-all" />
              </div>
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold h-14 rounded-xl text-lg">
                Send Inquiry
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-sm rotate-45" />
            </div>
            <span className="text-lg font-black text-white tracking-tighter uppercase">Codes-Matrix</span>
          </div>
          
          <div className="flex gap-8 text-white/40 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>

          <div className="flex gap-4">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center text-white/20 text-xs font-bold tracking-widest uppercase">
          © 2026 Codes-Matrix. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

const SolutionsSection = () => {
  const solutions = [
    {
      id: "ai",
      title: "AI Solutions",
      subtitle: "AIOS: Proactive Intelligence",
      description: "Codes-Matrix delivers high-performance AI frameworks that anticipate needs rather than just responding to them.",
      points: [
        "Complete Data Sovereignty: Total control with no third-party dependencies.",
        "Proactive Intelligence: Surfaces what matters before you even ask.",
        "Powerful Yet Simple: Enterprise capability without technical barriers.",
        "Workflow Enhancement: Amplifies judgment instead of substituting it."
      ],
      icon: <Brain className="w-12 h-12 text-blue-400" />,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
      color: "from-blue-600/20 to-transparent",
      borderColor: "border-blue-500/20"
    },
    {
      id: "gis",
      title: "Geo Spatial & GIS",
      subtitle: "Location Intelligence",
      description: "Unlocking the power of location data through advanced mapping and real-time spatial analysis.",
      points: [
        "Advanced Spatial Mapping: High-fidelity visualization of complex data.",
        "Remote Sensing: Interpretation of satellite and aerial imagery.",
        "Custom GIS Software: Tailored tools for your specific spatial needs.",
        "Real-time Tracking: Precision monitoring of assets and fleets."
      ],
      icon: <Map className="w-12 h-12 text-emerald-400" />,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
      color: "from-emerald-600/20 to-transparent",
      borderColor: "border-emerald-500/20"
    },
    {
      id: "training",
      title: "Trainings",
      subtitle: "Knowledge Transfer",
      description: "Empowering your workforce with the skills needed to lead in the age of AI and digital transformation.",
      points: [
        "Professional Certification: Industry-recognized GIS & AI credentials.",
        "Corporate Workshops: Strategic digital transformation training.",
        "Technical Bootcamps: Intensive hands-on coding and analysis.",
        "Executive Seminars: High-level insights on emerging tech trends."
      ],
      icon: <GraduationCap className="w-12 h-12 text-amber-400" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
      color: "from-amber-600/20 to-transparent",
      borderColor: "border-amber-500/20"
    },
    {
      id: "iso",
      title: "ISO Compliance",
      subtitle: "Quality Assurance",
      description: "Rigorous compliance frameworks and auditing services to ensure your operations meet global standards.",
      points: [
        "ISO 9001:2015: Comprehensive Quality Management implementation.",
        "ISO 27001: Robust Information Security Management systems.",
        "Compliance Auditing: Thorough gap analysis and risk assessment.",
        "Process Optimization: Streamlined documentation and workflows."
      ],
      icon: <ShieldCheck className="w-12 h-12 text-purple-400" />,
      color: "from-purple-600/20 to-transparent",
      borderColor: "border-purple-500/20"
    }
  ];

  return (
    <div className="space-y-32 py-24">
      {solutions.map((s, i) => (
        <section key={s.id} id={s.id} className="max-w-7xl mx-auto px-6">
          <div className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
            i % 2 === 1 && "lg:flex-row-reverse"
          )}>
            <motion.div 
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={cn("space-y-8", i % 2 === 1 && "lg:order-2")}
            >
              <div className={cn("w-20 h-20 rounded-3xl bg-gradient-to-br flex items-center justify-center shadow-2xl", s.color)}>
                {s.icon}
              </div>
              <div className="space-y-4">
                <Badge variant="outline" className={cn("border-none bg-white/5 text-white/60", s.borderColor)}>
                  {s.subtitle}
                </Badge>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
                  {s.title}
                </h2>
                <p className="text-white/40 text-xl font-medium leading-relaxed">
                  {s.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {s.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 shrink-0" />
                    <span className="text-white/70 font-medium leading-snug">{point}</span>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="border-white/10 text-white hover:bg-white hover:text-black rounded-full px-8 h-12">
                Learn More About {s.title}
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={cn(
                "relative aspect-square rounded-[40px] overflow-hidden border border-white/5 bg-zinc-900/50 backdrop-blur-3xl group",
                i % 2 === 1 && "lg:order-1"
              )}
            >
              {s.image ? (
                <div className="absolute inset-0">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                </div>
              ) : (
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity", s.color)} />
              )}
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className={cn("absolute inset-0 blur-3xl opacity-20", s.color)} />
                  {React.cloneElement(s.icon as React.ReactElement, { 
                    className: cn(
                      "w-48 h-48 relative z-10",
                      s.image ? "opacity-20 group-hover:opacity-40" : "opacity-40"
                    ) 
                  })}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-2 h-2 rounded-full bg-white/20" />
              <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-white/20" />
              <div className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-white/20" />
              <div className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-white/20" />
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default function LandingPage() {
  return (
    <div className="bg-[#050505] min-h-screen selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      
      {/* Interactive Leaflet Section - Quick Overview */}
      <section id="overview" className="py-20 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <Badge variant="outline" className="border-white/10 text-white/40 mb-4">Interactive Experience</Badge>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">Quick Overview</h2>
          <p className="text-white/40 text-lg font-medium">Click to explore our core service pillars at a glance</p>
        </div>
        <Leaflet />
      </section>

      {/* Detailed Solutions Sections */}
      <SolutionsSection />

      <FeatureSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
