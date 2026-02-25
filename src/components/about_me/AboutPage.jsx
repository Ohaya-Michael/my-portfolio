import React from 'react';
import IMG from '../../assets/profile3.jpg';
import PDF from '../../assets/new_cv.pdf';
import Button from '../miscelenous/ButtonVariant';
import SkillCard from './SkillCard';
import TimelineItem from './TimelineItem';
import SectionHeader from './SectionHeader';

const AboutPage = () => {
  const skills = [
    { icon: 'token', title: 'UI/UX Design', description: 'Stitch, Figma, Adobe XD, ProtoPie. Creating high-fidelity prototypes.' },
    { icon: 'code', title: 'Frontend Dev', description: 'React, TypeScript, Tailwind CSS. Building performant interfaces.' },
    { icon: 'database', title: 'Backend Basics', description: 'Node.js, FastAPI, Python, PostgreSQL. Handling data integration.' },
    { icon: 'auto_graph', title: 'Strategy', description: 'User Research, API Testing. Aligning design with business goals.' },
    { icon: 'terminal', title: 'DevOps', description: 'Git, Mercurial, Docker, CI/CD pipelines. Streamlining deployment.' },
    { icon: 'brush', title: 'Brand Identity', description: 'Logos, Typography, Color Theory. Developing brand narratives.' },
    { icon: 'code', title: 'ML & AI', description: 'Tensorflow, Pytorch, Keras, NLP, Llamaindex, Langchain, Machine Learning, Neural Networks, Data Science. Building intelligent systems.' },

  ];

  const experience = [
    {
      date: '2021 - Present',
      title: 'Project Lead/Project developer datascience and AI',
      company: 'Interface Projects GmbH',
      icon: 'work',
      description: 'Lead the development of AI-driven solutions, overseeing project lifecycles from concept to deployment. Collaborated with cross-functional teams to deliver innovative products that leverage machine learning and data science techniques.'
    },
    {
      date: '2020 - 2021',
      title: 'UI Developer and Frontend Developer',
      company: 'Icigaill GmbH',
      icon: 'work',
      description: 'Using Vue.js to implement API endpoints in the frontend while bridging the gap between design and code with pixel-perfect components.'
    },
    {
      date: '2025 - 2026',
      title: 'RAG-Driven Generative AI Developer',
      company: 'Self Study and Personal Projects',
      icon: 'palette',
      description: 'Building a Retrieval-Augmented Generation (RAG) system using Llamaindex and Langchain to create a knowledge graph for a personal project. This involved integrating various data sources, implementing natural language processing techniques, and fine-tuning the model to generate accurate and contextually relevant responses.'
    },
    {
      date: '2025 - 2026',
      title: 'Hands-On Genetic Algorithms with Python',
      company: 'Self Study and Personal Projects',
      icon: 'palette',
      description: 'Implemented and optimized genetic algorithms in Python to solve complex optimization problems.'
    },
    {
      date: 'Graduated 2018',
      title: 'M.S. Computer Science and Media',
      company: 'Bauhaus-Universität Weimar',
      icon: 'school',
      description: 'Focused on Human-Computer Interaction and Advanced Algorithms. Thesis on Cracked Image Classification using Convolutional Neural Networks.'
    },
    {
      date: 'Graduated 2018',
      title: 'B.S. Mathematics and Computer Science',
      company: 'Federal University of Technology Owerri, Nigeria',
      icon: 'school',
      description: 'Focused on Human-Computer Interaction and Advanced Algorithms. Thesis on an encription algorithm based on the Collatz conjecture.'
    }
  ];

  return (
    <div className="py-24 bg-[#1a1a1a]/30 dark:bg-[#101622] text-slate-900 dark:text-slate-100 min-h-screen font-sans transition-colors duration-300">
      <main className="max-w-5xl mx-auto px-6 lg:px-10 py-12 space-y-20">
        
        {/* Bio Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0d59f2] to-blue-400 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src={IMG}
                alt="Portrait" 
                className="relative rounded-xl w-full max-w-sm aspect-square object-cover shadow-2xl"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[#0d59f2] font-bold tracking-widest uppercase text-l">A little bit about me</span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">Designing Digital Experiences powered by AI</h1>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I am a Senior AI Engineer with a passion for building intelligent systems and scalable solutions. For over 8 years, I have been bridging the gap between cutting-edge machine learning and practical real-world applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button href={PDF} variant="outline" icon="download">View Resume</Button>
              <Button to="/portfolio" variant="cta" icon="mail">View Portfolio</Button>
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="space-y-10">
          <SectionHeader 
            center 
            title="Technical Proficiency" 
            subtitle="My toolkit spans across the entire product lifecycle, from initial research to front-end implementation." 
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <SkillCard key={i} {...skill} />
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-[#0d59f2]/80">Professional Journey</h2>
            <span className="hidden sm:block h-px flex-1 bg-slate-200 dark:bg-slate-800 mx-8"></span>
          </div>
          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#0d59f2] before:via-slate-200 dark:before:via-slate-800 before:to-transparent">
            {experience.map((item, i) => (
              <TimelineItem key={i} {...item} isOdd={true} />
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-2xl bg-[#0d59f2] p-8 lg:p-12 text-center text-white space-y-6">
            <h2 className="text-3xl font-bold">Ready to start a project?</h2>
            <p className="text-white/80 max-w-lg mx-auto">Currently available for freelance work and full-time opportunities.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/contact" variant="outline">Hire Me</Button>
              <Button to="/contact" variant="outline">Contact Me</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;