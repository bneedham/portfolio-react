import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';

const waveAni = keyframes `
	0% {
		transform: translate3d(-1600px,0,0);
	}
	100% {
		transform: translate3d(0,0,0);
	}
`;

const Ocean = styled.div `
	width: 100%;
	height: 100%;
	position: fixed;
	top:0;
	left:0;
	background: #015871;
`;

const Wave = styled.div `
	background: url(./portfolio-images/wave.svg) repeat-x;
	position: absolute;
	top: ${props => props.top};
	height: ${props => props.height};
	width: 6400px;

	animation-name: ${waveAni};
	animation-duration: ${props => props.dur};
	${ ''/* animation-timing-function: cubic-bezier( 0.36, 0.45, 0.63, 0.53); */}
	animation-timing-function: linear;
	animation-delay: ${props => props.delay};
	animation-iteration-count: infinite;

	transform: translate3d(0, 0, 0);
`;

class Svg extends Component {

	render() {
		return (
			<Ocean>
				<Wave top="0%" height="100%" delay="0s" dur="10.1s"/>
				<Wave top="10%" height="90%" delay="0s" dur="10s"/>
				<Wave top="20%" height="80%" delay="-.1s" dur="9.8s"/>
				<Wave top="30%" height="70%" delay="-.2s" dur="9.6s"/>
				<Wave top="40%" height="60%" delay="-.3s" dur="9.4s"/>
				<Wave top="50%" height="50%" delay="-.4s" dur="9.2s"/>
				<Wave top="60%" height="40%" delay="-.5s" dur="9.0s"/>
				<Wave top="70%" height="30%" delay="-.6s" dur="8.8s"/>
				<Wave top="80%" height="20%" delay="-.7s" dur="8.6s"/>
				<Wave top="90%" height="10%" delay="-.8s" dur="8.4s"/>
			</Ocean>
		);
	}
}

export default Svg;
