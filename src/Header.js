import React, {Component} from 'react';
import HeaderWrapper from './components/HeaderWrapper';
import Heading1 from './components/Heading1';
import Heading2 from './components/Heading2';
import Heading3 from './components/Heading3';

class Header extends Component {

	render() {
		return (
			<HeaderWrapper>
				<Heading1>portfolio site</Heading1>
				<Heading2>web/app development &amp; interactive design</Heading2>
				<Heading3>portfolio:</Heading3>
			</HeaderWrapper>
		);
	}
}

export default Header;
