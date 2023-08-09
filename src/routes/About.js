import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import AboutImg from "../components/assets/about.jpg"
import Footer from "../components/Footer";
import AboutInfo from "../components/Aboutinfo";
function About(){
  return (
    <>
      <Navbar/>
        <Hero 
          cName="mid"
          heroImg={AboutImg}
          title="About"
          btnClass="hide"
          />
        <AboutInfo/>
        <Footer/>
        
    </>
  );
}
export default About;