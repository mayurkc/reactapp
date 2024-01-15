import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <>
    <div className="banner " height={500}>
      <video  width="100%" height="800"
     onloadstart="this.playbackRate = 0.1;"  autoPlay loop muted className='position-relative'>
        <source src='6.mp4.webm' type='video/mp4' width="100%" />
      </video>
    </div>
    <div className='text-center position-absolute text-white  left-0 w-100 carousel'data-interval="3000" style={{top:"38%"}}>

      <img src="4.gif" alt="logo"  width={120} className='logorotate1'/>
      {/* <h1> M K </h1> */}
      <h2> Remove Your Fresher Tag </h2>
      <button className="btn btn-primary mx-2">Learn React</button>
      <button className="btn btn-primary mx-2">Learn Java </button>
      
    </div>
    </>
  )
}

export default Banner