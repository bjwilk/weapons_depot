import{T as f,u as R,a as v,b as h}from"./chunk-DRGBZG4M-D4pCUdZv.js";import{T as y}from"./chunk-ILELZIT2-Do2bbUDT.js";import{R as T,d as j,f5 as b,a as S,j as a,dB as D,q as d,b as c,W as P,Z as _,H as w,f3 as q,s as C,k as E}from"./index-Dd5AIRt1.js";import{a as O}from"./chunk-66JYR4ST-BEpN3PT8.js";import{S as k}from"./chunk-UR2E444G-D2Lbw7mb.js";import"./chunk-3IW4HYUP-DD0tWyEL.js";import"./lodash-BSdnRVRc.js";import{C as m}from"./container-ChTfB2gf.js";import"./chunk-C76H5USB-DJZABeme.js";import"./chunk-VNYVDWWH-aQIGveY2.js";import"./chunk-3WXBLS2P-MKHj1mOQ.js";import"./chunk-YEDAFXMB-D7buONTO.js";import"./chunk-AOFGTNG6-CmvDtUlD.js";import"./chunk-WX2SMNCD-BJTVtiMv.js";import"./plus-mini-BwJJ7XIZ.js";import"./index-391Gg0Ss.js";import"./pencil-square-rz5ZnZ22.js";import"./trash-B_yspgao.js";import"./arrow-down-right-mini-CEGMdtWm.js";import"./status-badge-DiHiARkQ.js";import"./chunk-EQTBJSBZ-DE1Rrqiz.js";import"./react-country-flag.esm-CUepnQuQ.js";import"./use-prompt-BS3ABRGp.js";import"./prompt-DruOcYql.js";import"./Trans-CM9vMdxp.js";import"./x-mark-mini-BWMGrVIU.js";var L=({taxRegion:r})=>{const{t}=c(),e=r.tax_rates.filter(i=>i.is_default===!0),s=e.length===0;return a.jsxs(m,{className:"divide-y p-0",children:[a.jsx(y,{taxRegion:r,type:"header",asLink:!1,badge:s&&a.jsx(P,{content:t("taxRegions.fields.noDefaultRate.tooltip"),children:a.jsx(_,{color:"orange",size:"2xsmall",className:"cursor-default",children:t("taxRegions.fields.noDefaultRate.label")})})}),e.map(i=>a.jsx(f,{taxRate:i,isSublevelTaxRate:!0},i.id))]})},x=10,l="o",N=({taxRegion:r})=>{const{t}=c(),{searchParams:e,raw:s}=R({pageSize:x,prefix:l}),{tax_rates:i,count:o,isPending:n,isError:p,error:u}=O({...e,tax_region_id:r.id,is_default:!1},{placeholderData:E}),{table:g}=v({count:o,data:i,pageSize:x,prefix:l});if(p)throw u;return a.jsx(m,{className:"p-0",children:a.jsx(h,{isPending:n,table:g,count:o,action:{label:t("actions.create"),to:"overrides/create"},queryObject:s,prefix:l,children:a.jsx(w,{level:"h2",children:t("taxRegions.taxOverrides.header")})})})},de=()=>{const{province_id:r}=T(),t=j(),{tax_region:e,isLoading:s,isError:i,error:o}=b(r,void 0,{initialData:t}),{getWidgets:n}=S();if(s||!e)return a.jsx(D,{sections:2,showJSON:!0});if(i)throw o;return a.jsxs(k,{data:e,showJSON:!0,widgets:{after:n("tax.details.after"),before:n("tax.details.before")},children:[a.jsx(L,{taxRegion:e}),a.jsx(N,{taxRegion:e})]})},Q=r=>({queryKey:q.detail(r),queryFn:async()=>C.admin.taxRegion.retrieve(r)}),xe=async({params:r})=>{const t=r.province_id,e=Q(t);return d.getQueryData(e.queryKey)??await d.fetchQuery(e)};export{de as Component,de as TaxRegionDetail,xe as loader};
