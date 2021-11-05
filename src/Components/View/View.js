import React from 'react';

const View = (props) => {
    console.log("this is ", props);
    const {name,postId,email} = props.comment;
    return (
        <div>
            {/* <h6>Post Id : {postId}</h6> */}
            <p><strong>name:</strong> {name} Email: {email}</p>
        </div>
    );
};

export default View;