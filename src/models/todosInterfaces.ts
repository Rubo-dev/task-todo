export interface ITodoList {
    todos: ITodo[]
}
export interface ITodo {
    id: string
    title: string
    completed: boolean
}