(function(){"use strict";var t={2633:function(t,n,e){e(6992),e(8674),e(9601),e(7727);var o=e(9567),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",[e("div",{staticClass:"viewport"},[e("div",{staticClass:"game"},[e("div",{staticClass:"rows"},[e("zongzi",{ref:"Row1",attrs:{Row:t.Row1}}),e("zongzi",{ref:"Row2",attrs:{Row:t.Row2}}),e("zongzi",{ref:"Row3",attrs:{Row:t.Row3}})],1)])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.diaShow,expression:"diaShow"}],staticClass:"modal-mask modal-transition"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container"},[e("div",{staticClass:"modal-header"},[e("h3",{attrs:{slot:"header"},slot:"header"},[t._v("提示")])]),e("div",{staticClass:"modal-body"},[t._v("游戏结束")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"modal-default-button",on:{click:t.repeat}},[t._v("再来一次")])])])])])])},a=[],r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"row"},[e("div",{staticClass:"columns",class:["columns-"+t.curRow.name],style:t.animStyle},[e("div",{staticClass:"column"}),e("div",{staticClass:"column"}),e("div",{staticClass:"column"})])])},s=[],c=(e(2222),{props:{Row:{name:"",index:0,value:0,endValue:0,speed:200,isRunning:!1,key:Math.random(),direction:""}},data:function(){return{animStyle:[],curRow:this.Row,inter:void 0}},name:"HelloWorld",mounted:function(){this.animStyle={"animation-name":"".concat(this.curRow.direction,"-transition-").concat(this.curRow.value),"animation-duration":"".concat(this.curRow.speed,"ms")},console.log("this.animStylethis.animStylethis.animStylethis.animStyle",this.animStyle),this.startInterval()},methods:{startInterval:function(){var t=this;this.inter=setInterval((function(){if(t.curRow.isRunning&&("ltr"==t.curRow.direction||"rtl"==t.curRow.direction)){var n="ltr"==t.curRow.direction?t.curRow.value<2?t.curRow.value+1:0:t.curRow.value>0?t.curRow.value-1:2;t.animStyle={"animation-name":"".concat(t.curRow.direction,"-transition-").concat(t.curRow.value),"animation-duration":"".concat(t.curRow.speed,"ms")},t.curRow.value=n}}),100)},clearRowInterval:function(){console.log("暂停"),clearInterval(this.inter)},gundong:function(){}}}),l=c,u=e(1001),d=(0,u.Z)(l,r,s,!1,null,null,null),v=d.exports,w={name:"App",components:{zongzi:v},data:function(){return{Row1:{name:"top",index:0,value:0,endValue:0,speed:200,isRunning:!0,key:Math.random(),direction:"ltr"},Row2:{name:"center",value:0,index:1,endValue:0,speed:200,isRunning:!0,key:Math.random(),direction:"rtl"},Row3:{name:"bottom",value:0,index:2,endValue:0,speed:200,isRunning:!0,key:Math.random(),direction:"ltr"},prize:"none",activeRowIndex:1,diaShow:!1}},mounted:function(){var t=this;window.addEventListener("keypress",(function(){if(3===t.activeRowIndex&&(t.diaShow=!0),t.activeRowIndex<=3){var n=t.$refs["Row".concat(t.activeRowIndex)];console.log(n),n.clearRowInterval(),t.activeRowIndex++}else t.activeRowIndex=1}))},methods:{repeat:function(){this.diaShow=!1,this.$refs.Row1.startInterval(),this.$refs.Row2.startInterval(),this.$refs.Row3.startInterval()}}},f=w,m=(0,u.Z)(f,i,a,!1,null,null,null),h=m.exports;o.Z.config.productionTip=!1,new o.Z({render:function(t){return t(h)}}).$mount("#app")}},n={};function e(o){var i=n[o];if(void 0!==i)return i.exports;var a=n[o]={exports:{}};return t[o](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,o,i,a){if(!o){var r=1/0;for(u=0;u<t.length;u++){o=t[u][0],i=t[u][1],a=t[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||r>=a)&&Object.keys(e.O).every((function(t){return e.O[t](o[c])}))?o.splice(c--,1):(s=!1,a<r&&(r=a));if(s){t.splice(u--,1);var l=i();void 0!==l&&(n=l)}}return n}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[o,i,a]}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var i,a,r=o[0],s=o[1],c=o[2],l=0;if(r.some((function(n){return 0!==t[n]}))){for(i in s)e.o(s,i)&&(e.m[i]=s[i]);if(c)var u=c(e)}for(n&&n(o);l<r.length;l++)a=r[l],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(u)},o=self["webpackChunkzongzi"]=self["webpackChunkzongzi"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(2633)}));o=e.O(o)})();
//# sourceMappingURL=app-legacy.2a389a02.js.map