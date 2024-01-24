import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './component/01-Home/NavBar';
import Home from './component/01-Home/Home';
import Presentage from './component/03-PresentageDetails/Presentage';
import Pride from './component/02-Pride/Pride';
import Inegradient from './component/04-Inegradient/Inegradient';
import Stomach from './component/05-Stomach/Stomach';
import Explore from './component/06-Explore/Explore';
import { data } from './DataOfTheProject';
import Testmonial from './component/11-Testmonial/Testmonial';
import FreqenQues from './component/07-FreqeneQues/FreqenQues';
import BakerFresh from './component/08-BakerFresh/BakerFresh';
import Subscribe from './component/09-Subscibre/Subscribe';
import Footer from './component/10-Footer/Footer';
import TestmonialData from './component/11-Testmonial/TestmonialData';



function App() {
  const [dataDetails,setDataDetails]=useState(data);
  // setDataDetails(data)
  // console.log(dataDetails);
  // console.log("sdfsfd")
  // useEffect(()=>{

  // },[])


  return (
    <div >
      <NavBar/>
      <Home/>
      <Pride/>
      <Presentage/>
      <Inegradient/>
      <Stomach/>
      <Explore dataDetails={dataDetails}/> 
      {/* <Testmonial/> */}
      {/* <TestmonialData/> */}
      <FreqenQues/>
      <BakerFresh/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
