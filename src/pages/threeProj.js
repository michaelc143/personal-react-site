import './3proj.css';
import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
export default function threeProj() {    

    useEffect(() => {
        const canvas = document.getElementById('myThreeJsCanvas');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas });
        const controls = new OrbitControls(camera, renderer.domElement);
        renderer.setPixelRatio(window.devicePixelRatio);
        //setting the render size to the size of the given window
        renderer.setSize(window.innerWidth,window.innerHeight);

        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene,camera);
        }
        
        animate();
      }, []);


    return(
        <div>
            <canvas id='myThreeJsCanvas' />
        </div>
    );
}