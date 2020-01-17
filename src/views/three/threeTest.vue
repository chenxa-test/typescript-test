<!--
 * 创建人：chenxa
 * 创建时间：2020/1/16 11:15
 * 说明描述：

 * Copyright (c) 2020, Eastcom Technologies Co. Ltd.(杭州东方通信软件技术有限公司广州分公司). All Rights Reserved.
 *
 * This file contains proprietary information of Eastcom Technologies Co. Ltd. Copying or
 * reproduction without prior written approval is prohibited.
-->
<template>
  <div>
    <div id="container"></div>
    <el-button @click="initThree">第一个three</el-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import * as Three from "three";
@Component({})
export default class ThreeTest extends Vue {
  form: object = {};
  camera: any = null;
  scene: any = null;
  renderer: any = null;
  mesh: any = null;
  initThree() {
    const container: any = document.getElementById("container");
    // 相机
    this.camera = new Three.PerspectiveCamera(
      40,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    this.scene = new Three.Scene(); // 场景

    const geometry: any = new Three.BoxGeometry(1, 1, 1);
    const material: any = new Three.MeshNormalMaterial();

    this.mesh = new Three.Mesh(geometry, material);
    this.scene.add(this.mesh);
    // 渲染器
    this.renderer = new Three.WebGLRenderer({ antialias: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(this.renderer.domElement);
    this.animate();
  }
  // 渲染循环
  animate() {
    // 希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
    // 该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
    requestAnimationFrame(this.animate);
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
  }
}
</script>

<style scoped>
#container {
  height: 400px;
}
</style>
