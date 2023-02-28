import { useDispatch } from "react-redux";
import action from "../constants/actionTypes";
import { changeLanguage } from "../redux/action/mainAction";
import getEnow from "../utils/request";
import { isSuccess } from "../utils/utils";

export async function createConsultancyContract(params) {
  var result = await getEnow.postEnow("/web-api/static/consultancycontract", params);
  return isSuccess(result) ? result.result : {};
}
