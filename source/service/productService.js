import getEnow from "../utils/request";
import { isSuccess } from "../utils/utils";

export async function getProductByCategory(params) {
  var result = await getEnow.getEnow("/web-api/product/getbycategory", params);
  return isSuccess(result) ? result.result : [];
}

export async function getProductListRelate(params) {
  var result = await getEnow.getEnow("/web-api/product/getlistrelate", params);
  return isSuccess(result) ? result.result : [];
}

export async function getProductSearch(params) {
  var result = await getEnow.getEnow("/web-api/product/getsearch", params);
  return isSuccess(result) ? result.result : [];
}

export async function getProductDetail(params) {
  var result = await getEnow.getEnow("/web-api/product/getdetail", params);
  return isSuccess(result) ? result.result : [];
}
