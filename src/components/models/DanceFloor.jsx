/** @jsxImportSource theme-ui */
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { SpotLight, useHelper, RoundedBox, useGLTF, useAnimations } from '@react-three/drei'
import { PointLightHelper, CameraHelper, AudioListener, AudioLoader } from "three"
import Beats from "../../static/sounds/Website_Beats_0.mp3"
import DancerFile from "../../static/models/TakingdrakeDancing.gltf"
import { useThemeUI, Box } from "theme-ui"

const Dancer = () => {
  const dancer = useRef()
  const gltf = useGLTF(DancerFile)
  const {nodes,  animations} = gltf
  const { ref, actions } = useAnimations(animations, dancer)

  useEffect(() => {
    actions["Armature|mixamo.com|Layer0"].play()
  });

  return (
    <group ref={ref} dispose={null} position={[0,.5,5]} rotation={[Math.PI / 2, 0, 0]} scale={4}>
      <primitive object={nodes?.mixamorigHips} />
      <skinnedMesh
        scale={1000}
        geometry={nodes?.Man__Cube004.geometry}
        skeleton={nodes?.Man__Cube004.skeleton}
      >
        <meshStandardMaterial attach={"material"} color={"black"} />
      </skinnedMesh>
    </group>
  )
}

const Sound = (props) => {
  const sound = useRef()
  const { camera } = useThree()
  const [listener] = useState(() => new AudioListener())
  const buffer = useLoader(AudioLoader, Beats)
  const { clicked } = props

  const [volume, setVolume] = useState(1)

  useEffect(() => {
    sound.current.setBuffer(buffer)
    sound.current.setVolume(volume)
    sound.current.setLoop(true)
    sound.current.play()
    camera.add(listener)
  }, [clicked])
  return <audio ref={sound} args={[listener]} />
}

const StageLight = (props) => {

  const [color, setColor] = useState()

  const { theme } = props
  const colors = [...Object.values(theme.rawColors)].filter(color => typeof color == "string")

  useFrame(() => {

    if(Math.random() > .95){
      setColor(colors[Math.floor(Math.random()*colors.length)])
    }
  })

  return (
    <SpotLight
      castShadow
      position={[50,90,90]}
      color={color}
      intensity={1}
      angle={.25}
      attenuation={10}
      anglePower={5}
      power={50}
      distance={1000}
      {...props}
    />
  )
}

const Lighting = (props) => {
  const ref = useRef()
  useHelper(ref, PointLightHelper, .5, "hotpink")

  return (
    <group ref={ref}>
      <StageLight
        {...props}
      />
      <StageLight
        {...props}
        position={[-50,90,90]}
      />
      <pointLight
        intensity={1}
        position={[0, 30, 0]}
        shadow-mapSize-width={168000}
        shadow-mapSize-height={8000}
        shadow-radius={8}
        castShadow
      />
    </group>

  )
}

const LightTile = (props) => {
  const ref = useRef()

  const [color, setColor] = useState()

  const { theme } = props

  const colors = [...Object.values(theme.rawColors)].filter(color => typeof color == "string")

  useFrame(() => {
    if(Math.random() > .99){
      setColor(colors[Math.floor(Math.random()*colors.length)])
    }
  })

  return (
    <RoundedBox recieveShadow {...props} ref={ref} args={[10,1,10]}>
      <meshStandardMaterial color={color}  metalness={1}/>
    </RoundedBox>
  )
}

const DanceFloor = ({theme}) => {
  const ref = useRef()
  const [clicked, setClicked] = useState(false)

  let tileLocations = [...Array(9).keys()].flatMap(x => [...Array(9).keys()].map(y => [-44 + (x*11),0,-44 + (y*11)]))

  useFrame(() => {
    ref.current.rotation.y += .002
  })

  return (
    <group ref={ref} onClick={() => setClicked(true)}>
      <Lighting theme={theme}/>
      <Sound clicked={clicked}/>
      <Dancer/>
      <RoundedBox recieveShadow args={[100,2,100]} position={[0,-1,0]} radius={.2}>
        <meshStandardMaterial color={"black"}  metalness={1}/>
      </RoundedBox>
      {tileLocations.map(x =>
        <LightTile position={x} theme={theme}/>
      )}
    </group>
  )
}

const Display = () => {

  const { theme } = useThemeUI()

  return (
    <Box sx={{height:"50vh"}}>
      <Canvas camera={{position: [0,50,90]}}>
        <DanceFloor theme={theme}/>
      </Canvas>
    </Box>
  )
}

export { Lighting, DanceFloor, LightTile, Sound, Display }