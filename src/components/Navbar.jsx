import React from 'react'

const style = {
  nav: {
    backgroundColor: "#e6c400",
    boxShadow: "0px 2px 25px 1px rgba(0,0,0,0.45)"

  },
  restartButton: {
    fontFamily: "sSharp"
  },
  h1: {
    fontFamily: "sSharp",
    fontSize: "100px",
    fontWeight: 500

  }

}

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light" style={style.nav}>
        {/* <button className="btn btn-secondary" style={style.restartButton}>Restart</button> */}
        <span style={style.h1}>Z-O-LITE</span>
        <span>Click the images to get points but clicking an image twice will reset.</span>
        <p><span><a href="https://www.explainthatstuff.com/zeolites.html" target="_blank">Click here to learn more!</a></span></p>

      </nav>
    </div>
  )
}

export default Navbar
