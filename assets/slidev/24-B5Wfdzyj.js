import{_ as h}from"./CodeBlockWrapper-CSV1b5Yg.js";import{o as k,c as r,k as e,e as s,l as a,m as o,q as p,s as d,A as l,a6 as i}from"../modules/vue-3HNtz2Ni.js";import{I as m}from"./default-D9q62ZdG.js";import{_ as c,at as n}from"../index-td8_HWJJ.js";import{p as g,u as y,f as u}from"./context-Dd271oE6.js";import"../modules/unplugin-icons-DkTeazFd.js";import"../modules/shiki-DIk2-LAo.js";const _=s("h2",null,"Step 2: Setting up the Host Application /2",-1),f={class:"dense"},B=s("p",null,[i("– In order to import/consume a module into a plain webpack host applications such as any React.js based app, we need to use the import keyword (dynamic import) and refer to the remote component based on the "),s("code",null,"key"),i(" name from one of the previous steps where we set up remotes in the config file. We used "),s("code",null,"someRemoteApp"),i(" and "),s("code",null,"anotherRemoteApp"),i(" in our example.")],-1),A=s("p",null,"– Our example import statement could look something like this:",-1),D=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"import"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," SomeRemoteComponent"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," from"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},' "'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"someRemoteApp/SomeRemoteComponent"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"')])])],-1),C=s("h3",null,"Next.js specific steps:",-1),v=s("p",null,[i("– In Next.js apps in CSR (client side rendering) scenario we have to rely on "),s("code",null,"dynamic()"),i(" method to dynamically import the remote component. We also need to set "),s("code",null,"ssr"),i(" to "),s("code",null,"false"),i(" because we will not be using server side rendering in our example.")],-1),x=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"import"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," dynamic"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," from"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}}," '"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"next/dynamic"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," SomeRemoteComponent"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," dynamic"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(()"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," import"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"someRemoteApp/SomeRemoteComponen"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"),"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," ssr"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," false"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," })")])])],-1),b={__name:"24",setup(R){return g(n),y(),(w,S)=>{const t=h;return k(),r(m,p(d(l(u)(l(n),23))),{default:e(()=>[_,s("div",f,[B,A,a(t,o({},{ranges:[]}),{default:e(()=>[D]),_:1},16),C,v,a(t,o({},{ranges:[]}),{default:e(()=>[x]),_:1},16)])]),_:1},16)}}},W=c(b,[["__file","/@slidev/slides/24.md"]]);export{W as default};
