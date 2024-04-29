'use client';

import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Outlines, useTexture } from '@react-three/drei';
import { Physics, useSphere } from '@react-three/cannon';
import { EffectComposer, N8AO, SMAA } from '@react-three/postprocessing';

interface ICanvas {}

const rfs = THREE.MathUtils.randFloatSpread;
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const baubleMaterial = new THREE.MeshStandardMaterial({
  color: '#ff4900',
  roughness: 0,
  envMapIntensity: 1,
});

export default function CanvasComponent(props: ICanvas) {
  const Clump = ({
    mat = new THREE.Matrix4(),
    vec = new THREE.Vector3(),
    ...props
  }) => {
    const outlines = 0.0;
    const texture = useTexture('/images/3d/cross.jpg');
    const [ref, api] = useSphere(() => ({
      args: [1],
      mass: 1,
      angularDamping: 0.1,
      linearDamping: 0.65,
      position: [rfs(20), rfs(20), rfs(20)],
    }));
    useFrame((state) => {
      for (let i = 0; i < 40; i++) {
        // Get current whereabouts of the instanced sphere
        //@ts-ignore
        ref.current?.getMatrixAt(i, mat);
        // Normalize the position and multiply by a negative force.
        // This is enough to drive it towards the center-point.
        api
          .at(i)
          .applyForce(
            vec
              .setFromMatrixPosition(mat)
              .normalize()
              .multiplyScalar(-40)
              .toArray(),
            [0, 0, 0]
          );
      }
    });
    return (
      <instancedMesh
        ref={
          ref as React.Ref<
            THREE.InstancedMesh<
              THREE.BufferGeometry<THREE.NormalBufferAttributes>,
              THREE.Material | THREE.Material[],
              THREE.InstancedMeshEventMap
            >
          >
        }
        castShadow
        receiveShadow
        args={[sphereGeometry, baubleMaterial, 20]}
        material-map={texture}
      >
        <Outlines thickness={outlines} />
      </instancedMesh>
    );
  };

  const Pointer = () => {
    const viewport = useThree((state) => state.viewport);
    const [, api] = useSphere(() => ({
      type: 'Kinematic',
      args: [3],
      position: [0, 0, 0],
    }));
    return useFrame((state) =>
      api.position.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      )
    );
  };

  return (
    <>
      <div className="h-full">
        <Canvas
          shadows
          gl={{ antialias: false }}
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}
        >
          <OrbitControls enableZoom={false} />

          <ambientLight intensity={1.85} color={'#fff'} />
          {/* <color attach="background" args={['#dfdfdf']} /> */}
          <spotLight
            intensity={1}
            angle={0.2}
            penumbra={1}
            position={[30, 30, 30]}
            castShadow
            shadow-mapSize={[512, 512]}
          />

          <Physics gravity={[0, 2, 0]} iterations={10}>
            <Pointer />
            <Clump />
            <mesh>
              <boxGeometry />
              <meshStandardMaterial />
            </mesh>
          </Physics>

          <EffectComposer multisampling={0}>
            <N8AO
              halfRes
              color="black"
              aoRadius={2}
              intensity={2}
              aoSamples={6}
              denoiseSamples={4}
            />
            <SMAA />
          </EffectComposer>
        </Canvas>
      </div>
    </>
  );
}
