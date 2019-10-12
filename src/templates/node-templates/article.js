import React from 'react';
import PostShare from '../,,.components/post-share';
import Comments from '../comment-wrapper';

export default function Article({image, nid, title, url, content, teaser}) {
  return (
    <article id={nid}>
      {title.prefix}
      <h3 className="post_title">
        <a href={url}>{title}</a>
      </h3>
      {title.suffix}
      {image}

      <div className="article_content">{content}</div>

      <PostShare />

      {teaser && (
        <div className="read_more">
          <a href="<?php print $node_url;?>">read more &raquo;</a>
        </div>
      )}
      <hr />

      <Comments />
    </article>
  );
}
