webpackJsonp([2],{AAe7:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o={name:"info",data:function(){return{contact:"",tel:""}},created:function(){this.initData()},methods:{initData:function(){var t=this;this.$axios.get("https://easy-mock.com/mock/5a01524d36a23b429ea925c5/api/contact").then(function(a){console.log(a),a.data.success&&(t.contact=a.data.data,t.tel="tel:"+t.contact.phone)}).catch(function(t){throw console.log(t),new Error(t)})}}},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"info"},[e("router-link",{staticClass:"arrow_right arrow_up",attrs:{to:"/"}}),t._v(" "),e("div",{staticClass:"info_main w_box"},[e("div",{staticClass:"flex_1"},[e("section",[e("p",[t._v("Personal Information")]),t._v(" "),e("router-link",{attrs:{to:"/personal"}},[t._v("详情 >>")])],1)]),t._v(" "),e("div",{staticClass:"flex_1"},[e("section",[e("p",[t._v("Work Experience")]),t._v(" "),e("router-link",{attrs:{to:"/work"}},[t._v("详情 >>")])],1)]),t._v(" "),e("div",{staticClass:"flex_1"},[e("section",[e("p",[t._v("Project Experience")]),t._v(" "),e("router-link",{attrs:{to:"/project"}},[t._v("详情 >>")])],1)])]),t._v(" "),e("router-link",{staticClass:"arrow_right arrow_down",attrs:{to:"/contact"}})],1)},staticRenderFns:[]};var r=e("VU/8")(o,n,!1,function(t){e("etad")},null,null);a.default=r.exports},etad:function(t,a){}});
//# sourceMappingURL=2.bae5af19d7c01dc6e0bc.js.map