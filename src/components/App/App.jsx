// import './App.module.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
 
export default function App () {
    return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </div>
    )
}

