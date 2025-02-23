/**
 * Index Page - Intro/Landing Section
 */

// Dependencies
import React from "react";
import { motion } from "framer-motion";
import Typewriter, { Options } from "typewriter-effect";
import { FaEnvelope, FaSuitcase } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { IMAGE_SOURCE } from "../../config";
import LINKS from "../../data/external";

const typewriterOptions: Options = {
  strings: ["Analyst", "Tech Enthusiast", "Creator"],
  loop: true,
  autoStart: true,
  skipAddStyles: true,
};

const Intro = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, type: "spring" }}
      className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 pt-10 md:pb-20 lg:grid-cols-2 lg:pt-20"
    >
      <div className="mx-auto flex w-full max-w-lg flex-col justify-center text-center md:max-w-[640px] md:text-left">
        <h1 className="text-3xl font-semibold sm:text-4xl md:text-7xl">
          I&apos;m{" "}
          <span className="whitespace-nowrap bg-portfolio-main px-1 leading-tight text-white">
            Siddharth Daga
          </span>
          ,
          <div className="mt-4 leading-tight">
            a <Typewriter options={typewriterOptions} />
          </div>
          <div className="mt-4">
            from{" "}
            <span className="bg-portfolio-accent px-1 leading-tight text-white">
              Chennai
            </span>
          </div>
        </h1>
        <h2 className="mt-4 font-[Montserrat] font-semibold text-themes-txt_secondary md:text-lg">
          An Engineer with a Creative Mind!!{" "} Content Creator at {" "}
          <a
            href={"https://www.youtube.com/channel/UCfERUUeZsVwa1SwVXpCRlTg"}
            target="_blank"
            rel="noreferrer"
            className="border-b-2 border-b-codelanceDevs transition-all duration-300 hover:text-codelanceDevs"
          >
            Youtube
          </a>
          , Committee Member at{" "}
          <a
            href={LINKS.thinkDigital}
            target="_blank"
            rel="noreferrer"
            className="border-b-2 border-b-blue-500 transition-all duration-300 hover:text-blue-500"
          >
            Think-Digital
          </a>
          , Commitee Member at{" "}
          <a
            href={LINKS.ieeeSrm}
            target="_blank"
            rel="noreferrer"
            className="border-b-2 border-b-purple-500 transition-all duration-300 hover:text-purple-500"
          >
            IEEE SRM
          </a>
          , and Data Science and Business Analyst Intern at{" "}
          <a
            href={"https://internship.thesparksfoundation.info/</h2>"}
            target="_blank"
            rel="noreferrer"
            className="border-b-2 border-b-yellow-300 transition-all duration-300 hover:text-yellow-300"
          >
            The Sparks Foundation
          </a>
        </h2>
        <div className="mt-8 flex flex-col gap-4 md:mt-16 md:flex-row">
          <Link
            href="/contact"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-themes-txt_primary py-4 text-center font-[Montserrat] font-semibold text-themes-bg_primary transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-main md:w-1/2"
          >
            <FaEnvelope /> Get in touch
          </Link>
          <Link
            href="/projects"
            className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-black bg-white py-4 text-center font-[Montserrat] font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-themes-txt_primary hover:text-themes-bg_primary md:w-1/2"
          >
            <FaSuitcase /> View Experience
          </Link>
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex h-fit max-h-[520px] w-full max-w-lg items-center justify-center overflow-hidden rounded-xl border-[3px] border-black bg-portfolio-main shadow-3d transition-all duration-300 hover:shadow-3d-hover">
          <Image
            src={"/sid.jpeg"}
            alt="(/≧▽≦)/"
            width={100}
            height={100}
            className="h-auto w-full object-cover"
            unoptimized={true}
            priority
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Intro;
