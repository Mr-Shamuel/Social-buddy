import React from 'react';
import {useState, useEffect} from 'react';
import Home2 from '../Home2/Home2';
import Posts from '../Posts/Posts';


const Home = () => {
    const [posts,setPosts] = useState([]) ;
 useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json())

.then(data=>setPosts(data))
 },[])
    return (
        <div>

             <h4>I have got {posts.length} post</h4>
             {
                 posts.map(post=><Posts key={post.id} post={post}></Posts>)
             }
        </div>
    );
};

export default Home;