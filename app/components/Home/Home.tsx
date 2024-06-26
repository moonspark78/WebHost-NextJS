import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import HostingOptions from './HostingOptions/HostingOptions'
import DomainSearch from './DomainSearch/DomainSearch'
import Feature from './Feature/Feature'
import Price from './Price/Price'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <HostingOptions/>
      <DomainSearch/>
      <Feature/>
      <Price/>
    </div>
  )
}

export default Home