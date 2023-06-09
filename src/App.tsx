import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`/todos`}>Todo list</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default App
