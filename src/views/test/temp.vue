<!--
 * 创建人：chenxa
 * 创建时间：2020/1/14 9:56
 * 说明描述：

 * Copyright (c) 2020, Eastcom Technologies Co. Ltd.(杭州东方通信软件技术有限公司广州分公司). All Rights Reserved.
 *
 * This file contains proprietary information of Eastcom Technologies Co. Ltd. Copying or
 * reproduction without prior written approval is prohibited.
-->
<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="12">
        <el-input v-model="test" />
      </el-col>
      <el-col :span="12">
        <el-input v-model="test2" />
      </el-col>
    </el-row>
    <el-button @click="btn">测试</el-button>
    <temp2 :propVal="test2" @btnTest="btnTest" />
    <home />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import moment from "moment";
import Home from "@/views/Home.vue";
import temp2 from "@/views/test/temp2.vue";

@Component({
  components: {
    Home,
    temp2
  }
})
export default class Temp extends Vue {
  @Prop({ default: "msg" }) private msg?: string;

  test: string | object = "";
  test2: string = "";
  testObj: object = {
    prop: "prop"
  };

  btn() {
    // setInterval(() => {
    //   const date = new Date();
    //   this.test = moment(date).format("YYYY-MM-DD HH:mm:ss");
    // }, 1000);
    this.testObj["testFunc"] = () => {
      console.log("函数");
    };
    this.test = this.testObj["prop"];
  }

  @Watch("test", { immediate: false, deep: false })
  testChange(newVal: string, oldValue: string) {
    this.test2 = oldValue + "——" + newVal;
    this.testObj["testFunc"]();
  }

  btnTest(param: string | object) {
    console.log("emit:", param);
  }
}
</script>

<style scoped></style>
