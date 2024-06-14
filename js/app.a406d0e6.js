(function(){"use strict";var n={1050:function(n,e,a){var t=a(3751),l=a(641),o=a(953),u=a(5220),r={__name:"App",setup(n){return(n,e)=>((0,l.uX)(),(0,l.Wv)((0,o.R1)(u.Tp)))}};const c=r;var s=c,i=(a(9479),a(33)),v=a(8446);const p={key:0,class:"modal-mask"},d={class:"modal-wrapper"},f={class:"modal-body"};var m={__name:"Modal",props:{isOpen:Boolean},emits:["modal-close"],setup(n,{emit:e}){const a=e,t=(0,o.KR)(null);return(0,v.X2F)(t,(()=>a("modal-close"))),(e,a)=>n.isOpen?((0,l.uX)(),(0,l.CE)("div",p,[(0,l.Lk)("div",d,[(0,l.Lk)("div",{class:"modal-container",ref_key:"target",ref:t},[(0,l.Lk)("div",f,[(0,l.RG)(e.$slots,"default")])],512)])])):(0,l.Q3)("",!0)}},k=a(6262);const y=(0,k.A)(m,[["__scopeId","data-v-6cc2f482"]]);var L=y;const _=n=>((0,l.Qi)("data-v-4c053c40"),n=n(),(0,l.jt)(),n),h={class:"flag"},C=["src","alt"],g={class:"description"},b=_((()=>(0,l.Lk)("span",null,"Country Name: ",-1))),w=_((()=>(0,l.Lk)("span",null,"2 character Country Code: ",-1))),A=_((()=>(0,l.Lk)("span",null,"3 character Country Code: ",-1))),O=_((()=>(0,l.Lk)("span",null,"Native Country Name: ",-1))),S=_((()=>(0,l.Lk)("span",null,"Alternative Country Name: ",-1))),K=_((()=>(0,l.Lk)("span",null,"Country Calling Codes: ",-1))),R={class:"title"},W=_((()=>(0,l.Lk)("span",null,"Capital: ",-1))),F={class:"title"},N=_((()=>(0,l.Lk)("span",null,"Population: ",-1))),j={class:"title"},E=_((()=>(0,l.Lk)("span",null,"Region: ",-1))),X={class:"title"},x=_((()=>(0,l.Lk)("span",null,"Continent: ",-1)));var I={__name:"Card",props:["country"],setup(n){(0,u.rd)();const{country:e}=n,a=(0,o.KR)(!1),t=()=>{a.value=!0},r=()=>{a.value=!1};return(e,o)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("div",{class:"card",onClick:t},[(0,l.Lk)("div",h,[(0,l.Lk)("img",{src:n.country.flags.png,alt:n.country.flags.alt},null,8,C)]),(0,l.Lk)("div",g,[(0,l.Lk)("p",null,[b,(0,l.eW)((0,i.v_)(n.country.name.official),1)]),(0,l.Lk)("p",null,[w,(0,l.eW)((0,i.v_)(n.country.cca2),1)]),(0,l.Lk)("p",null,[A,(0,l.eW)((0,i.v_)(n.country.cca3),1)]),(0,l.Lk)("p",null,[O,(0,l.eW)((0,i.v_)(n.country.name.nativeName),1)]),(0,l.Lk)("p",null,[S,(0,l.eW)((0,i.v_)(n.country.altSpellings),1)]),(0,l.Lk)("p",null,[K,(0,l.eW)((0,i.v_)(n.country.idd),1)])])]),(0,l.bF)(L,{isOpen:a.value,onModalClose:r},{default:(0,l.k6)((()=>[(0,l.Lk)("p",R,[W,(0,l.eW)((0,i.v_)(n.country.capital?n.country.capital[0]:"Unnown"),1)]),(0,l.Lk)("p",F,[N,(0,l.eW)((0,i.v_)(n.country.population.toLocaleString("en-US")),1)]),(0,l.Lk)("p",j,[E,(0,l.eW)((0,i.v_)(n.country.region),1)]),(0,l.Lk)("p",X,[x,(0,l.eW)((0,i.v_)(n.country.continents),1)])])),_:1},8,["isOpen"])],64))}};const U=(0,k.A)(I,[["__scopeId","data-v-4c053c40"]]);var V=U;const P={class:"search-nav"},T={class:"container"},D={class:"dropdown shadow"},G={class:"default-option"};var M={__name:"Search",emits:["filterSearch","sortCountryName"],setup(n,{emit:e}){const a=e,u=(0,o.KR)(!1),r=(0,o.KR)(""),c=(0,o.KR)("Sort by Asc"),s=()=>{document.querySelector("input").focus()},v=n=>{a("sortCountryName","Sort by Asc"==n?"Asc":n)},p=n=>{a("filterSearch",n)};return(n,e)=>((0,l.uX)(),(0,l.CE)("div",P,[(0,l.Lk)("div",T,[(0,l.Lk)("div",D,[(0,l.Lk)("ul",{class:"selection",onClick:e[2]||(e[2]=n=>u.value=!u.value),onFocusout:e[3]||(e[3]=n=>u.value=!1)},[(0,l.Lk)("li",G,(0,i.v_)(c.value),1),(0,l.Lk)("ul",{class:(0,i.C4)(["options shadow",u.value?"show":""])},[(0,l.bo)((0,l.Lk)("li",{class:"option",onClick:e[0]||(e[0]=n=>{c.value="Asc",v(c.value)})},"Sort by Asc",512),[[t.aG,"Sort by Asc"!=c.value]]),(0,l.Lk)("li",{class:"option",onClick:e[1]||(e[1]=n=>{c.value="Desc",v(c.value)})},"Sort by Desc")],2)],32)]),(0,l.Lk)("div",{class:"input shadow",onClick:s},[(0,l.bo)((0,l.Lk)("input",{type:"text",name:"input-field",id:"input-field",placeholder:"Search for a country...","onUpdate:modelValue":e[4]||(e[4]=n=>r.value=n),onInput:e[5]||(e[5]=n=>p(r.value)),onFocus:e[6]||(e[6]=n=>u.value=!1)},null,544),[[t.Jo,r.value,void 0,{trim:!0}]])])])]))}};const Q=(0,k.A)(M,[["__scopeId","data-v-f5178248"]]);var q=Q;const B={class:"contents"},H={class:"container"},J={class:"pagination"};var $={__name:"Home",setup(n){const e=(n,e,a=!0)=>n.sort(((n,t)=>{const l=n[e],o=t[e];return a?l.localeCompare(o):o.localeCompare(l)})),a=n=>n.map((n=>(n.countryName=n.name.official,n))),t=(0,o.KR)(null),u=(0,o.KR)(null),r=(0,o.KR)(1),c=(0,o.KR)(0),s=(0,o.KR)(""),i=(0,o.KR)("Asc"),v=async(n=null)=>{let l="https://restcountries.com/v3.1/";null===n||""===n?""===s.value||""===n||null===n?(l+="all",s.value=n):l=l+"name/"+s.value:(l=l+"name/"+n,s.value=n),console.log(l);const o=5*(r.value-1),v=o+5,p=await fetch(l),d=await p.json(),f=a(d);return u.value=e(f,"countryName","Asc"===i.value),t.value=u.value.slice(o,v),c.value=f.length,t.value};v();const p=(n="Asc")=>{i.value=n,v()},d=n=>{r.value=n,v()};return(n,e)=>{const a=(0,l.g2)("vue-awesome-paginate");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(q,{onFilterSearch:v,onSortCountryName:p}),(0,l.Lk)("main",B,[(0,l.Lk)("div",H,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(t.value,(n=>((0,l.uX)(),(0,l.Wv)(V,{key:n.cca3,country:n},null,8,["country"])))),128))])]),(0,l.Lk)("div",J,[(0,l.bF)(a,{"total-items":c.value,"items-per-page":5,modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=n=>r.value=n),onClick:d},null,8,["total-items","modelValue"])])],64)}}};const z=(0,k.A)($,[["__scopeId","data-v-494f16f0"]]);var Y=z;const Z=(0,u.aE)({history:(0,u.LA)(),routes:[{path:"/",name:"home",component:Y}]});var nn=Z,en=a(3929);const an=(0,t.Ef)(s);an.use(nn),an.use(en.A).mount("#app")}},e={};function a(t){var l=e[t];if(void 0!==l)return l.exports;var o=e[t]={exports:{}};return n[t].call(o.exports,o,o.exports,a),o.exports}a.m=n,function(){var n=[];a.O=function(e,t,l,o){if(!t){var u=1/0;for(i=0;i<n.length;i++){t=n[i][0],l=n[i][1],o=n[i][2];for(var r=!0,c=0;c<t.length;c++)(!1&o||u>=o)&&Object.keys(a.O).every((function(n){return a.O[n](t[c])}))?t.splice(c--,1):(r=!1,o<u&&(u=o));if(r){n.splice(i--,1);var s=l();void 0!==s&&(e=s)}}return e}o=o||0;for(var i=n.length;i>0&&n[i-1][2]>o;i--)n[i]=n[i-1];n[i]=[t,l,o]}}(),function(){a.d=function(n,e){for(var t in e)a.o(e,t)&&!a.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={524:0};a.O.j=function(e){return 0===n[e]};var e=function(e,t){var l,o,u=t[0],r=t[1],c=t[2],s=0;if(u.some((function(e){return 0!==n[e]}))){for(l in r)a.o(r,l)&&(a.m[l]=r[l]);if(c)var i=c(a)}for(e&&e(t);s<u.length;s++)o=u[s],a.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return a.O(i)},t=self["webpackChunksample_app_vue"]=self["webpackChunksample_app_vue"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=a.O(void 0,[504],(function(){return a(1050)}));t=a.O(t)})();
//# sourceMappingURL=app.a406d0e6.js.map