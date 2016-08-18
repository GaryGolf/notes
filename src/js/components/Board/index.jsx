import React from 'react';
import Note from '../Note'
import './board.css';
import plus from './plus.png';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.notes = [
        	{text: "Помой посуду"},
        	{text: "Pool Up"},
        	{text: "Get New Job"},
        	{text: "Search for StartUp"}
        ]
    }
    id(){
    	return Math.floor(Date.now()*Math.random());
    }
    remove(){

    }
    componentWillMount() {
       // this.notes.forEach( note => note.id = this.id() )  
    }
    componentDidMount() {
        //console.log(this.notes);
    }
    remove(idx){
    	console.log(idx);
    	this.notes.pop(idx);
    	
    }
    render() {
        return ( <div>
        	{this.notes.map( (note, i) => <Note 
        		key={this.id()} idx={i} ref={this.id()}
        		remove={this.remove.bind(this)} >
        			{note.text}
        		</Note>)}
        	</div>);
    }
}
