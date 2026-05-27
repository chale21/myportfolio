import React, { useState, useEffect } from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import Modal from '../components/Modal';

export default function Certifications() {
  const [certs, setCerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCerts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/certifications');
        if (!response.ok) throw new Error('API fetch failed');
        const data = await response.json();
        setCerts(data);
      } catch (err) {
        console.warn('Could not fetch certifications, using static fallback:', err.message);
        // Clean high fidelity fallback credentials list
        setCerts([
          {
            _id: "c1",
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services (AWS)",
            date: "Dec 2025",
            verifyLink: "https://aws.amazon.com/verification",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80"
          },
          {
            _id: "c2",
            title: "MongoDB Associate Developer",
            issuer: "MongoDB University",
            date: "Aug 2025",
            verifyLink: "https://university.mongodb.com",
            image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=400&q=80"
          },
          {
            _id: "c3",
            title: "Responsive Web Design Certification",
            issuer: "freeCodeCamp",
            date: "May 2025",
            verifyLink: "https://www.freecodecamp.org/certification/chalachewakilew/responsive-web-design",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCerts();
  }, []);

  const handleOpenDetails = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  return (
    <section id="certifications" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background highlight decoration */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[30%] right-[-10%] w-[250px] h-[250px] rounded-full bg-cyan-500/5 blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto space-y-16 z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Licenses & <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Verified academic credentials and industry licenses validating technical competency and software engineering skills.
          </p>
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-cyan-500 animate-spin" />
            <span className="text-sm text-slate-400 font-semibold uppercase tracking-wider">Loading Credentials...</span>
          </div>
        ) : (
          /* Certifications Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certs.map((cert) => (
              <div 
                key={cert._id}
                className="group glass rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left hover:border-cyan-400/30"
              >
                {/* Visual Banner cover */}
                <div className="relative h-40 overflow-hidden shrink-0 bg-slate-900">
                  <img 
                    src={cert.image || "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=400&q=80"} 
                    alt={cert.title}
                    className="w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 p-2.5 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-400/20 backdrop-blur-md">
                    <Award className="w-5 h-5 animate-pulse" />
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified
                    </span>
                    <h3 className="text-[17px] font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                      {cert.title}
                    </h3>
                    <span className="block text-xs font-semibold text-slate-400 tracking-wider">
                      {cert.issuer}
                    </span>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="text-xs font-semibold text-slate-400">
                      Issued: {cert.date}
                    </span>
                    
                    <button 
                      onClick={() => handleOpenDetails(cert)}
                      className="inline-flex items-center gap-1 text-xs font-black text-cyan-500 dark:text-cyan-400 hover:underline cursor-pointer"
                    >
                      Credential
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Embedded Details Modal Popup */}
      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedCert}
      />
    </section>
  );
}
