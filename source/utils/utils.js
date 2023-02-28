/* eslint-disable no-unused-vars */
import SHA256 from "crypto-js/sha256";
import hmacSHA256 from "crypto-js/hmac-sha256";
import SHA1 from "crypto-js/sha1";
import moment from "moment";
import Base64 from "crypto-js/enc-base64";

import {
  CDN_URL,
  COMMON_CONST,
  CURRENCY_SYMBOL,
  SERVER_KEY,
  VERSION_CONFIG,
} from "../constants/constants";
import { EnumRoutingPage } from "../constants/enum";

export function isEmpty(value) {
  return value === undefined || value === null || value === "";
}

export function isEmptyObject(obj) {
  if (obj !== null && obj !== undefined) return Object.keys(obj).length === 0;
  return true;
}

export function hashPassword(password, salt, verifyCode) {
  return String(
    SHA256(String(SHA256(String(SHA1(password + salt)))) + verifyCode)
  );
}

export function isSuccess(response) {
  return response && response.success;
}

export function getParameterByName(rawName, rawUrl) {
  let url = rawUrl;
  if (!rawUrl) {
    url = window.location.href;
  }
  const name = rawName.replace(/[[\]]/g, "\\$&");
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export function validateEmail(email) {
  // eslint-disable-next-line max-len
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function genNonce() {
  const charset =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._~";
  const result = [];
  window.crypto
    .getRandomValues(new Uint8Array(32))
    .forEach((c) => result.push(charset[c % charset.length]));
  return result.join("");
}

export function formatCurrency(
  value,
  unit = CURRENCY_SYMBOL,
  locale = process.env.VER,
  digit = 0
) {
  if (isEmpty(value) || value === 0) {
    return "Liên hệ";
  }
  const v = parseFloat(value).toLocaleString(locale, {
    minimumFractionDigits: digit,
  });
  return unit ? `${v}${unit}` : `${v}`;
}

export function getDate(offset = 0) {
  return moment().add(offset, "days").toDate();
}

export function parseDate(date) {
  return moment(date, COMMON_CONST.FormatDate).toDate();
}

export function parseDateTime(date) {
  return moment(date, COMMON_CONST.FormatDateTimeServer).toDate();
}

export function formatDateServer(date) {
  return moment(date).format(COMMON_CONST.FormatDateServer);
}

export function formatDateTimeServer(date) {
  return moment(date).format(COMMON_CONST.FormatDateTimeServer);
}
export function formatDate(date) {
  return moment(date).format(COMMON_CONST.FormatDate);
}

export function formatDateTime(date) {
  return moment(date).format(COMMON_CONST.FormatDateTime);
}

export function formatTime(date) {
  return moment(date).format(COMMON_CONST.FormatTime);
}

export function formatDateTimeView(date) {
  return moment(date).format(COMMON_CONST.FormatDateView);
}

export function formatJustDate(date) {
  return moment(date).format(COMMON_CONST.FormatJustDate);
}

export function formatJustMonth(date) {
  return moment(date).format(COMMON_CONST.FormatJustMonth);
}

export function parseToInt(value) {
  return parseInt(value, 10);
}

export function getIdsPaging(itemIds, activePage, pageSize) {
  const pageIndex = activePage - 1;
  return !isEmpty(itemIds)
    ? itemIds.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize)
    : [];
}

export function getIdsPagingMaps(itemList, activePage, pageSize) {
  const itemIds = !isEmpty(itemList) ? Array.from(itemList.keys()) : [];
  return getIdsPaging(itemIds, activePage, pageSize);
}

export function getTotalPage(totalRow, pageSize) {
  let result = parseToInt(totalRow / pageSize);
  if (totalRow % pageSize > 0) {
    result += 1;
  }
  return result;
}

export function numberToArray(count, start = 1) {
  return [...Array(count - start).keys()].map((item) => item + start);
}

export function decodeUtf8(arrayBuffer) {
  return new TextDecoder("utf-8").decode(arrayBuffer);
}

export async function requestNotificationPermission() {
  // Check if the browser supports notifications
  if ("Notification" in window && Notification.permission !== "denied") {
    return Notification.requestPermission();
  }
  return "denied";
}

export async function sendNotify({ message, icon = "", detail }) {
  // Check if the browser supports notifications
  if ("Notification" in window) {
    const createNotification = () => {
      const notification = new Notification(message, {
        body: detail,
        icon,
        tag: "uniqueTag",
      });
      notification.onclick = () => {
        window.focus();
        notification.close();
      };
      setTimeout(notification.close.bind(notification), 4000);
    };

    if (Notification.permission === "granted") {
      createNotification();
    } else if (Notification.permission !== "denied") {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        createNotification();
      }
    }
  }
}

