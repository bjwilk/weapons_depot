import{r as g}from"./index-Dd5AIRt1.js";function o(){return o=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},o.apply(this,arguments)}function m(r,e){if(r==null)return{};var t={},n=Object.keys(r),i,a;for(a=0;a<n.length;a++)i=n[a],!(e.indexOf(i)>=0)&&(t[i]=r[i]);return t}var y=["cdnSuffix","cdnUrl","countryCode","style","svg"],h="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/",C="svg",b=127397,j=function(e){var t=e.cdnSuffix,n=t===void 0?C:t,i=e.cdnUrl,a=i===void 0?h:i,l=e.countryCode,s=e.style,c=e.svg,f=c===void 0?!1:c,d=m(e,y);if(typeof l!="string")return null;if(f){var u=""+a+l.toLowerCase()+"."+n;return g.createElement("img",Object.assign({},d,{src:u,style:o({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},s)}))}var v=l.toUpperCase().replace(/./g,function(p){return String.fromCodePoint(p.charCodeAt(0)+b)});return g.createElement("span",Object.assign({role:"img"},d,{style:o({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},s)}),v)};export{j as R};
