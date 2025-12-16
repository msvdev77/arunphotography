import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import DoraExperience from './components/DoraExperience';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = () => (
  <>
    <DoraExperience />
    <Gallery />
    <Contact />
  </>
);

const About = () => (
  <section className="section container text-center">
    <div className="fade-in-up visible">
      <h1>About Moments</h1>
      <p style={{ maxWidth: '800px', margin: '0 auto' }}>
        We are passionate storytellers dedicated to capturing the most precious moments of your life.
        With a focus on weddings and children's milestones, we bring a royal touch to every frame.
      </p>
    </div>
  </section>
);

function App() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
