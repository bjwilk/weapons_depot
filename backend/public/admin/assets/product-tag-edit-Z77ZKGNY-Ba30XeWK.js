import{a8 as m,R as g,b as j,eH as p,j as s,H as f,ab as v,ac as b,eI as T,t as x,x as t,y,B as h}from"./index-Dd5AIRt1.js";import{K as P}from"./chunk-CEEYZHMN-DuC6-VW1.js";import{b as e,u as E}from"./chunk-MDIOSTKB-DMuKuBFN.js";import"./prompt-DruOcYql.js";var F=m.object({value:m.string().min(1)}),S=({productTag:o})=>{const{t:r}=j(),{handleSuccess:n}=E(),a=v({defaultValues:{value:o.value},resolver:b(F)}),{mutateAsync:i,isPending:l}=T(o.id),c=a.handleSubmit(async d=>{await i(d,{onSuccess:({product_tag:u})=>{x.success(r("productTags.edit.successToast",{value:u.value})),n()},onError:u=>{x.error(u.message)}})});return s.jsx(e.Form,{form:a,children:s.jsxs(P,{className:"flex size-full flex-col overflow-hidden",onSubmit:c,children:[s.jsx(e.Body,{className:"flex flex-1 flex-col overflow-auto",children:s.jsx(t.Field,{control:a.control,name:"value",render:({field:d})=>s.jsxs(t.Item,{children:[s.jsx(t.Label,{children:r("productTags.fields.value")}),s.jsx(t.Control,{children:s.jsx(y,{...d})}),s.jsx(t.ErrorMessage,{})]})})}),s.jsx(e.Footer,{children:s.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.jsx(e.Close,{asChild:!0,children:s.jsx(h,{variant:"secondary",size:"small",type:"button",children:r("actions.cancel")})}),s.jsx(h,{size:"small",type:"submit",isLoading:l,children:r("actions.save")})]})})]})})},N=()=>{const{id:o}=g(),{t:r}=j(),{product_tag:n,isPending:a,isError:i,error:l}=p(o),c=!a&&!!n;if(i)throw l;return s.jsxs(e,{children:[s.jsxs(e.Header,{children:[s.jsx(e.Title,{asChild:!0,children:s.jsx(f,{children:r("productTags.edit.header")})}),s.jsx(e.Description,{className:"sr-only",children:r("productTags.edit.subtitle")})]}),c&&s.jsx(S,{productTag:n})]})};export{N as Component};
