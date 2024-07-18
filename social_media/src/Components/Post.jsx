import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../Store/post-list-store";

const Post=({postList})=>{
  const {deletePost}=useContext(PostListContext);


return <>


<div className="card post-card" style={{width: "30rem"}}>

  <div className="card-body">
    
 
    <h5 className="card-title">{postList.title}
    <span  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(postList.id)}>
    <MdDelete />
    
  </span>
   
    
    </h5>
    <p className="card-text">{postList.body}</p>
    {postList.tags.map((tag)=>{
      return <span key={tag} className="badge text-bg-primary hashtag">{tag}  </span>


    })}
      
     
    
  </div>
  <div className="alert alert-secondary" role="alert">
  <p>
  <span className="badge rounded-pill text-bg-dark ">This post reacted by {postList.reactions} people.</span>
    </p>
</div>

</div>


</>
}
export default Post;