import{g as x,p as h,a as _,b as j}from"./chunk-G22WWLPG-C9g-VuwI.js";import{a as g}from"./chunk-B4FQDBC3-B7AjlB0U.js";import{a as A}from"./chunk-OI7BBNYW-By6QQi9v.js";import{c as T,a as S,j as a,b as u,eP as M,H as K,T as w,L as P,B as C,r as D,Z as N,k as E,eQ as q,eR as z,A as R,t as m}from"./index-Dd5AIRt1.js";import{S as L}from"./chunk-ADOCJB6L-CtbHuMEy.js";import{S as O}from"./chunk-UR2E444G-D2Lbw7mb.js";import{S as H}from"./chunk-3IW4HYUP-DD0tWyEL.js";import{u as B,D as F}from"./chunk-XVFA73MY-BMaVn9_N.js";import"./lodash-BSdnRVRc.js";import{u as J}from"./chunk-C76H5USB-DJZABeme.js";import"./chunk-5AU4DI7M-Ck_cVJRv.js";import"./chunk-E3YGDIJC-DNIXVXp2.js";import{P as Q}from"./pencil-square-rz5ZnZ22.js";import{X as I}from"./x-circle-bIcsI5DE.js";import{T as X}from"./trash-B_yspgao.js";import{u as Y}from"./use-prompt-BS3ABRGp.js";import{C as Z}from"./container-ChTfB2gf.js";import{c as G}from"./index-391Gg0Ss.js";import"./chunk-P3UUX2T6-BjdsmG3m.js";import"./format-BkG7sM8d.js";import"./Trans-CM9vMdxp.js";import"./x-mark-mini-BWMGrVIU.js";import"./chunk-YEDAFXMB-D7buONTO.js";import"./chunk-AOFGTNG6-CmvDtUlD.js";import"./chunk-WX2SMNCD-BJTVtiMv.js";import"./plus-mini-BwJJ7XIZ.js";import"./command-bar-D-8Acngt.js";import"./index-C70Cb1KD.js";import"./chunk-QAF7PVQE-UJeTHqTb.js";import"./date-picker-DpqbO765.js";import"./popover-D6P9NTCz.js";import"./triangle-left-mini-CZpnYzgZ.js";import"./prompt-DruOcYql.js";var U=({apiKey:t})=>{const{mutateAsync:e}=q(t.id),{mutateAsync:r}=z(t.id),{t:s}=u(),o=Y(),l=async()=>{await o({title:s("general.areYouSure"),description:s("apiKeyManagement.delete.warning",{title:t.title}),confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&await r(void 0,{onSuccess:()=>{m.success(s("apiKeyManagement.delete.successToast",{title:t.title}))},onError:c=>{m.error(c.message)}})},i=async()=>{await o({title:s("general.areYouSure"),description:s("apiKeyManagement.revoke.warning",{title:t.title}),confirmText:s("apiKeyManagement.actions.revoke"),cancelText:s("actions.cancel")})&&await e(void 0,{onSuccess:()=>{m.success(s("apiKeyManagement.revoke.successToast",{title:t.title}))},onError:c=>{m.error(c.message)}})},d=()=>{navigator.clipboard.writeText(t.token),m.success(s("apiKeyManagement.actions.copySuccessToast"))};return a.jsx(R,{groups:[{actions:[{icon:a.jsx(Q,{}),label:s("actions.edit"),to:`${t.id}/edit`},...t.type!=="secret"?[{label:s("apiKeyManagement.actions.copy"),onClick:d,icon:a.jsx(H,{})}]:[]]},{actions:[{icon:a.jsx(I,{}),label:s("apiKeyManagement.actions.revoke"),onClick:i,disabled:!!t.revoked_at},{icon:a.jsx(X,{}),label:s("actions.delete"),onClick:l,disabled:!t.revoked_at}]}]})},n=G(),W=()=>{const{t}=u();return D.useMemo(()=>[n.accessor("title",{header:t("fields.title"),cell:({getValue:e})=>a.jsx("div",{className:"flex size-full items-center",children:a.jsx("span",{className:"truncate",children:e()})})}),n.accessor("redacted",{header:"Token",cell:({getValue:e})=>{const r=e();return a.jsx(N,{size:"2xsmall",children:h(r)})}}),n.accessor("type",{header:t("fields.type"),cell:({getValue:e})=>{const{label:r}=_(e(),t);return a.jsx(A,{text:r})}}),n.accessor("revoked_at",{header:t("fields.status"),cell:({getValue:e})=>{const{color:r,label:s}=j(e(),t);return a.jsx(L,{color:r,children:s})}}),n.accessor("last_used_at",{header:t("apiKeyManagement.table.lastUsedAtHeader"),cell:({getValue:e})=>{const r=e();return a.jsx(g,{date:r})}}),n.accessor("created_at",{header:t("fields.created"),cell:({getValue:e})=>{const r=e();return a.jsx(g,{date:r})}}),n.display({id:"actions",cell:({row:e})=>a.jsx(U,{apiKey:e.original})})],[t])},$=()=>{const{t}=u();let e=[];const r=[{label:t("fields.createdAt"),key:"created_at",type:"date"},{label:t("fields.updatedAt"),key:"updated_at",type:"date"},{label:t("fields.revokedAt"),key:"revoked_at",type:"date"}];return e=[...e,...r],e},V=({prefix:t,pageSize:e=20})=>{const r=J(["offset","q","created_at","updated_at","revoked_at","order"],t),{offset:s,created_at:o,updated_at:l,revoked_at:i,q:d,order:p}=r;return{searchParams:{limit:e,offset:s?Number(s):0,created_at:o?JSON.parse(o):void 0,updated_at:l?JSON.parse(l):void 0,revoked_at:i?JSON.parse(i):void 0,order:p,q:d},raw:r}},f=20,ee=({keyType:t})=>{const{t:e}=u(),{searchParams:r,raw:s}=V({pageSize:f}),o={...r,type:t,fields:"id,title,redacted,token,type,created_at,updated_at,revoked_at,last_used_at,created_by,revoked_by"},{api_keys:l,count:i,isLoading:d,isError:p,error:c}=M(o,{placeholderData:E}),k=$(),b=W(),{table:v}=B({data:l||[],columns:b,count:i,enablePagination:!0,getRowId:y=>y.id,pageSize:f});if(p)throw c;return a.jsxs(Z,{className:"divide-y p-0",children:[a.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[a.jsxs("div",{children:[a.jsx(K,{level:"h2",children:e(t==="publishable"?"apiKeyManagement.domain.publishable":"apiKeyManagement.domain.secret")}),a.jsx(w,{className:"text-ui-fg-subtle",size:"small",children:e(t==="publishable"?"apiKeyManagement.subtitle.publishable":"apiKeyManagement.subtitle.secret")})]}),a.jsx(P,{to:"create",children:a.jsx(C,{variant:"secondary",size:"small",children:e("actions.create")})})]}),a.jsx(F,{table:v,filters:k,columns:b,count:i,pageSize:f,orderBy:[{key:"title",label:e("fields.title")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")},{key:"revoked_at",label:e("fields.revokedAt")}],navigateTo:y=>y.id,pagination:!0,search:!0,queryObject:s,isLoading:d})]})},Ee=()=>{const{pathname:t}=T(),{getWidgets:e}=S(),r=x(t);return a.jsx(O,{hasOutlet:!0,widgets:{before:e("api_key.list.before"),after:e("api_key.list.after")},children:a.jsx(ee,{keyType:r})})};export{Ee as Component};
