import React from 'react';

export default function PortfolioItem({image, nid, title, url, content}) {
  return (
    <div className="row">
      <div className="span6">
        <div className="portfolio_image">{image}</div>
      </div>
      <div className="span4">
        <article id={nid}>
          {title.prefix}
          <h3 className="post_title">
            <a href={url}>{title.text}</a>
          </h3>
          {title.suffix}

          <div className="article_content">{content}</div>
        </article>
      </div>
    </div>
  );
}
