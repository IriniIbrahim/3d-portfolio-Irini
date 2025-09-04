import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../images/color-sharp2.png";
import oldTheme from "../images/projects/90stheme.png";
import Egypt from "../images/projects/egypt.png";
import Food from "../images/projects/Food.png";
import eShop from "../images/projects/eshop.png";
import todoList from "../images/projects/todolist.png";
import LillaHyra from "../images/projects/LillaHyra.png";
import ProjectGlow from "../components/ProjectGlow";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
	const projectsRef = useRef(null);
	const cardsRef = useRef([]);

	const projects = [
		{
			title: "90s Theme",
			description: "Individual project – using the fundamentals",
			imgUrl: oldTheme,
			demoLink: "https://friends90s.netlify.app/",
			codeLink: "https://github.com/IriniIbrahim/Responsive-Project.git",
		},
		{
			title: "Egypt",
			description: "Individual project – Figma design",
			imgUrl: Egypt,
			demoLink: "https://www.figma.com/proto/fWR8NAj5PKfaPesuEESKkk/Untitled?type=design&node-id=97-90",
			codeLink: "https://www.figma.com/proto/fWR8NAj5PKfaPesuEESKkk/Untitled?type=design&node-id=97-90",
		},
		{
			title: "Foodie Guide",
			description: "Individual project – Game page using JavaScript skills",
			imgUrl: Food,
			demoLink: "https://foodieguide.netlify.app/",
			codeLink: "https://github.com/IriniIbrahim/Foodie-guide.git",
		},
		{
			title: "Eshop",
			description: "My first single-page application using React",
			imgUrl: eShop,
			demoLink: "https://eshopi.netlify.app/",
			codeLink: "https://github.com/IriniIbrahim/eshop.git",
		},
		{
			title: "Todo List MERN stack",
			description: "Group project – first full stack app",
			imgUrl: todoList,
			demoLink: "https://todolist-fullstack.netlify.app/login",
			codeLink: "https://github.com/IriniIbrahim/todolist-pernstack.git",
		},
		{
			title: "Lilla Hyra",
			description: "Graduation project – full stack using Firebase",
			imgUrl: LillaHyra,
			demoLink: "https://lillahyraproject.vercel.app/",
			codeLink: "https://github.com/IriniIbrahim/lillahyraproject",
		},
	];

	useEffect(() => {
		// Animation directions for each card (alternating pattern)
		const animations = [
			{ x: -100, y: 0, rotation: -10 }, // Card 1: from left with slight rotation
			{ x: 0, y: -100, rotation: 0 }, // Card 2: from top
			{ x: 100, y: 0, rotation: 10 }, // Card 3: from right with slight rotation
			{ x: -100, y: 0, rotation: -10 }, // Card 4: from left with slight rotation
			{ x: 0, y: 100, rotation: 0 }, // Card 5: from bottom
			{ x: 100, y: 0, rotation: 10 }, // Card 6: from right with slight rotation
		];

		// Animate title first
		gsap.fromTo(
			".projects-title",
			{
				opacity: 0,
				y: -50,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: projectsRef.current,
					start: "top 80%",
					toggleActions: "play none none reverse",
				},
			}
		);

		cardsRef.current.forEach((card, index) => {
			if (card) {
				const animation = animations[index] || animations[0];

				gsap.fromTo(
					card,
					{
						opacity: 0,
						x: animation.x,
						y: animation.y,
						rotation: animation.rotation,
						scale: 0.8,
					},
					{
						opacity: 1,
						x: 0,
						y: 0,
						rotation: 0,
						scale: 1,
						duration: 0.8,
						delay: index * 0.2,
						ease: "power3.out",
						scrollTrigger: {
							trigger: card,
							start: "top 85%",
							toggleActions: "play none none reverse",
						},
					}
				);
			}
		});

		gsap.fromTo(
			".bg-decoration",
			{
				opacity: 0,
				scale: 0.5,
			},
			{
				opacity: 0.3,
				scale: 1,
				duration: 1.5,
				ease: "power2.out",
				scrollTrigger: {
					trigger: projectsRef.current,
					start: "top 60%",
					toggleActions: "play none none reverse",
				},
			}
		);

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<section id="projects" className="relative py-16 bg-gray-900 text-white" ref={projectsRef}>
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="projects-title text-3xl font-bold text-center mb-12 opacity-0">Projects</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div key={index} ref={(el) => (cardsRef.current[index] = el)} className="opacity-0">
							<ProjectGlow card={ProjectCard}>
								<ProjectCard {...project} />
							</ProjectGlow>
						</div>
					))}
				</div>
			</div>

			<img
				className="bg-decoration absolute right-0 bottom-0 w-1/3 opacity-0 pointer-events-none"
				src={colorSharp2}
				alt="decorative background"
			/>
		</section>
	);
};

export default Projects;
