import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"
import  {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js"
import model from "../src/face_mesh_v030.glb"

export default class Sketch{
  constructor(options){
    this.scene = new THREE.Scene();
    this.container = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.Width, this.Height);
    this.renderer.setClearColor(0xeeeeeee,1)
    this.renderer.physicallyCorrectLights = true
    this.renderer.outputEncoding = THREE.sRGBEncoding

    this.camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.001,
        1000
      );
  }
}

new Sketch()
// const camera = new THREE.PerspectiveCamera(
//   70,
//   window.innerWidth / window.innerHeight,
//   0.001,
//   1000
// );

// camera.position.set(0,0,2)



// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// const controls = new OrbitControls(camera,renderer.domElement)
// let time = 0;

// eisPlaying = true;

// this.loader= new GLTFLoader();

// this.loader.load(model,(gltf)=>{
//   this.scene.add(gltf.scene)
// })

// const animate = function () {
//   requestAnimationFrame(animate);

//   renderer.render(scene, camera);
// };

// animate();
