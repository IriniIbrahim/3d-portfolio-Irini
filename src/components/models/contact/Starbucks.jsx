import React from "react";
import { useGLTF } from "@react-three/drei";

export function Starbucks(props) {
	const { nodes, materials } = useGLTF("/models/starbucks.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Object_4.geometry}
				material={materials.material_0}
				position={[-0.09, -0.003, 0.624]}
				scale={0.032}
			/>
			<mesh
				geometry={nodes.Object_6.geometry}
				material={materials["starbucks-logo-png-transparent"]}
				position={[-0.09, 0.054, 0.59]}
				rotation={[Math.PI / 2, 0, Math.PI]}
				scale={[0.05, 0.229, 0.038]}
			/>
		</group>
	);
}

useGLTF.preload("/models/starbucks.glb");
