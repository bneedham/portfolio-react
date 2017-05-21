import styled from 'styled-components';
import {media} from '../components/style-utils';

const H3 = styled.h3 `
	float: left;
	margin-right: 1em;
	margin-bottom: .5em;
	line-height: 1;
	color: #999;
	text-shadow: 0 0 1em #000;
	font-size: 4vw;
	${media.wide `
	    font-size: 2vw;
	`}
	${media.wider `
	    font-size: 1.5vw;
	`}
`;

export default H3;
