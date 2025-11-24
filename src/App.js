import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppNavbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Events from './components/Events/Events';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

function GroupOne() {
  return (
    <>
      <Team />
      <Contact />
    </>
  );
}

function GroupTwo() {
  return (
    <>
      <Testimonials />
      <FAQ />
    </>
  );
}

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <About />
      <Events />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/group1" element={<GroupOne />} />
            <Route path="/group2" element={<GroupTwo />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
