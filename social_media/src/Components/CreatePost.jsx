import { useContext, useRef, useState } from "react";
import { PostListContext } from "../Store/post-list-store";


const CreatePost=()=>{

// useContext 
const {addPost}=useContext(PostListContext);
// message if feilds remains empty
const [message,setMessage]=useState();


// useRef for form data
const userIdElement=useRef();
const postTitleElement=useRef();
const postBodyElement=useRef();
const reactionsElement=useRef();
const tagsElement=useRef();

const handleSubmit=(event)=>{
  event.preventDefault();
;
const userId=userIdElement.current.value;
const postTitle=postTitleElement.current.value;
const postBody=postBodyElement.current.value;
const reactions=reactionsElement.current.value;
const tags = tagsElement.current.value.split(" ");
// To clean fields after submission
userIdElement.current.value="";
postTitleElement.current.value="";
postBodyElement.current.value="";
reactionsElement.current.value="";
tagsElement.current.value="";


// create a new post using fetch

if(userId && postTitle && postBody && reactions &&tags){
setMessage("");
fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: postTitle,
    body:postBody,
    reactions:reactions,
    tags:tags,
    userId:userId

    /* other product data */
  })
})
.then(res => res.json())
.then(posts=>
  
  {
    
  addPost(posts)

  
  
});



}
else{
  setMessage("Something missing recheck please..");
}


}


return <>
<form className="create-post" onSubmit={handleSubmit}>


<div className="mb-3">
    <label
    htmlFor="userid" 
    className="form-label">User ID</label>
    <input 
    type="text" 
    className="form-control" 
    id="title" 
    ref={userIdElement}
    
    placeholder="Your user Id"
    />
     </div>
  
  
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input 
    type="text" 
    className="form-control" 
    id="title" 
    placeholder="How are you feeling today.." 
    ref={postTitleElement}/>
     </div>
  
     <div className="mb-3">
    <label 
    htmlFor="body" 
    className="form-label">Body
    </label>
    <textarea 
    rows="4" 
    type="text" 
    className="form-control" 
    id="title" 
    ref={postBodyElement} 
    placeholder="More about post.."
    />
     </div>

     <div className="mb-3">
    <label 
    htmlFor="reactions" className="form-label">Number of reactions</label>
    <input 
    type="number" 
    className="form-control" 
    id="reactions" 
    placeholder="Enter number of reactions."   
    ref={reactionsElement}/>
     </div>



     <div className="mb-3">
    <label htmlFor="hashtags" className="form-label">Hashtags</label>
    <input 
    type="text" 
    className="form-control" 
    id="hashtags" 
    placeholder="Enter number of tags using space"   
    ref={tagsElement}/>
     </div>

<div>{message && <p className="message">{message}</p> } </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>




</>
}



export default CreatePost;