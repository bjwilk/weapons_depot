import{a as g}from"./chunk-B4FQDBC3-B7AjlB0U.js";import{N as h,a as C,D as T,b as y}from"./chunk-GA34GXNI-Cnv2ew6n.js";import{T as d,a as D}from"./chunk-OI7BBNYW-By6QQi9v.js";import{b as f,r as j,j as t,a as _,dg as P,k as S,H as w,L as H,B as N,ds as k,A,t as x}from"./index-Dd5AIRt1.js";import{c as v}from"./index-391Gg0Ss.js";import{u as E}from"./chunk-C76H5USB-DJZABeme.js";import{S as q}from"./chunk-UR2E444G-D2Lbw7mb.js";import"./chunk-3IW4HYUP-DD0tWyEL.js";import{u as L,D as O}from"./chunk-XVFA73MY-BMaVn9_N.js";import"./lodash-BSdnRVRc.js";import"./chunk-5AU4DI7M-Ck_cVJRv.js";import"./chunk-E3YGDIJC-DNIXVXp2.js";import{P as z}from"./pencil-square-rz5ZnZ22.js";import{T as B}from"./trash-B_yspgao.js";import{u as I}from"./use-prompt-BS3ABRGp.js";import{C as M}from"./container-ChTfB2gf.js";import"./chunk-P3UUX2T6-BjdsmG3m.js";import"./format-BkG7sM8d.js";import"./Trans-CM9vMdxp.js";import"./x-mark-mini-BWMGrVIU.js";import"./chunk-YEDAFXMB-D7buONTO.js";import"./chunk-AOFGTNG6-CmvDtUlD.js";import"./chunk-WX2SMNCD-BJTVtiMv.js";import"./plus-mini-BwJJ7XIZ.js";import"./command-bar-D-8Acngt.js";import"./index-C70Cb1KD.js";import"./chunk-QAF7PVQE-UJeTHqTb.js";import"./date-picker-DpqbO765.js";import"./popover-D6P9NTCz.js";import"./triangle-left-mini-CZpnYzgZ.js";import"./prompt-DruOcYql.js";var J=({prefix:e,pageSize:a=20})=>{const r=E(["offset","q","order","created_at","updated_at"],e),{offset:s,q:i,order:c,created_at:o,updated_at:m}=r;return{searchParams:{limit:a,offset:s?Number(s):0,order:c,created_at:o?JSON.parse(o):void 0,updated_at:m?JSON.parse(m):void 0,q:i},raw:r}},n=v(),Q=()=>{const{t:e}=f();return j.useMemo(()=>[n.accessor("name",{header:()=>t.jsx(h,{}),cell:({getValue:a})=>t.jsx(C,{name:a()})}),n.accessor("description",{header:()=>t.jsx(T,{}),cell:({getValue:a})=>t.jsx(y,{description:a()})}),n.accessor("campaign_identifier",{header:()=>t.jsx(d,{text:e("campaigns.fields.identifier")}),cell:({getValue:a})=>{const r=a();return t.jsx(D,{text:r})}}),n.accessor("starts_at",{header:()=>t.jsx(d,{text:e("campaigns.fields.start_date")}),cell:({getValue:a})=>{const r=a();if(!r)return;const s=new Date(r);return t.jsx(g,{date:s})}}),n.accessor("ends_at",{header:()=>t.jsx(d,{text:e("campaigns.fields.end_date")}),cell:({getValue:a})=>{const r=a();if(!r)return;const s=new Date(r);return t.jsx(g,{date:s})}})],[e])},u=20,R=()=>{const{t:e}=f(),{raw:a,searchParams:r}=J({pageSize:u}),{campaigns:s,count:i,isPending:c,isError:o,error:m}=P(r,{placeholderData:S}),l=G(),{table:b}=L({data:s??[],columns:l,count:i,enablePagination:!0,getRowId:p=>p.id,pageSize:u});if(o)throw m;return t.jsxs(M,{className:"divide-y p-0",children:[t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsx(w,{level:"h2",children:e("campaigns.domain")}),t.jsx(H,{to:"/campaigns/create",children:t.jsx(N,{size:"small",variant:"secondary",children:e("actions.create")})})]}),t.jsx(O,{table:b,columns:l,count:i,pageSize:u,pagination:!0,search:!0,navigateTo:p=>p.id,isLoading:c,queryObject:a,orderBy:[{key:"name",label:e("fields.name")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}]})]})},W=({campaign:e})=>{const{t:a}=f(),r=I(),{mutateAsync:s}=k(e.id),i=async()=>{await r({title:a("general.areYouSure"),description:a("campaigns.deleteCampaignWarning",{name:e.name}),verificationInstruction:a("general.typeToConfirm"),verificationText:e.name,confirmText:a("actions.delete"),cancelText:a("actions.cancel")})&&await s(void 0,{onSuccess:()=>{x.success(a("campaigns.delete.successToast",{name:e.name}))},onError:o=>{x.error(o.message)}})};return t.jsx(A,{groups:[{actions:[{icon:t.jsx(z,{}),label:a("actions.edit"),to:`/campaigns/${e.id}/edit`}]},{actions:[{icon:t.jsx(B,{}),label:a("actions.delete"),onClick:i}]}]})},$=v(),G=()=>{const e=Q();return j.useMemo(()=>[...e,$.display({id:"actions",cell:({row:a})=>t.jsx(W,{campaign:a.original})})],[e])},De=()=>{const{getWidgets:e}=_();return t.jsx(q,{widgets:{after:e("campaign.list.after"),before:e("campaign.list.before")},hasOutlet:!0,children:t.jsx(R,{})})};export{De as Component};
