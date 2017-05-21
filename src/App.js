import React, {Component} from 'react';
import Svg from './Svg';
import Header from './Header';
import Projects from './Projects';
import Footer from './Footer';
import AppWrapper from './components/AppWrapper';

class App extends Component {

	render() {
		return (
			<AppWrapper>
				<Svg></Svg>
				<Header></Header>
				<Projects></Projects>
				<Footer></Footer>
			</AppWrapper>
		);
	}
}

export default App;
