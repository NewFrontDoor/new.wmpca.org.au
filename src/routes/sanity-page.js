import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Header from '../components/header';
import BlockContent from '@sanity/block-content-to-react';
import sanity from '../lib/sanity';
import Form from '../components/form';
import getVideoId from 'get-video-id';
import Vimeo from '@u-wave/react-vimeo';
//import Youtube from 'react-youtube';
import Youtube from '@u-wave/react-youtube';
import AudioPlayer from 'react-audio-player'
import MainImage from '../components/main-image';

const Grid = styled.div`
  display: grid;
  gap: 20px;
`;

const Wrapper = styled.article`
  min-height: 550px;
`;

const InternalLinkSerializer = props => {
  return <Link to={props.mark.slug}>{props.children}</Link>;
};

function FormSerializer({node: {header, id, body, fields}}) {
  return <Form header={header} id={id} description={body} fields={fields} />;
}

const Audio = ({node}) => {
  const {url} = node;
  return <AudioPlayer src={url} autoplay controls />
}

const Video = ({node}) => {
  const {url} = node;
  if (url) {
    const video = getVideoId(url || null);

    if (video.service === 'youtube') {
      return <Youtube modestBranding annotations={false} video={video.id} height={360} width={640}/>;
    }

    if (video.service === 'vimeo') {
      return <Vimeo showTitle={false} showByline={false} video={video.id} />;
    }
  }
};


const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    form: FormSerializer,
    videoEmbed: Video,
    audioEmbed: Audio
  },
  marks: {
    internalLink: InternalLinkSerializer,
  }
}

export default function SanityPage({slug, pageData}) {
  const [data, setData] = useState(pageData);
  const [dataFetched, setDataFetched] = useState(Boolean(pageData));

  const pageQuery = `
    *[_type == "page" && slug.current match '${slug}']{
        ...,
          content[]{
            ...,
            _type == 'reference' => @-> {
              ...,
              blocks[] {
                ...,
                _type == 'reference' => @ ->
              }
            },
            markDefs[] {
              ...,
              _type == 'internalLink' => {
                  'slug': @.reference->slug.current
              }
            },
          asset->
          },
          mainImage{
            asset->
          },
          'id': _id,
        'pathname': '/' + slug.current
      }
  `;

  useEffect(() => {
    const fetchData = async () => {
      const result = await sanity.fetch(pageQuery);
      setData(result[0]);
      setDataFetched(true);
    };

    if (dataFetched === false) {
      fetchData();
    }
    else{
      setData(pageData)
    }
  }, [dataFetched, slug, pageData, pageQuery]);

  return dataFetched && data ? (
    <Grid>
      <Header heading={new Array(data.title)} />
      <Wrapper>
        {data.mainImage ? <MainImage mainImage={data.mainImage} /> : ''}
        <BlockContent blocks={data.content} serializers={serializers} />
      </Wrapper>
    </Grid>
      
  ) : (
    ''
  );
}

SanityPage.propTypes = {
  slug: PropTypes.string.isRequired,
  pageData: PropTypes.object
};