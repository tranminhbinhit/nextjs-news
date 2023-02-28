import React from 'react';
import { connect } from 'react-redux';

class Loading extends React.Component {
  render() {
    const { isLoading, load } = this.props;
    if (isLoading || load) {
      return (
        <div className="now-loading">
          <div className="loading-center">
            <div className="loading-center-absolute">
              <div className="object object_one" />
              <div className="object object_two" />
              <div className="object object_three" />
              <div className="object object_four" />
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
});

export default connect(mapStateToProps)(Loading);
