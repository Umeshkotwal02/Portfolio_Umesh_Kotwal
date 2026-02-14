import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    name: "Kesaria Textile Company",
    tech: ["React.js", "SCSS", "Bootstrap", "React-Bootstrap", "SEO Optimization"],
    image: "/img/kesaria-home.webp",
    description: "A large-scale B2B textile marketplace focused on SEO-driven growth, achieving high Google rankings through server-side rendering and dynamic metadata optimization.",
    longDescription: "Handled SEO challenges for dynamically generated category pages by implementing server-side rendering (SSR) in React.js, ensuring proper indexing by search engines. Built support for multi-vendor product listings and real-time lead generation tailored for textile wholesalers.",
    link: "https://kesariatextile.com/",
    github: "",
    screenshots: [
      "/img/kes-1.webp",
      "/img/kes-3.webp",
      "/img/kes-2.webp"
    ]
  },
  {
    id: 2,
    name: "The Magic Homes Portal",
    tech: ["Next.js", "Redux", "Firebase", "Bootstrap"],
    image: "/img/magic-home.webp",
    description: "A real estate marketplace enabling users to explore verified properties for rent and sale and connect with administrators through direct enquiries.",
    longDescription: "Implemented Firebase authentication for secure login and user management. Built dynamic property listing pages with SEO-friendly routing and developed an enquiry and lead management system to capture and forward user enquiries directly to the admin panel.",
    link: "http://themagichomes.in/",
    github: "",
    screenshots: [
      "/img/mag-1.webp",
      "/img/mag-2.webp",
      "/img/mag-3.webp"
    ]
  },
  {
    id: 3,
    name: "Kapoor Lehenga Saree",
    tech: ["ReactJS", "Redux", "Razorpay", "Tailwind"],
    image: "/img/kapoor-home.webp",
    description: "A premium e-commerce experience for high-end ethnic wear. Features a dynamic catalog, sophisticated filtering, and a seamless checkout process integrated with Razorpay. Optimized for high conversion and mobile responsiveness.",
    longDescription: "This project involved building a robust architecture to handle thousands of product variants. I implemented Redux Toolkit for complex state management of the shopping cart and user sessions. The UI focuses on large, high-quality imagery to showcase textile details, utilizing glassmorphism elements to maintain a luxury feel.",
    link: "",
    github: "https://github.com/umeshkotwal02",
    screenshots: [
      "/img/kp-3.webp",
      "/img/kp-2.webp",
      "/img/kp-1.webp",
    ]
  },
  {
    id: 4,
    name: "ERP SOFTWARE",
    tech: ["React.js", "Bootstrap", "Vuexy Template", "Node.js", "MySQL", "Redux"],
    image: "/img/goldman-home.webp",
    description: "A centralized ERP platform designed to streamline business operations and financial tracking.",
    longDescription: "Implemented a modular ERP architecture covering sales, purchase, inventory, and accounting processes. Developed a real-time dashboard for analytics and reporting, and built transaction and voucher management modules including receipt, payment, contra, and journal entries to improve operational efficiency.",
    link: "https://erpsoftwaresurat.com/",
    github: "",
    screenshots: [
      "/img/gd-1.webp",
      "/img/gd-2.webp",
      "/img/gd-3.webp"
    ]
  },
  {
    id: 5,
    name: "Resume Builder",
    tech: ["Next.js", "Node.js", "MySQL", "Bootstrap", "Google / Facebook / LinkedIn OAuth", "Razorpay", "Stripe"],
    image: "/img/resume-home.webp",
    description: "A full-stack resume builder platform that enables users to create professional resumes using customizable templates and access premium features through secure subscriptions.",
    longDescription: "Developed a scalable full-stack resume builder application with secure authentication and role-based access. Implemented email-based login along with social authentication via Google, Facebook, and LinkedIn. Built resume creation and management workflows with multiple template options and export functionality. Integrated Razorpay and Stripe for subscription-based access to premium templates and used MySQL for reliable and persistent data storage.",
    link: "",
    github: "https://github.com/Umeshkotwal02/Resume-Builder",
    screenshots: [
      "/img/rs-1.webp",
      "/img/rs-2.webp",
      "/img/rs-3.webp"
    ]
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 px-6 bg-gray-50/50 dark:bg-gray-950/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white"
          >
            My Featured <span className="gradient-text">Creations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Blending artistic design with robust engineering to solve complex business challenges.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-[2.5rem] overflow-hidden shadow-xl border border-white/40 dark:border-white/5 bg-white/40 dark:bg-black/20"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden cursor-pointer">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] rounded-full font-bold uppercase tracking-widest border border-white/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-indigo-600 dark:text-indigo-400 font-black text-xs uppercase tracking-widest flex items-center gap-2 group/btn"
                  >
                    View Case Study
                    <span className="w-8 h-[2px] bg-indigo-600 dark:bg-indigo-400 transition-all group-hover/btn:w-12"></span>
                  </button>
                  <div className="flex gap-2">
                    {
                      project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-400 hover:text-indigo-500 transition-all">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      )
                    }
                    {
                      project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-400 hover:text-indigo-500 transition-all">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </a>
                      )
                    }
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 pb-4 pt-24 md:p-8 md:pt-28">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              layoutId={`modal-${selectedProject.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[80vh] overflow-y-auto glass bg-white dark:bg-gray-950 rounded-[3rem] border border-white/20 dark:border-white/10 shadow-2xl p-6 md:p-12 custom-scrollbar"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-3 rounded-2xl bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white z-10 hover:rotate-90 transition-transform"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8 lg:sticky lg:top-0 self-start">
                  <div>
                    <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-4 leading-tight">{selectedProject.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="px-4 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-xl text-xs font-black uppercase tracking-widest border border-indigo-500/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xl font-bold text-gray-800 dark:text-gray-200">{selectedProject.description}</p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{selectedProject.longDescription}</p>
                  </div>

                  <div className="pt-6">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-black rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl"
                    >
                      Explore Project
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-4">Project Gallery</div>
                  <div className="grid grid-cols-1 gap-4">
                    {selectedProject.screenshots.map((src, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-lg group"
                      >
                        <img src={src} alt={`${selectedProject.name} screenshot ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
