import React from 'react';
import { motion } from 'motion/react';
import { Shield, Truck, BarChart3, Handshake, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnwCQEVDZvY7nVaQ-X-Kx6OeOjTQcy3UFSXdNCnHncjB_lEDjdWSabpxf4dGWBQnnacsdFW7Y0idRcdEoPh7_HyKqVKw-MV0msIJonP49W5tc9mcluF_mlOEzgR4KodMZVQdqJV3yy_HJFcOc20GEPAX-3gfssp5KmQQHA-OAmY3EsIHlp8zavE8CVD60e6_EFCeeZpHxDf8AEhB3iHMlYA1f2SFVk4ZKnRwwhMQPtHXPmjmRYQGoZ-h8tc4R6TJVs4mWd9lIXBCIR" 
            alt="Construction Site Progress" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-accent text-primary-fixed font-bold text-xs px-4 py-1 rounded-full mb-6 uppercase tracking-widest">
              AUTHORIZED AMBUJA CEMENT DEALER
            </span>
            <h1 className="text-white text-5xl md:text-6xl font-black mb-6 leading-tight uppercase font-display drop-shadow-xl">
              Reliable Cement Supply in Arki Tehsil – Built on Trust & Strength
            </h1>
            <p className="text-slate-200 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
              Supplying high-grade construction materials, the foundation for Arki's most important projects. We are an authorized dealer of Ambuja Cement (Adani Group), delivering quality to homes, contractors, and businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-accent text-primary font-bold px-8 py-4 rounded-lg hover:scale-105 transition-all shadow-lg text-center uppercase tracking-wider active-interaction">
                GET A QUOTE
              </Link>
              <Link to="/products" className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-all text-center uppercase tracking-wider active-interaction">
                EXPLORE PRODUCTS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary text-4xl font-bold mb-4">The Ambuja Cement Advantage</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg italic">Setting the benchmark for construction quality with India's most trusted building materials.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AdvantageCard 
              icon={<Shield size={28} className="text-primary" />}
              title="100% Genuine Quality"
              desc="Direct from plant, fresh stock, authentic certificates."
            />
            <AdvantageCard 
              icon={<Truck size={28} className="text-primary" />}
              title="Reliable On-Time Delivery"
              desc="Dedicated fleet, strict construction timelines."
            />
            <AdvantageCard 
              icon={<BarChart3 size={28} className="text-primary" />}
              title="2,000+ Tons Delivered"
              desc="A proven track record of supplying large-scale projects and homes."
            />
            <AdvantageCard 
              icon={<Handshake size={28} className="text-primary" />}
              title="2+ Years of Trust"
              desc="Established in 2024, we have built a legacy of trust and strength in Arki."
            />
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full"></div>
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src="/Image%20(1).png" 
                alt="Padam Singh, Owner" 
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/5] md:aspect-video lg:aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full"></div>
            </div>
            
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-accent"></div>
                <span className="uppercase font-bold tracking-widest text-sm text-primary">2+ YEARS OF TRUST</span>
              </div>
              <h2 className="text-primary text-4xl md:text-5xl font-black leading-tight">
                A Legacy of Trust Under the Leadership of Padam Singh
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                As the founder and driving force behind Thakur General Store, Padam Singh has dedicated over 25 years to serving the Arki community. His commitment to providing high-quality Ambuja cement and building materials has made the store a cornerstone of local development.
              </p>
              
              <div className="bg-slate-50 p-8 rounded-xl border-l-4 border-accent italic">
                <p className="text-primary text-lg mb-4 leading-relaxed">
                  "At Thakur General Store, we don't just sell cement; we provide the foundation for your dreams. My mission is to ensure every builder in Arki has access to the best materials with the most reliable service."
                </p>
                <cite className="font-bold text-primary not-italic">— Padam Singh, Owner</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-24 bg-surface-container-low industrial-pattern">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary text-4xl font-bold mb-4">Visit Us</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Find us in Sarli Village for all your construction needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
             <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100 space-y-8">
               <h3 className="text-2xl font-bold text-primary mb-6 uppercase tracking-wider">Contact Details</h3>
               <ContactInfo 
                 icon={<MapPin className="text-accent" />}
                 label="Address"
                 value="Village-Sarli, Tehsil- Arki, Solan, HP, 173221"
               />
               <ContactInfo 
                 icon={<Phone className="text-accent" />}
                 label="Phone"
                 value="+91 7018884165"
               />
               <ContactInfo 
                 icon={<Mail className="text-accent" />}
                 label="Email"
                 value="padamsingh1822@gmail.com"
               />
               <div className="pt-6">
                 <Link to="/contact" className="block w-full py-4 bg-primary text-white text-center rounded-xl font-bold uppercase tracking-widest hover:bg-slate-800 transition-all active-interaction shadow-lg">
                   Send an Inquiry
                 </Link>
               </div>
             </div>
             
             <div className="h-[500px] md:h-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative group">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3419.68984364426!2d76.966!3d31.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39056345ec46535d%3A0xe54d89e4726b2b5c!2sThakur%20General%20Store%20(Ambuja%20Cement)!5e0!3m2!1sen!2sin!4v1714980000000!5m2!1sen!2sin" 
                 className="w-full h-full border-0 brightness-90 grayscale-[0.2] contrast-125" 
                 allowFullScreen={true} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Google Maps Location"
               ></iframe>
               <div className="absolute top-6 right-6 z-10 pointer-events-none">
                  <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-xl flex items-center gap-2">
                     <MapPin size={16} className="text-primary" />
                     <span className="font-bold text-primary text-xs uppercase tracking-tighter">View on Google Maps</span>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AdvantageCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all active-interaction"
    >
      <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg mb-6">
        {icon}
      </div>
      <h3 className="text-primary text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed font-medium">{desc}</p>
    </motion.div>
  );
}

function ContactInfo({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-1">{label}</p>
        <p className="text-primary font-bold text-lg">{value}</p>
      </div>
    </div>
  );
}
