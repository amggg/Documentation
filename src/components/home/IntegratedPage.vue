<template>
  <div id="content">
    <h1>怎么集成</h1>
    <p>1.在根目录的build.gradle中添加jitpack依赖：</p>
    <pre>
       <code class="Groovy">
         allprojects {
            repositories {
               maven { url "https://jitpack.io" }
            }
         }
       </code>
     </pre>

    <p>2.在project的build.gradle中添加YXing依赖：</p>
    <pre>
       <code class="Groovy">
          implementation 'com.github.amggg:YXing:V1.1.4'
       </code>
     </pre>
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
  name: "IntegratedPage",
    // 离开路由之前执行的函数
  beforeRouteLeave(to, from, next) {
    this.scrollTop = document.documentElement.scrollTop;
    next();
  },

  // 进入路由之前执行的函数
  beforeRouteEnter(to, from, next) {
    next((vm) => {});
  },

  activated() {
    console.log("scancode activated");
    document.documentElement.scrollTop = this.scrollTop;
  },
  mounted() {
    highlightCode();
  },
  updated() {
    highlightCode();
  },
  data() {
    return {
      scrollTop: 0,
    };
  },
  methods: {},
};
</script>

<style scoped>
h1 {
  margin-top: 10px;
  margin-bottom: 10px;
}
pre code {
  border-radius: 4px;
}
</style>
