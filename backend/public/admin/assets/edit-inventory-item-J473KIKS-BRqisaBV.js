import{K as f}from"./chunk-CEEYZHMN-DuC6-VW1.js";import{b as o,u as y}from"./chunk-MDIOSTKB-DMuKuBFN.js";import{a8 as m,R as I,b as h,d$ as p,j as e,H as g,ab as b,ac as E,e4 as F,t as u,x as s,y as x,B as j}from"./index-Dd5AIRt1.js";import"./prompt-DruOcYql.js";var S=m.object({title:m.string().optional(),sku:m.string().min(1)}),k=t=>({title:t.title??void 0,sku:t.sku??void 0}),C=({item:t})=>{const{t:r}=h(),{handleSuccess:i}=y(),n=b({defaultValues:k(t),resolver:E(S)}),{mutateAsync:l,isPending:d}=F(t.id),c=n.handleSubmit(async a=>{l(a,{onSuccess:()=>{u.success(r("inventory.toast.updateItem")),i()},onError:v=>u.error(v.message)})});return e.jsx(o.Form,{form:n,children:e.jsxs(f,{onSubmit:c,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsxs(o.Body,{className:"flex flex-1 flex-col gap-y-8 overflow-auto",children:[e.jsx(s.Field,{control:n.control,name:"title",render:({field:a})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:r("fields.title")}),e.jsx(s.Control,{children:e.jsx(x,{...a})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:n.control,name:"sku",render:({field:a})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:r("fields.sku")}),e.jsx(s.Control,{children:e.jsx(x,{...a})}),e.jsx(s.ErrorMessage,{})]})})]}),e.jsx(o.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(o.Close,{asChild:!0,children:e.jsx(j,{variant:"secondary",size:"small",children:r("actions.cancel")})}),e.jsx(j,{type:"submit",size:"small",isLoading:d,children:r("actions.save")})]})})]})})},B=()=>{const{id:t}=I(),{t:r}=h(),{inventory_item:i,isPending:n,isError:l,error:d}=p(t),c=!n&&i;if(l)throw d;return e.jsxs(o,{children:[e.jsx(o.Header,{children:e.jsx(g,{children:r("inventory.editItemDetails")})}),c&&e.jsx(C,{item:i})]})};export{B as Component};
