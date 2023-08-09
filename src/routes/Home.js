import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import Destination from "../components/Destination";
import AboutImg from "../components/assets/home.jpg"
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home(){
  return(
    <>
        <Navbar/>
        <Hero 
          cName="hero"
          heroImg={AboutImg}
          title="You Select We Decide !!"
          text="Choose Your Favorite Destination"
          buttonText="Travel Plan"
          url='/'
          btnClass="show"
          />
        <Destination/>
        <Trip/>
        <Footer/>
    </>
  );
}
export default Home;