import React from 'react'
import './Plans.css'
import {plansData} from '../../assets/data/plansData'
import whiteTick from '../../assets/images/whiteTick.png'

const Plans = () => {
  return (
    <div className="plans-cointainer">
        <div className="programs-header" id='plan-header'>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>

        {/* plans card */}
        <div className="plans">
            {plansData.map((plan, i)=>(
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((features, i)=>(
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span key={i}>{features}</span>
                        </div>
                    ))}
                    </div>

                    <div>
                        <span>See more benifits -</span>
                    </div>
                    <button className="btn plain-btn">Join Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans