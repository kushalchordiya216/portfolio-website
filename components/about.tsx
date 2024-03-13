"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a bachelor's degree in{" "}
        <span className="font-medium">Computer Science</span>, I joined as a Software engineer in Trilogy Inovations.{" "}
      </p>
      <p>
        <span className="italic">My favorite part of programming</span> has always been the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. 
        During my time at TI, I gained exposure to many practical skills, both technical, like my expertise in AWS and non-technical, like truly understanding your customers, to deliver maximum value to them. 
        I will soon be joining Indeed as a SWE-2{" "}
      </p>
      <p>
      I specialize in backend engineering, especially building on top of cloud services, however I'm also skilled with building front-ends with React.
      I'm also experienced with building ML pipelines and AI-powered applications.
      I am always looking to learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        badminton, watching movies, and reading books on fiction and philosophy.
      </p>
    </motion.section>
  );
}
