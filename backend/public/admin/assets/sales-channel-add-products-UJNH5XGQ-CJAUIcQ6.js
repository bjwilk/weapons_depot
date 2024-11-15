import{u as F}from"./chunk-VWNSX5WA-qOSK2kxz.js";import{a4 as I,af as z,a6 as D,R as B,h as H,j as e,b,ab as M,ac as N,ep as L,r as C,e as G,k as K,t as S,G as O,B as y,W as V}from"./index-Dd5AIRt1.js";import{u as q,a as Q}from"./chunk-B5GTMFNM-BXiLk3uN.js";import{u as W,D as Z}from"./chunk-XVFA73MY-BMaVn9_N.js";import"./lodash-BSdnRVRc.js";import"./chunk-5AU4DI7M-Ck_cVJRv.js";import"./chunk-E3YGDIJC-DNIXVXp2.js";import{K as $}from"./chunk-CEEYZHMN-DuC6-VW1.js";import{R as l,u as J}from"./chunk-MDIOSTKB-DMuKuBFN.js";import{C as j}from"./checkbox-C6j9JG97.js";import{c as U}from"./index-391Gg0Ss.js";import"./chunk-FTXJRXMD-D6-oa5iC.js";import"./chunk-ADOCJB6L-CtbHuMEy.js";import"./chunk-P3UUX2T6-BjdsmG3m.js";import"./chunk-C76H5USB-DJZABeme.js";import"./chunk-YEDAFXMB-D7buONTO.js";import"./chunk-AOFGTNG6-CmvDtUlD.js";import"./chunk-WX2SMNCD-BJTVtiMv.js";import"./plus-mini-BwJJ7XIZ.js";import"./command-bar-D-8Acngt.js";import"./index-C70Cb1KD.js";import"./chunk-QAF7PVQE-UJeTHqTb.js";import"./format-BkG7sM8d.js";import"./date-picker-DpqbO765.js";import"./popover-D6P9NTCz.js";import"./x-mark-mini-BWMGrVIU.js";import"./triangle-left-mini-CZpnYzgZ.js";import"./prompt-DruOcYql.js";var X=I({product_ids:z(D()).min(1)}),f=50,Y=({salesChannel:r})=>{const{t:s}=b(),{handleSuccess:t}=J(),a=M({defaultValues:{product_ids:[]},resolver:N(X)}),{setValue:d}=a,{mutateAsync:c,isPending:p}=L(r.id),[u,m]=C.useState({}),n=o=>{const i=typeof o=="function"?o(u):o,h=Object.keys(i);d("product_ids",h,{shouldDirty:!0,shouldTouch:!0}),m(i)},{searchParams:P,raw:v}=q({pageSize:f}),{products:_,count:g,isPending:k,isError:A,error:R}=G({fields:"*variants,*sales_channels",...P},{placeholderData:K}),x=se(),T=Q(["sales_channel_id"]),{table:w}=W({data:_??[],columns:x,enableRowSelection:o=>{var i;return!((i=o.original.sales_channels)!=null&&i.map(h=>h.id).includes(r.id))},enablePagination:!0,getRowId:o=>o.id,pageSize:f,count:g,rowSelection:{state:u,updater:n},meta:{salesChannelId:r.id}}),E=a.handleSubmit(async o=>{await c(o.product_ids,{onSuccess:()=>{S.success(s("salesChannels.toast.update")),t()},onError:i=>S.error(i.message)})});if(A)throw R;return e.jsx(l.Form,{form:a,children:e.jsxs($,{onSubmit:E,className:"flex h-full flex-col overflow-hidden",children:[e.jsx(l.Header,{children:e.jsx("div",{className:"flex items-center justify-end gap-x-2",children:a.formState.errors.product_ids&&e.jsx(O,{variant:"error",children:a.formState.errors.product_ids.message})})}),e.jsx(l.Body,{className:"flex size-full flex-col overflow-y-auto",children:e.jsx(Z,{table:w,count:g,columns:x,pageSize:f,isLoading:k,filters:T,orderBy:[{key:"title",label:s("fields.title")},{key:"status",label:s("fields.status")},{key:"created_at",label:s("fields.createdAt")},{key:"updated_at",label:s("fields.updatedAt")}],queryObject:v,layout:"fill",pagination:!0,search:"autofocus",noRecords:{message:s("salesChannels.products.add.list.noRecordsMessage")}})}),e.jsx(l.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(l.Close,{asChild:!0,children:e.jsx(y,{size:"small",variant:"secondary",children:s("actions.cancel")})}),e.jsx(y,{size:"small",type:"submit",isLoading:p,children:s("actions.save")})]})})]})})},ee=U(),se=()=>{const r=F(),{t:s}=b();return C.useMemo(()=>[ee.display({id:"select",header:({table:t})=>e.jsx(j,{checked:t.getIsSomePageRowsSelected()?"indeterminate":t.getIsAllPageRowsSelected(),onCheckedChange:a=>t.toggleAllPageRowsSelected(!!a)}),cell:({row:t,table:a})=>{var m;const{salesChannelId:d}=a.options.meta,c=(m=t.original.sales_channels)==null?void 0:m.map(n=>n.id).includes(d),p=t.getIsSelected()||c,u=e.jsx(j,{checked:p,disabled:c,onCheckedChange:n=>t.toggleSelected(!!n),onClick:n=>{n.stopPropagation()}});return c?e.jsx(V,{content:s("salesChannels.productAlreadyAdded"),side:"right",children:u}):u}}),...r],[s,r])},we=()=>{const{id:r}=B(),{sales_channel:s,isPending:t,isError:a,error:d}=H(r);if(a)throw d;return e.jsx(l,{children:!t&&s&&e.jsx(Y,{salesChannel:s})})};export{we as Component};
