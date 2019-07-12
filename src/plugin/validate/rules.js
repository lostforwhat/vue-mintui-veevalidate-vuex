const validateRules = {
  // 自定义规则
  // 身份证号码校验
  'IDCard': {
    validate: (value)=>{
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value);
    }
  },
  'money': {//金额校验
    getMessage: ()=> "您输入的金额有误",
    validate: (value)=>{
      return /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(value);
    }
  },
  'phone': {//手机号校验
    getMessage: ()=> "您输入的手机号码有误",
    validate: (value)=>{
      return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(value);
    }
  }
}
export default validateRules
