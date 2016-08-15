import React from 'react';
import './note.css';
import trash from './times.png';
import tick from './tick.png';

export default class  Note extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Hello';
        this.state = {
                editMode: false,
                value: this.props.children
            };
    }
    clickHandler(e){
        this.setState({editMode:false});
    }
    dblClickHandler(e){
        this.setState({editMode:true});
    }
    changeTextHandler(e) {
        this.setState({
                value: e.target.value
            });
    }
    renderTextInput() {
        return (

            <div className="note">
                <textarea className="note" onInput={this.changeTextHandler.bind(this)}
                    value = {this.state.value} />
                <span className="tick">
                    <img src={tick} onClick={this.clickHandler.bind(this)} />
                </span>

            </div>

            );
    }

    render() {
        if(this.state.editMode) return this.renderTextInput();
        else return ( 
        	<div 
                className='note' 
                onDoubleClick={this.dblClickHandler.bind(this)}
                onContextMenu={this.dblClickHandler.bind(this)}
            >
                   {this.state.value}
                <span className="trash">
                    <span>
                         <img src={trash} onClick={this.clickHandler.bind(this)} />
                    </span>
                </span>

        	</div>
        );
    }
}
