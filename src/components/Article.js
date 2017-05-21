import styled from 'styled-components';

const Article = styled.article `
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	background-color: #444;
	width: 100%;
	height: 100%;
	padding: 1em;
	overflow: auto;
	transition: opacity 0.3s;
	cursor: default;
	-webkit-touch-callout: none;

	&.hovered {
		opacity: 1;
	}

`;

export default Article;
