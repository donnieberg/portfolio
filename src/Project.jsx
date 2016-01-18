import React from 'react';

const displayName = "Project";
const propTypes = {
  myPropType: React.PropTypes.string,
};
const defaultProps = {
  myDefaultProp: 'test',
};


class Project extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <li key={this.props.id} className="pvl cf">
        <div className="fl span_6_of_12 tac">
          <img src={`images/${this.props.image}`} alt={this.props.image} />
        </div>
        <div className="pls fr span_6_of_12">
          <h3 className="mvs f3 fw-norm caps">{this.props.name}</h3>
          <h4 className="man fw-norm">{this.props.tagline}</h4>
          <p>{this.props.skills}</p>
          <p>{this.props.description}</p>
          <a href={this.props.link} className="dib">View Project</a>
        </div>
      </li>
    )
  };
}

Project.displayName = displayName;
Project.propTypes = propTypes;
Project.defaultProps = defaultProps;

module.exports = Project;


