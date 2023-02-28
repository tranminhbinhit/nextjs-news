import getEnow from "../utils/request";
import { isSuccess } from "../utils/utils";

export async function getLadingPage(params) {
  var result = await getEnow.getEnow("/web-api/page/landingpage", params);
  return isSuccess(result) ? result.result : [];
}

export async function getLadingPageBox(params) {
  var result = await getEnow.getEnow("/web-api/page/landingpagebox", params);
  return isSuccess(result) ? result.result : [];
}
