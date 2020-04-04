import React from 'react';
import './CommentList.css';

const CommentList = (props) => {
    const { comments } = props;
    const CommentList = comments.map((comment, index) => {
        return (
        <li key={index} className="CommentListItem">{comment}</li>
        );
    });
    return (
        <div>
            <ul> { CommentList } </ul>
        </div>
    );

}

export default CommentList;