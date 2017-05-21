import styled from 'styled-components';
import {media} from '../components/style-utils';

const Section = styled.section `
	color: #fff;
	margin: 1% 0 0 1%;
	float: left;
	clear: none;
	overflow: hidden;
	position: relative;
	width: 98%;
	${media.wide `
	    width: 48.5%;
	`}
	${media.wider `
	    width: 32%;
	`}
`;

export default Section;
