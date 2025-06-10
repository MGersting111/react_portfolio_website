"use client";
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="flex flex-col-reverse sm:grid sm:grid-cols-12 gap-8 items-center">
        <div className="sm:col-span-7 w-full text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-2"
          ></motion.div>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-green-200">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Micha",
                1000,
                "Full Stack Developer",
                1000,
                "Data Analyst",
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-white hover:bg-slate-200 text-black">Hire Me</button>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit bg-transparent hover:bg-slate-800 text-white border border-white mt-3">Download CSV</button>
          </div>
        </div>
        <div className="sm:col-span-5 flex justify-center items-center mb-8 sm:mb-0">
          <div className="relative w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/profile_animated.png"
              alt="profile"
              fill
              className="object-cover rounded-full shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection