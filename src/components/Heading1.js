import styled from 'styled-components';
import {media} from '../components/style-utils';

const Heading1 = styled.h1 `
	font-weight: 400;
	margin: 0;
	margin-top: 2vw;
	font-family: ChunkFiveRegular,arial,sans-serif;
	line-height: 1;
	letter-spacing: -.035em;
	color: rgba(0,0,0,0.5);
	${ ''/* text-shadow: 0 1px 2px #eee, 0 -1px 1px #444; */}

	font-style: normal;
	font-size: 15.3vw;
	${media.widest `
	    font-size: 212px;
	`}
`;

export default Heading1;
