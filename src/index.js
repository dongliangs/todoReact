import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import TodoApp from './todoApp';
import TodoModel from './todoModel';
let model = new TodoModel();//new todomodel实例
//模型再变化通知再渲染
function render(){
    ReactDOM.render(<TodoApp model={model}/>, document.getElementById('root'));
}
model.subscribe(render);
render();


