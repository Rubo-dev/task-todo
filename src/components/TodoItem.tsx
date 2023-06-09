import { Link } from "react-router-dom"
import { ITodo } from "../models/todosInterfaces"
import { FC } from "react"
import { useAppDispatch } from "../hooks/reduxHooks"
import { removeTodo, toggleTodo } from "../redux/reducers/todoReducers"

interface TodoItemProps {
    todo?: ITodo
}
const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    const dispatch = useAppDispatch()


    return (
        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 30 }}>
            <input type="checkbox" onChange={() => dispatch(toggleTodo(todo?.id))} checked={todo?.completed} id={todo?.id} />
            <h2>{todo?.title}</h2>
            <Link to={`todo/${todo?.id}`}>
                Edit
            </Link>

            <button onClick={() => dispatch(removeTodo(todo?.id))} style={{ width: 20, height: 20 }}>&times;</button>
        </div>
    )
}

export default TodoItem