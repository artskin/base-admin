import{W as e,C as t,V as l,n as r}from"./index.116a1dd9.js";import"./vendor.294aa3f7.js";var a=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=(e,t,l,r)=>{for(var o,n=r>1?void 0:r?i(t,l):t,d=e.length-1;d>=0;d--)(o=e[d])&&(n=(r?o(t,l,n):o(n))||n);return r&&n&&a(t,l,n),n};let n=class extends l{constructor(){super(...arguments),this.filterText="",this.data2=[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}],this.defaultProps={children:"children",label:"label"}}onFilterTextChange(e){this.$refs.tree2.filter(e)}filterNode(e,t){return!e||t.label&&-1!==t.label.indexOf(e)}};o([e("filterText")],n.prototype,"onFilterTextChange",1),n=o([t({name:"Tree"})],n);const d={};var s=r(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"page-router"},[l("el-input",{staticStyle:{"margin-bottom":"20px"},attrs:{placeholder:"Filter keyword"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),e._v(" "),l("el-tree",{ref:"tree2",staticClass:"filter-tree",attrs:{data:e.data2,props:e.defaultProps,"filter-node-method":e.filterNode,"default-expand-all":""}})],1)}),[],!1,(function(e){for(let t in d)this[t]=d[t]}),null,null,null).exports;export default s;
