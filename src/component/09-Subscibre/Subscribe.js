import React from 'react'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1 className='subscribe-title'>Hurry up! Subscribe our newsletter
                        and get 25% Off
                    </h1>
                    <span className='subscribe-desc'>Limited time offer for this month. No credit card required.</span>
                </div>
                <form className='subscribe-form'>
                    <input type="text" placeholder='Enter your email'/>
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Subscribe