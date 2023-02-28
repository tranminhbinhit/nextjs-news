import getEnow from "../utils/request";
import { isSuccess } from "../utils/utils";

export async function createOrder(params) {
  var result = await getEnow.postEnow("/web-api/order/create", params);
  return isSuccess(result) ? result.result : {};
}