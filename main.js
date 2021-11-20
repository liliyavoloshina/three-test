import './style.css'
import * as THREE from 'three'

function main() {
  const canvas = document.querySelector('#canvas')
  const renderer = new THREE.WebGLRenderer({ canvas })

  const fov = 75 // field of view
  const aspect = 2 // the canvas default (300x150px)
  const near = 0.1 // space in front of camera
  const far = 5 // anything before will be clipped
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  camera.position.z = 2

  const scene = new THREE.Scene()

  const boxWidth = 1
  const boxHeight = 1
  const boxDepth = 1
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth)

  const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 })

  const cube = new THREE.Mesh(geometry, material)

  scene.add(cube)

  renderer.render(scene, camera)
}

main()
