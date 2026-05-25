import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Branches from './components/Branches';
import Story from './components/Story';
import Ministries from './components/Ministries';
import Quote from './components/Quote';
import Gallery from './components/Gallery';
import Visit from './components/Visit';
import Footer from './components/Footer';
import BranchDetail from './pages/BranchDetail';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <>
      <TopBar />
      <Nav />
      <main id="top">
        <Hero />
        <Welcome />
        <Branches />
        <section className="theme-banner">
          <img src="/assets/inheritance.jpg" alt="2026 — Possessing Our Inheritance · Obadiah 1:17" />
        </section>
        <Story />
        <Ministries />
        <Quote />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/branch/:id" element={<BranchDetail />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
