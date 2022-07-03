<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        Route
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { Iphone, UserFilled } from '@element-plus/icons-vue'
import LoginAccount from './login-account'
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;

  .title {
    text-align: center;
  }
}
</style>
