import { useDispatch } from "react-redux";
import action from "../constants/actionTypes";
import { changeLanguage } from "../redux/action/mainAction";
import getEnow from "../utils/request";
import { isSuccess } from "../utils/utils";

export async function getSettingSystem(params) {
  var response = await getEnow.getEnow(
    "/web-api/setting/getsettingsystem",
    params
  );
  if (isSuccess(response)) {
    const { result } = response;
    const returnValue = result.reduce((mapData, obj) => {
      let valueObj = obj.SettingValue;
      if (obj.SettingType === "boolen") {
        valueObj = obj.SettingValue === "true";
      }

      if (obj.SettingType === "number") {
        valueObj = parseToInt(obj.SettingValue);
      }

      mapData[obj.SettingCode] = {
        SettingName: obj.SettingName,
        SettingValue: valueObj,
      };
      return mapData;
    }, {});
    return returnValue;
  } else {
    return {};
  }
}
