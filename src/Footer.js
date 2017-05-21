import React, {Component} from 'react';
import FooterWrapper from './components/FooterWrapper';
import FooterP from './components/FooterP';
import FooterA from './components/FooterA';

class Footer extends Component {

	render() {
		return (
			<FooterWrapper>
				<FooterP>More information available upon request!</FooterP>
				<FooterA href="mailto:your.email@domain.com" title="email me">your.email@domain.com</FooterA>
			</FooterWrapper>
		);
	}
}

export default Footer;
