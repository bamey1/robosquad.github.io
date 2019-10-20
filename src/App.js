import React ,{Component} from 'react';
import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';



class App extends Component{

	constructor(){
		super()
		this.state={
			robots: [],
		searchfield:''
		}
	}

	componentDidMount(){
		fetch('https://json.placeholder')
		this.setState({robots:robots})
	}


 onsearchange=(event)=>{
 	this.setState({searchfield:event.target.value})
 }
 	
 

 
	

render(){
	const filteredRobots= this.state.robots.filter(robots=>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		
	})
		
	return (
		<div className='tc'>
		<h1 className='f1'>ROBO-SQUAD</h1> 
		<SearchBox searchange={this.onsearchange}/>
<Scroll>
<CardList robots={filteredRobots}/>
</Scroll>
</div>
);
}
}


	

export default App;