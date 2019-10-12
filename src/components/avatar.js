import React from 'react';

export default function Avatar({image}) {
  return (
    <div className="comment_avatar">
      {image ? <img src={image.src} /> : <img src="/images/anon.png" />}
    </div>
  );
}
