
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/forum/forum","pages/aboutme/aboutme","pages/herbs/herbs","pages/treatment/treatment","pages/history/history","pages/doctor/doctor","pages/aboutme/setting","pages/news/news","pages/baduanjin/baduanjin"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#dadcdf","selectedColor":"b6c5b2","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/index.png","selectedIconPath":"static/indexsl.png","text":"首页"},{"pagePath":"pages/forum/forum","iconPath":"static/forum.png","selectedIconPath":"static/forumsl.png","text":"论坛"},{"pagePath":"pages/aboutme/aboutme","iconPath":"static/aboutme.png","selectedIconPath":"static/aboutmesl.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"demo2","compilerVersion":"3.1.18","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页"}},{"path":"/pages/forum/forum","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"论坛"}},{"path":"/pages/aboutme/aboutme","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/herbs/herbs","meta":{},"window":{"navigationBarTitleText":"药材","enablePullDownRefresh":false}},{"path":"/pages/treatment/treatment","meta":{},"window":{"navigationBarTitleText":"治疗","enablePullDownRefresh":false}},{"path":"/pages/history/history","meta":{},"window":{"navigationBarTitleText":"历史","enablePullDownRefresh":false}},{"path":"/pages/doctor/doctor","meta":{},"window":{"navigationBarTitleText":"名医","enablePullDownRefresh":false}},{"path":"/pages/aboutme/setting","meta":{},"window":{"navigationBarTitleText":"设置","enablePullDownRefresh":false}},{"path":"/pages/news/news","meta":{},"window":{"navigationBarTitleText":"中医药：抗击疫情的独特力量","enablePullDownRefresh":false}},{"path":"/pages/baduanjin/baduanjin","meta":{},"window":{"navigationBarTitleText":"八段锦","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});