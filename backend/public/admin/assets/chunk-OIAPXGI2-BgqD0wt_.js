import{cZ as m,c_ as y}from"./index-Dd5AIRt1.js";var v=(s,e)=>!s||!e?!1:s.first_name===e.first_name&&s.last_name===e.last_name&&s.address_1===e.address_1&&s.address_2===e.address_2&&s.city===e.city&&s.postal_code===e.postal_code&&s.province===e.province&&s.country_code===e.country_code,g=({address:s})=>{if(!s)return[];const{first_name:e,last_name:r,company:n,address_1:a,address_2:i,city:u,postal_code:f,province:l,country:c,country_code:o}=s,d=[e,r].filter(Boolean).join(" "),t=[];d&&t.push(d),n&&t.push(n),a&&t.push(a),i&&t.push(i);const _=[u,l,f].filter(Boolean).join(" ");if(_&&t.push(_),c)t.push(c.display_name);else if(o){const p=m(o);p?t.push(p.display_name):t.push(o.toUpperCase())}return t},A=s=>{if(!s)return"";const e=y.find(r=>r.iso_2===s);return e?e.display_name:s};export{g as a,A as g,v as i};