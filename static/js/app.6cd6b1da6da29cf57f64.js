webpackJsonp([1],Array(45).concat([function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.firebaseDB=e.firebaseApp=void 0;var s=a(28),r=function(t){return t&&t.__esModule?t:{default:t}}(s),i={apiKey:"AIzaSyCZhVPYEP__G7tluetZ1Q5AyS5TMpxYy_I",authDomain:"mome-app.firebaseapp.com",databaseURL:"https://mome-app.firebaseio.com",projectId:"mome-app",storageBucket:"mome-app.appspot.com",messagingSenderId:"639113260297"},o=r.default.initializeApp(i),n=o.database();e.firebaseApp=o,e.firebaseDB=n},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(104);e.default={authenticated:!1,login:function(t){this.authenticated=!0,s.router.push({path:t})},logout:function(){this.authenticated=!1,s.router.push({name:"login"})}}},,,,,,,,,,,,,,,,,,,function(t,e,a){a(272);var s=a(3)(a(227),a(315),"data-v-160e8c08",null);t.exports=s.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.userLoginParse=e.firebaseUI=e.router=void 0;var r=a(137),i=s(r),o=a(136),n=s(o),l=a(132),u=s(l),c=a(125),d=s(c),f=a(123),p=s(f),v=a(124),m=s(v),h=a(134),_=s(h),b=a(126),g=s(b),k=a(127),y=s(k);a(129),a(130),a(128);var C=a(135),w=s(C),x=a(28),$=s(x),P=a(131),N=s(P),U=(a(45),a(133)),S=s(U),A=a(46),B=s(A);i.default.use(n.default),i.default.use(d.default),i.default.use(u.default),i.default.use(p.default),i.default.use(m.default),i.default.use(w.default),i.default.use(S.default);var E=e.router=new n.default({routes:g.default,linkActiveClass:"active",mode:"history"});E.beforeEach(function(t,e,a){t.matched.some(function(t){return t.meta.requiresAuth})?B.default.authenticated?a():a({path:"./login",query:{redirect:t.fullPath}}):a()}),Object.defineProperty(i.default.prototype,"$Chartist",{get:function(){return this.$root.Chartist}});e.firebaseUI=new N.default.auth.AuthUI($.default.auth()),e.userLoginParse=new i.default;new i.default({el:"#app",render:function(t){return t(_.default)},router:E,data:{Chartist:y.default}})},,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(308),r=function(t){return t&&t.__esModule?t:{default:t}}(s),i={state:[],removeNotification:function(t){this.state.splice(t,1)},notify:function(t){this.state.push(t)}},o={install:function(t){Object.defineProperty(t.prototype,"$notifications",{get:function(){return i}}),t.component("Notifications",r.default)}};e.default=o},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(310),r=function(t){return t&&t.__esModule?t:{default:t}}(s),i={showSidebar:!1,sidebarLinks:[{name:"Bookmark",icon:"ti-bookmark",path:"bookmark"},{name:"User Profile",icon:"ti-user",path:"stats"},{name:"About",icon:"ti-info-alt",path:"about"}],displaySidebar:function(t){this.showSidebar=t}},o={install:function(t){t.mixin({data:function(){return{sidebarStore:i}}}),Object.defineProperty(t.prototype,"$sidebar",{get:function(){return this.$root.sidebarStore}}),t.component("side-bar",r.default)}};e.default=o},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(307),i=s(r),o=a(306),n=s(o),l={install:function(t){t.component("fg-input",i.default),t.component("drop-down",n.default)}};e.default=l},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(298),i=s(r),o=a(305),n=s(o),l=a(294),u=s(l),c=a(295),d=s(c),f=a(301),p=s(f),v=a(300),m=s(v),h=a(304),_=s(h),b=[{path:"/",component:u.default,redirect:"/login"},{path:"/login",name:"login",component:u.default},{path:"/signup",name:"signup",component:d.default},{path:"/:admin",component:i.default,redirect:"/:admin/bookmark",meta:{requiresAuth:!0},children:[{path:"stats",name:"User Profile",component:p.default},{path:"about",name:"about",component:m.default},{path:"bookmark",name:"bookmark",component:_.default}]},{path:"*",component:n.default}];e.default=b},,,function(t,e){},function(t,e){},,,,function(t,e,a){a(274);var s=a(3)(a(212),a(317),null,null);t.exports=s.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(231),i=s(r),o=a(45),n=a(28),l=s(n),u=a(65),c=s(u),d=a(46),f=s(d);e.default={name:"login",components:{PaperNotification:c.default},data:function(){return{user:{username:"",password:""},notifications:{topCenter:!1}}},methods:{login:function(){var t=this;l.default.auth().signInWithEmailAndPassword(this.user.username,this.user.password).then(function(e){t.notifyVue("success","Authentication Success","Welcome to bookmarker"),t.getUserKey().then(function(t){var e=t+"/bookmark";f.default.login(e)})},function(e){"auth/wrong-password"===e.code?t.notifyVue("danger","Authentication Error","Wrong password, please try again"):"auth/user-not-found"===e.code?t.notifyVue("danger","Authentication Error","Username not found !"):"auth/invalid-email"===e.code?t.notifyVue("danger","Authentication Error","Invalid email"):t.notifyVue("danger","Authentication Error","Oops. "+e.message)}).catch(function(e){"auth/wrong-password"===e.code?t.notifyVue("danger","Authentication Error","Wrong password, please try again"):t.notifyVue("danger","Authentication Error",e.message)})},notifyVue:function(t,e,a){this.$notifications.notify({message:"<b>"+e+"</b><br>"+a,icon:"ti-gift",horizontalAlign:"right",verticalAlign:"top",type:t})},validateBeforeSubmit:function(t){this.$validator.validateAll(),this.errors.any()||this.login()},getUserKey:function(){var t=this;return new i.default(function(e,a){o.firebaseDB.ref("users/").orderByChild("email").equalTo(t.user.username).on("child_added",function(t,s){s?a(new Error("failed to receive data")):e(t.key)})})}}}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(28),i=s(r),o=a(45),n=a(65),l=s(n),u=a(290);o.firebaseDB.ref("users"),e.default={name:"signup",components:{PaperNotification:l.default},data:function(){return{user:{name:"",email:"",password1:"",password2:"",url:"",phone:"",birthdate:""}}},methods:{validateBeforeSubmit:function(t){this.$validator.validateAll(),this.errors.any()||this.signup()},signup:function(){var t=this;i.default.auth().createUserWithEmailAndPassword(this.user.email,this.user.password1).then(function(e){t.notifyVue("success","Signup Successfully","Your account has been created!"),t.addUserInfo(),t.$router.push({name:"login"})},function(e){var a=e.code,s=e.message;"auth/weak-password"===a?t.notifyVue("warning","Password Warning","The password is too weak"):t.notifyVue("danger","Signup Failed","Oop.."+s)})},addUserInfo:function(){var t={fullName:this.user.name,email:this.user.email,phone:this.user.phone,facebookUrl:this.user.url,birthdate:this.user.birthdate},e=u(this.user.email);o.firebaseDB.ref("users/"+e).set(t)},notifyVue:function(t,e,a){this.$notifications.notify({message:"<b>"+e+"</b><br>"+a,icon:"ti-gift",horizontalAlign:"right",verticalAlign:"top",type:t})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(299),i=s(r),o=a(297),n=s(o),l=a(296),u=s(l);e.default={components:{TopNavbar:i.default,ContentFooter:n.default,DashboardContent:u.default},methods:{toggleSidebar:function(){this.$sidebar.showSidebar&&this.$sidebar.displaySidebar(!1)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{routeName:function(){var t=this.$route.name;return this.capitalizeFirstLetter(t)}},data:function(){return{activeNotifications:!1}},methods:{capitalizeFirstLetter:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},toggleNotificationDropDown:function(){this.activeNotifications=!this.activeNotifications},closeDropDown:function(){this.activeNotifications=!1},toggleSidebar:function(){this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)},hideSidebar:function(){this.$sidebar.displaySidebar(!1)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{details:[{title:"12",subTitle:"Files"},{title:"2GB",subTitle:"Used"},{title:"24,6$",subTitle:"Spent"}]}},methods:{getClasses:function(t){var e=t%3;return 0===e?"col-md-3 col-md-offset-1":2===e?"col-md-4":"col-md-3"}}}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(303),i=s(r),o=a(302),n=s(o);e.default={components:{EditProfileForm:i.default,UserCard:n.default}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{getClasses:function(t){var e=t%3;return 0===e?"col-md-3 col-md-offset-1":2===e?"col-md-4":"col-md-3"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{userID:"",fetchUser:[]}},methods:{updateProfile:function(){var t=this;this.$http.patch("https://mome-app.firebaseio.com/users/"+this.userID+".json",this.fetchUser).then(function(e){t.notifyVue("success","Update Profile Successfully","Your profile has been updated"),t.fetchData()},function(e){t.notifyVue("danger","Unfortunately","Failed to update your profile"),console.log(e)})},fetchData:function(){var t=this;this.$http.get("https://mome-app.firebaseio.com/users/"+this.userID+".json").then(function(t){return t.json()}).then(function(e){t.fetchUser=e})},notifyVue:function(t,e,a){this.$notifications.notify({message:"<b>"+e+"</b><br>"+a,icon:"ti-gift",horizontalAlign:"right",verticalAlign:"top",type:t})}},created:function(){this.userID=this.$route.params.admin,this.fetchData()}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Bookmarker",data:function(){return{bookmark:{siteName:"",siteUrl:""},fetchBookmarks:[],AlreadyBooked:!1,userID:""}},methods:{validateBeforeSubmit:function(t){this.$validator.validateAll(),this.errors.any()||(this.validateLinkURL(),this.submit())},validateLinkURL:function(){this.bookmark.siteUrl.includes("://")&&(this.bookmark.siteUrl=this.bookmark.siteUrl.split("://")[1])},submit:function(){var t=this;if(this.fetchBookmarks){for(var e in this.fetchBookmarks)this.fetchBookmarks[e].siteName!==this.bookmark.siteName&&this.fetchBookmarks[e].siteUrl!==this.bookmark.siteUrl||(this.AlreadyBooked=!0);this.AlreadyBooked?(this.notifyVue("warning","Already Bookmarked","Your bookmark has been booked"),this.AlreadyBooked=!1):this.$http.post("https://mome-app.firebaseio.com/users/"+this.userID+"/bookmarks.json",this.bookmark).then(function(e){t.notifyVue("success","Bookmark Successfully","Your bookmark has been saved"),t.fetchData()},function(e){t.notifyVue("danger","Unfortunately","Failed to save your bookmark"),console.log(e)})}else this.$http.post("https://mome-app.firebaseio.com/users/"+this.userID+"/bookmarks.json",this.bookmark).then(function(e){t.notifyVue("success","Bookmark Successfully","Your bookmark has been saved"),t.fetchData()},function(e){t.notifyVue("danger","Unfortunately","Failed to save your bookmark"),console.log(e)})},fetchData:function(){var t=this;this.$http.get("https://mome-app.firebaseio.com/users/"+this.userID+"/bookmarks.json").then(function(t){return t.json()}).then(function(e){t.fetchBookmarks=e})},deleteBookmark:function(t){var e=this;for(var a in this.fetchBookmarks)this.fetchBookmarks[a].siteName===t.siteName&&this.fetchBookmarks[a].siteUrl===t.siteUrl&&this.$http.delete("https://mome-app.firebaseio.com/users/"+this.userID+"/bookmarks/"+a+".json").then(function(t){e.notifyVue("success","Delete Successfully","Your bookmark has been deleted"),e.fetchData()},function(t){e.notifyVue("danger","Unfortunately","Failed to delete your bookmark"),console.log(t)})},clearInput:function(){this.bookmark.siteName="",this.bookmark.siteUrl=""},notifyVue:function(t,e,a){this.$notifications.notify({message:"<b>"+e+"</b><br>"+a,icon:"ti-gift",horizontalAlign:"right",verticalAlign:"top",type:t})}},created:function(){this.userID=this.$route.params.admin,this.fetchData()}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:String,icon:String},data:function(){return{isOpen:!1}},methods:{toggleDropDown:function(){this.isOpen=!this.isOpen},closeDropDown:function(){this.isOpen=!1}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:{type:String,default:"text"},label:String,name:String,disabled:Boolean,placeholder:String,value:[String,Number]}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"notification",props:{message:String,icon:String,verticalAlign:{type:String,default:"top"},horizontalAlign:{type:String,default:"center"},type:{type:String,default:"info"},timeout:{type:Number,default:5e3}},data:function(){return{}},computed:{hasIcon:function(){return this.icon&&this.icon.length>0},alertType:function(){return"alert-"+this.type},customPosition:function(){var t=this,e=this.$notifications.state.filter(function(e){return e.horizontalAlign===t.horizontalAlign&&e.verticalAlign===t.verticalAlign}).length,a=90*(e-1)+20,s={};return"top"===this.verticalAlign?s.top=a+"px":s.bottom=a+"px",s}},methods:{close:function(){this.$emit("on-close")}},mounted:function(){this.timeout&&setTimeout(this.close,this.timeout)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(65),r=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={components:{Notification:r.default},data:function(){return{notifications:this.$notifications.state}},methods:{removeNotification:function(t){this.$notifications.removeNotification(t)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{moveY:{type:Number,default:0}},computed:{arrowStyle:function(){return{transform:"translate3d(0px, "+this.moveY+"px, 0px)"}}}}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(309),i=s(r),o=a(46),n=s(o);e.default={props:{type:{type:String,default:"sidebar",validator:function(t){return-1!==["sidebar","navbar"].indexOf(t)}},backgroundColor:{type:String,default:"black",validator:function(t){return-1!==["white","black","darkblue"].indexOf(t)}},activeColor:{type:String,default:"success",validator:function(t){return-1!==["primary","info","success","warning","danger"].indexOf(t)}},sidebarLinks:{type:Array,default:function(){return[]}}},components:{MovingArrow:i.default},computed:{sidebarClasses:function(){return"sidebar"===this.type?"sidebar":"collapse navbar-collapse off-canvas-sidebar"},navClasses:function(){return"sidebar"===this.type?"nav":"nav navbar-nav"},arrowMovePx:function(){return this.linkHeight*this.activeLinkIndex}},data:function(){return{linkHeight:60,activeLinkIndex:0,windowWidth:0,isWindows:!1,hasAutoHeight:!1,userID:""}},methods:{findActiveLink:function(){var t=this;this.sidebarLinks.find(function(e,a){var s=e.path===t.$route.path;return s&&(t.activeLinkIndex=a),s})},logout:function(){n.default.logout()}},mounted:function(){this.userID=this.$route.params.admin,this.findActiveLink()},watch:{$route:function(t,e){this.findActiveLink()}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,function(t,e,a){t.exports=a.p+"static/img/book_bookmark.584a0c1.png"},function(t,e,a){a(280),a(281);var s=a(3)(a(213),a(323),"data-v-65f08312",null);t.exports=s.exports},function(t,e,a){a(273);var s=a(3)(a(214),a(316),"data-v-2049fd7a",null);t.exports=s.exports},function(t,e,a){a(271);var s=a(3)(a(215),a(314),null,null);t.exports=s.exports},function(t,e,a){a(275);var s=a(3)(a(216),a(318),null,null);t.exports=s.exports},function(t,e,a){a(277);var s=a(3)(a(217),a(320),null,null);t.exports=s.exports},function(t,e,a){a(285);var s=a(3)(a(218),a(329),null,null);t.exports=s.exports},function(t,e,a){a(268);var s=a(3)(a(219),a(311),null,null);t.exports=s.exports},function(t,e,a){a(270);var s=a(3)(a(220),a(313),null,null);t.exports=s.exports},function(t,e,a){a(282);var s=a(3)(a(221),a(325),null,null);t.exports=s.exports},function(t,e,a){a(284);var s=a(3)(a(222),a(328),null,null);t.exports=s.exports},function(t,e,a){a(269);var s=a(3)(a(223),a(312),"data-v-0d615244",null);t.exports=s.exports},function(t,e,a){var s=a(3)(a(224),a(327),null,null);t.exports=s.exports},function(t,e,a){var s=a(3)(a(225),a(324),null,null);t.exports=s.exports},function(t,e,a){a(278);var s=a(3)(a(226),a(321),null,null);t.exports=s.exports},function(t,e,a){a(283);var s=a(3)(a(228),a(326),null,null);t.exports=s.exports},function(t,e,a){a(279);var s=a(3)(a(229),a(322),null,null);t.exports=s.exports},function(t,e,a){a(276);var s=a(3)(a(230),a(319),"data-v-5750633c",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-8 col-md-7 col-lg-offset-2"},[a("div",{staticClass:"card card-user"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:"static/img/momepp-bg.jpg",alt:"..."}})]),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"author"},[a("img",{staticClass:"avatar border-white",attrs:{src:"static/img/faces/momepp-3.jpg",alt:"..."}}),t._v(" "),a("h4",{staticClass:"title"},[t._v("Peeranut Pongpakatien\n          "),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.facebook.com/MomeTx.PP"}},[a("small",[t._v("@momepp")])])])]),t._v(" "),a("p",{staticClass:"description text-center"},[t._v("\n        A little Developer @ LogixEd\n        "),a("br"),t._v(" 570610589 | CPECMU\n      ")])]),t._v(" "),a("hr")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container col-md-8 col-md-offset-2"},[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"content",staticStyle:{margin:"0px 10px"}},[a("form",{on:{submit:function(e){e.preventDefault(),t.validateBeforeSubmit(e)}}},[a("div",{staticClass:"form-group",class:{"has-error":t.errors.has("Bookmark Name")}},[a("label",{staticClass:"control-label",attrs:{for:"Bookmark Name"}},[t._v("Site Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.bookmark.siteName,expression:"bookmark.siteName"},{name:"validate",rawName:"v-validate"}],staticClass:"form-control",attrs:{type:"text",name:"Bookmark Name",placeholder:"Website Name","data-vv-rules":"required|min:3"},domProps:{value:t.bookmark.siteName},on:{input:function(e){e.target.composing||t.$set(t.bookmark,"siteName",e.target.value)}}}),t._v(" "),t.errors.has("Bookmark Name")?a("p",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("Bookmark Name")))]):t._e()]),t._v(" "),a("div",{staticClass:"form-group",class:{"has-error":t.errors.has("Bookmark URL")}},[a("label",{staticClass:"control-label",attrs:{for:"Bookmark URL"}},[t._v("Site URL")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.bookmark.siteUrl,expression:"bookmark.siteUrl"},{name:"validate",rawName:"v-validate"}],staticClass:"form-control",attrs:{type:"text",name:"Bookmark URL",placeholder:"Website URL","data-vv-rules":"required|url"},domProps:{value:t.bookmark.siteUrl},on:{input:function(e){e.target.composing||t.$set(t.bookmark,"siteUrl",e.target.value)}}}),t._v(" "),t.errors.has("Bookmark URL")?a("p",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("Bookmark URL")))]):t._e()]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])]),t._v(" "),a("div",{staticClass:"row marketing"},[a("div",{staticClass:"col-md-12"},t._l(t.fetchBookmarks,function(e){return a("div",{key:e.siteUrl,attrs:{id:"bookmarksResults"}},[a("div",{staticClass:"well"},[a("h3",{staticStyle:{margin:"0px 15px"}},[t._v(t._s(e.siteName)+"\n            "),a("span",{staticClass:"pull-right"},[a("a",{staticClass:"btn btn-default",attrs:{target:"_blank",href:"https://"+e.siteUrl}},[t._v("Visit")]),t._v(" "),a("a",{staticClass:"btn btn-danger",on:{click:function(a){t.deleteBookmark(e)}}},[t._v("Delete")])])])])])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header",staticStyle:{margin:"0px 15px"}},[a("h2",[t._v("\n        Bookmark Your Favorite Sites  "),a("span",{staticClass:"ti-bookmark"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 col-md-5"},[a("user-card")],1),t._v(" "),a("div",{staticClass:"col-lg-8 col-md-7"},[a("edit-profile-form")],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xs-11 col-sm-4 alert open",class:[t.verticalAlign,t.horizontalAlign,t.alertType],style:t.customPosition,attrs:{"data-notify":"container",role:"alert","data-notify-position":"top-center"}},[a("button",{staticClass:"close",staticStyle:{position:"absolute",right:"10px",top:"5px","z-index":"1033"},attrs:{type:"button","aria-hidden":"true","data-notify":"dismiss"},on:{click:t.close}},[t._v("×\n  ")]),t._v(" "),a("div",{staticClass:"row"},[a("span",{staticClass:"col-xs-1 alert-icon",class:t.icon}),t._v(" "),a("div",{class:t.hasIcon?"col-xs-8":"col-xs-12"},[t._t("message",[a("div",{domProps:{innerHTML:t._s(t.message)}})])],2)])])},staticRenderFns:[]}},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sign-up",attrs:{align:"center"}},[s("notifications"),t._v(" "),s("img",{attrs:{src:a(293),height:"256",width:"256"}}),t._v(" "),s("hr"),t._v(" "),s("h3",[t._v("Let's create a new account!")]),t._v(" "),s("form",{on:{submit:function(e){e.preventDefault(),t.validateBeforeSubmit(e)}}},[s("div",{staticClass:"form-group",class:{"has-error":t.errors.has("fullName")}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"},{name:"validate",rawName:"v-validate"}],ref:"name",staticClass:"form-control",attrs:{type:"text",name:"fullName",placeholder:"Full Name","data-vv-rules":"required|min:3"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),t._v(" "),t.errors.has("fullName")?s("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("fullName")))]):t._e()]),t._v(" "),s("div",{staticClass:"form-group",class:{"has-error":t.errors.has("email")}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"},{name:"validate",rawName:"v-validate"}],ref:"email",staticClass:"form-control",attrs:{type:"text",name:"email",placeholder:"Email","data-vv-rules":"required|email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),t._v(" "),t.errors.has("email")?s("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))]):t._e()]),t._v(" "),s("div",{staticClass:"form-group",class:{"has-error":t.errors.has("password")}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password1,expression:"user.password1"},{name:"validate",rawName:"v-validate"}],ref:"password",staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Password","data-vv-rules":"required|alpha_num"},domProps:{value:t.user.password1},on:{input:function(e){e.target.composing||t.$set(t.user,"password1",e.target.value)}}}),t._v(" "),t.errors.has("password")?s("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("password")))]):t._e()]),t._v(" "),s("div",{staticClass:"form-group",class:{"has-error":t.errors.has("password2")}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password2,expression:"user.password2"},{name:"validate",rawName:"v-validate"}],ref:"password2",staticClass:"form-control",attrs:{type:"password",name:"password2",placeholder:"Confirm password","data-vv-rules":"required|confirmed:password","data-vv-as":"password"},domProps:{value:t.user.password2},on:{input:function(e){e.target.composing||t.$set(t.user,"password2",e.target.value)}}}),t._v(" "),t.errors.has("password2")?s("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("password2")))]):t._e()]),t._v(" "),s("div",{staticClass:"form-group",class:{"has-error":t.errors.has("facebook url")}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.url,expression:"user.url"},{name:"validate",rawName:"v-validate"}],ref:"url",staticClass:"form-control",attrs:{type:"text",name:"facebook url",placeholder:"Facebook URL","data-vv-rules":"required|url"},domProps:{value:t.user.url},on:{input:function(e){e.target.composing||t.$set(t.user,"url",e.target.value)}}}),t._v(" "),t.errors.has("facebook url")?s("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("facebook url")))]):t._e()]),t._v(" "),s("div",{staticClass:"form-group",class:{"has-error":t.errors.has("phone")}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.phone,expression:"user.phone"},{name:"validate",rawName:"v-validate"}],ref:"phone",staticClass:"form-control",attrs:{type:"text",name:"phone",placeholder:"Phone Number","data-vv-rules":"required"},domProps:{value:t.user.phone},on:{input:function(e){e.target.composing||t.$set(t.user,"phone",e.target.value)}}}),t._v(" "),t.errors.has("phone")?s("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("phone")))]):t._e()]),t._v(" "),s("div",{staticClass:"form-group",class:{"has-error":t.errors.has("birthdate")}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.birthdate,expression:"user.birthdate"},{name:"validate",rawName:"v-validate"}],ref:"birthdate",staticClass:"form-control",attrs:{type:"text",onfocus:"(this.type='date')",name:"birthdate",placeholder:"Birth Date","data-vv-rules":"required"},domProps:{value:t.user.birthdate},on:{input:function(e){e.target.composing||t.$set(t.user,"birthdate",e.target.value)}}}),t._v(" "),t.errors.has("birthdate")?s("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("birthdate")))]):t._e()]),t._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"}},[t._v("Signup")])]),t._v(" "),s("h5",[t._v("or go back to\n    "),s("router-link",{attrs:{to:"./login"}},[t._v("login")]),t._v(".")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"nav-open":t.$sidebar.showSidebar}},[a("router-view"),t._v(" "),a("side-bar",{attrs:{type:"navbar","sidebar-links":t.$sidebar.sidebarLinks}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container-fluid"},[a("nav",{staticClass:"pull-left"},[a("ul",[a("li",[a("p",[t._v("2016 Bookmarker, Inc.")])])])]),t._v(" "),a("div",{staticClass:"copyright pull-right"},[t._v("\n      © Coded with\n      "),a("i",{staticClass:"fa fa-heart heart"}),t._v(" by\n      "),a("a",{attrs:{href:"https://github.com/momepp",target:"_blank"}},[t._v("MomePP")]),t._v(".\n      Powered by "),a("a",{attrs:{href:"https://www.creative-tim.com/?ref=pdf-vuejs",target:"_blank"}},[t._v("Creative Tim")]),t._v(".\n    ")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.sidebarClasses,attrs:{"data-background-color":t.backgroundColor,"data-active-color":t.activeColor}},[a("div",{staticClass:"sidebar-wrapper",attrs:{id:"style-3"}},[a("div",{staticClass:"logo"},[a("router-link",{staticClass:"simple-text",attrs:{to:{name:"bookmark"}}},[a("div",{staticClass:"logo-img"},[a("img",{attrs:{src:"static/img/book_bookmark.png",alt:""}})]),t._v("\n        The Bookmarker\n      ")])],1),t._v(" "),t._t("default"),t._v(" "),a("ul",{class:t.navClasses},t._l(t.sidebarLinks,function(e,s){return a("router-link",{ref:e.name,refInFor:!0,attrs:{to:{path:e.path},tag:"li"}},[a("a",[a("i",{class:e.icon}),t._v(" "),a("p",[t._v(t._s(e.name)+"\n          ")])])])})),t._v(" "),a("div",{staticClass:"text-center pull-buttom"},[a("button",{staticClass:"btn btn-danger btn-fill btn-wd",on:{click:t.logout}},[t._v("\n        Logout\n      ")])])],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("side-bar",{attrs:{type:"sidebar","sidebar-links":t.$sidebar.sidebarLinks}}),t._v(" "),a("notifications"),t._v(" "),a("div",{staticClass:"main-panel"},[a("top-navbar"),t._v(" "),a("dashboard-content",{nativeOn:{click:function(e){t.toggleSidebar(e)}}}),t._v(" "),a("content-footer")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[t.label?a("label",[t._v("\n    "+t._s(t.label)+"\n  ")]):t._e(),t._v(" "),a("input",t._b({staticClass:"form-control border-input",domProps:{value:t.value},on:{input:function(e){t.$emit("input",e.target.value)}}},"input",t.$props,!1))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"moving-arrow",style:t.arrowStyle})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("notifications"),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"col-md-8 col-md-offset-2"},[a("div",{staticClass:"col-md-5 col-centered"},[a("h3",[t._v("Sign in")]),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.validateBeforeSubmit(e)}}},[a("div",{staticClass:"form-group",class:{"has-error":t.errors.has("email")}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate"}],staticClass:"form-control",attrs:{type:"text",name:"email",placeholder:"Email","data-vv-rules":"required|email"},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}}),t._v(" "),t.errors.has("email")?a("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))]):t._e()]),t._v(" "),a("div",{staticClass:"form-group",class:{"has-error":t.errors.has("password")}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Password","data-vv-rules":"required"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),t.errors.has("password")?a("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("password")))]):t._e()]),t._v(" "),a("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"}},[t._v("Login")])]),t._v(" "),a("p",[t._v("You don't have an account? You can\n        "),a("router-link",{attrs:{to:"./signup"}},[t._v(" create one")]),t._v(" "),a("br"),t._v(" Or... You can\n        "),a("router-link",{attrs:{to:"./signup"}},[t._v(" create account here")])],1)])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6 col-md-offset-3"},[a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"static/img/book_bookmark.png",height:"256",width:"256"}}),t._v(" "),a("h2",[t._v("Welcome to Bookmarker")])]),t._v(" "),a("br"),t._v(" "),a("hr")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"dropdown",class:{open:t.isOpen},on:{click:t.toggleDropDown}},[a("a",{staticClass:"dropdown-toggle btn-rotate",attrs:{"data-toggle":"dropdown"}},[t._t("title",[a("i",{class:t.icon}),t._v(" "),a("p",{staticClass:"notification"},[t._v(t._s(t.title)+"\n        "),a("b",{staticClass:"caret"})])])],2),t._v(" "),a("ul",{staticClass:"dropdown-menu"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card card-user"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:"static/img/background.jpg",alt:"..."}})]),t._v(" "),a("div",{staticClass:"content"},[a("p",{staticClass:"description text-center"},[t._v('\n      "I like the way you work it\n      '),a("br"),t._v(" No diggity\n      "),a("br"),t._v(' I wanna bag it up"\n    ')])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notifications"},[a("transition-group",{attrs:{name:"list"}},t._l(t.notifications,function(e,s){return a("notification",{key:e,attrs:{message:e.message,icon:e.icon,type:e.type,"vertical-align":e.verticalAlign,"horizontal-align":e.horizontalAlign},on:{"on-close":function(e){t.removeNotification(s)}}})}))],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact-us full-screen"},[a("nav",{staticClass:"navbar navbar-ct-default",attrs:{role:"navigation-demo"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-header"},[t._m(0),t._v(" "),a("router-link",{staticClass:"navbar-brand",attrs:{to:{path:"/"}}},[t._v("Site title")])],1),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navigation-example-2"}},[a("ul",{staticClass:"nav navbar-nav navbar-right"},[a("li",[a("router-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1)])])])]),t._v(" "),t._m(1),t._v(" "),a("footer",{staticClass:"footer-demo"},[a("div",{staticClass:"container"},[a("nav",{staticClass:"pull-left"},[a("ul",[a("li",[a("router-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{path:"/register"}}},[t._v("Register")])],1)])]),t._v(" "),t._m(2)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggle",attrs:{type:"button","data-toggle":"collapse","data-target":"#navigation-example-2"}},[a("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),a("span",{staticClass:"icon-bar"}),t._v(" "),a("span",{staticClass:"icon-bar"}),t._v(" "),a("span",{staticClass:"icon-bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper wrapper-full-page section content"},[a("div",{},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8 col-md-offset-2 text-center"},[a("h2",{staticClass:"title text-danger"},[t._v("404 Not Found")]),t._v(" "),a("h2",{staticClass:"title"},[t._v("Oops! It seems that this page does not exist.")])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"copyright pull-right"},[t._v("\n        © 2017, made with\n        "),a("i",{staticClass:"fa fa-heart heart"}),t._v(" by Paper admin\n      ")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"content"},[a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-7"},[a("fg-input",{attrs:{type:"email",label:"Email (Username)",disabled:!0,placeholder:"@email"},model:{value:t.fetchUser.email,callback:function(e){t.$set(t.fetchUser,"email",e)},expression:"fetchUser.email"}})],1),t._v(" "),a("div",{staticClass:"col-md-5"},[a("fg-input",{attrs:{type:"text",label:"Phone number",placeholder:"phone"},model:{value:t.fetchUser.phone,callback:function(e){t.$set(t.fetchUser,"phone",e)},expression:"fetchUser.phone"}})],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("fg-input",{attrs:{type:"text",label:"Full Name",placeholder:"First Name"},model:{value:t.fetchUser.fullName,callback:function(e){t.$set(t.fetchUser,"fullName",e)},expression:"fetchUser.fullName"}})],1),t._v(" "),a("div",{staticClass:"col-md-6"},[a("fg-input",{attrs:{type:"date",label:"Birthdate",placeholder:"Birthdate"},model:{value:t.fetchUser.birthdate,callback:function(e){t.$set(t.fetchUser,"birthdate",e)},expression:"fetchUser.birthdate"}})],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("fg-input",{attrs:{type:"text",label:"Facebook",placeholder:"Facebook URL"},model:{value:t.fetchUser.facebookUrl,callback:function(e){t.$set(t.fetchUser,"facebookUrl",e)},expression:"fetchUser.facebookUrl"}})],1)]),t._v(" "),a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-info btn-fill btn-wd",attrs:{type:"submit"},on:{click:function(e){e.preventDefault(),t.updateProfile(e)}}},[t._v("\n          Update Profile\n        ")])]),t._v(" "),a("div",{staticClass:"clearfix"})])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("h4",{staticClass:"title"},[t._v("Edit Profile")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-default"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"navbar-header"},[a("button",{staticClass:"navbar-toggle",class:{toggled:t.$sidebar.showSidebar},attrs:{type:"button"},on:{click:t.toggleSidebar}},[a("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),a("span",{staticClass:"icon-bar bar1"}),t._v(" "),a("span",{staticClass:"icon-bar bar2"}),t._v(" "),a("span",{staticClass:"icon-bar bar3"})]),t._v(" "),a("a",{staticClass:"navbar-brand"},[t._v(t._s(t.routeName))])]),t._v(" "),a("div",{staticClass:"navbar-right-menu"})])])},staticRenderFns:[]}},,,function(t,e){},function(t,e){}]),[104]);
//# sourceMappingURL=app.6cd6b1da6da29cf57f64.js.map