import React from 'react';
import './note.css';

export default class  Note extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Hello';
    }
    render() {
        return ( 
        	<div className='note'>
                <span className='note'>
        			{this.props.children}
        		</span>
        	</div>
        );
    }
}
