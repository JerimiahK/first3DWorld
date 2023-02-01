import "aframe";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import sky from "./assets/metaversesky.jpeg";
import sunSky from "./assets/sunny.jpeg";
import scene from "./models/greenScene.glb";
import donut from  "./models/the_great_morpheus.glb";
import Douglas from "./models/Walking.glb";

function App() {
  //make a class for controlling the character with WASD, space bar to jump, shift to run

  return (
    <a-scene>
      <a-assets>
        <img id="sky" src={sunSky} />
      </a-assets>
      <a-sky color="#FFFFFF" material="src: #sky" rotation="0 0 0"></a-sky>
      <a-entity gltf-model={scene} scale="1 1 1" position="0 -7 0"></a-entity>
      {/* <a-entity
        gltf-model={donut}
        scale="1 1 1"
        position="0 0.5 0"
        animation-mixer="clip: Animation"
      ></a-entity> */}
      <a-entity
        gltf-model={Douglas}
        scale=".08 .08 .08"
        position="0 -3 0"
        animation-mixer="clip: Walking"
      ></a-entity>
    </a-scene>
  );
}

export default App;
