"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import {
  ArrowRight,
  Globe,
  Activity,
  Brain,
  Lock,
  FileText,
  Stethoscope,
  ChevronDown,
  Mail,
  MapPin,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react"

interface CustomLogoProps {
  className?: string
}

// --- Custom Logo Component (Geometric G) ---
const CustomLogo = ({ className }: CustomLogoProps) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Geometric G - Concentric diamond shapes */}
    {/* Outer diamond */}
    <path 
      d="M50 5 L95 50 L50 95 L5 50 Z" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="4"
    />
    {/* Middle diamond */}
    <path 
      d="M50 20 L80 50 L50 80 L20 50 Z" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="4"
    />
    {/* Inner diamond with G cutout effect */}
    <path 
      d="M50 35 L65 50 L50 65 L35 50 Z" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="4"
    />
    {/* G shape accent - horizontal line extending right */}
    <path 
      d="M50 50 L80 50" 
      stroke="currentColor" 
      strokeWidth="4"
    />
    {/* Upper right accent for G */}
    <path 
      d="M65 35 L80 20" 
      stroke="currentColor" 
      strokeWidth="4"
    />
  </svg>
)

// --- Visual Components ---
const PlatformVisual = ({ id }) => {
  const baseClass =
    "w-full h-full text-red-600 transition-all duration-1000 ease-out group-hover:scale-110 group-hover:opacity-60 opacity-40"

  switch (id) {
    case "01":
      return (
        <svg viewBox="0 0 200 200" className={baseClass}>
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" />
          <ellipse cx="100" cy="100" ry={30} fill="none" stroke="currentColor" strokeWidth="1" className="spin-slow" />
          <ellipse
            cx="100"
            cy="100"
            rx={30}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="spin-reverse-slow"
          />
          <path d="M100 10 v180 M10 100 h180" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>
      )
    case "02":
      return (
        <svg viewBox="0 0 200 200" className={baseClass}>
          <path
            d="M0,100 Q50,0 100,100 T200,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="pulse-slow"
          />
          <path
            d="M0,100 Q50,200 100,100 T200,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="pulse-delayed"
          />
          {[20, 60, 100, 140, 180].map((x, i) => (
            <circle
              key={x}
              cx={x}
              cy="100"
              r="4"
              fill="currentColor"
              style={{ animationDelay: `${i * 0.2}s` }}
              className="ping-slow"
            />
          ))}
        </svg>
      )
    case "03":
      return (
        <svg viewBox="0 0 200 200" className={baseClass}>
          <polygon
            points="100,20 180,65 180,155 100,200 20,155 20,65"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <polygon
            points="100,50 150,80 150,140 100,170 50,140 50,80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="rotate-center"
          />
          <circle cx="100" cy="110" r="15" fill="currentColor" className="pulse-slow" />
        </svg>
      )
    case "04":
      return (
        <svg viewBox="0 0 200 200" className={baseClass}>
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="18" height="18" fill="currentColor" fillOpacity="0.2" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#grid)" />
          <rect x="0" y="0" width="200" height="20" fill="currentColor" className="scan-vertical" />
        </svg>
      )
    case "05":
      return (
        <svg viewBox="0 0 200 200" className={baseClass}>
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="10 10"
            className="spin-very-slow"
          />
          <path
            d="M100 40 A 60 60 0 0 1 160 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="spin-fast"
          />
          <path
            d="M100 160 A 60 60 0 0 1 40 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="spin-fast-reverse"
          />
          <circle cx="100" cy="100" r="20" fill="currentColor" />
        </svg>
      )
    case "06":
      return (
        <svg viewBox="0 0 200 200" className={baseClass}>
          {[40, 70, 100].map((r) => (
            <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="currentColor" strokeWidth="0.5" />
          ))}
          <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="0.5" />
          <polygon
            points="100,30 170,100 100,170 30,100"
            fill="currentColor"
            fillOpacity="0.2"
            stroke="currentColor"
            className="scale-pulse"
          />
        </svg>
      )
    default:
      return null
  }
}

// --- Governance Visual Components ---
const GovernanceVisual = ({ id }) => {
  const baseClass =
    "w-full h-full text-red-600 transition-all duration-1000 ease-out group-hover:scale-110 group-hover:opacity-60 opacity-40"

  switch (id) {
    case "01":
      // Security/Shield visualization
      return (
        <svg viewBox="0 0 200 200" className={baseClass}>
          <path
            d="M100 20 L180 60 L180 100 Q180 160 100 180 Q20 160 20 100 L20 60 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="pulse-slow"
          />
          <path
            d="M100 50 L150 75 L150 100 Q150 135 100 150 Q50 135 50 100 L50 75 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="pulse-delayed"
          />
          <circle cx="100" cy="100" r="15" fill="currentColor" className="ping-slow" />
          <path d="M85 100 L95 110 L115 85" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
      )
    case "02":
      // Compliance/Document flow visualization
      return (
        <svg viewBox="0 0 200 200" className={baseClass}>
          <rect x="40" y="40" width="120" height="140" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
          {[60, 80, 100, 120, 140].map((y, i) => (
            <line
              key={y}
              x1="60"
              y1={y}
              x2="140"
              y2={y}
              stroke="currentColor"
              strokeWidth="2"
              style={{ animationDelay: `${i * 0.2}s` }}
              className="pulse-slow"
            />
          ))}
          <circle cx="50" cy="60" r="5" fill="currentColor" className="ping-slow" />
          <circle cx="50" cy="80" r="5" fill="currentColor" className="ping-slow" style={{ animationDelay: "0.2s" }} />
          <circle cx="50" cy="100" r="5" fill="currentColor" className="ping-slow" style={{ animationDelay: "0.4s" }} />
        </svg>
      )
    case "03":
      // Integration/Network visualization
      return (
        <svg viewBox="0 0 200 200" className={baseClass}>
          <circle cx="100" cy="100" r="20" fill="currentColor" />
          {[0, 72, 144, 216, 288].map((angle, i) => {
            const rad = (angle * Math.PI) / 180
            const x = 100 + 70 * Math.cos(rad)
            const y = 100 + 70 * Math.sin(rad)
            return (
              <g key={angle}>
                <line
                  x1="100"
                  y1="100"
                  x2={x}
                  y2={y}
                  stroke="currentColor"
                  strokeWidth="1"
                  style={{ animationDelay: `${i * 0.15}s` }}
                  className="pulse-slow"
                />
                <circle
                  cx={x}
                  cy={y}
                  r="12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ animationDelay: `${i * 0.15}s` }}
                  className="ping-slow"
                />
              </g>
            )
          })}
        </svg>
      )
    default:
      return null
  }
}

