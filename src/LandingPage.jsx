import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QualityAssurance from './components/QualityAssurance';
import CorePromises from './components/CorePromises';
import BestRateGuarantee from './components/BestRateGuarantee';
import Footer from './components/Footer';
import UnavailableModal from './components/UnavailableModal';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans">
      <UnavailableModal />
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="pt-20 flex-grow flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* Quality Assurance Section */}
        <QualityAssurance />

        {/* Core Promises Section */}
        <CorePromises />

        {/* Best Rental Rate Guarantee Banner */}
        <BestRateGuarantee />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
