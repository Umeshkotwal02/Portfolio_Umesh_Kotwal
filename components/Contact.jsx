
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import { Bounce, toast } from 'react-toastify';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_72zht0h",
        "template_my947xb",
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
        },
        "Ap4sGFIQqn8hDkgGM"
      )
      .then(
        () => {
          setStatus("success");
          setFormState({ name: "", email: "", message: "" });
          toast("❤️ We'll get back to you within 24 hours.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          setTimeout(() => setStatus("idle"), 2000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("idle");
          alert("Something went wrong. Please try again.");
        }
      );
  };


  return (
    <section id="contact" className="py-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Side: Info & Hire Me */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 space-y-10"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block"
              >
                Available for opportunities
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight">
                Let's build <br />
                something <span className="gradient-text">Great.</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
                I'm currently looking for new projects and professional roles. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Email Me</p>
                  <a href="mailto:umeshkotwal7@gmail.com" className="text-xl font-bold text-gray-900 dark:text-white hover:text-indigo-500 transition-colors">umeshkotwal7@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Current Location</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">Surat, Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Socials</p>
              {[
                { name: "LinkedIn", link: "https://www.linkedin.com/in/umeshkotwal07/" },
                { name: "GitHub", link: "https://github.com/Umeshkotwal02" },
                { name: "Instagram", link: "https://www.instagram.com/umeshkotwal_07/" },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ y: -5, scale: 1.05 }}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl glass text-sm font-bold border border-gray-100 dark:border-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                >
                  {social.name}
                </motion.a>
              ))}

            </div>
          </motion.div>

          {/* Right Side: Professional Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12"
          >
            <div className="glass p-8 md:p-12 rounded-[3rem] bg-white/40 dark:bg-black/20 border border-indigo-100 dark:border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-500 dark:text-gray-400 ml-1 uppercase tracking-[0.2em]">Your Name</label>
                    <input
                      required
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 focus:border-indigo-500 outline-none transition-all dark:text-white text-lg font-medium"
                      placeholder="e.g. Umesh Kotwal"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-500 dark:text-gray-400 ml-1 uppercase tracking-[0.2em]">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 focus:border-indigo-500 outline-none transition-all dark:text-white text-lg font-medium"
                      placeholder="hello@world.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-500 dark:text-gray-400 ml-1 uppercase tracking-[0.2em]">How can I help you?</label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 focus:border-indigo-500 outline-none transition-all dark:text-white text-lg font-medium resize-none"
                    placeholder="Describe your project, ideas, or just say hello..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status !== 'idle'}
                  type="submit"
                  className={`w-full md:w-fit px-12 py-5 rounded-2xl font-bold text-white shadow-2xl transition-all flex items-center justify-center gap-4 ${status === 'success' ? 'bg-green-500' : 'bg-gray-900 dark:bg-white dark:text-black'
                    }`}
                >
                  {status === 'idle' && (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </>
                  )}
                  {status === 'sending' && <div className="w-6 h-6 rounded-full animate-spin border-[3px] border-green-600/30 border-t-green-600"></div>}
                  {status === 'success' && (
                    <>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                      Message Sent Successfully
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
