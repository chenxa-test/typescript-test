<!--
 * 创建人：chenxa
 * 创建时间：2020/1/14 16:39
 * 说明描述：

 * Copyright (c) 2020, Eastcom Technologies Co. Ltd.(杭州东方通信软件技术有限公司广州分公司). All Rights Reserved.
 *
 * This file contains proprietary information of Eastcom Technologies Co. Ltd. Copying or
 * reproduction without prior written approval is prohibited.
-->
<template>
  <div style="border: 1px rebeccapurple solid;width: 50%">
    <h4>我是子组件</h4>
    <el-input v-model="inputVal" style="width: 50%" />
    <el-button @click="btn">按钮</el-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";
@Component({})
export default class Temp2 extends Vue {
  @Prop({ default: "" }) propVal?: string;
  inputVal: string = "";
  btn() {
    this.$emit("btnTest", this.inputVal);
  }

  @Watch("propVal", { immediate: true, deep: true })
  propValChange(val1: string, val2: string) {
    this.inputVal = val1;
  }
}
</script>

<style scoped></style>
