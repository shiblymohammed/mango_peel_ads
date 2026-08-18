/* ------------------------------------------------------------------ */
/*  WORKS DATA                                                         */
/*  Separated into horizontal (landscape) and vertical (portrait)      */
/*  videos. Update the videoUrl fields with your Cloudinary URLs.      */
/* ------------------------------------------------------------------ */

export interface WorkItem {
  id: number;
  title: string;
  category: string;
  duration?: string;
  thumbnail: string;
  videoUrl?: string;
  imageUrl?: string;
  type?: "video" | "image";
  aspect: "landscape" | "portrait";
}

/* ===== HORIZONTAL (LANDSCAPE) WORKS ===== */

export const horizontalWorks: WorkItem[] = [
  {
    id: 1,
    title: "Drive the Future",
    category: "Videography",
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
    category: "Videography",
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
    category: "Videography",
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
    category: "Videography",
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
    category: "Videography",
    duration: "00:30",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_2/c_fill,g_auto,w_1200,h_675/f_webp,q_auto/v1784789416/POTHYS_jwqvtp.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1784789416/POTHYS_jwqvtp.mp4",
    aspect: "landscape",
  },
  {
    id: 9,
    title: "Care That Inspires",
    category: "Videography",
    duration: "01:07",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_2,c_fill,g_auto,w_1200,h_675,f_webp,q_auto/v1785170641/Ddrc_Film_02_Hq_mvs8op.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1785170641/Ddrc_Film_02_Hq_mvs8op.mp4",
    aspect: "landscape",
  },
  {
    id: 10,
    title: "Trust in Every Test",
    category: "Videography",
    duration: "00:39",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_2,c_fill,g_auto,w_1200,h_675,f_webp,q_auto/v1785170630/Ddrc_Film_01_Hq_pw7czc.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1785170630/Ddrc_Film_01_Hq_pw7czc.mp4",
    aspect: "landscape",
  },
  {
    id: 11,
    title: "Advanced Diagnostics",
    category: "Videography",
    duration: "01:02",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_2,c_fill,g_auto,w_1200,h_675,f_webp,q_auto/v1785170631/Ddrc_Film_04_Hq_ymkliu.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1785170631/Ddrc_Film_04_Hq_ymkliu.mp4",
    aspect: "landscape",
  },
  {
    id: 12,
    title: "Precision & Care",
    category: "Videography",
    duration: "00:48",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_2,c_fill,g_auto,w_1200,h_675,f_webp,q_auto/v1785170628/Ddrc_Film_03_Hq_aco1u9.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1785170628/Ddrc_Film_03_Hq_aco1u9.mp4",
    aspect: "landscape",
  },
  {
    id: 21,
    title: "Quality Foods",
    category: "Videography",
    duration: "00:50",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_2,c_fill,g_auto,w_1200,h_675,f_webp,q_auto/v1786910658/Quality_Foods_atdxcm.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1786910658/Quality_Foods_atdxcm.mp4",
    aspect: "landscape",
  },
  {
    id: 22,
    title: "Melange Designs",
    category: "Photography",
    thumbnail: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911118/Melange_Designs_nxfgzd.png",
    imageUrl: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911118/Melange_Designs_nxfgzd.png",
    type: "image",
    aspect: "landscape",
  },
  {
    id: 23,
    title: "Melange Designs 5",
    category: "Photography",
    thumbnail: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911118/Melange_Designs_5_fu60ez.jpg",
    imageUrl: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911118/Melange_Designs_5_fu60ez.jpg",
    type: "image",
    aspect: "landscape",
  },
  {
    id: 24,
    title: "Melange Designs 4",
    category: "Photography",
    thumbnail: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911117/Melange_Designs_4_dnwncf.jpg",
    imageUrl: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911117/Melange_Designs_4_dnwncf.jpg",
    type: "image",
    aspect: "landscape",
  },
  {
    id: 25,
    title: "Melange Designs ditote",
    category: "Photography",
    thumbnail: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911117/Melange_Designs_ditote.jpg",
    imageUrl: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911117/Melange_Designs_ditote.jpg",
    type: "image",
    aspect: "landscape",
  },
  {
    id: 26,
    title: "Melange Designs 1",
    category: "Photography",
    thumbnail: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911117/Melange_Designs_1_xvwnt2.jpg",
    imageUrl: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911117/Melange_Designs_1_xvwnt2.jpg",
    type: "image",
    aspect: "landscape",
  },
  {
    id: 27,
    title: "Main Sample",
    category: "Photography",
    thumbnail: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911091/main-sample.png",
    imageUrl: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911091/main-sample.png",
    type: "image",
    aspect: "landscape",
  },
  {
    id: 35,
    title: "Behind The Scenes",
    category: "Case Studies",
    thumbnail: "https://res.cloudinary.com/dqxyp7emm/video/upload/so_2,c_fill,g_auto,w_1200,h_675,f_webp,q_auto/v1787035861/Bts_Final_jcnlxt.webp",
    videoUrl: "https://res.cloudinary.com/dqxyp7emm/video/upload/v1787035861/Bts_Final_jcnlxt.mp4",
    aspect: "landscape",
  },
];

/* ===== VERTICAL (PORTRAIT) WORKS ===== */

