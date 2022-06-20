import React from 'react'
import strip from '../../assets/Yol.png'
import serit from '../../assets/Şeritler.png'
import killoxs from '../../assets/killoxs.png'
import './RoadMap_strip.css'
const RoadMap_strip = () => {
  return (
    <>
<div className="RoadMap_strip_main_container">
          <img src={killoxs} alt="" className='killoxsImage'/>
  <div className='container_RoadMap'>
      <div className="strip">
            <img src={strip} alt="strip" className='stripImage' />
            
      </div>
      
      <div className='serit'>
            <img src={serit} alt="serit" className='seritImage' />
      </div>
  </div>
    <div className="RoadMap_Bottom">
      <div className="roadmap_item2">
          <div className='roadmap_item2_p'>
            <p>-Core Team Assemble <br />
            -First Roadmap  
            </p>
           
            <span className='triangle'></span>
            <div className='roadmap_item2_oval_div'>
              <p className='roadmap_item2_p_span'>
                <span className='roadmap_item2_span'>Q2</span>
              </p>
            </div>
          </div>
        </div>
        <div className="roadmap_item4">
          <div className='roadmap_item4_p'>
          <p>-Token Private Sale <br />
            -Public IGO  <br />
            -AvaxCars Game Release <br />
            -Team System Publish <br /> 
            -AvaxCars Upgrade v.2.0 
            </p>
           
            <span className='triangle'></span>
            <div className='roadmap_item4_oval_div'>
              <p className='roadmap_item4_p_span'>
                <span className='roadmap_item4_span'>Q4</span>
              </p>
            </div>
          </div>
        </div>
        <div className="roadmap_item2_right">
          <div className='roadmap_item2_p_right'>
            <p>-Decentralized Autonomous Organization (DAO) System<br />
            -New Chain Integration for METARACE  
            </p>
           
            <span className='triangle'></span>
            <div className='roadmap_item2_oval_div_right'>
              <p className='roadmap_item2_p_span_right'>
                <span className='roadmap_item2_span_right'>Q2</span>
              </p>
            </div>
          </div>
        </div>
    </div>
   
</div>
</>
  )
}

export default RoadMap_strip