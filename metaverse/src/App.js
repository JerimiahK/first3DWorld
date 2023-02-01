import "aframe";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import sky from "./assets/metaversesky.jpeg";
import scene from "./models/greenScene.glb";

function App() {
  const loader = new GLTFLoader();

  loader.load(scene, (d) => {
    console.log(d);
    const entity = document.getElementById("scene");
    entity.object3D.add(d.scene)
  });

  return (
    <a-scene>
      <a-assets>
        <img id="sky" src={sky} />
      </a-assets>
      <a-sky color="#FFFFFF" material="src: #sky" rotation="0 0 0"></a-sky>
      <a-entity id="scene" position="0 -4 0" scale="1 1 1"></a-entity>
    </a-scene>
  );
}

export default App;
