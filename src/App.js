import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import styled from '@emotion/styled';
import {LatestSermon} from '@newfrontdoor/sermon';
import Sidebar from './routes/sidebar';
import FrontPage from './routes/front-page';
import Page from './routes/page';
import FooterIcons from './components/footer-icons';
import Footer from './routes/footer';
import ActionBlock from './components/action-block';
import TalksBlock from './components/talks-block';
import {contact, portfolio, menu, heading, slides, about, newsletter, connect, synergy} from './data/app-content';
import CalendarBlock from './components/calendar-block';
import ResourcesBlock from './components/resources-block';

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

const FooterBox = styled.div`
  display: flex;
  justify-content: center;
  grid-area: ${props => props.area};
`;

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Sidebar img menu={menu} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <FrontPage
                slides={slides}
                panels={false}
                portfolio={false}
                contact={false}
                heading={heading}
              />
            )}
          />
          <Route exact path="/talks" render={() => <Page heading={['Talks']} content={<TalksBlock/>}/>} />
          <Route exact path="/calendar" render={() => <Page heading={['Calendar (Example)']} content={<CalendarBlock/>}/>} />
          <Route exact path="/about" render={() => <Page pageData={about}/> } />
          <Route exact path="/connect" render={() => <Page pageData={connect}/>} />
          <Route exact path="/newsletter" render={() => <Page pageData={newsletter} />} />
          <Route exact path="/synergy" render={() => <Page pageData={synergy} />} />
          <Route exact path="/resources" render={() => <Page heading={['Resources']} content={<ResourcesBlock/>}/>} />
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
              />
            ))}
          </div>
        </FooterBox>
        <FooterIcons
          facebook={{url: 'test'}}
          twitter={{url: 'test'}}
          instagram={{url: 'test'}}
          vimeo={{url: 'test'}}
          podcast={{url: 'test'}}
          elvanto={{url: 'test'}}
          login={{url: 'test'}}
        />
        <FooterBox area="sidebar2">
          <LatestSermon
            title="Test"
            preacher="Test Guy"
            sermonUrl="www.google.com"
          />
        </FooterBox>
        <FooterBox area="tertiary">
          <p>Bla bla bla bla bla bla bla bla bla bla</p>
        </FooterBox>
      </Footer>
    </BrowserRouter>
  );
}
