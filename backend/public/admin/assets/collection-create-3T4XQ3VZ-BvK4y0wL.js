import{H as j}from"./chunk-7OYLCEKK-DKNB_C3L.js";import{a4 as h,a6 as n,j as e,b as p,ab as f,ac as C,dz as g,t as i,B as c,H as y,T as b,x as s,y as v}from"./index-Dd5AIRt1.js";import{K as F}from"./chunk-CEEYZHMN-DuC6-VW1.js";import{R as o,u as S}from"./chunk-MDIOSTKB-DMuKuBFN.js";import"./prompt-DruOcYql.js";var H=h({title:n().min(1),handle:n().optional()}),T=()=>{const{t:l}=p(),{handleSuccess:d}=S(),r=f({defaultValues:{title:"",handle:""},resolver:C(H)}),{mutateAsync:m,isPending:x}=g(),u=r.handleSubmit(async t=>{await m(t,{onSuccess:({collection:a})=>{d(`/collections/${a.id}`),i.success(l("collections.createSuccess"))},onError:a=>{i.error(a.message)}})});return e.jsx(o.Form,{form:r,children:e.jsxs(F,{onSubmit:u,children:[e.jsx(o.Header,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(o.Close,{asChild:!0,children:e.jsx(c,{size:"small",variant:"secondary",children:l("actions.cancel")})}),e.jsx(c,{size:"small",variant:"primary",type:"submit",isLoading:x,children:l("actions.create")})]})}),e.jsx(o.Body,{className:"flex flex-col items-center p-16",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8",children:[e.jsxs("div",{children:[e.jsx(y,{children:l("collections.createCollection")}),e.jsx(b,{size:"small",className:"text-ui-fg-subtle",children:l("collections.createCollectionHint")})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[e.jsx(s.Field,{control:r.control,name:"title",render:({field:t})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:l("fields.title")}),e.jsx(s.Control,{children:e.jsx(v,{autoComplete:"off",...t})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:r.control,name:"handle",render:({field:t})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,tooltip:l("collections.handleTooltip"),children:l("fields.handle")}),e.jsx(s.Control,{children:e.jsx(j,{...t})}),e.jsx(s.ErrorMessage,{})]})})]})]})})]})})},R=()=>e.jsx(o,{children:e.jsx(T,{})});export{R as Component};
