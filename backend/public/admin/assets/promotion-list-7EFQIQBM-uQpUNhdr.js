import{u as x,a as b,b as v}from"./chunk-H2SGZSB6-BoHB9tFa.js";import{q as h,a as j,j as o,dc as P,s as T,b as u,d as w,dd as C,H as D,B as S,L as q,O as L,r as k,k as A,u as E,de as Q,A as z}from"./index-Dd5AIRt1.js";import{S as H}from"./chunk-UR2E444G-D2Lbw7mb.js";import"./chunk-3IW4HYUP-DD0tWyEL.js";import{u as B,D as I}from"./chunk-XVFA73MY-BMaVn9_N.js";import"./lodash-BSdnRVRc.js";import"./chunk-5AU4DI7M-Ck_cVJRv.js";import"./chunk-E3YGDIJC-DNIXVXp2.js";import{P as K}from"./pencil-square-rz5ZnZ22.js";import{T as N}from"./trash-B_yspgao.js";import{u as O}from"./use-prompt-BS3ABRGp.js";import{C as _}from"./container-ChTfB2gf.js";import{c as $}from"./index-391Gg0Ss.js";import"./chunk-KDXAFTVE-BIJQy-Te.js";import"./chunk-OI7BBNYW-By6QQi9v.js";import"./chunk-P3UUX2T6-BjdsmG3m.js";import"./chunk-ADOCJB6L-CtbHuMEy.js";import"./chunk-C76H5USB-DJZABeme.js";import"./Trans-CM9vMdxp.js";import"./x-mark-mini-BWMGrVIU.js";import"./chunk-YEDAFXMB-D7buONTO.js";import"./chunk-AOFGTNG6-CmvDtUlD.js";import"./chunk-WX2SMNCD-BJTVtiMv.js";import"./plus-mini-BwJJ7XIZ.js";import"./command-bar-D-8Acngt.js";import"./index-C70Cb1KD.js";import"./chunk-QAF7PVQE-UJeTHqTb.js";import"./format-BkG7sM8d.js";import"./date-picker-DpqbO765.js";import"./popover-D6P9NTCz.js";import"./triangle-left-mini-CZpnYzgZ.js";import"./prompt-DruOcYql.js";var p={limit:20,offset:0},F=()=>({queryKey:P.list(p),queryFn:async()=>T.admin.promotion.list(p)}),De=e=>async()=>{const t=F();return h.getQueryData(t.queryKey)??await e.fetchQuery(t)},m=20,M=()=>{const{t:e}=u(),t=w(),{searchParams:a,raw:i}=x({pageSize:m}),{promotions:s,count:r,isLoading:c,isError:d,error:y}=C({...a},{initialData:t,placeholderData:A}),f=b(),l=G(),{table:g}=B({data:s??[],columns:l,count:r,enablePagination:!0,pageSize:m,getRowId:n=>n.id});if(d)throw y;return o.jsxs(_,{className:"divide-y p-0",children:[o.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[o.jsx(D,{level:"h2",children:e("promotions.domain")}),o.jsx(S,{size:"small",variant:"secondary",asChild:!0,children:o.jsx(q,{to:"create",children:e("actions.create")})})]}),o.jsx(I,{table:g,columns:l,count:r,pageSize:m,filters:f,search:!0,pagination:!0,isLoading:c,queryObject:i,navigateTo:n=>`${n.original.id}`,orderBy:[{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}]}),o.jsx(L,{})]})},R=({promotion:e})=>{const{t}=u(),a=O(),i=E(),{mutateAsync:s}=Q(e.id),r=async()=>{if(await a({title:t("general.areYouSure"),description:t("promotions.deleteWarning",{code:e.code}),confirmText:t("actions.delete"),cancelText:t("actions.cancel"),verificationInstruction:t("general.typeToConfirm"),verificationText:e.code}))try{await s(void 0,{onSuccess:()=>{i("/promotions",{replace:!0})}})}catch{throw new Error(`Promotion with code ${e.code} could not be deleted`)}};return o.jsx(z,{groups:[{actions:[{icon:o.jsx(K,{}),label:t("actions.edit"),to:`/promotions/${e.id}/edit`},{icon:o.jsx(N,{}),label:t("actions.delete"),onClick:r}]}]})},W=$(),G=()=>{const e=v();return k.useMemo(()=>[...e,W.display({id:"actions",cell:({row:t})=>o.jsx(R,{promotion:t.original})})],[e])},Se=()=>{const{getWidgets:e}=j();return o.jsx(H,{widgets:{before:e("promotion.list.before"),after:e("promotion.list.after")},children:o.jsx(M,{})})};export{Se as Component,De as promotionsLoader};
