import { motion } from 'motion/react';
import { Home, Building2, Droplets, Truck, BookOpen, Warehouse, Verified, Globe, Banknote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  const products = [
    {
      icon: <Home className="text-primary" size={32} />,
      title: "Ambuja PPC Cement",
      desc: "Best for residential construction/plastering. Smooth finish, high durability, anti-corrosive, superior finish."
    },
    {
      icon: <Building2 className="text-primary" size={32} />,
      title: "Ambuja OPC 53 Grade",
      desc: "Best for columns, beams, slabs. Rapid setting, ultra strength for commercial use."
    },
    {
      icon: <Droplets className="text-primary" size={32} />,
      title: "Ambuja Kawach",
      desc: "Best for water resistance. Advanced water resistance, water shield, efflorescence free."
    },
    {
      icon: <Truck className="text-primary" size={32} />,
      title: "Service Guarantees",
      desc: "We offer wholesale rates and bulk delivery options across Arki for all projects."
    }
  ];

  return (
    <div className="bg-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/60 z-10"></div>
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIg70F36J-jV0Ah3VQBb2Zn_TGGyvUIRmym4FcX5G-IHqXWk2Vd4w1dtlqZFcGdwS-6VDzmkJ2dmDBCYl0WjUsF5aEID2B7yl3E_DPtCMXOvk3JoZifca11rgpP66q43d5aewEZPytKTcgXHeHLRGFp0-YUkdVlwKTB5B0Ow9YAUO_s6SO-Mea3qFgWNeXFtP6puZfhebGhydEttojJJ5yWzNVdLrSqUTIPMNI_6TTRNUIEzUn0yd_6rB1yf3EkWyDm97TQ00F-mlU" 
          alt="Our Products" 
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="relative z-20 text-center px-8">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-white text-5xl md:text-7xl font-black uppercase font-display drop-shadow-2xl italic"
          >
            What We Offer
          </motion.h1>
          <p className="text-white font-medium text-lg md:text-xl mt-6 max-w-2xl mx-auto opacity-90 italic">
            Providing the structural backbone for Himachal's progress since 2024.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 border-b-8 border-accent shadow-xl hover:shadow-2xl transition-all flex flex-col items-center text-center rounded-2xl"
            >
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-8 border-2 border-primary/10">
                {p.icon}
              </div>
              <h3 className="text-primary text-2xl font-black mb-4 uppercase tracking-tighter">{p.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed flex-grow mb-8">{p.desc}</p>
              <Link to="/contact" className="w-full py-4 bg-accent text-primary font-black uppercase tracking-widest rounded-xl hover:bg-yellow-400 transition-colors active-interaction shadow-md">
                GET A QUOTE
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Knowledge Center */}
      <section className="bg-surface-container-low py-24 industrial-pattern">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <h2 className="text-primary text-4xl font-black uppercase tracking-tighter border-l-8 border-accent pl-8">Knowledge Center</h2>
            
            <div className="space-y-8">
              <ArticleTile 
                icon={<BookOpen size={36} className="text-secondary" />}
                title="Choosing Right Cement"
                desc="Understand the chemical grades and setting times required for Arki's specific terrain."
              />
              <ArticleTile 
                icon={<Warehouse size={36} className="text-secondary" />}
                title="Storing Cement in Arki's Climate"
                desc="Best practices to prevent moisture absorption and hardening during the monsoon season."
              />
            </div>
          </div>

          <div className="bg-primary text-white p-12 rounded-3xl shadow-2xl space-y-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
            <h2 className="text-accent text-2xl font-black uppercase tracking-widest italic">Why Choose Us?</h2>
            
            <ul className="space-y-8">
              <li className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Verified size={24} className="group-hover:text-primary transition-colors" />
                </div>
                <span className="font-display font-bold uppercase tracking-widest text-sm">Authorized Dealer</span>
              </li>
              <li className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Globe size={24} className="group-hover:text-primary transition-colors" />
                </div>
                <span className="font-display font-bold uppercase tracking-widest text-sm">Reliable Local Support</span>
              </li>
              <li className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Banknote size={24} className="group-hover:text-primary transition-colors" />
                </div>
                <span className="font-display font-bold uppercase tracking-widest text-sm">Volume Discounts</span>
              </li>
            </ul>

            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-slate-400 italic font-medium leading-relaxed">
                "Serving the community with honesty and strength for over 2 years."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white border-2 border-primary/10 p-16 rounded-[3rem] text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
          <h2 className="text-primary text-5xl font-black mb-8 uppercase font-display italic">Ready to Start Building?</h2>
          <p className="text-slate-500 text-xl font-medium mb-12 max-w-2xl mx-auto">
            Get competitive pricing and professional advice for your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="py-6 px-16 bg-primary text-white font-black uppercase tracking-[0.3em] rounded-2xl hover:scale-105 transition-all shadow-xl active-interaction">
              GET A QUOTE
            </Link>
            <Link to="/contact" className="py-6 px-16 border-2 border-primary text-primary font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-slate-50 transition-all active-interaction">
              CONTACT US
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function ArticleTile({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ x: 10 }}
      className="bg-white p-8 rounded-2xl shadow-xl flex gap-8 items-start active-interaction border border-slate-50"
    >
      <div className="p-4 bg-slate-50 rounded-2xl">
        {icon}
      </div>
      <div>
        <h4 className="text-primary text-2xl font-black tracking-tight">{title}</h4>
        <p className="text-slate-500 mt-2 text-lg font-medium leading-relaxed">{desc}</p>
        <Link to="/contact" className="text-primary font-bold uppercase tracking-widest mt-6 inline-flex items-center gap-2 group">
          Read Article <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
