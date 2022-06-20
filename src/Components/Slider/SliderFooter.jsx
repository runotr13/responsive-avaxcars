import React from 'react'
import './SliderFooter.css'
import Slider_alt_background from '../../assets/slider_alt_background.png'
const SliderFooter = () => {
  return (
    <div className='slider_footer'>
      <div className='VIRTUAL-REALITY-EXPERIENCE'>
        <p>VIRTUAL-REALITY-EXPERIENCE</p>
      </div>
      <img src={Slider_alt_background} alt="Slider_alt_background" className='Slider_alt_background'/>
    </div>
  )
}

export default SliderFooter