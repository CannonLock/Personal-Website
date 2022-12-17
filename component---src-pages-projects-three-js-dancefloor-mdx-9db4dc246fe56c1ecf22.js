"use strict";(self.webpackChunklock_dot_com=self.webpackChunklock_dot_com||[]).push([[9475],{27947:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return d}});var o=n(63366),a=(n(67294),n(64983)),r=n(32985),i=n(78951),l=["components"],s={},m={_frontmatter:s},c=r.Z;function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)(c,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.sS,{sx:{width:"100%"},mdxType:"Display"}),(0,a.kt)("h2",null,"Creating the Dance Animation"),(0,a.kt)("p",null,"After spending three hours trying to mesh to wave in a believable way I was not about to try and get it bust a move.\n",(0,a.kt)("a",{parentName:"p",href:"https://www.mixamo.com/#/"},"Adobe Mixamo")," has free to use models and animations, with the animations usable by uploading\nyour own model. So with little to no effort I had a break dancing model."),(0,a.kt)("h4",null,"Importing the Mixamo File"),(0,a.kt)("p",null,"Mixamo files can be downloaded as .fbx or .dae files, which is not the ideal GLTF format that we want. To\nconvert the file into a GLTF I chose to load the FBX file into Blender and re-download as a GLTF."),(0,a.kt)("p",null,"Once downloaded I used the helpers provided by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pmndrs/drei#usefbx"},"react-three-drei")," to load the model and run the animation."),(0,a.kt)("h4",null,"Dancer Component"),(0,a.kt)("p",null,"All of the code can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CannonLock/Personal-Website/blob/master/src/components/models/DanceFloor.jsx"},"DancerFloor.jsx File"),"\n, but I have also included the Dancer Component below. I have removed some code specific to my implementation to make the below more general for all Mixamo models."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'const Dancer = (props) => {\n  const dancer = useRef()\n  const gltf = useGLTF(DancerFile)\n  const {nodes, materials, animations} = gltf\n  const { ref, mixer, names, actions, clips } = useAnimations(animations, dancer)\n\n  useEffect(() => {\n    actions["Armature|mixamo.com|Layer0"].play()\n  });\n\n  return (\n    <group ref={ref} dispose={null}>\n      <primitive object={nodes?.mixamorigHips} />\n      <skinnedMesh\n        geometry={nodes?.Man__Cube004.geometry}\n        skeleton={nodes?.Man__Cube004.skeleton}\n      >\n        <meshStandardMaterial attach={"material"} color={"black"} />\n      </skinnedMesh>\n    </group>\n  )\n}\n')),(0,a.kt)("h2",null,"Links"),(0,a.kt)("p",null,"Below is a list of the various docs, and code pens that I looked at well building this. There is a lot\nof cool things to think about for the future here."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://threejs.org/examples/#webgl_animation_keyframes"},"Initial Three JS Inspiration Examples")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.mixamo.com/#/?genres=Dance&page=1&type=Motion%2CMotionPack"},"Dance Animations from Mixamo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://drei.pmnd.rs/?path=/story/performance-adaptive--adaptive-scene-st"},"React Three Fiber Helper Storybook"))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-projects-three-js-dancefloor-mdx-9db4dc246fe56c1ecf22.js.map