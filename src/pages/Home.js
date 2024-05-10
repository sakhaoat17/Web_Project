import React from 'react'
import NavBar from '../navbar'
import SecondNav from '../component/SecondNav'
import HomeMain from '../component/HomeMain'
import Recent from './RecentBoat'
import Footter from '../component/footer'
export default function Home() {
  return (
    <div>
  <SecondNav/>
  <HomeMain />
  <Recent/>
  <Footter/>
    </div>
  )
}
