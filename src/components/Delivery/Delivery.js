import React from 'react'
import ExploreSection from '../ExploreSection/ExploreSection'
import Filters from '../Filters/Filters'
import './Delivery.css'
import DeliveryCollection from './DeliveryCollection/DeliveryCollection'
import TopBrands from './topBrands/TopBrands'
import { restaurants } from '../data/restaurants'

const deliveryFilters=[
  {
    id:1,
    title:"Filters",
    icon: <i className="fi fi-rs-settings-sliders absolute-center"></i>,
  },
  {
    id:2,
    title:"Rating: 4.0+",
  },
  {
    id:3,
    title:"Safe and Hygenic",
  },
  {
    id:4,
    title:"Pure veg"
  },
  {
    id:5,
    title:"Delivery Time",
    icon: <i className="fi fi-rs-apps-sort absolute-center"></i>
  },
  {
    id:6,
    title:"Great Offfers"
  }, 
]

const restaurantList= restaurants;

const Delivery = () => {
  return (
    <div>
    <div className='max-width'>
      <Filters filterList={deliveryFilters}/>
    </div>
      <DeliveryCollection/>
      <TopBrands/>
      <ExploreSection list={restaurantList} collectionName="Delivery Restaurants in Lucknow"/>
    </div>
  )
}

export default Delivery