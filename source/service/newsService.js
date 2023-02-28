import getEnow from "../utils/request";
import { isSuccess } from "../utils/utils";

export async function getNewsList(params) {
  var result = await getEnow.getEnow("/web-api/news/getlist", params);
  return isSuccess(result) ? result.result : [];
}

export async function getNewsListRelate(params) {
  var result = await getEnow.getEnow("/web-api/news/getlistrelate", params);
  return isSuccess(result) ? result.result : [];
}

export async function getNewsDetail(params) {
  var result = await getEnow.getEnow("/web-api/news/getdetail", params);
  return isSuccess(result) ? result.result : [];
}

export async function getNewsFilter(params) {
  var result = await getEnow.getEnow("/web-api/news/getlistfilter", params);
  return isSuccess(result) ? result.result : [];
}

export async function getNewsCategory(params) {
  var result = await getEnow.getEnow("/web-api/news/getlistcategory", params);
  return isSuccess(result) ? result.result : [];
}