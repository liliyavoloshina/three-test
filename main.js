import './style.css'

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// contaner
const scene = new THREE.Scene()

// what users will see is camera
// field of view, aspect ratio, view frustum (what objects are visible relative to camera)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#canvas')
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
// move camera
camera.position.setZ(30)

// draw
renderer.render(scene, camera)

const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16)
const material = new THREE.MeshNormalMaterial( { color: 0xffff00 } )
const torusKnot = new THREE.Mesh(geometry, material)
scene.add(torusKnot)

// light 
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5, 5, 5)

const ambientLight = new THREE.AmbientLight(0xffffff)

scene.add(pointLight, ambientLight)

// light helpers 

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50)
scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement)

const animate = () => {
  requestAnimationFrame(animate)
  torusKnot.rotation.x += 0.01
  torusKnot.rotation.y += 0.001
  torusKnot.rotation.z += 0.01

  controls.update()
  renderer.render(scene, camera)
}

animate()

const addStar = () => {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24)
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
  const star = new THREE.Mesh(geometry, material)

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))

  star.position.set(x, y, z)
  scene.add(star)
}

Array(200).fill().forEach(addStar)

const bgColor = new THREE.Color(0x800080);
scene.background = bgColor