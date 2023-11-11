import './App.css'

import { Outlet } from 'react-router-dom'

// 9-search form
import SearchForm from './components/SearchForm'

// link entre paginas
import Navbar from './components/Navbar'


function App() {
  

  return (
    
      <div className='App'>
        <Navbar/>
        <SearchForm/>
        <Outlet/>
        <p>Footer</p>
        
      </div>   
  )
}

export default App
