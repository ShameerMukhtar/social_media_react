import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../Store/post-list-store";
import CheckPosts from "./CheckPosts";
import LoadingSpinner from "./LoadingSpinner";



const PostList =()=>{
  
  
// Getting data from store using useContext;
const {postList,fetching}=useContext(PostListContext);



// map the postList and share it with Post component as prop
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