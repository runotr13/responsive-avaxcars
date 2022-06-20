import React from 'react'
import './Team.css'
import left from '../../assets/Left.png'
import right from '../../assets/Right.png'
import Rectangle_user from '../../assets/Rectangle_user.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import Footer from '../Footer/Footer'
const Team = () => {
  return (

<div className="Team_Main_Container">
    <div className="Team_header">
          <div className="Team_title">
              <p>Team</p>
          </div>
    </div>
    <div className="Team_user_Main_Container">
        <div className="Team_user_Container">
            <div className="left">
                <img src={left} alt="left" />
            </div>
            <div className="middle">
                  <div className="middle_user_container1">
                          <div className="middle_user">
                              <img src={Rectangle_user} alt="Rectangle_user" className='Rectangle_user'/>
                              <span className='wrapper_spans'></span>
                            <div className='middle_user_info'>
                                <p>FATIH GOKTUG</p>
                                <p>TURKES</p>
                                <p className='artDırector'>ART DIRECTOR</p>
                                <div className='socaial_paths'>
                                  <img src={instagram} alt="instagram" />
                                  <img src={facebook} alt="facebook" />
                                  <img src={twitter} alt="twitter" />
                                </div>
                            </div>
                          </div>
                  </div>
                  <div className="middle_user_container2">
                          <div className="middle_user">
                              <img src={Rectangle_user} alt="Rectangle_user" className='Rectangle_user' />
                              <span className='wrapper_spans'></span>
                            <div className='middle_user_info2'>
                                <p>FATIH GOKTUG</p>
                                <p>TURKES</p>
                                <p className='artDırector'>ART DIRECTOR</p>
                                <div className='socaial_paths'>
                                  <img src={instagram} alt="instagram" />
                                  <img src={facebook} alt="facebook" />
                                  <img src={twitter} alt="twitter" />
                                </div>
                            </div>
                          </div>
                  </div>
                  <div className="middle_user_container3">
                          <div className="middle_user">
                              <img src={Rectangle_user} alt="Rectangle_user" className='Rectangle_user'/>
                              <span className='wrapper_spans'></span>
                            <div className='middle_user_info'>
                                <p>FATIH GOKTUG</p>
                                <p>TURKES</p>
                                <p className='artDırector'>ART DIRECTOR</p>
                                <div className='socaial_paths'>
                                  <img src={instagram} alt="instagram" />
                                  <img src={facebook} alt="facebook" />
                                  <img src={twitter} alt="twitter" />
                                </div>
                            </div>
                          </div>
                  </div>
                  
            </div>
            <div className="right">
            <img src={right} alt="right" />
            </div>
        </div>
    </div>
    <Footer/>
</div>

  )
}

export default Team