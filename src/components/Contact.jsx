// C:\Users\Aman Mehra\amanreactportfolio\amanreactportfolio\src\components\Contact.jsx
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_bgeqyqu",
        "template_21m6v9n",
        formRef.current,
        "hr19Ob5NvwpKomEUp"
      )
      .then(
        () => {
          setLoading(false);
          setShowThankYou(true); 

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error details:", error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex flex-col-reverse xl:flex-row gap-8 md:gap-10 overflow-hidden relative`}>
      
      {/* 🌟  */}
      <AnimatePresence>
        {showThankYou && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-md p-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
              className="bg-tertiary border border-secondary p-8 sm:p-10 rounded-2xl max-w-md w-full text-center shadow-2xl relative shadow-purple-500/10"
            >
              {/* एनिमेटेड ग्रीन टिक मार्क */}
              <motion.div 
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30 text-4xl font-bold"
              >
                ✓
              </motion.div>
              
              <h3 className="text-white text-2xl font-bold mb-3 tracking-wide uppercase">
                Message Sent! 🎉
              </h3>
              
              <p className="text-secondary text-sm sm:text-base leading-relaxed mb-6 font-medium">
                Thank you for getting in touch, <span className="text-white font-semibold">React Developer</span>. I have received your details safely and will get back to you as soon as possible.
              </p>
              
              <button
                onClick={() => setShowThankYou(false)}
                className="bg-white text-black py-3 px-8 rounded-xl font-bold shadow-md hover:bg-opacity-90 hover:scale-105 transition-all text-sm w-full sm:w-auto tracking-wider uppercase"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 xl:flex-[0.75] bg-black-100 p-6 sm:p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 sm:mb-4">
              Your Name
            </span>
            <input
              type="text"
              name="from_name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="What's your good name?"
              className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 sm:mb-4">
              Your email
            </span>
            <input
              type="email"
              name="from_email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="What's your web address?"
              className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 sm:mb-4">
              Your Message
            </span>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="What you want to say?"
              className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-6 sm:px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:scale-105 active:scale-95 transition-all"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* 3D Earth */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="w-full xl:flex-1 h-[300px] sm:h-[400px] md:h-[500px] xl:h-auto"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
