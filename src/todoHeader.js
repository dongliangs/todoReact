import React from 'react';
const ENTER_KEY = 13;
export default class TodoHeader extends React.Component {
    handleKeyDown = (event) => {
        if(event.keyCode === ENTER_KEY && event.target.value !=null && event.target.value.length >0){
            let title = event.target.value;
            this.props.addTodo({title});
            event.target.value = '';
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="from-group">
                    <input type="text" style={{width:'100%'}} onKeyDown={this.handleKeyDown} className="from-control"/>
                </div>
            </form>
        )
    }
}
