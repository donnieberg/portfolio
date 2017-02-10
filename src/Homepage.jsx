import React from 'react';
import Project from './Project.jsx';

const projects = [
  { id: "colorsafe", name: "Accessible Text Colors", link: "http://colorsafe.co/", image: "accessible-color-palette.png", tagline: "Explore accessible colors for your project.", skills: "{ HTML, CSS/Sass, Javascript, AngularJS }", description: "Web accessibility standards allow people with disabilities to use your site. This tool allows you to choose a color palette for your website that is accessible to everyone." },
  { id: "promises", name: "Promises to Users", link: "http://donnieberg.github.io/promises/", image: "promises.png", tagline: "Make the internet better", skills: "{ HTML, CSS/Sass }", description: "The internet started off fully responsive, user friendly, and accessible. Then we all messed it up. Several websites miss basic UX prinipals, so my mentor and I came up with guidelines to make the internet better for users." },
];

const displayName = "Homepage";
const propTypes = {};
const defaultProps = {};

class Homepage extends React.Component {

constructor(props) {
  super(props);
  this.state = {};
}

renderProjects() {
  const items =  projects.map( project => {
    return <Project
            description={project.description}
            image={project.image}
            key={project.id}
            link={project.link}
            name={project.name}
            skills={project.skills}
            tagline={project.tagline}
            />
  });

  return <ul className="list-plain">{items}</ul>;
}

render(){
  return (
    <section className="pam">
      <section className="pvl mw-readability center">
        <h1 className="mbn tac">
        Hi, I'm Donielle.
        </h1>
        <h2 className="f3 tac">
        Prior to becoming a developer, I once told an interviewer I liked coding, but she thought I said Codeine.
        I didn't get the job.
        </h2>
        <p>
        Fortunately, now that I code for a living, people aren't confused by that anymore. I'm currently a senior ux engineer on the User Experience Team at Salesforce. I figured out how to get out of most of the overhead meetings that are inherent to big companies so I spend 85% of my day in the terminal. I couldn't be happier.
        </p>
      </section>

      <section className="pvl mw-projects center">
        <h1 className="tac">Projects</h1>
        {this.renderProjects()}
      </section>

      <section className="pvl mw-readability center">
        <h1 className="tac">About Me</h1>
        <h3>Who I am</h3>
        <p>
        I started working as a developer in 2013. Prior to that, I was an Event Planner at the KIPP Foundation, a non-profit in Education Reform. I discovered I loved programming in a fortuitous way. At KIPP, I needed to send a series of email blasts, and our sole web developer told me he'd teach me some basic html/css so I could do it myself. From there, I started teaching myself front-end code, pestered friends to make their websites, and in the summer of 2013, went through a full-time three-month web development bootcamp.
        </p>
        <p>
        I'm originally from Wisconsin, love to hike, read, explore the Bay Area and beyond, and every summer I crave Spotted Cow and deep-fried cheese curds.
        I care about social justice issues and web accessibility. I mentor a coding course with The Last Mile at San Quentin State Prison and am interested in doing pro bono work for non-profits.
        </p>
        <h3>What I know</h3>
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


      <footer className="pvl tac mw-readability center">
        <ul className="list-plain list-horz">
          <li className="prl pvm span_3_of_12"><a href="https://github.com/donnieberg">Github</a></li>
          <li className="prl pvm span_3_of_12"><a href="http://www.linkedin.com/pub/donielle-berg/59/371/972">LinkedIn</a></li>
        </ul>
      </footer>
    </section>
    );
  }

}

Homepage.displayName = displayName;
Homepage.propTypes = propTypes;
Homepage.defaultProps = defaultProps;

module.exports = Homepage;


