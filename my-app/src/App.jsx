import { useState } from 'react'
import * as THREE from "three"
import './App.css'
import { Canvas, useFrame, useThree  } from '@react-three/fiber'
import {Environment, useTexture,MeshTransmissionMaterial} from '@react-three/drei'
import { Physics, useSphere } from "@react-three/cannon"
import { EffectComposer, N8AO, SMAA } from "@react-three/postprocessing"
  
  
const rfs = THREE.MathUtils.randFloatSpread
//const sphereGeometry = new THREE.SphereGeometry(.75, 26, 26)
const cubeGeometry = new THREE.BoxGeometry(1.4,1.4,1.4)
const baubleMaterial = new THREE.MeshStandardMaterial({ color: "white", roughness: .35, envMapIntensity: 1 })

function App() {
  

  return (
    <>

      <NavBar />
      <MyHome />
      {/* <MyWork/> */}

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
  function Clump({ mat = new THREE.Matrix4(), vec = new THREE.Vector3(), ...props }) {
      //const texture = useTexture("../src/assets/arrow.png")
    const [ref, api] = useSphere(() => ({ args: [1.25], mass: 1, angularDamping: 0.1, linearDamping: 0.65, position: [rfs(20), rfs(20), rfs(20)] }))
    useFrame((state) => {
      for (let i = 0; i < 48; i++) {
        // Get current whereabouts of the instanced sphere
        ref.current.getMatrixAt(i, mat)
        // Normalize the position and multiply by a negative force.
        // This is enough to drive it towards the center-point.
        api.at(i).applyForce(vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-40).toArray(), [0, 0, 0])
      }
    })
    return <instancedMesh ref={ref} castShadow receiveShadow args={[cubeGeometry,baubleMaterial,48]}>
          <boxGeometry args={[1,1,1,6,6,6]}></boxGeometry>
        
        </instancedMesh>
    
  }
  
  function Pointer() {
    const viewport = useThree((state) => state.viewport)
    const [, api] = useSphere(() => ({ type: "Kinematic", args: [1.7], position: [0, 0, 0] }))
    return useFrame((state) => api.position.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0))
  }
  return(
    <>
    
    <div className='containerCanvas'>
    <Canvas shadows gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }} >
      <ambientLight intensity={0.5} />
      <spotLight intensity={1} angle={0.6} penumbra={1} position={[12, 4, 30]} castShadow shadow-mapSize={[512, 512]} />
      <mesh receiveShadow position={[0,0,-9]}>
        <meshStandardMaterial color={'#B2BABF'} />
      <planeGeometry args={[32,32,1,1]} ></planeGeometry>
      </mesh>
      <Physics gravity={[0, 2, 0]} iterations={10}>
        <Pointer />
        <Clump />
      </Physics>
      <Environment preset="city" />
      <EffectComposer disableNormalPass multisampling={0}>
        {/* <N8AO halfRes color="black" aoRadius={.75} intensity={1.25} aoSamples={4} denoiseSamples={2} /> */}
        <SMAA />
      </EffectComposer>
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
        <div className='workButton'>
          WORK
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
function MyWork (){
  return(
  <>
  <Canvas camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}>
  <ambientLight intensity={0.5} />
  <spotLight intensity={1} angle={0.6} penumbra={1} position={[12, 4, 30]} castShadow shadow-mapSize={[512, 512]} />
  <mesh receiveShadow position={[0,0,-9]}>
        <meshStandardMaterial color={'#B2BABF'} />
      <planeGeometry args={[32,32,1,1]} ></planeGeometry>
      </mesh>
      <Environment preset="city" />
  </Canvas>
  <div className='portfolio'>THIS IS MY WORK</div>
  </>
  )
}


export default App
