<template>
  <div class="documention">
    <el-menu
      default-active="1-1"
      class="el-menu"
      @open="handleOpen"
      @close="handleClose"
      unique-opened="true"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1" @click="scrollById('test1')"
          >选项1</el-menu-item
        >
        <el-menu-item index="1-2" @click="scrollById('test2')"
          >选项2</el-menu-item
        >
        <el-menu-item index="1-3" @click="scrollById('test3')"
          >选项3</el-menu-item
        >
        <el-menu-item index="1-4" @click="scrollById('test4')"
          >选项4</el-menu-item
        >
      </el-submenu>
      <!-- 第二个 -->
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>导航二</span>
        </template>
        <el-menu-item index="2-1" @click="choseMenu">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-menu-item index="3-4">选项4</el-menu-item>
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
        case '1':
          this.$router.replace('/scancodepage');
          break;
        case '2':
          this.$router.replace('/parsingpage');
          break;
      }
    },
  },
};
</script>
<style scoped>
.documention {
  display: flex;
}
.el-menu {
  position: fixed;
  width: 200px;
}
.content {
  flex: 1;
  margin-left: 200px;
}
</style>
