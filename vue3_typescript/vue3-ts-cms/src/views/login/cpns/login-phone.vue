<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phone.num" />
      </el-form-item>
      <el-form-item label="验证码" prop="verify-code">
        <div class="get-code">
          <el-input type="password" v-model="phone.code" />
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const phone = reactive({
  num: '',
  code: ''
})
</script>

<style scoped>
.get-code {
  display: flex;
}

.get-btn {
  margin-left: 8px;
}
</style>
