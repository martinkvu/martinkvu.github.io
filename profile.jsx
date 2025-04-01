import React from "react";
import { motion } from "framer-motion";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow-md p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">Martin Vu</h1>
    <ul className="flex space-x-6 text-base">
      {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
        <li key={item}>
          <a href={`#${item.toLowerCase()}`} className="hover:underline">{item}</a>
        </li>
      ))}
    </ul>
  </nav>
);

const Hero = () => (
  <section className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4" style={{ backgroundImage: "url('/background.jpg')" }}>
    <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-extrabold mb-4">
      Hello, I'm Martin Vu
    </motion.h1>
    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-xl max-w-2xl">
      Data Scientist | Analyst | Researcher
    </motion.p>
  </section>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="min-h-screen py-16 px-6">
    <h2 className="text-4xl font-bold mb-6 text-center">{title}</h2>
    <div className="max-w-4xl mx-auto text-lg text-gray-700">
      {children}
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-10 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p>Email: <a href="mailto:martinvu777@gmail.com" className="underline">martinvu777@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/martin-k-vu" className="underline" target="_blank" rel="noopener noreferrer">martin-k-vu</a></p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section id="about" title="About">
        <p>I am a Mathematics graduate with a passion for data science, research, and applying analytical methods to solve real-world problems.</p>
      </Section>
      <Section id="skills" title="Skills">
        <ul className="list-disc pl-5">
          <li>Python, R, SQL, MATLAB, PowerBI, Tableau</li>
          <li>Machine Learning, Data Analysis, Visualization</li>
          <li>HTML, CSS, JavaScript, React</li>
        </ul>
      </Section>
      <Section id="experience" title="Experience">
        <p>Urban Ecosystem Lab | Amazon Project Coordinator | SASE Secretary & Family Head</p>
      </Section>
      <Section id="projects" title="Projects">
        <ul className="list-disc pl-5">
          <li>Air Pollution Prediction with ML</li>
          <li>Menthol Toxicology via ToxCast Pipeline</li>
          <li>Comparative Analysis of SVMs and Decision Trees</li>
        </ul>
      </Section>
      <Footer />
    </div>
  );
}
