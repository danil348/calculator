(function(){"use strict";var __webpack_modules__={842:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _TmpScreenBody_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(562);__webpack_exports__["Z"]={name:"CalculatorBody",components:{TmpScreenBody:_TmpScreenBody_vue__WEBPACK_IMPORTED_MODULE_0__.Z},data(){return{bracketClose:!0,tmpResults:[],tmpTask:"",result:"0",splitresult:[""],isAns:!1,keyboardOperations:[".","/","*","+","-"],operationsCount:0,maxOperations:10,keyboardNumbers:[1,2,3,4,5,6,7,8,9,0]}},methods:{reset(){this.result="0",this.operationsCount=0,this.splitresult=[""],this.tmpTask="",this.isAns=!1,this.bracketClose=!0},input(t){if(this.checkingLength()<15&&this.operationsCount<this.maxOperations){if("0"==this.result&&0==this.isAns?this.result="":1==this.isAns&&("=0"==this.result&&(this.result=""),this.result=this.result.slice(1,this.result.length),this.isAns=!1),(""==this.result||0==this.numTest(this.result))&&("/"==t||"*"==t||"+"==t))return void(this.result="0");if(1==this.regTest(this.result[this.result.length-1])&&1==this.regTest(t))return void(this.result=this.result.slice(0,this.result.length-1)+t);if("+"==t||"-"==t)return""==this.result?void("-"==t?this.result+=t:this.result="0"):1==this.numTest(this.result[this.result.length-1])||")"==this.result[this.result.length-1]||"("==this.result[this.result.length-1]?(this.result+=t,void this.operationsCount++):void("*"!=this.result[this.result.length-1]&&"/"!=this.result[this.result.length-1]&&"-"!=this.result[this.result.length-1]&&"+"!=this.result[this.result.length-1]||(this.result=this.result.slice(0,this.result.length-1)+t));if("("==t||")"==t||"√("==t)return""!=this.result||"("!=t&&"√("!=t?"("!=this.result[this.result.length-1]&&0==this.regTest(this.result[this.result.length-1])&&")"==t&&"."!=this.result[this.result.length-1]?(this.result+=t,this.bracketClose=!0,void this.splitResult()):"^"==this.result[this.result.length-1]&&"("==t?(this.operationsCount++,this.result+=t,this.bracketClose=!1,void this.splitResult()):")"!=this.result[this.result.length-1]&&0!=this.regTest(this.result[this.result.length-1])||"("!=t&&"√("!=t||"."==this.result[this.result.length-1]||"^"==this.result[this.result.length-1]?1!=this.regTest(this.result[this.result.length-1])||"("!=t&&"√("!=t?void 0:(this.result+=t,this.bracketClose=!1,void this.splitResult()):(this.operationsCount++,this.result+="*"+t,this.bracketClose=!1,void this.splitResult()):(this.bracketClose=!1,this.result+=t,"√("==t&&this.operationsCount++,void this.splitResult());if("^"==t){if(""==this.result)return void(this.result="0");if("^"==this.result[this.result.length-1]||"^"==this.splitresult[this.splitresult.length-2])return;return 0==this.regTest(this.result[this.result.length-1])&&"("!=this.result[this.result.length-1]&&")"!=this.result[this.result.length-1]&&"."!=this.result[this.result.length-1]?(this.operationsCount++,void(this.result+=t)):void 0}if("."==t&&0==this.splitresult[this.splitresult.length-1].includes(".")&&1==this.numTest(this.splitresult[this.splitresult.length-1]))return""==this.result?void(this.result="0"+t):1==this.numTest(this.result[this.result.length-1])?(this.result+=t,void this.splitResult()):0==this.regTest(this.result[this.result.length-1])&&"("!=this.result[this.result.length-1]&&")"!=this.result[this.result.length-1]&&"."!=this.result[this.result.length-1]?void(this.result+=t):void 0;if("."==t)return;if(("/"==t||"*"==t)&&("."==this.result[this.result.length-1]||"("==this.result[this.result.length-1]))return;if(1==this.numTest(t)&&")"==this.result[this.result.length-1])return;this.result+=t,this.operationsCount+=this.regTest(t),this.splitResult()}else")"==t&&0==this.bracketClose?(this.bracketClose=!0,this.result+=t):1==this.numTest(t)&&(this.result+=t)},calc(calcPercent){if(this.splitResult(),1==this.bracketClose&&(0!=this.operationsCount||1==calcPercent)&&0==this.regTest(this.result[this.result.length-1])){this.splitresult.forEach((function(t,e,s){"("==t[0]&&")"==t[t.length-1]&&(s[e]=t.slice(1,t.length-1))}));while(this.hasSplit())this.splitresult.forEach((function(t,e,s){"("!=t[0]&&"("!=t[1]||")"==t[t.length-1]||(s[e]+=s[e+1],s=s.splice(e+1,1))}));this.splitresult.forEach((function(element,index,arr){"("==element[0]&&")"==element[element.length-1]&&(arr[index]=String(eval(element))),"√"==element[0]&&")"==element[element.length-1]&&0==element.includes("^")?(element=element.slice(1,element.length),arr[index]=String(Math.pow(eval(element),.5))):"√"==element[0]&&")"==element[element.length-1]&&(element=element.slice(2,element.length-1),element=element.split(/([-*+/])/),element.forEach((function(t,e){t.includes("^")&&(element[e]=String(Math.pow(Number(t.split("^")[0]),Number(t.split("^")[1]))))})),arr[index]=String(Math.pow(eval(element.join("")),.5)))})),this.splitresult.forEach((function(t,e,s){if("^"==t){let t=Number(s[e-1]),i=Number(s[e+1]);s[e-1]=String(Math.pow(Number(t),Number(i))),s=s.splice(e,2)}})),1==this.splitresult[0].includes("=")&&(this.splitresult[0]=this.splitresult[0].slice(1,this.splitresult[0].length-1));let ans=eval(this.splitresult.join(""));1==isNaN(ans)&&(ans=0),1==calcPercent?(ans/=100,(1==isNaN(ans)||ans<0)&&(ans=0),this.result.includes("=")&&(this.result=this.result.slice(1,this.result.length)),this.tmpResults.push([this.result+"%","="+ans])):this.tmpResults.push([this.result,"="+ans]),localStorage.setItem("lStmpResults",JSON.stringify(this.tmpResults)),this.tmpTask=this.result,this.splitresult=[String(ans)],this.result="="+ans,this.operationsCount=0,this.isAns=!0}},checkingLength(){return this.splitresult[this.splitresult.length-1].length},splitResult(){this.splitresult=this.result.split(/([-^*+/])/)},regTest(t){return/[-*+/s]/.test(t)},numTest(t){return/[0-9]/.test(t)},hasSplit(){let t=!1;return this.splitresult.forEach((e=>{"("!=e[0]&&"("!=e[1]||")"==e[e.length-1]||(t=!0)})),t}},created(){null!=JSON.parse(localStorage.getItem("lStmpResults"))&&(this.tmpResults=JSON.parse(localStorage.getItem("lStmpResults")))}}},159:function(t,e,s){var i=s(963),r=s(252);const l={class:"container"};function n(t,e,s,i,n,u){const h=(0,r.up)("CalculatorBody");return(0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(h)])}var u=s(577);const h=t=>((0,r.dD)("data-v-2c613b34"),t=t(),(0,r.Cn)(),t),o={class:"calculator"},_={class:"calculator__screen-wrapper"},a={class:"calculator__screen"},c={class:"calculator__ans"},p=h((()=>(0,r._)("br",null,null,-1))),b={class:"calculator__keyboard keyboard"},d=["onClick"],g=["onClick"];function m(t,e,s,i,l,n){const h=(0,r.up)("TmpScreenBody");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",o,[(0,r._)("div",_,[(0,r._)("div",a,[(0,r._)("div",c,[(0,r.Uk)((0,u.zw)(l.tmpTask)+" ",1),p,(0,r.Uk)(" "+(0,u.zw)(l.result),1)])])]),(0,r._)("div",b,[(0,r._)("button",{class:"keyboard__button button-operation",onClick:e[0]||(e[0]=t=>n.reset())},"c"),(0,r._)("button",{class:"keyboard__button button-operation",onClick:e[1]||(e[1]=t=>n.calc(!1))},"="),(0,r._)("button",{class:"keyboard__button button-operation",onClick:e[2]||(e[2]=t=>1==l.bracketClose?n.input("("):1)},"("),(0,r._)("button",{class:"keyboard__button button-operation",onClick:e[3]||(e[3]=t=>0==l.bracketClose?n.input(")"):1)},")"),(0,r._)("button",{class:"keyboard__button button-operation",onClick:e[4]||(e[4]=t=>1==l.bracketClose?n.input("√("):n.input(")"))},"sqrt"),(0,r._)("button",{class:"keyboard__button button-operation",onClick:e[5]||(e[5]=t=>n.input("^"))},"^"),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.keyboardOperations,(t=>((0,r.wg)(),(0,r.iD)("button",{class:"keyboard__button button-operation",onClick:e=>n.input(t),key:t.id},(0,u.zw)(t),9,d)))),128)),(0,r._)("button",{class:"keyboard__button button-operation",onClick:e[6]||(e[6]=t=>n.calc(!0))},"%"),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.keyboardNumbers,(t=>((0,r.wg)(),(0,r.iD)("button",{class:"keyboard__button button-number",onClick:e=>n.input(t),key:t.id},(0,u.zw)(t),9,g)))),128))])]),(0,r.Wm)(h,{tmpResults:l.tmpResults},null,8,["tmpResults"])],64)}var k=s(842),f=s(744);const w=(0,f.Z)(k.Z,[["render",m],["__scopeId","data-v-2c613b34"]]);var v=w,C={name:"App",components:{CalculatorBody:v}};const y=(0,f.Z)(C,[["render",n]]);var T=y;(0,i.ri)(T).mount("#app")},562:function(t,e,s){s.d(e,{Z:function(){return _}});var i=s(252),r=s(577);const l={class:"tmp__screen"};function n(t,e,s,n,u,h){return(0,i.wg)(),(0,i.iD)("div",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.tmpResults,(t=>((0,i.wg)(),(0,i.iD)("div",{class:"tmp__item",key:t.id},(0,r.zw)(t[0])+(0,r.zw)(t[1]),1)))),128))])}var u={name:"TmpScreenBody",props:{tmpResults:{type:Object,default(){}}}},h=s(744);const o=(0,h.Z)(u,[["render",n],["__scopeId","data-v-507f81e6"]]);var _=o}},__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var s=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t](s,s.exports,__webpack_require__),s.exports}__webpack_require__.m=__webpack_modules__,function(){var t=[];__webpack_require__.O=function(e,s,i,r){if(!s){var l=1/0;for(o=0;o<t.length;o++){s=t[o][0],i=t[o][1],r=t[o][2];for(var n=!0,u=0;u<s.length;u++)(!1&r||l>=r)&&Object.keys(__webpack_require__.O).every((function(t){return __webpack_require__.O[t](s[u])}))?s.splice(u--,1):(n=!1,r<l&&(l=r));if(n){t.splice(o--,1);var h=i();void 0!==h&&(e=h)}}return e}r=r||0;for(var o=t.length;o>0&&t[o-1][2]>r;o--)t[o]=t[o-1];t[o]=[s,i,r]}}(),function(){__webpack_require__.d=function(t,e){for(var s in e)__webpack_require__.o(e,s)&&!__webpack_require__.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};__webpack_require__.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,r,l=s[0],n=s[1],u=s[2],h=0;if(l.some((function(e){return 0!==t[e]}))){for(i in n)__webpack_require__.o(n,i)&&(__webpack_require__.m[i]=n[i]);if(u)var o=u(__webpack_require__)}for(e&&e(s);h<l.length;h++)r=l[h],__webpack_require__.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return __webpack_require__.O(o)},s=self["webpackChunkcalculator"]=self["webpackChunkcalculator"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var __webpack_exports__=__webpack_require__.O(void 0,[998],(function(){return __webpack_require__(159)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.18f5c06b.js.map