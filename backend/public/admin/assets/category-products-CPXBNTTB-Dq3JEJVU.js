import{u as I}from"./chunk-VWNSX5WA-qOSK2kxz.js";import{a8 as u,R as A,aF as H,j as t,b,r as P,ab as B,ac as D,e as M,aH as N,t as f,G,B as x,W as K}from"./index-Dd5AIRt1.js";import{u as L,a as O}from"./chunk-B5GTMFNM-BXiLk3uN.js";import{u as V,D as q}from"./chunk-XVFA73MY-BMaVn9_N.js";import"./lodash-BSdnRVRc.js";import"./chunk-5AU4DI7M-Ck_cVJRv.js";import"./chunk-E3YGDIJC-DNIXVXp2.js";import{K as Q}from"./chunk-CEEYZHMN-DuC6-VW1.js";import{R as l,u as U}from"./chunk-MDIOSTKB-DMuKuBFN.js";import{C as y}from"./checkbox-C6j9JG97.js";import{c as W}from"./index-391Gg0Ss.js";import"./chunk-FTXJRXMD-D6-oa5iC.js";import"./chunk-ADOCJB6L-CtbHuMEy.js";import"./chunk-P3UUX2T6-BjdsmG3m.js";import"./chunk-C76H5USB-DJZABeme.js";import"./chunk-YEDAFXMB-D7buONTO.js";import"./chunk-AOFGTNG6-CmvDtUlD.js";import"./chunk-WX2SMNCD-BJTVtiMv.js";import"./plus-mini-BwJJ7XIZ.js";import"./command-bar-D-8Acngt.js";import"./index-C70Cb1KD.js";import"./chunk-QAF7PVQE-UJeTHqTb.js";import"./format-BkG7sM8d.js";import"./date-picker-DpqbO765.js";import"./popover-D6P9NTCz.js";import"./x-mark-mini-BWMGrVIU.js";import"./triangle-left-mini-CZpnYzgZ.js";import"./prompt-DruOcYql.js";var X=u.object({product_ids:u.array(u.string())}),m=50,p="p",Z=({categoryId:c,products:o=[]})=>{const{t:e}=b(),{handleSuccess:a}=U(),[d,n]=P.useState(o.reduce((r,i)=>(r[i.id]=!0,r),{})),s=B({defaultValues:{product_ids:[]},resolver:D(X)}),S=r=>{const i=typeof r=="function"?r(d):r;s.setValue("product_ids",Object.keys(i),{shouldDirty:!0,shouldTouch:!0}),n(i)},{searchParams:j,raw:C}=L({pageSize:m,prefix:p}),{products:v,count:g,isPending:R,isError:_,error:k}=M({...j}),h=J(),E=O(["categories"]),{table:T}=V({data:v,columns:h,getRowId:r=>r.id,count:g,pageSize:m,prefix:p,enableRowSelection:r=>!o.some(i=>i.id===r.original.id),enablePagination:!0,rowSelection:{state:d,updater:S}}),{mutateAsync:F,isPending:w}=N(c),z=s.handleSubmit(async r=>{await F({add:r.product_ids},{onSuccess:()=>{f.success(e("categories.products.add.successToast",{count:r.product_ids.length-o.length})),a()},onError:i=>{f.error(i.message)}})});if(_)throw k;return t.jsx(l.Form,{form:s,children:t.jsxs(Q,{onSubmit:z,className:"flex h-full flex-col overflow-hidden",children:[t.jsx(l.Header,{children:t.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.formState.errors.product_ids&&t.jsx(G,{variant:"error",children:s.formState.errors.product_ids.message}),t.jsx(l.Close,{asChild:!0,children:t.jsx(x,{size:"small",variant:"secondary",children:e("actions.cancel")})}),t.jsx(x,{size:"small",type:"submit",isLoading:w,children:e("actions.save")})]})}),t.jsx(l.Body,{className:"size-full overflow-hidden",children:t.jsx(q,{table:T,columns:h,pageSize:m,count:g,queryObject:C,filters:E,orderBy:[{key:"title",label:e("fields.title")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],prefix:p,isLoading:R,layout:"fill",pagination:!0,search:"autofocus"})})]})})},$=W(),J=()=>{const{t:c}=b(),o=I();return P.useMemo(()=>[$.display({id:"select",header:({table:e})=>t.jsx(y,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:a=>e.toggleAllPageRowsSelected(!!a)}),cell:({row:e})=>{const a=!e.getCanSelect(),d=e.getIsSelected()||a,n=t.jsx(y,{checked:d,disabled:a,onCheckedChange:s=>e.toggleSelected(!!s),onClick:s=>{s.stopPropagation()}});return a?t.jsx(K,{content:c("categories.products.add.disabledTooltip"),side:"right",children:n}):n}}),...o],[c,o])},ke=()=>{const{id:c}=A(),{product_category:o,isPending:e,isFetching:a,isError:d,error:n}=H(c,{fields:"products.id"}),s=!e&&!a&&!!o;if(d)throw n;return t.jsx(l,{children:s&&t.jsx(Z,{categoryId:o.id,products:o.products})})};export{ke as Component};