// --- Data ---
const platforms = [
  {
    id: "01",
    title: "ReguLytix",
    tagline: "Regulatory Intelligence",
    desc: "Real-time mapping of FDA, EMA, and PMDA changes directly to your compliance framework.",
    icon: <Globe className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    id: "02",
    title: "BioRisk AI",
    tagline: "Clinical Predictive Modeling",
    desc: "De-risking clinical trials through predictive supply chain and patient cohort analysis.",
    icon: <Activity className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    id: "03",
    title: "ModelGuard",
    tagline: "AI Governance (GRC)",
    desc: "The industry standard for governing internal LLMs. Prevent drift, bias, and hallucinations.",
    icon: <Brain className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    id: "04",
    title: "PrivacyPulse",
    tagline: "Data Sovereignty",
    desc: "Automated HIPAA & GDPR compliance for massive patient data lakes.",
    icon: <Lock className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    id: "05",
    title: "AuditFlow",
    tagline: "Autonomous Auditing",
    desc: "An AI agent that audits your internal processes 24/7/365.",
    icon: <FileText className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    id: "06",
    title: "LifeSci Gov",
    tagline: "Board Reporting",
    desc: "Enterprise-wide visibility for the modern Healthcare and Life Sciences boardroom.",
    icon: <Stethoscope className="w-8 h-8 md:w-10 md:h-10" />,
  },
]

