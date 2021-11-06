import React from 'react';
import { useHistory } from 'react-router';

const Posts = (props) => {
    const { id, body, title } = props.post;
    const history = useHistory();
    const showComment = id => {
        const url = `post/${id}`;
        history.push(url)

    }
    return (
        <div>
            <h3>Id: {id} {title}</h3>
            <p>{body}</p>
            <button onClick={() => showComment(id)}>Show components</button>

        </div>
    );
};

export default Posts;