import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import TopBar from './components/TopBar';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Branches from './components/Branches';
import Story from './components/Story';
import Values from './components/Values';
import Ministries from './components/Ministries';
import Quote from './components/Quote';
import Gallery from './components/Gallery';
import Visit from './components/Visit';
import Footer from './components/Footer';
import BranchDetail from './pages/BranchDetail';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import CareSharePage from './pages/CareSharePage';
import CareShareProgramPage from './pages/CareShareProgramPage';
import YouthPage from './pages/YouthPage';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Our Jesus Lives Ministries | UK Church Family</title>
        <meta name="description" content="A Christ-centred church family across the UK — worship, prayer, teaching and fellowship in English, Malayalam, Tamil and Hindi. Branches in Sheffield, Scunthorpe, Tipton and Mansfield." />
        <link rel="canonical" href="https://www.ourjesuslives.com/" />
        <meta property="og:url" content="https://www.ourjesuslives.com/" />
        <meta property="og:title" content="Our Jesus Lives Ministries | UK Church Family" />
        <meta property="og:description" content="A Christ-centred church family across the UK — worship, prayer, teaching and fellowship in English, Malayalam, Tamil and Hindi. Branches in Sheffield, Scunthorpe, Tipton and Mansfield." />
      </Helmet>
      <TopBar />
      <Nav />
      <main id="top">
        <Hero />
        <Welcome />
        <Branches />
        <Story />
        <Values />
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
        <Route path="/care-share" element={<CareSharePage />} />
        <Route path="/care-share/:programId" element={<CareShareProgramPage />} />
        <Route path="/youth" element={<YouthPage />} />
      </Routes>
    </BrowserRouter>
  );
}
