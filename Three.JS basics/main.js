import * as THREE from 'three'; 

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75,innerWidth / innerHeight ,0.1,1000)
scene.add(camera)
camera.position.z = 5 

// Mesh => {SHAPE and MATERIAL  }

const cubeGeometry  = new THREE.BoxGeometry(1,1,1)

const cubeMaterial  = new THREE.MeshStandardMaterial({
    color: 0x00FF00 
})

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(cube)

const light  = new THREE.DirectionalLight(0xFFFFFF , 1)
scene.add(light)
light.position.y =4
light.position.z =4

const renderer = new THREE.WebGLRenderer()
renderer.setSize(innerWidth,innerHeight)

document.body.appendChild(renderer.domElement) 

function animate()
{
    cube.rotation.y +=0.05    
    cube.rotation.x +=0.05    
    cube.rotation.z +=0.05    
    renderer.render(scene,camera)
}


renderer.setAnimationLoop(animate)