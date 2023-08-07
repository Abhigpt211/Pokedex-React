import './App.css'
import { Link } from 'react-router-dom'
import CustomRoutes from './routes/CustomRoutes'

function App() {

  return (
    <div className='outer-pokedex'> 
      <h1 className="pokedex-heading">
      <Link to="/">Pokedex</Link>
      </h1> 
      <CustomRoutes/>
    </div>
  )
}

export default App
