<template>
  <div class="documention">
    <el-menu
      class="el-menu"
      default-active="0-1"
      @open="handleOpen"
      @close="handleClose"
      unique-opened="true"
    >
      <el-submenu index="0">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>集成</span>
        </template>
        <el-menu-item index="0-1" @click="scrollById('test1')"
        >Yxing集成配置</el-menu-item
        >
      </el-submenu>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>扫描码(条码/二维码)</span>
        </template>
        <el-menu-item index="1-1" @click="scrollById('scand1')"
        >开始扫描</el-menu-item
        >
        <el-menu-item index="1-2" @click="scrollById('scand2')"
        >配置界面扫描</el-menu-item
        >
        <el-menu-item index="1-3" @click="scrollById('scand3')"
        >自定义界面扫描</el-menu-item
        >
        <el-menu-item index="1-4" @click="scrollById('scand4')"
        >获取扫码结果</el-menu-item
        >
      </el-submenu>
      <!-- 第二个 -->
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>生成码(条码/二维码)</span>
        </template>
        <el-menu-item index="2-1" @click="scrollById('generate1')"
        >生成简单二维码</el-menu-item
        >
        <el-menu-item index="2-2" @click="scrollById('generate2')"
        >生成带logo二维码</el-menu-item
        >
        <el-menu-item index="2-3" @click="scrollById('generate3')"
        >生成带描边logo二维码</el-menu-item
        >
        <el-menu-item index="2-4" @click="scrollById('generate4')"
        >生成条形码</el-menu-item
        >
      </el-submenu>
      <!-- 第三个 -->
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>识别码(条码/二维码)</span>
        </template>
        <el-menu-item index="2-1" @click="scrollById('parsing1')"
        >通过uri识别</el-menu-item>
        <el-menu-item index="2-2" @click="scrollById('parsing2')"
        >通过bitmap识别</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="content">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  activated() {
    console.log("document activated");
  },
  created() {
    console.log("document created");
  },
  mounted() {
    console.log("document mounted");
    highlightCode();
  },
  destroyed() {
    console.log("document destroyed");
  },
  updated() {
    highlightCode();
  },
  data() {
    return {};
  },
  methods: {
    scrollById(id) {
      document.querySelector("#" + id).scrollIntoView({
        behavior: "smooth",
      });
    },
    handleOpen(index) {
      switch (index) {
        case "0":
          this.$router.replace("/integraedpage");
          break;
        case "1":
          this.$router.replace("/scancodepage");
          break;
        case "2":
          this.$router.replace("/generatecodepage");
          break;
        case "3":
          this.$router.replace("/parsingpage");
          break;
      }
    },
  },
};
</script>
<style scoped>
#content{
  padding: 20px;
  border: 1px solid #d0cece;
  border-radius: 0px 0px 0px 4px;
}
.documention {
  height: 100%;
  display: flex;
}
.el-menu {
  position: fixed;
  width: 240px;
}
.content {
  flex: 1;
  margin-left: 240px;
  overflow: hidden;
}
</style>
