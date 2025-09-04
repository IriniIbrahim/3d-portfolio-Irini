import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { abilities } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const FeatureCards = () => {
	const sectionRef = useRef(null);

	useEffect(() => {
		const cards = sectionRef.current.querySelectorAll(".feature-card");

		gsap.fromTo(
			cards,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power3.out",
				stagger: 0.3, // 👈 each card animates one after another
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
					toggleActions: "play none none reverse",
				},
			}
		);
	}, []);

	return (
		<div ref={sectionRef} className="w-full padding-x-lg">
			<div className="mx-auto grid-3-cols">
				{abilities.map(({ imgPath, title, desc }) => (
					<div key={title} className="feature-card card-border rounded-xl p-8 flex flex-col gap-4">
						<div className="size-14 flex items-center justify-center rounded-full">
							<img src={imgPath} alt={title} />
						</div>
						<h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
						<p className="text-white-50 text-lg">{desc}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default FeatureCards;
