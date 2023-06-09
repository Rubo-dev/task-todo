import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { useState } from "react";
import { editTodo } from "../redux/reducers/todoReducers";

const TodoItemPage = () => {
    const todoList = useAppSelector(state => state.todo.todos)
    const params = useParams();
    const dispatch = useAppDispatch()
    const todo = todoList.filter(todo => todo.id == params.todoId)
    const [text, setText] = useState<string>(todo[0].title)
    const handleInputChange = (e: string): void => {
        setText(e)
    }

    const handleSubmit = (): void => {
        dispatch(editTodo({
            id: todo[0].id,
            title: text
        }))
    }

    return (
        <div>
            <input type="text" value={text} onChange={(e) => handleInputChange(e.target.value)} />
            <button onClick={() => handleSubmit()}>Submit changes</button>
        </div>
    )
}

export default TodoItemPage