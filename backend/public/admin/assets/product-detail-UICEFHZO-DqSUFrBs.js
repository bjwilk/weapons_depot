import{g as W}from"./chunk-OIAPXGI2-BgqD0wt_.js";import{S as u}from"./chunk-ULQT3HE4-D_iGW5o1.js";import{d as K,R as F,S as R,a as k,j as e,U as Y,b as p,H as g,A as f,u as H,f as J,r as C,V as U,m as B,W as q,L as b,T as w,B as G,Y as L,Z as N,K as Q,_ as Z,$ as X,a0 as ee,k as te,a1 as se,a2 as ae}from"./index-Dd5AIRt1.js";import{a3 as mt}from"./index-Dd5AIRt1.js";import{T as D}from"./chunk-UR2E444G-D2Lbw7mb.js";import"./chunk-3IW4HYUP-DD0tWyEL.js";import{P as $}from"./chunk-P3UUX2T6-BjdsmG3m.js";import{u as ie,D as ne}from"./chunk-XVFA73MY-BMaVn9_N.js";import"./lodash-BSdnRVRc.js";import{u as le}from"./chunk-C76H5USB-DJZABeme.js";import"./chunk-5AU4DI7M-Ck_cVJRv.js";import"./chunk-E3YGDIJC-DNIXVXp2.js";import{P as j}from"./pencil-square-rz5ZnZ22.js";import{S as re}from"./status-badge-DiHiARkQ.js";import{T as O}from"./trash-B_yspgao.js";import{T as oe}from"./thumbnail-badge-D6c42Mng.js";import{C as ce}from"./channels-ARHrvzsR.js";import{T as de}from"./Trans-CM9vMdxp.js";import{C as E}from"./component-DO_Q8LKV.js";import{u as T}from"./use-prompt-BS3ABRGp.js";import{C as y}from"./container-ChTfB2gf.js";import{C as ue}from"./checkbox-C6j9JG97.js";import{C as _}from"./command-bar-D-8Acngt.js";import{c as me}from"./index-391Gg0Ss.js";import"./x-mark-mini-BWMGrVIU.js";import"./chunk-YEDAFXMB-D7buONTO.js";import"./chunk-AOFGTNG6-CmvDtUlD.js";import"./chunk-WX2SMNCD-BJTVtiMv.js";import"./plus-mini-BwJJ7XIZ.js";import"./chunk-QAF7PVQE-UJeTHqTb.js";import"./format-BkG7sM8d.js";import"./date-picker-DpqbO765.js";import"./popover-D6P9NTCz.js";import"./index-C70Cb1KD.js";import"./triangle-left-mini-CZpnYzgZ.js";import"./prompt-DruOcYql.js";var xe=({product:s})=>{const{t}=p(),{getDisplays:n}=k();return e.jsxs(y,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(g,{level:"h2",children:t("products.attributes")}),e.jsx(f,{groups:[{actions:[{label:t("actions.edit"),to:"attributes",icon:e.jsx(j,{})}]}]})]}),e.jsx(u,{title:t("fields.height"),value:s.height}),e.jsx(u,{title:t("fields.width"),value:s.width}),e.jsx(u,{title:t("fields.length"),value:s.length}),e.jsx(u,{title:t("fields.weight"),value:s.weight}),e.jsx(u,{title:t("fields.midCode"),value:s.mid_code}),e.jsx(u,{title:t("fields.hsCode"),value:s.hs_code}),e.jsx(u,{title:t("fields.countryOfOrigin"),value:W(s.origin_country)}),n("product","attributes").map((a,l)=>e.jsx(a,{data:s},l))]})},he=s=>{switch(s){case"draft":return"grey";case"proposed":return"orange";case"published":return"green";case"rejected":return"red";default:return"grey"}},pe=({product:s})=>{const{t}=p(),n=T(),a=H(),{getDisplays:l}=k(),i=l("product","general"),{mutateAsync:o}=J(s.id),c=async()=>{await n({title:t("general.areYouSure"),description:t("products.deleteWarning",{title:s.title}),confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&await o(void 0,{onSuccess:()=>{a("..")}})};return e.jsxs(y,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(g,{children:s.title}),e.jsxs("div",{className:"flex items-center gap-x-4",children:[e.jsx(re,{color:he(s.status),children:t(`products.productStatus.${s.status}`)}),e.jsx(f,{groups:[{actions:[{label:t("actions.edit"),to:"edit",icon:e.jsx(j,{})}]},{actions:[{label:t("actions.delete"),onClick:c,icon:e.jsx(O,{})}]}]})]})]}),e.jsx(u,{title:t("fields.description"),value:s.description}),e.jsx(u,{title:t("fields.subtitle"),value:s.subtitle}),e.jsx(u,{title:t("fields.handle"),value:`/${s.handle}`}),e.jsx(u,{title:t("fields.discountable"),value:s.discountable?t("fields.true"):t("fields.false")}),i.map((m,r)=>e.jsx(m,{data:s},r))]})},fe=({product:s})=>{const{t}=p(),n=T(),[a,l]=C.useState({}),i=je(s),o=r=>{l(d=>{if(d[r]){const{[r]:x,...h}=d;return h}else return{...d,[r]:!0}})},{mutateAsync:c}=U(s.id),m=async()=>{const r=Object.keys(a),d=r.some(v=>{var P;return(P=i.find(z=>z.id===v))==null?void 0:P.isThumbnail});if(!await n({title:t("general.areYouSure"),description:d?t("products.media.deleteWarningWithThumbnail",{count:r.length}):t("products.media.deleteWarning",{count:r.length}),confirmText:t("actions.delete"),cancelText:t("actions.cancel")}))return;const h=s.images.filter(v=>!r.includes(v.id)).map(v=>({url:v.url}));await c({images:h,thumbnail:d?"":void 0},{onSuccess:()=>{l({})}})};return e.jsxs(y,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(g,{level:"h2",children:t("products.media.label")}),e.jsx(f,{groups:[{actions:[{label:t("actions.edit"),to:"media?view=edit",icon:e.jsx(j,{})}]}]})]}),i.length>0?e.jsx("div",{className:"grid grid-cols-[repeat(auto-fill,minmax(96px,1fr))] gap-4 px-6 py-4",children:i.map((r,d)=>{const x=a[r.id];return e.jsxs("div",{className:"shadow-elevation-card-rest hover:shadow-elevation-card-hover transition-fg group relative aspect-square size-full cursor-pointer overflow-hidden rounded-[8px]",children:[e.jsx("div",{className:B("transition-fg invisible absolute right-2 top-2 opacity-0 group-hover:visible group-hover:opacity-100",{"visible opacity-100":x}),children:e.jsx(ue,{checked:a[r.id]||!1,onCheckedChange:()=>o(r.id)})}),r.isThumbnail&&e.jsx("div",{className:"absolute left-2 top-2",children:e.jsx(q,{content:t("fields.thumbnail"),children:e.jsx(oe,{})})}),e.jsx(b,{to:"media",state:{curr:d},children:e.jsx("img",{src:r.url,alt:`${s.title} image`,className:"size-full object-cover"})})]},r.id)})}):e.jsxs("div",{className:"flex flex-col items-center gap-y-4 pb-8 pt-6",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(w,{size:"small",leading:"compact",weight:"plus",className:"text-ui-fg-subtle",children:t("products.media.emptyState.header")}),e.jsx(w,{size:"small",className:"text-ui-fg-muted",children:t("products.media.emptyState.description")})]}),e.jsx(G,{size:"small",variant:"secondary",asChild:!0,children:e.jsx(b,{to:"media?view=edit",children:t("products.media.emptyState.action")})})]}),e.jsx(_,{open:!!Object.keys(a).length,children:e.jsxs(_.Bar,{children:[e.jsx(_.Value,{children:t("general.countSelected",{count:Object.keys(a).length})}),e.jsx(_.Seperator,{}),e.jsx(_.Command,{action:m,label:t("actions.delete"),shortcut:"d"})]})})]})},je=s=>{const{images:t=[],thumbnail:n}=s,a=t.map(l=>({id:l.id,url:l.url,isThumbnail:l.url===n}));return n&&!a.some(l=>l.url===n)&&a.unshift({id:"img_thumbnail",url:n,isThumbnail:!0}),a},ve=({product:s,option:t})=>{const{t:n}=p(),{mutateAsync:a}=ee(s.id,t.id),l=T(),i=async()=>{await l({title:n("general.areYouSure"),description:n("products.options.deleteWarning",{title:t.title}),confirmText:n("actions.delete"),cancelText:n("actions.cancel")})&&await a()};return e.jsx(f,{groups:[{actions:[{label:n("actions.edit"),to:`options/${t.id}/edit`,icon:e.jsx(j,{})}]},{actions:[{label:n("actions.delete"),onClick:i,icon:e.jsx(O,{})}]}]})},ge=({product:s})=>{var n;const{t}=p();return e.jsxs(y,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(g,{level:"h2",children:t("products.options.header")}),e.jsx(f,{groups:[{actions:[{label:t("actions.create"),to:"options/create",icon:e.jsx(L,{})}]}]})]}),(n=s.options)==null?void 0:n.map(a=>{var l;return e.jsx(u,{title:a.title,value:(l=a.values)==null?void 0:l.map(i=>e.jsx(N,{size:"2xsmall",className:"flex min-w-[20px] items-center justify-center",children:i.value},i.value)),actions:e.jsx(ve,{product:s,option:a})},a.id)})]})},ye=({product:s})=>{var a,l;const{t}=p(),{getDisplays:n}=k();return e.jsxs(y,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(g,{level:"h2",children:t("products.organization.header")}),e.jsx(f,{groups:[{actions:[{label:t("actions.edit"),to:"organization",icon:e.jsx(j,{})}]}]})]}),e.jsx(u,{title:t("fields.tags"),value:(a=s.tags)!=null&&a.length?s.tags.map(i=>e.jsx(N,{className:"w-fit",size:"2xsmall",asChild:!0,children:e.jsx(b,{to:`/products?tag_id=${i.id}`,children:i.value})},i.id)):void 0}),e.jsx(u,{title:t("fields.type"),value:s.type?e.jsx(N,{size:"2xsmall",className:"w-fit",asChild:!0,children:e.jsx(b,{to:`/products?type_id=${s.type_id}`,children:s.type.value})}):void 0}),e.jsx(u,{title:t("fields.collection"),value:s.collection?e.jsx(N,{size:"2xsmall",className:"w-fit",asChild:!0,children:e.jsx(b,{to:`/collections/${s.collection.id}`,children:s.collection.title})}):void 0}),e.jsx(u,{title:t("fields.categories"),value:(l=s.categories)!=null&&l.length?s.categories.map(i=>e.jsx(N,{className:"w-fit",size:"2xsmall",asChild:!0,children:e.jsx(b,{to:`/categories/${i.id}`,children:i.name})},i.id)):void 0}),n("product","organize").map((i,o)=>e.jsx(i,{data:s},o))]})},be=({product:s})=>{var o;const{count:t}=Q(),{t:n}=p(),a=((o=s.sales_channels)==null?void 0:o.map(c=>({id:c.id,name:c.name})))??[],l=a.slice(0,3),i=a.slice(3);return e.jsxs(y,{className:"flex flex-col gap-y-4 px-6 py-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(g,{level:"h2",children:n("fields.sales_channels")}),e.jsx(f,{groups:[{actions:[{label:n("actions.edit"),to:"sales-channels",icon:e.jsx(j,{})}]}]})]}),e.jsxs("div",{className:"grid grid-cols-[28px_1fr] items-center gap-x-3",children:[e.jsx("div",{className:"bg-ui-bg-base shadow-borders-base flex size-7 items-center justify-center rounded-md",children:e.jsx("div",{className:"bg-ui-bg-component flex size-6 items-center justify-center rounded-[4px]",children:e.jsx(ce,{className:"text-ui-fg-subtle"})})}),a.length>0?e.jsxs("div",{className:"flex items-center gap-x-1",children:[e.jsx(w,{size:"small",leading:"compact",children:l.map(c=>c.name).join(", ")}),i.length>0&&e.jsx(q,{content:e.jsx("ul",{children:i.map(c=>e.jsx("li",{children:c.name},c.id))}),children:e.jsx(w,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:`+${i.length}`})})]}):e.jsx(w,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:n("products.noSalesChannels")})]}),e.jsx("div",{children:e.jsx(w,{className:"text-ui-fg-subtle",size:"small",leading:"compact",children:e.jsx(de,{i18nKey:"sales_channels.availableIn",values:{x:a.length,y:t??0},components:[e.jsx("span",{className:"text-ui-fg-base txt-compact-medium-plus"},"x"),e.jsx("span",{className:"text-ui-fg-base txt-compact-medium-plus"},"y")]})})})]})},we=({variant:s,product:t})=>{var x;const{mutateAsync:n}=se(t.id,s.id),{t:a}=p(),l=T(),i=((x=s.inventory_items)==null?void 0:x.length)||0,o=i===1,c=i>1,m=async()=>{await l({title:a("general.areYouSure"),description:a("products.deleteVariantWarning",{title:s.title}),confirmText:a("actions.delete"),cancelText:a("actions.cancel")})&&await n()},[r,d]=C.useMemo(()=>{var A;if(!((A=s.inventory_items)!=null&&A.length))return["",""];const v=`/inventory/${s.inventory_items[0].inventory.id}`,z={id:s.inventory_items.map(V=>V.inventory.id)},M=`/inventory?${new URLSearchParams(z).toString()}`;return[v,M]},[s.inventory_items]);return e.jsx(f,{groups:[{actions:[{label:a("actions.edit"),to:`edit-variant?variant_id=${s.id}`,icon:e.jsx(j,{})},{label:a("actions.delete"),onClick:m,icon:e.jsx(O,{})},o?{label:a("products.variant.inventory.actions.inventoryItems"),to:r,icon:e.jsx(ae,{})}:!1,c?{label:a("products.variant.inventory.actions.inventoryKit"),to:d,icon:e.jsx(E,{})}:!1].filter(Boolean)}]})},S=me(),Ne=s=>{const{t}=p(),n=C.useMemo(()=>s!=null&&s.options?s.options.map(a=>S.display({id:a.id,header:()=>e.jsx("div",{className:"flex h-full w-full items-center",children:e.jsx("span",{className:"truncate",children:a.title})}),cell:({row:l})=>{var o;const i=(o=l.original.options)==null?void 0:o.find(c=>c.option_id===a.id);return i?e.jsx("div",{className:"flex items-center",children:e.jsx(N,{size:"2xsmall",title:i.value,className:"inline-flex min-w-[20px] max-w-[140px] items-center justify-center overflow-hidden truncate",children:i.value})}):e.jsx($,{})}})):[],[s]);return C.useMemo(()=>[S.accessor("title",{header:()=>e.jsx("div",{className:"flex h-full w-full items-center",children:e.jsx("span",{className:"truncate",children:t("fields.title")})}),cell:({getValue:a})=>e.jsx("div",{className:"flex h-full w-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:a()})})}),S.accessor("sku",{header:()=>e.jsx("div",{className:"flex h-full w-full items-center",children:e.jsx("span",{className:"truncate",children:t("fields.sku")})}),cell:({getValue:a})=>{const l=a();return l?e.jsx("div",{className:"flex h-full w-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:l})}):e.jsx($,{})}}),...n,S.accessor("inventory_items",{header:()=>e.jsx("div",{className:"flex h-full w-full items-center",children:e.jsx("span",{className:"truncate",children:t("fields.inventory")})}),cell:({getValue:a,row:l})=>{const i=l.original;if(!i.manage_inventory)return t("products.variant.inventory.notManaged");const o=a().map(x=>x.inventory),c=o.length>1,m={};o.forEach(x=>{x.location_levels.forEach(h=>{m[h.id]=!0})});const r=Object.keys(m).length,d=c?t("products.variant.tableItemAvailable",{availableCount:i.inventory_quantity}):t("products.variant.tableItem",{availableCount:i.inventory_quantity,locationCount:r,count:r});return e.jsxs("div",{className:"flex h-full w-full items-center gap-2 overflow-hidden",children:[c&&e.jsx(E,{style:{marginTop:1}}),e.jsx("span",{className:B("truncate",{"text-ui-fg-error":!i.inventory_quantity}),title:d,children:d})]})}}),S.display({id:"actions",cell:({row:a,table:l})=>{const{product:i}=l.options.meta;return e.jsx(we,{variant:a.original,product:i})}})],[t,n])},_e=()=>{const{t:s}=p();let t=[];const n={key:"manage_inventory",label:s("fields.managedInventory"),type:"select",options:[{label:s("fields.true"),value:"true"},{label:s("fields.false"),value:"false"}]},a={key:"allow_backorder",label:s("fields.allowBackorder"),type:"select",options:[{label:s("fields.true"),value:"true"},{label:s("fields.false"),value:"false"}]},l=[{label:s("fields.createdAt"),key:"created_at"},{label:s("fields.updatedAt"),key:"updated_at"}].map(i=>({key:i.key,label:i.label,type:"date"}));return t=[...t,n,a,...l],t},Se=({pageSize:s,prefix:t})=>{const n=le(["offset","q","manage_inventory","allow_backorder","order","created_at","updated_at"],t),{offset:a,manage_inventory:l,allow_backorder:i,created_at:o,updated_at:c,q:m,order:r}=n;return{searchParams:{limit:s,offset:a?Number(a):0,manage_inventory:l?l==="true":void 0,allow_backorder:i?i==="true":void 0,order:r,created_at:o?JSON.parse(o):void 0,updated_at:c?JSON.parse(c):void 0,q:m},raw:n}},I=10,Ce=({product:s})=>{const{t}=p(),{searchParams:n,raw:a}=Se({pageSize:I}),{variants:l,count:i,isLoading:o,isError:c,error:m}=Z(s.id,{...n,fields:"*inventory_items.inventory.location_levels,+inventory_quantity"},{placeholderData:te}),r=_e(),d=Ne(s),{table:x}=ie({data:l??[],columns:d,count:i,enablePagination:!0,getRowId:h=>h.id,pageSize:I,meta:{product:s}});if(c)throw m;return e.jsxs(y,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(g,{level:"h2",children:t("products.variants")}),e.jsx(f,{groups:[{actions:[{label:t("actions.create"),to:"variants/create",icon:e.jsx(L,{})},{label:t("products.editPrices"),to:"prices",icon:e.jsx(j,{})}]}]})]}),e.jsx(ne,{table:x,columns:d,filters:r,count:i,pageSize:I,isLoading:o,orderBy:[{key:"title",label:t("fields.title")},{key:"created_at",label:t("fields.createdAt")},{key:"updated_at",label:t("fields.updatedAt")}],navigateTo:h=>`/products/${h.original.product_id}/variants/${h.id}`,pagination:!0,search:!0,queryObject:a})]})},ct=()=>{const s=K(),{id:t}=F(),{product:n,isLoading:a,isError:l,error:i}=R(t,{fields:X},{initialData:s}),{getWidgets:o}=k(),c=o("product.details.after"),m=o("product.details.before"),r=o("product.details.side.after"),d=o("product.details.side.before");if(a||!n)return e.jsx(Y,{mainSections:4,sidebarSections:3,showJSON:!0,showMetadata:!0});if(l)throw i;return e.jsxs(D,{widgets:{after:c,before:m,sideAfter:r,sideBefore:d},showJSON:!0,showMetadata:!0,data:n,children:[e.jsxs(D.Main,{children:[e.jsx(pe,{product:n}),e.jsx(fe,{product:n}),e.jsx(ge,{product:n}),e.jsx(Ce,{product:n})]}),e.jsxs(D.Sidebar,{children:[e.jsx(be,{product:n}),e.jsx(ye,{product:n}),e.jsx(xe,{product:n})]})]})};export{ct as Component,mt as loader};
