<template>
  <div id="content">
    <h1 id="parsing1">解析图片uri</h1>
    <pre>
       <code class="Java">
 /**
     * 解码 图片uri
     * @return 解码结果
     */
    public static String scanningImage(Activity mActivity, Uri uri) {
       </code>
     </pre>
    <h1 id="parsing2">解析Bitmap</h1>
    <pre>
       <code class="Java">
/**
     * 解码 bitmap图片
     * @return 解码结果
     */
    public static String scanningImageByBitmap(Bitmap srcBitmap) {
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
  },
  created() {
  },
  mounted() {
    highlightCode();
  },
  updated() {
    highlightCode();
  },
  destroyed() {
  },

  methods: {},
};
</script>
<style scoped>

h1{
  margin-top: 10px;
  margin-bottom: 10px;
}
pre code{
  border-radius: 4px;
}
</style>
