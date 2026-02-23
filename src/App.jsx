// import React, { useState } from 'react';
// import 'material-symbols';
// import Navbar from './components/dashboard/Navbar';
// import Hero from './components/dashboard/Hero';
// import Portfolio from './components/dashboard/Portfolio';
// import AboutPage from './components/about_me/AboutPage'; // Your converted about page
// import Footer from './components/dashboard/Footer';

// function App() {
//   // 1. Create the state to track navigation
//   const [activeSection, setActiveSection] = useState('home');

//   const userData = {
//     name: "Michael Ohaya",
//     role: "Software Developer, AI Engineer & Designer",
//   };

//   return (
//     <div className="bg-[#0a0a0a] text-slate-100 min-h-screen selection:bg-[#0d59f2] selection:text-white">
//       {/* 2. Pass the state and setter to the Navbar */}
//       <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
//       <main>
//         {/* 3. Conditionally render the content */}
//         {activeSection === 'home' && (
//           <>
//             <Hero 
//               name={userData.name} 
//               role={userData.role} 
//               description="I turn complex problems into elegant, user-centric solutions." 
//             />
//             <Portfolio />
//           </>
//         )}

//         {activeSection === 'about' && (
//           <AboutPage />
//         )}

//         {/* You can add more sections like 'portfolio' or 'contact' here */}
//       </main>

//       <Footer name={userData.name} />
//     </div>
//   );
// }

// export default App;

import 'material-symbols';
import React, { useState } from 'react';
import Navbar from './components/dashboard/Navbar';
import Hero from './components/dashboard/Hero';
import Portfolio from './components/dashboard/Portfolio';
import AboutPage from './components/about_me/AboutPage'; 
import Footer from './components/dashboard/Footer';
import PortfolioPage from './components/portfolio/PortfolioPage';
import ContactPage from './components/contact/ContactPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// A simple component to represent the Home layout
const Home = () => (
  <>
    <Hero 
      name="Michael Ohaya" 
      role="Software Developer, AI Engineer & Designer" 
      description="I turn complex problems into elegant, user-centric solutions." 
    />
    <Portfolio />
  </>
);

function App() {
  return (
    <Router>
      <div className="bg-[#0a0a0a] text-slate-100 min-h-screen">
        <Navbar />
        
        <main>
          <Routes>
            {/* Define your paths here */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer name="Michael Ohaya" />
      </div>
    </Router>
  );
}

export default App;