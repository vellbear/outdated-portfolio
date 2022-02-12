import about_style from "../styles/About.module.css";
import Image from "next/image";
import GithubSVG from "./GithubSVG";
import LinkedinSVG from "./LinkedinSVG";
import CopySVG from "./CopySVG";

export default function AboutContent() {
	return (
		<div className={`default-container ${about_style.about_container}`}>
			<h1 className={about_style.title}>
				Get to know <span>me</span>
			</h1>
			<h2 className={about_style.subtitle}>A little piece of me</h2>
			<div className="default-text-container">
				<p className={about_style.paragraph_text}>
					My name is Levell, I'm a front-end developer currently located in
					Southern California. I create websites and web based applications
					primarily in HTML, CSS, Javascript and React.
				</p>
			</div>
			<div className="default-text-container">
				<p className={about_style.paragraph_text}>
					I studied computer science at California State University, San
					Bernardino where I recieved my B.S. in Computer Science in 2021.{" "}
				</p>
				<p className={about_style.paragraph_text}>
					I am searching for opportunities that will allow me to develop and
					grow further in front-end development.
				</p>
				<p className={about_style.paragraph_text}>Get in touch with me!</p>
			</div>
			<div className={`default-text-container ${about_style.image_container}`}>
				<Image src="https://unsplash.it/236/329" width="236px" height="329px" />
			</div>
			<div className={`default-text-container ${about_style.icon_container}`}>
				<GithubSVG />
				<LinkedinSVG />
			</div>
			<div className={`default-text-container ${about_style.email_link}`}>
				<p>levellmack@gmail.com</p>
				<CopySVG />
			</div>
		</div>
	);
}