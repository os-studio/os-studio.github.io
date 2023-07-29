import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div className='containerContent'>
      <NavBar />
      <MyHome />
      <MyWork />
      <MyAbout />
      <MyContact />
      </div>
    </>
  )
}
function NavBar () {
  return (
    <>
 <nav className="containerNav">
      <div className='os'>_OS</div>
      <div className='buttonNav'><a href="#">Home</a></div>
      <div className='buttonNav'><a href="#">Work</a></div>
      <div className='buttonNav'><a href="#">About</a></div>
      <div className='buttonNav'><a href="#">Contact</a></div>
    </nav>
    </>
  )
}
function MyHome (){
  return(
    <>
      <div className='containerHome'>
        <h1>OCAMPO SANTIAGO</h1>
        <div className='lightGrey'></div>
        <div className='darkGrey'></div>
      </div>
    
    </>
  )
}
function MyWork (){
  return(
    <>
      <div className='containerWork'>
        <h1>Work</h1>
      </div>
    </>
  )
}
function MyAbout (){
  return(
    <>
      <div className='containerAbout'>
        <h1>About</h1>
      </div>
    </>
  )
}
function MyContact (){
  return(
    <>
      <div className='containerContact'>
        <h1>Contact</h1>
      </div>
    </>
  )
}

export default App
