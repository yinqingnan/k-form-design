<!--
 * @Description: 头部
 * @Author: kcz
 * @Date: 2019-12-30 00:37:05
 * @LastEditors: kcz
 * @LastEditTime: 2020-03-26 20:18:56
 -->
<template>
  <div class="header">
      {{title}}
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "表单设计器"
    }
  },
};
</script>
<style scoped>
    .fR{
        float:right;
        margin-right:10px; 
        border:1px solid #ccc;
        height: 35px;
        width: 60px;
        line-height:35px;
        margin-top:10px;
        border-radius: 3px;
        cursor: pointer;
        font-size:18px;
        background:#ccc;
        color:#fff;
    }
</style>
