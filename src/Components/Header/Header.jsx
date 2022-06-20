import React from 'react'
import header_logo from '../../assets/header_logo.png'
import './Header.css'
import SliderHeader from '../Slider/SliderHeader'
// import image from '../../assets/Slider_Background.png'
const Header = () => {
    
  return (
<div className='background_header_slider'>
<nav class="navbar navbar-expand-lg navbar-dark ">
  <div class="container-fluid">
  <a href="https://www.linkedin.com/company/digitechas/?originalSubdomain=tr" className="nav-link" target="_blank">
  <img src={header_logo} alt="header_logo" />
  </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav flex-grow-1">
        </ul>
        <ul class="navbar-nav header_right ">
        <li class="nav-item">
          <a className="nav-link text-light" href="#"><span>HO</span>ME</a>
        </li>
        <li class="nav-item">
          <a className="nav-link text-light" href="#">CARS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">RACELIST</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#" >WHITEPAPER</a>
        </li>
        <li class="nav-item header_right_start_li">
          <a class="nav-link text-light header_right_start" href="#" >START</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<SliderHeader/>
    </div>
  )
}

export default Header