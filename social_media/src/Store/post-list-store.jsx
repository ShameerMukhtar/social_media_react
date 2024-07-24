import { act } from "react";
import { createContext, useReducer } from "react";


// Create Context 
 export const PostListContext = createContext({ 
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  initial_Posts:()=>{},
});

  // Reducer Function (Pure Function)
const postListReducer=(currPostList,action)=>{
  let newPostList=currPostList;

  // Delete posts
if(action.type==="DELETE_POST"){
newPostList=currPostList.filter((post)=>
  post.id!==action.payload.postId
)
}

// Existing posts
else if(action.type==="ADD_INITIAL_POSTS"){
  newPostList=action.payload.NewPost;
}


// Add a new post
else if(action.type==="ADD_POST"){
//console.log(action.payload.tags);
newPostList=[action.payload,...currPostList]
 //console.log(action.payload);
 //console.log(currPostList);
}

return newPostList;
}




const PostListProvider = ({ children }) => {
  // Used useReducer for state managemant 
  const [postList, dispatchPostList] = useReducer(postListReducer,[]);

  // Add Initial Posts
  const initial_Posts=(apiResponse)=>{
    let NewPost=[];
   apiResponse.map((Post)=>{
   NewPost=[...NewPost,{
    id:Post.id,
    title:Post.title,
    body:Post.body,
    reactions:Post.reactions.likes,
    tags:Post.tags,
    userId:Post.userid,}
  
  ]
  
   })
   dispatchPostList({
    type:"ADD_INITIAL_POSTS",
    payload:{
      NewPost
    }

   })
  }
  
  
  
  
  // add new post
  const addPost = (userId,postTitle,postBody,reactions,tags) => {
   
   
    dispatchPostList({
type:"ADD_POST",
payload:{
  id:Date.now(),
  title:postTitle,
  body:postBody,
  reactions:reactions,
  tags:tags,
  userId:userId,
  
}

    })
  };
// Delete a Post
  
const deletePost = (postId) => {
 // console.log(`the post id is ${postId}`);
dispatchPostList({
type: "DELETE_POST",
payload:{
  postId,
}

})
  

};

  return (
    // Share postList, addPost, deletePost with childrens
    <PostListContext.Provider value={{ postList, addPost, deletePost,initial_Posts }}>
      {children}
    </PostListContext.Provider>
  );
};


// Default value for Context
// const DEFAULT_POST_LIST=[
//   {
// id:"1",
// title:"Going to Lahore",
// body:"Hello guys going to lahore for my vacations. Hope to enjoy alot! Peace out",
// userid:"user-3"
// ,
// reactions:"5",
// tags:["Lahore","Vacations","Enjoyment"]


// },
// {
  
//     id:"2",
//     title:"Graduated",
//     body:"Hello guys finally i am graduated"
//     ,
//     userid:"user-7"
    
//     ,reactions:"17",
//     tags:["Graduation","Practical Life"]
    
    
    
// }
// ]



export default PostListProvider;