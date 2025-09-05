import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";
// import { IriniCV } from "../../public/Irini_CV.pdf";
const Hero = () => {
	useGSAP(() => {
		gsap.fromTo(
			".hero-text h1",
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
		);
	});

	return (
		<section id="hero" className="relative overflow-hidden">
			<div className="absolute top-0 left-0 z-10">
				<img src="/images/bg.png" alt="" />
			</div>

			<div className="hero-layout">
				<header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
					<div className="flex flex-col gap-7">
						<div className="hero-text">
							<h1>
								Hi I am Irini,
								<p>
									I'm a
									<span className="slide">
										<span className="wrapper">
											{words.map((word, index) => (
												<span key={index} className="flex items-center md:gap-3 gap-1 pb-2">
													<img
														src={word.imgPath}
														alt="person"
														className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
													/>
													<span>{word.text}</span>
												</span>
											))}
										</span>
									</span>
								</p>
							</h1>
						</div>

						<p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
							📍 Based in Stockholm, Sweden 💡 Open to collaborations & new opportunities
						</p>

						{/* <Button text="See My Work" className="md:w-80 md:h-16 w-60 h-12" id="counter" /> */}
						<Button text="Download my CV" className="md:w-80 md:h-16 w-60 h-12" id="counter" />
					</div>
				</header>

				<figure>
					<div className="hero-3d-layout">
						<HeroExperience />
					</div>
				</figure>
			</div>
			<div className=" mb-10">
				<AnimatedCounter />
			</div>
		</section>
	);
};

export default Hero;
