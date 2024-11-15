import{t as T}from"./chunk-3ISBJK7K-BDgyZg6W.js";import{S as I}from"./chunk-PBUST3XI-DfLvXGp7.js";import{K as L}from"./chunk-CEEYZHMN-DuC6-VW1.js";import{b as a,u as N}from"./chunk-MDIOSTKB-DMuKuBFN.js";import{a4 as P,a5 as w,a6 as i,a7 as D,R as M,b,S as R,j as e,H as z,a as B,n as H,V,x as s,y as x,T as A,F as K,B as f,$ as U}from"./index-Dd5AIRt1.js";import{S as d}from"./select-C2y3EMGH.js";import{T as _}from"./textarea-BB73N5IP.js";import"./chunk-6GU6IDUA-CDc7wW5L.js";import"./prompt-DruOcYql.js";import"./triangles-mini-5flKdGPe.js";var $=P({status:w(["draft","published","proposed","rejected"]),title:i().min(1),subtitle:i().optional(),handle:i().min(1),material:i().optional(),description:i().optional(),discountable:D()}),O=({product:l})=>{const{t}=b(),{handleSuccess:c}=N(),{getFormFields:m,getFormConfigs:u}=B(),j=m("product","edit"),g=u("product","edit"),n=H({defaultValues:{status:l.status,title:l.title,material:l.material||"",subtitle:l.subtitle||"",handle:l.handle||"",description:l.description||"",discountable:l.discountable},schema:$,configs:g,data:l}),{mutateAsync:F,isPending:y}=V(l.id),E=n.handleSubmit(async r=>{const{title:h,discountable:p,handle:o,status:v,...C}=r,S=T(C);await F({title:h,discountable:p,handle:o,status:v,...S},{onSuccess:()=>{c()}})});return e.jsx(a.Form,{form:n,children:e.jsxs(L,{onSubmit:E,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(a.Body,{className:"flex flex-1 flex-col gap-y-8 overflow-y-auto",children:e.jsxs("div",{className:"flex flex-col gap-y-8",children:[e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(s.Field,{control:n.control,name:"status",render:({field:{onChange:r,ref:h,...p}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:t("fields.status")}),e.jsx(s.Control,{children:e.jsxs(d,{...p,onValueChange:r,children:[e.jsx(d.Trigger,{ref:h,children:e.jsx(d.Value,{})}),e.jsx(d.Content,{children:["draft","published","proposed","rejected"].map(o=>e.jsx(d.Item,{value:o,children:t(`products.productStatus.${o}`)},o))})]})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:n.control,name:"title",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:t("fields.title")}),e.jsx(s.Control,{children:e.jsx(x,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:n.control,name:"subtitle",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:t("fields.subtitle")}),e.jsx(s.Control,{children:e.jsx(x,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:n.control,name:"handle",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:t("fields.handle")}),e.jsx(s.Control,{children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 z-10 flex w-8 items-center justify-center border-r",children:e.jsx(A,{className:"text-ui-fg-muted",size:"small",leading:"compact",weight:"plus",children:"/"})}),e.jsx(x,{...r,className:"pl-10"})]})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:n.control,name:"material",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:t("fields.material")}),e.jsx(s.Control,{children:e.jsx(x,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:n.control,name:"description",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:t("fields.description")}),e.jsx(s.Control,{children:e.jsx(_,{...r})}),e.jsx(s.ErrorMessage,{})]})})]}),e.jsx(I,{control:n.control,name:"discountable",label:t("fields.discountable"),description:t("products.discountableHint")}),e.jsx(K,{fields:j,form:n})]})}),e.jsx(a.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(a.Close,{asChild:!0,children:e.jsx(f,{size:"small",variant:"secondary",children:t("actions.cancel")})}),e.jsx(f,{size:"small",type:"submit",isLoading:y,children:t("actions.save")})]})})]})})},se=()=>{const{id:l}=M(),{t}=b(),{product:c,isLoading:m,isError:u,error:j}=R(l,{fields:U});if(u)throw j;return e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsx(a.Title,{asChild:!0,children:e.jsx(z,{children:t("products.editProduct")})})}),!m&&c&&e.jsx(O,{product:c})]})};export{se as Component};
