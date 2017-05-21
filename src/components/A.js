import styled from 'styled-components';
import {media} from '../components/style-utils';

const A = styled.a `

	position:absolute;
	bottom: 1em;
	right: 1em;

	text-decoration: none;
	background-color: #33ccff;
	color: #fff;
	text-shadow: 0 0 1em #000;
	padding: 0.3em 0.6em 0.2em 0.6em;
	line-height: 1;
	cursor: pointer;
	&:active { }
	&:visited { }
	&:hover {
		text-decoration: none;
		background-color: #ff6600;
	}
	font-size: 4vw;
	${media.wide `
	    font-size: 2vw;
	`}
	${media.wider `
	    font-size: 1.5vw;
	`}
`;

export default A;
