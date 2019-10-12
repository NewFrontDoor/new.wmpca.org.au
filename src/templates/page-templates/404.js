import React from 'react';
import Header from '../components/header';
import MainContent from '../../components/main-content';

export default function FourOhFour({title}) {
  return (
    <div className="container">
      <div className="row">
        <div className="span12">
          <Header heading={title} />

          <div className="row">
            <div id="main_content_wrap" className="span12">
              <MainContent>
                <div className="error_wrap">
                  <div className="error_img">
                    <img src="/images/404.png" alt="404" />
                  </div>

                  <div className="error_text">
                    <h2>Page not found</h2>
                    <p>
                      We're sorry, but the page you are looking for cannot be
                      found. Try one of the following instead:
                    </p>
                    <br />
                    <p>
                      <a className="btn btn-large" href="/">
                        Home
                      </a>
                    </p>
                  </div>
                </div>
              </MainContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
