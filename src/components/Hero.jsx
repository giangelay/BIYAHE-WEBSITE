import React from 'react';
import { motion } from 'framer-motion';
import { Car, Key } from 'lucide-react';
import image1 from '../../image1.png';
export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="relative w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center overflow-hidden">
      
      {/* Text Content Area */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6 w-full z-10 text-left"
      >
        <motion.h1
          variants={itemVariants}
          className="text-headline-lg-mobile font-bold md:text-display-lg text-on-surface leading-tight"
        >
          One tap, ready ang <span className="text-primary-container text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">biyahe mo!</span>
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-body-lg text-on-surface-variant max-w-lg leading-relaxed"
        >
          Premium rentals, assured quality, and seamless journeys. Experience the easiest way to hit the road with confidence in Cagayan de Oro.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <button onClick={() => window.dispatchEvent(new Event('show-unavailable-modal'))} className="cursor-pointer bg-primary-container text-on-primary flex justify-center items-center gap-3 px-8 py-4 rounded-full text-title-lg font-semibold shadow-md hover:shadow-lg hover:bg-primary transition-all active:scale-95 duration-200">
            <Car size={24} className="fill-current" />
            <span>I want to Rent</span>
          </button>
          
          <button onClick={() => window.dispatchEvent(new Event('show-unavailable-modal'))} className="cursor-pointer border-2 border-secondary text-secondary flex justify-center items-center gap-3 px-8 py-4 rounded-full text-title-lg font-semibold hover:bg-secondary/5 transition-all active:scale-95 duration-200">
            <Key size={24} />
            <span>I want to Host</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Hero Visual Area */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        className="w-full relative h-[320px] sm:h-[400px] md:h-[550px] rounded-2xl overflow-hidden shadow-md bg-surface-container-low border border-outline-variant/20 group"
      >
        {/* Subtle glass effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 pointer-events-none" />
        <img
          alt="Premium vehicle rental layout for Biyahe in CDO"
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          src={image1}
        />
      </motion.div>
      
    </section>
  );
}
