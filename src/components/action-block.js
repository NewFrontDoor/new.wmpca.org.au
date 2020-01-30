import React from 'react';
import styled from '@emotion/styled';
import {NavButton as Button} from './nav-button';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 18px;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
  }
  p {
    line-height: 1.7;
    font-size: 13px;
  }
  button {
    align-self: flex-end;
  }
`;

const ExternalLink = styled.a`
color: #797979;
:hover{
  color: #fff;
}
`;

export default function ActionBlock({heading, content, action, url}) {
  return (
    <Block>
      <h4>{heading}</h4>
      <p>
        {Array.isArray(content)
          ? content.map(line => (
              <span>
                {line}
                <br />
              </span>
            ))
          : content}
      </p>
      {action && <Button to={action.to}>{action.text}</Button>}
      {url && <ExternalLink href={url.href} target="_blank" rel="noreferrer noopener">{url.text}</ExternalLink>}
    </Block>
  );
}
