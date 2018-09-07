
import React from 'react';
import Title from '../components/Title';
import style from './App.css';
import uuid from 'uuid';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title 
                    title="ToDo"
                    number="5"
                />
            </div>
        );
    }
}

export default App;