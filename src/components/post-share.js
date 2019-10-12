import React from 'react';

const types = {
  twitter: '',
  facebook: '',
  linkedin: '',
  reddit: '',
  email: ''
};

export default function PostShare({social}) {
  return (
    <div className="post_share_wrap">
      <ul className="post_share">
        {social.map(item => {
          return (
            <li>
              <a href={item.url}>
                <img src={types[item.type]} alt={item.type} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
