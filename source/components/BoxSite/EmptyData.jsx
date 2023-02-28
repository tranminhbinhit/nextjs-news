import React from 'react';
import { isEmpty, isEmptyObject } from '../../utils/utils';
//import './LoadingBox.scss';

const EmptyData = (props) => {
  const { listData, title } = props;
  return isEmptyObject(listData) ? (<div>{!isEmpty(title) ? title : 'Dữ liệu đang được cập nhật'}</div>) : '';
};

export default EmptyData;
