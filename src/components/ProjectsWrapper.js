import styled from 'styled-components';
import {maxWidth} from '../components/style-utils';

const ProjectsWrapper = styled.main `
	clear: both;
	margin: 0 auto;
	padding: 0;
	list-style: none;
	position: relative;
	overflow: hidden;
	width: 100%;
	max-width: ${maxWidth};
`;
export default ProjectsWrapper;
