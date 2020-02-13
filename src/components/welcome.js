import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
//import SectionTitle from './section-title';
import BlockContent from '@sanity/block-content-to-react';
import sanity from '../lib/sanity';

const ContentWrapper = styled.div`
  span{
    display: inline-block;
  }
`;

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
}

export default function Welcome({welcome}) {
  const [data, setData] = useState(welcome);
  const [dataFetched, setDataFetched] = useState(Boolean(welcome));

  const welcomeQuery = `
    *[_type == "main"][0]{
      welcome[]{
        ...,
        content[]{
          ...,
          asset->
        }
      }
    }
  `;

  useEffect(() => {
    const fetchData = async () => {
      const result = await sanity.fetch(welcomeQuery);
      setData(result[0]);
      setDataFetched(true);
    };

    if (dataFetched === false) {
      fetchData();
    }
    else{
      setData(welcome)
    }
  }, [dataFetched, welcome, welcomeQuery]);

  return dataFetched === true ?  (
    <>
      {/*<SectionTitle text="Welcome" />*/}
      <ContentWrapper>
          <BlockContent blocks={data} serializers={serializers} />
      </ContentWrapper>
    </>
  ) : ('');
}