import React, {Component} from 'react';
import Project from './Project';
import ProjectsWrapper from './components/ProjectsWrapper';
import Data from './MockData';

class Projects extends Component {

	render() {
		return (
			<ProjectsWrapper>
				{Data.map((project, index) => (<Project index={index} key={index}/>))}
			</ProjectsWrapper>
		);
	}
}

export default Projects;
