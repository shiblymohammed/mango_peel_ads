/* ------------------------------------------------------------------ */
/*  WORKS DATA                                                         */
/*  Separated into horizontal (landscape) and vertical (portrait)      */
/*  videos. Update the videoUrl fields with your Cloudinary URLs.      */
/* ------------------------------------------------------------------ */

export interface WorkItem {
  id: number;
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  aspect: "landscape" | "portrait";
}

/* ===== HORIZONTAL (LANDSCAPE) WORKS ===== */

export const horizontalWorks: WorkItem[] = [
  {
    id: 1,
    title: "Drive the Future",
    category: "Automotive Ad",
    duration: "07:01",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_2,c_fill,g_auto,w_1200,h_675,f_webp,q_auto/v1784789431/MILMA_lyfg3c.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1784789431/MILMA_lyfg3c.mp4",
    aspect: "landscape",
  },
  {
    id: 2,
    title: "Big. Bold. Delicious.",
    category: "Food Ad",
    duration: "01:02",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_2,c_fill,g_auto,w_1200,h_675,f_webp,q_auto/v1784789422/WALKAROO_epfmcx.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1784789422/WALKAROO_epfmcx.mp4",
    aspect: "landscape",
  },
  {
    id: 3,
    title: "Next Level Innovation",
    category: "Tech Ad",
    duration: "00:59",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_2,c_fill,g_auto,w_1200,h_675/f_webp,q_auto/v1784789419/SANTA_MONICA_p61nwr.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1784789419/SANTA_MONICA_p61nwr.mp4",
    aspect: "landscape",
  },
  {
    id: 4,
    title: "Just Keep Moving",
    category: "Sports Ad",
    duration: "00:30",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_2/c_fill,g_auto,w_1200,h_675/f_webp,q_auto/v1784789418/CARITAS_HOSPITAL_y0fmbf.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1784789418/CARITAS_HOSPITAL_y0fmbf.mp4",
    aspect: "landscape",
  },
  {
    id: 5,
    title: "Golden Hour Vibes",
    category: "Lifestyle Ad",
    duration: "00:30",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_2/c_fill,g_auto,w_1200,h_675/f_webp,q_auto/v1784789416/POTHYS_jwqvtp.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1784789416/POTHYS_jwqvtp.mp4",
    aspect: "landscape",
  },
];

/* ===== VERTICAL (PORTRAIT) WORKS ===== */

export const verticalWorks: WorkItem[] = [
  {
    id: 6,
    title: "Timeless Elegance",
    category: "Fashion Film",
    duration: "00:22",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_0/f_webp,q_auto/v1784789568/WALKAROO_3_tmbbyi.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1784789568/WALKAROO_3_tmbbyi.mp4",
    aspect: "portrait",
  },
  {
    id: 7,
    title: "Escape & Explore",
    category: "Travel Film",
    duration: "00:31",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_0/v1784789568/WALKAROO_1_gv3ddm.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1784789568/WALKAROO_1_gv3ddm.mp4",
    aspect: "portrait",
  },
  {
    id: 8,
    title: "Pure by Nature",
    category: "Product Ad",
    duration: "00:47",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_40/v1784789568/WALKAROO_2_l7guqh.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1784789568/WALKAROO_2_l7guqh.mp4",
    aspect: "portrait",
  },
];

/* ===== COMBINED — ordered for the masonry grid (random-feeling mix) ===== */
/*  H, H, V, H, V, H, H, V                                               */

export const allWorks: WorkItem[] = [
  horizontalWorks[0], // Drive the Future        — landscape
  horizontalWorks[1], // Big. Bold. Delicious.    — landscape
  verticalWorks[0],   // Timeless Elegance        — portrait
  horizontalWorks[2], // Next Level Innovation    — landscape
  verticalWorks[1],   // Escape & Explore         — portrait
  horizontalWorks[3], // Just Keep Moving          — landscape
  horizontalWorks[4], // Golden Hour Vibes         — landscape
  verticalWorks[2],   // Pure by Nature            — portrait
];
