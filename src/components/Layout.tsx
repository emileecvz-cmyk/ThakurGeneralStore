import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="bg-white sticky top-0 z-50 border-b-2 border-slate-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-black text-primary uppercase tracking-tight font-display">
          THAKUR GENERAL STORE
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-bold uppercase tracking-tight transition-colors hover:text-blue-800 ${
                location.pathname === link.path 
                  ? 'text-primary border-b-2 border-accent pb-1' 
                  : 'text-slate-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="p-2 hover:bg-slate-50 rounded-full transition-colors text-primary active:scale-95">
            <MessageSquare size={24} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-bold uppercase tracking-tight text-lg ${
                    location.pathname === link.path ? 'text-primary' : 'text-slate-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="text-lg font-bold mb-6 font-display uppercase tracking-widest text-white">
            THAKUR GENERAL STORE
          </div>
          <p className="text-slate-400 font-medium text-sm leading-relaxed mb-6">
            The trusted destination for high-quality building materials and Ambuja cement in Sarli Village, HP. Serving builders since 2024. Over 2,000+ tons delivered.
          </p>
          <div className="flex space-x-4">
            <MapPin className="text-accent cursor-pointer" size={20} />
            <Phone className="text-accent cursor-pointer" size={20} />
            <Mail className="text-accent cursor-pointer" size={20} />
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2">Quick Links</span>
          <Link to="/" className="text-slate-400 hover:text-white text-sm transition-colors">Home</Link>
          <Link to="/about" className="text-slate-400 hover:text-white text-sm transition-colors">About</Link>
          <Link to="/products" className="text-slate-400 hover:text-white text-sm transition-colors">Products</Link>
          <Link to="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">Contact</Link>
          <Link to="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
        </div>

        <div>
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Contact Us</span>
          <div className="text-slate-400 text-sm space-y-2 mb-6">
            <p>Village-Sarli, Tehsil- Arki, Solan, HP, 173221</p>
            <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
            <p className="font-bold text-white">+91 7018884165</p>
          </div>
          <p className="text-slate-500 text-xs italic border-t border-slate-800 pt-6">
            © 2024 Thakur General Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917018884165"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 transition-transform hover:scale-110 active:scale-95 flex items-center justify-center group"
    >
      <MessageSquare fill="currentColor" />
      <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1 rounded shadow-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
