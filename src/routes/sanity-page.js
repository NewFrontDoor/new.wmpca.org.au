import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Header from '../components/header';
import BlockContent from '@sanity/block-content-to-react';
import sanity from '../lib/sanity';
import Form from '../components/form';

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

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    form: FormSerializer
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