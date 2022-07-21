import React from 'react'
import zomato from './../../images/Zomatoo.png'
import './Header.css'


const Header = () => {
  return (
    <>
    <div className='max-width header'>
      <img src={zomato} alt="zomato-logo" className='header-logo' />
    <div className="header-right">
      <div className="header-location-search-container">
        <div className="location-wrapper">
          <div className="location-icon-name">
            <i className="fi fi-rs-marker absolute-center location-icon"></i>
            <div>Lucknow</div>
          </div>
          <i className="fi fi-rs-caret-down absolute-center"></i>
        </div>
        <div className="location-search-separator"></div>
        <div className="header-searchbar">
        <i className="fi fi-rs-search absolute-center search-icon"></i>
        <input placeholder='Search for restaurants, cuisine or a dish' className='search-input'/>
        </div> 
      </div>
      <div className="profile-wrapper">
        <img src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="profile" 
        className='header-profile-image'/>
        <span className='header-username'>Piyush</span>
        <i className="fi fi-rs-angle-small-down absolute-center profile-options-icons"></i>
      </div>
    </div>
    </div>
    </>
  )
}

export default Header