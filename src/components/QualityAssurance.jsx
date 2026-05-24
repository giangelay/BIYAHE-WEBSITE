import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import image2 from '../../image2.png';
export default function QualityAssurance() {
  return (
    <section className="w-full bg-surface-container-low py-16 md:py-24 overflow-hidden">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Quality Vehicle Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="md:col-span-7 h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-sm border border-outline-variant/20"
        >
          <img
            alt="Rigorous quality inspection and safety checks at Biyahe"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            src={image2}
          />
        </motion.div>

        {/* Right Side: Overlapping Quality Assurance Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="md:col-span-5 flex flex-col gap-6 md:-ml-16 z-10 bg-surface/90 backdrop-blur-xl p-8 md:p-12 rounded-2xl shadow-md border border-outline-variant/30 text-left"
        >
          <div className="w-12 h-12 bg-primary-container/10 rounded-full flex items-center justify-center text-primary-container mb-2 shadow-inner">
            <ShieldCheck size={28} className="stroke-[2.5]" />
          </div>
          
          <h2 className="text-headline-md font-bold text-on-surface">
            Quality Assured Rentals
          </h2>
          
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            <strong className="text-on-surface block mb-1">Bawat sasakyan, pasado sa standards.</strong>
            Every vehicle on Biyahe undergoes a rigorous inspection and safety check, ensuring your trip is always safe and reliable. We don't compromise on your peace of mind.
          </p>
          
          <a
            className="inline-flex items-center gap-2 text-primary-container font-semibold text-label-lg hover:underline mt-4 group"
            href="#"
          >
            <span>Learn about our safety standards</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
