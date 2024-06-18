const __vite__fileDeps=["assets/slidev/DrawingControls-Cr-EGnHo.js","assets/modules/unplugin-icons-DkTeazFd.js","assets/modules/vue-3HNtz2Ni.js","assets/modules/shiki-DIk2-LAo.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-BiFhcrX-.js","assets/index-td8_HWJJ.js","assets/index-DToYSLFQ.css","assets/DrawingPreview-BB_gIMFu.css","assets/slidev/ContextMenu-C1AwqdmK.js","assets/slidev/IconButton-DCoaquv4.js","assets/slidev/context-Dd271oE6.js","assets/ContextMenu-EZAKxWQn.css","assets/DrawingControls-C5T1oZL5.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as v,a7 as P,o as t,c as d,A as e,b as _,e as l,f as I,i as M,g as a,af as A,y as z,k as w,ag as $,a6 as E,M as g,l as m,F as N,x as D,v as R,h as H,t as O}from"../modules/vue-3HNtz2Ni.js";import{_ as h,o as y,a as B,q as T,v as b,w as V,x as W,y as L,d as C,z as U,j as S,A as j,B as F}from"../index-td8_HWJJ.js";import{Q as G,G as Q,C as q,u as K,r as X,S as Y,N as J,o as Z}from"./ContextMenu-C1AwqdmK.js";import{c as ee,a as oe}from"./DrawingPreview-BiFhcrX-.js";import{o as te}from"../modules/unplugin-icons-DkTeazFd.js";import"../modules/shiki-DIk2-LAo.js";import"./IconButton-DCoaquv4.js";import"./context-Dd271oE6.js";const se="/the-micro-frontends-workshop/assets/logo-BYkHSa_O.png",ne={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},re=v({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(p,{emit:i}){const n=p,r=P(n,"modelValue",i);function u(){r.value=!1}return(f,s)=>(t(),d(A,null,[e(r)?(t(),_("div",ne,[l("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:s[0]||(s[0]=c=>u())}),l("div",{class:M(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ main"},[I(f.$slots,"default")],2)])):a("v-if",!0)],1024))}}),le=h(re,[["__file","/home/runner/work/the-micro-frontends-workshop/the-micro-frontends-workshop/node_modules/@slidev/client/internals/Modal.vue"]]),ae={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ie=["innerHTML"],de=l("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[l("div",{class:"flex gap-1 children:my-auto"},[l("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),l("img",{class:"w-5 h-5",src:se,alt:"Slidev logo"}),l("div",{style:{color:"#2082A6"}},[l("b",null,"Sli"),E("dev ")])])],-1),ue=v({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(p,{emit:i}){const r=P(p,"modelValue",i),u=z(()=>typeof y.info=="string");return(f,s)=>(t(),d(le,{modelValue:e(r),"onUpdate:modelValue":s[0]||(s[0]=c=>$(r)?r.value=c:null),class:"px-6 py-4"},{default:w(()=>[l("div",ae,[u.value?(t(),_("div",{key:0,class:"mb-4",innerHTML:e(y).info},null,8,ie)):a("v-if",!0),de])]),_:1},8,["modelValue"]))}}),ce=h(ue,[["__file","/home/runner/work/the-micro-frontends-workshop/the-micro-frontends-workshop/node_modules/@slidev/client/internals/InfoDialog.vue"]]),me=v({__name:"Controls",setup(p){const{isEmbedded:i}=B(),n=!y.drawings.presenterOnly&&!i.value,o=g();n&&T(()=>import("./DrawingControls-Cr-EGnHo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])).then(f=>o.value=f.default);const r=g(),u=g();return(f,s)=>(t(),_(N,null,[e(n)&&o.value?(t(),d(e(o),{key:0})):a("v-if",!0),m(G),m(Q),r.value?(t(),d(e(r),{key:1})):a("v-if",!0),u.value?(t(),d(e(u),{key:2,modelValue:e(b),"onUpdate:modelValue":s[0]||(s[0]=c=>$(b)?b.value=c:null)},null,8,["modelValue"])):a("v-if",!0),e(y).info?(t(),d(ce,{key:3,modelValue:e(V),"onUpdate:modelValue":s[1]||(s[1]=c=>$(V)?V.value=c:null)},null,8,["modelValue"])):a("v-if",!0),m(q)],64))}}),pe=h(me,[["__file","/home/runner/work/the-micro-frontends-workshop/the-micro-frontends-workshop/node_modules/@slidev/client/internals/Controls.vue"]]),fe=v({__name:"PrintStyle",setup(p){function i(n,{slots:o}){if(o.default)return R("style",o.default())}return(n,o)=>(t(),d(i,null,{default:w(()=>[E(" @page { size: "+D(e(W))+"px "+D(e(L))+"px; margin: 0px; } ",1)]),_:1}))}}),_e=h(fe,[["__file","/home/runner/work/the-micro-frontends-workshop/the-micro-frontends-workshop/node_modules/@slidev/client/internals/PrintStyle.vue"]]),ve={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},he=v({__name:"PresenterMouse",setup(p){return(i,n)=>{const o=te;return e(C).cursor?(t(),_("div",ve,[m(o,{class:"absolute stroke-white dark:stroke-black",style:H({left:`${e(C).cursor.x}%`,top:`${e(C).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):a("v-if",!0)}}}),ke=h(he,[["__file","/home/runner/work/the-micro-frontends-workshop/the-micro-frontends-workshop/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),ge=l("div",{id:"twoslash-container"},null,-1),we=v({__name:"play",setup(p){const{next:i,prev:n,isPrintMode:o}=B(),{isDrawing:r}=ee(),u=O();function f(k){var x;S.value||k.button===0&&((x=k.target)==null?void 0:x.id)==="slide-container"&&(k.pageX/window.innerWidth>.5?i():n())}K(u),X();const s=z(()=>U.value||S.value),c=g();return(k,x)=>(t(),_(N,null,[e(o)?(t(),d(_e,{key:0})):a("v-if",!0),l("div",{id:"page-root",ref_key:"root",ref:u,class:M(["grid",e(F)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[m(oe,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(o)?e(j).width.value:void 0,"is-main":"",onPointerdown:f,onContextmenu:e(Z)},{default:w(()=>[m(Y,{"render-context":"slide"}),m(ke)]),controls:w(()=>[e(o)?a("v-if",!0):(t(),_("div",{key:0,class:M(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[s.value?"!opacity-100 right-0":"opacity-0 p-2",e(r)?"pointer-events-none":""]])},[m(J,{persist:s.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),c.value&&e(S)?(t(),d(e(c),{key:0,resize:!0})):a("v-if",!0)],2),e(o)?a("v-if",!0):(t(),d(pe,{key:1})),ge],64))}}),De=h(we,[["__file","/home/runner/work/the-micro-frontends-workshop/the-micro-frontends-workshop/node_modules/@slidev/client/pages/play.vue"]]);export{De as default};
