import React from 'react';
// import Posts from '../Posts/Posts';

const Home2 = (props) => {
    const {id,body,title} = props.post;
    
    return (
        <div>
            <h3>Id: {id} {title}</h3>   
            <p>{body}</p>
            <button>Show components</button>
            
        </div>
    );
};

export default Home2;