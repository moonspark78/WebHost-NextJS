import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import HostingOptions from './HostingOptions/HostingOptions'
import DomainSearch from './DomainSearch/DomainSearch'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <HostingOptions/>
      <DomainSearch/>
    </div>
  )
}

export default Home