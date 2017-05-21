import styled from 'styled-components';
import {media} from '../components/style-utils';

const H4 = styled.h4 `
	color: #000;
	text-shadow: 0 0 1em #555;
	float: left;
	font-size: 3.6vw;
	line-height: 4vw;
	${media.wide `
		font-size: 1.7vw;
		line-height: 2vw;
	`}
	${media.wider `
		font-size: 1.3vw;
		line-height: 1.5vw;
	`}
`;

export default H4;
