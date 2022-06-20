import React from 'react'
import './RoadMap.css'
import RoadMap_strip from './RoadMap_strip'
const RoadMap = () => {
  return (
    <>
      <div className="roadmap_header">
        <div className="roadmap_title">
            <p>ROADMAP</p>
        </div>
      </div>
      <div className="roadmap_container">
        <div className="roadmap_item3">
          <div className='roadmap_item3_p'>
            <p>-Our first NFT Summit Event <br />
            -NFT WL-Sale  <br />
            -Marketplace <br />
            -NFT Public-Sale <br /> 
            -First AvaxCars Game Beta Test <br />
            -AvaxCars Upgrade System v.1.0 <br />
            -Chat System Publish <br />
            </p>
           
            <span className='triangle'></span>
            <div className='roadmap_item3_oval_div'>
              <p className='roadmap_item3_p_span'>
                <span className='roadmap_item3_span'>Q3</span>
              </p>
            </div>
          </div>
        </div>
        <div className="roadmap_item1">
         <div className='roadmap_item1_p'>
          <p>
          -3D Drift Mode Publish <br />
           -Metaverse Slot <br />
            -New Events and Big Surprises <br />
             -Governance Beta System

          </p>
          <span className='triangle'></span>
            <div className='roadmap_item1_oval_div'>
              <p className='roadmap_item1_p_span'>
                <span className='roadmap_item1_span'>Q1</span>
              </p>
            </div>
         </div>
        </div>
        
      </div>
      <RoadMap_strip/>
    </>
  )
}

export default RoadMap