import getEnow from "../utils/request";
import { isSuccess } from "../utils/utils";

export async function getCategoryList(params) {
  var result = await getEnow.getEnow("/web-api/category/getlist", params);
  return isSuccess(result) ? result.result : [];
}

export async function getCategoryDetail(params) {
  var result = await getEnow.getEnow("/web-api/category/getdetail", params);
  return isSuccess(result) ? result.result : [];
}
