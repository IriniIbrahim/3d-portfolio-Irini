import * as THREE from "three";

const ContactLights = () => (
	<>
		{/* lamp's light */}
		<spotLight position={[2, 5, 6]} angle={0.15} penumbra={0.2} intensity={100} color="white" />
		{/* bluish overhead lamp */}
		<spotLight position={[4, 5, 4]} angle={0.3} penumbra={0.5} intensity={40} color="#fff6" />
		{/* purplish side fill */}
		<spotLight position={[-3, 5, 5]} angle={0.4} penumbra={1} intensity={60} color="#fff" />
		{/* area light for soft moody fill */}
		<primitive
			object={new THREE.RectAreaLight("#fff", 8, 3, 2)}
			position={[1, 3, 4]}
			rotation={[-Math.PI / 4, Math.PI / 4, 0]}
			intensity={15}
		/>
		{/* subtle point light for atmospheric tone */}
		<pointLight position={[0, 1, 0]} intensity={10} color="#ffff" />
		<pointLight position={[1, 2, -2]} intensity={10} color="#fff" />
	</>
);

export default ContactLights;
