import React from 'react'

const Stomach = () => {
  return (
    <div>
    <div className='stomach ovelay'>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1 className='stomach-title'>
                         When a man's stomach is full it makes no
                         difference whether he is rich or poor.
                    </h1>
                    <p className='stomach-desc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam et purus a odio finibus bibendum amet leo.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className='stomach-video'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                    </svg>
                    <span>Watch Our Video</span>
                    </div>
                </div>
            </div>
       
        </div>
        
    </div>

     
   </div>
    
  )
}

export default Stomach