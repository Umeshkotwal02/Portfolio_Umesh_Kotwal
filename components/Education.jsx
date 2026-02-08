
import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institute: "KCE Society's College of Engineering & Management",
    location: "Jalgaon, Maharashtra",
    degree: "B.TECH | Computer Engineering",
    duration: "July 2019 - Aug 2023",
    score: "CGPA: 8.18",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    )
  },
  {
    institute: "Gyanjoyt Vidyalaya",
    location: "Surat, Gujarat",
    degree: "HSC",
    duration: "June 2018 - March 2019",
    score: "Perce. : 60.62%",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-16 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Academic <span className="gradient-text">Foundation</span>
          </motion.h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-16">
          {educationData.map((edu, i) => (
            <motion.div
              key={edu.institute}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-3xl glass flex items-center justify-center text-indigo-500 shadow-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 border border-indigo-100 dark:border-white/10">
                {edu.icon}
              </div>

              <div className="flex-grow glass p-8 rounded-[2rem] border border-indigo-100/50 dark:border-white/5 shadow-xl relative overflow-hidden bg-white/20 dark:bg-black/20">
                <div className="absolute top-0 right-0 p-6 opacity-5 dark:opacity-5 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity">
                  <span className="text-6xl font-black italic text-gray-900 dark:text-white">0{i + 1}</span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-1">{edu.institute}</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {edu.location}
                    </p>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold border border-indigo-200 dark:border-indigo-800">
                      {edu.duration}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    {edu.degree}
                  </p>
                  <p className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-700 dark:text-green-400 rounded-lg text-sm font-bold border border-green-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {edu.score}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
