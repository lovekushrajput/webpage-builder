import { Route, Routes } from 'react-router-dom'
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Canvas from './Canvas';


function App() {
    return (
        <>

            {
                <Routes>
                    <Route element={<Home />} path='/' />
                    <Route element={<Register />} path='/register' />
                    <Route element={<Login />} path='/login' />
                    <Route element={<Canvas />} path='/canvas' />
                </Routes>

            }

        </>
    )
}

export default App