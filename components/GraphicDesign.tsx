"use client"

import { motion, easeOut } from "framer-motion"

function enc(path: string) {
  return path.split("/").map(p => encodeURIComponent(p)).join("/").replace(/%2F/g, "/")
}

const graphicCategories = [
  {
    name: "Logos & Brand Identity",
    images: [
      "/graphic-design/Logo-The-Kairo-Network-99.jpg",
      "/graphic-design/Logo-The-Kairo-Network-33.jpg",
      "/graphic-design/Rekall-IQ logo.png",
      "/graphic-design/download (4).png",
      "/graphic-design/download (5).png",
      "/graphic-design/download nees.jpeg",
      "/graphic-design/download (oo.png",
      "/graphic-design/download (6).png",
      "/graphic-design/SIS BARACA.jpg",
      "/graphic-design/7203152.jpg",
      "/graphic-design/3564855.jpg",
      "/graphic-design/initial-letter-wg-logo-feather-company-name-simple-clean-design-vector-logo-business-company-initial-letter-wg-207314467.jpg",
      "/graphic-design/minimalist-logo-design-three-letter-t-form-triangle_653838-45.jpg",
    ],
  },
  {
    name: "UI/UX Design",
    images: [
      "/graphic-design/Screenshot_20240313-113244_1.jpg",
      "/graphic-design/set-three-fluid-neon-holographic-abstract-design_1284-27378.jpg",
      "/graphic-design/undefined (2).jpeg",
      "/graphic-design/3684395.jpg",
      "/graphic-design/4065234.jpg",
      "/graphic-design/4141436.jpg",
      "/graphic-design/6292433.jpg",
      "/graphic-design/WhatsApp Image 2024-09-19 at 14.18.20_bf6c0801.jpg",
      "/graphic-design/images.jpeg",
      "/graphic-design/1_5FF-WiNYehgcBgtgAka1Og.png",
      "/graphic-design/images 2.jpeg",
    ],
  },
  {
    name: "Card & Other Designs",
    images: [
      "/graphic-design/AdobeStock_503564354-scaled.jpeg",
      "/graphic-design/black-business-card-with-red-triangle-shapes_1017-26129.jpg",
      "/graphic-design/blue-elegant-corporate-card_1435-1077.jpg",
      "/graphic-design/clean-style-modern-business-card-template_1017-30352.jpg",
      "/graphic-design/colorful-business-card-mock-up_1409-1096.jpg",
      "/graphic-design/creative-modern-business-card-design-template_608759-95.jpg",
    ],
  },
  {
    name: "Product & Infographic Design",
    images: [
      "/graphic-design/famer-Recovered.png",
      "/graphic-design/5HIDDENGERMSPOTSINYOURHOME.png",
      "/graphic-design/shoesoct10.jpg",
      "/graphic-design/Personal Used.jpg",
      "/graphic-design/18899269.jpg",
      "/graphic-design/7253095.jpg",
      "/graphic-design/11069303.jpg",
      "/graphic-design/2437434.jpg",
    ],
  },
]

const topImages = [
  "/graphic-design/11155703.jpg",
  "/graphic-design/famer-Recovered.png",
  "/graphic-design/DysON1.2.jpg",
  "/graphic-design/9730252.jpg",
  "/graphic-design/fashion-sale-social-media-web-banner-template_649885-63.jpg",
  "/graphic-design/mum poro333.jpg",
  "/graphic-design/6456700.jpg",
  "/graphic-design/5256807.jpg",
  "/graphic-design/6053756.jpg",
  "/graphic-design/Artboard 3.png",
  "/graphic-design/influencer-horizontal-banner-template_23-2149058416.jpg",
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
        backgroundImage: "url('/graphic-design/IMG_20240310_005515_393.jpg')",
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
