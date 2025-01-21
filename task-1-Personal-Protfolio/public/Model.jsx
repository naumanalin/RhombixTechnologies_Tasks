import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.material}
        position={[0.11, -0.186, 0.336]}
        scale={[0.385, 0.215, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.material_1}
        position={[-0.313, 0.159, 0.276]}
        scale={[0.452, 0.301, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.material_2}
        position={[0.367, 0.142, 0.307]}
        scale={[0.579, 0.363, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.material_3}
        position={[0.379, -0.168, 0.317]}
        scale={[0.528, 0.296, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.material_4}
        position={[-0.327, -0.149, 0.305]}
        scale={[0.596, 0.335, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials.material_5}
        position={[-0.046, 0.023, 0.324]}
        scale={[0.496, 0.277, 0.001]}
      />
    </group>
  );
}

useGLTF.preload('/scene.gltf');
