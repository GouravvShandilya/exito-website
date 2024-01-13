
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Aboutus from './pages/Aboutus.jsx'
import Services from './pages/Services.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/aboutus",
        element:<Aboutus/>
      },
      {
        path:"/services",
        element:<Services/>
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router}/> 
 
)
