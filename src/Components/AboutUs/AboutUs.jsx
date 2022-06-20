import React from 'react'
import './AboutUs.css'
import Görsel from '../../assets/Görsel.png'
import Group18 from '../../assets/Group18.png'
import RoadMap from '../RoadMap/RoadMap'
const AboutUs = () => {
  return (
<div className="background_about_div">
    <div className="AboutUsMainContainer">  
        <div className='AboutUs-Container'> 
            <div className="aboutus-item1">  
                <div className='gameplay'>
                    <li>GAME PLAY</li>
                </div>
                <div className='story'>
                        <li>STORY</li>
                </div>
               <div className="aboutus">
                    <p>ABOUT US</p>
               </div>
            </div>
            <div className="aboutus-item2">
                    <img src={Görsel} alt="Görsel" className='Görsel_item2'/>
            </div>
            <div className="aboutus-item3">
               
                <p className='aboutus-item3-child-top'>ABOUT US AVAXCARS</p>
                <p className='aboutus-item3-child-bottom'>ABOUT US AVAXCARS</p>
               
                
                
            </div>
            <div className="aboutus-item4">
                    <p>Contrary to popular belief.We can actually do something amazing for you !</p>
                    <span></span>
                    <p>What can we say about us, well we basically are a creative agency with over 10 years of experience in design and video production, and we are the ones who create da funky stuff.</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className='Group18_img_div'>
                    <img src={Group18} alt="Group18" />
                    <li></li>
                    </div>
            </div>

        </div>
    </div>
    <RoadMap/>
</div>
  )
}

export default AboutUs