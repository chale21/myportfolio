import React, { useEffect } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';

export default function Modal({ isOpen, onClose, data }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-950/80 backdrop-blur-md transition-all duration-300 animate-fadeIn">
      {/* Backdrop closer */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />
      
      {/* Modal Card */}
      <div className="relative w-full max-w-3xl glass rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 max-h-[90vh] flex flex-col z-10 animate-zoomIn">
        {/* Banner Image */}
        <div className="relative h-48 md:h-64 overflow-hidden shrink-0">
          <img 
            src={data.image || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"} 
            alt={data.title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-all duration-300 border border-white/10 cursor-pointer hover:rotate-90"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          {/* Headline over Image */}
          <div className="absolute bottom-6 left-6 right-6">
            {data.issuer ? (
              <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/25">
                {data.issuer}
              </span>
            ) : (
              <div className="flex gap-2 flex-wrap mb-2">
                {data.tags?.map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h3 className="text-xl md:text-3xl font-extrabold text-white leading-tight">
              {data.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1 text-left">
          {data.longDescription ? (
            <div>
              <h4 className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                Detailed Overview
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line text-[15px] md:text-base">
                {data.longDescription}
              </p>
            </div>
          ) : data.description ? (
            <div>
              <h4 className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                Description
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px] md:text-base">
                {data.description}
              </p>
            </div>
          ) : null}

          {/* Certificate Validation Details */}
          {data.issuer && (
            <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <div>
                <span className="block text-xs font-medium text-slate-400">Issuer Agency</span>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{data.issuer}</span>
              </div>
              <div>
                <span className="block text-xs font-medium text-slate-400">Issued On</span>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{data.date}</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-4 justify-end bg-slate-50/50 dark:bg-slate-900/30 shrink-0">
          {data.githubLink && (
            <a 
              href={data.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 font-medium text-sm cursor-pointer shadow-sm"
            >
              <Github className="w-4.5 h-4.5" />
              Source Code
            </a>
          )}
          {data.liveLink && (
            <a 
              href={data.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-medium text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-md shadow-cyan-500/20 cursor-pointer"
            >
              <ExternalLink className="w-4.5 h-4.5" />
              Live Demo
            </a>
          )}
          {data.verifyLink && (
            <a 
              href={data.verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-medium text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-md shadow-cyan-500/20 cursor-pointer"
            >
              <ExternalLink className="w-4.5 h-4.5" />
              Verify Credentials
            </a>
          )}
          <button 
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors duration-300 font-medium text-sm cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
