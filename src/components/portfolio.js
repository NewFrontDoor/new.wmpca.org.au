import React from 'react';
import styled from '@emotion/styled';
import {NavButton as Button} from '../components/nav-button';
import SectionTitle from './section-title';

const Grid = styled.div`
  display: grid;
  justify-content: center;
  gap: 30px;
  img {
    width: 100%;
    display: block;
  }
  grid-template-columns: 1fr;
  @media (min-width: 788px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1086px) {
    grid-template-columns: repeat(3, 270px);
  }
`;

const Item = styled.div`
  overflow: hidden;
  position: relative;
  text-align: center;
  box-shadow: 2px 1px 4px #555;
  cursor: default;
`;

const Mask = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  opacity: 0;
  color: #fff;
  background-color: rgba(1, 44, 60, 0.7);

  &:hover {
    opacity: 1;
    h3 {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  h3 {
    line-height: 40px;
    text-transform: uppercase;
    font-size: 17px;
    padding: 1px;
    background: rgba(0, 0, 0, 0.8);
    margin: 20px 0 0 0;
    transition: all 0.2s ease-in-out;
    transform: translateY(-100px);
    opacity: 0;
  }

  button {
    display: inline-block;
    border: none;
    padding: 7px 14px;
    background: #000;
    color: #fff;
    text-transform: uppercase;
    box-shadow: 0 0 1px #000;
    margin-top: 10px;
    border-radius: 0;
  }
`;

export default function Portfolio({portfolio: {heading, content}}) {
  return (
    <>
      <SectionTitle text={heading} />
      <Grid>
        {content.map(({image, heading, description}) => {
          return (
            <Item key={heading}>
              <img src={image} alt="" />
              <Mask>
                <h3>{heading}</h3>
                <p>{description}</p>
                <Button type="button" to="/123">Learn More</Button>
              </Mask>
            </Item>
          );
        })}
      </Grid>
    </>
  );
}
