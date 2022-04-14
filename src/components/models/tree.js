import React, { useRef } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { Plane,  Box, Sphere, useHelper } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DirectionalLightHelper, CameraHelper } from "three"
import TreeFile from "../../static/models/Oak_Tree.gltf"

const Tree = (props) => {
  const ref = useRef()
  const { nodes, materials, scene } = useLoader(GLTFLoader, TreeFile)

  useFrame((state, delta) => {
    console.log(ref)


    return ref
  })

  return (
    <primitive castShadow receiveShadow {...props} ref={ref} object={scene} />
  )
}

const Ground = (props) => {
  const ref = useRef()

  useFrame((state, delta) => {
    console.log(ref)

    return ref
  })

  return (
    <group>
      <Plane receiveShadow {...props} ref={ref} rotation={[-2,0,0]} position={[0,-17.5,0]} args={[1000,1000]}>
        <meshPhongMaterial color="green" />
      </Plane>
      <Box receiveShadow castShadow {...props} ref={ref} rotation={[-2,0,0]} position={[-2,-2,0]} args={[1,1,1]}>
        <meshBasicMaterial color={"black"}/>
      </Box>
      <Tree/>
    </group>

  )

}

const Boxe = (props) => {
  const ref = useRef()

  useFrame((state, delta) => {
    console.log(ref)

    return ref
  })

  return (
    <Box/>
  )

}

const Light = () => {
  const ref = useRef()
  useHelper(ref, DirectionalLightHelper, .5, "hotpink")

  return (
      <directionalLight
        ref={ref}
        intensity={0.6}
        position={[0, 10, 0]}
        shadow-mapSize-width={4000}
        shadow-mapSize-height={4000}
        castShadow
      />
  )
}



export { Tree, Ground, Boxe, Light }