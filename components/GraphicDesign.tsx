"use client"

import { motion, easeOut } from "framer-motion"

function enc(path: string) {
  return path.split("/").map(p => encodeURIComponent(p)).join("/").replace(/%2F/g, "/")
}

const graphicCategories = [
  {
    name: "Logos & Brand Identity",
    images: [
      "/images/graphic-design/Logo-The-Kairo-Network-99.jpg",
      "/images/graphic-design/Logo-The-Kairo-Network-33.jpg",
      "/images/graphic-design/Rekall-IQ logo.png",
      "/images/graphic-design/download (4).png",
      "/images/graphic-design/download (5).png",
      "/images/graphic-design/download nees.jpeg",
      "/images/graphic-design/download (oo.png",
      "/images/graphic-design/download (6).png",
      "/images/graphic-design/SIS BARACA.jpg",
      "/images/graphic-design/7203152.jpg",
      "/images/graphic-design/3564855.jpg",
      "/images/graphic-design/initial-letter-wg-logo-feather-company-name-simple-clean-design-vector-logo-business-company-initial-letter-wg-207314467.jpg",
      "/images/graphic-design/minimalist-logo-design-three-letter-t-form-triangle_653838-45.jpg",
    ],
  },
  {
    name: "UI/UX Design",
    images: [
      "/images/graphic-design/Screenshot_20240313-113244_1.jpg",
      "/images/graphic-design/set-three-fluid-neon-holographic-abstract-design_1284-27378.jpg",
      "/images/graphic-design/undefined (2).jpeg",
      "/images/graphic-design/3684395.jpg",
      "/images/graphic-design/4065234.jpg",
      "/images/graphic-design/4141436.jpg",
      "/images/graphic-design/6292433.jpg",
      "/images/graphic-design/WhatsApp Image 2024-09-19 at 14.18.20_bf6c0801.jpg",
      "/images/graphic-design/images.jpeg",
      "/images/graphic-design/1_5FF-WiNYehgcBgtgAka1Og.png",
      "/images/graphic-design/images 2.jpeg",
    ],
  },
  {
    name: "Card & Other Designs",
    images: [
      "/images/graphic-design/AdobeStock_503564354-scaled.jpeg",
      "/images/graphic-design/black-business-card-with-red-triangle-shapes_1017-26129.jpg",
      "/images/graphic-design/blue-elegant-corporate-card_1435-1077.jpg",
      "/images/graphic-design/clean-style-modern-business-card-template_1017-30352.jpg",
      "/images/graphic-design/colorful-business-card-mock-up_1409-1096.jpg",
      "/images/graphic-design/creative-modern-business-card-design-template_608759-95.jpg",
    ],
  },
  {
    name: "Product & Infographic Design",
    images: [
      "/images/graphic-design/famer-Recovered.png",
      "/images/graphic-design/5HIDDENGERMSPOTSINYOURHOME.png",
      "/images/graphic-design/shoesoct10.jpg",
      "/images/graphic-design/Personal Used.jpg",
      "/images/graphic-design/18899269.jpg",
      "/images/graphic-design/7253095.jpg",
      "/images/graphic-design/11069303.jpg",
      "/images/graphic-design/2437434.jpg",
    ],
  },
]

const topImages = [
  "/images/graphic-design/11155703.jpg",
  "/images/graphic-design/famer-Recovered.png",
  "/images/graphic-design/DysON1.2.jpg",
  "/images/graphic-design/9730252.jpg",
  "/images/graphic-design/fashion-sale-social-media-web-banner-template_649885-63.jpg",
  "/images/graphic-design/mum poro333.jpg",
  "/images/graphic-design/6456700.jpg",
  "/images/graphic-design/5256807.jpg",
  "/images/graphic-design/6053756.jpg",
  "/images/graphic-design/Artboard 3.png",
  "/images/graphic-design/influencer-horizontal-banner-template_23-2149058416.jpg",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

export default function GraphicDesign() {
  return (
    <motion.div
      className="container mx-auto px-4 py-16 relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      style={{
        backgroundImage: "url('/images/graphic-design/IMG_20240310_005515_393.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10">
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center"
      >
        Graphic Design Portfolio
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto"
      >
        A collection of my graphic design work — logos, branding, flyers, social media graphics, and more.
      </motion.p>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16"
      >
        {topImages.map((src, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="relative aspect-square rounded-lg overflow-hidden shadow-md border border-border group bg-card"
          >
            <img
              src={enc(src) || "/placeholder.svg"}
              alt={`Graphic design ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>

      {graphicCategories.map((category, idx) => (
        <motion.div key={idx} variants={itemVariants} className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6">{category.name}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.images.map((src, j) => (
              <div
                key={j}
                className="relative aspect-square rounded-lg overflow-hidden shadow-md border border-border group bg-card"
              >
                <img
                  src={enc(src) || "/placeholder.svg"}
                  alt={`${category.name} ${j + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>
      ))}
      </div>
    </motion.div>
  )
}
