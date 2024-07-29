import { useContext, useEffect,useState } from "react";
import Post from "./Post";
import { PostListContext } from "../Store/post-list-store";
import CheckPosts from "./CheckPosts";
import LoadingSpinner from "./LoadingSpinner";



const PostList =({fetching})=>{
  // Getting data from store using useContext;


const {postList,initial_Posts}=useContext(PostListContext);






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