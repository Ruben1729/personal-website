<template>
    <div ref="canvas">

    </div>
</template>

<script>
import * as THREE from 'three';

import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

export default {
    name: 'canvas-gl',
    data: function () {
        return {};
    },
    mounted: function () {
        let container;

        let camera, scene, renderer;

        let mouseX = 0, mouseY = 0;

        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;

        let object;

        init();
        animate();


        function init() {

            container = document.createElement( 'div' );
            document.body.appendChild( container );

            camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
            camera.position.z = 100;

            // scene

            scene = new THREE.Scene();

            const ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
            scene.add( ambientLight );

            const pointLight = new THREE.PointLight( 0xffffff, 0.8 );
            camera.add( pointLight );
            scene.add( camera );

            // manager

            function loadModel() {

                object.traverse( function ( child ) {

                    if ( child.isMesh ) child.material.map = texture;

                } );

                object.position.y = - 95;
                scene.add( object );

            }

            const manager = new THREE.LoadingManager( loadModel );

            // texture

            const textureLoader = new THREE.TextureLoader( manager );
            const texture = textureLoader.load( './assets/textures/moon.png' );

            // model

            function onProgress( xhr ) {

                if ( xhr.lengthComputable ) {

                    const percentComplete = xhr.loaded / xhr.total * 100;
                    console.log( 'model ' + Math.round( percentComplete, 2 ) + '% downloaded' );

                }

            }

            function onError() {}

            const loader = new OBJLoader( manager );
            loader.load( './assets/models/moon/moon.obj', function ( obj ) {

                object = obj;

            }, onProgress, onError );

            //

            renderer = new THREE.WebGLRenderer();
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            container.appendChild( renderer.domElement );

            document.addEventListener( 'mousemove', onDocumentMouseMove );

            //

            window.addEventListener( 'resize', onWindowResize );

        }

        function onWindowResize() {

            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

        }

        function onDocumentMouseMove( event ) {

            mouseX = ( event.clientX - windowHalfX ) / 2;
            mouseY = ( event.clientY - windowHalfY ) / 2;

        }

        //

        function animate() {

            requestAnimationFrame( animate );
            render();

        }

        function render() {

            camera.position.x += ( mouseX - camera.position.x ) * .05;
            camera.position.y += ( - mouseY - camera.position.y ) * .05;

            camera.lookAt( scene.position );

            renderer.render( scene, camera );

        }
    }
}
</script>
<style lang="scss">
canvas {
    width: 100vw;
    height: 100vh;
}
</style>
