import React from 'react';
import styled from '@emotion/styled';

const ImageWrapper = styled.div`
  max-height: 400px;
  margin-bottom: 40px;
  display: grid;
  justify-items: center;
  align-items: center;
  img { }
`;

export default function MainImage({mainImage}) {
  return (
    <ImageWrapper>
        <img src={mainImage.asset.url} alt="" style={{maxWidth: "100%", height: "auto", maxHeight: "400px"}}/>
    </ImageWrapper>
  );
}
