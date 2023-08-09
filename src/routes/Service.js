import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import AboutImg from "../components/assets/service.jpg"
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service(){
  return (
    <>
    <Navbar/>
      <Hero 
        cName="mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
        />
        <Trip/>
    <Footer/>
  </>
    
  )
}
export default Service;