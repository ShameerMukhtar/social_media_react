import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../Store/post-list-store";



const PostList =()=>{
  // Getting data from store using useContext;

const {postList}=useContext(PostListContext);


// map the postList and share it with Post component as props 
return <>
{postList.map((post)=>{
  console.log(post);
  return <Post postList={post} key={post.id}></Post>
  
})}


</>
}
export default PostList;