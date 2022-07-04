import { reactive } from 'vue'
import { FormRules } from 'element-plus'

export const rules = reactive<FormRules>({
  name: [
    { required: true, message: '用户名是必传内容', trigger: 'blur' },
    {
      pattern: /^[a-z0-9A-Z]{5,10}$/,
      message: '请输入5-10字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '密码是必传内容', trigger: 'blur' },
    {
      pattern: /^[a-z0-9A-Z]{3,}$/,
      message: '请输入3位以上字母或数字',
      trigger: 'blur'
    }
  ]
})
