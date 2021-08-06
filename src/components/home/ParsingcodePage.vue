<template>
  <div id="content">
    <p id="test1">test1</p>
    <p id="test2">test2</p>
    <p id="test3">test3</p>
    <p id="test4">test4</p>
    <p id="test5">test5</p>
  </div>
</template>

<script>
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";
const highlightCode = () => {
  const block = document.querySelectorAll("pre code");
  hljs.configure({ useBR: true });
  block.forEach((el) => {
    hljs.highlightBlock(el);
  });
};

export default {
  data() {
    return {
      scrollTop: 0,
    };
  },

  // 离开路由之前执行的函数
  beforeRouteLeave(to, from, next) {
    this.scrollTop = document.documentElement.scrollTop;
    next();
  },

  // 进入路由之前执行的函数
  beforeRouteEnter(to, from, next) {
    next((vm) => {});
  },

  components: {},
  activated() {
    document.documentElement.scrollTop = this.scrollTop;
    console.log("parsingcode activated");
  },
  created() {
    console.log("parsingcode created");
  },
  mounted() {
    highlightCode();
    console.log("parsingcode mounted");
  },
  updated() {
    highlightCode();
  },
  destroyed() {
    console.log("parsingcode destroyed");
  },

  methods: {},
};
</script>
<style scoped>
#content {
  background-color: rgb(157, 0, 248);
}
p {
  height: 400px;
}
</style>