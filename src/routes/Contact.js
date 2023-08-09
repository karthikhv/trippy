import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import AboutImg from "../components/assets/img8.jpg"
import Footer from "../components/Footer";
import Contactform from "../components/contactform";
function Contact(){
  return (
    <>
      <Navbar/>
        <Hero 
          cName="mid"
          heroImg={AboutImg}
          title="Contact"
          btnClass="hide"
          />
      <Contactform/>
      <Footer/>
    </>
  )
}
export default Contact;