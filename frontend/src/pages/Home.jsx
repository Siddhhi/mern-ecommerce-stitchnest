import React from 'react'
import Hero from '../components/hero'
import Latestcollection from '../components/Latestcollection'
import BestSeller from '../components/BestSeller'
import Ourpolicy from '../components/Ourpolicy'
import Newsletter from '../components/Newsletter'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Latestcollection/>
      <BestSeller/>
      <Ourpolicy/>
      <Newsletter/>
    </div>
  )
}

export default Home
