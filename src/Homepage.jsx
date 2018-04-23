import React from 'react';
import PropTypes from 'prop-types';

import Project from './Project.jsx';

const projects = [
  { id: "design-system-react", name: "Design System React", link: "https://react.lightningdesignsystem.com/", image: "dsr.png", tagline: "Open source library of accessible web components built in React.", skills: "{ HTML, CSS/Sass, Javascript, React }", description: "Based on the Salesforce Lightning Design System, this is library allows developers to quickly build Salesforce branded web apps that are responsive and accessible." },
  { id: "colorsafe", name: "Color Safe", link: "http://colorsafe.co/", image: "color-safe.png", tagline: "Explore accessible colors for your project.", skills: "{ HTML, CSS/Sass, Javascript, AngularJS }", description: "Web accessibility standards allow people with disabilities to use your site. This tool allows you to choose a color palette for your website that is accessible to everyone." },
  { id: "promises", name: "Promises to Users", link: "http://donnieberg.github.io/promises/", image: "promises.png", tagline: "Make the internet better", skills: "{ HTML, CSS/Sass }", description: "The internet started off fully responsive, user friendly, and accessible. Then we all messed it up. Several websites miss basic UX prinipals, so my mentor and I came up with guidelines to make the internet better for users." },
];

const displayName = 'Homepage';

class Homepage extends React.Component {

constructor(props) {
  super(props);
  this.state = {};
}

renderProjects() {
	const items =  projects.map( project => {
		return (
			<Project
				description={project.description}
				image={project.image}
				key={project.id}
				link={project.link}
				name={project.name}
				skills={project.skills}
				tagline={project.tagline}
			/>
		)
	});

  return <ul className="list-plain">{items}</ul>;
}

render(){
  return (
    <section>
      <section className="pvl phm mw-projects center">
        <h1 className="mbn">
					Hi, I'm Donielle.
        </h1>
        <h2 className="mtn">
					I'm a Senior UI Developer specializing in Accessibility.
        </h2>
				<p className="mw-readability">
					I currently work on the Accessibility team at Salesforce building prototypes, contributing to our open-source Design System React library, and teaching other engineers how to build accessible web apps. I like semantic html, functional css, and above all creating apps that everyone can use regardless of differing abilities.
				</p>
      </section>

			<section className="phm background-peach">
				<div className="pvl mw-projects center">
					<h1>Projects</h1>
					{this.renderProjects()}
				</div>
			</section>

      <section className="phm pvl mw-readability center">
        <h1>About Me</h1>
        <p>
        I started working as a developer in 2013. Prior to that, I was an Event Planner at the KIPP Foundation, a non-profit in Education Reform. I discovered I loved programming in a fortuitous way. At KIPP, I needed to send a series of email blasts, and our sole web developer told me he'd teach me some basic html/css so I could do it myself. From there, I started teaching myself front-end code, pestered friends to make their websites, and in the summer of 2013, went through a full-time three-month web development bootcamp.
        </p>
        <p>
        I'm originally from Wisconsin, love to hike, read, explore the Bay Area and beyond, and every summer I crave Spotted Cow and deep-fried cheese curds.
        I care about social justice issues and web accessibility. I mentor a coding course with The Last Mile at San Quentin State Prison and am interested in doing pro bono work for non-profits.
        </p>
        <h3>Skills</h3>
        <p>
        I primarily work in front-end languages and frameworks, and my current favorite JS framework is ReactJS. Below are the web technologies I know, and I'm always learning something new.
        </p>
        <ul>
          <li>HTML, CSS, Sass</li>
          <li>Javascript</li>
          <li>ReactJS</li>
          <li>AngularJS</li>
        </ul>
      </section>


      <footer className="pvl phm mw-readability center">
        <ul className="list-plain list-horz">
          <li className="prl pvm span_3_of_12"><a href="https://github.com/donnieberg">Github</a></li>
          <li className="prl pvm span_3_of_12"><a href="http://www.linkedin.com/pub/donielle-berg/59/371/972">LinkedIn</a></li>
        </ul>
      </footer>
    </section>
    );
  }

}

Homepage.displayName = 'Homepage';

module.exports = Homepage;


