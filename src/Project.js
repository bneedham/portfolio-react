import React, {Component} from 'react';
import Section from './components/Section';
import Article from './components/Article';
import Img from './components/Img';
import A from './components/A';
import H2 from './components/H2';
import H3 from './components/H3';
import H4 from './components/H4';
import H5 from './components/H5';
import P from './components/P';
import Data from './MockData';

class Project extends Component {
	constructor() {
		super();
		this.state = {
			hovered: false
		};
	}

	render() {
		return (
			<Section key={this.props.index}>
				<Img src={Data[this.props.index].src} alt={Data[this.props.index].linkTitle}/>
				<Article className={this.state.hovered
					? 'hovered'
					: ''} onMouseEnter={event => this.setState({hovered: true})} onMouseLeave={event => this.setState({hovered: false})} onClick={event => this.state.hovered
					? this.setState({hovered: false})
					: this.setState({hovered: true})}>
					<A href={Data[this.props.index].href} title={Data[this.props.index].linkTitle} target="_blank">{Data[this.props.index].linkTitle}</A>
					<H2>{Data[this.props.index].title}</H2>
					<H3>{Data[this.props.index].date}</H3>
					<H4>{Data[this.props.index].role}</H4>
					<P>{Data[this.props.index].decription}</P>
					<H5>{Data[this.props.index].tech}</H5>
				</Article>
			</Section>
		);
	}
}

export default Project;
