import{V as p}from"./chunk-F6ZOHZVB-BmoSeVZh.js";import{a4 as j,a6 as y,R as f,b as u,eV as g,j as e,H as b,ab as K,ac as v,eY as E,t as m,x as i,y as F,B as x}from"./index-Dd5AIRt1.js";import{K as A}from"./chunk-CEEYZHMN-DuC6-VW1.js";import{b as s,u as C}from"./chunk-MDIOSTKB-DMuKuBFN.js";import"./prompt-DruOcYql.js";var M=j({title:y().min(1)}),S=({apiKey:r})=>{const{t:a}=u(),{handleSuccess:n}=C(),t=K({defaultValues:{title:r.title},resolver:v(M)}),{mutateAsync:o,isPending:l}=E(r.id),h=t.handleSubmit(async c=>{await o(c,{onSuccess:({api_key:d})=>{m.success(a("apiKeyManagement.edit.successToast",{title:d.title})),n()},onError:d=>{m.error(d.message)}})});return e.jsx(s.Form,{form:t,children:e.jsxs(A,{onSubmit:h,className:"flex flex-1 flex-col",children:[e.jsx(s.Body,{children:e.jsx("div",{className:"flex flex-col gap-y-4",children:e.jsx(i.Field,{control:t.control,name:"title",render:({field:c})=>e.jsxs(i.Item,{children:[e.jsx(i.Label,{children:a("fields.title")}),e.jsx(i.Control,{children:e.jsx(F,{...c})}),e.jsx(i.ErrorMessage,{})]})})})}),e.jsx(s.Footer,{children:e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(s.Close,{asChild:!0,children:e.jsx(x,{size:"small",variant:"secondary",children:a("actions.cancel")})}),e.jsx(x,{size:"small",type:"submit",isLoading:l,children:a("actions.save")})]})})]})})},B=()=>{const{id:r}=f(),{t:a}=u(),{api_key:n,isLoading:t,isError:o,error:l}=g(r);if(o)throw l;return e.jsxs(s,{children:[e.jsxs(s.Header,{children:[e.jsx(s.Title,{asChild:!0,children:e.jsx(b,{children:a("apiKeyManagement.edit.header")})}),e.jsx(s.Description,{asChild:!0,children:e.jsx(p,{children:a("apiKeyManagement.edit.description")})})]}),!t&&!!n&&e.jsx(S,{apiKey:n})]})};export{B as Component};
