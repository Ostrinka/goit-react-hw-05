// import './App.module.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
 
export default function App () {
    return (
      <div>
        <Routes>
                <Route path="/" element={<HomePage />}></Route>
        </Routes>
        </div>
    )
}

