<template>
  <div id="content">
    <h1 id="generate1">生成简单二维码</h1>
    <p id="notice">以下方法都通过ScanCodeConfig.方法名()调用， 例：ScanCodeConfig.createQRCode("star");</p>
    <p>1.默认大小、颜色</p>
      <pre>
       <code class="Java">
     /**
     * 生成二维码，默认大小为500
     *
     * @param text 需要生成二维码的文字、网址等
     * @return bitmap
     */
    public static Bitmap createQRCode(String text) {
       </code>
     </pre>
    <p>2.设置二维码大小</p>
    <pre>
       <code class="Java">
      /**
     * 生成二维码
     *
     * @param text 需要生成二维码的文字、网址等
     * @param size 需要生成二维码的大小（）
     * @return bitmap
     */
    public static Bitmap createQRCode(String text, int size) {
       </code>
     </pre>
    <p>3.设置二维码大小、颜色</p>
    <pre>
       <code class="Java">
      /**
     * 生成自定义颜色二维码
     *
     * @param text            需要生成二维码的文字、网址等
     * @param size            需要生成二维码的大小
     * @param codeColor       二维码颜色
     * @param backgroundColor 背景颜色
     * @return bitmap
     */
    public static Bitmap createQRCode(String text, int size, int codeColor, int backgroundColor) {
       </code>
     </pre>

    <h1 id="generate2">生成带logo二维码</h1>
    <p>1.默认大小、颜色</p>
    <pre>
       <code class="Java">
       /**
     * 生成带logo 二维码
     *
     * @param text 文字
     * @param logo logo
     * @return
     */
    public static Bitmap createQRCodeWithLogo(String text, Bitmap logo) {
       </code>
     </pre>
    <p>2.设置二维码大小，logo样式</p>
    <pre>
       <code class="Java">
    /** 生成带logo 二维码
     * @param text  文字
     * @param size   二维码大小 1 ：1
     * @param logo   logo
     * @param logoWith logo宽
     * @param logoHigh  logo高
     * @param logoRaduisX  logo x圆角
     * @param logoRaduisY  logo y圆角
     * @return
     */
    public static Bitmap createQRCodeWithLogo(String text, int size, Bitmap logo, int logoWith, int logoHigh, float logoRaduisX, float logoRaduisY){
       </code>
     </pre>
    <p>3.设置二维码大小、颜色，logo样式</p>
    <pre>
       <code class="Java">
     /**
     * 生成带logo 二维码 (自定义颜色)
     *
     * @param text            文字
     * @param size            二维码大小 1 ：1
     * @param codeColor       二维码颜色
     * @param backgroundColor 背景颜色
     * @param logo            logo logo图
     * @param logoWith        logo宽
     * @param logoHigh        logo高
     * @param logoRaduisX     logo x圆角
     * @param logoRaduisY     logo y圆角
     * @return
     */
    public static Bitmap createQRCodeWithLogo(String text, int size, int codeColor, int backgroundColor, Bitmap logo, int logoWith, int logoHigh, float logoRaduisX, float logoRaduisY) {
       </code>
     </pre>

    <h1 id="generate3">生成带描边logo二维码</h1>
    <p>1.设置二维码大小，logo样式，描边大小</p>
    <pre>
       <code class="Java">
      /**
     * 生成带描边logo 二维码
     *
     * @param text        文字
     * @param size        二维码大小 1 ：1
     * @param logo        logo
     * @param logoWith    logo宽
     * @param logoHigh    logo高
     * @param logoRaduisX logo x圆角
     * @param logoRaduisY logo y圆角
     * @param storkWith   描边宽度
     * @param storkColor  描边颜色
     * @return
     */
    public static Bitmap createQRCodeWithStrokeLogo(String text, int size, Bitmap logo, int logoWith, int logoHigh, float logoRaduisX, float logoRaduisY, int storkWith, int storkColor) {
       </code>
     </pre>
    <p>2.设置二维码大小颜色，logo样式，描边大小</p>
    <pre>
       <code class="Java">
           /**
     * 生成带描边logo 二维码  (自定义颜色)
     *
     * @param text            文字
     * @param size            二维码大小 1 ：1
     * @param codeColor       二维码颜色
     * @param backgroundColor 背景颜色
     * @param logo            logo
     * @param logoWith        logo宽
     * @param logoHigh        logo高
     * @param logoRaduisX     logo x圆角
     * @param logoRaduisY     logo y圆角
     * @param storkWith       描边宽度
     * @param storkColor      描边颜色
     * @return
     */
    public static Bitmap createQRCodeWithStrokeLogo(String text, int size, int codeColor, int backgroundColor, Bitmap logo, int logoWith, int logoHigh, float logoRaduisX, float logoRaduisY, int storkWith, int storkColor) {
       </code>
     </pre>

    <h1 id="generate4">生成条形码</h1>
    <p>1.设置条码大小，条码内容是否显示</p>
    <pre>
       <code class="Java">
   /**
     * 生成条形码
     * @param content 要生成条形码包含的内容
     * @param widthPix 条形码的宽度
     * @param heightPix 条形码的高度
     * @param isShowContent  是否显示条形码包含的内容
     * @return 返回生成条形的位图
     */
    public static Bitmap createBarCode(String content, int widthPix, int heightPix, boolean isShowContent) {
       </code>
     </pre>
    <p>2.设置条码大小颜色，条码内容是否显示</p>
    <pre>
       <code class="Java">
 /**
     * 生成自定义颜色条形码
     *
     * @param content         要生成条形码包含的内容
     * @param widthPix        条形码的宽度
     * @param heightPix       条形码的高度
     * @param codeColor       条码颜色
     * @param backgroundColor 背景颜色
     * @param textColor       内容颜色
     * @param isShowContent   是否显示条形码包含的内容
     * @return 返回生成条形的位图
     */
    public static Bitmap createBarCode(String content, int widthPix, int heightPix, int codeColor, int backgroundColor, int textColor, boolean isShowContent) {
       </code>
     </pre>
  </div>
</template>

<script>
import hljs from "highlight.js";
const highlightCode = () => {
  const block = document.querySelectorAll("pre code");
  hljs.configure({ useBR: true });
  block.forEach((el) => {
    hljs.highlightBlock(el);
  });
};
export default {
  name: "GenerateCodePage",
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
    document.documentElement.scrollTop = this.scrollTop;
  },
  mounted() {
   highlightCode()
  },
  updated() {
    highlightCode()
  },
  data() {
    return {
       scrollTop: 0,
    }
  },
  methods: {}
}
</script>

<style scoped>
h1{
  margin-top: 10px;
  margin-bottom: 10px;
}
pre code{
  border-radius: 4px;
}
#notice{
  color: red;
  margin-bottom: 10px;
}
</style>
