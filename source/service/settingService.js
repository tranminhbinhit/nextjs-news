import { useDispatch } from "react-redux";
import action from "../constants/actionTypes";
import { changeLanguage } from "../redux/action/mainAction";
import requestEnow from "../utils/request";
import { isSuccess } from "../utils/utils";

export async function getSettingSystem(params) {
  var response = await requestEnow.postEnow(
    "/web-c/crawler-page",
    params
  );
  if (isSuccess(response)) {
    const { Data } = response;
    const returnValue = {
      ...Data,
      ConfigJson: JSON.parse(Data.ConfigJson || '{}'),
      ListCategoryJson: JSON.parse(Data.ListCategoryJson || '{}'),
    };
    // const returnValue = result.reduce((mapData, obj) => {
    //   let valueObj = obj.SettingValue;
    //   if (obj.SettingType === "boolen") {
    //     valueObj = obj.SettingValue === "true";
    //   }

    //   if (obj.SettingType === "number") {
    //     valueObj = parseToInt(obj.SettingValue);
    //   }

    //   mapData[obj.SettingCode] = {
    //     SettingName: obj.SettingName,
    //     SettingValue: valueObj,
    //   };
    //   return mapData;
    // }, {});
    return returnValue;
  } else {
    return {};
  }
}
