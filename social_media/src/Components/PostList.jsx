import { useContext, useEffect,useState } from "react";
import Post from "./Post";
import { PostListContext } from "../Store/post-list-store";
import CheckPosts from "./CheckPosts";
import LoadingSpinner from "./LoadingSpinner";



const PostList =({selectedTab})=>{
  // Getting data from store using useContext;

const [fetching,setFetching]=useState(false);

const {postList,initial_Posts}=useContext(PostListContext);

// handle  Fetch Posts
useEffect(()=>{
setFetching(true);
const controller = new AbortController();
const signal=controller.signal;

  fetch('https://dummyjson.com/posts',{signal}).then((response)=>response.json()).then((data)=>{initial_Posts(data.posts)
  setFetching(false)}
  )
  
  return()=>{
    console.log("Cleaning up useEffect");
    controller.abort();
  }
  
},[])





// map the postList and share it with Post component as props 
return <>
{fetching  && <LoadingSpinner/>}
{!fetching && postList.length===0 && <CheckPosts ></CheckPosts>}
{postList.map((post)=>{
  // console.log(post);
  return <Post postList={post} key={post.id}></Post>
  
})}


</>
}
export default PostList;