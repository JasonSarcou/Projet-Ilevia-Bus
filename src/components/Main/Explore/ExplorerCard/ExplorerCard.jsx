import React from 'react'
import "./ExplorerCard.css"
import { IoIosArrowDroprightCircle } from "react-icons/io";

function ExplorerCard(props) {
  return (
    <div className='card-container'>
      <a href={props.link}>
        <div className="image-card-container">
          <img src={props.image} alt=""/>
        </div>
        <div className="card-content"> 
          <div className="card-description">
              <p className='card-titre'>{props.titre}</p>
              <p className='card-text'>{props.description}</p>
          </div>
          <div className="card-bottom">
                  {props.bottomText}
                  <IoIosArrowDroprightCircle />
          </div>
        </div>
      </a>
    </div>
    )
}

export default ExplorerCard
