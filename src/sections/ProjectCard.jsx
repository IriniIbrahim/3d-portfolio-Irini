const ProjectCard = ({ title, description, imgUrl, demoLink, codeLink }) => {
	const handleClick = (link) => {
		window.open(link, "_blank", "noopener,noreferrer");
	};

	return (
		<div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col transform hover:scale-105 transition-all duration-300 max-w-sm mx-auto w-full relative group h-96">
			<img src={imgUrl} alt={title} className="w-full h-48 object-cover flex-shrink-0" />

			<div className="p-5 flex flex-col  justify-between">
				<h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
				<p className="text-gray-300 text-sm leading-relaxed">{description}</p>

				<div className="mt-4 flex gap-3 flex-shrink-0">
					<button
						onClick={() => handleClick(demoLink)}
						className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm flex-1 transition-colors duration-200"
					>
						Live Project
					</button>
					<button
						onClick={() => handleClick(codeLink)}
						className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm flex-1 transition-colors duration-200"
					>
						Source Code
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
