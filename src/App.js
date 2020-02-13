import React, { useEffect, useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import styled from '@emotion/styled';
//import {LatestSermon} from '@newfrontdoor/sermon';
import Sidebar from './routes/sidebar';
import FrontPage from './routes/front-page';
import Page from './routes/page';
import FooterIcons from './components/footer-icons';
import Footer from './routes/footer';
import ActionBlock from './components/action-block';
//import TalksBlock from './components/talks-block';
import {contact, menu /*slides, heading, about, newsletter, connect, blog, welcome, portfolio*/} from './data/app-content';
//import CalendarBlock from './components/calendar-block';
//import ResourcesBlock from './components/resources-block';
import SanityPage from './routes/sanity-page';

import sanity from './lib/sanity';

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas: unset;
  gap: 0;
  @media (min-width: 640px) {
    grid-template-columns: 170px 1fr;
    gap: 30px;
    grid-template-areas:
      'sidebar header'
      'sidebar main';
  }
`;

const mainQuery = `
  *[_type == "main"][0]{
    heading,
    images[] {
      'src': asset->url,
      'alt': '',
      'key': _key
    },
    welcome[]{
      ...      
    }
  }
`;

const pagesQuery = `
*[_type == "page"] {
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

const menuQuery = `
*[_type == "main"][0] {
  menuitems[]{
    text,
    childpages[]->{
      title,
      slug,
      'pathname': '/' + slug.current
    }
  }
}
`;

const FooterBox = styled.div`
  display: flex;
  justify-content: center;
  grid-area: ${props => props.area};
  min-height: 100px;
`;

export default function App() {
  const [mainData, setMainData] = useState();
  const [mainFetch, setMainFetch] = useState(false);
  const [pagesData, setPagesData] = useState(null);
  const [pagesFetched, setPagesFetched] = useState(false);

  useEffect(() => {
    const allQuery = `
      {
        'menuData': ${menuQuery},
        'mainData': ${mainQuery}
      }
    `;

    async function fetchData() {
      const result = await sanity.fetch(allQuery);
      setMainData(result);
      setMainFetch(true);
    }
    if(mainFetch === false){
      fetchData();
    }
  }, [mainFetch]);

useEffect(() => {
  async function fetchData() {
    const result = await sanity.fetch(pagesQuery);

    const arrayToObject = array =>
      array.reduce((obj, item) => {
        obj[item.slug.current] = item;
        return obj;
      }, {});

    const pagesObject = arrayToObject(result);
    setPagesData(pagesObject);
    setPagesFetched(true);
  }
  if(pagesFetched === false){
    fetchData();
  }
  
}, [pagesFetched, pagesData]);

  return mainFetch === true ?  (
    <BrowserRouter>
      <Container>
        <Sidebar img menu={menu} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <FrontPage
                slides={mainData.mainData.images}
                panels={false}
                portfolio={false}
                contact={false}
                heading={mainData.mainData.heading}
                welcome={mainData.mainData.welcome}
              />
            )}
          />
          {/*<Route exact path="/calendar" render={() => <Page heading={['Calendar (Example)']} content={<CalendarBlock/>}/>} />*/}
          <Route exact path="/:slug" render={({match}) => <SanityPage slug={match.params.slug} pageData={pagesData ? pagesData[match.params.slug] : undefined}/>} />
          <Route path="/:path" render={() => <Page heading={['New page']} />} />
        </Switch>
      </Container>
      <Footer
        subtext={`© WOMENS MINISTRY IN THE PRESBYTERIAN CHURCH OF AUSTRALIA ${new Date().getFullYear()}. IN PARTNERSHIP WITH NEW FRONT DOOR`}
      >
        <FooterBox area="sidebar">
          <div>
            {contact.content[1].map(item => (
              <ActionBlock
                heading={item.heading}
                content={item.content}
                action={item.action}
                url={item.url}
                key={item.heading}
              />
            ))}
          </div>
        </FooterBox>
        <FooterIcons
          
          /*twitter={{url: 'test'}}
          instagram={{url: 'test'}}
          podcast={{url: 'test'}}
            login={{url: 'test'}}*/

          facebook={{url: 'https://www.facebook.com/wmpres/'}}
        />
        <FooterBox area="sidebar2">
          {/*<LatestSermon
            title="Test"
            preacher="Test Guy"
            sermonUrl="www.google.com"
          />*/}
        </FooterBox>
        <FooterBox area="tertiary">
          <p></p>
        </FooterBox>
      </Footer>
    </BrowserRouter>
  ) : ('');
}