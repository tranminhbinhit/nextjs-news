import React from 'react';

const LoadingOverlayContent = (props) => {
  const { isLoading = true } = props;
  return isLoading ? (
    <div className="module-overlay">
      <div className="preloader_type preloader_dot">
        <div className="module-preloader jeg_preloader dot">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="module-preloader jeg_preloader circle">
          <div className="jnews_preloader_circle_outer">
            <div className="jnews_preloader_circle_inner"></div>
          </div>
        </div>
        <div className="module-preloader jeg_preloader square">
          <div className="jeg_square">
            <div className="jeg_square_inner"></div>
          </div>
        </div>
      </div>
    </div>
  ) : "";
};

export default React.memo(LoadingOverlayContent);
