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
  console.log(resultData, 'result');
  return resultData;
}

export async function getNewsListRelate(params) {
  var result = await requestEnow.postEnow("/web-api/news/getlistrelate", params);
  return isSuccess(result) ? result.result : [];
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