import{f as z}from"./chunk-3WXBLS2P-MKHj1mOQ.js";import{B as T}from"./chunk-BKJC5BGQ-ygDgD9XQ.js";import{D as _}from"./chunk-W5NWKBC6-Duwa9HEd.js";import{g as P}from"./chunk-KDXAFTVE-BIJQy-Te.js";import{f as A}from"./chunk-OV5NMSY6-CzJZ0JaW.js";import{q as C,d as R,R as S,dn as B,dj as m,a as q,j as e,U as E,dc as L,s as $,b as g,H as f,A as h,u as k,de as I,T as l,Z as x}from"./index-Dd5AIRt1.js";import{T as u}from"./chunk-UR2E444G-D2Lbw7mb.js";import{A as V}from"./chunk-3IW4HYUP-DD0tWyEL.js";import{N as D}from"./chunk-WX2SMNCD-BJTVtiMv.js";import{P as j}from"./pencil-square-rz5ZnZ22.js";import{T as O}from"./trash-B_yspgao.js";import{u as Q}from"./use-prompt-BS3ABRGp.js";import{C as y}from"./container-ChTfB2gf.js";import{S as U}from"./status-badge-DiHiARkQ.js";import{C as H}from"./copy-CBdtvFZ0.js";import"./chunk-QAF7PVQE-UJeTHqTb.js";import"./format-BkG7sM8d.js";import"./Trans-CM9vMdxp.js";import"./x-mark-mini-BWMGrVIU.js";import"./plus-mini-BwJJ7XIZ.js";import"./prompt-DruOcYql.js";var K=s=>({queryKey:L.detail(s),queryFn:async()=>$.admin.promotion.retrieve(s)}),ye=async({params:s})=>{const t=s.id,a=K(t);return C.getQueryData(a.queryKey)??await C.fetchQuery(a)},M=({campaign:s})=>e.jsxs("div",{className:"flex flex-col gap-y-3",children:[e.jsxs("div",{className:"text-ui-fg-muted flex items-center gap-x-1.5",children:[e.jsx(l,{size:"small",weight:"plus",className:"text-ui-fg-base",children:s.name}),e.jsx(l,{size:"small",weight:"plus",children:"·"}),e.jsx(l,{size:"small",weight:"plus",children:s.campaign_identifier})]}),e.jsx(_,{startsAt:s.starts_at,endsAt:s.ends_at,showTime:!0})]}),J=({campaign:s})=>{const{t}=g(),{id:a}=S(),i=[{label:t("actions.edit"),to:"add-to-campaign",icon:e.jsx(j,{})}];return s&&i.unshift({label:t("promotions.campaign.actions.goToCampaign"),to:`/campaigns/${s.id}`,icon:e.jsx(V,{})}),e.jsxs(y,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(f,{level:"h2",children:t("promotions.fields.campaign")}),e.jsx(h,{groups:[{actions:i}]})]}),s?e.jsx(M,{campaign:s}):e.jsx(D,{className:"h-[180px] pt-4 text-center",title:"Not part of a campaign",message:"Add this promotion to an existing campaign",action:{to:`/promotions/${a}/add-to-campaign`,label:"Add to Campaign"},buttonVariant:"transparentIconLeft"})]})};function W({rule:s}){var t;return e.jsx("div",{className:"bg-ui-bg-subtle shadow-borders-base align-center flex justify-around rounded-md p-2",children:e.jsxs("div",{className:"text-ui-fg-subtle txt-compact-xsmall flex items-center whitespace-nowrap",children:[e.jsx(x,{size:"2xsmall",className:"txt-compact-xsmall-plus tag-neutral-text mx-1 inline-block truncate",children:s.attribute_label},"rule-attribute"),e.jsx("span",{className:"txt-compact-2xsmall mx-1 inline-block",children:s.operator_label}),e.jsx(T,{inline:!0,className:"!txt-compact-small-plus",list:s.field_type==="number"?[s.values]:(t=s.values)==null?void 0:t.map(a=>a.label)})]})})}var p=({rules:s,ruleType:t})=>{const{t:a}=g();return e.jsxs(y,{className:"p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx("div",{className:"flex flex-col",children:e.jsx(f,{children:a(`promotions.fields.conditions.${t}.title`)})}),e.jsx(h,{groups:[{actions:[{icon:e.jsx(j,{}),label:a("actions.edit"),to:`${t}/edit`}]}]})]}),e.jsxs("div",{className:"text-ui-fg-subtle flex flex-col gap-2 px-6 pb-4 pt-2",children:[!s.length&&e.jsx(D,{className:"h-[180px]",title:a("general.noRecordsTitle"),message:a("promotions.conditions.list.noRecordsMessage"),action:{to:`${t}/edit`,label:a("promotions.conditions.add")},buttonVariant:"transparentIconLeft"}),s.map(i=>e.jsx(W,{rule:i},`${i.id}-${i.attribute}`))]})]})};function F(s){var a,i,r,n;const t=(a=s.application_method)==null?void 0:a.value;if(!t)return null;if(((i=s.application_method)==null?void 0:i.type)==="fixed"){const o=(r=s.application_method)==null?void 0:r.currency_code;return o?A(t,o):null}else if(((n=s.application_method)==null?void 0:n.type)==="percentage")return z(t);return null}var G=({promotion:s})=>{var b,v,N,w;const{t}=g(),a=Q(),i=k(),{mutateAsync:r}=I(s.id),n=async()=>{await a({title:t("general.areYouSure"),description:t("promotions.deleteWarning",{code:s.code}),verificationInstruction:t("general.typeToConfirm"),verificationText:s.code,confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&await r(void 0,{onSuccess:()=>{i("/promotions",{replace:!0})}})},[o,d]={DISABLED:["grey",t("statuses.disabled")],ACTIVE:["green",t("statuses.active")],SCHEDULED:["orange",t("statuses.scheduled")],EXPIRED:["red",t("statuses.expired")]}[P(s)],c=F(s);return e.jsxs(y,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx("div",{className:"flex flex-col",children:e.jsx(f,{children:s.code})}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(U,{color:o,children:d}),e.jsx(h,{groups:[{actions:[{icon:e.jsx(j,{}),label:t("actions.edit"),to:`/promotions/${s.id}/edit`}]},{actions:[{icon:e.jsx(O,{}),label:t("actions.delete"),onClick:n}]}]})]})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4",children:[e.jsx(l,{size:"small",weight:"plus",leading:"compact",children:t("promotions.fields.campaign")}),e.jsx(l,{size:"small",leading:"compact",className:"text-pretty",children:s.is_automatic?t("promotions.form.method.automatic.title"):t("promotions.form.method.code.title")})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(l,{size:"small",weight:"plus",leading:"compact",children:t("fields.code")}),e.jsx(H,{content:s.code,asChild:!0,children:e.jsx(x,{size:"2xsmall",rounded:"full",className:"cursor-pointer text-pretty",children:s.code})})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4",children:[e.jsx(l,{size:"small",weight:"plus",leading:"compact",children:t("promotions.fields.type")}),e.jsx(l,{size:"small",leading:"compact",className:"text-pretty capitalize",children:s.type})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4",children:[e.jsx(l,{size:"small",weight:"plus",leading:"compact",children:t("promotions.fields.value")}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(l,{className:"inline",size:"small",leading:"compact",children:c||"-"}),((b=s==null?void 0:s.application_method)==null?void 0:b.type)==="fixed"&&e.jsx(x,{size:"2xsmall",rounded:"full",children:(N=(v=s==null?void 0:s.application_method)==null?void 0:v.currency_code)==null?void 0:N.toUpperCase()})]})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4",children:[e.jsx(l,{size:"small",weight:"plus",leading:"compact",children:t("promotions.fields.allocation")}),e.jsx(l,{size:"small",leading:"compact",className:"text-pretty capitalize",children:(w=s.application_method)==null?void 0:w.allocation})]})]})},be=()=>{const s=R(),{id:t}=S(),{promotion:a,isLoading:i}=B(t,{initialData:s}),r={};(a==null?void 0:a.type)==="buyget"&&(r.promotion_type=a.type);const{rules:n}=m(t,"rules",r),{rules:o}=m(t,"target-rules",r),{rules:d}=m(t,"buy-rules",r),{getWidgets:c}=q();return i||!a?e.jsx(E,{mainSections:3,sidebarSections:1,showJSON:!0}):e.jsxs(u,{data:a,widgets:{after:c("promotion.details.after"),before:c("promotion.details.before"),sideAfter:c("promotion.details.side.after"),sideBefore:c("promotion.details.side.before")},hasOutlet:!0,showJSON:!0,children:[e.jsxs(u.Main,{children:[e.jsx(G,{promotion:a}),e.jsx(p,{rules:n||[],ruleType:"rules"}),e.jsx(p,{rules:o||[],ruleType:"target-rules"}),a.type==="buyget"&&e.jsx(p,{rules:d||[],ruleType:"buy-rules"})]}),e.jsx(u.Sidebar,{children:e.jsx(J,{campaign:a.campaign})})]})};export{be as Component,ye as loader};