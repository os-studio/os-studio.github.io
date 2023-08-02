import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div className='containerContent'>
      <NavBar />
      <MyHome />
      </div>
    </>
  )
}
function NavBar () {
  return (
    <>
 <nav className="containerNav">
      <div className='os'>OS</div>
      <div className='buttonNav'>[version 1.0]</div>
      <div className='buttonNav'>TextureSize: 1440,1024</div>

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


export default App
