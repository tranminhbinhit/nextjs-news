import actions from "../constants/actionTypes";
import getEnow from "../utils/request";
import { useDispatch, useSelector } from "react-redux";
import { isSuccess } from "../utils/utils";
import { getCategoryList } from "./categoryService";
import { getSettingSystem } from "./settingService";

export async function getMenuType(params) {
  var result = await getEnow.getEnow("/web-api/menu/getmenutype", params);
  return isSuccess(result) ? result.result : [];
}
