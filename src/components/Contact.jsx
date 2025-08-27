import React from "react";
import mine4 from "../assets/images/mine4.jpeg";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

export default function Contact() {
  const [state, handleSubmit] = useForm("mzzvqvwj");
  if (state.succeeded) {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-lg font-medium text-[#4831D4]"
      >
        Thanks for your message!
      </motion.p>
    );
  }

  // Stagger animation for form inputs
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-[3rem] sm:py-[5rem] px-4 sm:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-indigo-100">
      {/* Left (Image blob) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto md:ml-[3rem] lg:ml-[5rem] w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[450px] lg:h-[450px] bg-indigo-200 rounded-[50%_60%_30%_60%_/_50%_60%_40%_60%] flex items-center justify-center"
      >
        <img
          src={mine4}
          alt="Profile"
          className="w-[80%] h-[80%] object-cover rounded-[50%_60%_30%_60%_/_50%_60%_40%_60%]"
        />
      </motion.div>

      {/* Right (Form) */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
        className="flex flex-col gap-1 md:gap-2"
      >
        <motion.h3
          variants={itemVariants}
          className="text-2xl sm:text-3xl lg:text-4xl text-[#4831D4] font-medium text-center md:text-left"
        >
          Send me a message!
        </motion.h3>

        <motion.form
          onSubmit={handleSubmit}
          action="POST"
          variants={containerVariants}
          className="flex flex-col gap-6 p-4 sm:p-6 lg:p-8 w-full sm:w-[90%] lg:w-[80%]"
        >
          {/* Name */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <label>Your Name</label>
            <input
              type="text"
              className="px-4 py-2 bg-white border-0 rounded outline-0"
              id="name"
              name="name"
            />
            <ValidationError prefix="name" field="name" errors={state.errors} />
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <label>Your Email</label>
            <input
              type="email"
              className="px-4 py-2 bg-white border-0 rounded outline-0"
              id="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </motion.div>

          {/* Message */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <label>Your Message</label>
            <textarea
              className="px-4 py-3 bg-white border-0 rounded outline-0"
              rows="4"
              id="message"
              name="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </motion.div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded bg-gradient-to-r from-[#6C63FF] to-[#3FE7E8] text-white px-4 py-2 w-[70%] sm:w-[50%] lg:w-[40%] cursor-pointer mx-auto md:mx-0 transform transition-transform duration-300"
            type="submit"
            disabled={state.submitting}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
