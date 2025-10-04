import React from "react";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="relative bg-gradient-to-br from-[#eaf2ff] via-[#f3f8ff] to-[#e1f1ff] py-20 px-6 md:px-12 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            Who We Are
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mt-4 rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto"
          >
            Empowering innovation and driving digital transformation for businesses worldwide.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
          
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.img
              src="/kritika1.png"
              alt="Team member working"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="w-[340px] sm:w-[400px] rounded-2xl shadow-xl object-cover hover:brightness-105"
            />
          </motion.div>

          {/* Center Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <p className="text-gray-700 text-xl sm:text-2xl leading-relaxed">
              <span className="font-semibold text-blue-600">Kriworld</span> is a premier IT solutions provider
              passionate about building technology that empowers people and
              businesses. Our expert team blends creativity, innovation, and
              technical excellence to deliver custom solutions tailored to your
              goals.
            </p>

            <p className="text-gray-700 text-xl sm:text-2xl leading-relaxed mt-6">
              From web development and mobile apps to marketing and automation,
              we ensure that every project we handle helps our clients stay
              ahead in the fast-evolving digital landscape.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.img
              src="/kritika2.png"
              alt="Team member working"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="w-[220px] sm:w-[260px] rounded-2xl shadow-xl object-cover hover:brightness-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
