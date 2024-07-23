


const CheckPosts=({onFetchPostsClick})=>{
 
return <>


<center className="welcome-message"><h3 >Sorry no posts yet!
</h3>
<button type="button" className="btn btn-dark" onClick={onFetchPostsClick}>Fetch Posts</button>
</center>




</>
}
export default CheckPosts;