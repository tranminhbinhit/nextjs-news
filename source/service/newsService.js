import requestEnow from "../utils/request";
import { isEmpty, isEmptyObject, isSuccess } from "../utils/utils";

export async function getNewsList(params) {
  var result = await requestEnow.postEnow("/web-c/crawler-search", params);
  let resultData = {};
  if (isSuccess(result)) {
    resultData = result.Data;
    if (!isEmptyObject(resultData)) {
      resultData = resultData.map(m => {
        return {
          ...m,
          ValueData: JSON.parse(m.ValueData),
          SeoData: JSON.parse(m.SeoData)
        }
      });
    }
  }
  return resultData;
}

export async function getNewsHome(params) {
  var result = await requestEnow.postEnow("/web-c/crawler-home", params);
  let resultData = {};
  if (isSuccess(result)) {
    resultData = result.Data;
    if (!isEmptyObject(resultData)) {
      resultData = resultData.map(m => {
        return {
          ...m,
          ValueData: JSON.parse(m.ValueData),
          SeoData: JSON.parse(m.SeoData)
        }
      });
    }
  }
  return resultData;
}


export async function getNewsTop(params) {
  var result = await requestEnow.postEnow("/web-c/crawler-top", params);
  let resultData = {};
  if (isSuccess(result)) {
    resultData = result.Data;
    if (!isEmptyObject(resultData)) {
      resultData = resultData.map(m => {
        return {
          ...m,
          ValueData: JSON.parse(m.ValueData),
          SeoData: JSON.parse(m.SeoData)
        }
      });
    }
  }
  return resultData;
}

export async function getNewsDetail(params) {
  var result = await requestEnow.postEnow("/web-c/crawler-detail", params);
  let resultData = {};
  if (isSuccess(result)) {
    resultData = result.Data;
    if (!isEmptyObject(resultData)) {
      resultData = {
        ...resultData,
        ValueData: JSON.parse(resultData.ValueData),
        SeoData: JSON.parse(resultData.SeoData)
      };
    }
  }
  return resultData;
}