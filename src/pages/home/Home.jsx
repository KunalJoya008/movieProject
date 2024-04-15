import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'
import TopRated from './topRated/TopRated'
import HeadImgs from './headImgs/HeadImgs'
import Header from './header/Header'
import Footer from './footer/Footer'

const Home = () => {
  return (
    <div className="homePage">
        <Header className="mb-5 "/>
        <HeadImgs className=""/>
        {/* <HeroBanner /> */}
      <Trending className="mt-20"/>
      <TopRated className="mt-5" />
      <Footer/>
    </div>
  )
}

export default Home
