webpackJsonp([6],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},i,!1,function(t){n("kb1j")},null,null).exports,s=n("/ocq");o.a.use(s.a);var r=new s.a({routes:[{path:"*",redirect:"/home"},{path:"/login",name:"登录",component:function(t){return Promise.all([n.e(0),n.e(2)]).then(function(){var e=[n("RtCG")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{keepAlive:!0}},{path:"/regist",name:"注册",component:function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){var e=[n("m/Lb")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{keepAlive:!0}},{path:"/home",name:"首页",component:function(t){return Promise.all([n.e(0),n.e(3)]).then(function(){var e=[n("8eho")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{keepAlive:!0,requireAuth:!0}},{path:"/data/more",name:"更多数据",component:function(t){return Promise.all([n.e(0),n.e(4)]).then(function(){var e=[n("9hfl")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{keepAlive:!0}}]}),c=n("6sKG"),u=n.n(c),l=n("9rMa"),p=n("//Fk"),h=n.n(p),d={state:{},mutations:{setAccountToken:function(t,e){localStorage.setItem("accountToken",e)},clearAccountToken:function(t){localStorage.clear("accountToken")}},actions:{login:function(t,e){var n=t.commit;return new h.a(function(t,o){u()({url:"/loginAndRegister/mobileLogin",method:"post",data:{mobile:e.phone,password:e.password,clientId:e.clientId,imgCode:e.imgCode},transformRequest:[function(t){var e="";for(var n in t)e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&";return e}],headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}}).then(function(e){!0===e.data.success&&"1"===e.data.code&&n("setAccountToken",e.data.data.token),t(e)}).catch(function(t){o(t)})})},getSmsCode:function(t,e){t.commit;return new h.a(function(t,n){u()({url:"/loginAndRegister/getSmsCode",method:"post",data:{mobile:e.phone,type:e.type,imageCode:e.imageCode},transformRequest:[function(t){var e="";for(var n in t)e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&";return e}],headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}}).then(function(e){t(e)}).catch(function(t){n(t)})})},regist:function(t,e){t.commit;return new h.a(function(t,n){u()({url:"/loginAndRegister/register",method:"post",data:{mobile:e.phone,password:e.password,code:e.code,resource:e.resource},transformRequest:[function(t){var e="";for(var n in t)e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&";return e}],headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}}).then(function(e){t(e)}).catch(function(t){n(t)})})}}};o.a.use(l.a);var m=new l.a.Store({modules:{user:d}}),f=n("9f8V");o.a.config.productionTip=!1,o.a.use(f.a),u.a.defaults.withCredentials=!0,r.beforeEach(function(t,e,n){t.meta.requireAuth?localStorage.getItem("accountToken")?n():(n({path:"/login"}),o.a.$vux.toast.text("请登录","middle")):n()}),new o.a({el:"#app",router:r,store:m,components:{App:a},template:"<App/>"})},f4gh:function(t,e,n){"use strict";var o=n("YKQd"),i=(o.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[o.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]};var s=n("VU/8")(i,a,!1,function(t){n("uAyr")},null,null);e.a=s.exports},kb1j:function(t,e){},uAyr:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.34a25a8f43fcba516b88.js.map