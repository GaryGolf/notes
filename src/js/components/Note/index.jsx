import React from 'react';
import './note.css';
import trash from './trash.png';

export default class  Note extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Hello';
    }
    clickHandler(e){
        console.log(e.type);
    }
    dblClickHandler(e){
        console.log(e.type)
    }
    render() {
        return ( 
        	<div 
                className='note' 
                onDoubleClick={this.dblClickHandler.bind(this)}
                onContextMenu={this.dblClickHandler.bind(this)}
            >
                   {this.props.children}
                <span className="btns">
                    <span>
                       
                            <img src={trash} onClick={this.clickHandler.bind(this)} />
           
                    </span>
                </span>

        	</div>
        );
    }
}
