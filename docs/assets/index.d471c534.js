import{s as t,C as e,V as s,U as r,n as a}from"./index.0ee967dc.js";import"./vendor.294aa3f7.js";const i=window.appConf.api;var o=Object.defineProperty,n=Object.getOwnPropertyDescriptor;let c=class extends s{constructor(){super(...arguments),this.percentage=40,this.colors="#ea4c89",this.overview=[{num:123,name:"Visitors"}]}get name(){return r.name}created(){this.loadStatistics()}loadStatistics(){t({url:`${i.statistics}/total`,method:"get"}).then((t=>{this.overview=t.data.list}))}};c=((t,e,s,r)=>{for(var a,i=r>1?void 0:r?n(e,s):e,c=t.length-1;c>=0;c--)(a=t[c])&&(i=(r?a(e,s,i):a(i))||i);return r&&i&&o(e,s,i),i})([e({})],c);const l={};var d=a(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard-container"},[s("p",{staticClass:"gray"},[t._v("Welcome! "),s("em",[t._v(t._s(t.name))])]),t._v(" "),s("el-row",{attrs:{gutter:20}},t._l(t.overview,(function(e,r){return s("el-col",{key:r,attrs:{span:6}},[s("el-card",{staticClass:"box-card total-number"},[s("em",[t._v(t._s(e.name))]),t._v(" "),s("span",[t._v(t._s(e.number))])])],1)})),1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12}},[s("el-card",{staticClass:"box-card"},[s("el-progress",{attrs:{type:"dashboard",percentage:t.percentage,color:t.colors}}),t._v(" "),s("el-progress",{attrs:{"text-inside":!0,"stroke-width":26,percentage:70}}),t._v(" "),s("el-progress",{attrs:{"text-inside":!0,"stroke-width":24,percentage:100,status:"success"}}),t._v(" "),s("el-progress",{attrs:{"text-inside":!0,"stroke-width":22,percentage:80,status:"warning"}}),t._v(" "),s("el-progress",{attrs:{"text-inside":!0,"stroke-width":20,percentage:50,status:"exception"}})],1)],1),t._v(" "),s("el-col",{attrs:{span:12}},[s("el-card",{staticClass:"box-card"},[s("el-progress",{attrs:{type:"dashboard",percentage:t.percentage,color:t.colors}}),t._v(" "),s("el-progress",{attrs:{"text-inside":!0,"stroke-width":26,percentage:70}}),t._v(" "),s("el-progress",{attrs:{"text-inside":!0,"stroke-width":24,percentage:100,status:"success"}}),t._v(" "),s("el-progress",{attrs:{"text-inside":!0,"stroke-width":22,percentage:80,status:"warning"}}),t._v(" "),s("el-progress",{attrs:{"text-inside":!0,"stroke-width":20,percentage:50,status:"exception"}})],1)],1)],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("卡片名称")]),t._v(" "),s("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("操作按钮")])],1),t._v(" "),t._l(4,(function(e){return s("div",{key:e,staticClass:"text item"},[t._v("\n          "+t._s("列表内容 "+e)+"\n        ")])}))],2)],1),t._v(" "),s("el-col",{attrs:{span:12}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("卡片名称")]),t._v(" "),s("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("操作按钮")])],1),t._v(" "),t._l(4,(function(e){return s("div",{key:e,staticClass:"text item"},[t._v("\n          "+t._s("列表内容 "+e)+"\n        ")])}))],2)],1)],1)],1)}),[],!1,(function(t){for(let e in l)this[e]=l[e]}),"f9145750",null,null).exports;export default d;