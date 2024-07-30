
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Sidebar from "../Components/Sidebar"
import { Outlet } from "react-router"
import PostListProvider from "../Store/post-list-store"




function App() {






return (
  <PostListProvider>
    <div className="app-container">
      <Sidebar></Sidebar>
      <div className="content">
        
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  </PostListProvider>
);
}

export default App
