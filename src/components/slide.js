/** @jsx jsx */
import {jsx, css} from '@emotion/core';

const slide = css`
  flex: 0 0 auto;
  width: 80%;
  position: relative;
  padding-left: 10%;
  counter-increment: my-counter;
  div {
    background-color: rgb(40, 44, 52);
    position: relative;
    border-radius: 0.5rem;
    min-height: 200px;
    padding-bottom: 46%;
    font-size: 5rem;
    color: white;
    font-weight: 300;
    line-height: 1;
    text-align: center;
  }
`;

export default function Slide({number}) {
  return (
    <div css={slide}>
      <div>{number}</div>
    </div>
  );
}
