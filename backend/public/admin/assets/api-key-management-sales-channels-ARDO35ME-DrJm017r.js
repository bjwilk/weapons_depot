import{V as y}from"./chunk-F6ZOHZVB-BmoSeVZh.js";import{u as M,a as D,b as F}from"./chunk-VELNOPU6-D1zjxteU.js";import{a4 as E,af as z,a6 as B,R as H,eV as I,j as e,b as C,ab as V,ac as N,r as j,eZ as L,K as G,t as S,G as O,B as x,W as Z,k as q}from"./index-Dd5AIRt1.js";import{u as Q,D as W}from"./chunk-XVFA73MY-BMaVn9_N.js";import"./lodash-BSdnRVRc.js";import"./chunk-5AU4DI7M-Ck_cVJRv.js";import"./chunk-E3YGDIJC-DNIXVXp2.js";import{K as $}from"./chunk-CEEYZHMN-DuC6-VW1.js";import{R as r,u as J}from"./chunk-MDIOSTKB-DMuKuBFN.js";import{C as f}from"./checkbox-C6j9JG97.js";import{c as U}from"./index-391Gg0Ss.js";import"./chunk-GA34GXNI-Cnv2ew6n.js";import"./chunk-P3UUX2T6-BjdsmG3m.js";import"./chunk-OI7BBNYW-By6QQi9v.js";import"./chunk-ADOCJB6L-CtbHuMEy.js";import"./chunk-C76H5USB-DJZABeme.js";import"./chunk-YEDAFXMB-D7buONTO.js";import"./chunk-AOFGTNG6-CmvDtUlD.js";import"./chunk-WX2SMNCD-BJTVtiMv.js";import"./plus-mini-BwJJ7XIZ.js";import"./command-bar-D-8Acngt.js";import"./index-C70Cb1KD.js";import"./chunk-QAF7PVQE-UJeTHqTb.js";import"./format-BkG7sM8d.js";import"./date-picker-DpqbO765.js";import"./popover-D6P9NTCz.js";import"./x-mark-mini-BWMGrVIU.js";import"./triangle-left-mini-CZpnYzgZ.js";import"./prompt-DruOcYql.js";var X=E({sales_channel_ids:z(B())}),p=50,Y=({apiKey:i,preSelected:t=[]})=>{const{t:s}=C(),{handleSuccess:n}=J(),o=V({defaultValues:{sales_channel_ids:[]},resolver:N(X)}),{setValue:c}=o,[l,d]=j.useState({}),{mutateAsync:u,isPending:b}=L(i),{raw:_,searchParams:T}=M({pageSize:p}),h=se(),A=D(),{sales_channels:K,count:g,isLoading:v}=G({...T},{placeholderData:q}),R=a=>{const m=typeof a=="function"?a(l):a,w=Object.keys(m);c("sales_channel_ids",w,{shouldDirty:!0,shouldTouch:!0}),d(m)},{table:k}=Q({data:K??[],columns:h,count:g,enablePagination:!0,enableRowSelection:a=>!t.includes(a.original.id),getRowId:a=>a.id,pageSize:p,rowSelection:{state:l,updater:R}}),P=o.handleSubmit(async a=>{await u(a.sales_channel_ids,{onSuccess:()=>{S.success(s("apiKeyManagement.salesChannels.successToast",{count:a.sales_channel_ids.length})),n()},onError:m=>{S.error(m.message)}})});return e.jsx(r.Form,{form:o,children:e.jsxs($,{onSubmit:P,className:"flex h-full flex-col",children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{asChild:!0,children:e.jsx(y,{children:s("apiKeyManagement.salesChannels.title")})}),e.jsx(r.Description,{asChild:!0,children:e.jsx(y,{children:s("apiKeyManagement.salesChannels.description")})}),e.jsx("div",{className:"flex items-center justify-end gap-x-2",children:o.formState.errors.sales_channel_ids&&e.jsx(O,{variant:"error",children:o.formState.errors.sales_channel_ids.message})})]}),e.jsx(r.Body,{className:"flex flex-1 flex-col overflow-auto",children:e.jsx(W,{table:k,columns:h,count:g,pageSize:p,filters:A,pagination:!0,search:"autofocus",isLoading:v,queryObject:_,orderBy:[{key:"name",label:s("fields.name")},{key:"created_at",label:s("fields.createdAt")},{key:"updated_at",label:s("fields.updatedAt")}],layout:"fill",noRecords:{message:s("apiKeyManagement.addSalesChannels.list.noRecordsMessage")}})}),e.jsx(r.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(r.Close,{asChild:!0,children:e.jsx(x,{size:"small",variant:"secondary",children:s("actions.cancel")})}),e.jsx(x,{size:"small",type:"submit",isLoading:b,children:s("actions.save")})]})})]})})},ee=U(),se=()=>{const{t:i}=C(),t=F();return j.useMemo(()=>[ee.display({id:"select",header:({table:s})=>e.jsx(f,{checked:s.getIsSomePageRowsSelected()?"indeterminate":s.getIsAllPageRowsSelected(),onCheckedChange:n=>s.toggleAllPageRowsSelected(!!n)}),cell:({row:s})=>{const n=!s.getCanSelect(),o=s.getIsSelected()||n,c=e.jsx(f,{checked:o,disabled:n,onCheckedChange:l=>s.toggleSelected(!!l),onClick:l=>{l.stopPropagation()}});return n?e.jsx(Z,{content:i("apiKeyManagement.salesChannels.alreadyAddedTooltip"),side:"right",children:c}):c}}),...t],[i,t])},we=()=>{var d;const{id:i}=H(),{api_key:t,isLoading:s,isError:n,error:o}=I(i),c=(d=t==null?void 0:t.sales_channels)==null?void 0:d.map(u=>u.id),l=!s&&t;if(n)throw o;return e.jsx(r,{children:l&&e.jsx(Y,{apiKey:i,preSelected:c})})};export{we as Component};
