/* eslint-disable */
import React, { Component } from 'react';
import GoToTop from './components/GoToTop';
import ContractFixBelow from './components/ContractFixBelow';
import EndPageInfo from './components/EndPageInfo';
import ContractInfo from './components/ContractInfo';
import ContractFollow from './components/ContractFollow';
import ContractForm from './components/ContractForm';

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer-wrapper">
          <section className="section footer">
            <div className="bg section-bg fill bg-fill bg-loaded">
              <div className="section-bg-overlay absolute fill" />
            </div>

            <div className="section-content relative">
              <ContractForm />
              <div className="is-divider divider clearfix" />
              <ContractFollow />
              <div className="is-divider divider clearfix" />
              <ContractInfo />
            </div>
          </section>

          <EndPageInfo />
          <ContractFixBelow />
          <GoToTop />
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
