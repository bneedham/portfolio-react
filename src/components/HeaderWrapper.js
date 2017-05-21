import styled from 'styled-components';
import {maxWidth} from '../components/style-utils';

const HeaderWrapper = styled.header `
	margin: 0 auto;
    padding: 1%;
	position: relative;
	width: 100%;
	max-width: ${maxWidth};
`;

export default HeaderWrapper;
