"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Clock,
  Check,
  Copy,
  ArrowUpRight,
  Sparkles,
  Plus,
  Minus,
  Globe,
  CheckCircle2,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA: SERVICES & BUDGETS                                          */
/* ------------------------------------------------------------------ */
const SERVICE_OPTIONS = [
  "Brand Strategy",
  "Ad Campaigns",
  "Film & Video Production",
  "Creative Consulting",
  "Digital Marketing",
  "Brand Identity",
];


/* ------------------------------------------------------------------ */
/*  DATA: FAQ ITEMS                                                   */
/* ------------------------------------------------------------------ */
const FAQ_ITEMS = [
  {
    question: "How soon can we start a project together?",
    answer:
      "We typically kick off new projects within 1–2 weeks after our initial discovery call and brief alignment. If you have an urgent deadline or launch date, let us know and we'll do our best to accommodate.",
  },
  {
    question: "What does your typical discovery & onboarding process look like?",
    answer:
      "We start with a deep-dive conversation to understand your brand goals, target audience, and campaign KPIs. Next, we present a tailored creative approach and project roadmap before moving into concept development.",
  },
  {
    question: "Do you work with international brands outside India & UAE?",
    answer:
      "Absolutely! While our primary creative studios are rooted in Kerala and Dubai, we collaborate with ambitious brands and partners globally across North America, Europe, and Asia-Pacific.",
  },
  {
    question: "How are project budgets and deliverables structured?",
    answer:
      "We offer flexible engagement models — from standalone campaign projects and film production packages to ongoing creative retainer partnerships tailored to your growth stage.",
  },
];

