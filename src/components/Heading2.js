import styled from 'styled-components';
import {media} from '../components/style-utils';

const Heading2 = styled.h2 `
	color: rgba(255,255,255,0.5);
	margin: 0;
	font-weight: 400;
	line-height: 1;
	letter-spacing: -.02em;
	font-size: 4vw;
	${media.widest `
	    font-size: 57px;
	`}
`;

export default Heading2;
