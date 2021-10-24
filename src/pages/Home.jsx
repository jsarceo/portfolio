import React from 'react'
import Navbar from '../components/Navbar'
import Promo from '../components/Promo'
import Slider from '../components/Slider'


const Home = () => {
    return (
        <div>
            <Promo />
            <Navbar />
            <Slider />
        </div>
    )
}

export default Home