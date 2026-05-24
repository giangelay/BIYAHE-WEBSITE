import React from 'react';
import { Apple, Smartphone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 bg-surface-container-lowest dark:bg-on-surface border-t border-outline-variant/40 mt-auto">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter-desktop text-left">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col gap-4">
          <span className="text-title-lg font-black text-primary dark:text-primary-fixed tracking-wide">
            Biyahe
          </span>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            © {currentYear} Biyahe Philippines.<br />All Rights Reserved.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-label-lg text-on-surface font-bold mb-2">
            Company
          </h4>
          <a className="text-body-md text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors hover:opacity-90 font-medium" href="#">
            Safety
          </a>
          <a className="text-body-md text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors hover:opacity-90 font-medium" href="#">
            Terms & Conditions
          </a>
          <a className="text-body-md text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors hover:opacity-90 font-medium" href="#">
            Privacy Policy
          </a>
        </div>

        {/* Support Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-label-lg text-on-surface font-bold mb-2">
            Support
          </h4>
          <a className="text-body-md text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors hover:opacity-90 font-medium" href="#">
            Passenger Appeal Form
          </a>
          <a className="text-body-md text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors hover:opacity-90 font-medium" href="#">
            Trust & Insurance
          </a>
        </div>

        {/* Download App Buttons */}
        <div className="flex flex-col gap-4">
          <h4 className="text-label-lg text-on-surface font-bold mb-2">
            Download the App
          </h4>
          <div className="flex gap-4">
            <button
              className="bg-surface-container-highest dark:bg-surface-container-high p-3 rounded-lg hover:bg-surface-dim dark:hover:bg-surface-container-highest transition-colors flex items-center justify-center text-primary dark:text-primary shadow-sm hover:shadow active:scale-95 duration-200"
              aria-label="Download for Android"
            >
              {/* Android custom SVG icon */}
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M17.523 15.3l1.816 3.146a.5.5 0 0 1-.183.683c-.244.14-.555.057-.683-.183L16.63 15.75c-1.42.617-3.003.962-4.63.962s-3.21-.345-4.63-.962l-1.846 3.2c-.13.225-.42.308-.68.18a.5.5 0 0 1-.18-.68l1.81-3.15C3.41 13.56 1.34 10.49 1 6.85h22c-.34 3.64-2.41 6.71-5.48 8.45zM7.5 10c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm9 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
              </svg>
            </button>
            <button
              className="bg-surface-container-highest dark:bg-surface-container-high p-3 rounded-lg hover:bg-surface-dim dark:hover:bg-surface-container-highest transition-colors flex items-center justify-center text-primary dark:text-primary shadow-sm hover:shadow active:scale-95 duration-200"
              aria-label="Download for iOS"
            >
              <Apple size={24} className="stroke-[2]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
