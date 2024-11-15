import{g as G}from"./chunk-WKOPGFW5-Di_6cJlP.js";import{a8 as N,R as X,aN as Y,j as e,b as H,r as b,ab as Z,ac as J,b6 as U,q as ee,aP as se,t as Q,v as z,H as te,x as u,y as T,B as V,aR as O,aZ as ae,T as R,m as le,aY as ie}from"./index-Dd5AIRt1.js";import{a as ne}from"./chunk-7B63V4WX-BTUu2BUg.js";import{K as re}from"./chunk-CEEYZHMN-DuC6-VW1.js";import{R as _,u as oe}from"./chunk-MDIOSTKB-DMuKuBFN.js";import{C as ce}from"./component-DO_Q8LKV.js";import{S as k}from"./select-C2y3EMGH.js";import{A as de}from"./alert-BfG8N0pL.js";import"./prompt-DruOcYql.js";import"./triangles-mini-5flKdGPe.js";import"./x-mark-mini-BWMGrVIU.js";var xe=N.object({location_id:N.string(),quantity:N.record(N.string(),N.number().or(N.string()))});function ue({item:s,form:a,locationId:c,onQuantityChange:h}){const{t:m}=H(),i=s.variant,C=s.variant.inventory,[S,I]=b.useState(!1),d=z({control:a.control,name:"quantity"}),f=!!(i!=null&&i.inventory_items.length)&&(i==null?void 0:i.inventory_items.length)>1,{availableQuantity:n,inStockQuantity:A}=b.useMemo(()=>{var l,y;if(!i||!c)return{};const{inventory:r}=i,v=(y=(l=r[0])==null?void 0:l.location_levels)==null?void 0:y.find(t=>t.location_id===c);return v?{availableQuantity:v.available_quantity,inStockQuantity:v.stocked_quantity}:{}},[i,c]),E=!f&&n&&d[`${s.id}-${s.variant.inventory[0].id}`]&&d[`${s.id}-${s.variant.inventory[0].id}`]>n,F=0,j=Math.min(G(s),n||Number.MAX_SAFE_INTEGER);return e.jsxs("div",{className:"bg-ui-bg-subtle shadow-elevation-card-rest my-2 min-w-[720px] divide-y divide-dashed rounded-xl",children:[e.jsxs("div",{className:"flex items-center gap-x-3 p-3 text-sm",children:[e.jsx("div",{className:"flex flex-1 items-center",children:e.jsxs("div",{className:"flex items-center gap-x-3",children:[E&&e.jsx(O,{className:"text-ui-fg-error"}),e.jsx(ae,{src:s.thumbnail}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex flex-row",children:[e.jsx(R,{className:"txt-small flex",as:"span",weight:"plus",children:s.variant.product.title}),s.variant.sku&&e.jsxs("span",{className:"text-ui-fg-subtle",children:[" ","(",s.variant.sku,")"]}),f&&e.jsx(ce,{className:"text-ui-fg-muted ml-2 overflow-visible pt-[2px]"})]}),e.jsx(R,{as:"div",className:"text-ui-fg-subtle txt-small",children:s.title})]})]})}),e.jsxs("div",{className:le("flex flex-1 items-center gap-x-3",f?"justify-end":"justify-between"),children:[!f&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"bg-ui-border-strong block h-[12px] w-[1px]"}),e.jsxs("div",{className:"txt-small flex flex-col",children:[e.jsx("span",{className:"text-ui-fg-subtle font-medium",children:m("labels.available")}),e.jsxs("span",{className:"text-ui-fg-muted",children:[n||"-",n&&!f&&d[`${s.id}-${s.variant.inventory[0].id}`]&&e.jsxs("span",{className:"text-ui-fg-error txt-small ml-1",children:["-",d[`${s.id}-${s.variant.inventory[0].id}`]]})]})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"bg-ui-border-strong block h-[12px] w-[1px]"}),e.jsxs("div",{className:"txt-small flex flex-col",children:[e.jsx("span",{className:"text-ui-fg-subtle font-medium",children:m("labels.inStock")}),e.jsx("span",{className:"text-ui-fg-muted",children:A||"-"})]})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"bg-ui-border-strong block h-[12px] w-[1px]"}),e.jsxs("div",{className:"text-ui-fg-subtle txt-small mr-2 flex flex-row items-center gap-2",children:[e.jsx(u.Field,{control:a.control,name:f?`quantity.${s.id}-`:`quantity.${s.id}-${s.variant.inventory[0].id}`,rules:{required:!f,min:!f&&F,max:j},render:({field:r})=>e.jsx(u.Item,{children:e.jsx(u.Control,{children:e.jsx(T,{className:"bg-ui-bg-base txt-small w-[46px] rounded-lg text-right [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",type:"number",...r,disabled:!c,onChange:v=>{const l=v.target.value===""?null:Number(v.target.value);h(s.variant.inventory[0],s,f,l,!0)}})})})})," ","/ ",s.quantity," ",m("fields.qty")]})]})]})]}),f&&e.jsx("div",{className:"px-4 py-2",children:e.jsxs("div",{onClick:()=>I(r=>!r),className:"flex items-center gap-x-2",children:[e.jsx(ie,{style:{transform:`rotate(${S?-90:0}deg)`},className:"text-ui-fg-muted -mt-[1px]"}),e.jsx("span",{className:"txt-small text-ui-fg-muted cursor-pointer",children:m("orders.allocateItems.consistsOf",{num:C.length})})]})}),S&&i.inventory.map((r,v)=>{const l=r.location_levels.find(t=>t.location_id===c),y=!!d[`${s.id}-${r.id}`]&&d[`${s.id}-${r.id}`]>l.available_quantity;return e.jsxs("div",{className:"txt-small flex items-center gap-x-3 p-4",children:[e.jsxs("div",{className:"flex flex-1 flex-row items-center gap-3",children:[y&&e.jsx(O,{className:"text-ui-fg-error"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-ui-fg-subtle",children:r.title}),e.jsx("span",{className:"text-ui-fg-muted",children:m("orders.allocateItems.requires",{num:i.inventory_items[v].required_quantity})})]})]}),e.jsxs("div",{className:"flex flex-1 flex-row justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"bg-ui-border-strong block h-[12px] w-[1px]"}),e.jsxs("div",{className:"txt-small flex flex-col",children:[e.jsx("span",{className:"text-ui-fg-subtle font-medium",children:m("labels.available")}),e.jsxs("span",{className:"text-ui-fg-muted",children:[(l==null?void 0:l.available_quantity)||"-",(l==null?void 0:l.available_quantity)&&d[`${s.id}-${r.id}`]&&e.jsxs("span",{className:"text-ui-fg-error txt-small ml-1",children:["-",d[`${s.id}-${r.id}`]]})]})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"bg-ui-border-strong block h-[12px] w-[1px]"}),e.jsxs("div",{className:"txt-small flex flex-col",children:[e.jsx("span",{className:"text-ui-fg-subtle font-medium",children:m("labels.inStock")}),e.jsx("span",{className:"text-ui-fg-muted",children:(l==null?void 0:l.stocked_quantity)||"-"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"bg-ui-border-strong block h-[12px] w-[1px]"}),e.jsxs("div",{className:"text-ui-fg-subtle txt-small mr-1 flex flex-row items-center gap-2",children:[e.jsx(u.Field,{control:a.control,name:`quantity.${s.id}-${r.id}`,rules:{required:!0,min:0,max:l==null?void 0:l.available_quantity},render:({field:t})=>e.jsx(u.Item,{children:e.jsx(u.Control,{children:e.jsx(T,{className:"bg-ui-bg-base txt-small w-[46px] rounded-lg text-right [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",type:"number",...t,disabled:!c,onChange:x=>{const p=x.target.value===""?null:Number(x.target.value);h(r,s,f,p)}})})})}),"/"," ",s.quantity*i.inventory_items[v].required_quantity," ",m("fields.qty")]})]})]})]},r.id)})]})}function me({order:s}){var v,l,y;const{t:a}=H(),{handleSuccess:c}=oe(),[h,m]=b.useState(!1),[i,C]=b.useState(""),{mutateAsync:S,isPending:I}=ne(),d=b.useMemo(()=>s.items.filter(t=>t.variant.manage_inventory&&t.variant.inventory.length&&t.quantity-t.detail.fulfilled_quantity>0),[s.items]),f=b.useMemo(()=>d.filter(t=>t.variant.title.toLowerCase().includes(i)||t.variant.product.title.toLowerCase().includes(i)),[d,i]);d.length;const n=Z({defaultValues:{location_id:"",quantity:D(d)},resolver:J(xe)}),{stock_locations:A=[]}=U(),E=n.handleSubmit(async t=>{try{const x=Object.entries(t.quantity).filter(([o])=>!o.endsWith("-")).map(([o,g])=>[...o.split("-"),g]);if(x.some(o=>o[2]==="")){n.setError("root.quantityNotAllocated",{type:"manual",message:a("orders.allocateItems.error.quantityNotAllocated")});return}const p=x.map(([o,g,q])=>S({location_id:t.location_id,inventory_item_id:g,line_item_id:o,quantity:q}));await Promise.all(p),await ee.invalidateQueries({queryKey:se.details()}),c(`/orders/${s.id}`),Q.success(a("general.success"),{description:a("orders.allocateItems.toast.created"),dismissLabel:a("actions.close")})}catch(x){Q.error(a("general.error"),{description:x.message,dismissLabel:a("actions.close")})}}),F=(t,x,p,o,g)=>{let q=!1;const K=g&&p?`quantity.${x.id}-`:`quantity.${x.id}-${t.id}`;if(n.setValue(K,o),o){const w=t.location_levels.find($=>$.location_id===j);w&&w.available_quantity<o&&(q=!0)}if(p&&!g&&n.resetField(`quantity.${x.id}-`,{defaultValue:""}),p&&g){const w=d.find($=>$.id===x.id);w.variant.inventory_items.forEach(($,P)=>{const B=o||0,L=w.variant.inventory[P];if(n.setValue(`quantity.${x.id}-${L.id}`,B*$.required_quantity),o){const M=L.location_levels.find(W=>W.location_id===j);M&&M.available_quantity<o&&(q=!0)}})}n.clearErrors("root.quantityNotAllocated"),m(q)},j=z({name:"location_id",control:n.control});b.useEffect(()=>{j&&n.setValue("quantity",D(d))},[j]);const r=(y=(l=(v=n.formState.errors)==null?void 0:v.root)==null?void 0:l.quantityNotAllocated)==null?void 0:y.message;return e.jsx(_.Form,{form:n,children:e.jsxs(re,{onSubmit:E,className:"flex h-full flex-col overflow-hidden",children:[e.jsx(_.Header,{}),e.jsx(_.Body,{className:"flex h-full w-full flex-col items-center divide-y overflow-y-auto",children:e.jsx("div",{className:"flex size-full flex-col items-center overflow-auto p-16",children:e.jsx("div",{className:"flex w-full max-w-[736px] flex-col justify-center px-2 pb-2",children:e.jsxs("div",{className:"flex flex-col gap-8 divide-y divide-dashed",children:[e.jsx(te,{children:a("orders.allocateItems.title")}),e.jsxs("div",{className:"flex-1 divide-y divide-dashed pt-8",children:[e.jsx(u.Field,{control:n.control,name:"location_id",render:({field:{onChange:t,ref:x,...p}})=>e.jsxs(u.Item,{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx(u.Label,{children:a("fields.location")}),e.jsx(u.Hint,{children:a("orders.allocateItems.locationDescription")})]}),e.jsx("div",{className:"flex-1",children:e.jsx(u.Control,{children:e.jsxs(k,{onValueChange:t,...p,children:[e.jsx(k.Trigger,{className:"bg-ui-bg-base",ref:x,children:e.jsx(k.Value,{})}),e.jsx(k.Content,{children:A.map(o=>e.jsx(k.Item,{value:o.id,children:o.name},o.id))})]})})})]}),e.jsx(u.ErrorMessage,{})]})}),e.jsxs(u.Item,{className:"mt-8 pt-8",children:[e.jsxs("div",{className:"flex flex-row items-center",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx(u.Label,{children:a("orders.allocateItems.itemsToAllocate")}),e.jsx(u.Hint,{children:a("orders.allocateItems.itemsToAllocateDesc")})]}),e.jsx("div",{className:"flex-1",children:e.jsx(T,{value:i,onChange:t=>C(t.target.value),placeholder:a("orders.allocateItems.search"),autoComplete:"off",type:"search"})})]}),r&&e.jsx(de,{className:"mb-4",dismissible:!0,variant:"error",children:r}),e.jsx("div",{className:"flex flex-col gap-y-1",children:f.map(t=>e.jsx(ue,{form:n,item:t,locationId:j,onQuantityChange:F},t.id))})]})]})]})})})}),e.jsx(_.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(_.Close,{asChild:!0,children:e.jsx(V,{size:"small",variant:"secondary",children:a("actions.cancel")})}),e.jsx(V,{size:"small",type:"submit",isLoading:I,disabled:!j||h,children:a("orders.allocateItems.action")})]})})]})})}function D(s){const a={};return s.forEach(c=>{const h=c.variant.inventory_items.length>1;a[h?`${c.id}-`:`${c.id}-${c.variant.inventory[0].id}`]="",h&&c.variant.inventory.forEach(m=>{a[`${c.id}-${m.id}`]=""})}),a}function we(){const{id:s}=X(),{order:a,isLoading:c,isError:h,error:m}=Y(s,{fields:"currency_code,*items,*items.variant,+items.variant.product.title,*items.variant.inventory,*items.variant.inventory.location_levels,*items.variant.inventory_items,*shipping_address"});if(h)throw m;const i=!c&&a;return e.jsx(_,{children:i&&e.jsx(me,{order:a})})}export{we as Component};