/* ------------------------------------------------------------------ */
/*  SUBCOMPONENT: COPY BUTTON                                         */
/* ------------------------------------------------------------------ */
function CopyButton({ textToCopy }: { textToCopy: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#0F172A]/5 hover:bg-[#FFB800] text-[#0F172A] transition-all duration-300 cursor-pointer active:scale-95"
      title="Copy to clipboard"
    >
      {copied ? (
        <>
          <Check size={14} className="text-[#1A3626]" />
          <span className="text-[#1A3626]">Copied!</span>
        </>
      ) : (
        <>
          <Copy size={14} />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  SUBCOMPONENT: FAQ ACCORDION ITEM                                  */
/* ------------------------------------------------------------------ */
function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#0F172A]/10 last:border-none">
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between gap-4 text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-lg sm:text-xl font-bold text-[#0F172A] group-hover:text-[#FFB800] transition-colors duration-300">
          {question}
        </span>
        <span
          className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
            isOpen
              ? "bg-[#1A3626] border-[#1A3626] text-white rotate-180 shadow-md"
              : "bg-white border-[#0F172A]/10 text-[#0F172A] group-hover:border-[#FFB800] group-hover:bg-[#FFB800]/10"
          }`}
        >
          {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#64748B] font-medium leading-relaxed text-sm sm:text-base pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN CONTACT PAGE                                                 */
/* ------------------------------------------------------------------ */
export default function ContactPage() {
  // Form State
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Toggle multiple service selection
  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  // Handle Input Change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSelectedServices([]);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <main className="min-h-screen relative overflow-hidden pb-32">
      {/* Ambient Glowing Orbs in Background */}
      <div
        className="absolute top-0 right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none z-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #FFB80040 0%, #FFB80010 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[400px] left-[-150px] w-[500px] h-[500px] rounded-full pointer-events-none z-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #1A362635 0%, #1A362610 50%, transparent 70%)",
        }}
      />

      {/* ========================================================= */}
      {/* HERO SECTION                                              */}
      {/* ========================================================= */}
      <section className="relative z-10 pt-32 sm:pt-36 md:pt-44 pb-12 sm:pb-16 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#0F172A]/10 shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FFB800] animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0F172A]">
              Get in Touch
            </span>
          </div>

          {/* Heading with Signature Yellow Underline */}
          <h1 className="font-mileast text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold text-[#0F172A] tracking-tight leading-[1.08] mb-8">
            Let&apos;s make your brand{" "}
            <span className="relative inline-block text-[#FFB800]">
              unforgettable
              <svg
                className="absolute left-[-4%] w-[108%] h-auto pointer-events-none"
                style={{ bottom: "-0.60em" }}
                viewBox="0 0 120 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M3 12 C8 6, 18 4, 30 7 S52 14, 65 9 S85 3, 100 8 S112 13, 117 10"
                  stroke="#FFB800"
                  strokeWidth="2.8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 13 C12 7, 22 5, 33 8 S55 15, 67 10 S88 4, 102 9 S114 14, 118 11"
                  stroke="#FFB800"
                  strokeWidth="2.2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.55"
                />
              </svg>
            </span>
            .
          </h1>

          <p className="font-poppins-italic text-[#64748B] text-base sm:text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
            Whether you have an upcoming campaign, need creative strategy, or just
            want to explore what&apos;s possible — we&apos;re ready when you are.
          </p>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* MAIN CONTENT: SPLIT LAYOUT (CONTACT INFO & BRIEF FORM)    */}
      {/* ========================================================= */}
      <section className="relative z-10 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: DIRECT CONTACT CARDS & STUDIO HUBS (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Direct Email Card */}
            <div className="group relative bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#0F172A]/10 shadow-sm hover:shadow-md hover:border-[#FFB800]/50 transition-all duration-300">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FFB800]/20 text-[#0F172A] flex items-center justify-center">
                  <Mail size={22} strokeWidth={2.2} />
                </div>
                <CopyButton textToCopy="hello@mangopeelads.com" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1">
                Direct Email
              </p>
              <a
                href="mailto:hello@mangopeelads.com"
                className="text-xl sm:text-2xl font-extrabold text-[#0F172A] hover:text-[#FFB800] transition-colors break-all"
              >
                hello@mangopeelads.com
              </a>
              <p className="text-sm text-[#64748B] font-medium mt-2">
                We respond within 24 hours on business days.
              </p>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div className="group relative bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#0F172A]/10 shadow-sm hover:shadow-md hover:border-[#FFB800]/50 transition-all duration-300">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1A3626]/10 text-[#1A3626] flex items-center justify-center">
                  <Phone size={22} strokeWidth={2.2} />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available Now
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1">
                Phone &amp; WhatsApp
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-1">
                <a
                  href="tel:+919876543210"
                  className="text-lg sm:text-xl font-bold text-[#0F172A] hover:text-[#FFB800] transition-colors"
                >
                  +91 (Kerala Studio)
                </a>
                <span className="hidden sm:inline text-gray-300">|</span>
                <a
                  href="tel:+971500000000"
                  className="text-lg sm:text-xl font-bold text-[#0F172A] hover:text-[#FFB800] transition-colors"
                >
                  +971 (UAE Office)
                </a>
              </div>
            </div>

            {/* Global Studio Locations Card */}
            <div className="bg-[#1A3626] text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
              {/* Decorative circle */}
              <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-[#FFB800]/15 pointer-events-none" />

              <div className="flex items-center gap-2 mb-6">
                <Globe className="text-[#FFB800]" size={20} />
                <h3 className="text-base sm:text-lg font-bold tracking-wide uppercase">
                  Our Creative Hubs
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Kerala Hub */}
                <div className="border-l-2 border-[#FFB800] pl-4">
                  <p className="text-xs uppercase tracking-widest text-[#FFB800] font-bold mb-1">
                    India Studio
                  </p>
                  <h4 className="text-lg font-extrabold text-white mb-1">
                    Kerala, India
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Creative HQ, Film &amp; Strategy
                  </p>
                  <div className="flex items-center gap-1.5 mt-3 text-xs text-white/60 font-medium">
                    <Clock size={13} />
                    <span>IST (UTC +05:30)</span>
                  </div>
                </div>

                {/* UAE Hub */}
                <div className="border-l-2 border-[#FFB800] pl-4">
                  <p className="text-xs uppercase tracking-widest text-[#FFB800] font-bold mb-1">
                    UAE Office
                  </p>
                  <h4 className="text-lg font-extrabold text-white mb-1">
                    Dubai, UAE
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Regional Sales &amp; Partnerships
                  </p>
                  <div className="flex items-center gap-1.5 mt-3 text-xs text-white/60 font-medium">
                    <Clock size={13} />
                    <span>GST (UTC +04:00)</span>
                  </div>
                </div>
              </div>

              {/* Social Quick Connect Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
                <span className="text-xs text-white/70 font-semibold uppercase tracking-wider">
                  Follow the peel:
                </span>
                <div className="flex items-center gap-3">
                  {[
                    { name: "Instagram", href: "#" },
                    { name: "LinkedIn", href: "#" },
                    { name: "YouTube", href: "#" },
                    { name: "X", href: "#" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#FFB800] hover:text-[#0F172A] text-xs font-semibold transition-all duration-300"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: INTERACTIVE PROJECT BRIEF FORM (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 md:p-12 border border-[#0F172A]/10 shadow-[0_12px_40px_rgba(15,23,42,0.06)] relative">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  /* ===================== SUBMITTED SUCCESS CARD ===================== */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="py-12 sm:py-16 flex flex-col items-center text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#1A3626] text-[#FFB800] flex items-center justify-center mb-6 shadow-lg">
                      <CheckCircle2 size={44} strokeWidth={2.2} />
                    </div>

                    <h3 className="font-mileast text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-3">
                      Message Received! 🥭
                    </h3>
                    <p className="text-[#64748B] text-base sm:text-lg max-w-md font-medium leading-relaxed mb-8">
                      Thank you for reaching out,{" "}
                      <span className="font-bold text-[#0F172A]">
                        {formData.name || "friend"}
                      </span>
                      . Our creative team will review your project details and
                      get back to you shortly.
                    </p>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0F172A] text-white font-bold text-sm tracking-wide hover:bg-[#FFB800] hover:text-[#0F172A] transition-all duration-300 shadow-md cursor-pointer"
                    >
                      <span>Send Another Message</span>
                      <ArrowUpRight size={18} strokeWidth={2.5} />
                    </button>
                  </motion.div>
                ) : (
                  /* ===================== PROJECT BRIEF FORM ===================== */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-8"
                  >
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                        Start a Conversation
                      </h2>
                      <p className="text-[#64748B] text-sm sm:text-base font-medium mt-1">
                        Tell us about your goals, timeline, and how we can collaborate.
                      </p>
                    </div>

                    {/* STEP 1: SERVICE TAGS */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-3">
                        01. What can we help you with?{" "}
                        <span className="text-[#64748B] font-normal lowercase">
                          (select all that apply)
                        </span>
                      </label>
                      <div className="flex flex-wrap gap-2 sm:gap-2.5">
                        {SERVICE_OPTIONS.map((service) => {
                          const isSelected = selectedServices.includes(service);
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              className={`group inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                                isSelected
                                  ? "bg-[#0F172A] text-[#FFB800] shadow-sm scale-[1.02]"
                                  : "bg-[#F4F1E8] text-[#475569] hover:bg-[#0F172A]/10 hover:text-[#0F172A]"
                              }`}
                            >
                              <span>{service}</span>
                              {isSelected ? (
                                <Check size={14} className="text-[#FFB800]" />
                              ) : (
                                <Plus
                                  size={14}
                                  className="text-[#64748B] group-hover:text-[#0F172A]"
                                />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* STEP 2: USER DETAILS */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-4">
                        02. Your Contact Details
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name Input */}
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-xs font-medium text-[#64748B] mb-1.5"
                          >
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Alex Morgan"
                            className="w-full px-4 py-3 rounded-2xl bg-[#F4F1E8]/70 border border-[#0F172A]/10 text-[#0F172A] placeholder-[#94A3B8] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FFB800] focus:bg-white transition-all"
                          />
                        </div>

                        {/* Email Input */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-xs font-medium text-[#64748B] mb-1.5"
                          >
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="alex@company.com"
                            className="w-full px-4 py-3 rounded-2xl bg-[#F4F1E8]/70 border border-[#0F172A]/10 text-[#0F172A] placeholder-[#94A3B8] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FFB800] focus:bg-white transition-all"
                          />
                        </div>

                        {/* Company (Optional) */}
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="company"
                            className="block text-xs font-medium text-[#64748B] mb-1.5"
                          >
                            Company / Organization (Optional)
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Mango Peel Ads Inc."
                            className="w-full px-4 py-3 rounded-2xl bg-[#F4F1E8]/70 border border-[#0F172A]/10 text-[#0F172A] placeholder-[#94A3B8] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FFB800] focus:bg-white transition-all"
                          />
                        </div>

                        {/* Message Textarea */}
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="message"
                            className="block text-xs font-medium text-[#64748B] mb-1.5"
                          >
                            Project Details / Message{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell us about your vision, key deliverables, or target timeline..."
                            className="w-full px-4 py-3 rounded-2xl bg-[#F4F1E8]/70 border border-[#0F172A]/10 text-[#0F172A] placeholder-[#94A3B8] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FFB800] focus:bg-white transition-all resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#1A3626] text-white px-8 py-4 rounded-full text-sm sm:text-base font-bold tracking-wide hover:bg-[#FFB800] hover:text-[#0F172A] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 cursor-pointer active:scale-98"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                            <span>Sending Your Brief...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <ArrowUpRight size={20} strokeWidth={2.5} />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FREQUENTLY ASKED QUESTIONS (FAQ)                          */}
      {/* ========================================================= */}
      <section className="relative z-10 px-6 md:px-12 lg:px-16 max-w-[1100px] mx-auto mt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-16 border border-[#0F172A]/10 shadow-sm"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFB800]">
              Clear answers
            </span>
            <h2 className="font-mileast text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-[#0F172A]/10">
            {FAQ_ITEMS.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === index}
                onToggle={() =>
                  setOpenFaqIndex(openFaqIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* BOTTOM AMBIENT CTA BANNER                                 */}
      {/* ========================================================= */}
      <section className="relative z-10 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden px-8 py-16 sm:py-20 bg-[#1A3626] text-white relative flex flex-col items-center text-center shadow-lg"
        >
          {/* Decorative glowing gradient inside */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none opacity-20"
            style={{
              background: "radial-gradient(circle, #FFB800 0%, transparent 70%)",
            }}
          />

          <span className="inline-flex items-center gap-2 text-[#FFB800] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles size={16} />
            <span>Ready for what&apos;s next?</span>
          </span>
          <h2 className="font-mileast text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-2xl mb-4">
            Not ready for a full brief yet?
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-lg mb-8 font-medium">
            No problem at all. Just drop us an email or reach out on WhatsApp to
            start a casual conversation.
          </p>

          <a
            href="mailto:hello@mangopeelads.com"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FFB800] text-[#0F172A] font-bold text-sm sm:text-base tracking-wide hover:shadow-[0_0_30px_rgba(255,184,0,0.45)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Email Us directly</span>
            <ArrowUpRight size={18} strokeWidth={2.5} />
          </a>
        </motion.div>
      </section>
    </main>
  );
}
