import { motion } from 'motion/react';
import { Shield, Lock, FileText, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-surface min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 border-l-8 border-secondary pl-8">
          <h1 className="text-5xl font-black text-primary mb-6 uppercase tracking-tighter italic font-display">Privacy Policy</h1>
          <p className="text-xl text-slate-600 font-medium">Thakur General Store, with over 2+ years of serving our community, is committed to protecting your personal information and your right to privacy.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2 p-10 bg-white rounded-3xl border-2 border-slate-100 shadow-xl">
            <div className="flex items-center gap-3 text-secondary mb-4">
              <Shield size={24} />
              <span className="font-bold uppercase tracking-widest text-xs">Our Promise</span>
            </div>
            <p className="text-slate-600 font-medium leading-relaxed">
              We value your trust and prioritize the security of your data. This policy outlines how we collect, use, and protect your information when you interact with our store and digital platforms.
            </p>
          </div>
          <div className="p-10 bg-primary text-white rounded-3xl flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
            <span className="font-bold uppercase tracking-widest text-[10px] opacity-60">Last Updated</span>
            <div className="text-2xl font-black font-display italic">Nov 2024</div>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-12 space-y-16">
          <Section 
            icon={<FileText className="text-secondary" />} 
            title="Data Collection"
          >
            <p className="text-slate-600 leading-relaxed font-medium">
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products, or when you contact us. This includes:
            </p>
            <ul className="mt-6 space-y-4">
              <ListItem text="Contact Details: Names, phone numbers, email addresses, and postal addresses for delivery and inquiry fulfillment." />
              <ListItem text="Project Information: Specifications regarding your construction projects to provide accurate material quotes." />
            </ul>
          </Section>

          <hr className="border-slate-100" />

          <Section 
            icon={<Lock className="text-secondary" />} 
            title="Data Security"
          >
            <p className="text-slate-600 leading-relaxed font-medium">
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
            </p>
            <div className="mt-8 relative h-64 rounded-3xl overflow-hidden group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVhn_YPoMJHSXkCrOhhvwliIqcNq9i-AjNMLd2wjR_DEXvMkFJChK-H7SsGyFt4DNd0OW4yuHZzuU94CzdWIIX0N3i8BvygwhANMaZZG-BGqEhEViM7td3KfGaFNDt4wpbd3TmymwkNzOV7Pzy_h9FdJuYnqM9nVf4H2kxrKp6RKv9sJzFv1b9D7LaL9tjRFRHDyHfsOqtT6nmUR5cIJMjQa2CKjs4fSkMCGHyqt_eHwoR9aXcXQmnLPdDMeYjx4I_ZLapXbadYc5E" 
                alt="Security" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-primary/60 flex items-end p-8">
                <p className="text-white font-bold leading-relaxed max-w-md">
                  Enterprise-grade encryption protecting every byte of your construction data.
                </p>
              </div>
            </div>
          </Section>

          <hr className="border-slate-100" />

          <div className="bg-slate-50 p-10 rounded-3xl border-2 border-dashed border-slate-200">
            <h3 className="text-primary text-2xl font-black mb-4 uppercase tracking-tight">Inquiries & Rights</h3>
            <p className="text-slate-600 font-medium leading-relaxed mb-8">
              You have the right to request access to your data or its deletion at any time. For any privacy-related concerns, please reach out directly:
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3 text-primary font-bold">
                <Mail className="text-accent" size={20} /> padamsingh1822@gmail.com
              </div>
              <div className="flex items-center gap-3 text-primary font-bold">
                <Phone className="text-accent" size={20} /> +91 9816376795
              </div>
              <div className="flex items-center gap-3 text-slate-500 font-medium">
                <MapPin className="text-accent" size={20} /> Village-Sarli, Arki, Solan, HP
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
          {icon}
        </div>
        <h2 className="text-primary text-3xl font-black uppercase tracking-widest italic font-display">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex gap-4">
      <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
      <p className="text-slate-600 font-medium leading-relaxed">{text}</p>
    </li>
  );
}
