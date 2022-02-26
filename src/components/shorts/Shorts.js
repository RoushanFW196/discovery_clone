import React from 'react'
import "./shorts.css"
import My_img from './myImg.PNG'
import Short_video from './short_video/Short_video.js'

function Shorts() {
  return (
    <div id="shorts-main">
      <div id="short-left-main">
          <h3 id="shorts-left-first-h3">Categories wise</h3>
          <p className="shorts-left"><a  href="">All</a></p>
          <p className="shorts-left"><a  href="">Adventure</a></p>
          <p className="shorts-left"><a  href="">Food</a></p>
          <p className="shorts-left"><a  href="">Science</a></p>
          <p className="shorts-left"><a  href="">Animals</a></p>
          <p className="shorts-left"><a  href="">Lifestyle</a></p>
      </div>
      <div>
          <Short_video/>
        
      </div>
      <div>
          <img src={My_img} alt="" />
      </div>
    </div>
  )
}

export default Shorts
