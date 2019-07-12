/**
 * 表单提交校验全局配置
 */

import Vue from 'vue'
import VeeValidate from 'vee-validate'
import GlobalText from 'vee-validate/dist/locale/zh_CN'
import validateRules from './validate/rules'

const config = {
  delay: 0,
  errorBagName: 'errorBags',
  fieldsBagName: 'fieldBags',
}
Vue.use(VeeValidate);
const dictionary = {
  zh_CN: {
    messages: {
      required: field => "请输入" + field,
      is: (field) => "两次" + field + "输入不一致",
      _default: field => field + "格式有误"
    }
  },
}

const vee = new VeeValidate(config, Vue);
vee._validator.localize('zh_CN',GlobalText)
vee._validator.localize(dictionary)
/*全局校验规则*/
for(let key in validateRules){
  vee._validator.extend(key, validateRules[key]);
}
Vue.Validator = vee._validator;

const Validate = {
  install(vue){
    let validateForm= (scope, callback) =>{
      let that = vue;
      let validated = null;
      if(typeof scope === 'function'){
        callback = scope;
        scope = '';
      }
      if(scope){
        validated = that.Validator.validate(scope);
      } else {
        validated = that.Validator.validateAll();
      }
      validated.then((valid) => {
        if(valid){
          if(typeof callback === 'function'){
            callback();
          }
        } else {
          let errs = that.Validator.errors.all();
          that.$toast(errs[0]);
        }
      })
    }

    let $validate = {validateForm}
    vue.prototype.$validate = $validate
  }
}
export default Validate
