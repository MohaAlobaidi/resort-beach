import React from 'react'
import Hero from './../component/Hero'
import Banner from "./../component/Banner"
import {Link} from 'react-router-dom'
import Services from './../component/Services'
import FeaturedRooms from './../component/FeaturedRooms'
export default function Home() {
  return (
    <React.Fragment>
    <Hero hero="defaultHero">
      <Banner title="luxurios rooms" subtitle="deluxe rooms staring at $266">

  <Link to="/rooms" className="btn-primary"> our rooms</Link>

      </Banner>
    </Hero>
      <Services/>
     <FeaturedRooms/>
    </React.Fragment>
  )
}
