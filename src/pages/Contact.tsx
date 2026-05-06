import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Building, Mountain, Landmark, Construction, Store, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to a backend
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', projectType: 'Residential', message: '' });
  };

  return (
    <div className="bg-surface min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 industrial-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="font-bold text-accent mb-6 block tracking-[0.4em] text-sm uppercase">THAKUR GENERAL STORE</span>
            <h1 className="text-white text-5xl md:text-7xl font-black mb-8 font-display italic uppercase">Get in Touch</h1>
            <p className="text-xl text-slate-300 leading-relaxed font-medium">Providing robust materials and industrial expertise for the Solan region. Let's discuss your next build.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-8 -mt-20 mb-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-12 rounded-[2rem] shadow-2xl border border-slate-100">
            <h2 className="text-primary text-4xl font-black mb-10 uppercase font-display italic">Send us an Inquiry</h2>
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-green-50 border-2 border-green-100 p-12 rounded-3xl text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-green-800 uppercase tracking-tight">Inquiry Sent Successfully!</h3>
                  <p className="text-green-700 font-medium">Thank you for reaching out. Padam Singh or our team will get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-green-600 font-bold uppercase tracking-widest text-sm hover:underline"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="font-bold text-xs text-slate-400 tracking-widest uppercase">FULL NAME</label>
                      <input 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border-2 border-slate-100 bg-slate-50 focus:border-accent focus:bg-white focus:ring-0 rounded-xl p-4 font-bold transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="font-bold text-xs text-slate-400 tracking-widest uppercase">EMAIL ADDRESS</label>
                      <input 
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border-2 border-slate-100 bg-slate-50 focus:border-accent focus:bg-white focus:ring-0 rounded-xl p-4 font-bold transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="font-bold text-xs text-slate-400 tracking-widest uppercase">PHONE NUMBER</label>
                      <input 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border-2 border-slate-100 bg-slate-50 focus:border-accent focus:bg-white focus:ring-0 rounded-xl p-4 font-bold transition-all outline-none"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="font-bold text-xs text-slate-400 tracking-widest uppercase">PROJECT TYPE</label>
                      <select 
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full border-2 border-slate-100 bg-slate-50 focus:border-accent focus:bg-white focus:ring-0 rounded-xl p-4 font-bold transition-all outline-none cursor-pointer"
                      >
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Infrastructure</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="font-bold text-xs text-slate-400 tracking-widest uppercase">MESSAGE</label>
                    <textarea 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border-2 border-slate-100 bg-slate-50 focus:border-accent focus:bg-white focus:ring-0 rounded-xl p-4 font-medium transition-all outline-none resize-none h-40"
                      placeholder="How can we help with your construction project?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full md:w-auto bg-accent text-primary font-black uppercase tracking-[0.2em] py-5 px-16 rounded-2xl shadow-xl hover:scale-105 transition-all active-interaction flex items-center justify-center gap-3"
                  >
                    Submit Inquiry <Send size={20} />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-primary text-white p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-[100px]"></div>
               <div className="flex items-center gap-6 mb-10 pb-10 border-b border-white/10">
                 <img 
                   src="/Image%20(1).png" 
                   alt="Padam Singh" 
                   className="w-24 h-24 rounded-full object-cover border-4 border-accent shadow-2xl scale-110"
                 />
                 <div>
                   <span className="text-accent font-bold text-xs tracking-widest uppercase">PROPRIETOR</span>
                   <p className="text-2xl font-black font-display uppercase italic">Padam Singh</p>
                 </div>
               </div>

               <h3 className="text-white text-2xl font-black mb-8 uppercase tracking-widest border-l-4 border-accent pl-6">Contact Information</h3>
               <div className="space-y-10">
                 <SidebarInfo icon={<Phone className="text-accent" />} label="PHONE" value="+91 7018884165, +91 9816376795" />
                 <SidebarInfo icon={<Mail className="text-accent" />} label="EMAIL" value="padamsingh1822@gmail.com" />
                 <SidebarInfo icon={<MapPin className="text-accent" />} label="ADDRESS" value="Village-Sarli, Tehsil- Arki, District- Solan, HP, 173221" />
               </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border-2 border-dashed border-slate-200 flex items-center gap-6 active-interaction transition-all hover:bg-slate-50 group">
              <div className="p-4 bg-primary text-white rounded-2xl group-hover:rotate-12 transition-transform shadow-lg">
                <Store size={32} />
              </div>
              <div>
                <p className="text-primary font-black text-xl uppercase tracking-tighter">Visit Our Store</p>
                <p className="text-slate-500 font-medium whitespace-nowrap">Open Mon-Sat: 9:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="bg-surface-container py-24 industrial-pattern">
        <div className="max-w-7xl mx-auto px-8 text-center space-y-16">
          <h3 className="text-primary text-3xl font-black uppercase tracking-[0.2em] font-display">Supplying Major Projects In</h3>
          <div className="flex flex-wrap justify-center gap-12">
            <LocationBadge icon={<Building />} name="ARKI" />
            <LocationBadge icon={<Mountain />} name="SOLAN" />
            <LocationBadge icon={<Landmark />} name="SHIMLA" />
            <LocationBadge icon={<Construction />} name="DHARAMPUR" />
          </div>
        </div>
      </section>
    </div>
  );
}

function FormField({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) {
  return (
    <div className="flex flex-col gap-3">
      <label className="font-bold text-xs text-slate-400 tracking-widest uppercase">{label}</label>
      <input 
        type={type}
        className="w-full border-2 border-slate-100 bg-slate-50 focus:border-accent focus:bg-white focus:ring-0 rounded-xl p-4 font-bold transition-all outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}

function SidebarInfo({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-start gap-6">
      <div className="p-3 bg-white/5 rounded-xl text-accent border border-white/10 shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-slate-400 font-bold text-[10px] tracking-widest mb-1 uppercase opacity-60">{label}</p>
        <p className="font-bold text-lg leading-snug">{value}</p>
      </div>
    </div>
  );
}

function LocationBadge({ icon, name }: { icon: React.ReactNode, name: string }) {
  return (
    <div className="flex flex-col items-center gap-4 group">
      <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-primary shadow-sm hover:shadow-2xl transition-all group-hover:-translate-y-2 active:scale-90 border border-slate-50">
        {icon}
      </div>
      <span className="font-black text-slate-800 text-sm tracking-widest uppercase">{name}</span>
    </div>
  );
}
