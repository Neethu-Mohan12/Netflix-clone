import React from 'react'
import './App.css'
import {action,originals, trending} from "./urls"
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'

function App() {
 
  return (
    <>
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title="Netflix Originals"/>
     <RowPost url={action} title="Action" isSmall/>
     <RowPost url={trending} title="Trending" isSmall/>
    </>
  )
}

 
export default App
