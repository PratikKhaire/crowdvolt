"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Safety', href: '#' },
      { name: 'Community Guidelines', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Refund Policy', href: '#' },
    ],
    explore: [
      { name: 'Browse Events', href: '#' },
      { name: 'Top Artists', href: '#' },
      { name: 'Venues', href: '#' },
      { name: 'Trending Now', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', href: '#', gradient: 'from-purple-500 to-pink-500', svg: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
    { name: 'X (Twitter)', href: '#', gradient: 'from-black to-gray-700', svg: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
    { name: 'YouTube', href: '#', gradient: 'from-red-500 to-red-600', svg: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
    { name: 'LinkedIn', href: '#', gradient: 'from-blue-600 to-blue-700', svg: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { name: 'Pinterest', href: '#', gradient: 'from-red-600 to-red-700', svg: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z' },
  ];

  return (
    <footer className="relative overflow-hidden bg-light pt-20 pb-8">
      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="footer-orb-purple"></div>
        <div className="footer-orb-blue"></div>
        <div className="footer-orb-pink"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          {/* Brand Section - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <div className="relative">
                <h2 className="footer-brand-gradient">
                  CrowdVolt
                </h2>
                {/* Shimmer effect on hover */}
                <div className="footer-shimmer-effect"></div>
              </div>
            </Link>
            
            <p className="text-gray-700 text-sm leading-relaxed mb-6 max-w-xs">
              Your premier destination for buying and selling EDM and rave tickets. Join the community-powered marketplace trusted by thousands of music lovers.
            </p>

            {/* Newsletter Signup */}
            <div className="relative">
              <div className="footer-newsletter-input">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-transparent text-black placeholder:text-gray-500 outline-none text-sm"
                />
                <button className="footer-newsletter-button">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-600 mt-2">Get weekly updates on trending events</p>
            </div>
          </div>

          {/* Links Sections - Each takes 1 column */}
          <div>
            <h3 className="footer-section-title">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="footer-link">
                    <span className="footer-link-text">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-section-title">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="footer-link">
                    <span className="footer-link-text">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-section-title">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="footer-link">
                    <span className="footer-link-text">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-section-title">
              Explore
            </h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="footer-link">
                    <span className="footer-link-text">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider with Gradient */}
        <div className="relative mb-12">
          <div className="relative flex justify-center">
            <div className="footer-divider"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="group relative"
                aria-label={social.name}
              >
                <div className="footer-social-icon-container">
                  {/* Animated gradient background on hover */}
                  <div className={`footer-social-gradient bg-gradient-to-br ${social.gradient}`}></div>
                  
                  <svg
                    className="footer-social-icon"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={social.svg} />
                  </svg>

                  {/* Shimmer effect */}
                  <div className="footer-social-shimmer"></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-600 text-sm mb-2">
              © {new Date().getFullYear()} CrowdVolt. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Built with passion for the EDM community 💜
            </p>
          </div>
        </div>

        
      </div>

      {/* Bottom Wave Decoration */}
      <div className="footer-wave"></div>
    </footer>
  );
};

export default Footer;