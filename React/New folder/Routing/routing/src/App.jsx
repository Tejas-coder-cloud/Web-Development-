import { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import './App.css'
import 
{
  createBrowserRouter,
  // Outlet,
  RouterProvider
} from "react-router-dom";
// const LayoutWrapper=()=>{
//    return (
//      <div>
//       <Navbar/>
//       <h1>Hey how are you</h1>
//       <hr/>
//       <Outlet/>
//      </div>
//    );
// };
const router=createBrowserRouter([
  {
    path:"/",
    element:
    <div>
      <Navbar/>
      <Home/>
    </div>
  },
    {
    path:"/about",
    element:
    <div>
      <Navbar/>
      <About/>
    </div>
  },
    {
    path:"/dashboard",
    element:
    <div>
      <Navbar/>
      <Dashboard/>
    </div>
  },
  
  
]);



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RouterProvider router={router} />
    </div>
    //  <Navbar/>

   )
}

export default App
