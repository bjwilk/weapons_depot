import{bS as M,r as o,bV as _,c5 as D,j as b,bW as y,bX as E,bY as B,cW as O,cX as X,m as A,cY as H,ao as K}from"./index-Dd5AIRt1.js";var C="Checkbox",[L,$]=M(C),[q,z]=L(C),P=o.forwardRef((e,n)=>{const{__scopeCheckbox:t,name:c,checked:p,defaultChecked:a,required:h,disabled:d,value:u="on",onCheckedChange:m,...g}=e,[s,x]=o.useState(null),I=_(n,r=>x(r)),k=o.useRef(!1),w=s?!!s.closest("form"):!0,[l=!1,v]=D({prop:p,defaultProp:a,onChange:m}),N=o.useRef(l);return o.useEffect(()=>{const r=s==null?void 0:s.form;if(r){const f=()=>v(N.current);return r.addEventListener("reset",f),()=>r.removeEventListener("reset",f)}},[s,v]),b.jsxs(q,{scope:t,state:l,disabled:d,children:[b.jsx(y.button,{type:"button",role:"checkbox","aria-checked":i(l)?"mixed":l,"aria-required":h,"data-state":S(l),"data-disabled":d?"":void 0,disabled:d,value:u,...g,ref:I,onKeyDown:E(e.onKeyDown,r=>{r.key==="Enter"&&r.preventDefault()}),onClick:E(e.onClick,r=>{v(f=>i(f)?!0:!f),w&&(k.current=r.isPropagationStopped(),k.current||r.stopPropagation())})}),w&&b.jsx(T,{control:s,bubbles:!k.current,name:c,value:u,checked:l,required:h,disabled:d,style:{transform:"translateX(-100%)"}})]})});P.displayName=C;var R="CheckboxIndicator",j=o.forwardRef((e,n)=>{const{__scopeCheckbox:t,forceMount:c,...p}=e,a=z(R,t);return b.jsx(B,{present:c||i(a.state)||a.state===!0,children:b.jsx(y.span,{"data-state":S(a.state),"data-disabled":a.disabled?"":void 0,...p,ref:n,style:{pointerEvents:"none",...e.style}})})});j.displayName=R;var T=e=>{const{control:n,checked:t,bubbles:c=!0,...p}=e,a=o.useRef(null),h=O(t),d=X(n);return o.useEffect(()=>{const u=a.current,m=window.HTMLInputElement.prototype,s=Object.getOwnPropertyDescriptor(m,"checked").set;if(h!==t&&s){const x=new Event("click",{bubbles:c});u.indeterminate=i(t),s.call(u,i(t)?!1:t),u.dispatchEvent(x)}},[h,t,c]),b.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:i(t)?!1:t,...p,tabIndex:-1,ref:a,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function i(e){return e==="indeterminate"}function S(e){return i(e)?"indeterminate":e?"checked":"unchecked"}var W=P,Y=j;const F=o.forwardRef(({className:e,checked:n,...t},c)=>o.createElement(W,{...t,ref:c,checked:n,className:A("group relative inline-flex h-5 w-5 items-center justify-center outline-none ",e)},o.createElement("div",{className:"text-ui-fg-on-inverted bg-ui-bg-base shadow-borders-base group-hover:bg-ui-bg-base-hover group-focus-visible:!shadow-borders-interactive-with-focus group-data-[state=checked]:bg-ui-bg-interactive group-data-[state=checked]:shadow-borders-interactive-with-shadow group-data-[state=indeterminate]:bg-ui-bg-interactive group-data-[state=indeterminate]:shadow-borders-interactive-with-shadow [&_path]:shadow-details-contrast-on-bg-interactive group-disabled:text-ui-fg-disabled group-disabled:!bg-ui-bg-disabled group-disabled:!shadow-borders-base transition-fg h-[14px] w-[14px] rounded-[3px]"},o.createElement(Y,{className:"absolute inset-0 flex items-center justify-center"},n==="indeterminate"?o.createElement(H,null):o.createElement(K,null)))));F.displayName="Checkbox";export{F as C};
