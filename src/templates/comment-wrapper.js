import React from 'react';
import CommentForm from '../components/comment-form';

export default function CommentWrapper({title, comments, showCommentForm}) {
  return (
    <section id="comments">
      {title.prefix}
      <h4 className="comments_title">{title}</h4>
      {title.suffix}
      {comments.map(comment => {
        return <Comment comment={comment} />;
      })}

      {showCommentForm && (
        <section id="comment-form-wrapper">
          <h4 className="comments_title">Add new comment</h4>
          <CommentForm />
        </section>
      )}
    </section>
  );
}
