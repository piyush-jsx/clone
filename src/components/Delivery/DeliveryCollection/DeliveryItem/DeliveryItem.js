import React from 'react'
import './DeliveryItem.css'

const DeliveryItem = ({item}) => {
  return (
    <>
    <div className='delivery-item-cover cur-po'>
        <img src={item.cover} className='delivery-item-image ' alt={item.title} />
    </div>
    <div className='delivery-item-title'>{item.title}</div>
    </>
  )
}

export default DeliveryItem