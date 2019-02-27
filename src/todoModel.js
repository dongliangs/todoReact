export default class TodoModel {
    constructor(){
        //设置一个key
        this.STORE_KEY = 'todos';
        //console.log(typeof localStorage.getItem(this.STORE_KEY));
        this.todos = localStorage.getItem(this.STORE_KEY) !== 'undefined' && typeof localStorage.getItem(this.STORE_KEY) === 'string'?JSON.parse(localStorage.getItem(this.STORE_KEY)):[];//存放所有todos;
        //console.log(this.todos);
        // 观察者模式；注册监听器，数据发生变化，就会调用监听函数
        this.listeners = [];
    }
    //订阅
    subscribe(listener){
        this.listeners.push(listener);
    }
    //发射
    emit(){
        this.listeners.forEach(listener => listener())
    }
    //封装
    saveAndNotify(todos){
        localStorage.setItem(this.STORE_KEY,JSON.stringify(todos));
        this.todos = todos;
        this.emit();
    }
    //添加todo信息
    addTodo =(todo) =>{
        todo = Object.assign({},{id: Math.random(), completed: false}, todo);
        let todos = this.todos;
        todos.push(todo);
        this.saveAndNotify(todos);
    };
    delete = (id) => {
        let todos = this.todos;
        let index = todos.findIndex(todo=>todo.id === id);
        todos.splice(index, 1);
        this.saveAndNotify(todos);
    };
    deleteCompleted = () => {
        let todos = this.todos;
        todos = todos.filter(todo=>!todo.completed);
        // this.setState({todos});
        this.saveAndNotify(todos);
    }
    toggleAll = (event) => {
        let checked = event.target.checked;
        let todoItems = this.todos;
        todoItems = todoItems.map(todo =>{
            todo.completed = checked;
            return todo;
        });
       // this.setState({todoItems})
        this.saveAndNotify(todoItems);
    };
    toggle = (id)=> {
        let todos = this.todos;
        todos = todos.map(todo =>{
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
        //this.setState({todos});
        this.saveAndNotify(todos);
    }
}
