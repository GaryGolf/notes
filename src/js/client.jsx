import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, inndexRoute, hashHistory } from "react-router";
import Board from './components/Board';
import Note from './components/Note';

if(NODE_ENV != "production") console.log('development mode');

const app = document.getElementById('app');
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Board} />
	</Router>,
	app);
