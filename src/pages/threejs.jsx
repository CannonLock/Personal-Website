import React, { useRef, useState, Suspense } from "react"
import { Grid, Box, Paragraph, Heading, Image } from "theme-ui"
import Layout from "../components/layout/Layout"
import SEO from '../components/seo'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Ground, Tree, Boxe, Light } from "../components/models/tree"


const ThreeJS = () => {
  return (
    <Layout>
      <SEO title={"Home"} description={""} />
      <Box sx={{height: "100vh"}}>
        <Canvas shadows colorManagement >
          <Light/>
          <Ground receiveShadow/>
          <OrbitControls/>
        </Canvas>
      </Box>
    </Layout>
  )
}

export default ThreeJS;