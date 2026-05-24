import React from 'react';
import { motion } from 'framer-motion';
import { BadgePercent } from 'lucide-react';

export default function BestRateGuarantee() {
  return (
    <section className="w-full bg-tertiary-container py-12 md:py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-8 text-left"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6">
          {/* Icon Circle */}
          <div className="w-16 h-16 rounded-full bg-on-tertiary text-tertiary-container flex items-center justify-center flex-shrink-0 shadow-sm group hover:rotate-12 transition-transform duration-300">
            <BadgePercent size={36} className="stroke-[2]" />
          </div>

          {/* Content Text */}
          <div className="text-center sm:text-left">
            <h2 className="text-title-lg font-bold text-on-tertiary mb-2">
              Best Rental Rate Guarantee
            </h2>
            <p className="text-body-lg text-tertiary-fixed-dim leading-relaxed">
              Found a lower price? We will match it and give you a free rental voucher.
            </p>
          </div>
        </div>

        {/* Claim CTA */}
        <button onClick={() => window.dispatchEvent(new Event('show-unavailable-modal'))} className="cursor-pointer bg-on-tertiary text-tertiary font-semibold text-label-lg px-8 py-3 rounded-full hover:bg-surface-dim hover:text-tertiary-container transition-all shadow-sm whitespace-nowrap active:scale-95 duration-200">
          Claim Voucher
        </button>
      </motion.div>
    </section>
  );
}
