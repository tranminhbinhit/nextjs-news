import React from 'react';
//import './LoadingBox.scss';

const LoadingBox = (props) => {
  const { loading_number, show, className = '' } = props;
  const showClass = show ? 'show' : '';
  const tmp = [];
  for (let i = 0; i < loading_number; i += 1) {
    tmp.push(i);
  }
  const item_loading = tmp.map(item => (
    <div className="box-loading" key={item}>
      <div className="box-thumbnail" />
      <div className="box-line-df" />
      <div className="box-line-lgx" />
      <div className="box-line-lg" />
    </div>
  ));

  return <div className={`${`enow-loading-box ${className}`}  ${showClass}`}>{item_loading}</div>;
};

export default React.memo(LoadingBox);