export function isAllowNotification() {
  return Notification.permission !== "denied";
}

export function getRandomKey(size) {
  return Math.random().toString(36).slice(size);
}

export function getKeyHash(url, body, randomKey, timeStamp) {
  const newURL = url.replace(/:(\d{1,9})/, "");
  const token = `${newURL}${body}${randomKey}${timeStamp}`;
  const hash = hmacSHA256(token, SERVER_KEY);
  const hashInBase64 = Base64.stringify(hash);
  return hashInBase64;
}

export function getImageCdn(url) {
  return `${CDN_URL}/${url}`;
}

export function generateUUIDEx() {
  // Public Domain/MIT
  // eslint-disable-next-line no-debugger
  let d = new Date().getTime(); // Timestamp
  let d2 =
    (typeof performance !== "undefined" &&
      performance.now &&
      performance.now() * 1000) ||
    0;
  const result = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    (c) => {
      let r = Math.random() * 16; // random number between 0 and 16
      if (d > 0) {
        // Use timestamp until depleted
        r = (d + r) % 16 | 0;
        d = Math.floor(d / 16);
      } else {
        // Use microseconds since page-load if supported
        r = (d2 + r) % 16 | 0;
        d2 = Math.floor(d2 / 16);
      }
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return result;
}

export function getLinkUrl(typePage, nameRewrite = "", id = 0) {
  let result = "/";
  // eslint-disable-next-line default-case
  switch (typePage) {
    case EnumRoutingPage.CATEGORY.id:
      result = `/nganh-hang/${nameRewrite}`;
      break;
    case EnumRoutingPage.PRODUCT.id:
      result = `/san-pham/${nameRewrite}-p${id}`;
      break;
    case EnumRoutingPage.NEWS.id:
      result = `/tin-tuc/${nameRewrite}`;
      break;
    case EnumRoutingPage.CATEGORY_NEWS.id:
      result = `/chuyen-muc/${nameRewrite}`;
      break;
    case EnumRoutingPage.SEARCH.id:
      result = `/tim-kiem?key=${nameRewrite}`;
      break;
    case EnumRoutingPage.CART.id:
      result = `/gio-hang`;
      break;
  }
  return result;
}

export function getMenuUrl(menu) {
  const {
    MenuName,
    MenuUrl: url,
    MenuLink: nameRewrite,
    MenuViewTypeId: type,
    DataId: dataId,
  } = menu;
  let result = "";

  switch (type) {
    case 1:
      result = getLinkUrl(EnumRoutingPage.CATEGORY.id, nameRewrite);
      break;
    case 2:
      result = getLinkUrl(EnumRoutingPage.PRODUCT.id, nameRewrite, dataId);
      break;
    case 3:
      result = getLinkUrl(EnumRoutingPage.NEWS.id, nameRewrite, dataId);
      break;
    case 4:
      result = `${url}`;
      break;
    case 5:
      result = getLinkUrl(
        EnumRoutingPage.CATEGORY_NEWS.id,
        nameRewrite,
        dataId
      );
      break;
    default:
      result = "#";
      break;
  }
  return result;
}

export function getSettingValue(value) {
  return !isEmptyObject(value) ? value.SettingValue : "";
}

export function formatPhone(value, insertStr = " ") {
  if (isEmpty(value) || value === "") {
    return "";
  }
  let input = value;
  if (input.length === 10) {
    input = [input.slice(0, 4), insertStr, input.slice(4)].join("");
    input = [input.slice(0, 8), insertStr, input.slice(8)].join("");
  } else {
    input = [input.slice(0, 4), insertStr, input.slice(4)].join("");
    input = [input.slice(0, 8), insertStr, input.slice(8)].join("");
    input = [input.slice(0, 11), insertStr, input.slice(11)].join("");
  }

  return input;
}

export function getUrlFromObject(obj) {
  if (obj && typeof obj == "object") {
    return Object.keys(obj)
      .map(function (key) {
        return key + "=" + obj[key];
      })
      .join("&");
  } else {
    return obj;
  }
}

export function toUcfirst(value) {
  if (isEmpty(value)) {
    return "";
  }
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

export function showChartMax(value = "", number = 100) {
  let result = value || "";
  if (result.length > number) {
    return `${result.slice(0, number)} [...]`;
  } else {
    return result;
  }
}

export function sumTotalArray(listData, key) {
  if (!isEmptyObject(listData)) {
    return listData.reduce((a, b) => a + (parseToInt(b[key]) || 0), 0);
  }
  return 0;
}
