import { useContext, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../Store/post-list-store";
import CheckPosts from "./CheckPosts";



const PostList =({selectedTab})=>{
  // Getting data from store using useContext;
const [FetchStatus,SetFetchStatus]=useState(false);


const {postList,initial_Posts}=useContext(PostListContext);

// handle  Fetch Posts
if(!FetchStatus){
  fetch('https://dummyjson.com/posts').then((response)=>response.json()).then((data)=>initial_Posts(data.posts)).catch((error)=>{
    console.log("Something Wrong"+error);
  })
SetFetchStatus(true);
}




// map the postList and share it with Post component as props 
return <>
{postList.length===0 && selectedTab==="Home"?<CheckPosts ></CheckPosts>:null}
{postList.map((post)=>{
  // console.log(post);
  return <Post postList={post} key={post.id}></Post>
  
})}


</>
}
export default PostList;