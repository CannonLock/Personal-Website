import React from "react"
import { Box, useThemeUI } from "theme-ui"
import Layout from "../components/layout/Layout"
import SEO from '../components/seo'
import { Canvas } from '@react-three/fiber'
import { DanceFloor } from "../components/models/tree"

const ThreeJS = () => {

  const { theme } = useThemeUI()

  return (
    <Layout>
      <SEO title={"Home"} description={""} />
      <Box sx={{height: "100vh"}}>
        <Canvas camera={{position: [0,50,90]}}>
          <DanceFloor theme={theme}/>
        </Canvas>
      </Box>
    </Layout>
  )
}

export default ThreeJS;