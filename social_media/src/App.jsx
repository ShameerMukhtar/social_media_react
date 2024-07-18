import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Sidebar from "./Components/Sidebar"
import CreatePost from "./Components/CreatePost"
import PostList from "./Components/PostList"
import PostListProvider from "./Store/post-list-store"

import { useState } from "react"
import CheckPosts from "./Components/CheckPosts"
function App() {
const [selectedTab,setSelectedTab]=useState("Home");





return (
  <PostListProvider>
    <div className="app-container">
      <Sidebar
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></Sidebar>
      <div className="content">
        
        <Header></Header>
        <CheckPosts></CheckPosts>
        {selectedTab === "Home" ? (
          
          <PostList></PostList>
        ) : (
          <CreatePost></CreatePost>
        )}
        <Footer></Footer>
      </div>
    </div>
  </PostListProvider>
);
}

export default App
