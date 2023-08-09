import "./contactform.css"
const Contactform = () =>{
  const handlesubmit=()=>{
    alert("Message received")
  }
  return(
    <div className="from-container">
      <h1>Send Message to US!</h1>
      <form >
        <input  placeholder="enter your name" />
        <input  placeholder="enter your mail-id" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" id="" cols="30" rows="10"></textarea>
        <button className="butt" onClick={handlesubmit}>Send </button>
      </form>
    </div>
  )
}
export default Contactform;