import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Airplane = ({ position, rotation, speed }) => {
  const airplaneRef = useRef();
  
  // Load the GLB file for the airplane
  const gltf = useLoader(GLTFLoader, '/plane_.glb_file.glb');

  useFrame(() => {
    if (airplaneRef.current) {
      airplaneRef.current.position.x += speed.x;
      airplaneRef.current.position.y += speed.y;
      airplaneRef.current.position.z += speed.z;
    }
  });

  return (
    <group ref={airplaneRef} position={position} rotation={rotation} scale={[0.03, 0.03, 0.03]}>
      <primitive 
        object={gltf.scene} 
        onAfterRender={(renderer) => {
          // Traverse through the model and change color to white
          gltf.scene.traverse((child) => {
            if (child.isMesh) {
              child.material.color = new THREE.Color(1, 1, 1); // Pure white
            }
          });
        }}
      />
    </group>
  );
};

const Globe = () => {
  const globeRef = useRef();
  const [airplanes, setAirplanes] = useState([]);
  const [modelLoaded, setModelLoaded] = useState(false);

  // Load the Earth GLB file
  const gltf = useLoader(GLTFLoader, '/earth.glb');

  useEffect(() => {
    if (gltf) {
      setModelLoaded(true);
    }
  }, [gltf]);

  useEffect(() => {
    setAirplanes([
      { 
        position: [0.6, 0.3, 0.3], 
        rotation: [0, Math.PI / 4, 0],
        speed: { x: 0.003, y: 0.003, z: 0.003 },
      },
      { 
        position: [-0.6, -0.2, -0.4], 
        rotation: [0, -Math.PI / 4, 0],
        speed: { x: -0.003, y: -0.003, z: -0.003 },
      },
      { 
        position: [0.4, -0.3, 0.2], 
        rotation: [0, Math.PI / 2, 0],
        speed: { x: 0.003, y: -0.003, z: 0.003 },
      }
    ]);
  }, []);

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }

    setAirplanes((prev) => prev.map((airplane) => {
      const newPosition = [...airplane.position];
      newPosition[0] += airplane.speed.x;
      newPosition[1] += airplane.speed.y;
      newPosition[2] += airplane.speed.z;
      
      // If the airplane goes too far, reset its position
      if (Math.sqrt(newPosition[0] ** 2 + newPosition[1] ** 2 + newPosition[2] ** 2) > 1) {
        const randomAngle = Math.random() * Math.PI * 2;
        return { 
          ...airplane, 
          position: [
            0.8 * Math.sin(randomAngle) * Math.cos(randomAngle),
            0.8 * Math.sin(randomAngle) * Math.sin(randomAngle),
            0.8 * Math.cos(randomAngle)
          ],
          speed: { 
            x: (Math.random() - 0.5) * 0.006, 
            y: (Math.random() - 0.5) * 0.006, 
            z: (Math.random() - 0.5) * 0.006 
          }
        };
      }
      
      return { ...airplane, position: newPosition };
    }));
  });

  return (
    <>
      <group ref={globeRef} position={[0, 0, 0]} scale={[0.7, 0.7, 0.7]}>
        {modelLoaded && <primitive object={gltf.scene} />}
      </group>

      {airplanes.map((airplane, index) => (
        <Airplane 
          key={index}
          position={airplane.position}
          rotation={airplane.rotation}
          speed={airplane.speed}
        />
      ))}
    </>
  );
};

const Globe3D = () => {
  return (
    <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
      <Canvas 
        camera={{ 
          position: [0, 0, window.innerWidth < 640 ? 4.5 : 3.5], 
          fov: window.innerWidth < 640 ? 70 : 60 
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Stars radius={300} depth={60} count={5000} factor={7} saturation={0} fade />
        <Suspense fallback={null}>
          <Globe />
        </Suspense>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

export default Globe3D;