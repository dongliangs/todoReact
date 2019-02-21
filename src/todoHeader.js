import React from 'react';
const ENTER_KEY = 13;
export default class TodoHeader extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            value:''
        }
    }
    handleChange = (event)=>{
        this.setState({value: event.target.value})
    }
    handleKeyDown = (event) => {
        let title = event.target.value;
        if(event.keyCode === ENTER_KEY){
            this.props.addTodo({title});
        }
        //this.setState({value: title})
    }
    handleSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="from-group">
                    <input type="text" value={this.state.value} onChange={this.handleChange} style={{width:'100%'}} onKeyDown={this.handleKeyDown} className="from-control"/>
                </div>
            </form>
        )
    }
}
