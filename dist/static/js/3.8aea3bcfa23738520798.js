webpackJsonp([3],{"5pTR":function(e,t){},"lyB/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"home",data:function(){return{home:""}},created:function(){this.initData()},methods:{initData:function(){var e=this;this.$axios.get("https://easy-mock.com/mock/5a01524d36a23b429ea925c5/api/home").then(function(t){console.log(t),t.data.success&&(e.home=t.data.data)}).catch(function(e){throw console.log(e),new Error(e)})}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"itemOne"},[a("span",[e._v(e._s(e.home.zhResume))]),a("span",[e._v(e._s(e.home.enResume))])]),e._v(" "),a("div",{staticClass:"itemTwo"},[a("span",[e._v(e._s(e.home.zhName))]),a("span",[e._v(e._s(e.home.enName))])]),e._v(" "),a("div",{staticClass:"itemThree"},[e._v(e._s(e.home.level))]),e._v(" "),a("router-link",{staticClass:"arrow_right",attrs:{to:"/info"}})],1)},staticRenderFns:[]};var o=a("VU/8")(s,n,!1,function(e){a("5pTR")},null,null);t.default=o.exports}});
//# sourceMappingURL=3.8aea3bcfa23738520798.js.map