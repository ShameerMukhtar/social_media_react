import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../Store/post-list-store";
import CheckPosts from "./CheckPosts";



const PostList =({selectedTab})=>{
  // Getting data from store using useContext;

const {postList}=useContext(PostListContext);

// handle onClick Fetch Posts
const onFetchPostsClick=()=>{
  fetch('https://dummyjson.com/posts').then((response)=>response.json()).then((obj)=>console.log(obj.posts))
}




// map the postList and share it with Post component as props 
return <>
{postList.length===0 && selectedTab==="Home"?<CheckPosts onFetchPostsClick={onFetchPostsClick}></CheckPosts>:null}
{postList.map((post)=>{
  // console.log(post);
  return <Post postList={post} key={post.id}></Post>
  
})}


</>
}
export default PostList;