import{C as _}from"./chunk-ZCYHMOTT-sm_WIOyt.js";import{j as a,ai as h,r as j,aB as C,ap as v,s as w,q as s,aC as n,t as Q}from"./index-Dd5AIRt1.js";import{R as o}from"./chunk-MDIOSTKB-DMuKuBFN.js";import"./sortable.esm-D0toP-bg.js";import"./folder-illustration-DPPmxAEQ.js";import"./prompt-DruOcYql.js";var i={fields:"id,name,parent_category_id,rank,*category_children",parent_category_id:"null",include_descendants_tree:!0,limit:9999},k=()=>{const{product_categories:d,isPending:c,isError:u,error:y}=h(i),[p,g]=j.useState([]),{mutateAsync:m,isPending:f}=C({mutationFn:async({value:e})=>{await w.admin.productCategory.update(e.id,{rank:e.rank??0,parent_category_id:e.parent_category_id})},onMutate:async e=>{await s.cancelQueries({queryKey:n.list(i)});const t=s.getQueryData(n.list(i)),r={...t,product_categories:e.arr};return s.setQueryData(n.list(i),r),{previousValue:t}},onError:(e,t,r)=>{s.setQueryData(n.list(i),r==null?void 0:r.previousValue),Q.error(e.message)},onSettled:async()=>{await s.invalidateQueries({queryKey:n.all})}}),x=async(e,t)=>{const r={id:e.id,parent_category_id:e.parentId,rank:e.index};g(t),await m({value:r,arr:t})},l=c||f;if(u)throw y;return a.jsxs("div",{className:"flex h-full flex-col overflow-hidden",children:[a.jsx(o.Header,{children:a.jsx("div",{className:"flex items-center justify-end",children:l&&a.jsx(v,{className:"animate-spin"})})}),a.jsx(o.Body,{className:"bg-ui-bg-subtle flex flex-1 flex-col overflow-y-auto",children:a.jsx(_,{renderValue:e=>e.name,value:l?p:d||[],onChange:x})})]})},S=()=>a.jsx(o,{children:a.jsx(k,{})});export{S as Component};
