import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Starbucks } from "./Starbucks";
import ContactLights from "./ContactLight";
import { Suspense } from "react";

const ContactExperience = () => {
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
	const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

	return (
		<Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
			{/* Reduced ambient light intensity and changed to neutral color */}
			<ambientLight intensity={0.4} color="#ffffff" />

			{/* Add directional light for better definition */}
			<directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" castShadow />

			{/* Add fill light from opposite side */}
			<directionalLight position={[-5, 5, 5]} intensity={0.3} color="#ffffff" />

			{/* Optional: Add a point light for highlights */}
			<pointLight position={[0, 5, 10]} intensity={0.5} color="#ffffff" />

			<OrbitControls
				enablePan={false}
				enableZoom={!isTablet}
				maxDistance={20}
				minDistance={5}
				minPolarAngle={Math.PI / 5}
				maxPolarAngle={Math.PI / 2}
			/>

			<Suspense fallback={null}>
				<ContactLights />

				<group scale={isMobile ? 0.7 : 1} position={[0, -3.8, 0]} rotation={[0, -Math.PI / 4, 0]}>
					<Starbucks />
				</group>
			</Suspense>
		</Canvas>
	);
};

export default ContactExperience;
