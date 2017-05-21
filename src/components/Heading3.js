import styled from 'styled-components';
import {media} from '../components/style-utils';

const Heading3 = styled.h3 `
	margin: .3em 0;
	font-weight: 400;
	line-height: 1;
	letter-spacing: -.02em;
	font-size: 4vw;
	color: rgba(0,0,0,0.5);
	${media.widest `
	    font-size: 57px;
	`}
`;

export default Heading3;
