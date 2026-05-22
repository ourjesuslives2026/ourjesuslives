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

export default function App() {
  return (
    <>
      <TopBar />
      <Nav />
      <main id="top">
        <Hero />
        <Welcome />
        <Branches />
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
