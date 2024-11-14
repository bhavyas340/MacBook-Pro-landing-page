import { Canvas } from '@react-three/fiber'
import React from 'react'
import './style.css'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

const App = () => {
  return (
    <div className="w-full h-screen font-['Helvetica_Now_Display']">
    <div className="navbar absolute top-0 left-1/2 -translate-x-1/2">
      {["iPhone","iPad", "services","ios","mac", "products"].map(e=>(
        <a href='' className="text-white font-[500] text-sm "></a>
      ))}
    </div>
    <div className="absolute flex flex-col items-center text-white top-40 left-1/2 -translate-x-1/2 ">
       <h3 className='masked text-7xl tracking-tighter font-[700]'>Macbook pro.</h3>
       <h5>oh so pro !</h5>
       <p className='text-center w-3/4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 150</p>
    </div>
    <Canvas camera={{fov:12, position:[0,-10,220]}}>
    <Environment 
      files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"]}
    />
    <ScrollControls pages={3}>
     <MacContainer/>
    </ScrollControls>
      
    </Canvas>
    </div>
  )
}

export default App
