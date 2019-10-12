import React from 'react';
import PostShare from '../components/post-share';

export default function Node({title, content, teaser}) {
  return (
    <article>
      {title.prefix}
      <h3 className="post_title">
        <a href={title.url}>{title.name}</a>
      </h3>
      {title.suffix}
      <div className="article_content">{content}</div>

      <PostShare />

      {teaser && (
        <div className="read_more">
          <a href="<?php print $node_url;?>">read more &raquo;</a>
        </div>
      )}
      <hr />
    </article>
  );
}
