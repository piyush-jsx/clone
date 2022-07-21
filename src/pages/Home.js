import React, { useState } from 'react'
import Delivery from '../components/Delivery/Delivery';
import Footer from '../components/Footer/Footer'
import Header from './../components/Header/Header'
import TabOptions from './../components/tabOptions/TabOptions'
import DiningOut from './../components/DiningOut/DiningOut'
import NightLife from './../components/NightLife/NightLife'




const Home = () => {
    const [activeTab,setActiveTab] = useState("Delivery")
  return (
    <>
   <Header/>
   <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
   {getCorrectScreen(activeTab)}
   <Footer/>
   </>
  )
}
const getCorrectScreen = (activetab)=>{
    switch(activetab){
        case "Delivery":
            return <Delivery />;
        case "Dining Out":
            return <DiningOut/>;
        case "NightLife":
            return <NightLife/>;
        default: <Delivery/>
    }
}

export default Home