import React from 'react';
import TodoHeader from "./todoHeader";
import TodoItem from './todoItem';
import TodoFooter from './todoFooter';
import * as filterTypes from './filtertypes';
export default class TodoApp extends  React.Component {
    constructor(props){
        super(props);
        this.state = {
            // 初始化默认状态
            //todos:[],
            // 默认显示全部
            filterType:filterTypes.ALL
        }
    }

    changeFiltertype=(filterType)=> {
        this.setState({filterType})
    }
    render() {
        let todos = this.props.model.todos;
        // 未完成的待办事项
        let activetodoCount = todos.reduce((count, todo)=>count+(todo.completed?0:1),0);
        // 已完成
        let completedCount = todos.length - activetodoCount;
        let showTodos = todos.filter((todo) => {
            switch (this.state.filterType){
                case filterTypes.ACTIVE:
                    return !todo.completed;
                case filterTypes.COMPLETED:
                    return todo.completed;
                default:
                    return true;
            }
        })
        let main = (
            <ul className="list-group">
                {
                    todos.length > 0? <li className="list-group-item">
                        <input type="checkbox" checked={activetodoCount===0} onChange={this.props.model.toggleAll}/>
                        {activetodoCount===0?'取消全选':'全部选中'}
                    </li>:null
                }
                {
                    showTodos.map((todo, index)=>
                        <TodoItem delete={this.props.model.delete} toggle={this.props.model.toggle} key={index} todo={todo} />
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
                                <TodoHeader addTodo={this.props.model.addTodo}/>
                            </div>
                            <div className="panel-body">
                                {main}
                            </div>
                            <div className="panel-footer">
                                <TodoFooter activetodoCount={activetodoCount}
                                            changeFiltertype={this.changeFiltertype}
                                            filterType={this.state.filterType}
                                            deleteCompleted={this.props.model.deleteCompleted}
                                            completedCount={completedCount}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


