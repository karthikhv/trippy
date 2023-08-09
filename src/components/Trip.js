import "./Trip.css"
import TripData from "./TripData";
import trip1 from"./assets/img9.jpg"
import trip2 from"./assets/jog.jpg"
import trip3 from "./assets/mull.jpg"
function Trip(){
  return(
    <>
    <div className="trip">
      <h1>Recent Trips</h1>
        <p>You can discover unique destination using Google Maps.</p>
        <div className="tripcard">
          <TripData 
              image={trip1}
              heading="Trip to Alaska"
              text="Alaska is a U.S. state on the northwest extremity of North America. A semi-exclave of the U.S., it borders British Columbia and Yukon in Canada to the east, and it shares a western maritime border in the Bering Strait with Russia's Chukotka Autonomous Okrug."
              />
              <TripData 
              image={trip2}
              heading="Trip to Jog Falls"
              text="Jog Falls are unique as the water does not stream down the rocks in a tiered fashion; it thunders down the slope losing contact with the rocks, making it the tallest un-tiered waterfall in India. The beauty of the waterfalls is enhanced by the lush green surroundings, which provide a scenic backdrop.."
              />
              <TripData 
              image={trip3}
              heading="Trip to Chikmangalore"
              text="Mullayyanagiri is the highest peak in Karnataka, India. Mullayyanagiri is located in the Chandra Dhrona Hill Ranges of the Western Ghats of Chikkamagaluru Taluk. With a height of 1,925 metres (6,316 ft), it is the highest peak in Karnataka and also the 23rd highest peak in Western Ghats.[1] The summit of Mullayanagiri has a small temple and houses a police radio relay station. Seethalayyanagiri is a prominent peak which is adjacent to this place."
              />
        </div>
    </div>
    </>
  )
}
export default Trip;