import React, { useState } from 'react';
import { Menu, X, Car, PlusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [activeSection, setActiveSection] = React.useState(null);
  const handleNavClick = (e, label) => {
    e.preventDefault();
    setActiveSection(label);
  };
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Our Services', href: '#', active: true },
    { label: 'How it Works', href: '#' },
    { label: 'Join Us', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact Us', href: '#' }
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-sm border-b border-outline-variant/30 transition-all duration-300">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-max-width mx-auto">
          <div className="flex items-center gap-8">
            <a className="text-headline-md font-bold text-primary hover:opacity-90 transition-opacity flex items-center gap-2" href="#">
              <span>Biyahe</span>
            </a>
            
            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.label)}
                    className={`text-label-lg transition-colors font-medium ${
                      link.active
                        ? 'text-primary border-b-2 border-primary pb-1 font-bold'
                        : 'text-on-surface-variant hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
            </div>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => window.dispatchEvent(new Event('show-unavailable-modal'))} className="cursor-pointer text-secondary font-semibold text-label-lg border border-secondary px-6 py-2 rounded-full hover:bg-secondary/10 hover:text-on-secondary-container transition-all active:scale-95 duration-200 flex items-center gap-2">
              <PlusCircle size={16} />
              <span>Host a Vehicle</span>
            </button>
            <button onClick={() => window.dispatchEvent(new Event('show-unavailable-modal'))} className="cursor-pointer bg-primary-container text-on-primary font-semibold text-label-lg px-6 py-2 rounded-full hover:opacity-90 hover:shadow-md transition-all active:scale-95 duration-200 flex items-center gap-2">
              <Car size={16} />
              <span>Rent a Ride</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary p-1 hover:bg-surface-container rounded-full transition-colors focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-btn"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Drawer Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-outline-variant shadow-lg py-6 px-margin-mobile flex flex-col gap-6"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { handleNavClick(e, link.label); setIsOpen(false); }}
                    className={`text-label-lg py-2 border-b border-outline-variant/30 font-medium ${
                      link.active
                        ? 'text-primary font-bold'
                        : 'text-on-surface-variant'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <button onClick={() => { setIsOpen(false); window.dispatchEvent(new Event('show-unavailable-modal')); }} className="cursor-pointer text-secondary font-semibold text-label-lg border border-secondary py-3 rounded-full hover:bg-secondary/5 transition-all active:scale-95 flex justify-center items-center gap-2">
                  <PlusCircle size={18} />
                  <span>Host a Vehicle</span>
                </button>
                <button onClick={() => { setIsOpen(false); window.dispatchEvent(new Event('show-unavailable-modal')); }} className="cursor-pointer bg-primary-container text-on-primary font-semibold text-label-lg py-3 rounded-full hover:opacity-95 transition-all active:scale-95 flex justify-center items-center gap-2 shadow-sm">
                  <Car size={18} />
                  <span>Rent a Ride</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Modal for navigation content */}
      <AnimatePresence>
        {activeSection && activeSection !== 'Our Services' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setActiveSection(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface p-6 md:p-8 rounded-2xl shadow-xl max-w-lg w-full relative"
            >
              <button
                className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors p-1"
                onClick={() => setActiveSection(null)}
              >
                <X size={24} />
              </button>
              <h2 className="text-display-sm font-bold text-on-surface mb-6">{activeSection}</h2>
              <div className="text-body-lg text-on-surface-variant leading-relaxed">
                {activeSection === 'How it Works' && (
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                      <strong className="text-on-surface">1. Search & Choose</strong>
                      <p>Browse our wide selection of premium vehicles and find the perfect ride for your trip.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <strong className="text-on-surface">2. Book Instantly</strong>
                      <p>Reserve your vehicle with a simple tap. Our booking process is fast, secure, and hassle-free.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <strong className="text-on-surface">3. Hit the Road</strong>
                      <p>Pick up your vehicle or have it delivered. Enjoy your journey with our quality assurance guarantee.</p>
                    </div>
                  </div>
                )}
                {activeSection === 'Join Us' && (
                  <div className="flex flex-col gap-4">
                    <p>Turn your idle vehicle into an earning asset. Join Biyahe as a partner host and reach thousands of verified renters in Cagayan de Oro.</p>
                    <button onClick={() => window.dispatchEvent(new Event('show-unavailable-modal'))} className="cursor-pointer bg-primary text-on-primary font-semibold py-3 px-6 rounded-full mt-2 w-max hover:shadow-md transition-shadow">Sign Up to Host</button>
                  </div>
                )}
                {activeSection === 'Blog' && (
                  <div className="flex flex-col gap-4">
                    <p>Discover the latest travel tips, destination guides, and stories from the Biyahe community.</p>
                    <ul className="list-disc pl-5 mt-2 flex flex-col gap-2">
                      <li className="hover:text-primary cursor-pointer transition-colors">Top 10 Hidden Gems in CDO</li>
                      <li className="hover:text-primary cursor-pointer transition-colors">How to Prepare Your Car for a Long Drive</li>
                      <li className="hover:text-primary cursor-pointer transition-colors">Meet our Top Rated Hosts of the Month</li>
                    </ul>
                  </div>
                )}
                {activeSection === 'Contact Us' && (
                  <div className="flex flex-col gap-4">
                    <p>Need help? Our support team is available 24/7 to assist you.</p>
                    <div className="bg-surface-container-low p-4 rounded-xl flex flex-col gap-2">
                      <p><strong>Email:</strong> support@biyahe.com</p>
                      <p><strong>Phone:</strong> +63 917 123 4567</p>
                      <p><strong>Office:</strong> 123 Velez St, Cagayan de Oro City</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
