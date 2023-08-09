import image  from './assets/contact1.jpg';
import mountain from "./assets/moutain.jpg"
import "./Desitination.css"
import DesitinationData from './DestinationData';
import image5 from "./assets/img5.jpg"
import image6 from "./assets/img6.jpg"

const Destination = () => {
 return(
    <>
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>"Life is either a daring adventure or nothing at all.”</p>
        <DesitinationData 
        className="first-_des"
        heading="Western Ghats"
        text="The range is known as Sahyadri in Maharashtra and Karnataka. The Western Ghats meet the Eastern Ghats at the Nilgiri mountains in northwestern Tamil Nadu. The Nilgiris connect the Biligiriranga Hills in southeastern Karnataka with the Shevaroys and Tirumala hills."
        img1={image}
        img2={mountain}
        />
        <DesitinationData   
        className="first-_des-reverse"
        heading="The Snowy Mountains"
        text="
        The Snowy Mountains, known informally asThe Snowies is an IBRA subregion in southern New South Wales, Australia, and is the tallest mountain range in mainland Australia, being part of the continent's Great Dividing Range cordillera system"
        img1={image5}
        img2={image6}
        />
        
        
    </div>
    </>
 )
}
export default Destination