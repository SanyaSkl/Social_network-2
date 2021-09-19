import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://static3.depositphotos.com/1002188/144/i/600/depositphotos_1448005-stock-photo-smile.jpg'/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;