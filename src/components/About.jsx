// C:\ESD\1\shift1\src\components\About.jsx
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// ================= BUTTON GROUP =================
const ButtonGroup = styled.div`
  margin-top: 35px;
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  align-items: center;
`;

// ================= BUTTON =================
const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 12px 18px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: white;

  backdrop-filter: blur(12px);
  background: rgba(145, 94, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.1);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 12px 35px rgba(145, 94, 255, 0.5);
    background: linear-gradient(135deg, #915eff, #ff6ec4);
  }

  svg {
    font-size: 18px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.2) rotate(5deg);
  }
`;

// ================= CARD =================
const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    tiltMaxAngleX={15}
    tiltMaxAngleY={15}
    scale={1.05}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.4, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-6 px-10 min-h-[280px] flex justify-evenly items-center flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <img
          src={icon}
          alt="service"
          className="w-16 h-16 object-contain mb-3"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// ================= MAIN =================
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Full Stack Developer with experience building scalable web applications
        using React, Node.js, and Django. Developed secure document validation
        systems integrating OCR, QR decoding, and REST APIs during my tenure at
        C-DAC. Strong foundation in data structures and system design, with
        proven problem-solving skills.
      </motion.p>

      {/* 🔥 BUTTONS */}
      <ButtonGroup>
        {/* GitHub */}
        <Button
          href="https://github.com/amanraj6221"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </Button>

        {/* LinkedIn */}
        <Button
          href="https://www.linkedin.com/in/aman-raj6221/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </Button>

        {/* Resume */}
        <Button
          href="https://drive.google.com/file/d/1lAaWvp6iT3Byp9Nao8WG9k4_391-Sy4_/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileAlt /> Resume
        </Button>
      </ButtonGroup>

      {/* SERVICES */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");