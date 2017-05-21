import styled from 'styled-components';
import {media} from '../components/style-utils';

const H2 = styled.h2 `
	text-transform: capitalize;
	margin: 0.3em 0;
	line-height: 1;
	font-size: 5.4vw;
	color: #fff;
	text-shadow: 0 0 1em #222;
	${media.wide `
	    font-size: 2.9vw;
	`}
	${media.wider `
	    font-size: 2.2vw;
	`}
`;

export default H2;
