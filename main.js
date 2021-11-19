import './style.css'

import * as THREE from 'three'

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

const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 )
const material = new THREE.MeshNormalMaterial( { color: 0xffff00 } )
const torusKnot = new THREE.Mesh( geometry, material )
scene.add(torusKnot)

function animate() {
  requestAnimationFrame(animate)
  torusKnot.rotation.x += 0.01
  torusKnot.rotation.y += 0.01
  renderer.render(scene, camera)
}

animate()