import './App.css'

import Footer from './components/Common/Footer/Footer';
import Header from './components/Common/Header/Header';
import Paginator from './components/Common/Paginator/Paginator';
import AboutSection from './components/Sections/AboutSection/AboutSection';
import ContactSection from './components/Sections/ContactSection/ContactSection';
import GalleryOverlay from './components/Sections/GalleryOverlay/GalleryOverlay';
import HomeSection from './components/Sections/HomeSection/HomeSection';
import ProcessSection from './components/Sections/ProcessSection/ProcessSection';
import ServicesSection from './components/Sections/ServicesSection/ServicesSection';
import SkillsSection from './components/Sections/SkillsSection/SkillsSection';
import TeamSection from './components/Sections/TeamSection/TeamSection';
import WorkSection from './components/Sections/WorkSection/WorkSection';
import Sides from './components/UI/Sides/Sides';
import Video from './components/UI/Video/Video';

function App() {

  return (
    <>
    <Sides></Sides>
    <Header></Header>
    <Paginator></Paginator>
		<GalleryOverlay></GalleryOverlay>
    <Video></Video>
    <HomeSection></HomeSection>
    <AboutSection></AboutSection>
    <TeamSection></TeamSection>
    <WorkSection></WorkSection>
    <ProcessSection></ProcessSection>
    <SkillsSection></SkillsSection>
    <ContactSection></ContactSection>
    <Footer></Footer>
   </>
      )
  
}

export default App
