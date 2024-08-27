import { useState } from 'react'
import Header from './components/Header/Header'
import Carousel from './components/Main/Carousel/Carousel'
import Explore from './components/Main/Explore/Explore'

function App() {

  return (
    <>
    <Header></Header>
    <main>
      <Carousel></Carousel>
      <Explore></Explore>
    </main>
    </>
  )
}

export default App
