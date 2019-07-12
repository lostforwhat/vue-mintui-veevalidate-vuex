/*common js just add common function*/

const errFunction = (err, mescroll, page, http) => {
  if (page == 1) {
    http.handleErr(err);
  } else {
    // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
    mescroll.endErr()
  }
}

const formatDateStr = (res, formatStr) => {
  let date = new Date(res);
  if (typeof formatStr === 'undefined') {
    if (res.indexOf("y") || res.indexOf("M") || res.indexOf("d")) {
      formatStr = res;
      date = new Date();
    }
  }
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  let day = date.getDate();
  if (day >= 0 && day <= 9) {
    day = "0" + day;
  }
  let currentdate = "";
  formatStr = formatStr.toLowerCase();
  if (formatStr == "yyyy-mm-dd") {
    currentdate = year + "-" + month + "-" + day;
  } else if (formatStr == "yyyy-mm") {
    currentdate = year + "-" + month;
  } else {
    currentdate = formatStr.replace(/yyyy/g, year).replace(/mm/g, month).replace(/dd/g, day);
  }
  return currentdate;
}

const list2Obj = (resdata) => {
  let showData = {};
  for (let i = 0; i < resdata.length; i++) {
    let name = resdata[i].name;
    let val = resdata[i].info;
    showData[name] = val;
  }
  return showData;
}

const getOpenWsyw = (resdata) => {
  let showData = list2Obj(resdata);
  if (!showData["YHZH"] || !showData["DHHM"]) {
    return null;
  }
  return showData;
}

export {errFunction, formatDateStr, list2Obj, getOpenWsyw};




