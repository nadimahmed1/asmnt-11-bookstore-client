import React from 'react';

const Blog = (props) => {
    return (
        <div>
            <h2>My Bloging Site</h2>
            <h5>Heading: {props.Author}</h5>
            <h5>Author: {props.Heading}</h5>
        </div>
    );
};



export default Blog;