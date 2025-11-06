"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

// Event categories data structure
const eventCategories = [
  {
    id: 1,
    name: "MUSIC",
    icon: "🎸",
    gradient: "from-amber-100 to-yellow-100",
    description: "Live concerts & festivals"
  },
  {
    id: 2,
    name: "NIGHTLIFE",
    icon: "🪩",
    gradient: "from-amber-50 to-yellow-50",
    description: "Clubs & party scenes"
  },
  {
    id: 3,
    name: "COMEDY",
    icon: "🎤",
    gradient: "from-yellow-100 to-amber-100",
    description: "Stand-up & improv shows"
  },
  {
    id: 4,
    name: "SPORTS",
    icon: "🏟️",
    gradient: "from-amber-100 to-yellow-50",
    description: "Live sports events"
  },
  {
    id: 5,
    name: "PERFORMANCES",
    icon: "🎭",
    gradient: "from-yellow-50 to-amber-100",
    description: "Theater & arts"
  },
  {
    id: 6,
    name: "FOOD & DRINKS",
    icon: "🍺",
    gradient: "from-amber-50 to-yellow-100",
    description: "Food festivals & tastings"
  },
  {
    id: 7,
    name: "FESTS & FAIRS",
    icon: "🎪",
    gradient: "from-yellow-100 to-amber-50",
    description: "Community celebrations"
  },
  {
    id: 8,
    name: "SOCIAL MIXERS",
    icon: "🥂",
    gradient: "from-amber-100 to-yellow-100",
    description: "Networking events"
  },
  {
    id: 9,
    name: "SCREENINGS",
    icon: "🎬",
    gradient: "from-yellow-50 to-amber-50",
    description: "Movie premieres"
  },
  {
    id: 10,
    name: "FITNESS",
    icon: "💪",
    gradient: "from-amber-100 to-yellow-50",
    description: "Wellness activities"
  },
  {
    id: 11,
    name: "PETS",
    icon: "🐕",
    gradient: "from-yellow-100 to-amber-100",
    description: "Pet-friendly events"
  },
  {
    id: 12,
    name: "ART EXHIBITIONS",
    icon: "🗿",
    gradient: "from-amber-50 to-yellow-100",
    description: "Gallery openings"
  },
  {
    id: 13,
    name: "CONFERENCES",
    icon: "🎙️",
    gradient: "from-yellow-50 to-amber-50",
    description: "Professional seminars"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};

interface EventCategoryCardProps {
  category: typeof eventCategories[0];
}

const EventCategoryCard = ({ category }: EventCategoryCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        scale: 1.05,
        y: -8,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      whileTap={{ scale: 0.98 }}
      className="group relative cursor-pointer"
    >
      <div
        className={`
          h-full min-h-[180px] md:min-h-[200px] lg:min-h-[220px]
          relative
          rounded-3xl md:rounded-[2rem] lg:rounded-[2.5rem]
          overflow-hidden
          flex flex-col items-center justify-center
          p-6 md:p-8
        `}
      >
        {/* Glassmorphism Background with Gradient */}
        <div 
          className={`
            absolute inset-0 
            bg-gradient-to-br ${category.gradient}
            backdrop-blur-xl
            border-2 border-white/20
            shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
          `}
        />

        {/* Animated Gradient Orbs - Purple */}
        <motion.div
          className="absolute -bottom-12 -left-12 w-40 h-40 bg-purple-500/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated Gradient Orbs - Teal/Green */}
        <motion.div
          className="absolute -top-12 -right-12 w-40 h-40 bg-teal-400/40 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Icon Container */}
          <motion.div
            className="text-6xl md:text-7xl lg:text-8xl mb-3 md:mb-4 drop-shadow-lg"
            whileHover={{ 
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 }
            }}
          >
            {category.icon}
          </motion.div>

          {/* Category Name */}
          <h3 className="text-amber-900 font-bold text-sm md:text-base lg:text-lg uppercase tracking-wider text-center leading-tight drop-shadow-sm">
            {category.name}
          </h3>
        </div>

        {/* Hover Description Overlay with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute inset-0 bg-gradient-to-t from-purple-900/95 via-purple-800/90 to-transparent 
                     backdrop-blur-md
                     flex items-end justify-center p-6
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300
                     z-20"
        >
          <p className="text-white text-sm md:text-base font-medium text-center drop-shadow-lg">
            {category.description}
          </p>
        </motion.div>

        {/* Shimmer Effect on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </motion.div>
  );
};

export const EventsExplorer = () => {
  const sectionRef = useRef(null);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#F5F5DC] py-20 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200 rounded-full blur-3xl" />
      </div>

      {/* Centered Container with Max Width */}
      <div className="max-w-[1400px] mx-auto relative z-10 px-8 md:px-16 lg:px-24 xl:px-32">
        {/* Section Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 md:mb-20 lg:mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#3E2723] mb-4">
            Explore Events
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="h-1.5 bg-gradient-to-r from-amber-600 to-yellow-500 rounded-full mx-auto"
          />
          <p className="mt-6 text-lg md:text-xl text-[#3E2723]/70 max-w-2xl mx-auto">
            Discover amazing experiences across all categories
          </p>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
                     gap-4 md:gap-6 lg:gap-8"
        >
          {eventCategories.map((category) => (
            <EventCategoryCard 
              key={category.id} 
              category={category}
            />
          ))}
        </motion.div>

        {/* Optional CTA Section - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 md:mt-24 lg:mt-28 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-600 to-yellow-600 
                       text-white font-bold text-base md:text-lg
                       px-10 md:px-14 py-4 md:py-5 
                       rounded-full
                       shadow-[0_8px_30px_rgba(217,119,6,0.3)]
                       hover:shadow-[0_12px_40px_rgba(217,119,6,0.4)]
                       transition-all duration-300
                       uppercase tracking-wider"
          >
            Browse All Events
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
