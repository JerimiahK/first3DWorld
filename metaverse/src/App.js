import { Canvas } from "@react-three/fiber";
import "aframe";
import "aframe-extras.animation-mixer";
import * as THREE from "three";
import sky from "./assets/metaversesky.jpeg";
import sunSky from "./assets/sunny.jpeg";
import scene from "./models/greenScene.glb";
import donut from  "./models/the_great_morpheus.glb";
import douglas from "./models/Mutant.gltf";




export default function App() {

  return (
    // <a-scene>
    //   <a-assets>
    //     <img id="sky" src={sunSky} />
    //   </a-assets>
    //   <a-sky color="#FFFFFF" material="src: #sky" rotation="0 0 0"></a-sky>
    //   <a-entity gltf-model={scene} scale="1 1 1" position="0 -7 0"></a-entity>
    //   <a-entity
    //     gltf-model={donut}
    //     scale="1 1 1"
    //     position="0 0.5 0"
    //     animation-mixer="clip: Animation"
    //   ></a-entity>
    //   <a-entity
    //     gltf-model={douglas}
    //     scale=".008 .008 .008"
    //     position="0 0 0"
    //     // animation-mixer="clip: Walking"
    //   ></a-entity>
    // </a-scene>
    <Canvas>

    </Canvas>
  );
}
