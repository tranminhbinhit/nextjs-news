/* eslint-disable */
import axios from "axios";
import { API_ENOW } from "../constants/constants";

import {
  getRandomKey,
  getKeyHash,
  formatDateTimeServer,
  getDate,
  isEmptyObject,
  getUrlFromObject,
} from "../utils/utils";

class Request {
  // static getToken() {
  //   return store.getState().auth.token;
  // }
  static header(url, body = "") {
    let randomKey = getRandomKey(-10);
    let timeStamp = formatDateTimeServer(getDate(0));
    let hashKey = ""; //getKeyHash(url, body, randomKey, timeStamp);
    return {
      "Content-Type": "application/json",
      "E-Client-Language": "vi",
      "E-Client-Name": "EnowR",
      "E-Access-Token": hashKey,
      "E-Access-Timestamp": timeStamp,
      "E-Random-Key": randomKey,
      "E-User-Token": "",
    };
  }

  static async postEnow(endpoint, params = {}) {
    const requestUrl = API_ENOW + endpoint;
    try {
      const requestOptions = {
        method: "POST",
        headers: Request.header(endpoint, ""),
        body: JSON.stringify(params),

        // mode: "cors",
        // cache: "no-cache",
        // credentials: "same-origin",
        // redirect: "follow",
        // referrerPolicy: "no-referrer",
      };
      const response = await fetch(requestUrl, requestOptions);
      return await response.json();
    } catch (error) {
      return null;
    }
  }

  static async getEnow(endpoint, params = {}) {
    let requestUrl = API_ENOW + endpoint;
    if (!isEmptyObject(params)) {
      requestUrl = `${requestUrl}?${getUrlFromObject(params)}`;
    }
    try {
      const response = await fetch(requestUrl, {
        params,
        headers: Request.header(endpoint, ""),
      });
      return await response.json();
    } catch (error) {
      return null;
    }
  }
}

export default Request;
