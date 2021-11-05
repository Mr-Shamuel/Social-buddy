import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';
import View from '../../View/View';


const PostDetails = () => {
  
   const {postid} =  useParams();
   const [post,setpost] =  useState({});
   
   useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
       .then(res=>res.json())
    //    
       .then(data=>setpost(data))


   },[postid])
   const [comment,setComment] = useState([]);
   useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/comments?postId${postid}`)
       .then(res=>res.json())
   
   
       .then(data=>setComment(data))


   },[postid])
    return (
        <div>
           
            <h1>My Post id is {postid}</h1>
            <h6>Title: {post.title}</h6>
            <p>body : {post.body}</p>
            <h6>Number of  comments ={comment.length} </h6>
            {
                comment.map(x=><View comment={x}></View>)
            }
           {/* <View></View> */}
         
          
        </div>
    );
};

export default PostDetails;