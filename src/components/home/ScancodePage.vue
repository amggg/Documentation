<template>
  <div id="content">
    <pre id="test1">
          <code class="Java">
    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", nickName='" + nickName + '\'' +
                ", userName='" + userName + '\'' +
                ", passWd='" + passWd + '\'' +
                ", isCovid=" + isCovid +
                '}';
    }
          </code>
      </pre>
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

  components: {},

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
  created() {
    console.log("scancode created");
  },
  mounted() {
    highlightCode();
    console.log("scancode mounted");
  },
  updated() {
    highlightCode();
  },
  destroyed() {
    console.log("scancode destroyed");
  },
  methods: {},
};
</script>
<style scoped>
#content {
  background-color: pink;
}
p {
  height: 400px;
}
pre code {
  font-size: 16px;
  border-radius: 8px;
}
</style>