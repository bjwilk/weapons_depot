import{C as _}from"./chunk-MW4K5NNY-xRRHJw1X.js";import{K as C}from"./chunk-CEEYZHMN-DuC6-VW1.js";import{b as c,u as E}from"./chunk-MDIOSTKB-DMuKuBFN.js";import{ag as L,a6 as m,ah as I,a4 as S,R as M,b as y,S as N,j as e,H as P,a as T,n as A,V as D,x as s,y as h,F as R,B as b,$ as B}from"./index-Dd5AIRt1.js";import"./triangles-mini-5flKdGPe.js";import"./prompt-DruOcYql.js";var x=L([m(),I()]).transform(n=>n===""?null:Number(n)).optional().nullable(),H=S({weight:x,length:x,width:x,height:x,mid_code:m().optional(),hs_code:m().optional(),origin_country:m().optional()}),O=({product:n})=>{const{t:i}=y(),{handleSuccess:u}=E(),{getFormConfigs:j,getFormFields:g}=T(),f=j("product","attributes"),v=g("product","attributes"),t=A({defaultValues:{height:n.height?n.height:null,width:n.width?n.width:null,length:n.length?n.length:null,weight:n.weight?n.weight:null,mid_code:n.mid_code||"",hs_code:n.hs_code||"",origin_country:n.origin_country||""},schema:H,configs:f,data:n}),{mutateAsync:w,isPending:p}=D(n.id),F=t.handleSubmit(async r=>{await w({weight:r.weight?r.weight:void 0,length:r.length?r.length:void 0,width:r.width?r.width:void 0,height:r.height?r.height:void 0,mid_code:r.mid_code,hs_code:r.hs_code,origin_country:r.origin_country},{onSuccess:()=>{u()}})});return e.jsx(c.Form,{form:t,children:e.jsxs(C,{onSubmit:F,className:"flex h-full flex-col",children:[e.jsx(c.Body,{children:e.jsx("div",{className:"flex h-full flex-col gap-y-8",children:e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(s.Field,{control:t.control,name:"width",render:({field:{onChange:r,value:o,...d}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("fields.width")}),e.jsx(s.Control,{children:e.jsx(h,{type:"number",min:0,value:o||"",onChange:a=>{const l=a.target.value;r(l===""?null:parseFloat(l))},...d})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:t.control,name:"height",render:({field:{onChange:r,value:o,...d}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("fields.height")}),e.jsx(s.Control,{children:e.jsx(h,{type:"number",min:0,value:o||"",onChange:a=>{const l=a.target.value;r(l===""?null:Number(l))},...d})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:t.control,name:"length",render:({field:{onChange:r,value:o,...d}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("fields.length")}),e.jsx(s.Control,{children:e.jsx(h,{type:"number",min:0,value:o||"",onChange:a=>{const l=a.target.value;r(l===""?null:Number(l))},...d})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:t.control,name:"weight",render:({field:{onChange:r,value:o,...d}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("fields.weight")}),e.jsx(s.Control,{children:e.jsx(h,{type:"number",min:0,value:o||"",onChange:a=>{const l=a.target.value;r(l===""?null:Number(l))},...d})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:t.control,name:"mid_code",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("fields.midCode")}),e.jsx(s.Control,{children:e.jsx(h,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:t.control,name:"hs_code",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("fields.hsCode")}),e.jsx(s.Control,{children:e.jsx(h,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:t.control,name:"origin_country",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("fields.countryOfOrigin")}),e.jsx(s.Control,{children:e.jsx(_,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(R,{fields:v,form:t})]})})}),e.jsx(c.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(c.Close,{asChild:!0,children:e.jsx(b,{size:"small",variant:"secondary",children:i("actions.cancel")})}),e.jsx(b,{size:"small",type:"submit",isLoading:p,children:i("actions.save")})]})})]})})},k=()=>{const{id:n}=M(),{t:i}=y(),{product:u,isLoading:j,isError:g,error:f}=N(n,{fields:B});if(g)throw f;return e.jsxs(c,{children:[e.jsx(c.Header,{children:e.jsx(c.Title,{asChild:!0,children:e.jsx(P,{children:i("products.editAttributes")})})}),!j&&u&&e.jsx(O,{product:u})]})};export{k as Component};
