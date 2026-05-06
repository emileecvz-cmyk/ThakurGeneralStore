import React from 'react';
import { motion } from 'motion/react';
import { Quote, Heart, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[65vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVZNtXSizSTvvBP-Fl_HP98aUUe6DZSYY0J8elo52KVK3KTDrotUK2gxcDEJ6WfgDmTBWXYrC_9CT2sQ7rwkHrpWvBmnN6WW0tw74jSVB_gUQRkcQ1kLwoXTFRmW5J0oqvOzDgsuWmg-rrkmyVEFb_SJ3enBoIbt15St2VVJElV2pS0EnR6JDFvPwrKe_GiEdP8S0DjxzFI40fXG4AO8LL-VHBEwNg_x4j2oFtT8_Yo16sJXplTEVnhrrpD7k-tz9PSS9-EBQmSDXv" 
          alt="Himachal Pradesh Landscape" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
        <div className="relative z-10 text-center px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-bold text-accent mb-4 block tracking-[0.3em] text-sm md:text-base uppercase">ESTABLISHED 2024</span>
            <h1 className="text-white text-5xl md:text-7xl font-black max-w-3xl mx-auto drop-shadow-2xl uppercase font-display italic">Who We Are</h1>
            <div className="mt-8 h-1.5 w-32 bg-accent mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-sm">
              <span className="w-12 h-1 bg-secondary rounded-full"></span>
              OUR STORY
            </div>
            <h2 className="text-primary text-4xl md:text-5xl font-black leading-tight">Building Dreams in Sarli Village</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Located in the heart of Sarli Village, Thakur General Store has been the cornerstone of local development for over 2+ Years of Trust. As an authorized <span className="text-primary font-bold">Ambuja Dealer</span>, we don't just sell cement; we provide the foundation for homes, businesses, and community structures across Himachal Pradesh.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our journey began with a simple mission: to provide reliable, high-quality building materials to the hardworking people of our hills. Today, we stand as a symbol of trust, ensuring that every bag of cement and every tool we supply meets the highest standards of structural integrity. We have proudly served Arki since 2024 with over 2,000+ tons delivered.
            </p>
            <div className="bg-primary p-8 border-l-8 border-accent rounded-xl shadow-lg transform -rotate-1">
              <Quote size={40} className="text-accent/40 mb-4" />
              <p className="text-white text-xl italic font-medium leading-relaxed">
                "Strength isn't just about the concrete we sell, but the bonds we build with every builder who walks through our doors."
              </p>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group border-8 border-white">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-eBTvMYlRYIQdDpb5Nk1XT_IxNMk1udtTZURHrKUv2ptqA1SXv3o7cZ_NkRTSRt5MKT4Geec-Udvfv-iwfKD8zZ1_SvvZd536hRD2DCd1BpbsF0i0rqWhvbm8wzLjVibADYCMXRjJ4nKMN2fIFM-NgfdeTHapWfmN73hSX0TOyN06jyZ7N980byx3F9ioFEe_nRhq49A43Ct2SS6pEDSaJx4fyFMY5n21HaXK3PAYGxEQccQr2VMaJY140QXsuUenR6lzVYkRCD16" 
              alt="Quality Cement" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-white font-bold tracking-[0.2em] text-sm uppercase">QUALITY ASSURED SINCE 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-surface-container industrial-pattern">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary text-4xl font-bold mb-4">Our Values & People</h2>
            <p className="text-slate-600 max-w-xl mx-auto mt-4 text-lg">The pillars that hold our business together are as strong as the materials we supply.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Heart size={36} fill="currentColor" />}
              title="Trust"
              desc="25+ Years of Trust of transparent pricing and honest advice for every construction project."
            />
            <ValueCard 
              icon={<Target size={36} />}
              title="Strength"
              desc="Only the highest-grade Ambuja cement and materials to withstand the mountain climate."
            />
            <ValueCard 
              icon={<Users size={36} />}
              title="Community Support"
              desc="Supporting local builders and families with personalized service and credit facilities."
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
           <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[500px]">
             <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center text-white space-y-8">
               <span className="uppercase font-bold tracking-[0.3em] text-accent text-sm">COMMUNITY IMPACT</span>
               <h2 className="text-4xl md:text-5xl font-black leading-tight uppercase font-display">Sarli Primary School Renovation</h2>
               <p className="text-slate-300 text-lg leading-relaxed">
                 We believe that a strong community starts with strong education. Thakur General Store donated the full supply of Ambuja Cement and structural steel for the new library and safety walls of the Sarli Government Primary School.
               </p>
               <div className="flex items-center gap-12 pt-4">
                 <div className="text-center">
                   <div className="text-4xl font-black text-accent mb-1">500+</div>
                   <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">BAGS DONATED</div>
                 </div>
                 <div className="w-px h-12 bg-white/20"></div>
                 <div className="text-center">
                   <div className="text-4xl font-black text-accent mb-1">2023</div>
                   <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">PROJECT COMPLETED</div>
                 </div>
               </div>
             </div>
             
             <div className="lg:w-1/2 relative min-h-[300px]">
               <img 
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO6H5CiD_Xdd1M4Ny2kJuA94JkL7x1JuSlR36KrsXYvdlZG2f0zU5iqCA8yj3EfuWjlFGrqNhLQt06Vf1j9NpkboPIeQYSNp22XNF8GiC6q5KYdI7g-7hB1xocd4ORUfoZIiqdrKx2xGBJ4VFbHYHMszsPDMk6h3Tj88i5-A2KPUEOplF2Ssj-7FpresJWwXnL310PCZs94HT9grqyu33y8EFfcJRRc7Y6g-fg8GzicLADahuXbzJoS91aQgq6LQq6xY9V4gUNGI88" 
                 alt="School Renovation" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-primary/10"></div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-white p-10 rounded-2xl shadow-xl border-t-8 border-secondary active-interaction group"
    >
      <div className="text-secondary mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-primary text-2xl font-bold mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed font-medium">{desc}</p>
    </motion.div>
  );
}
