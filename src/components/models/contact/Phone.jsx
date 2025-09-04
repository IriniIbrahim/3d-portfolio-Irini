import React from "react";
import { useGLTF } from "@react-three/drei";

export function Phone(props) {
	const { nodes, materials } = useGLTF("/models/phone.glb");
	return (
		<group {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
				<mesh geometry={nodes.Cube_Material_0.geometry} material={materials.Material} />
				<mesh geometry={nodes.Cube_Material001_0.geometry} material={materials["Material.001"]} />
			</group>
			<group position={[2.551, 8.674, 1.698]} rotation={[-1.089, 0, 0]} scale={100}>
				<mesh geometry={nodes.Cube002_M_Button_0.geometry} material={materials.M_Button} />
				<mesh geometry={nodes.Cube002_Material001_0.geometry} material={materials["Material.001"]} />
			</group>
			<group position={[0.063, 8.674, 1.698]} rotation={[-1.089, 0, 0]} scale={100}>
				<mesh geometry={nodes.Cube003_M_Button_0.geometry} material={materials.M_Button} />
				<mesh geometry={nodes.Cube003_Material001_0.geometry} material={materials["Material.001"]} />
			</group>
			<group position={[-2.52, 8.674, 1.698]} rotation={[-1.089, 0, 0]} scale={100}>
				<mesh geometry={nodes.Cube004_M_Button_0.geometry} material={materials.M_Button} />
				<mesh geometry={nodes.Cube004_Material001_0.geometry} material={materials["Material.001"]} />
			</group>
			<group position={[2.551, 7.568, 3.88]} rotation={[-1.089, 0, 0]} scale={100}>
				<mesh geometry={nodes.Cube005_M_Button_0.geometry} material={materials.M_Button} />
				<mesh geometry={nodes.Cube005_Material001_0.geometry} material={materials["Material.001"]} />
			</group>
			<group position={[0.063, 7.568, 3.88]} rotation={[-1.089, 0, 0]} scale={100}>
				<mesh geometry={nodes.Cube006_M_Button_0.geometry} material={materials.M_Button} />
				<mesh geometry={nodes.Cube006_Material001_0.geometry} material={materials["Material.001"]} />
			</group>
			<group position={[-2.52, 7.568, 3.88]} rotation={[-1.089, 0, 0]} scale={100}>
				<mesh geometry={nodes.Cube007_M_Button_0.geometry} material={materials.M_Button} />
				<mesh geometry={nodes.Cube007_Material001_0.geometry} material={materials["Material.001"]} />
			</group>
			<group position={[2.551, 6.432, 6.108]} rotation={[-1.089, 0, 0]} scale={100}>
				<mesh geometry={nodes.Cube008_M_Button_0.geometry} material={materials.M_Button} />
				<mesh geometry={nodes.Cube008_Material001_0.geometry} material={materials["Material.001"]} />
			</group>
			<group position={[0.063, 6.432, 6.108]} rotation={[-1.089, 0, 0]} scale={100}>
				<mesh geometry={nodes.Cube009_M_Button_0.geometry} material={materials.M_Button} />
				<mesh geometry={nodes.Cube009_Material001_0.geometry} material={materials["Material.001"]} />
			</group>
			<group position={[-2.52, 6.432, 6.108]} rotation={[-1.089, 0, 0]} scale={100}>
				<mesh geometry={nodes.Cube010_M_Button_0.geometry} material={materials.M_Button} />
				<mesh geometry={nodes.Cube010_Material001_0.geometry} material={materials["Material.001"]} />
			</group>
			<group position={[0.063, 5.409, 8.015]} rotation={[-1.089, 0, 0]} scale={100}>
				<mesh geometry={nodes.Cube011_Material002_0.geometry} material={materials["Material.002"]} />
				<mesh geometry={nodes.Cube011_Material001_0.geometry} material={materials["Material.001"]} />
			</group>
			<group position={[2.551, 9.809, -0.474]} rotation={[-1.089, 0, 0]} scale={100}>
				<mesh geometry={nodes.Cube015_M_Button_0.geometry} material={materials.M_Button} />
				<mesh geometry={nodes.Cube015_Material001_0.geometry} material={materials["Material.001"]} />
			</group>
			<group position={[0.063, 9.809, -0.474]} rotation={[-1.089, 0, 0]} scale={100}>
				<mesh geometry={nodes.Cube016_M_Button_0.geometry} material={materials.M_Button} />
				<mesh geometry={nodes.Cube016_Material001_0.geometry} material={materials["Material.001"]} />
			</group>
			<group position={[-2.52, 9.809, -0.474]} rotation={[-1.089, 0, 0]} scale={100}>
				<mesh geometry={nodes.Cube017_M_Button_0.geometry} material={materials.M_Button} />
				<mesh geometry={nodes.Cube017_Material001_0.geometry} material={materials["Material.001"]} />
			</group>
			<mesh
				geometry={nodes.Cube001_Material_0.geometry}
				material={materials.Material}
				position={[0, 14.358, -10.402]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			/>
			<mesh
				geometry={nodes.Cube012_Material_0.geometry}
				material={materials.Material}
				position={[-8.841, 1.321, -4.518]}
				rotation={[-Math.PI / 2, 0, -0.033]}
				scale={100}
			/>
			<mesh
				geometry={nodes.Cube013_Material_0.geometry}
				material={materials.Material}
				position={[-13.5, 9.949, -10.299]}
				rotation={[-Math.PI / 2, -0.053, -0.033]}
				scale={100}
			/>
			<mesh
				geometry={nodes.Cube014_Material001_0.geometry}
				material={materials["Material.001"]}
				position={[6.36, 1.247, -17.447]}
				rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
				scale={100}
			/>
			<mesh
				geometry={nodes.BezierCircle_Material_0.geometry}
				material={materials.Material}
				position={[-9.268, 1.305, -4.607]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			/>
			<mesh
				geometry={nodes.Cube018_Material002_0.geometry}
				material={materials["Material.002"]}
				position={[-2.52, 9.809, -0.474]}
				rotation={[-1.089, 0, 0]}
				scale={100}
			/>
			<mesh
				geometry={nodes.Cube019_Material002_0.geometry}
				material={materials["Material.002"]}
				position={[0.048, 9.809, -0.474]}
				rotation={[-1.089, 0, 0]}
				scale={100}
			/>
			<mesh
				geometry={nodes.Cube020_Material002_0.geometry}
				material={materials["Material.002"]}
				position={[2.536, 9.809, -0.474]}
				rotation={[-1.089, 0, 0]}
				scale={100}
			/>
			<mesh
				geometry={nodes.Cube021_Material002_0.geometry}
				material={materials["Material.002"]}
				position={[-2.52, 8.672, 1.702]}
				rotation={[-1.089, 0, 0]}
				scale={100}
			/>
			<mesh
				geometry={nodes.Cube022_Material002_0.geometry}
				material={materials["Material.002"]}
				position={[0.048, 8.672, 1.702]}
				rotation={[-1.089, 0, 0]}
				scale={100}
			/>
			<mesh
				geometry={nodes.Cube023_Material002_0.geometry}
				material={materials["Material.002"]}
				position={[2.536, 8.672, 1.702]}
				rotation={[-1.089, 0, 0]}
				scale={100}
			/>
			<mesh
				geometry={nodes.Cube024_Material002_0.geometry}
				material={materials["Material.002"]}
				position={[-2.52, 7.569, 3.888]}
				rotation={[-1.089, 0, 0]}
				scale={100}
			/>
			<mesh
				geometry={nodes.Cube025_Material002_0.geometry}
				material={materials["Material.002"]}
				position={[0.048, 7.569, 3.888]}
				rotation={[-1.089, 0, 0]}
				scale={100}
			/>
			<mesh
				geometry={nodes.Cube026_Material002_0.geometry}
				material={materials["Material.002"]}
				position={[2.536, 7.569, 3.888]}
				rotation={[-1.089, 0, 0]}
				scale={100}
			/>
			<mesh
				geometry={nodes.Cube027_Material002_0.geometry}
				material={materials["Material.002"]}
				position={[-2.52, 6.415, 6.098]}
				rotation={[-1.089, 0, 0]}
				scale={100}
			/>
			<mesh
				geometry={nodes.Cube028_Material002_0.geometry}
				material={materials["Material.002"]}
				position={[0.048, 6.415, 6.098]}
				rotation={[-1.089, 0, 0]}
				scale={100}
			/>
			<mesh
				geometry={nodes.Cube029_Material002_0.geometry}
				material={materials["Material.002"]}
				position={[2.536, 6.415, 6.098]}
				rotation={[-1.089, 0, 0]}
				scale={100}
			/>
			<mesh
				geometry={nodes.Plane_Material002_0.geometry}
				material={materials["Material.002"]}
				position={[11.263, 7.479, -9.039]}
				rotation={[Math.PI / 2, -0.127, -Math.PI]}
				scale={[40.582, 40.582, 100]}
			/>
			<mesh
				geometry={nodes.Plane001_Material002_0.geometry}
				material={materials["Material.002"]}
				position={[7.813, 7.919, -9.039]}
				rotation={[Math.PI / 2, -0.127, -Math.PI]}
				scale={[40.582, 40.582, 100]}
			/>
			<mesh
				geometry={nodes.Plane002_Material002_0.geometry}
				material={materials["Material.002"]}
				position={[10.183, 7.617, -8.235]}
				rotation={[Math.PI / 2, -0.127, -Math.PI]}
				scale={[40.582, 40.582, 100]}
			/>
			<mesh
				geometry={nodes.Plane003_Material002_0.geometry}
				material={materials["Material.002"]}
				position={[8.725, 7.803, -8.235]}
				rotation={[Math.PI / 2, -0.127, -Math.PI]}
				scale={[40.582, 40.582, 100]}
			/>
			<mesh
				geometry={nodes.Plane004_Material002_0.geometry}
				material={materials["Material.002"]}
				position={[10.183, 7.617, -12.436]}
				rotation={[Math.PI / 2, -0.127, -Math.PI]}
				scale={[40.582, 40.582, 100]}
			/>
			<mesh
				geometry={nodes.Plane005_Material002_0.geometry}
				material={materials["Material.002"]}
				position={[8.725, 7.803, -12.436]}
				rotation={[Math.PI / 2, -0.127, -Math.PI]}
				scale={[40.582, 40.582, 100]}
			/>
			<mesh
				geometry={nodes.Plane006_Material002_0.geometry}
				material={materials["Material.002"]}
				position={[11.263, 7.479, -11.503]}
				rotation={[Math.PI / 2, -0.127, -Math.PI]}
				scale={[40.582, 40.582, 100]}
			/>
			<mesh
				geometry={nodes.Plane007_Material002_0.geometry}
				material={materials["Material.002"]}
				position={[7.813, 7.919, -11.503]}
				rotation={[Math.PI / 2, -0.127, -Math.PI]}
				scale={[40.582, 40.582, 100]}
			/>
			<mesh
				geometry={nodes.Plane008_Material002_0.geometry}
				material={materials["Material.002"]}
				position={[11.617, 7.434, -10.294]}
				rotation={[Math.PI / 2, -0.127, -Math.PI]}
				scale={[40.582, 40.582, 100]}
			/>
			<mesh
				geometry={nodes.Plane009_Material002_0.geometry}
				material={materials["Material.002"]}
				position={[7.472, 7.963, -10.294]}
				rotation={[Math.PI / 2, -0.127, -Math.PI]}
				scale={[40.582, 40.582, 100]}
			/>
		</group>
	);
}

useGLTF.preload("/models/phone.glb");
