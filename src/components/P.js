import styled from 'styled-components';
import {media} from '../components/style-utils';

const P = styled.p `
	clear: both;
	margin: 0.5em 0;
	line-height: 1;
	color: #fff;
	text-shadow: 0 0 1em #444;
	font-size: 3.8vw;
	${media.wide `
	    font-size: 1.9vw;
	`}
	${media.wider `
	    font-size: 1.4vw;
	`}
`;

export default P;
