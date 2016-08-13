import React from "react";
import ReactDOM from "react-dom";
import Note from "./components/Note";

class App extends React.Component  {
	render(){
		//if(NODE_ENV != "production") console.log('development mode');
		return (
			<div>
				<h1> Hello World!!!</h1>
				<Note>I've got this</Note>

			</div>
		);
	}
}
const app = document.body;//.getElementById('app');
ReactDOM.render(<App/>,app);