import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TodoList from './components/TodoList.tsx'
import { store } from './redux/store.ts'
import TodoItemPage from './pages/TodoItemPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: 'todos/todo/:todoId',
      element: <TodoItemPage />
    },
    {
      path: "/todos/",
      element: <TodoList />,
    }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </Provider>
)