export const verticalWorks: WorkItem[] = [
  {
    id: 6,
    title: "Timeless Elegance",
    category: "Videography",
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
    category: "Videography",
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
    category: "Videography",
    duration: "00:47",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_40/v1784789568/WALKAROO_2_l7guqh.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1784789568/WALKAROO_2_l7guqh.mp4",
    aspect: "portrait",
  },
  {
    id: 13,
    title: "Saree Emporium 1",
    category: "Videography",
    duration: "00:28",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_0/f_webp,q_auto/v1786910312/Saree_Emporium_1_w2pjpa.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1786910312/Saree_Emporium_1_w2pjpa.mp4",
    aspect: "portrait",
  },
  {
    id: 14,
    title: "Saree Emporium 2",
    category: "Videography",
    duration: "00:29",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_0/f_webp,q_auto/v1786910306/Saree_Emporium_2_oxkit0.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1786910306/Saree_Emporium_2_oxkit0.mp4",
    aspect: "portrait",
  },
  {
    id: 15,
    title: "Mend 1",
    category: "Videography",
    duration: "00:25",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_0/f_webp,q_auto/v1786910307/Mend_1_kz6nbu.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1786910307/Mend_1_kz6nbu.mp4",
    aspect: "portrait",
  },
  {
    id: 16,
    title: "Melage Designs 1",
    category: "Videography",
    duration: "00:30",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_0/f_webp,q_auto/v1786910304/Melage_Designs_1_adbtn8.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1786910304/Melage_Designs_1_adbtn8.mp4",
    aspect: "portrait",
  },
  {
    id: 17,
    title: "Melage Designs 2",
    category: "Videography",
    duration: "00:30",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_0/f_webp,q_auto/v1786910303/Melage_Designs_2_z9t15c.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1786910303/Melage_Designs_2_z9t15c.mp4",
    aspect: "portrait",
  },
  {
    id: 18,
    title: "Melage Designs 3",
    category: "Videography",
    duration: "00:27",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_0/f_webp,q_auto/v1786910302/Melage_Designs_3_nmyhpr.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1786910302/Melage_Designs_3_nmyhpr.mp4",
    aspect: "portrait",
  },
  {
    id: 19,
    title: "Mend 3",
    category: "Videography",
    duration: "00:14",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_0/f_webp,q_auto/v1786910299/Mend_3_llojzr.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1786910299/Mend_3_llojzr.mp4",
    aspect: "portrait",
  },
  {
    id: 20,
    title: "Mend 2",
    category: "Videography",
    duration: "00:09",
    thumbnail:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/so_0/f_webp,q_auto/v1786910299/Mend_2_qjuzyf.webp",
    videoUrl:
      "https://res.cloudinary.com/dqxyp7emm/video/upload/v1786910299/Mend_2_qjuzyf.mp4",
    aspect: "portrait",
  },
  {
    id: 28,
    title: "Mend",
    category: "Photography",
    thumbnail: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911118/Mend_juejtf.jpg",
    imageUrl: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911118/Mend_juejtf.jpg",
    type: "image",
    aspect: "portrait",
  },
  {
    id: 29,
    title: "Mend 2",
    category: "Photography",
    thumbnail: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911118/Mend_2_xifv5p.jpg",
    imageUrl: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911118/Mend_2_xifv5p.jpg",
    type: "image",
    aspect: "portrait",
  },
  {
    id: 30,
    title: "Mend 1",
    category: "Photography",
    thumbnail: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911118/Mend_1_xxaktr.jpg",
    imageUrl: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911118/Mend_1_xxaktr.jpg",
    type: "image",
    aspect: "portrait",
  },
  {
    id: 31,
    title: "Mend 3",
    category: "Photography",
    thumbnail: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911118/Mend_3_h2dzsa.jpg",
    imageUrl: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911118/Mend_3_h2dzsa.jpg",
    type: "image",
    aspect: "portrait",
  },
  {
    id: 32,
    title: "Melange Designs 1",
    category: "Photography",
    thumbnail: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911117/Melange_Designs_1_i0eofv.png",
    imageUrl: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911117/Melange_Designs_1_i0eofv.png",
    type: "image",
    aspect: "portrait",
  },
  {
    id: 33,
    title: "Melange Designs 3",
    category: "Photography",
    thumbnail: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911117/Melange_Designs_3_qcbvc8.jpg",
    imageUrl: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911117/Melange_Designs_3_qcbvc8.jpg",
    type: "image",
    aspect: "portrait",
  },
  {
    id: 34,
    title: "Melange Designs 2",
    category: "Photography",
    thumbnail: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911117/Melange_Designs_2_eftxlc.jpg",
    imageUrl: "https://res.cloudinary.com/dqxyp7emm/image/upload/v1786911117/Melange_Designs_2_eftxlc.jpg",
    type: "image",
    aspect: "portrait",
  },
];

/* ===== COMBINED — ordered for the masonry grid (balanced 3-column height) ===== */
/*  Each column gets 3 landscape + 1 portrait, starting with landscape at top!    */

export const allWorks: WorkItem[] = [
  // --- Column 1 ---
  horizontalWorks[16],
  horizontalWorks[0],
  verticalWorks[0],
  horizontalWorks[5],
  horizontalWorks[1],
  verticalWorks[3],
  horizontalWorks[9],
  verticalWorks[4],
  horizontalWorks[10],
  verticalWorks[11],
  verticalWorks[12],
  horizontalWorks[11],

  // --- Column 2 ---
  horizontalWorks[6],
  horizontalWorks[2],
  horizontalWorks[7],
  verticalWorks[1],
  verticalWorks[5],
  verticalWorks[6],
  verticalWorks[7],
  horizontalWorks[12],
  verticalWorks[13],
  verticalWorks[14],
  horizontalWorks[13],

  // --- Column 3 ---
  horizontalWorks[3],
  horizontalWorks[8],
  verticalWorks[2],
  horizontalWorks[4],
  verticalWorks[8],
  verticalWorks[9],
  verticalWorks[10],
  horizontalWorks[14],
  verticalWorks[15],
  verticalWorks[16],
  verticalWorks[17],
  horizontalWorks[15],
];
