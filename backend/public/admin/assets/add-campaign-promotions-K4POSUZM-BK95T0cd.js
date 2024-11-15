import{u as F,a as z,b as E}from"./chunk-H2SGZSB6-BoHB9tFa.js";import{a4 as M,af as B,a6 as H,R as N,dt as O,j as e,b as k,ab as G,ac as K,du as L,r as D,dd as V,t as A,G as q,B as T,W as C,k as Q}from"./index-Dd5AIRt1.js";import{u as W,D as Z}from"./chunk-XVFA73MY-BMaVn9_N.js";import"./lodash-BSdnRVRc.js";import"./chunk-5AU4DI7M-Ck_cVJRv.js";import"./chunk-E3YGDIJC-DNIXVXp2.js";import{K as $}from"./chunk-CEEYZHMN-DuC6-VW1.js";import{R as n,u as J}from"./chunk-MDIOSTKB-DMuKuBFN.js";import{C as R}from"./checkbox-C6j9JG97.js";import{c as U}from"./index-391Gg0Ss.js";import"./chunk-KDXAFTVE-BIJQy-Te.js";import"./chunk-OI7BBNYW-By6QQi9v.js";import"./chunk-P3UUX2T6-BjdsmG3m.js";import"./chunk-ADOCJB6L-CtbHuMEy.js";import"./chunk-C76H5USB-DJZABeme.js";import"./chunk-YEDAFXMB-D7buONTO.js";import"./chunk-AOFGTNG6-CmvDtUlD.js";import"./chunk-WX2SMNCD-BJTVtiMv.js";import"./plus-mini-BwJJ7XIZ.js";import"./command-bar-D-8Acngt.js";import"./index-C70Cb1KD.js";import"./chunk-QAF7PVQE-UJeTHqTb.js";import"./format-BkG7sM8d.js";import"./date-picker-DpqbO765.js";import"./popover-D6P9NTCz.js";import"./x-mark-mini-BWMGrVIU.js";import"./triangle-left-mini-CZpnYzgZ.js";import"./prompt-DruOcYql.js";var X=M({promotion_ids:B(H()).min(1)}),P=50,Y=({campaign:s})=>{var _,v;const{t:o}=k(),{handleSuccess:t}=J(),r=G({defaultValues:{promotion_ids:[]},resolver:K(X)}),{setValue:u}=r,{mutateAsync:x,isPending:b}=L(s.id),[g,d]=D.useState({}),c=i=>{const y=typeof i=="function"?i(g):i,w=Object.keys(y);u("promotion_ids",w,{shouldDirty:!0,shouldTouch:!0}),d(y)},{searchParams:l,raw:j}=F({pageSize:P}),{promotions:S,count:a,isPending:h}=V({...l},{placeholderData:Q}),m=oe(),f=z(),{table:p}=W({data:S??[],columns:m,enableRowSelection:i=>i.original.campaign_id!==s.id,enablePagination:!0,getRowId:i=>i.id,pageSize:P,count:a,rowSelection:{state:g,updater:c},meta:{campaignId:s.id,currencyCode:(_=s==null?void 0:s.budget)==null?void 0:_.currency_code,budgetType:(v=s==null?void 0:s.budget)==null?void 0:v.type}}),I=r.handleSubmit(async i=>{await x({add:i.promotion_ids},{onSuccess:()=>{A.success(o("campaigns.promotions.toast.success",{count:i.promotion_ids.length})),t()},onError:y=>A.error(y.message)})});return e.jsx(n.Form,{form:r,children:e.jsxs($,{onSubmit:I,className:"flex h-full flex-col overflow-hidden",children:[e.jsx(n.Header,{children:e.jsx("div",{className:"flex items-center justify-end gap-x-2",children:r.formState.errors.promotion_ids&&e.jsx(q,{variant:"error",children:r.formState.errors.promotion_ids.message})})}),e.jsx(n.Body,{className:"flex size-full flex-col overflow-y-auto",children:e.jsx(Z,{table:p,count:a,columns:m,pageSize:P,isLoading:h,filters:f,orderBy:[{key:"code",label:o("fields.code")},{key:"type",label:o("fields.type")},{key:"created_at",label:o("fields.createdAt")},{key:"updated_at",label:o("fields.updatedAt")}],queryObject:j,layout:"fill",pagination:!0,search:"autofocus",noRecords:{message:o("campaigns.promotions.add.list.noRecordsMessage")}})}),e.jsx(n.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(n.Close,{asChild:!0,children:e.jsx(T,{size:"small",variant:"secondary",children:o("actions.cancel")})}),e.jsx(T,{size:"small",type:"submit",isLoading:b,children:o("actions.save")})]})})]})})},ee=U(),oe=()=>{const s=E(),{t:o}=k();return D.useMemo(()=>[ee.display({id:"select",header:({table:t})=>e.jsx(R,{checked:t.getIsSomePageRowsSelected()?"indeterminate":t.getIsAllPageRowsSelected(),onCheckedChange:r=>t.toggleAllRowsSelected(!!r)}),cell:({row:t,table:r})=>{var h,m,f;const{campaignId:u,currencyCode:x,budgetType:b}=r.options.meta,g=b==="spend",d=t.original.campaign_id===u,c=!!t.original.campaign_id&&t.original.campaign_id!==u,l=g&&((h=t.original.application_method)==null?void 0:h.currency_code)!==x,j=t.getIsSelected()||d,S=l||c,a=e.jsx(R,{checked:S?"indeterminate":j,disabled:d||c||l,onCheckedChange:p=>t.toggleSelected(!!p),onClick:p=>{p.stopPropagation()}});return c?e.jsx(C,{content:o("campaigns.promotions.alreadyAddedDiffCampaign",{name:(f=(m=t.original)==null?void 0:m.campaign)==null?void 0:f.name}),side:"right",children:a}):l?e.jsx(C,{content:o("campaigns.promotions.currencyMismatch"),side:"right",children:a}):d?e.jsx(C,{content:o("campaigns.promotions.alreadyAdded"),side:"right",children:a}):a}}),...s],[o,s])},De=()=>{const{id:s}=N(),{campaign:o,isError:t,error:r}=O(s);if(t)throw r;return e.jsx(n,{children:o&&e.jsx(Y,{campaign:o})})};export{De as Component};
