import{a8 as c,j as e,b as p,ab as h,ac as j,eL as y,t as n,B as i,H as f,T as v,x as a,y as g}from"./index-Dd5AIRt1.js";import{K as T}from"./chunk-CEEYZHMN-DuC6-VW1.js";import{R as r,u as b}from"./chunk-MDIOSTKB-DMuKuBFN.js";import"./prompt-DruOcYql.js";var C=c.object({value:c.string().min(1)}),F=()=>{const{t:s}=p(),{handleSuccess:d}=b(),l=h({defaultValues:{value:""},resolver:j(C)}),{mutateAsync:u,isPending:m}=y(),x=l.handleSubmit(async o=>{await u(o,{onSuccess:({product_type:t})=>{n.success(s("productTypes.create.successToast",{value:t.value})),d(`/settings/product-types/${t.id}`)},onError:t=>{n.error(t.message)}})});return e.jsx(r.Form,{form:l,children:e.jsxs(T,{onSubmit:x,className:"flex flex-col overflow-hidden",children:[e.jsx(r.Header,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(r.Close,{asChild:!0,children:e.jsx(i,{size:"small",variant:"secondary",children:s("actions.cancel")})}),e.jsx(i,{size:"small",variant:"primary",type:"submit",isLoading:m,children:s("actions.create")})]})}),e.jsx(r.Body,{className:"flex flex-col items-center overflow-y-auto p-16",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8",children:[e.jsxs("div",{children:[e.jsx(f,{children:s("productTypes.create.header")}),e.jsx(v,{size:"small",className:"text-ui-fg-subtle",children:s("productTypes.create.hint")})]}),e.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:e.jsx(a.Field,{control:l.control,name:"value",render:({field:o})=>e.jsxs(a.Item,{children:[e.jsx(a.Label,{children:s("productTypes.fields.value")}),e.jsx(a.Control,{children:e.jsx(g,{...o})}),e.jsx(a.ErrorMessage,{})]})})})]})})]})})},z=()=>e.jsx(r,{children:e.jsx(F,{})});export{z as Component};
