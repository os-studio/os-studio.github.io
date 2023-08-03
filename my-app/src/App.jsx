import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
  
  

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
        <div className='buttonNav'>TextureSize: {window.innerWidth},{window.innerHeight}</div>

    </nav>
    </>
  )
}
function MyHome (){
  return(
    <>
    <div className='containerCanvas'>
    <Canvas>
          <OrbitControls makeDefault/>
          <ambientLight intensity={0.5} color={'#B2BABF'}/>
        <pointLight position={[3, 2, 0]} intensity={2}/>
          <mesh>
            <boxGeometry />
            <meshStandardMaterial metalness={.2} roughness={.35}/>
          </mesh>
        </Canvas>
    </div>
      <div className='containerHome'>
        <div className='containerSkillsContact'>
        <div className='skills'>SOFTWARE & SKILLS:<br/>
          Blender 3.X,<br/>
          Unreal Engine 4,<br/>
          Virtual Reality,<br/>
          JavaScript,<br/>
          WebGL,<br/>
          TouchDesigner,<br/>
          React-Three-fiber
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
