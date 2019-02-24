import React from 'react';
export default class TodoItem extends React.Component{
    render(){
        let todo = this.props.todo;
        return(
            <li className="list-group-item">
                <div className="row">
                    <div className="col-md-1 col-sm-1 col-xs-1">
                        <input type="checkbox" checked={todo.completed} onChange={() => this.props.toggle(todo.id)}/>
                    </div>
                    <div className="col-md-10 col-sm-10 col-xs-10" style={{textDecoration: todo.completed? 'line-through':''}}>
                        {todo.title}
                    </div>
                    <div className="col-md-1 col-sm-1 col-xs-1">
                        <button className="btn btn-danger btn-xs" onClick={()=>this.props.delete(todo.id)}>x</button>
                    </div>
                </div>
            </li>
        )
    }
}
