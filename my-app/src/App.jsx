import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>

      <NavBar />
      <MyHome />

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
        <div className='containerSkillsContact'>
        <div className='skills'>SFOTWARE & SKILLS:<br/>
          Blender 3.X,<br/>
          Unreal Engine 4,<br/>
          Virtual Reality,<br/>
          JavaScript,<br/>
          WebGL,<br/>
          TOUCH DESIGNER,<br/>
          REACT-Three-fiber
        </div>
        <div className='contact'>CONTACT:<br/>
            santiago.ocampomail@gmail.com,<br/>
            @santiagoocampo
        </div>
        </div>
        <div className='containerName'>
        <div>SANTIAGO OCAMPO</div>
        <div className='containerPathLoc'>
          Visual Artist, 3D Generalist, Creative Coder<br/>
Buenos aires, CABA, Argentina</div>
        </div>
        
      </div>
    
    </>
  )
}


export default App
