import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
	const formRef = useRef(null);
	const sectionRef = useRef(null);
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	// 👉 ScrollTrigger Animation
	useEffect(() => {
		gsap.fromTo(
			sectionRef.current.querySelector("form"),
			{ opacity: 0, y: 100 },
			{
				opacity: 1,
				y: 0,
				duration: 1.2,
				ease: "power3.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
					end: "top 50%",
					toggleActions: "play none none reverse",
					markers: false,
				},
			}
		);

		gsap.fromTo(
			sectionRef.current.querySelector("h2"),
			{ opacity: 0, y: -50 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 90%",
					toggleActions: "play none none reverse",
				},
			}
		);
	}, []);
	useEffect(() => {
		gsap.fromTo(
			sectionRef.current.querySelector("h2"),
			{ opacity: 0, y: -50 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 90%",
					toggleActions: "play none none reverse",
				},
			}
		);

		gsap.fromTo(
			sectionRef.current.querySelectorAll("form > div, form button"), // select inputs + button
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power3.out",
				stagger: 0.2, // 👈 fields animate one after another
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
					toggleActions: "play none none reverse",
				},
			}
		);
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			await emailjs.sendForm(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				formRef.current,
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
			);

			setForm({ name: "", email: "", message: "" });
		} catch (error) {
			console.error("EmailJS Error:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section ref={sectionRef} id="contact" className="flex-center section-padding">
			<div className="w-300 h-full md:px-10 px-5">
				<TitleHeader title="Get in Touch – Let’s Connect" sub="💬 Have questions or ideas? Let’s talk! 🚀" />

				<div className="flex-center card-border rounded-xl p-10 mt-5">
					<form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
						<div>
							<label htmlFor="name">Your name</label>
							<input
								type="text"
								id="name"
								name="name"
								value={form.name}
								onChange={handleChange}
								placeholder="What’s your name?"
								required
							/>
						</div>

						<div>
							<label htmlFor="email">Your Email</label>
							<input
								type="email"
								id="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								placeholder="What’s your email address?"
								required
							/>
						</div>

						<div>
							<label htmlFor="message">Your Message</label>
							<textarea
								id="message"
								name="message"
								value={form.message}
								onChange={handleChange}
								placeholder="How can I help you?"
								rows="5"
								required
							/>
						</div>

						<button type="submit">
							<div className="cta-button group">
								<div className="bg-circle" />
								<p className="text">{loading ? "Sending..." : "Send Message"}</p>
								<div className="arrow-wrapper">
									<img src="/images/arrow-down.svg" alt="arrow" />
								</div>
							</div>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
