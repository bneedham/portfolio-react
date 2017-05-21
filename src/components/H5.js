import styled from 'styled-components';
import {media} from '../components/style-utils';

const H5 = styled.h5 `
	color: #000;
	text-shadow: 0 0 1em #555;
	margin-top: 0.5em;
	font-size: 1.2vw;
	line-height: 1;
	font-style: italic;
	line-height: 1;
	font-size: 3.4vw;
	${media.wide `
		font-size: 1.7vw;
	`}
	${media.wider `
		font-size: 1.2vw;
	`}
`;

export default H5;
