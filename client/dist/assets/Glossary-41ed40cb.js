import{A as v}from"./AppTitle-6d249a3e.js";import{_ as d,o as e,c as r,a as o,t as c,r as w,b as y,d as l,e as g,w as $,F as p,f as A,g as x,h as B}from"./index-9bb14d07.js";const T={name:"AppWord",props:["word","value"]},W={class:"glossary-item"},k={class:"glossary-item__name"},G={class:"glossary-item__value"};function N(s,t,a,n,_,i){return e(),r("div",W,[o("div",k,c(a.word),1),o("div",G,c(a.value),1)])}const V=d(T,[["render",N]]),C={name:"Glossary",components:{AppTitle:v,AppWord:V},setup(){const s=w();return y(async()=>{const t=await fetch("http://localhost/api/glossary");s.value=await t.json()}),{words:s}}},F={class:"glossary-wrapper"},b={class:"glossary"};function j(s,t,a,n,_,i){const u=l("AppTitle"),m=l("AppWord");return e(),r(p,null,[g(u,null,{default:$(()=>[x("Glossary")]),_:1}),o("div",F,[o("div",b,[(e(!0),r(p,null,A(n.words,(f,h)=>(e(),B(m,{word:h,value:f},null,8,["word","value"]))),256))])])],64)}const L=d(C,[["render",j]]);export{L as default};