/** @jsx jsx */
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaRss,
  FaVimeoV,
  FaPodcast,
  FaUserLock
} from 'react-icons/fa';
import styled from '@emotion/styled';
import {css, jsx} from '@emotion/core';
import {ReactComponent as Elvanto} from '../assets/elvanto-icon.svg';

const Icons = styled.ul`
  grid-area: primary;
  display: grid;
  grid-auto-flow: column;
  margin: 0;
  margin-bottom: 40px;
  padding: 0;
  justify-items: center;
  li {
    list-style: none;
    display: inline;
    display: inline-block;
    background: #565a5c;
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }
  li:hover {
    background: #edb512;
  }
  @media (min-width: 788px) {
    padding: 0 20%;
  }
  @media (min-width: 1086px) {
    margin: 0;
    padding: 0;
  }
`;

const iconStyle = css`
  color: white;
  padding: 10px;
  height: 30px;
  width: 30px;
`;

export default function FooterIcons({
  twitter,
  facebook,
  instagram,
  elvanto,
  linkedin,
  youtube,
  vimeo,
  rss,
  podcast,
  login
}) {
  return (
    <Icons>
      {twitter && (
        <li>
          <a href={twitter.url} target="_blank" rel="noopener noreferrer">
            <FaTwitter css={iconStyle} />
          </a>
        </li>
      )}
      {facebook && (
        <li>
          <a href={facebook.url} target="_blank" rel="noopener noreferrer">
            <FaFacebookF css={iconStyle} />
          </a>
        </li>
      )}
      {instagram && (
        <li>
          <a href={instagram.url} target="_blank" rel="noopener noreferrer">
            <FaInstagram css={iconStyle} />
          </a>
        </li>
      )}
      {linkedin && (
        <li>
          <a href={linkedin.url} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn css={iconStyle} />
          </a>
        </li>
      )}
      {youtube && (
        <li>
          <a href={youtube.url} target="_blank" rel="noopener noreferrer">
            <FaYoutube css={iconStyle} />
          </a>
        </li>
      )}
      {vimeo && (
        <li>
          <a href={vimeo.url} target="_blank" rel="noopener noreferrer">
            <FaVimeoV css={iconStyle} />
          </a>
        </li>
      )}
      {rss && (
        <li>
          <a href={rss.url} target="_blank" rel="noopener noreferrer">
            <FaRss css={iconStyle} />
          </a>
        </li>
      )}
      {podcast && (
        <li>
          <a href={podcast.url} target="_blank" rel="noopener noreferrer">
            <FaPodcast css={iconStyle} />
          </a>
        </li>
      )}
      {elvanto && (
        <li>
          <a href={elvanto.url} target="_blank" rel="noopener noreferrer">
            <Elvanto css={iconStyle} />
          </a>
        </li>
      )}
      {login && (
        <li>
          <a href={login.url} target="_blank" rel="noopener noreferrer">
            <FaUserLock css={iconStyle} />
          </a>
        </li>
      )}
    </Icons>
  );
}
