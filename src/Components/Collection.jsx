import { faCaretDown, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "..//Styles/Collection.scss"
export default function Collection() {
  
  return (
    <div className='collection'>
       <div className="collection-wrapper">
        <div className="left-box">
          <div className="input-group">
            <input type="text" placeholder='Search here' />
            <div className="search" >
              <img src="Images/icons8-search-24.png" alt="" />
             
            </div>
          </div>
          <div className="btn-dropdown">
            <button>
              <span>Collection</span>
              <FontAwesomeIcon
                 
                  icon={faCaretRight}
                  style={{ color: "#FFD43B" }}
                />
            </button>
            <div className="collection">
              <span>Spring collection</span>
              <span>Summer collection</span>
              <span>Winter collection</span>
              <span>Autumn collection</span>
            </div>
          </div>
        </div>
        <div className="right-box"></div>
       </div>
    </div>
  )
}
