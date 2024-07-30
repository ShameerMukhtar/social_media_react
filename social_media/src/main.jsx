import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,  createBrowserRouter } from 'react-router-dom'
import App from './Routes/App.jsx'
import CreatePost from './Components/CreatePost.jsx'
import PostList from './Components/PostList.jsx'
import { About } from './Components/About.jsx'

const router=createBrowserRouter([
  {path:"/",element:<App/>,children:[

    {path:"/",element:<PostList/>},
    {path:"/create-post",element:<CreatePost/>},
    {path:"/about",element:<About/>}
]},
  


]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   
  </React.StrictMode>,
)
