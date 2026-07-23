"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { allWorks, type WorkItem } from "@/data/works";

/* ------------------------------------------------------------------ */
/*  FILTER CATEGORIES                                                  */
/* ------------------------------------------------------------------ */

const categories = [
  "All",
  ...Array.from(new Set(allWorks.map((w) => w.category))),
];

/* ------------------------------------------------------------------ */
/*  PLAY BUTTON ICON                                                   */
/* ------------------------------------------------------------------ */

function PlayIcon({ size = 48 }: { size?: number }) {
  return (
    <div
      className="rounded-full flex items-center justify-center backdrop-blur-md"
      style={{
        width: size,
        height: size,
        background: "rgba(255,255,255,0.18)",
        border: "1.5px solid rgba(255,255,255,0.30)",
      }}
    >
      <svg
        width={size * 0.38}
        height={size * 0.38}
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 8.134a1 1 0 010 1.732l-13.5 7.794A1 1 0 010 16.794V1.206A1 1 0 011.5.34L15 8.134z"
          fill="white"
        />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  VIDEO LIGHTBOX MODAL                                               */
/* ------------------------------------------------------------------ */

function VideoLightbox({
  item,
  onClose,
}: {
  item: WorkItem;
  onClose: () => void;
}) {
  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const isPortrait = item.aspect === "portrait";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 sm:top-8 sm:right-8 z-[110] w-11 h-11 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
        aria-label="Close lightbox"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Modal content — stop click propagation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`relative z-[105] w-full ${
          isPortrait ? "max-w-[420px]" : "max-w-[960px]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video container */}
        <div
          className="relative w-full rounded-2xl overflow-hidden bg-black shadow-[0_25px_80px_rgba(0,0,0,0.6)]"
          style={{
            aspectRatio: isPortrait ? "9/16" : "16/9",
          }}
        >
          <video
            src={item.videoUrl}
            className="w-full h-full object-contain bg-black"
            controls
            autoPlay
            playsInline
          />
        </div>

        {/* Info bar below video */}
        <div className="mt-4 flex items-center justify-between px-1">
          <div>
            <h3 className="text-white font-bold text-lg tracking-tight">
              {item.title}
            </h3>
            <p className="text-white/50 text-sm font-medium mt-0.5">
              {item.category} &middot; {item.duration}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  MASONRY CARD                                                       */
/* ------------------------------------------------------------------ */

function WorkCard({
  item,
  index,
  onPlay,
}: {
  item: WorkItem;
  index: number;
  onPlay: (item: WorkItem) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer break-inside-avoid mb-4 shadow-[0_8px_30px_rgb(0,0,0,0.10)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.18)] transition-shadow duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onPlay(item)}
    >
      {/* Image */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio:
            item.aspect === "portrait"
              ? "3/4"
              : "16/9",
        }}
      >
        <img
          src={item.thumbnail}
          alt={item.title}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.15] ${item.aspect === "landscape" ? "scale-[1.08]" : ""}`}
          loading="lazy"
        />

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.05) 100%)",
          }}
        />

        {/* Hover tint */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            animate={{
              scale: isHovered ? 1.15 : 1,
              opacity: isHovered ? 1 : 0.85,
            }}
            transition={{ duration: 0.3 }}
          >
            <PlayIcon size={item.aspect === "portrait" ? 44 : 52} />
          </motion.div>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-3 right-3 z-10">
          <span
            className="text-[11px] font-semibold tracking-wider text-white/90 px-2.5 py-1 rounded-md"
            style={{
              background: "rgba(0,0,0,0.50)",
              backdropFilter: "blur(8px)",
            }}
          >
            {item.duration}
          </span>
        </div>

        {/* Bottom text info */}
        <div className="absolute bottom-3 left-3 z-10 pr-16">
          <h3 className="text-white font-bold text-[15px] leading-tight tracking-tight drop-shadow-lg">
            {item.title}
          </h3>
          <p className="text-white/60 text-[11px] font-medium mt-0.5 tracking-wide">
            {item.category}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  const filteredWorks =
    activeFilter === "All"
      ? allWorks
      : allWorks.filter((w) => w.category === activeFilter);

  return (
    <main className="min-h-screen bg-gray-100 overflow-hidden">
      <section className="relative w-full flex flex-col items-center px-4 sm:px-6 lg:px-10 py-28 pb-20">

        {/* ===== DECORATIVE BACKGROUND ELEMENTS (matching Teams page) ===== */}

        {/* Large green gradient orb — top right */}
        <div
          className="absolute top-[-80px] right-[-100px] w-[450px] h-[450px] rounded-full pointer-events-none z-0 hidden lg:block"
          style={{ background: 'radial-gradient(circle at 40% 40%, #10B98150 0%, #10B98120 40%, transparent 70%)' }}
        />

        {/* Large yellow gradient orb — bottom left */}
        <div
          className="absolute bottom-[-60px] left-[-80px] w-[380px] h-[380px] rounded-full pointer-events-none z-0 hidden lg:block"
          style={{ background: 'radial-gradient(circle at 60% 60%, #FFB80040 0%, #FFB80015 45%, transparent 70%)' }}
        />

        {/* Medium green gradient orb — mid left */}
        <div
          className="absolute top-[45%] left-[-40px] w-[250px] h-[250px] rounded-full pointer-events-none z-0 hidden md:block"
          style={{ background: 'radial-gradient(circle, #10B98125 0%, transparent 65%)' }}
        />

        {/* Medium yellow gradient orb — mid right */}
        <div
          className="absolute top-[30%] right-[-30px] w-[220px] h-[220px] rounded-full pointer-events-none z-0 hidden md:block"
          style={{ background: 'radial-gradient(circle, #FFB80030 0%, transparent 60%)' }}
        />

        {/* Green organic blob — top right */}
        <svg
          className="absolute top-[-40px] right-[-60px] w-[280px] h-[320px] pointer-events-none z-0 opacity-90 hidden lg:block"
          viewBox="0 0 300 350" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M220 10 C280 30, 310 120, 280 200 S240 310, 180 340 C120 360, 60 300, 40 230 S50 100, 120 50 C160 20, 190 0, 220 10Z" fill="#10B981" opacity="0.85" />
        </svg>

        {/* Green organic blob — bottom left */}
        <svg
          className="absolute bottom-[-60px] left-[-80px] w-[260px] h-[300px] pointer-events-none z-0 opacity-80 hidden lg:block"
          viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M60 20 C120 -10, 200 30, 240 100 S270 240, 220 290 C170 330, 80 310, 40 250 S-20 120, 30 60 C40 40, 50 25, 60 20Z" fill="#10B981" opacity="0.8" />
        </svg>

        {/* Orange/yellow half-arc — left side */}
        <svg
          className="absolute top-[35%] left-[-30px] w-[120px] h-[120px] pointer-events-none z-0 opacity-60 hidden md:block"
          viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="60" r="50" stroke="#FFB800" strokeWidth="4" fill="none" />
        </svg>

        {/* Orange half-arc — bottom right */}
        <svg
          className="absolute bottom-[15%] right-[-20px] w-[100px] h-[100px] pointer-events-none z-0 opacity-50 hidden md:block"
          viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="90" cy="50" r="40" stroke="#FFB800" strokeWidth="3.5" fill="none" />
        </svg>

        {/* Dot grid pattern — right side */}
        <svg
          className="absolute top-[40%] right-[3%] w-[80px] h-[80px] pointer-events-none z-0 opacity-30 hidden lg:block"
          viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          {[0, 1, 2, 3, 4].map(row =>
            [0, 1, 2, 3, 4].map(col => (
              <circle key={`dot-r-${row}-${col}`} cx={8 + col * 16} cy={8 + row * 16} r="2.5" fill="#94A3B8" />
            ))
          )}
        </svg>

        {/* Dot grid pattern — left side */}
        <svg
          className="absolute bottom-[25%] left-[5%] w-[60px] h-[60px] pointer-events-none z-0 opacity-25 hidden lg:block"
          viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          {[0, 1, 2, 3].map(row =>
            [0, 1, 2, 3].map(col => (
              <circle key={`dot-l-${row}-${col}`} cx={7 + col * 15} cy={7 + row * 15} r="2" fill="#94A3B8" />
            ))
          )}
        </svg>

        {/* Wavy line — between heading and cards */}
        <svg
          className="absolute top-[22%] left-[10%] w-[80%] h-[20px] pointer-events-none z-0 opacity-[0.08] hidden md:block"
          viewBox="0 0 800 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
        >
          <path d="M0 10 Q40 0, 80 10 T160 10 T240 10 T320 10 T400 10 T480 10 T560 10 T640 10 T720 10 T800 10" stroke="#10B981" strokeWidth="2" fill="none" />
        </svg>

        {/* Subtle yellow glow — behind heading */}
        <div
          className="absolute top-[2%] left-1/2 -translate-x-1/2 w-[600px] h-[280px] rounded-full pointer-events-none z-0 opacity-25 hidden md:block"
          style={{ background: 'radial-gradient(ellipse at center, #FFB80035 0%, #FFB80010 50%, transparent 75%)' }}
        />

        {/* Subtle green glow — behind grid */}
        <div
          className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full pointer-events-none z-0 hidden lg:block"
          style={{ background: 'radial-gradient(ellipse at center, #10B98118 0%, #10B98108 50%, transparent 70%)' }}
        />

        {/* Small static dots */}
        <div className="absolute top-[30%] right-[8%] w-2 h-2 rounded-full bg-[#10B981] opacity-40 pointer-events-none z-0 hidden lg:block" />
        <div className="absolute top-[65%] left-[7%] w-3 h-3 rounded-full bg-[#FFB800] opacity-30 pointer-events-none z-0 hidden lg:block" />
        <div className="absolute bottom-[10%] right-[12%] w-2.5 h-2.5 rounded-full bg-[#10B981] opacity-35 pointer-events-none z-0 hidden lg:block" />
        <div className="absolute top-[22%] right-[25%] w-2 h-2 rounded-full bg-[#10B981] opacity-25 pointer-events-none z-0 hidden lg:block" />

        {/* Cross shapes */}
        <svg className="absolute top-[48%] left-[8%] w-[20px] h-[20px] pointer-events-none z-0 opacity-30 hidden lg:block" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="10" y1="2" x2="10" y2="18" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
          <line x1="2" y1="10" x2="18" y2="10" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <svg className="absolute bottom-[20%] right-[6%] w-[16px] h-[16px] pointer-events-none z-0 opacity-25 hidden lg:block" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="8" y1="1" x2="8" y2="15" stroke="#FFB800" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="1" y1="8" x2="15" y2="8" stroke="#FFB800" strokeWidth="1.8" strokeLinecap="round" />
        </svg>

        {/* Sparkle star */}
        <svg className="absolute top-[8%] right-[18%] w-[28px] h-[28px] pointer-events-none z-0 opacity-70 hidden md:block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2 L14 9 L21 9 L15.5 13.5 L17.5 21 L12 16.5 L6.5 21 L8.5 13.5 L3 9 L10 9 Z" fill="#FFB800" opacity="0.7" />
        </svg>

        {/* ===== END DECORATIVE ELEMENTS ===== */}

        {/* ===== HEADING SECTION ===== */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center mb-10"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB800] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFB800]" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                Our Portfolio
              </span>
            </div>

            <h1 className="font-mileast text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-5">
              Work that{" "}
              <span className="relative inline-block text-[#FFB800]">
                speaks
                <svg
                  className="absolute left-[-6%] w-[112%] h-auto pointer-events-none"
                  style={{ bottom: "-0.1em" }}
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
              <br className="hidden sm:block" />
              for itself.
            </h1>

            <p className="font-poppins-italic text-[#64748B] text-base sm:text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
              A curated collection of campaigns, films, and creative work
              <br className="hidden sm:block" />
              that moved audiences and elevated brands.
            </p>
          </motion.div>

          {/* ===== FILTER TABS ===== */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold tracking-wide transition-all duration-300 border cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#FFB800] text-white border-[#FFB800] shadow-[0_0_20px_rgba(255,184,0,0.25)]"
                    : "bg-white text-[#64748B] border-gray-200 hover:bg-gray-50 hover:text-[#0F172A] hover:border-gray-300 shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* ===== MASONRY GRID ===== */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {filteredWorks.map((item, index) => (
              <WorkCard key={item.id} item={item} index={index} onPlay={setSelectedWork} />
            ))}
          </div>

          {/* Empty state */}
          {filteredWorks.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-32 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <p className="text-[#64748B] text-sm font-medium">
                No works found in this category.
              </p>
            </motion.div>
          )}
        </div>

        {/* ===== BOTTOM CTA ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-[1400px] mx-auto w-full mt-24"
        >
          <div
            className="relative rounded-3xl overflow-hidden px-8 py-16 sm:py-20 flex flex-col items-center text-center bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            style={{
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            {/* Decorative orbs inside */}
            <div
              className="absolute top-[-40px] right-[-40px] w-[200px] h-[200px] rounded-full pointer-events-none opacity-50"
              style={{
                background:
                  "radial-gradient(circle, #10B98125 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[180px] rounded-full pointer-events-none opacity-40"
              style={{
                background:
                  "radial-gradient(circle, #FFB80025 0%, transparent 70%)",
              }}
            />

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
              Have a project in mind?
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base max-w-lg mb-8 font-medium">
              Let&apos;s create something remarkable together. We&apos;d love to
              hear about your vision.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FFB800] text-white font-bold text-sm tracking-wide hover:shadow-[0_0_30px_rgba(255,184,0,0.35)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Start a Conversation
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.div>
      </section>

      {/* ===== VIDEO LIGHTBOX ===== */}
      <AnimatePresence>
        {selectedWork && (
          <VideoLightbox
            item={selectedWork}
            onClose={() => setSelectedWork(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
