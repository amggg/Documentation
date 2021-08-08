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
          implementation 'com.github.amggg:YXing:V1.1.1'
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
  mounted() {
    highlightCode()
  },
  updated() {
    highlightCode()
  },
  data(){
    return {

    }
  },
  methods : {

  }
}
</script>

<style scoped>
#content{
  padding: 10px;
  border: 1px solid #d0cece;
  border-radius: 8px;
}
h1{
  margin-top: 10px;
  margin-bottom: 10px;
}
pre code{
  border-radius: 4px;
}
</style>
