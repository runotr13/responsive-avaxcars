import React from 'react'
import './Footer.css'
import footerlogo from '../../assets/header_logo.png'
import instagram from '../../assets/instagram_footer.png'
import twitter from '../../assets/twitter_footer.png'
import telegram from '../../assets/telegram_footer.png'
import discord from '../../assets/discord_footer.png'
import facebook from '../../assets/facebook_footer.png'
const Footer = () => {
  return (
    <div className='Footer_Main_Container'>
           <div className="Container">
           <div className="Footer_logo">
                    <img src={footerlogo} alt="footerlogo" className='footerlogo' />
            </div>
            <div className="Footer_social">
            <img src={instagram} alt="instagram" />
           <img src={twitter} alt="twitter" className='twit'/>
            <img src={telegram} alt="telegram" className='tele'/>
            <img src={discord} alt="discord" className='disc'/>
            <img src={facebook} alt="facebook" /><br />
            <span className='social-line'></span>
            </div>
            <div className="Footer_info">
                <p>ALL RiGHT RESERVED - 2022</p>
            </div>
           </div>
    </div>
  )
}

export default Footer