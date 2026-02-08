
import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile-img-2.jpeg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase mb-4"
          >
            Welcome to my universe
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white"
          >
            {Array.from("I'm ").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <motion.span
              className="gradient-text"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
            >
              {Array.from("Umesh Kotwal").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-400 mb-8">
            Building the next generation of web interfaces with <span className="text-purple-600 dark:text-purple-500">React.js</span> & <span className="text-pink-600 dark:text-pink-500">Next.js</span>
          </h2>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold shadow-lg shadow-purple-500/30 flex items-center gap-2"
            >
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass text-gray-900 dark:text-white rounded-full font-bold transition-all border border-gray-300 dark:border-gray-800 bg-white/40 dark:bg-transparent"
            >
              Hire Me
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-slow"></div>
          <a href="https://www.linkedin.com/in/umeshkotwal07/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-500 transition-colors">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-black/10 shadow-2xl animate-float">
              <img
                src={profileImg}
                alt="Umesh Kotwal"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
