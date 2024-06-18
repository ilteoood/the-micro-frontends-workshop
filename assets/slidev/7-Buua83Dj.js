import{o as a,c as s,k as n,q as i,s as r,A as t,e}from"../modules/vue-3HNtz2Ni.js";import{I as p}from"./default-D9q62ZdG.js";import{_ as l,ac as o}from"../index-td8_HWJJ.js";import{p as u,u as d,f as c}from"./context-Dd271oE6.js";import"../modules/shiki-DIk2-LAo.js";const m=e("h2",null,"Module federation with Webpack",-1),h=e("div",null,[e("p",null,"As mentioned earlier, initially, module federation was implemented as a plugin introduced in Webpack 5. To set up Module Federation in Webpack, you need to define the federated modules in your Webpack configuration files, specify the remote entry points and expose specific modules (aka “remotes”) that you want to share with other applications. The remote entry points represent the Webpack builds that expose modules for consumption."),e("p",null,"In the consuming application's (aka “host”) Webpack configuration, you define which federated modules you want to consume. You specify the remote entry points and the modules you want to import from those remotes. When you build and run your applications, Webpack dynamically loads the federated modules at runtime. It fetches the remote entry points, resolves the requested modules, and injects them into the consuming application. This process allows you to share code between applications without physically bundling everything together."),e("p",null,"Note that as an application has multiple dependencies, a host can also have multiple remotes.")],-1),f={__name:"7",setup(y){return u(o),d(),(_,k)=>(a(),s(p,i(r(t(c)(t(o),6))),{default:n(()=>[m,h]),_:1},16))}},x=l(f,[["__file","/@slidev/slides/7.md"]]);export{x as default};
