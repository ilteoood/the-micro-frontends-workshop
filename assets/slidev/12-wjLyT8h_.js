import{_ as n}from"./CodeBlockWrapper-CSV1b5Yg.js";import{o as r,c as o,k as e,e as i,l as a,m as l,q as d,s as p,A as h,a6 as s}from"../modules/vue-3HNtz2Ni.js";import{I as g}from"./default-D9q62ZdG.js";import{_ as c,ah as k}from"../index-td8_HWJJ.js";import{p as y,u,f}from"./context-Dd271oE6.js";import"../modules/unplugin-icons-DkTeazFd.js";import"../modules/shiki-DIk2-LAo.js";const m=i("h2",null,"Step 1: Setting up the Remote /2",-1),_={class:"dense"},A=i("h2",null,[s("Configuring the "),i("code",null,"webpack.config.js"),s(" file")],-1),B=i("p",null,[s("In order to enable module federation, we need to import "),i("code",null,"ModuleFederationPlugin"),s(" from Webpack on top of this file.")],-1),C=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-js"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," ModuleFederationPlugin"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," }"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," require"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"webpack"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")."),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"container")])])],-1),D=i("p",null,[s("This plugin needs to be instantiated and configured inside the plugins section of the configuration file. The most basic configuration requires "),i("code",null,"name"),s(", "),i("code",null,"fileName"),s(" and "),i("code",null,"exposes"),s(" key values.")],-1),b=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-js"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// ....")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"plugins"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"    new"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ModuleFederationPlugin"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"      name"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"remoteAppName"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"      filename"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"remoteEntry.js"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"      exposes"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"./ComponentName"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"./src/components/ComponentName"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    }),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  ],")])])],-1),v={__name:"12",setup(x){return y(k),u(),(N,P)=>{const t=n;return r(),o(g,d(p(h(f)(h(k),11))),{default:e(()=>[m,i("div",_,[A,B,a(t,l({},{ranges:[]}),{default:e(()=>[C]),_:1},16),D,a(t,l({},{ranges:[]}),{default:e(()=>[b]),_:1},16)])]),_:1},16)}}},S=c(v,[["__file","/@slidev/slides/12.md"]]);export{S as default};
