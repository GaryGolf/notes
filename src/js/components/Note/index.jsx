import React from 'react';
import './note.css';
import trash from './times.png';
import tick from './tick.png';

export default class  Note extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
                editMode: false,
                value: this.props.children || this.props.value
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
    deleteHandler(e){
        const id = this.props.idx;
        this.props.remove(id);
    }
    renderTextInput() {
        return (

            <div className="note" >
                <div className="wrapper">
                    <textarea className="note" onInput={this.changeTextHandler.bind(this)}
                        value = {this.state.value} />
                </div>
                <span className="tick">
                    <img src={tick} onClick={this.clickHandler.bind(this)} />
                </span>

            </div>

            );
    }

    render() {
        if(this.state.editMode) return this.renderTextInput();
        else return ( 
        	<div key = {this.props.id}
                className='note' 
                onDoubleClick={this.dblClickHandler.bind(this)} >
            <div className="wrapper"> {this.state.value} </div>
                <span className="trash">
                    <span>
                         <img src={trash} onClick={this.deleteHandler.bind(this)} />
                    </span>
                </span>

        	</div>
        );
    }
}
