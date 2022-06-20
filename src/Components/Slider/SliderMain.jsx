import React from 'react'
import path_left from '../../assets/path_left.png'
import path_right from '../../assets/path_right.png'
import './SliderMain.css'
import SliderFooter from './SliderFooter'
const SliderMain = () => {
  return (
    <>
    <div className="wrapper d-flex justify-content-between">
        <div className="wrapper_item1">

            <div className="item1_left">
                <p>Full immersion</p>
                <p className='degree'>360-degree vision</p>
            </div>

            <span className="wrapper_span"></span>

            <div className="item1_right">
                <p>Watch as a living, breathing game world comes alive all around you,with a seamless field of view wherever you turn.</p>
                <p><img src={path_left} alt="path_left}" /> <img src={path_right} alt="path_right" /></p>
            </div>
        </div>


        <div className="wrapper_item2">
                <span className="span_left"></span>
                <p>READ WHITEPAPER</p>
                <span className="span_right"></span> 
        </div>
    </div>
    <SliderFooter/>
    </>
  )
}

export default SliderMain