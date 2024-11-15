import{a8 as u,b as g,g as S,j as e,H as v,ab as F,ac as E,eg as I,i as L,t as p,x as r,y as R,B as _}from"./index-Dd5AIRt1.js";import{K as V}from"./chunk-CEEYZHMN-DuC6-VW1.js";import{b as l,u as z}from"./chunk-MDIOSTKB-DMuKuBFN.js";import{S as n}from"./select-C2y3EMGH.js";import"./prompt-DruOcYql.js";import"./triangles-mini-5flKdGPe.js";var M=u.object({name:u.string().min(1),default_currency_code:u.string().optional(),default_region_id:u.string().optional()}),w=({store:i})=>{var h,f;const{t:o}=g(),{handleSuccess:m}=z(),d=F({defaultValues:{name:i.name,default_region_id:i.default_region_id||void 0,default_currency_code:((f=(h=i.supported_currencies)==null?void 0:h.find(s=>s.is_default))==null?void 0:f.currency_code)||void 0},resolver:E(M)}),{mutateAsync:x,isPending:j}=I(i.id),{regions:y,isPending:b}=L({limit:999}),C=d.handleSubmit(async s=>{var t;const c={...s,default_currency_code:void 0,supported_currencies:(t=i.supported_currencies)==null?void 0:t.map(a=>({...a,is_default:a.currency_code===s.default_currency_code}))};await x(c,{onSuccess:()=>{p.success(o("store.toast.update")),m()},onError:a=>{p.error(a.message)}})});return e.jsx(l.Form,{form:d,children:e.jsxs(V,{onSubmit:C,className:"flex h-full flex-col",children:[e.jsx(l.Body,{children:e.jsxs("div",{className:"flex flex-col gap-y-8",children:[e.jsx(r.Field,{control:d.control,name:"name",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:o("fields.name")}),e.jsx(r.Control,{children:e.jsx(R,{placeholder:"ACME",...s})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:d.control,name:"default_currency_code",render:({field:{onChange:s,...c}})=>{var t;return e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:o("store.defaultCurrency")}),e.jsx(r.Control,{children:e.jsxs(n,{...c,onValueChange:s,children:[e.jsx(n.Trigger,{ref:c.ref,children:e.jsx(n.Value,{})}),e.jsx(n.Content,{children:(t=i.supported_currencies)==null?void 0:t.map(a=>e.jsx(n.Item,{value:a.currency_code,children:a.currency_code.toUpperCase()},a.currency_code))})]})})]})}}),e.jsx(r.Field,{control:d.control,name:"default_region_id",render:({field:{onChange:s,...c}})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:o("store.defaultRegion")}),e.jsx(r.Control,{children:e.jsxs(n,{...c,onValueChange:s,disabled:b,children:[e.jsx(n.Trigger,{ref:c.ref,children:e.jsx(n.Value,{})}),e.jsx(n.Content,{children:(y||[]).map(t=>e.jsx(n.Item,{value:t.id,children:t.name},t.id))})]})})]})})]})}),e.jsx(l.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(l.Close,{asChild:!0,children:e.jsx(_,{size:"small",variant:"secondary",children:o("actions.cancel")})}),e.jsx(_,{size:"small",isLoading:j,type:"submit",children:o("actions.save")})]})})]})})},K=()=>{const{t:i}=g(),{store:o,isPending:m,isError:d,error:x}=S();if(d)throw x;const j=!!o&&!m;return e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsx(v,{children:i("store.edit.header")})}),j&&e.jsx(w,{store:o})]})};export{K as Component};
