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
    let { Data: listData = {} } = response || {};
    listData = listData || {};
    const returnValue = {
      ...listData,
      ConfigJson: JSON.parse(listData.ConfigJson || '{}'),
      ListCategoryJson: JSON.parse(listData.ListCategoryJson || '{}'),
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
