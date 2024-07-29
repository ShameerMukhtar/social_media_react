import { createContext, useReducer, useCallback, useState,useEffect } from "react";

// Create Context 
export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  initial_Posts: false,
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

newPostList=[action.payload.NewPost,...currPostList]
 console.log(action.payload);
}

return newPostList;
}


const PostListProvider = ({ children }) => {
  // Use useReducer for state management
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  // Add Initial Posts
  const initial_Posts = useCallback((apiResponse) => {
    console.log(apiResponse);
    let NewPost = [];
    apiResponse.forEach((Post) => {
      NewPost = [
        ...NewPost,
        {
          id: Post.id,
          title: Post.title,
          body: Post.body,
          reactions: Post.reactions.likes,
          tags: Post.tags,
          userId: Post.userid,
        },
      ];
    });
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: { NewPost },
    });
  }, [dispatchPostList]);

  // Add new post
  const addPost = useCallback((post) => {
    let NewPost = {
      id: post.id,
      title: post.title,
      body: post.body,
      reactions: post.reactions,
      tags: post.tags,
      userId: post.userId,
    };

    dispatchPostList({
      type: "ADD_POST",
      payload: { NewPost },
    });
  }, [dispatchPostList]);

  // Delete a post
  const deletePost = useCallback((postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  }, [dispatchPostList]);



  const [fetching,setFetching]=useState(false);

  // handle  Fetch initial Posts
  useEffect(()=>{
  setFetching(true);
  const controller = new AbortController();
  const signal=controller.signal;
  
    fetch('https://dummyjson.com/posts',{signal})
    .then((response)=>response.json())
    .then((data)=>{
      initial_Posts(data.posts)
    setFetching(false)}
    )
    
    return()=>{
      console.log("Cleaning up useEffect");
      controller.abort();
    }
    
  },[])







  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost, fetching }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
