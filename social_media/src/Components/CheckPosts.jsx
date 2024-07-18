import { useContext } from "react";
import { PostListContext } from "../Store/post-list-store";



const CheckPosts=()=>{
  const {postList}=useContext(PostListContext);
return <>


{postList.length===0?<h3>Sorry no posts yet!</h3>:null}

</>
}
export default CheckPosts;