import{P}from"./chunk-PNOZVISH-CFml_iN4.js";import{a8 as m,b as S,R as E,dJ as F,dI as T,j as s,H as D,ab as I,ac as M,z as k,dM as G,t as L,x as r,D as C,m as H,bE as O,B as N,T as z,I as R,X as B}from"./index-Dd5AIRt1.js";import"./chunk-XVFA73MY-BMaVn9_N.js";import"./lodash-BSdnRVRc.js";import"./chunk-5AU4DI7M-Ck_cVJRv.js";import"./chunk-E3YGDIJC-DNIXVXp2.js";import{K}from"./chunk-CEEYZHMN-DuC6-VW1.js";import{b as c,u as V,a as X,c as u}from"./chunk-MDIOSTKB-DMuKuBFN.js";import{D as A}from"./date-picker-DpqbO765.js";import"./chunk-QIWEFQ5Y-C8tDqCDz.js";import"./chunk-C76H5USB-DJZABeme.js";import"./chunk-OI7BBNYW-By6QQi9v.js";import"./chunk-P3UUX2T6-BjdsmG3m.js";import"./index-391Gg0Ss.js";import"./checkbox-C6j9JG97.js";import"./chunk-YEDAFXMB-D7buONTO.js";import"./chunk-AOFGTNG6-CmvDtUlD.js";import"./chunk-WX2SMNCD-BJTVtiMv.js";import"./plus-mini-BwJJ7XIZ.js";import"./command-bar-D-8Acngt.js";import"./index-C70Cb1KD.js";import"./chunk-QAF7PVQE-UJeTHqTb.js";import"./format-BkG7sM8d.js";import"./x-mark-mini-BWMGrVIU.js";import"./prompt-DruOcYql.js";import"./popover-D6P9NTCz.js";import"./triangle-left-mini-CZpnYzgZ.js";var J=m.object({ends_at:m.date().nullable(),starts_at:m.date().nullable(),customer_group_id:m.array(m.object({id:m.string(),name:m.string()}))}),w="cg",U=({priceList:d,customerGroups:g})=>{const{t:e}=S(),{handleSuccess:p}=V(),{setIsOpen:h}=X(),l=I({defaultValues:{ends_at:d.ends_at?new Date(d.ends_at):null,starts_at:d.starts_at?new Date(d.starts_at):null,customer_group_id:g},resolver:M(J)}),{fields:t,remove:x,append:j}=k({control:l.control,name:"customer_group_id",keyName:"cg_id"}),b=i=>{if(!i.length){l.setValue("customer_group_id",[]),h(w,!1);return}const o=i.map(n=>n.id),a=i.filter(n=>!t.some(f=>f.id===n.id));for(const n of t)o.includes(n.id)||x(t.indexOf(n));j(a),h(w,!1)},{mutateAsync:y}=G(d.id),v=l.handleSubmit(async i=>{var n,f;const o=i.customer_group_id.map(_=>_.id),a={...d.rules};o.length?a.customer_group_id=o:delete a.customer_group_id,await y({starts_at:((n=i.starts_at)==null?void 0:n.toISOString())||null,ends_at:((f=i.ends_at)==null?void 0:f.toISOString())||null,rules:a},{onSuccess:()=>{L.success(e("priceLists.configuration.edit.successToast")),p()},onError:_=>L.error(_.message)})});return s.jsxs(c.Form,{form:l,children:[s.jsx(c.Description,{className:"sr-only",children:e("priceLists.configuration.edit.description")}),s.jsxs(K,{className:"flex flex-1 flex-col overflow-hidden",onSubmit:v,children:[s.jsxs(c.Body,{className:"flex flex-1 flex-col gap-y-8 overflow-auto",children:[s.jsx(r.Field,{control:l.control,name:"starts_at",render:({field:i})=>s.jsxs(r.Item,{children:[s.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[s.jsxs("div",{className:"flex flex-col",children:[s.jsx(r.Label,{optional:!0,children:e("priceLists.fields.startsAt.label")}),s.jsx(r.Hint,{children:e("priceLists.fields.startsAt.hint")})]}),s.jsx(r.Control,{children:s.jsx(A,{granularity:"minute",shouldCloseOnSelect:!1,...i})})]}),s.jsx(r.ErrorMessage,{})]})}),s.jsx(C,{}),s.jsx(r.Field,{control:l.control,name:"ends_at",render:({field:i})=>s.jsxs(r.Item,{children:[s.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[s.jsxs("div",{className:"flex flex-col",children:[s.jsx(r.Label,{optional:!0,children:e("priceLists.fields.endsAt.label")}),s.jsx(r.Hint,{children:e("priceLists.fields.endsAt.hint")})]}),s.jsx(r.Control,{children:s.jsx(A,{granularity:"minute",shouldCloseOnSelect:!1,...i})})]}),s.jsx(r.ErrorMessage,{})]})}),s.jsx(C,{}),s.jsx(r.Field,{control:l.control,name:"customer_group_id",render:({field:i})=>s.jsxs(r.Item,{children:[s.jsxs("div",{children:[s.jsx(r.Label,{optional:!0,children:e("priceLists.fields.customerAvailability.label")}),s.jsx(r.Hint,{children:e("priceLists.fields.customerAvailability.hint")})]}),s.jsx(r.Control,{children:s.jsxs("div",{className:H("bg-ui-bg-component shadow-elevation-card-rest transition-fg grid gap-1.5 rounded-xl py-1.5","aria-[invalid='true']:shadow-borders-error"),role:"application",ref:i.ref,children:[s.jsxs("div",{className:"text-ui-fg-subtle grid gap-1.5 px-1.5 md:grid-cols-2",children:[s.jsx("div",{className:"bg-ui-bg-field shadow-borders-base txt-compact-small rounded-md px-2 py-1.5",children:e("priceLists.fields.customerAvailability.attribute")}),s.jsx("div",{className:"bg-ui-bg-field shadow-borders-base txt-compact-small rounded-md px-2 py-1.5",children:e("operators.in")})]}),s.jsx("div",{className:"flex items-center gap-1.5 px-1.5",children:s.jsxs(u,{id:w,children:[s.jsx(u.Trigger,{asChild:!0,children:s.jsxs("button",{type:"button",className:"bg-ui-bg-field shadow-borders-base txt-compact-small text-ui-fg-muted flex flex-1 items-center gap-x-2 rounded-md px-2 py-1.5",children:[s.jsx(O,{}),e("priceLists.fields.customerAvailability.placeholder")]})}),s.jsx(u.Trigger,{asChild:!0,children:s.jsx(N,{variant:"secondary",children:e("actions.browse")})}),s.jsxs(u.Content,{children:[s.jsxs(u.Header,{children:[s.jsx(u.Title,{asChild:!0,children:s.jsx(D,{children:e("priceLists.fields.customerAvailability.header")})}),s.jsx(u.Description,{className:"sr-only",children:e("priceLists.fields.customerAvailability.hint")})]}),s.jsx(P,{type:"drawer",setState:b,state:t})]})]})}),t.length>0?s.jsxs("div",{className:"flex flex-col gap-y-1.5",children:[s.jsx(C,{variant:"dashed"}),s.jsx("div",{className:"flex flex-col gap-y-1.5 px-1.5",children:t.map((o,a)=>s.jsxs("div",{className:"bg-ui-bg-field-component shadow-borders-base flex items-center justify-between gap-2 rounded-md px-2 py-0.5",children:[s.jsx(z,{size:"small",leading:"compact",children:o.name}),s.jsx(R,{size:"small",variant:"transparent",type:"button",onClick:()=>x(a),children:s.jsx(B,{})})]},o.cg_id))})]}):null]})}),s.jsx(r.ErrorMessage,{})]})})]}),s.jsx(c.Footer,{className:"shrink-0",children:s.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.jsx(c.Close,{asChild:!0,children:s.jsx(N,{size:"small",variant:"secondary",children:e("actions.cancel")})}),s.jsx(N,{size:"small",type:"submit",children:e("actions.save")})]})})]})]})},vs=()=>{const{t:d}=S(),{id:g}=E(),{price_list:e,isPending:p,isError:h,error:l}=F(g),t=e==null?void 0:e.rules.customer_group_id,{customer_groups:x,isPending:j,isError:b,error:y}=T({id:t},{enabled:!!(t!=null&&t.length)}),v=(x==null?void 0:x.map(a=>({id:a.id,name:a.name})))||[],i=p?!1:!(t!=null&&t.length&&j),o=!p&&!!e&&i;if(h)throw l;if(b)throw y;return s.jsxs(c,{children:[s.jsx(c.Header,{children:s.jsx(c.Title,{asChild:!0,children:s.jsx(D,{children:d("priceLists.configuration.edit.header")})})}),o&&s.jsx(U,{priceList:e,customerGroups:v})]})};export{vs as Component};
