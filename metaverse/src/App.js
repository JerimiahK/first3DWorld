// -----AFrame Imports-----
import "aframe";
import "aframe-extras.animation-mixer";
// -----Three.js Imports-----
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// -----JPEG Imports-----
import sky from "./assets/metaversesky.jpeg";
import sunSky from "./assets/sunny.jpeg";
// -----Model Imports-----
import scene from "./models/greenScene.glb";
import donut from "./models/the_great_morpheus.glb";
import drone from "./models/buster_drone.glb";
import soldier from "./models/Soldier.glb";

export default function App() {


  return (
    <a-scene environment="preset arches; shadow: true;">
      <a-assets>
        <img id="sky" src={sunSky} />
      </a-assets>
      {/* -----Sky Image----- */}
      <a-sky color="#FFFFFF" material="src: #sky" rotation="0 0 0"></a-sky>
      {/* -----Landscape Model----- */}
      <a-entity gltf-model={scene} scale="1 1 1" position="0 -7 0"></a-entity>
      {/* -----Donut Model----- */}
      <a-entity
        gltf-model={donut}
        scale="1 1 1"
        position="0 0.5 0"
        animation-mixer="clip: Animation"
      ></a-entity>
      {/* ----Douglas----- */}
      <a-entity camera look-controls position="0 1.6 0">
        <a-entity
          gltf-model={soldier}
          scale="5 5 5"
          position="0 -4 10"
          animation-mixer="clip: Idle"
        ></a-entity>
      </a-entity>
    </a-scene>
  );
}
