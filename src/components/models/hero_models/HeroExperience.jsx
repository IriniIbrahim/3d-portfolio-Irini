import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

// import { Webdev } from "./Webdev";
import { Stars } from "./Stars";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";

const HeroExperience = () => {
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
	const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

	return (
		<Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
			<ambientLight intensity={0.2} color="#1a1a40" />
			<OrbitControls
				enablePan={false}
				enableZoom={!isTablet}
				maxDistance={20}
				minDistance={5}
				minPolarAngle={Math.PI / 5}
				maxPolarAngle={Math.PI / 2}
			/>

			<Suspense fallback={null}>
				<HeroLights />
				<group position={[0, -9, 0]} scale={1.5}>
					<Particles count={200} />
				</group>
				<group scale={isMobile ? 0.7 : 3.5} position={[0, -0.7, 0]} rotation={[0, -Math.PI / 4, 0]}>
					<Stars />
				</group>
			</Suspense>
		</Canvas>
	);
};

export default HeroExperience;
