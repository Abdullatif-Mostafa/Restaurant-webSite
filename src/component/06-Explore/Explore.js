import React from 'react'
import App from '../../App';
import ExploreCard from './ExploreCard';

const Explore = ({dataDetails}) => {
    console.log("asd",dataDetails);
  return (
    <section className='Explore-Sec'>
    <div className='container'>
        <h1 className='Explore-title'>Explore Our Menu</h1>
        <p className='Explore-desc'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam et purus a odio finibus bibendum amet leo.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        <div className='row 'style={{display:"flex" ,justifyContent:"space-between"}}>
         {
            dataDetails.length>0?dataDetails.map((item)=>{
              return(
                <div className='col-md-6 col-lg-3 col-sm-12'>
                <ExploreCard item={item}/>
                </div>
              )
            }):(
                  <div className='row'>
                    <div className='col'>
                    <h1 style={{color:"var(--main-color)",
                        textAlign:"center",
                        marginTop:"20px",
                        marginBottom:"20px",
                        fontSize:"30px",
                        textTransform:"capitalize",
                        margin:"auto",
                        width:"100%"}}>there is no category now please waite some time</h1>
                    </div>
                  </div>)
            
         }
          
         
        </div>
  
     </div>
 </section>
  )
}

export default Explore