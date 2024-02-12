import React from 'react'
import './Others.css'
import Heart from '../../assets/images/heart.png'

const Others = () => {
  return (
    <div>
        <div className="hart-rate">
            <img src={Heart} alt="" />
            <span>Hart Rate</span><span>116 bpm</span>
          </div>
        
    </div>
  )
}

export default Others