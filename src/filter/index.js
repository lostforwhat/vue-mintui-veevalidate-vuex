const commonFilter = {
  nullFilter(val){
    if(val == 'null' || val == undefined){
      val = '';
    }
    return val;
  },
  trimValue(str){
    return typeof(str)==='undefined'||str===null||str==='null'?'':str;
  },
  sexValue(val){
    switch (val) {
      case '1':
        return "男";
      case '2':
        return "女";
      default:
        return "";
    }
  },
  dateFilter(val, outFormat, inputFormat){
    val += '';
    let date = "";
    if(typeof inputFormat !== 'undefined'){
      let cur = new Date();
      let obj = {
        y: cur.getFullYear(),
        M: 1,
        d: 1,
        h: 0,
        m: 0,
        s: 0,
        S: 0
      };
      // 预处理, 删除format 中 yMdhmsS 之外的字符, 同时删除str对应的字符
      let str = "";
      let format = "";
      for (let i=0; i<inputFormat.length; i++) {
        if ("yMdhmsS".indexOf(inputFormat.charAt(i)) >= 0) {
          str += val.charAt(i);
          format += inputFormat.charAt(i);
        }
      }
      let startIdx=0, endIdx;
      while (startIdx < format.length) {
        let startChar = format.charAt(startIdx);
        endIdx = startIdx+1;
        while (endIdx < format.length && format.charAt(endIdx) == startChar)
          ++endIdx;
        obj[startChar] = parseInt(str.substring(startIdx, endIdx));
        startIdx = endIdx;
      }
      date = new Date(obj.y, obj.M - 1, obj.d, obj.h, obj.m, obj.s, obj.S);
    } else {
      date = new Date(val);
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
    let hour = date.getHours();
    if(hour >=0 && hour <=9){
      hour = "0" + hour;
    }
    let min = date.getMinutes();
    if(min >=0 && min <=9){
      min = "0" + min;
    }
    let sec = date.getSeconds();
    if(sec >=0 && sec <=9){
      sec = "0" + sec;
    }
    if(typeof outFormat === 'undefined' || outFormat == null || outFormat == ''){
      outFormat = 'yyyy-MM-dd'
    }
    let currentdate = outFormat.replace(/yyyy/g, year).replace(/MM/g, month).replace(/dd/g, day);
    currentdate = currentdate.replace(/hh/g, hour).replace(/mm/g, min).replace(/ss/g, sec);
    return currentdate;
  }
}

export default commonFilter;

