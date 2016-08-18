import React from 'react';
import Note from '../Note'
import './board.css';
import plus from './plus.png';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {notes:[
        	{text: "Помой посуду"},
        	{text: "Pool Up"},
        	{text: "Get New Job"},
        	{text: "Search for StartUp"},
        	{text: "Hug Wife"}
        ]};
    }
    id(){
    	return Math.floor(Date.now()*Math.random());
    }
    componentWillMount() {
       // this.notes.forEach( note => note.id = this.id() )  
    }
    componentDidMount() {
        //console.log(this.notes);
    }
    remove(idx){
    	this.setState({notes: this.state.notes.filter( (note , i) => i != idx)});
    }
    save(idx, text){
    	let ar = this.state.notes;
    	// update new text value
    	ar[idx].text = text;
    	this.setState({note: ar});
    }
    render() {
        return ( <div>
        	{this.state.notes.map( (note, i) => <Note 
        		key={this.id()} idx={i} ref={this.id()}
        		remove={this.remove.bind(this)}
        		save={this.save.bind(this)} >
        			{note.text}
        		</Note>)}
        	</div>);
    }
}
