import React from 'react'
import music from '../../assets/Music.png'
import Group_play from '../../assets/Group 10.png'
import social from '../../assets/Social.png'
import './SliderHeader.css'
import SliderMain from './SliderMain'
const SliderHeader = () => {
  return (
    <>
    <div class="container ">
  <div class="row containers d-flex justify-content-between ">
      <div class="col">
      <div className="">
              <img src={music} alt="music" />
          </div>
      </div>
    <div class="col-10 item2">
    <p className='item2_change'>Change your life and</p>
            <p className='item2_live'>Live the Game</p>
              <div className='item2_child'>
                <img src={Group_play} alt="Group_play" className='Group_play'/>
                <p>WATCH<br />TRAILER</p>
              </div>
    </div>
    <div class="col item3">
    <img src={social} alt="social" className='social' />
    </div>
  </div>
</div>
<SliderMain/>
</>
  )
}

export default SliderHeader

