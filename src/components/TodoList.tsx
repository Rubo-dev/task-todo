import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { FC, useState } from "react"
import { addTodo } from "../redux/reducers/todoReducers"
import TodoItem from "./TodoItem"

const TodoList: FC = () => {
    const [text, setText] = useState<string>('')

    const dispatch = useAppDispatch()
    const todoList = useAppSelector(state => state.todo.todos)

    const handleInputChange = (e: string): void => {
        setText(e)
    }

    const handleSave = (): void => {
        dispatch(addTodo({
            id: Math.floor(Math.random() * 10000),
            title: text,
            completed: false
        }))
    }


    return (
        <div>
            <input type="text" onChange={(e) => handleInputChange(e.target.value)} />
            <button onClick={() => handleSave()}>Add todo</button>
            {todoList.map(todo => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </div>
    )
}

export default TodoList