const GovernRxApp = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [view, setView] = useState("home")
  const cursorRef = useRef(null)
  const logoTextRef = useRef(null)
  const heroRef = useRef(null)

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    inquiry: "",
  })
  const [formSubmitting, setFormSubmitting] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  useEffect(() => {
    const cursor = cursorRef.current
    const logoText = logoTextRef.current
    const hero = heroRef.current

    const moveCursor = (e) => {
      if (cursor) cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
    }

    const handleScroll = () => {
      const scrolled = window.scrollY

      if (hero && view === "home") {
        hero.style.transform = `translate3d(0, ${scrolled * 0.5}px, 0)`
        hero.style.opacity = `${1 - scrolled / 700}`
      }

      if (logoText) {
        if (scrolled > 100) {
          logoText.style.opacity = "0"
          logoText.style.transform = "translateX(-20px)"
          logoText.style.pointerEvents = "none"
        } else {
          logoText.style.opacity = "1"
          logoText.style.transform = "translateX(0)"
          logoText.style.pointerEvents = "auto"
        }
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [view])

  const navigate = (page) => {
    setView(page)
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitting(true)

    // Create mailto link to send email to guardrails@governrx.com
    const subject = encodeURIComponent(`New Inquiry from ${contactForm.name}`)
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nInquiry:\n${contactForm.inquiry}`,
    )
    const mailtoLink = `mailto:guardrails@governrx.com?subject=${subject}&body=${body}`

    // Open email client
    window.location.href = mailtoLink

    setFormSubmitting(false)
    setFormSuccess(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSuccess(false)
      setContactForm({ name: "", email: "", inquiry: "" })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-red-600 selection:text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.95); } }
        @keyframes scan { 0% { transform: translateY(0); opacity: 0; } 50% { opacity: 0.5; } 100% { transform: translateY(200px); opacity: 0; } }
        @keyframes rotate-center { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .spin-slow { animation: spin 12s linear infinite; transform-origin: center; }
        .spin-very-slow { animation: spin 20s linear infinite; transform-origin: center; }
        .spin-reverse-slow { animation: spin-reverse 15s linear infinite; transform-origin: center; }
        .spin-fast { animation: spin 3s linear infinite; transform-origin: center; }
        .spin-fast-reverse { animation: spin-reverse 3s linear infinite; transform-origin: center; }
        .pulse-slow { animation: pulse 4s ease-in-out infinite; }
        .pulse-delayed { animation: pulse 4s ease-in-out infinite; animation-delay: 2s; }
        .ping-slow { animation: pulse 1s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .rotate-center { animation: rotate-center 20s linear infinite; transform-origin: center; }
        .scan-vertical { animation: scan 3s linear infinite; }
        .scale-pulse { animation: pulse 5s ease-in-out infinite; transform-origin: center; }
        .animate-marquee { animation: marquee 20s linear infinite; }
        .text-outline { -webkit-text-stroke: 1px white; }
        body::-webkit-scrollbar { width: 8px; }
        body::-webkit-scrollbar-track { background: #000; }
        body::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        html { scroll-behavior: smooth; }
        
        /* Mobile-only responsive overrides */
        @media (max-width: 767px) {
          .mobile-stack { flex-direction: column !important; }
          .mobile-full { width: 100% !important; }
          .mobile-text-center { text-align: center !important; }
          .mobile-items-center { align-items: center !important; }
          .mobile-no-sticky { position: relative !important; top: auto !important; }
        }
      `,
        }}
      />

      <div
        ref={cursorRef}
        className="fixed w-6 h-6 bg-red-600 rounded-full pointer-events-none z-[100] mix-blend-multiply hidden md:block top-0 left-0"
        style={{ willChange: "transform" }}
      ></div>

      <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-500 py-4 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between pointer-events-auto">
          <div
            onClick={() => navigate("home")}
            className="text-xl md:text-2xl font-bold tracking-tighter font-serif flex items-center gap-2 md:gap-4 cursor-pointer"
          >
            <CustomLogo className="w-8 h-8 md:w-10 md:h-10 text-white flex-shrink-0" />
            <span ref={logoTextRef} className="transition-all duration-500 ease-out inline-block whitespace-nowrap">
              GOVERNRX
            </span>
          </div>

          {/* Desktop navigation - hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Home", id: "home" },
              { label: "Platforms", id: "platforms" },
              { label: "Our Vision", id: "vision" },
              { label: "Impact", id: "governance" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className="text-sm font-mono tracking-wider uppercase hover:text-red-600 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-white hover:text-red-600 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm md:hidden flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-8">
            {[
              { label: "Home", id: "home" },
              { label: "Platforms", id: "platforms" },
              { label: "Our Vision", id: "vision" },
              { label: "Impact", id: "governance" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className="text-2xl font-mono tracking-wider uppercase hover:text-red-600 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* VIEW: HOME */}
      {view === "home" && (
        <>
          <header className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-white px-4">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-red-700 rounded-full blur-[150px]"></div>
            </div>
            <div ref={heroRef} className="relative z-10 text-center max-w-6xl mx-auto will-change-transform px-2">
              <h1 className="text-[14vw] md:text-[12vw] leading-[0.85] font-serif font-bold tracking-tighter">
                GOVERN
                <br />
                <span className="text-[12vw] md:text-[10.83vw] text-outline text-transparent bg-clip-text stroke-white">
                  INTELLIGENCE
                </span>
              </h1>
              <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 font-mono text-xs md:text-sm tracking-widest uppercase text-gray-400">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div> AI That is Audit-Ready
                </span>
                <span className="hidden md:inline">•</span>
                <span>GRC That is Future-Proof</span>
              </div>
            </div>
            <button
              onClick={() => navigate("platforms")}
              className="absolute bottom-8 md:bottom-12 flex flex-col items-center text-white/50 hover:text-white transition-colors gap-2 text-xs font-mono uppercase tracking-widest"
            >
              <span className="text-center px-4">Simplify Regulated Sciences</span>
              <ChevronDown size={24} className="animate-bounce" />
            </button>
          </header>

          <section className="py-16 md:py-32 px-4 md:px-24 bg-white text-black">
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl lg:text-5xl font-serif leading-tight">
                We believe AI is not just a tool, but a participant. Like any participant in healthcare, it requires{" "}
                <span className="text-red-600 italic">oversight</span>. GovernRx provides the nervous system for the
                governed enterprise.
              </p>
              <button
                onClick={() => navigate("vision")}
                className="mt-8 md:mt-12 flex items-center gap-4 text-sm font-mono uppercase tracking-widest border-b border-black pb-2 hover:text-red-600 hover:border-red-600 transition-colors"
              >
                Read Manifesto <ArrowRight size={16} />
              </button>
            </div>
          </section>

          <div className="bg-red-600 py-4 md:py-6 overflow-hidden flex border-y border-black">
            <div className="animate-marquee whitespace-nowrap flex gap-6 md:gap-12 text-3xl md:text-6xl lg:text-8xl font-serif font-bold uppercase tracking-tighter opacity-90 text-black">
              <span>Governance</span>
              <span className="font-mono font-light text-white italic">RISK</span>
              <span>Compliance</span>
              <span className="font-mono font-light text-white italic">Intelligence</span>
              <span>Governance</span>
              <span className="font-mono font-light text-white italic">Velocity</span>
              <span>Compliance</span>
            </div>
          </div>

          <section className="relative bg-zinc-950 text-white min-h-screen md:min-h-[150vh]">
            <div className="relative md:sticky md:top-0 min-h-screen flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 bg-zinc-950/50 backdrop-blur-sm">
                <div className="relative w-full max-w-xs md:max-w-none mx-auto aspect-square border border-white/20 rounded-full flex items-center justify-center">
                  <div className="absolute w-[120%] h-[1px] bg-red-600 rotate-45"></div>
                  <div className="absolute w-[120%] h-[1px] bg-red-600 -rotate-45"></div>
                  <h3 className="text-6xl md:text-9xl font-serif font-bold z-10 text-white mix-blend-difference">
                    0.0
                  </h3>
                </div>
                <p className="mt-8 md:mt-12 font-mono text-xs uppercase tracking-widest text-gray-500 text-center">
                  Friction Coefficient
                </p>
              </div>

              <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-24 flex flex-col justify-center">
                <span className="font-mono text-red-600 mb-4 md:mb-8 block uppercase tracking-widest text-xs md:text-base">
                  Anti-Friction Architecture
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-7xl font-serif font-bold leading-snug md:leading-none mb-8 md:mb-12">
                  Compliance <br />
                  <span className="text-gray-600">without the drag.</span>
                </h2>
                <div className="space-y-8 md:space-y-12">
                  <div className="group">
                    <h4 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Zero-Touch Mapping
                    </h4>
                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                      Regulatory changes mapped to your controls in milliseconds, not months.
                    </p>
                  </div>
                  <div className="group">
                    <h4 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Continuous Audit
                    </h4>
                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                      Our agents audit your models 24/7, removing the weight of quarterly reviews.
                    </p>
                  </div>
                  <div className="group">
                    <h4 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Automated Governance
                    </h4>
                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                      Policies that enforce themselves through code, not paperwork.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white text-black py-16 md:py-32 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 border-b border-black pb-6 md:pb-8 gap-4">
                <h2 className="text-4xl md:text-5xl lg:text-8xl font-serif font-bold tracking-tighter">The Shift</h2>
                <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 lg:w-24 lg:h-24 stroke-1" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border border-black">
                <div className="bg-white p-6 md:p-12 hover:bg-zinc-100 transition-colors min-h-[250px] md:h-96 flex flex-col justify-between group">
                  <span className="font-mono text-xs uppercase tracking-widest text-gray-400">From / To</span>
                  <div className="text-2xl md:text-3xl font-serif">
                    <span className="text-gray-400 line-through decoration-red-600">Reactive</span>
                    <br />
                    <span className="text-4xl md:text-6xl font-bold">Predictive</span>
                  </div>
                </div>
                <div className="bg-white p-6 md:p-12 hover:bg-zinc-100 transition-colors min-h-[250px] md:h-96 flex flex-col justify-between group">
                  <span className="font-mono text-xs uppercase tracking-widest text-gray-400">From / To</span>
                  <div className="text-2xl md:text-3xl font-serif">
                    <span className="text-gray-400 line-through decoration-red-600">Siloed</span>
                    <br />
                    <span className="text-4xl md:text-6xl font-bold">Unified</span>
                  </div>
                </div>
                <div className="bg-white p-6 md:p-12 hover:bg-zinc-100 transition-colors min-h-[250px] md:h-96 flex flex-col justify-between group">
                  <span className="font-mono text-xs uppercase tracking-widest text-gray-400">From / To</span>
                  <div className="text-2xl md:text-3xl font-serif">
                    <span className="text-gray-400 line-through decoration-red-600">Manual</span>
                    <br />
                    <span className="text-4xl md:text-6xl font-bold">Autonomous</span>
                  </div>
                </div>
                <div
                  onClick={() => navigate("platforms")}
                  className="bg-zinc-950 p-6 md:p-12 flex flex-col justify-center items-center text-center text-white cursor-pointer hover:bg-red-600 transition-colors group min-h-[250px] md:h-auto"
                >
                  <h3 className="text-2xl md:text-4xl font-serif font-bold mb-4">See the Platform</h3>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-red-600 transition-all">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* VIEW: PLATFORMS */}
      {view === "platforms" && (
        <div className="pt-16 md:pt-0">
          <div className="relative bg-black text-white py-24 md:py-32 lg:py-40 px-4 md:px-24 overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-red-700 rounded-full blur-[150px]"></div>
            </div>
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl lg:text-9xl font-serif font-bold tracking-tighter mb-6">The Stack</h1>
            </div>
          </div>

          <div className="bg-black text-white py-12 md:py-16 px-4 md:px-24">
            <div className="max-w-4xl mx-auto">
              <p className="font-mono text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed text-center">
                Six interconnected neural platforms designed to handle the velocity of modern regulatory landscapes in
                Healthcare and Life Sciences.
              </p>
            </div>
          </div>

          {platforms.map((platform) => (
            <section
              key={platform.id}
              id={`platform-${platform.id}-preview`}
              className="relative md:sticky md:top-0 min-h-screen flex flex-col md:flex-row bg-white border-t border-black group"
            >
              <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col relative overflow-hidden border-b md:border-b-0 md:border-r border-black bg-zinc-50 min-h-[50vh] md:min-h-0">
                <div className="flex justify-between items-start z-10">
                  <span className="font-mono text-xs uppercase tracking-widest text-red-600 border border-red-600 px-2 py-1 rounded-full bg-white">
                    Platform {platform.id}
                  </span>
                  <div className="text-red-600 opacity-80">{platform.icon}</div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                  <div className="w-48 h-48 md:w-3/4 md:h-3/4 lg:w-96 lg:h-96">
                    <PlatformVisual id={platform.id} />
                  </div>
                </div>
                <div className="mt-auto z-10 pt-16 md:pt-32">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-none break-words mix-blend-multiply w-full text-foreground">
                    {platform.title}
                  </h2>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-16 flex flex-col justify-center bg-white hover:bg-black transition-colors duration-500 cursor-default relative z-20 min-h-[50vh] md:min-h-0">
                <h3 className="text-lg md:text-xl font-mono uppercase tracking-widest mb-4 md:mb-6 text-gray-500 group-hover:text-red-500 transition-colors">
                  {platform.tagline}
                </h3>
                <p className="text-lg md:text-xl lg:text-3xl font-serif leading-relaxed mb-8 md:mb-12 text-gray-900 group-hover:text-white transition-colors">
                  {platform.desc}
                </p>
                <button
                  onClick={() => scrollToSection(`platform-${platform.id}-detail`)}
                  className="self-start px-6 md:px-8 py-3 md:py-4 border border-gray-900 group-hover:border-white rounded-full flex items-center gap-3 md:gap-4 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all uppercase text-xs font-bold tracking-widest text-gray-900 group-hover:text-white"
                >
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            </section>
          ))}

          {/* Platform 01 Detail: ReguLytix */}
          <section id="platform-01-detail" className="min-h-screen bg-black text-white py-16 md:py-24 px-4 md:px-24">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-red-600 border border-red-600 px-3 py-1 rounded-full mb-6 md:mb-8 inline-block">
                    Platform 01
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 md:mb-8">ReguLytix</h2>
                  <h3 className="text-xl md:text-2xl font-mono text-red-500 mb-6 md:mb-8">Regulatory Intelligence</h3>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8">
                    Real-time mapping of FDA, EMA, and PMDA changes directly to your compliance framework. Stay ahead of
                    regulatory shifts with AI-powered intelligence.
                  </p>
                  <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Continuous monitoring of 50+ global regulatory bodies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Automated impact assessment on existing compliance frameworks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Predictive alerts for upcoming regulatory changes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Cross-jurisdictional harmonization analysis</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center order-first md:order-last">
                  <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                    <PlatformVisual id="01" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Platform 02 Detail: BioRisk AI */}
          <section
            id="platform-02-detail"
            className="min-h-screen text-white py-16 md:py-24 px-4 md:px-24 bg-secondary-foreground"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                    <PlatformVisual id="02" />
                  </div>
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-red-600 border border-red-600 px-3 py-1 rounded-full mb-6 md:mb-8 inline-block">
                    Platform 02
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 md:mb-8">BioRisk AI</h2>
                  <h3 className="text-xl md:text-2xl font-mono text-red-500 mb-6 md:mb-8">
                    Clinical Predictive Modeling
                  </h3>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8">
                    De-risking clinical trials through predictive supply chain and patient cohort analysis. Transform
                    uncertainty into strategic advantage.
                  </p>
                  <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Patient recruitment optimization with ML-driven cohort matching</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Supply chain risk prediction and mitigation strategies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Trial site performance forecasting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Adverse event early warning system</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Platform 03 Detail: ModelGuard */}
          <section id="platform-03-detail" className="min-h-screen bg-black text-white py-16 md:py-24 px-4 md:px-24">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-red-600 border border-red-600 px-3 py-1 rounded-full mb-6 md:mb-8 inline-block">
                    Platform 03
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 md:mb-8">ModelGuard</h2>
                  <h3 className="text-xl md:text-2xl font-mono text-red-500 mb-6 md:mb-8">AI Governance (GRC)</h3>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8">
                    The industry standard for governing internal LLMs. Prevent drift, bias, and hallucinations before
                    they impact patient outcomes.
                  </p>
                  <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Real-time model behavior monitoring and alerting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Bias detection and mitigation frameworks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Hallucination prevention guardrails</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Complete audit trail for regulatory compliance</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center order-first md:order-last">
                  <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                    <PlatformVisual id="03" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Platform 04 Detail: PrivacyPulse */}
          <section
            id="platform-04-detail"
            className="min-h-screen text-white py-16 md:py-24 px-4 md:px-24 bg-secondary-foreground"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                    <PlatformVisual id="04" />
                  </div>
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-red-600 border border-red-600 px-3 py-1 rounded-full mb-6 md:mb-8 inline-block">
                    Platform 04
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 md:mb-8">PrivacyPulse</h2>
                  <h3 className="text-xl md:text-2xl font-mono text-red-500 mb-6 md:mb-8">Data Sovereignty</h3>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8">
                    Automated HIPAA & GDPR compliance for massive patient data lakes. Ensure data sovereignty across
                    global operations.
                  </p>
                  <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Automated PII detection and classification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Cross-border data transfer compliance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Consent management and audit trails</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Data retention policy automation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Platform 05 Detail: AuditFlow */}
          <section id="platform-05-detail" className="min-h-screen bg-black text-white py-16 md:py-24 px-4 md:px-24">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-red-600 border border-red-600 px-3 py-1 rounded-full mb-6 md:mb-8 inline-block">
                    Platform 05
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 md:mb-8">AuditFlow</h2>
                  <h3 className="text-xl md:text-2xl font-mono text-red-500 mb-6 md:mb-8">Autonomous Auditing</h3>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8">
                    An AI agent that audits your internal processes 24/7/365. Transform periodic reviews into continuous
                    assurance.
                  </p>
                  <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Continuous control monitoring and testing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Automated evidence collection and documentation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Risk-based audit prioritization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Real-time findings and remediation tracking</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center order-first md:order-last">
                  <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                    <PlatformVisual id="05" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Platform 06 Detail: LifeSci Gov */}
          <section
            id="platform-06-detail"
            className="min-h-screen text-white py-16 md:py-24 px-4 md:px-24 bg-secondary-foreground"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                    <PlatformVisual id="06" />
                  </div>
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-red-600 border border-red-600 px-3 py-1 rounded-full mb-6 md:mb-8 inline-block">
                    Platform 06
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 md:mb-8">LifeSci Gov</h2>
                  <h3 className="text-xl md:text-2xl font-mono text-red-500 mb-6 md:mb-8">Board Reporting</h3>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8">
                    Enterprise-wide visibility for the modern Healthcare and Life Sciences boardroom. Transform complex
                    data into strategic insights.
                  </p>
                  <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Executive dashboards with real-time risk metrics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Board-ready compliance reports</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Regulatory filing status tracking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Strategic risk forecasting and scenario analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* VIEW: VISION */}
      {view === "vision" && (
        <div className="bg-black pt-16 md:pt-0">
          <div className="relative bg-black text-white py-24 md:py-32 lg:py-40 px-4 md:px-24 overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-red-700 rounded-full blur-[150px]"></div>
            </div>
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl lg:text-9xl font-serif font-bold tracking-tighter mb-4 md:mb-6">
                Our Manifesto
              </h1>
            </div>
          </div>

          <div className="py-24 md:py-32 px-4 md:px-24 flex justify-center bg-black">
            <p className="font-mono text-white uppercase tracking-widest max-w-3xl text-center text-sm md:text-base leading-relaxed">
              We build from conviction. These are the tenets that drive every line of code.
            </p>
          </div>

          {[
            {
              id: "01",
              title: "Transparency",
              tagline: "Clear Vision",
              desc: "Black boxes have no place in medicine. We ensure every algorithmic decision is traceable, explainable, and accountable to those it serves.",
            },
            {
              id: "02",
              title: "Velocity",
              tagline: "Real-Time Compliance",
              desc: "Regulation should not slow you down. We map changes in real-time so you move faster, stay compliant, and maintain competitive advantage.",
            },
            {
              id: "03",
              title: "Sovereignty",
              tagline: "Data Ownership",
              desc: "Your data remains yours. Our models govern without extracting, ensuring complete control and privacy over your most sensitive information.",
            },
          ].map((tenet, index) => (
            <section
              key={tenet.id}
              id={`tenet-${tenet.id}-preview`}
              className="relative md:sticky md:top-0 min-h-screen flex flex-col md:flex-row bg-white border-t border-black group"
            >
              <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col relative overflow-hidden border-b md:border-b-0 md:border-r border-black bg-zinc-50 min-h-[50vh] md:min-h-0">
                <div className="flex justify-between items-start z-10">
                  <span className="font-mono text-xs uppercase tracking-widest text-red-600 border border-red-600 px-2 py-1 rounded-full bg-white">
                    Tenet {tenet.id}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                  <div className="w-48 h-48 md:w-3/4 md:h-3/4 lg:w-96 lg:h-96">
                    <svg
                      viewBox="0 0 200 200"
                      className="w-full h-full text-red-600 transition-all duration-1000 ease-out group-hover:scale-110 group-hover:opacity-60 opacity-40"
                    >
                      {index === 0 && (
                        <>
                          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" />
                          <circle
                            cx="100"
                            cy="100"
                            r="60"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="pulse-slow"
                          />
                          <circle
                            cx="100"
                            cy="100"
                            r="30"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="pulse-delayed"
                          />
                          <path
                            d="M100 10 v180 M10 100 h180"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            strokeDasharray="4 4"
                          />
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <path
                            d="M0,100 Q50,0 100,100 T200,100"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="pulse-slow"
                          />
                          <path
                            d="M0,100 Q50,200 100,100 T200,100"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="pulse-delayed"
                          />
                          {[20, 60, 100, 140, 180].map((x, i) => (
                            <circle
                              key={x}
                              cx={x}
                              cy="100"
                              r="4"
                              fill="currentColor"
                              style={{ animationDelay: `${i * 0.2}s` }}
                              className="ping-slow"
                            />
                          ))}
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <polygon
                            points="100,20 180,65 180,155 100,200 20,155 20,65"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                          />
                          <polygon
                            points="100,50 150,80 150,140 100,170 50,140 50,80"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="rotate-center"
                          />
                          <circle cx="100" cy="110" r="15" fill="currentColor" className="pulse-slow" />
                        </>
                      )}
                    </svg>
                  </div>
                </div>
                <div className="mt-auto z-10 pt-16 md:pt-32">
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-none break-words mix-blend-multiply w-full text-foreground">
                    {tenet.title}
                  </h2>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-16 flex flex-col justify-center bg-white hover:bg-black transition-colors duration-500 cursor-default relative z-20 min-h-[50vh] md:min-h-0">
                <h3 className="text-lg md:text-xl font-mono uppercase tracking-widest mb-4 md:mb-6 text-gray-500 group-hover:text-red-500 transition-colors">
                  {tenet.tagline}
                </h3>
                <p className="text-lg md:text-xl lg:text-3xl font-serif leading-relaxed mb-8 md:mb-12 text-gray-900 group-hover:text-white transition-colors">
                  {tenet.desc}
                </p>
                <button
                  onClick={() => scrollToSection(`tenet-${tenet.id}-detail`)}
                  className="self-start px-6 md:px-8 py-3 md:py-4 border border-gray-900 group-hover:border-white rounded-full flex items-center gap-3 md:gap-4 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all uppercase text-xs font-bold tracking-widest text-gray-900 group-hover:text-white"
                >
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            </section>
          ))}

          {/* Tenet 01 Detail Section */}
          <section id="tenet-01-detail" className="min-h-screen bg-black text-white py-16 md:py-32 px-4 md:px-24">
            <div className="max-w-6xl mx-auto">
              <span className="font-mono text-xs uppercase tracking-widest text-red-600 border border-red-600 px-3 py-1 rounded-full">
                Tenet 01
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mt-6 md:mt-8 mb-8 md:mb-12">
                Transparency
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                <div>
                  <h3 className="text-xl md:text-2xl font-mono uppercase tracking-widest text-red-500 mb-4 md:mb-6">
                    Clear Vision
                  </h3>
                  <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6 md:mb-8">
                    Black boxes have no place in medicine. We ensure every algorithmic decision is traceable,
                    explainable, and accountable to those it serves.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-gray-400 mb-6 md:mb-8">
                    Our transparency framework provides complete visibility into AI decision-making processes, enabling
                    healthcare organizations to understand, validate, and trust the recommendations made by intelligent
                    systems.
                  </p>
                  <ul className="space-y-3 md:space-y-4 text-gray-300 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Complete audit trails for every AI decision</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Explainable AI outputs in human-readable format</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Real-time model behavior monitoring</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center order-first md:order-last">
                  <div className="w-48 h-48 md:w-full md:max-w-md aspect-square">
                    <svg viewBox="0 0 200 200" className="w-full h-full text-red-600 opacity-60">
                      <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" />
                      <circle
                        cx="100"
                        cy="100"
                        r="60"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="pulse-slow"
                      />
                      <circle
                        cx="100"
                        cy="100"
                        r="30"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="pulse-delayed"
                      />
                      <path
                        d="M100 10 v180 M10 100 h180"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        strokeDasharray="4 4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tenet 02 Detail Section */}
          <section
            id="tenet-02-detail"
            className="min-h-screen text-white py-16 md:py-32 px-4 md:px-24 bg-accent-foreground"
          >
            <div className="max-w-6xl mx-auto">
              <span className="font-mono text-xs uppercase tracking-widest text-red-600 border border-red-600 px-3 py-1 rounded-full">
                Tenet 02
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mt-6 md:mt-8 mb-8 md:mb-12">
                Velocity
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                <div>
                  <h3 className="text-xl md:text-2xl font-mono uppercase tracking-widest text-red-500 mb-4 md:mb-6">
                    Real-Time Compliance
                  </h3>
                  <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6 md:mb-8">
                    Regulation should not slow you down. We map changes in real-time so you move faster, stay compliant,
                    and maintain competitive advantage.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-gray-400 mb-6 md:mb-8">
                    Our velocity-first approach ensures that compliance becomes an accelerator rather than a bottleneck,
                    enabling organizations to respond to regulatory changes within hours, not months.
                  </p>
                  <ul className="space-y-3 md:space-y-4 text-gray-300 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Real-time regulatory change detection across 500+ frameworks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Automated impact assessment and control mapping</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Instant compliance gap analysis and remediation pathways</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center order-first md:order-last">
                  <div className="w-48 h-48 md:w-full md:max-w-md aspect-square">
                    <svg viewBox="0 0 200 200" className="w-full h-full text-red-600 opacity-60">
                      <path
                        d="M0,100 Q50,0 100,100 T200,100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="pulse-slow"
                      />
                      <path
                        d="M0,100 Q50,200 100,100 T200,100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="pulse-delayed"
                      />
                      {[20, 60, 100, 140, 180].map((x, i) => (
                        <circle
                          key={x}
                          cx={x}
                          cy="100"
                          r="4"
                          fill="currentColor"
                          style={{ animationDelay: `${i * 0.2}s` }}
                          className="ping-slow"
                        />
                      ))}
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tenet 03 Detail Section */}
          <section id="tenet-03-detail" className="min-h-screen bg-black text-white py-16 md:py-32 px-4 md:px-24">
            <div className="max-w-6xl mx-auto">
              <span className="font-mono text-xs uppercase tracking-widest text-red-600 border border-red-600 px-3 py-1 rounded-full">
                Tenet 03
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mt-6 md:mt-8 mb-8 md:mb-12">
                Sovereignty
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                <div>
                  <h3 className="text-xl md:text-2xl font-mono uppercase tracking-widest text-red-500 mb-4 md:mb-6">
                    Data Ownership
                  </h3>
                  <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6 md:mb-8">
                    Your data remains yours. Our models govern without extracting, ensuring complete control and privacy
                    over your most sensitive information.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-gray-400 mb-6 md:mb-8">
                    We believe data sovereignty is non-negotiable in healthcare. Our architecture ensures your patient
                    data, proprietary algorithms, and institutional knowledge never leave your control.
                  </p>
                  <ul className="space-y-3 md:space-y-4 text-gray-300 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Zero-extraction governance models</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">•</span>
                      <span>On-premise and private cloud deployment options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Complete data lineage and access control</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center order-first md:order-last">
                  <div className="w-48 h-48 md:w-full md:max-w-md aspect-square">
                    <svg viewBox="0 0 200 200" className="w-full h-full text-red-600 opacity-60">
                      <polygon
                        points="100,20 180,65 180,155 100,200 20,155 20,65"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                      <polygon
                        points="100,50 150,80 150,140 100,170 50,140 50,80"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="rotate-center"
                      />
                      <circle cx="100" cy="110" r="15" fill="currentColor" className="pulse-slow" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* VIEW: GOVERNANCE */}
      {view === "governance" && (
        <div className="bg-black pt-16 md:pt-0">
          <div className="relative bg-black text-white py-24 md:py-32 lg:py-40 px-4 md:px-24 overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-red-700 rounded-full blur-[150px]"></div>
            </div>
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl lg:text-9xl font-serif font-bold tracking-tighter mb-4 md:mb-6">
                Impact Matrix
              </h1>
            </div>
          </div>

          <div className="py-12 md:py-20 px-4 md:px-24 flex justify-center bg-black">
            <p className="font-mono text-white uppercase tracking-widest max-w-3xl text-center text-sm md:text-base lg:text-lg leading-relaxed">
              Governance is not a one-size-fits-all. We tailor our intelligence to the specific guardians of the enterprise.
            </p>
          </div>

          {[
            {
              id: "01",
              role: "CSO",
              title: "Chief Security Officer",
              tagline: "Threat Vector Intelligence",
              desc: "The perimeter has dissolved. Your new threat vector is the model itself. GovernRx ModelGuard stops poisoning attacks, extraction attempts, and adversarial drift before they impact the patient.",
              stat: "99.9% Attack Prediction",
            },
            {
              id: "02",
              role: "Regulatory",
              title: "Compliance Officer",
              tagline: "Real-Time Compliance Mapping",
              desc: "The FDA, EMA, and EU AI Act are living documents. ReguLytix maps 500+ global frameworks to your internal controls in real-time, turning compliance from a quarterly panic into a daily pulse.",
              stat: "0h Manual Mapping",
            },
            {
              id: "03",
              role: "CIO",
              title: "Chief Info Officer",
              tagline: "API-First Integration",
              desc: "You need integration, not another dashboard. Our API-first architecture weaves directly into your data lakes, ensuring governance scales as fast as your compute.",
              stat: "<10ms Latency",
            },
          ].map((persona) => (
            <section
              key={persona.id}
              className="relative md:sticky md:top-0 min-h-screen flex flex-col md:flex-row bg-white border-t border-black group"
            >
              <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col relative overflow-hidden border-b md:border-b-0 md:border-r border-black bg-zinc-50 min-h-[50vh] md:min-h-0">
                <div className="flex justify-between items-start z-10">
                  <span className="font-mono text-xs uppercase tracking-widest text-red-600 border border-red-600 px-2 py-1 rounded-full bg-white">
                    {persona.role}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                  <div className="w-48 h-48 md:w-3/4 md:h-3/4 lg:w-96 lg:h-96">
                    <GovernanceVisual id={persona.id} />
                  </div>
                </div>
                <div className="mt-auto z-10 pt-16 md:pt-32">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-none break-words mix-blend-multiply w-full text-foreground">
                    {persona.title}
                  </h2>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-16 flex flex-col justify-center bg-white hover:bg-black transition-colors duration-500 cursor-default relative z-20 min-h-[50vh] md:min-h-0">
                <h3 className="text-lg md:text-xl font-mono uppercase tracking-widest mb-4 md:mb-6 text-gray-500 group-hover:text-red-500 transition-colors">
                  {persona.tagline}
                </h3>
                <p className="text-base md:text-xl lg:text-3xl font-serif leading-relaxed mb-6 md:mb-8 text-gray-900 group-hover:text-white transition-colors">
                  {persona.desc}
                </p>
                <p className="font-mono text-xl md:text-2xl text-gray-900 group-hover:text-white uppercase tracking-widest border-b border-red-600 inline-block pb-1 mb-8 md:mb-12 transition-colors">
                  {persona.stat}
                </p>
                <button
                  onClick={() => navigate("platforms")}
                  className="self-start px-6 md:px-8 py-3 md:py-4 border border-gray-900 group-hover:border-white rounded-full flex items-center gap-3 md:gap-4 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all uppercase text-xs font-bold tracking-widest text-gray-900 group-hover:text-white"
                >
                  Explore Solutions <ArrowRight size={16} />
                </button>
              </div>
            </section>
          ))}

          <div className="p-6 md:p-24 text-center bg-black border-t border-white/20">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-serif font-bold mb-4">
              Ready to Govern Intelligence?
            </h2>
            <button
              onClick={() => navigate("contact")}
              className="mt-6 md:mt-8 px-8 md:px-10 py-4 md:py-5 bg-red-600 text-white font-mono uppercase tracking-widest text-xs md:text-sm rounded-full hover:bg-red-700 transition-colors flex items-center gap-3 mx-auto"
            >
              Connect with Our Team <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* VIEW: CONTACT */}
      {view === "contact" && (
        <div className="bg-black text-white min-h-screen">
          <div className="relative min-h-[40vh] md:min-h-[60vh] flex items-center overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-red-700 rounded-full blur-[150px]"></div>
            </div>
            <div className="relative z-10 px-4 md:px-24 pt-24 md:pt-32">
<h1 className="text-5xl md:text-6xl lg:text-9xl font-serif font-bold tracking-tighter mb-12 md:mb-20">
Inquire
</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto px-4 md:px-24 py-16 md:py-32 items-center">
            <div className="p-6 md:p-8 border border-white/10 rounded-xl bg-zinc-950/50">
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 md:mb-6">Global Headquarters</h3>
              <div className="space-y-4 font-mono text-xs md:text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="flex-shrink-0 text-red-600 mt-1" />
                  <p>
                    GovernRx Inc.
                    <br />
                    3111 Sunset Blvd
                    <br />
                    Flower Mound, TX 75022
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-red-600" />
                  <p>guardrails@governrx.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 border border-white/10 rounded-xl bg-zinc-950/50">
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 md:mb-6">Get Regulatory Ready</h3>
              <form className="space-y-4 md:space-y-6" onSubmit={handleContactSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  required
                  className="w-full p-3 bg-zinc-800 border border-zinc-700 focus:border-red-600 outline-none placeholder-gray-500 font-mono text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Work Email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  required
                  className="w-full p-3 bg-zinc-800 border border-zinc-700 focus:border-red-600 outline-none placeholder-gray-500 font-mono text-sm"
                />
                <textarea
                  name="inquiry"
                  placeholder="Your Inquiry (e.g., ReguLytix Implementation)"
                  rows={4}
                  value={contactForm.inquiry}
                  onChange={(e) => setContactForm({ ...contactForm, inquiry: e.target.value })}
                  required
                  className="w-full p-3 bg-zinc-800 border border-zinc-700 focus:border-red-600 outline-none placeholder-gray-500 font-mono text-sm"
                ></textarea>
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full py-3 bg-red-600 text-white font-mono uppercase tracking-widest text-xs md:text-sm hover:bg-red-700 transition-colors disabled:opacity-50"
                >
                  {formSubmitting ? "Sending..." : formSuccess ? "Request Sent!" : "Submit Secure Request"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* NEW FOOTER - Antigravity Section */}
      <div className="relative overflow-hidden bg-black pt-24 md:pt-40 lg:pt-64 pb-12 md:pb-20 lg:pb-32">
        {/* Red blur effect matching hero section */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80vw] h-[80vw] bg-red-700 rounded-full blur-[150px]"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <h1
            className="text-[15vw] md:text-[18vw] font-serif font-extrabold text-transparent whitespace-nowrap leading-none tracking-tighter select-none"
            style={{
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)",
              textShadow: "0 0 60px rgba(255, 255, 255, 0.1)",
            }}
          >
            GOVERNRX
          </h1>
        </div>
      </div>

      <footer className="relative z-10 text-white bg-black p-4 md:p-6 lg:p-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-center border-b border-white/5 pb-6 md:pb-8 mb-6 md:mb-8 gap-4 md:gap-0">
            <div className="text-2xl md:text-4xl font-serif font-bold flex items-center gap-3 md:gap-4 opacity-90">
              <CustomLogo className="w-8 h-8 md:w-10 md:h-10" />
              GOVERNRX
            </div>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6 opacity-80">
              <button
                onClick={() => navigate("home")}
                className="text-xs font-mono uppercase tracking-wider hover:text-red-600 transition-colors hover:opacity-100"
              >
                Home
              </button>
              <button
                onClick={() => navigate("platforms")}
                className="text-xs font-mono uppercase tracking-wider hover:text-red-600 transition-colors hover:opacity-100"
              >
                Platforms
              </button>
              <button
                onClick={() => navigate("vision")}
                className="text-xs font-mono uppercase tracking-wider hover:text-red-600 transition-colors hover:opacity-100"
              >
                Manifesto
              </button>
              <button
                onClick={() => navigate("governance")}
                className="text-xs font-mono uppercase tracking-wider hover:text-red-600 transition-colors hover:opacity-100"
              >
                Impact
              </button>
              <button
                onClick={() => navigate("contact")}
                className="text-xs font-mono uppercase tracking-wider hover:text-red-600 transition-colors hover:opacity-100"
              >
                Contact
              </button>
            </nav>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs font-mono uppercase tracking-widest text-gray-500 opacity-70 gap-2 md:gap-0">
            <span>© {new Date().getFullYear()} GovernRx Inc.</span>
            <span className="text-red-600">GOVERN INTELLIGENCE.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default GovernRxApp
