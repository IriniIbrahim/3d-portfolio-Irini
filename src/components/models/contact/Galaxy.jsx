import React from "react";
import { useGLTF } from "@react-three/drei";

export function Galaxy(props) {
	const { nodes, materials } = useGLTF("/models/galaxy.glb");
	return (
		<group {...props} dispose={null}>
			<mesh geometry={nodes.Object_4.geometry} material={materials.material} rotation={[Math.PI / 2, 0, 0]} />
		</group>
	);
}

useGLTF.preload("/models/galaxy.glb");
export default Galaxy;
