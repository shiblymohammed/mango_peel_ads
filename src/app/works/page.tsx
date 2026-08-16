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
          {item.type === "image" || item.imageUrl ? (
            <img
              src={item.imageUrl || item.videoUrl}
              alt={item.title}
              className="w-full h-full object-contain bg-black"
            />
          ) : (
            <video
              src={item.videoUrl}
              className="w-full h-full object-contain bg-black"
              controls
              autoPlay
              playsInline
            />
          )}
        </div>

        {/* Info bar below video */}
        <div className="mt-4 flex items-center justify-between px-1">
          <div>
            <h3 className="text-white font-bold text-lg tracking-tight">
              {item.title}
            </h3>
            <p className="text-white/50 text-sm font-medium mt-0.5">
              {item.category} {item.duration ? `· ${item.duration}` : ""}
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
      className="group relative rounded-2xl overflow-hidden cursor-pointer break-inside-avoid mb-6 sm:mb-7 bg-black shadow-[0_8px_30px_rgb(0,0,0,0.10)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.18)] transition-shadow duration-500"
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
        {item.type !== "image" && !item.imageUrl && (
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
        )}

        {/* Duration badge */}
        {item.duration && (
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
        )}

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
    <main className="w-full min-h-screen overflow-hidden">
      <section className="relative w-full flex flex-col items-center px-4 sm:px-6 lg:px-10 py-28 pb-20 bg-gray-100">
        {/* Background Lines */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-50"
          style={{ 
            backgroundImage: 'url("/assets/images/bg-lines.png")', 
            backgroundSize: '800px',
            backgroundPosition: 'top left',
            backgroundRepeat: 'repeat'
          }}
        />

        {/* ===== AWARDS SECTION ===== */}
        <div className="relative z-10 max-w-[1300px] mx-auto w-full mb-16 mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Content (7 columns) */}
            <div className="lg:col-span-7 flex flex-col relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="font-mileast text-[48px] sm:text-6xl md:text-[72px] lg:text-[80px] font-extrabold tracking-tight leading-[0.85] mb-6">
                  <span className="text-[#FFB800] block drop-shadow-sm">Trophies and</span>
                  <span className="text-[#2E7D32] block drop-shadow-sm">Triumphs</span>
                </h2>
                
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[#475569] font-bold tracking-[0.25em] uppercase text-xs md:text-sm whitespace-nowrap bg-white/60 px-4 py-2 rounded-full border border-gray-200 shadow-sm backdrop-blur-md">
                    AS CREATIVE DIRECTOR
                  </span>
                  <div className="h-[2px] w-full bg-gradient-to-r from-[#2E7D32]/30 to-transparent"></div>
                </div>
              </motion.div>

              <div className="flex flex-col gap-3 relative">
                {/* Decorative timeline line */}
                <div className="absolute left-[18px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#FFB800] via-[#2E7D32] to-transparent opacity-30 hidden sm:block"></div>

                {/* Award 1 */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="group relative flex flex-col sm:flex-row gap-4 items-start p-4 lg:p-5 rounded-[24px] transition-all duration-500 hover:bg-white hover:shadow-[0_10px_20px_rgba(0,0,0,0.04)] border border-transparent hover:border-gray-100 sm:ml-8"
                >
                  <div className="absolute -left-6 top-8 w-2.5 h-2.5 rounded-full bg-[#FFB800] hidden sm:block shadow-[0_0_10px_#FFB800] group-hover:scale-[1.7] group-hover:bg-[#2E7D32] transition-all duration-500"></div>
                  
                  <div className="bg-[#0F172A] text-white px-4 py-2 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-[#FFB800] group-hover:text-[#0F172A] transition-colors duration-500 shrink-0">
                    <span className="font-bold text-base tracking-widest">2023</span>
                  </div>
                  <div className="flex flex-col mt-0.5">
                    <h3 className="text-[#0F172A] font-extrabold text-lg md:text-xl tracking-[0.05em] mb-1.5 uppercase group-hover:text-[#2E7D32] transition-colors duration-500">PEPPER AWARD FOR ART DIRECTION</h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-1">
                      <p className="text-[#64748B] text-xs md:text-[13px] font-bold tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]"></span> CLIENT: CENTURY FASION CITY
                      </p>
                      <p className="text-[#64748B] text-xs md:text-[13px] font-bold tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></span> AGENCY: INBOON MEDIA
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Award 2 */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="group relative flex flex-col sm:flex-row gap-4 items-start p-4 lg:p-5 rounded-[24px] transition-all duration-500 hover:bg-white hover:shadow-[0_10px_20px_rgba(0,0,0,0.04)] border border-transparent hover:border-gray-100 sm:ml-8"
                >
                  <div className="absolute -left-6 top-8 w-2.5 h-2.5 rounded-full bg-[#FFB800] hidden sm:block shadow-[0_0_10px_#FFB800] group-hover:scale-[1.7] group-hover:bg-[#2E7D32] transition-all duration-500"></div>
                  
                  <div className="bg-[#0F172A] text-white px-4 py-2 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-[#FFB800] group-hover:text-[#0F172A] transition-colors duration-500 shrink-0">
                    <span className="font-bold text-base tracking-widest">2024</span>
                  </div>
                  <div className="flex flex-col mt-0.5">
                    <h3 className="text-[#0F172A] font-extrabold text-lg md:text-xl tracking-[0.05em] mb-1.5 uppercase group-hover:text-[#2E7D32] transition-colors duration-500">PEPPER AWARD FOR BEST DIGITAL FILM</h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-1">
                      <p className="text-[#64748B] text-xs md:text-[13px] font-bold tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]"></span> CLIENT: POTHYS KERALA
                      </p>
                      <p className="text-[#64748B] text-xs md:text-[13px] font-bold tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></span> AGENCY: BUZZTOP INTEGRATED
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Award 3 */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="group relative flex flex-col sm:flex-row gap-4 items-start p-4 lg:p-5 rounded-[24px] transition-all duration-500 hover:bg-white hover:shadow-[0_10px_20px_rgba(0,0,0,0.04)] border border-transparent hover:border-gray-100 sm:ml-8"
                >
                  <div className="absolute -left-6 top-8 w-2.5 h-2.5 rounded-full bg-[#FFB800] hidden sm:block shadow-[0_0_10px_#FFB800] group-hover:scale-[1.7] group-hover:bg-[#2E7D32] transition-all duration-500"></div>
                  
                  <div className="bg-[#0F172A] text-white px-4 py-2 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-[#FFB800] group-hover:text-[#0F172A] transition-colors duration-500 shrink-0">
                    <span className="font-bold text-base tracking-widest">2024</span>
                  </div>
                  <div className="flex flex-col mt-0.5">
                    <h3 className="text-[#0F172A] font-extrabold text-lg md:text-xl tracking-[0.05em] mb-1.5 uppercase group-hover:text-[#2E7D32] transition-colors duration-500">PEPPER AWARD FOR BEST TOPICAL POSTER</h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-1">
                      <p className="text-[#64748B] text-xs md:text-[13px] font-bold tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]"></span> CLIENT: ASTER MEDCITY
                      </p>
                      <p className="text-[#64748B] text-xs md:text-[13px] font-bold tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></span> AGENCY: INBOON MEDIA
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Trophy Image (5 columns) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full relative mt-8 lg:mt-0">
              {/* Decorative blobs behind trophy for ambient lighting */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-[#FFB800]/25 rounded-full blur-[60px] pointer-events-none z-0"></div>
              
              <motion.img 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, ease: "easeOut" }}
                animate={{ y: [-10, 10, -10] }}
                style={{ filter: "drop-shadow(0 25px 35px rgba(0,0,0,0.20))" }}
                src="/bg/trophy.png" 
                alt="Pepper Awards Trophies" 
                className="w-full max-w-[350px] lg:max-w-[90%] h-auto object-contain relative z-10 hover:scale-105 transition-transform duration-700 ease-[0.25,1,0.5,1] xl:-mr-8"
              />
            </div>
          </div>
        </div>

        {/* Elegant glowing divider before works */}
        <div className="w-full max-w-[1400px] mx-auto h-[2px] bg-gradient-to-r from-transparent via-[#CBD5E1] to-transparent mb-12 relative z-10"></div>

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
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 sm:gap-7">
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
