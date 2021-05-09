var e,t,r,o=Object.defineProperty,i=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,l=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&s(e,r,t[r]);if(n)for(var r of n(t))a.call(t,r)&&s(e,r,t[r]);return e};import{V as c,C as d,i as m,j as p,A as u,M as h,g,a as _,b as v,c as b,e as f,W as y,d as E,P as O,p as C,m as S,f as T,n as w,h as P,E as L}from"./vendor.d6aee48f.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(r){const o=new URL(e,location),i=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((r,n)=>{const a=new URL(e,o);if(self[t].moduleMap[a])return r(self[t].moduleMap[a]);const s=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){n(new Error(`Failed to import: ${e}`)),i(l)},onload(){r(self[t].moduleMap[a]),i(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/assets/");var x=Object.defineProperty,k=Object.getOwnPropertyDescriptor;let D=class extends c{};D=((e,t,r,o)=>{for(var i,n=o>1?void 0:o?k(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&x(t,r,n),n})([d],D);function j(e,t,r,o,i,n,a,s){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),o&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=l):i&&(l=s?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var m=c.beforeCreate;c.beforeCreate=m?[].concat(m,l):[l]}return{exports:e,options:c}}const A={};var I=j(D,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),[],!1,(function(e){for(let t in A)this[t]=A[t]}),null,null,null).exports;c.use(m);var R=new m.Store({});let $;const B={},M=function(e,t){if(!t)return e();if(void 0===$){const e=document.createElement("link").relList;$=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in B)return;B[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":$,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))},N=e=>p.set("sidebar_status",e),U="admin_access_token",V=()=>p.remove(U);function G(e){document.body.classList.length?document.body.classList.replace(document.body.classList[0],e):document.body.classList.add(e)}function z(e,t){var r=!1;"#"==e[0]&&(e=e.slice(1),r=!0);var o=parseInt(e,16),i=(o>>16)+t;i>255?i=255:i<0&&(i=0);var n=(o>>8&255)+t;n>255?n=255:n<0&&(n=0);var a=(255&o)+t;return a>255?a=255:a<0&&(a=0),(r?"#":"")+(a|n<<8|i<<16).toString(16)}var H=Object.defineProperty,F=Object.getOwnPropertyDescriptor,K=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?F(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&H(t,r,n),n};const q=(null==(e=window.appConf)?void 0:e.lang)||"en";var W,X;(X=W||(W={}))[X.Mobile=0]="Mobile",X[X.Desktop=1]="Desktop",X[X.language=2]="language";let Y=class extends v{constructor(){super(...arguments),this.sidebar={opened:"closed"!==p.get("sidebar_status"),withoutAnimation:!1},this.device=1,this.language=p.get("language")||q,this.theme="themeDefault",this.primaryColor=getComputedStyle(document.body).getPropertyValue("--primary")||"blue"}TOGGLE_SIDEBAR(e){this.sidebar.opened=!this.sidebar.opened,this.sidebar.withoutAnimation=e,this.sidebar.opened?N("opened"):N("closed")}CLOSE_SIDEBAR(e){this.sidebar.opened=!1,this.sidebar.withoutAnimation=e,N("closed")}TOGGLE_DEVICE(e){this.device=e}SET_THEME(e){if("string"==typeof e){this.theme=e,G(this.theme);let t=localStorage.getItem("primaryColor");t&&(document.body.style.setProperty("--primary",t),document.body.style.setProperty("--primary-hover",z("#51CBA8",10)),document.body.style.setProperty("--primary-active",z(t,-10)),this.primaryColor=t||getComputedStyle(document.body).getPropertyValue("--primary"))}else this.theme=e.theme,G(this.theme),this.primaryColor=getComputedStyle(document.body).getPropertyValue("--primary"),console.log(this.primaryColor)}SET_LANGUAGE(e){this.language=e,p.set("language",e)}ToggleSideBar(e){this.TOGGLE_SIDEBAR(e)}CloseSideBar(e){this.CLOSE_SIDEBAR(e)}ToggleDevice(e){this.TOGGLE_DEVICE(e)}async SetLanguage(e){return e}async SetTheme(e){return e}};K([_],Y.prototype,"TOGGLE_SIDEBAR",1),K([_],Y.prototype,"CLOSE_SIDEBAR",1),K([_],Y.prototype,"TOGGLE_DEVICE",1),K([_],Y.prototype,"SET_THEME",1),K([_],Y.prototype,"SET_LANGUAGE",1),K([u],Y.prototype,"ToggleSideBar",1),K([u],Y.prototype,"CloseSideBar",1),K([u],Y.prototype,"ToggleDevice",1),K([u({commit:"SET_LANGUAGE"})],Y.prototype,"SetLanguage",1),K([u({commit:"SET_THEME"})],Y.prototype,"SetTheme",1),Y=K([h({dynamic:!0,store:R,name:"app"})],Y);const J=g(Y);var Q=Object.defineProperty,Z=Object.getOwnPropertyDescriptor;let ee=class extends c{};ee=((e,t,r,o)=>{for(var i,n=o>1?void 0:o?Z(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&Q(t,r,n),n})([d({name:"AppMain"})],ee);const te={};var re=j(ee,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"app-main"},[t("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[t("router-view")],1)],1)}),[],!1,(function(e){for(let t in te)this[t]=te[t]}),"5d7d7d2d",null,null).exports;const oe=b.create({baseURL:"",timeout:5e3});oe.interceptors.request.use((e=>(de.token&&(e.headers["X-Access-Token"]=de.token),e)),(e=>{Promise.reject(e)})),oe.interceptors.response.use((e=>{const t=e.data;return 2e3!=t.code?(f.Message({message:t.message||"Error",type:"error",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||f.MessageBox.confirm("You have been logged out, try to login again.","Log out",{confirmButtonText:"Relogin",cancelButtonText:"Cancel",type:"warning"}).then((()=>{de.ResetToken(),location.reload()})),Promise.reject(new Error(t.message||"Error"))):e.data}),(e=>(f.Message({message:e.message,type:"error",duration:5e3}),Promise.reject(e))));const ie=null==(t=window.appConf)?void 0:t.api,ne=()=>oe({url:ie.logout,method:"post"});var ae=Object.defineProperty,se=Object.getOwnPropertyDescriptor,le=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?se(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&ae(t,r,n),n};let ce=class extends v{constructor(){super(...arguments),this.token=p.get(U)||"",this.name="",this.uid="",this.avatar="",this.introduction="",this.roles=[]}SET_TOKEN(e){this.token=e,(e=>{p.set(U,e)})(e)}SET_UID(e){this.uid=e,(e=>{p.set("uid",e)})(e)}SET_NAME(e){this.name=e}SET_AVATAR(e){this.avatar=e}SET_INTRODUCTION(e){this.introduction=e}SET_ROLES(e){this.roles=e}async Login(e){let{username:t,password:r}=e;t=t.trim();const{data:o}=await(e=>oe({url:ie.login,method:"post",data:e}))({username:t,password:r});this.SET_TOKEN(o.accessToken),this.SET_UID(o.uid)}ResetToken(){V(),this.SET_TOKEN(""),this.SET_ROLES([])}async GetUserInfo(){if(""===this.token)throw Error("GetUserInfo: token is undefined!");const{data:e}=await(e=>oe({url:ie.userInfo,method:"get",params:e}))({uid:this.uid||(t="uid",p.get(t))});var t;if(!e)throw Error("Verification failed, please Login again.");const{roles:r,name:o,avatar:i,introduction:n,username:a}=e;if(!r||r.length<=0)throw Error("GetUserInfo: roles must be a non-null array!");this.SET_ROLES(r),this.SET_NAME(a),this.SET_AVATAR(i),this.SET_INTRODUCTION(n)}async LogOut(){if(console.log(this.token),""===this.token)throw Error("LogOut: token is undefined!");console.log(await ne()),await ne(),V(),this.SET_TOKEN(""),this.SET_ROLES([])}};le([_],ce.prototype,"SET_TOKEN",1),le([_],ce.prototype,"SET_UID",1),le([_],ce.prototype,"SET_NAME",1),le([_],ce.prototype,"SET_AVATAR",1),le([_],ce.prototype,"SET_INTRODUCTION",1),le([_],ce.prototype,"SET_ROLES",1),le([u],ce.prototype,"Login",1),le([u],ce.prototype,"ResetToken",1),le([u({rawError:!0})],ce.prototype,"GetUserInfo",1),le([u],ce.prototype,"LogOut",1),ce=le([h({dynamic:!0,store:R,name:"user"})],ce);const de=g(ce);var me=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,ue=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?pe(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&me(t,r,n),n};let he=class extends c{constructor(){super(...arguments),this.breadcrumbs=[]}onRouteChange(e){e.path.startsWith("/redirect/")||this.getBreadcrumb()}created(){this.getBreadcrumb()}getBreadcrumb(){let e=this.$route.matched.filter((e=>e.meta&&e.meta.title));const t=e[0];this.isDashboard(t)||(e=[{path:"/dashboard",meta:{title:"Dashboard"}}].concat(e)),this.breadcrumbs=e.filter((e=>e.meta&&e.meta.title&&!1!==e.meta.breadcrumb))}isDashboard(e){return"Dashboard"===(e&&e.meta&&e.meta.title)}pathCompile(e){const{params:t}=this.$route;return E(e)(t)}handleLink(e){const{redirect:t,path:r}=e;t?this.$router.push(t):this.$router.push(this.pathCompile(r))}};ue([y("$route")],he.prototype,"onRouteChange",1),he=ue([d({name:"Breadcrumb"})],he);const ge={};var _e=j(he,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{separator:"/"}},[r("transition-group",{attrs:{name:"breadcrumb"}},e._l(e.breadcrumbs,(function(t,o){return r("el-breadcrumb-item",{key:t.path},["noredirect"===t.redirect||o===e.breadcrumbs.length-1?r("span",{staticClass:"no-redirect"},[e._v(e._s(t.meta.title))]):r("a",{on:{click:function(r){return r.preventDefault(),e.handleLink(t)}}},[e._v(e._s(t.meta.title))])])})),1)],1)}),[],!1,(function(e){for(let t in ge)this[t]=ge[t]}),"730bc39a",null,null).exports,ve=Object.defineProperty,be=Object.getOwnPropertyDescriptor,fe=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?be(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&ve(t,r,n),n};let ye=class extends c{toggleClick(){this.$emit("toggleClick")}};fe([O({default:!1})],ye.prototype,"isActive",2),ye=fe([d({name:"Hamburger"})],ye);const Ee={};var Oe=j(ye,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:[{"is-active":e.isActive}],on:{click:e.toggleClick}},[r("i",{staticClass:"el-icon-s-unfold"})])}),[],!1,(function(e){for(let t in Ee)this[t]=Ee[t]}),"65f830d5",null,null).exports,Ce=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,Te=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?Se(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&Ce(t,r,n),n};let we=class extends c{constructor(){super(...arguments),this.customPrimaryColor="#6610f2",this.drawer=!1,this.direction="rtl",this.currentTheme=""}get primaryColor(){return J.primaryColor}get sidebar(){return J.sidebar}get device(){return J.device.toString()}get avatar(){return de.avatar}get theme(){return J.theme}primaryColorChanged(e,t){e&&t&&(localStorage.setItem("primaryColor",e),this.$store.dispatch("SetTheme",this.currentTheme))}handleClose(e){e()}created(){}mounted(){this.currentTheme=this.theme,localStorage.getItem("primaryColor")&&(this.customPrimaryColor=localStorage.getItem("primaryColor"))}themeChanged(e){this.currentTheme=e,document.body.hasAttribute("style")&&document.body.removeAttribute("style"),localStorage.getItem("primaryColor")&&localStorage.removeItem("primaryColor"),localStorage.setItem("currentTheme",e),this.$store.dispatch("SetTheme",{theme:e,handle:!0})}};Te([y("customPrimaryColor",{immediate:!0})],we.prototype,"primaryColorChanged",1),we=Te([d({name:"SysSetting",components:{}})],we);const Pe={};var Le=j(we,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"setting-layer flex-center"},[r("el-button",{staticClass:"btn-setting",attrs:{icon:"el-icon-setting",size:"mini",circle:""},on:{click:function(t){e.drawer=!0}}}),e._v(" "),r("el-drawer",{attrs:{title:"Settings",size:250,"append-to-body":!0,visible:e.drawer,direction:e.direction,"before-close":e.handleClose},on:{"update:visible":function(t){e.drawer=t}}},[r("section",{staticClass:"drawer-ctx"},[r("h5",[e._v("主题选择")]),e._v(" "),r("el-radio-group",{staticClass:"color-cards",on:{change:e.themeChanged},model:{value:e.currentTheme,callback:function(t){e.currentTheme=t},expression:"currentTheme"}},[r("el-radio",{staticClass:"theme-default",attrs:{label:"themeDefault"}},[e._v("default")]),e._v(" "),r("el-radio",{staticClass:"theme-blue",attrs:{label:"themeBlue"}},[e._v("Blue")]),e._v(" "),r("el-radio",{staticClass:"theme-cyan",attrs:{label:"themeLight"}},[e._v("Cyan")]),e._v(" "),r("el-radio",{staticClass:"theme-orange",attrs:{label:"themeOrange"}},[e._v("Orange")]),e._v(" "),r("el-radio",{staticClass:"theme-dark",attrs:{label:"themeDark"}},[e._v("Dark")]),e._v(" "),r("el-radio",{staticClass:"theme-darkblue",attrs:{label:"themeDarkBlue"}},[e._v("DarkBlue")])],1),e._v(" "),r("h5",[e._v("自定义主题")]),e._v(" "),r("div",{staticClass:"flex"},[e._v("\n        主题色："),r("el-color-picker",{model:{value:e.customPrimaryColor,callback:function(t){e.customPrimaryColor=t},expression:"customPrimaryColor"}})],1)],1)])],1)}),[],!1,(function(e){for(let t in Pe)this[t]=Pe[t]}),"c4c512d6",null,null).exports,xe=Object.defineProperty,ke=Object.getOwnPropertyDescriptor;let De=class extends c{get sidebar(){return J.sidebar}get device(){return J.device.toString()}get avatar(){return de.avatar}get username(){return de.name}toggleSideBar(){J.ToggleSideBar(!1)}async logout(){await de.LogOut(),this.$router.push(`/login?redirect=${this.$route.fullPath}`)}};De=((e,t,r,o)=>{for(var i,n=o>1?void 0:o?ke(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&xe(t,r,n),n})([d({name:"Navbar",components:{Breadcrumb:_e,Hamburger:Oe,SysSetting:Le}})],De);const je={};var Ae=j(De,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navbar"},[r("hamburger",{staticClass:"hamburger-container",attrs:{id:"hamburger-container","is-active":e.sidebar.opened},on:{toggleClick:e.toggleSideBar}}),e._v(" "),r("breadcrumb",{staticClass:"breadcrumb-container",attrs:{id:"breadcrumb-container"}}),e._v(" "),r("div",{staticClass:"right-menu"},[r("el-dropdown",{staticClass:"avatar-container right-menu-item hover-effect",attrs:{trigger:"click"}},[r("div",{staticClass:"avatar-wrapper flex-center"},[r("i",{staticClass:"el-icon-user"}),e._v(" "),r("span",{staticClass:"uname"},[e._v(e._s(e.username))]),e._v(" "),r("i",{staticClass:"el-icon-caret-bottom"})]),e._v(" "),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("router-link",{attrs:{to:"/"}},[r("el-dropdown-item",[e._v("\n            Home\n          ")])],1),e._v(" "),r("a",{attrs:{target:"_blank",href:"https://github.com/artskin/base-admin"}},[r("el-dropdown-item",[e._v("\n            Github\n          ")])],1),e._v(" "),r("el-dropdown-item",{attrs:{divided:""}},[r("span",{staticStyle:{display:"block"},on:{click:e.logout}},[e._v("LogOut")])])],1)],1),e._v(" "),r("SysSetting")],1)],1)}),[],!1,(function(e){for(let t in je)this[t]=je[t]}),"528a45d4",null,null).exports;const Ie=e=>["admin","editor"].indexOf(e.trim())>=0,Re=e=>!!e&&/^(https?:|mailto:|tel:)/.test(e);var $e=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,Me=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?Be(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&$e(t,r,n),n};let Ne=class extends c{constructor(){super(...arguments),this.isExternal=Re}};Me([O({required:!0})],Ne.prototype,"to",2),Ne=Me([d({name:"SidebarItemLink"})],Ne);const Ue={};var Ve=j(Ne,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isExternal(e.to)?r("a",{attrs:{href:e.to,target:"_blank",rel:"noopener"}},[e._t("default")],2):r("router-link",{attrs:{to:e.to}},[e._t("default")],2)}),[],!1,(function(e){for(let t in Ue)this[t]=Ue[t]}),null,null,null).exports,Ge=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,He=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?ze(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&Ge(t,r,n),n};let Fe=class extends c{get showingChildNumber(){if(this.item.children){return this.item.children.filter((e=>!e.meta||!e.meta.hidden)).length}return 0}get theOnlyOneChild(){if(this.showingChildNumber>1)return null;if(this.item.children)for(let e of this.item.children)if(!e.meta||!e.meta.hidden)return e;return l(l({},this.item),{path:""})}resolvePath(e){return Re(e)?e:Re(this.basePath)?this.basePath:C.resolve(this.basePath,e)}};He([O({required:!0})],Fe.prototype,"item",2),He([O({default:!1})],Fe.prototype,"isCollapse",2),He([O({default:!0})],Fe.prototype,"isFirstLevel",2),He([O({default:""})],Fe.prototype,"basePath",2),Fe=He([d({name:"SidebarItem",components:{SidebarItemLink:Ve}})],Fe);const Ke={};var qe=j(Fe,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.item.meta&&e.item.meta.hidden?e._e():r("div",{class:["menu-wrapper",e.isCollapse?"simple-mode":"full-mode",{"first-level":e.isFirstLevel}]},[e.theOnlyOneChild&&!e.theOnlyOneChild.children?[e.theOnlyOneChild.meta?r("sidebar-item-link",{attrs:{to:e.resolvePath(e.theOnlyOneChild.path)}},[r("el-menu-item",{class:{"submenu-title-noDropdown":e.isFirstLevel},attrs:{index:e.resolvePath(e.theOnlyOneChild.path)}},[e.theOnlyOneChild.meta.icon?r("i",{class:e.theOnlyOneChild.meta.icon}):e._e(),e._v(" "),e.theOnlyOneChild.meta.title?r("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.theOnlyOneChild.meta.title))]):e._e()])],1):e._e()]:r("el-submenu",{attrs:{index:e.resolvePath(e.item.path),"popper-append-to-body":""}},[r("template",{slot:"title"},[e.item.meta&&e.item.meta.icon?r("i",{class:e.item.meta.icon}):e._e(),e._v(" "),e.item.meta&&e.item.meta.title?r("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.item.meta.title))]):e._e()]),e._v(" "),e.item.children?e._l(e.item.children,(function(t){return r("sidebar-item",{key:t.path,staticClass:"nest-menu",attrs:{item:t,"is-collapse":e.isCollapse,"is-first-level":!1,"base-path":e.resolvePath(t.path)}})})):e._e()],2)],2)}),[],!1,(function(e){for(let t in Ke)this[t]=Ke[t]}),null,null,null).exports,We=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Ye=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?Xe(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&We(t,r,n),n};let Je=class extends c{mounted(){}};Ye([O({default:""})],Je.prototype,"className",2),Je=Ye([d],Je);const Qe={};var Ze=j(Je,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{staticClass:"icon",class:e.className,attrs:{t:"1614422789908",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"771",width:"64",height:"64","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("defs"),e._v(" "),r("path",{attrs:{d:"M736.32426667 130.75555521a45.32906667 45.32906667 0 0 0-39.27608854 22.57351147l-330.41066666 566.43128852 66.9923552 114.77902295a90.9312 90.9312 0 0 0 157.24088853 0l370.4604448-635.33511148A45.51111147 45.51111147 0 0 0 922.05511147 130.75555521l-185.7308448 0z","p-id":"772"}}),e._v(" "),r("path",{attrs:{d:"M102.4 130.75555521a45.51111147 45.51111147 0 0 0-39.3216 68.44871146l370.5059552 635.33511148a91.06773333 91.06773333 0 0 0 157.2408896-1e-8l111.8208-191.73831147L417.24586667 153.32906668A45.42008853 45.42008853 0 0 0 377.92426667 130.75555521L102.4 130.75555521z","p-id":"773"}})])}),[],!1,(function(e){for(let t in Qe)this[t]=Qe[t]}),"307e9ceb",null,null).exports,et=Object.defineProperty,tt=Object.getOwnPropertyDescriptor;let rt=class extends c{get sidebar(){return J.sidebar}get routes(){return this.$router.options.routes}get isCollapse(){return!this.sidebar.opened}};rt=((e,t,r,o)=>{for(var i,n=o>1?void 0:o?tt(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&et(t,r,n),n})([d({name:"SideBar",components:{SidebarItem:qe,IconSvg:Ze}})],rt);const ot={};var it=j(rt,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:{hideSidebar:e.isCollapse}},[r("h1",{staticClass:"logo"},[r("icon-svg",{attrs:{className:"svg-logo"}}),e._v(" "),r("span",[e._v("Admin Kit")])],1),e._v(" "),r("el-menu",{attrs:{collapse:e.isCollapse,"unique-opened":!1,"collapse-transition":!1,mode:"vertical"}},e._l(e.routes,(function(t){return r("sidebar-item",{key:t.path,attrs:{item:t,"base-path":t.path,"is-collapse":e.isCollapse}})})),1)],1)}),[],!1,(function(e){for(let t in ot)this[t]=ot[t]}),"6d825dfc",null,null).exports,nt=Object.defineProperty,at=Object.getOwnPropertyDescriptor,st=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?at(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&nt(t,r,n),n};const lt=null==(r=window.appConf)?void 0:r.mWidth;let ct=class extends c{get device(){return J.device}get sidebar(){return J.sidebar}onRouteChange(){this.device===W.Mobile&&this.sidebar.opened&&J.CloseSideBar(!1)}beforeMount(){window.addEventListener("resize",this.resizeHandler)}mounted(){this.isMobile()&&(J.ToggleDevice(W.Mobile),J.CloseSideBar(!0))}beforeDestroy(){window.removeEventListener("resize",this.resizeHandler)}isMobile(){return document.body.getBoundingClientRect().width-1<lt}resizeHandler(){if(!document.hidden){const e=this.isMobile();J.ToggleDevice(e?W.Mobile:W.Desktop),e&&J.CloseSideBar(!0)}}};st([y("$route")],ct.prototype,"onRouteChange",1),ct=st([d({name:"ResizeMixin"})],ct);var dt=ct,mt=Object.defineProperty,pt=Object.getOwnPropertyDescriptor;let ut=class extends(S(dt)){get classObj(){return{hideSidebar:!this.sidebar.opened,openSidebar:this.sidebar.opened,withoutAnimation:this.sidebar.withoutAnimation,mobile:this.device===W.Mobile}}handleClickOutside(){J.CloseSideBar(!1)}};ut=((e,t,r,o)=>{for(var i,n=o>1?void 0:o?pt(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&mt(t,r,n),n})([d({components:{AppMain:re,Navbar:Ae,Sidebar:it}})],ut);const ht={};var gt=j(ut,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-wrapper",class:e.classObj},[e.classObj.mobile&&e.sidebar.opened?r("div",{staticClass:"drawer-bg",on:{click:e.handleClickOutside}}):e._e(),e._v(" "),r("sidebar",{staticClass:"sidebar-container"}),e._v(" "),r("div",{staticClass:"main-container"},[r("navbar"),e._v(" "),r("app-main")],1)],1)}),[],!1,(function(e){for(let t in ht)this[t]=ht[t]}),"afccc1a0",null,null).exports;c.use(T);var _t=new T({scrollBehavior:(e,t,r)=>r||{x:0,y:0},base:"",routes:[{path:"/login",component:()=>M((()=>__import__("./index.e97ba927.js")),["/assets/index.e97ba927.js","/assets/index.9f19b47e.css","/assets/vendor.d6aee48f.js"]),meta:{hidden:!0,title:"Login"}},{path:"/404",component:()=>M((()=>__import__("./404.f3e270f0.js")),["/assets/404.f3e270f0.js","/assets/404.debd99c3.css","/assets/vendor.d6aee48f.js"]),meta:{hidden:!0}},{path:"/",component:gt,redirect:"/dashboard",children:[{path:"dashboard",component:()=>M((()=>__import__("./index.ad8d9da0.js")),["/assets/index.ad8d9da0.js","/assets/index.09a891c9.css","/assets/vendor.d6aee48f.js"]),meta:{title:"Dashboard",icon:"el-icon-data-analysis"}}]},{path:"/example",component:gt,redirect:"/example/tree",meta:{title:"Pages",icon:"el-icon-document-copy"},children:[{path:"cards",component:()=>M((()=>__import__("./card.9559481a.js")),["/assets/card.9559481a.js","/assets/card.63a3568f.css","/assets/vendor.d6aee48f.js","/assets/tasks.6a4d8977.js"]),meta:{title:"Card list",icon:"el-icon-files"}},{path:"task",component:()=>M((()=>__import__("./index.a9a4cb16.js")),["/assets/index.a9a4cb16.js","/assets/vendor.d6aee48f.js","/assets/tasks.6a4d8977.js"]),meta:{title:"Task List",icon:"el-icon-s-grid"}},{path:"tree",component:()=>M((()=>__import__("./index.51a055ac.js")),["/assets/index.51a055ac.js","/assets/vendor.d6aee48f.js"]),meta:{title:"Tree",icon:"el-icon-finished"}}]},{path:"/ui",component:gt,redirect:"/elements",children:[{path:"elements",component:()=>M((()=>__import__("./index.4026df34.js")),["/assets/index.4026df34.js","/assets/index.648f0124.css","/assets/vendor.d6aee48f.js"]),meta:{title:"Element UI",icon:"el-icon-eleme"}}]},{path:"/form",component:gt,children:[{path:"index",component:()=>M((()=>__import__("./index.e4c38e7b.js")),["/assets/index.e4c38e7b.js","/assets/index.4c569282.css","/assets/vendor.d6aee48f.js"]),meta:{title:"Form",icon:"el-icon-edit"}}]},{path:"/nested",component:gt,redirect:"/nested/menu1",meta:{title:"Nested",icon:"el-icon-finished"},children:[{path:"menu1",component:()=>M((()=>__import__("./index.5b612e39.js")),["/assets/index.5b612e39.js","/assets/vendor.d6aee48f.js"]),redirect:"/nested/menu1/menu1-1",meta:{title:"Menu1"},children:[{path:"menu1-1",component:()=>M((()=>__import__("./index.c5b1e06a.js")),["/assets/index.c5b1e06a.js","/assets/vendor.d6aee48f.js"]),meta:{title:"Menu1-01"}},{path:"menu1-2",component:()=>M((()=>__import__("./index.b534e0a2.js")),["/assets/index.b534e0a2.js","/assets/vendor.d6aee48f.js"]),meta:{title:"Menu1-02"}},{path:"menu1-3",component:()=>M((()=>__import__("./index.84f7e9e2.js")),["/assets/index.84f7e9e2.js","/assets/vendor.d6aee48f.js"]),meta:{title:"Menu1-03"}}]},{path:"menu2",component:()=>M((()=>__import__("./index.f3368a29.js")),["/assets/index.f3368a29.js","/assets/vendor.d6aee48f.js"]),meta:{title:"Menu2"}}]},{path:"/senseui",component:gt,children:[{path:"https://senseui.im",meta:{title:"Sense UI",icon:"el-icon-menu"}}]},{path:"/gudong",component:gt,children:[{path:"https://gudong.im",meta:{title:"FE Notes",icon:"el-icon-notebook-1"}}]},{path:"*",redirect:"/404",meta:{hidden:!0}}]});w.configure({showSpinner:!1});const vt=["/login"];_t.beforeEach((async(e,t,r)=>{if(w.start(),de.token)if("/login"===e.path)r({path:"/"}),w.done();else if(0===de.roles.length)try{await de.GetUserInfo(),r()}catch(o){de.ResetToken(),r(`/login?redirect=${e.path}`),w.done()}else r();else-1!==vt.indexOf(e.path)?r():(r(`/login?redirect=${e.path}`),w.done())})),_t.afterEach((e=>{w.done(),document.title=e.meta.title}));c.use(P);const bt={en:l({},{lang:{zh:"中文",en:"English"},switchLang:"Language switch",login:{title:"Login",sys_name:"admin kit",username:"UserName",password:"Password",submitText:"Sign in"}}),zh:l({},{lang:{zh:"中文",en:"English"},switchLang:"语言切换",login:{title:"登录",sys_name:"admin kit",username:"用户名",password:"密码",submitText:"登录"}})},ft=new P({locale:p.get("language")||J.language,messages:bt});c.use(L);let yt=localStorage.getItem("currentTheme");yt&&R.dispatch("SetTheme",yt),c.config.productionTip=!1,new c({router:_t,store:R,i18n:ft,render:e=>e(I)}).$mount("#app");export{J as A,de as U,Ie as i,j as n,oe as s};
