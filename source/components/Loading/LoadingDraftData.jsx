/*eslint-disable*/
import React from 'react';

class LoadingDraftData extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header id="header" className="header has-sticky sticky-jump">
          <div className="header-wrapper">
            <div id="masthead" className="header-main">
              <div
                className="header-inner flex-row container logo-left medium-logo-center"
                role="navigation"
              >
                <div id="logo" className="flex-col logo">
                  test data
                </div>

                <div className="flex-col show-for-medium flex-left">
                  <ul className="mobile-nav nav nav-left" />
                </div>
              </div>
            </div>
            <div className="header-bg-container fill">
              <div className="header-bg-image fill" />
              <div className="header-bg-color fill" />
            </div>
          </div>
        </header>
        <main id="main">
          <div id="content" role="main" className="content-area">
          </div>
        </main>
      </React.Fragment>
    );
  }
}
export default LoadingDraftData;
