import React from 'react'
import Annual from './Annual'

const Section = () => {
    return (
        <div className='sect'>
            <p id="order">Order Summary</p>
            <p id='audio'>You can now listen to millions of songs,<br></br>
            audiobooks, and podcasts on any device<br></br>anywhere
            you like!
            </p>
            <Annual />
            <button className='btn'>Proceed to Payment</button>
            <p className='cancel'>cancel order</p>
            
        </div>
    )
}

export default Section
