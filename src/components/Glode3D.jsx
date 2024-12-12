import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Airplane = ({ position, rotation, speed }) => {
  const airplaneRef = useRef();
  useFrame(() => {
    if (airplaneRef.current) {
      airplaneRef.current.position.x += speed.x;
      airplaneRef.current.position.y += speed.y;
      airplaneRef.current.position.z += speed.z;
    }
  });

  return (
    <group ref={airplaneRef} position={position} rotation={rotation}>
      <mesh>
        <boxGeometry args={[0.1, 0.05, 0.2]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      <mesh position={[0, 0.02, 0]}>
        <boxGeometry args={[0.3, 0.02, 0.05]} />
        <meshStandardMaterial color="#DDDDDD" />
      </mesh>
      <mesh position={[0, 0.03, -0.1]}>
        <boxGeometry args={[0.05, 0.1, 0.05]} />
        <meshStandardMaterial color="#CCCCCC" />
      </mesh>
    </group>
  );
};

const Globe = () => {
  const globeRef = useRef();
  const [airplanes, setAirplanes] = useState([]);
  const [textureLoaded, setTextureLoaded] = useState(false);

  const texture = useLoader(THREE.TextureLoader, '/earth.jpg', (loader) => {
    loader.crossOrigin = 'anonymous';
  });

  useEffect(() => {
    if (texture) {
      texture.needsUpdate = true;
      setTextureLoaded(true);
    }
  }, [texture]);

  useEffect(() => {
    setAirplanes([
      { 
        position: [1.2, 0.5, 0.5], 
        rotation: [0, Math.PI/4, 0],
        speed: { x: 0.005, y: 0.005, z: 0.005 },
      },
      { 
        position: [-1.2, -0.3, -0.7], 
        rotation: [0, -Math.PI/4, 0],
        speed: { x: -0.005, y: -0.005, z: -0.005 },
      },
      { 
        position: [0.8, -0.6, 0.3], 
        rotation: [0, Math.PI/2, 0],
        speed: { x: 0.005, y: -0.005, z: 0.005 },
      }
    ]);
  }, []);

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }

    setAirplanes(prev => prev.map(airplane => {
      const newPosition = [...airplane.position];
      newPosition[0] += airplane.speed.x;
      newPosition[1] += airplane.speed.y;
      newPosition[2] += airplane.speed.z;
      
      if (Math.sqrt(newPosition[0]**2 + newPosition[1]**2 + newPosition[2]**2) > 1.8) {
        const randomAngle = Math.random() * Math.PI * 2;
        return { 
          ...airplane, 
          position: [
            1.5 * Math.sin(randomAngle) * Math.cos(randomAngle),
            1.5 * Math.sin(randomAngle) * Math.sin(randomAngle),
            1.5 * Math.cos(randomAngle)
          ],
          speed: { 
            x: (Math.random() - 0.5) * 0.01, 
            y: (Math.random() - 0.5) * 0.01, 
            z: (Math.random() - 0.5) * 0.01 
          }
        };
      }
      
      return { ...airplane, position: newPosition };
    }));
  });

  return (
    <>
      <mesh ref={globeRef} scale={[1.5, 1.5, 1.5]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          map={textureLoaded ? texture : null}
          roughness={0.5}
          metalness={0.1}
        />
      </mesh>

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
        <ambientLight intensity={0.3} />
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
