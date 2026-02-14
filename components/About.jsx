import React from 'react';
import { motion } from 'framer-motion';
import cvPDF from "../assets/Umesh Kotwal-Frontend-Dev.pdf";
import aboutImg from "../assets/about-us.jpeg";

export const About = () => {
  return (
    <section id="about" className="py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 order-2 md:order-1"
          >
            <div className="relative glass p-4 rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 bg-white/20 dark:bg-transparent">
              <img
                src={aboutImg}
                alt="Workspace"
                className="rounded-2xl w-full h-auto object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 order-1 md:order-2"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I am a passionate <span className="font-semibold text-purple-600 dark:text-purple-500">Frontend Developer</span> specializing in <span className="font-semibold text-indigo-600 dark:text-indigo-500">React.js</span> and <span className="font-semibold text-pink-600 dark:text-pink-500">Next.js</span>.
              Based in Surat, India, I build high-performance web applications that are as beautiful as they are functional.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I am open to roles <span className="font-semibold text-purple-600 dark:text-purple-500">across locations and available for remote, hybrid, or relocation</span> opportunities.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              My approach focuses on creating pixel-perfect user interfaces with real-world project experience. From complex ERP modules to SEO-optimized e-commerce marketplaces, I turn Figma designs into production-ready code.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
                <p className="text-3xl font-bold gradient-text">2+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Professional Roles</p>
              </div>
              <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
                <p className="text-3xl font-bold gradient-text">10+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>
            </div>

            <div className="mt-8">
              <motion.a
                href={cvPDF}
                download="Umesh Kotwal-Frontend_Dev.pdf"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold shadow-lg shadow-purple-500/30 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
