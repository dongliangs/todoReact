import React from 'react';
import TodoHeader from "./todoHeader";
import TodoItem from './todoItem';
export default class TodoApp extends  React.Component {
    constructor(props){
        super(props);
        this.state = {
            // 初始化默认状态
            todos:[
                {id: Date.now(), title: '好好学习React', completed: false}
            ]
        }
    }
    addTodo =(todo) =>{
        let todos = this.state.todos;
        todo = Object.assign({},{id: Date.now(), completed: false}, todo)
        todos.push(todo);
        this.setState({todos})
    }
    render() {
        let main = (
            <ul className="list-group">
                {
                    this.state.todos.map((todo, index)=>
                        <TodoItem key={index} todo={todo} />
                    )
                }
            </ul>
        )
        return(
            <div className="container" style={{marginTop:20}}>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <TodoHeader addTodo={this.addTodo}/>
                            </div>
                            <div className="panel-body">
                                {main}
                            </div>
                            <div className="panel-footer">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


