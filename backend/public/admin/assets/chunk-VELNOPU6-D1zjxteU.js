import{N as u,a as m,D as p,b}from"./chunk-GA34GXNI-Cnv2ew6n.js";import{T as f}from"./chunk-OI7BBNYW-By6QQi9v.js";import{S as x}from"./chunk-ADOCJB6L-CtbHuMEy.js";import{b as c,r as _,j as r}from"./index-Dd5AIRt1.js";import{c as h}from"./index-391Gg0Ss.js";import{u as j}from"./chunk-C76H5USB-DJZABeme.js";var t=h(),g=()=>{const{t:e}=c();return _.useMemo(()=>[t.accessor("name",{header:()=>r.jsx(u,{}),cell:({getValue:a})=>r.jsx(m,{name:a()})}),t.accessor("description",{header:()=>r.jsx(p,{}),cell:({getValue:a})=>r.jsx(b,{description:a()})}),t.accessor("is_disabled",{header:()=>r.jsx(f,{text:e("fields.status")}),cell:({getValue:a})=>{const s=a();return r.jsx(x,{color:s?"grey":"green",children:e(s?"general.disabled":"general.enabled")})}})],[e])},k=({prefix:e,pageSize:a=20})=>{const s=j(["offset","q","order","created_at","updated_at","is_disabled"],e),{offset:l,created_at:d,updated_at:o,is_disabled:i,...n}=s;return{searchParams:{limit:a,offset:l?Number(l):0,created_at:d?JSON.parse(d):void 0,updated_at:o?JSON.parse(o):void 0,is_disabled:i==="true"?!0:i==="false"?!1:void 0,...n},raw:s}},D=()=>{const{t:e}=c();return[{label:e("fields.createdAt"),key:"created_at"},{label:e("fields.updatedAt"),key:"updated_at"}].map(s=>({key:s.key,label:s.label,type:"date"}))};export{D as a,g as b,k as u};
