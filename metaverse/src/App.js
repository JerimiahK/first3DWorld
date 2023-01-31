import { Canvas } from "@react-three/fiber";
import "aframe";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import sky from "./assets/metaversesky.jpeg";
import mars from "./models/mars2.glb";

function App() {
  const loader = new GLTFLoader();

  loader.load(mars, (d) => {
    console.log(d);
    const entity = document.getElementById("mars");
    entity.object3D.add(d.scene)
  });

  return (
    <a-scene>
      <a-assets>
        <img id="sky" src={sky} />
      </a-assets>
      <a-sky color="#FFFFFF" material="src: #sky" rotation="0 0 0"></a-sky>
      <a-entity id="mars" position="0 0 0" scale="500 500 500"></a-entity>
    </a-scene>
  );
}

export default App;
