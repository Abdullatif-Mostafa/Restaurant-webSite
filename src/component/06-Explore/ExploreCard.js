import React from 'react'
import { Card } from 'react-bootstrap/';

const ExploreCard = ({item}) => {
    // console.log("tifa",dataDetails);
  return (
    <div>
         <div className='Explore-card '>
           
            {
                        <Card className='card '  >
                            <Card.Img className='img' variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title className='card-title'>{item.title}</Card.Title>
                                <Card.Text className='card-text'>
                               {item.time}
                                </Card.Text>
                                <div className='card-spans'>
                                    <span>{item.price}</span>
                                    <span>{item.price2}</span>
                                </div>
                                <button className='card-btn'>Order Now</button>
                            </Card.Body>
                        </Card>  
             
           }
            </div>
          
                
            </div>
          
   
  )
}

export default ExploreCard