<template>
  <div id="content">
    <h1 id="scand1">开始扫描</h1>
    <p id="notice">*调用扫码前请先自行申请Camara权限，否则扫码页黑屏</p>
    <div>
      <p>1.Activity中启动：</p>
      <pre>
       <code class="Java">
           ScanCodeConfig.create(MainActivity.this)
                                    //设置扫码页样式 ScanStyle.NONE：无  ScanStyle.QQ ：仿QQ样式   ScanStyle.WECHAT ：仿微信样式    ScanStyle.CUSTOMIZE ： 自定义样式
                                    .setStyle(style)
                                    //扫码成功是否播放音效  true ： 播放   false ： 不播放
                                    .setPlayAudio(false)
                                    .buidler()
                                    //跳转扫码页   扫码页可自定义样式
                                    .start(ScanCodeActivity.class);
       </code>
     </pre>
    </div>


    <div id="scandescription2">
      <p>2.Fragment中启动：</p>
      <pre>
       <code class="Groovy">
          ScanCodeConfig.create(MainActivity.this, mFragment)
                                    //设置扫码页样式 ScanStyle.NONE：无  ScanStyle.QQ ：仿QQ样式   ScanStyle.WECHAT ：仿微信样式    ScanStyle.CUSTOMIZE ： 自定义样式
                                    .setStyle(style)
                                    //扫码成功是否播放音效  true ： 播放   false ： 不播放
                                    .setPlayAudio(false)
                                    .buidler()
                                    //跳转扫码页   扫码页可自定义样式
                                    .start(ScanCodeActivity.class);
       </code>
     </pre>
    </div>

    <h1 id="scand2">配置界面扫描</h1>
    <div>
      <p>setStyle(ScanStyle.CUSTOMIZE) 进行自定义样式设计</p>
      <pre>
       <code class="language-java">
                      ScanCodeConfig.create(MainActivity.this)
                                    //设置扫码页样式 ScanStyle.NONE：无  ScanStyle.QQ ：仿QQ样式   ScanStyle.WECHAT ：仿微信样式  ScanStyle.CUSTOMIZE ： 自定义样式
                                    .setStyle(ScanStyle.CUSTOMIZE)
                                    //扫码成功是否播放音效  true ： 播放   false ： 不播放
                                    .setPlayAudio(true)
                                    //设置音效音频
                                    .setAudioId(R.raw.beep)
                                    ////////////////////////////////////////////
                                    //以下配置 在style为 ScanStyle.CUSTOMIZE 时生效
                                    //设置扫码框位置  left ： 边框左边位置   top ： 边框上边位置   right ： 边框右边位置   bottom ： 边框下边位置   单位/dp
//                                    .setScanRect(new ScanRect(50, 200, 300, 450), false)
                                    //是否限制识别区域为设定扫码框大小  true:限制  false：不限制   默认false：识别区域为整个屏幕
                                    .setLimitRect(true)
                                    //设置扫码框位置 scanSize : 扫码框大小   offsetX ： x轴偏移量    offsetY ：y轴偏移量   单位 /px
                                    .setScanSize(800, 0, -200)
                                    //是否显示边框上四个角标 true ： 显示  false ： 不显示
                                    .setShowFrame(true)
                                    //设置边框上四个角标颜色
                                    .setFrameColor(R.color.whilte)
                                    //设置边框上四个角标圆角  单位 /dp
                                    .setFrameRaduis(2)
                                    //设置边框上四个角宽度 单位 /dp
                                    .setFrameWith(4)
                                    //设置边框上四个角长度 单位 /dp
                                    .setFrameLenth(15)
                                    //设置是否显示边框外部阴影 true ： 显示  false ： 不显示
                                    .setShowShadow(true)
                                    //设置边框外部阴影颜色
                                    .setShaowColor(R.color.black_tran30)
                                    //设置扫码条运动方式   ScanMode.REVERSE : 往复运动   ScanMode.RESTART ：重复运动    默认ScanMode.RESTART
                                    .setScanMode(ScanMode.REVERSE)
                                    //设置扫码条扫一次时间  单位/ms  默认3000
                                    .setScanDuration(3000)
                                    //设置扫码条图片
                                    .setScanBitmapId(R.mipmap.scan_wechatline)
                                    //////////////////////////////////////////////
                                    .buidler()
                                    //跳转扫码页   扫码页可自定义样式
                                    .start(MyScanActivity.class);
       </code>
     </pre>
    </div>


    <h1 id="scand3">自定义界面扫描</h1>
    <div>
      <p>1.新建Activity 继承 ScanCodeActivity</p>
      <pre>
       <code class="language-java">
public class MyScanActivity extends ScanCodeActivity {
         }
       </code>
     </pre>

      <p>2.重写getLayoutId() 和 initData() 方法getLayoutId返回你自己定义的布局文件idinitData() 和平常一样 初始化数据 监听等等</p>
      <pre>
       <code class="language-java">
public class MyScanActivity extends ScanCodeActivity {

    private AppCompatButton btnOpenFlash;

    @Override
    public int getLayoutId() {
        return R.layout.activity_myscan;
    }

    @Override
    public void initData() {
        super.initData();
        btnOpenFlash = findViewById(R.id.btn_openflash);

        btnOpenFlash.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                isOpenFlash = !isOpenFlash;
                setFlashStatus(isOpenFlash);
                btnOpenFlash.setText(isOpenFlash ? "关闭闪光灯" : "打开闪光灯");
            }
        });
    }
}
       </code>
     </pre>

      <p>3.将下面代码复制到布局xml中</p>
      <pre>
       <code class="xml">
&ltRelativeLayout
  xmlns:android="http://schemas.android.com/apk/res/android"
  android:id="@+id/rlparent"
  android:orientation="vertical"
  android:layout_width="match_parent"
  android:layout_height="match_parent"&gt

    &ltandroidx.camera.view.PreviewView
      android:id="@+id/pvCamera"
      android:layout_width="match_parent"
      android:layout_height="match_parent" /&gt

      &lt!--开始自定义界面， 下面写自己需要的布局--&gt

&lt/RelativeLayout&gt
       </code>
     </pre>

      <p>4.start()方法参数 替换成自定义的Activity</p>
      <pre>
       <code class="Java">
ScanCodeConfig.create(MainActivity.this)
                                    //设置扫码页样式 ScanStyle.NONE：无  ScanStyle.QQ ：仿QQ样式   ScanStyle.WECHAT ：仿微信样式
                                    .setStyle(style)
                                    //扫码成功是否播放音效  true ： 播放   false ： 不播放
                                    .setPlayAudio(true)
                                    .buidler()
                                    //跳转*自定义扫码页MyScanActivity*   扫码页可自定义样式
                                    .start(MyScanActivity.class);
       </code>
     </pre>
    </div>

    <h1 id="scand4">获取扫码结果</h1>
    <p>在Activity或Fragment的onActivityResult中获取扫码结果</p>
    <pre>
      <code class="Java">
    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        //接收扫码结果
        if(resultCode == RESULT_OK && requestCode == ScanCodeConfig.QUESTCODE && data != null){
            Bundle extras = data.getExtras();
            if(extras != null){
                String code = extras.getString(ScanCodeConfig.CODE_KEY);
                tvCode.setText(String.format("%s%s", "结果： " , code));
            }
        }
    }
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
#notice{
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
}
</style>
