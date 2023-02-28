import getEnow from "../utils/request";
import { isSuccess } from "../utils/utils";

export async function getBannerByType(params) {
  var result = await getEnow.getEnow("/web-api/banner/getbytype", params);
  return isSuccess(result) ? result.result : [];
}