import "./Footer.css"

const Footer = () =>{
  return(
    
      <div className="footer">
        <div className="top">
          <div>
            <h1>Trippy</h1>
            <p>Choose Your Favourite Destination</p>
          </div>
          <div>
            <a href="/">
            <i className="fa-brands fa-facebook-square"/>
            </a>
            <a href="/">
            <i className="fa-brands fa-instagram-square"/>
            </a>
            <a href="/">
            <i className="fa-brands fa-twitter-square"/>
            </a>
            <a href="/">
            <i className="fa-brands fa-snapchat-square"/>
            </a>
          </div>
          <div className="bottom">
            <div>
              <h4>Heading</h4>
              <a href="/">Changelog</a>
              <a href="/">Status</a>
              <a href="/">License</a>
              <a href="/">All Versions</a>
            </div>
            <div>
            <h4>Community</h4>
              <a href="/">Github</a>
              <a href="/">Complaint</a>
              <a href="/">Project</a>
              <a href="/">Feeds</a>
            </div>
            <div>
            <h4>Help</h4>
              <a href="/">Support</a>
              <a href="/">Trouble Shooting</a>
              <a href="/">Contact us</a>
              
            </div>
            <div>
            <h4>Others</h4>
              <a href="/">Terms of Service</a>
              <a href="/">Privacy Policy</a>
              <a href="/">Licenses</a>
            </div>
          </div>
          
        </div>
      </div>
  )
}
export default  Footer;