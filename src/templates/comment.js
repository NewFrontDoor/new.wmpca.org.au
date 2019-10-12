import React from 'react';
import Avatar from '../components/avatar';

export default function Comment({author, date, permalink, content, signature}) {
  return (
    <article>
      <Avatar />
      <div className="comment_body">
        <ul className="comment_meta">
          <li>
            <i className="icon-user" /> by {author}
          </li>
          <li>
            <i className="icon-calendar" />
            {date}
          </li>
          <li>
            <i className="icon-info-sign" />
            {permalink}
          </li>
        </ul>
        <div className="comment_content">
          {content}
          {signature && (
            <div className="user-signature clearfix">{signature}</div>
          )}
        </div>
      </div>
      <div className="clearfix" />
    </article>
  );
}
