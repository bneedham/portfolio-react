import {injectGlobal} from 'styled-components';

// Expected an assignment or function call and instead saw an expression
// eslint-disable-next-line
injectGlobal `
	@font-face {
		font-family: 'ChunkFiveRegular';
		src: url('fonts/Chunkfive-webfont.eot');
		src: url('fonts/Chunkfive-webfont.eot?#iefix') format('embedded-opentype'), url('fonts/Chunkfive-webfont.woff') format('woff'), url('fonts/Chunkfive-webfont.ttf') format('truetype'), url('fonts/Chunkfive-webfont.svg#ChunkFiveRegular') format('svg');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'MuseoSans-500';
		src: url('fonts/MuseoSans.eot');
		src: url('fonts/MuseoSans.eot?#iefix') format('embedded-opentype'), url('fonts/MuseoSans.woff') format('woff'), url('fonts/MuseoSans.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	* {
		border: 0;
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	body {
		background-color: #000;
		color: #777777;
		font: 14px/18px 'MuseoSans-500', arial, sans-serif;
		font-weight: 100;
		text-shadow: rgba(0, 0, 0, 0.01) 0 0 0;
		position: relative;
		-webkit-font-smoothing: antialiased;
	}

`;
