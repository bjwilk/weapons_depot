import{G as x}from"./chunk-7S6ZZ6CV-Qrml2lB4.js";import{G as j}from"./chunk-T4W4USY7-kvf0YQSU.js";import{a8 as l,R as v,aT as g,aa as S,j as e,b as y,ab as w,c_ as F,ac as b,t as _,H as Z,B as h}from"./index-Dd5AIRt1.js";import"./chunk-X5VECN6S-BxY4JtJC.js";import{c as A}from"./chunk-IEVUOT4K-Be69X5Hg.js";import"./chunk-XVFA73MY-BMaVn9_N.js";import"./lodash-BSdnRVRc.js";import"./chunk-5AU4DI7M-Ck_cVJRv.js";import"./chunk-E3YGDIJC-DNIXVXp2.js";import{K as E}from"./chunk-CEEYZHMN-DuC6-VW1.js";import{R as a,u as z,S as L}from"./chunk-MDIOSTKB-DMuKuBFN.js";import"./chunk-NOAFLTPV-BCedz2wy.js";import"./chunk-C76H5USB-DJZABeme.js";import"./index-391Gg0Ss.js";import"./checkbox-C6j9JG97.js";import"./x-mark-mini-BWMGrVIU.js";import"./chunk-VDODP7YI-D_vJbkAy.js";import"./chunk-YEDAFXMB-D7buONTO.js";import"./chunk-AOFGTNG6-CmvDtUlD.js";import"./chunk-WX2SMNCD-BJTVtiMv.js";import"./plus-mini-BwJJ7XIZ.js";import"./command-bar-D-8Acngt.js";import"./index-C70Cb1KD.js";import"./chunk-QAF7PVQE-UJeTHqTb.js";import"./format-BkG7sM8d.js";import"./date-picker-DpqbO765.js";import"./popover-D6P9NTCz.js";import"./triangle-left-mini-CZpnYzgZ.js";import"./prompt-DruOcYql.js";var N=l.object({countries:l.array(l.object({iso_2:l.string().min(2),display_name:l.string()})).min(1)});function C({fulfillmentSetId:n,locationId:d,zone:t}){const{t:o}=y(),{handleSuccess:u}=z(),r=w({defaultValues:{countries:t.geo_zones.map(i=>{const s=F.find(m=>m.iso_2===i.country_code);return{iso_2:i.country_code,display_name:(s==null?void 0:s.display_name)||i.country_code.toUpperCase()}})},resolver:b(N)}),{mutateAsync:p,isPending:f}=A(n,t.id),c=r.handleSubmit(async i=>{await p({geo_zones:i.countries.map(({iso_2:s})=>({country_code:s,type:"country"}))},{onSuccess:()=>{_.success(o("stockLocations.serviceZones.manageAreas.successToast",{name:t.name})),u(`/settings/locations/${d}`)},onError:s=>{_.error(s.message)}})});return e.jsx(a.Form,{form:r,children:e.jsxs(E,{className:"flex h-full flex-col overflow-hidden",onSubmit:c,children:[e.jsx(a.Header,{}),e.jsx(a.Body,{className:"flex flex-1 flex-col overflow-auto",children:e.jsxs(L,{id:j,children:[e.jsx("div",{className:"flex flex-col items-center p-16",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8",children:[e.jsx(Z,{children:o("stockLocations.serviceZones.manageAreas.header",{name:t.name})}),e.jsx(x,{form:r})]})}),e.jsx(x.AreaDrawer,{form:r})]})}),e.jsx(a.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(a.Close,{asChild:!0,children:e.jsx(h,{variant:"secondary",size:"small",children:o("actions.cancel")})}),e.jsx(h,{type:"submit",size:"small",isLoading:f,children:o("actions.save")})]})})]})})}var ce=()=>{var i,s;const{location_id:n,fset_id:d,zone_id:t}=v(),{stock_location:o,isPending:u,isFetching:r,isError:p,error:f}=g(n,{fields:"*fulfillment_sets.service_zones.geo_zones,fulfillment_sets.service_zones.name"}),c=(s=(i=o==null?void 0:o.fulfillment_sets)==null?void 0:i.find(m=>m.id===d))==null?void 0:s.service_zones.find(m=>m.id===t);if(!u&&!r&&!c)throw S({message:`Service zone with ID ${t} was not found`},404);if(p)throw f;return e.jsx(a,{prev:`/settings/locations/${n}`,children:c&&e.jsx(C,{zone:c,fulfillmentSetId:d,locationId:n})})};export{ce as Component};
