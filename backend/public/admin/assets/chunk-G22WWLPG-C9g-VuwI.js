function a(e){switch(e.startsWith("/settings/secret-api-keys")){case!0:return"secret";case!1:return"publishable"}}function r(e,t){return e?{color:"red",label:t("apiKeyManagement.status.revoked")}:{color:"green",label:t("apiKeyManagement.status.active")}}function s(e,t){return e==="publishable"?{color:"green",label:t("apiKeyManagement.type.publishable")}:{color:"blue",label:t("apiKeyManagement.type.secret")}}var n=e=>e.replace("***","•••");export{s as a,r as b,a as g,n as p};