import './index.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Kanban from './pages/Kanban'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kanban />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
