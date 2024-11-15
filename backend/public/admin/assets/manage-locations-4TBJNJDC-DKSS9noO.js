import{a8 as x,R as N,b as w,d$ as z,b6 as _,j as e,H as S,r as j,ab as k,ac as F,z as C,e5 as I,t as v,T as n,B as y,m as E}from"./index-Dd5AIRt1.js";import{K as B}from"./chunk-CEEYZHMN-DuC6-VW1.js";import{b as h,u as M}from"./chunk-MDIOSTKB-DMuKuBFN.js";import{C as R}from"./checkbox-C6j9JG97.js";import"./prompt-DruOcYql.js";var T=({selected:a,onSelect:i,location:s})=>{var l,d,o;return e.jsxs("div",{className:E("flex w-full cursor-pointer gap-x-2 rounded-lg border px-2 py-2",{"border-ui-border-interactive ":a}),onClick:()=>i(!a),children:[e.jsx("div",{className:"h-5 w-5",children:e.jsx(R,{onClick:r=>{r.stopPropagation(),i(!a)},checked:a})}),e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx(n,{size:"small",leading:"compact",weight:"plus",children:s.name}),e.jsx(n,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:[(l=s.address)==null?void 0:l.address_1,(d=s.address)==null?void 0:d.city,(o=s.address)==null?void 0:o.country_code].filter(r=>!!r).join(", ")})]})]})},A=x.object({locations:x.array(x.object({id:x.string(),location_id:x.string(),selected:x.boolean()}))}),b=(a,i)=>({locations:a.map(s=>({...s,location_id:s.id,selected:i.has(s.id)}))}),D=({item:a,locations:i})=>{const s=j.useMemo(()=>{var t;return new Set(((t=a.location_levels)==null?void 0:t.map(u=>u.location_id))??[])},a.location_levels),{t:l}=w(),{handleSuccess:d}=M(),o=k({defaultValues:b(i,s),resolver:F(A)}),{fields:r,update:p}=C({control:o.control,name:"locations"});j.useEffect(()=>{o.setValue("locations",b(i,s).locations)},[s,i]);const{mutateAsync:g}=I(a.id),L=o.handleSubmit(async({locations:t})=>{const[u,f]=t.reduce((c,m)=>(!m.selected&&!s.has(m.location_id)||m.selected&&s.has(m.location_id)||(m.selected?c[0].push(m.location_id):c[1].push(m.location_id)),c),[[],[]]);if(u.length===0&&f.length===0)return d();await g({create:u.map(c=>({location_id:c})),delete:f},{onSuccess:()=>{v.success(l("inventory.toast.updateLocations")),d()},onError:c=>{v.error(c.message)}})});return e.jsx(h.Form,{form:o,children:e.jsxs(B,{onSubmit:L,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsxs(h.Body,{className:"flex flex-1 flex-col gap-y-4 overflow-auto",children:[e.jsxs("div",{className:"text-ui-fg-subtle shadow-elevation-card-rest grid grid-rows-2 divide-y rounded-lg border",children:[e.jsxs("div",{className:"grid grid-cols-2 divide-x",children:[e.jsx(n,{className:"px-2 py-1.5",size:"small",leading:"compact",children:l("fields.title")}),e.jsx(n,{className:"px-2 py-1.5",size:"small",leading:"compact",children:a.title??"-"})]}),e.jsxs("div",{className:"grid grid-cols-2 divide-x",children:[e.jsx(n,{className:"px-2 py-1.5",size:"small",leading:"compact",children:l("fields.sku")}),e.jsx(n,{className:"px-2 py-1.5",size:"small",leading:"compact",children:a.sku})]})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(n,{size:"small",weight:"plus",leading:"compact",children:l("locations.domain")}),e.jsxs("div",{className:"text-ui-fg-subtle flex w-full justify-between",children:[e.jsx(n,{size:"small",leading:"compact",children:l("locations.selectLocations")}),e.jsxs(n,{size:"small",leading:"compact",children:["(",l("general.countOfTotalSelected",{count:r.filter(t=>t.selected).length,total:i.length}),")"]})]})]}),r.map((t,u)=>e.jsx(T,{selected:t.selected,location:t,onSelect:()=>p(u,{...t,selected:!t.selected})},t.id))]}),e.jsx(h.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(h.Close,{asChild:!0,children:e.jsx(y,{variant:"secondary",size:"small",children:l("actions.cancel")})}),e.jsx(y,{type:"submit",size:"small",isLoading:!1,children:l("actions.save")})]})})]})})},O=()=>{const{id:a}=N(),{t:i}=w(),{inventory_item:s,isPending:l,isError:d,error:o}=z(a),{stock_locations:r,isLoading:p}=_(),g=!l&&!p&&s&&r;if(d)throw o;return e.jsxs(h,{children:[e.jsx(h.Header,{children:e.jsx(S,{children:i("inventory.manageLocations")})}),g&&e.jsx(D,{item:s,locations:r})]})};export{O as Component};
