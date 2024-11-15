import{u as re,a as se,b as te}from"./chunk-QPWKRRZN-CY6SajH7.js";import{r as x,q as M,d as ie,g as ae,a as oe,j as s,dB as ne,ee as ce,ef as le,k as ue,l as de,eg as W,b as _,H,A as k,Y as pe,eb as me,T as p,Z as ge,t as f}from"./index-Dd5AIRt1.js";import{S as xe}from"./chunk-ADOCJB6L-CtbHuMEy.js";import{S as fe}from"./chunk-UR2E444G-D2Lbw7mb.js";import"./chunk-3IW4HYUP-DD0tWyEL.js";import{u as he,D as ve}from"./chunk-XVFA73MY-BMaVn9_N.js";import"./lodash-BSdnRVRc.js";import"./chunk-5AU4DI7M-Ck_cVJRv.js";import"./chunk-E3YGDIJC-DNIXVXp2.js";import{P as ye}from"./pencil-square-rz5ZnZ22.js";import{X as _e}from"./x-circle-bIcsI5DE.js";import{T as je}from"./trash-B_yspgao.js";import{u as Y}from"./use-prompt-BS3ABRGp.js";import{C as K}from"./container-ChTfB2gf.js";import{C as h}from"./command-bar-D-8Acngt.js";import{C as B}from"./checkbox-C6j9JG97.js";import{c as Ce}from"./index-391Gg0Ss.js";import"./chunk-OI7BBNYW-By6QQi9v.js";import"./chunk-P3UUX2T6-BjdsmG3m.js";import"./chunk-C76H5USB-DJZABeme.js";import"./Trans-CM9vMdxp.js";import"./x-mark-mini-BWMGrVIU.js";import"./chunk-YEDAFXMB-D7buONTO.js";import"./chunk-AOFGTNG6-CmvDtUlD.js";import"./chunk-WX2SMNCD-BJTVtiMv.js";import"./plus-mini-BwJJ7XIZ.js";import"./chunk-QAF7PVQE-UJeTHqTb.js";import"./format-BkG7sM8d.js";import"./date-picker-DpqbO765.js";import"./popover-D6P9NTCz.js";import"./index-C70Cb1KD.js";import"./triangle-left-mini-CZpnYzgZ.js";import"./prompt-DruOcYql.js";var Se=Object.defineProperty,y=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,Q=(r,e,t)=>e in r?Se(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,be=(r,e)=>{for(var t in e||(e={}))G.call(e,t)&&Q(r,t,e[t]);if(y)for(var t of y(e))J.call(e,t)&&Q(r,t,e[t]);return r},we=(r,e)=>{var t={};for(var i in r)G.call(r,i)&&e.indexOf(i)<0&&(t[i]=r[i]);if(r!=null&&y)for(var i of y(r))e.indexOf(i)<0&&J.call(r,i)&&(t[i]=r[i]);return t};const U=x.forwardRef((r,e)=>{var t=r,{color:i="currentColor"}=t,n=we(t,["color"]);return x.createElement("svg",be({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:e},n),x.createElement("path",{stroke:i,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M7.5 13.945a6.444 6.444 0 1 0 0-12.89 6.444 6.444 0 0 0 0 12.89"}),x.createElement("path",{stroke:i,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"m4.611 7.722 2 2.223 3.778-4.89"}))});U.displayName="CheckCircle";var Pe=()=>({queryKey:ce.details(),queryFn:async()=>le()}),ur=async()=>{const r=Pe();return M.getQueryData(r.queryKey)??await M.fetchQuery(r)},w=10,ke=({store:r})=>{var I,O,N,R,D,z,A,q;const[e,t]=x.useState({}),{searchParams:i,raw:n}=re({pageSize:w}),{currencies:c,count:a,isPending:m,isError:j,error:C}=se({code:(I=r.supported_currencies)==null?void 0:I.map(o=>o.currency_code),...i},{placeholderData:ue,enabled:!!((O=r.supported_currencies)!=null&&O.length)}),{price_preferences:g,isPending:v,isError:d,error:u}=de({attribute:"currency_code",value:(N=r.supported_currencies)==null?void 0:N.map(o=>o.currency_code)},{enabled:!!((R=r.supported_currencies)!=null&&R.length)}),T=Ee(),E=x.useMemo(()=>new Map(g==null?void 0:g.map(o=>[o.value,o])),[g]),V=c==null?void 0:c.map(o=>{var S;return{...o,is_tax_inclusive:(S=E.get(o.code))==null?void 0:S.is_tax_inclusive}}),{table:X}=he({data:V??[],columns:T,count:a,getRowId:o=>o.code,rowSelection:{state:e,updater:t},enablePagination:!0,enableRowSelection:!0,pageSize:w,meta:{storeId:r.id,supportedCurrencies:r.supported_currencies,defaultCurrencyCode:(z=(D=r.supported_currencies)==null?void 0:D.find(o=>o.is_default))==null?void 0:z.currency_code,preferencesMap:E}}),{mutateAsync:Z}=W(r.id),{t:l}=_(),F=Y(),$=async()=>{var L;const o=Object.keys(e);await F({title:l("general.areYouSure"),description:l("store.removeCurrencyWarning",{count:o.length}),confirmText:l("actions.remove"),cancelText:l("actions.cancel")})&&await Z({supported_currencies:((L=r.supported_currencies)==null?void 0:L.filter(b=>!o.includes(b.currency_code)))??[]},{onSuccess:()=>{t({}),f.success(l("store.toast.currenciesRemoved"))},onError:b=>{f.error(b.message)}})};if(j)throw C;if(d)throw u;const ee=m||v;return s.jsxs(K,{className:"divide-y p-0",children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[s.jsx(H,{level:"h2",children:l("store.currencies")}),s.jsx(k,{groups:[{actions:[{icon:s.jsx(pe,{}),label:l("actions.add"),to:"currencies"}]}]})]}),s.jsx(ve,{orderBy:[{key:"name",label:l("fields.name")},{key:"code",label:l("fields.code")}],search:!0,pagination:!0,table:X,pageSize:w,columns:T,count:(A=r.supported_currencies)!=null&&A.length?a:0,isLoading:(q=r.supported_currencies)!=null&&q.length?ee:!1,queryObject:n}),s.jsx(h,{open:!!Object.keys(e).length,children:s.jsxs(h.Bar,{children:[s.jsx(h.Value,{children:l("general.countSelected",{count:Object.keys(e).length})}),s.jsx(h.Seperator,{}),s.jsx(h.Command,{action:$,shortcut:"r",label:l("actions.remove")})]})})]})},Te=({storeId:r,currency:e,supportedCurrencies:t,defaultCurrencyCode:i,preferencesMap:n})=>{var g,v;const{mutateAsync:c}=W(r),{t:a}=_(),m=Y(),j=async()=>{await m({title:a("general.areYouSure"),description:a("store.removeCurrencyWarning",{count:1}),verificationInstruction:a("general.typeToConfirm"),verificationText:e.name,confirmText:a("actions.remove"),cancelText:a("actions.cancel")})&&await c({supported_currencies:t.filter(u=>u.currency_code!==e.code)},{onSuccess:()=>{f.success(a("store.toast.currenciesRemoved"))},onError:u=>{f.error(u.message)}})},C=async()=>{await c({supported_currencies:t.map(d=>{const u=n.get(d.currency_code);return{...d,is_tax_inclusive:d.currency_code===e.code?!(u!=null&&u.is_tax_inclusive):void 0}})},{onSuccess:()=>{f.success(a("store.toast.updatedTaxInclusivitySuccessfully"))},onError:d=>{f.error(d.message)}})};return s.jsx(k,{groups:[{actions:[{icon:(g=n.get(e.code))!=null&&g.is_tax_inclusive?s.jsx(_e,{}):s.jsx(U,{}),label:(v=n.get(e.code))!=null&&v.is_tax_inclusive?a("store.disableTaxInclusivePricing"):a("store.enableTaxInclusivePricing"),onClick:C}]},{actions:[{icon:s.jsx(je,{}),label:a("actions.remove"),onClick:j,disabled:e.code===i}]}]})},P=Ce(),Ee=()=>{const r=te(),{t:e}=_();return x.useMemo(()=>[P.display({id:"select",header:({table:t})=>s.jsx(B,{checked:t.getIsSomePageRowsSelected()?"indeterminate":t.getIsAllPageRowsSelected(),onCheckedChange:i=>t.toggleAllPageRowsSelected(!!i)}),cell:({row:t})=>s.jsx(B,{checked:t.getIsSelected(),onCheckedChange:i=>t.toggleSelected(!!i),onClick:i=>{i.stopPropagation()}})}),...r,P.accessor("is_tax_inclusive",{header:e("fields.taxInclusivePricing"),cell:({getValue:t})=>{const i=t();return s.jsx(xe,{color:i?"green":"grey",children:e(i?"fields.true":"fields.false")})}}),P.display({id:"actions",cell:({row:t,table:i})=>{const{supportedCurrencies:n,storeId:c,defaultCurrencyCode:a,preferencesMap:m}=i.options.meta;return s.jsx(Te,{storeId:c,currency:t.original,supportedCurrencies:n,defaultCurrencyCode:a,preferencesMap:m})}})],[r,e])},Ie=({store:r})=>{var n,c,a;const{t:e}=_(),{region:t}=me(r.default_region_id,void 0,{enabled:!!r.default_region_id}),i=(n=r.supported_currencies)==null?void 0:n.find(m=>m.is_default);return s.jsxs(K,{className:"divide-y p-0",children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[s.jsxs("div",{children:[s.jsx(H,{children:e("store.domain")}),s.jsx(p,{className:"text-ui-fg-subtle",size:"small",children:e("store.manageYourStoresDetails")})]}),s.jsx(k,{groups:[{actions:[{icon:s.jsx(ye,{}),label:e("actions.edit"),to:"edit"}]}]})]}),s.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 px-6 py-4",children:[s.jsx(p,{size:"small",leading:"compact",weight:"plus",children:e("fields.name")}),s.jsx(p,{size:"small",leading:"compact",children:r.name})]}),s.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 px-6 py-4",children:[s.jsx(p,{size:"small",leading:"compact",weight:"plus",children:e("store.defaultCurrency")}),i?s.jsxs("div",{className:"flex items-center gap-x-2",children:[s.jsx(ge,{size:"2xsmall",children:(c=i.currency_code)==null?void 0:c.toUpperCase()}),s.jsx(p,{size:"small",leading:"compact",children:(a=i.currency)==null?void 0:a.name})]}):s.jsx(p,{size:"small",leading:"compact",children:"-"})]}),s.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 px-6 py-4",children:[s.jsx(p,{size:"small",leading:"compact",weight:"plus",children:e("store.defaultRegion")}),s.jsx("div",{className:"flex items-center gap-x-2",children:s.jsx(p,{size:"small",leading:"compact",children:(t==null?void 0:t.name)||"-"})})]})]})},dr=()=>{const r=ie(),{store:e,isPending:t,isError:i,error:n}=ae(void 0,{initialData:r}),{getWidgets:c}=oe();if(t||!e)return s.jsx(ne,{sections:2,showJSON:!0,showMetadata:!0});if(i)throw n;return s.jsxs(fe,{widgets:{before:c("store.details.before"),after:c("store.details.after")},data:e,hasOutlet:!0,showMetadata:!0,showJSON:!0,children:[s.jsx(Ie,{store:e}),s.jsx(ke,{store:e})]})};export{dr as Component,ur as loader};
