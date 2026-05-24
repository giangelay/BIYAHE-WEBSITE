import React from 'react';
import { motion } from 'framer-motion';
import { Receipt, Headphones, Map, UserCheck, MessageSquare } from 'lucide-react';

export default function CorePromises() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section className="w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
      {/* Header Area */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface"
        >
          Our Promise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-body-lg text-on-surface-variant mt-4 max-w-2xl mx-auto leading-relaxed"
        >
          Being a commuter or driver is no joke. Learn what we commit and provide to every passenger and partner.
        </motion.p>
      </div>

      {/* Promises Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
      >

        {/* Card 1: Transparent Pricing */}
        <motion.div
          variants={cardVariants}
          className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-surface to-surface-container-high rounded-2xl p-8 shadow-sm border border-outline-variant/50 flex flex-col justify-end relative overflow-hidden group hover:shadow-md transition-shadow duration-300"
        >
          <div className="absolute top-8 right-8 text-secondary/10 group-hover:text-secondary/20 group-hover:scale-105 transition-all duration-300 pointer-events-none">
            <Receipt size={100} className="stroke-[1.5]" />
          </div>
          <div className="z-10 w-full md:w-2/3 text-left">
            <h3 className="text-title-lg font-bold text-on-surface mb-2">
              Transparent Pricing
            </h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              No hidden fees, guaranteed budget control. What you see on the app is exactly what you pay.
            </p>
          </div>
        </motion.div>

        {/* Card 2: 24/7 Support */}
        <motion.div
          variants={cardVariants}
          className="md:col-span-1 md:row-span-2 bg-primary-container text-on-primary rounded-2xl p-8 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow duration-300 text-left"
        >
          <div className="z-10 flex-grow flex flex-col">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <Headphones size={24} className="stroke-[2.5]" />
            </div>
            <h3 className="text-title-lg font-bold mb-4">
              24/7 Support
            </h3>
            <p className="text-body-md text-primary-fixed-dim leading-relaxed">
              Always ready to help, anytime. Our dedicated team is just a tap away for any assistance during your journey.
            </p>
          </div>
          <div className="absolute -bottom-10 -right-10 text-on-primary/10 group-hover:text-on-primary/15 group-hover:scale-105 transition-all duration-300 pointer-events-none">
            <MessageSquare size={180} className="stroke-[1]" />
          </div>
        </motion.div>

        {/* Card 3: Seamless Map Booking */}
        <motion.div
          variants={cardVariants}
          className="md:col-span-1 md:row-span-1 bg-surface-container-highest rounded-2xl p-8 shadow-sm border border-outline-variant/30 flex flex-col justify-between hover:shadow-md transition-shadow duration-300 text-left group"
        >
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
            <Map size={20} className="stroke-[2.5]" />
          </div>
          <div>
            <h3 className="text-title-lg font-bold text-on-surface mb-2">
              Seamless Map Booking
            </h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Choose the nearest ride on the map in real-time.
            </p>
          </div>
        </motion.div>

        {/* Card 4: Verified Hosts */}
        <motion.div
          variants={cardVariants}
          className="md:col-span-1 md:row-span-1 bg-surface rounded-2xl p-8 shadow-sm border border-outline-variant/30 flex flex-col justify-between hover:shadow-md transition-shadow duration-300 text-left group"
        >
          <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
            <UserCheck size={20} className="stroke-[2.5]" />
          </div>
          <div>
            <h3 className="text-title-lg font-bold text-on-surface mb-2">
              Verified Hosts
            </h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Enjoy a comfortable and safe trip with our trusted partners.
            </p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
