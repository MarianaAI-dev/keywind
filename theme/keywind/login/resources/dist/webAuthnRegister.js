<<<<<<< HEAD
import{m as T}from"./assets/module.esm-9a996e1c.js";import{b as a}from"./assets/index-a7b84447.js";document.addEventListener("alpine:init",()=>{T.data("webAuthnRegister",function(){const{attestationObjectInput:m,authenticatorLabelInput:g,clientDataJSONInput:A,errorInput:I,publicKeyCredentialIdInput:w,registerForm:s,transportsInput:C}=this.$refs,{attestationConveyancePreference:u,authenticatorAttachment:c,challenge:K,createTimeout:l,excludeCredentialIds:v,requireResidentKey:p,rpEntityName:S,rpId:P,signatureAlgorithms:R,unsupportedBrowserText:x,userId:E,userVerificationRequirement:d,username:f}=this.$store.webAuthnRegister,L=t=>{const e=[];return t===""?(e.push({alg:-7,type:"public-key"}),e):(t.split(",").forEach(r=>{e.push({alg:parseInt(r),type:"public-key"})}),e)},q=t=>{const e=[];return t===""||t.split(",").forEach(r=>{e.push({id:a.parse(r,{loose:!0}),type:"public-key"})}),e},N=t=>{if(t===""||t.constructor!==Array)return"";let e="";return t.forEach(i=>{e+=i+","}),e.slice(0,-1)};return{registerSecurityKey:()=>{if(!window.PublicKeyCredential){I.value=x,s.submit();return}const t={challenge:a.parse(K,{loose:!0}),pubKeyCredParams:L(R),rp:{id:P,name:S},user:{displayName:f,id:a.parse(E,{loose:!0}),name:f}};u!=="not specified"&&(t.attestation=u);const e={};let i=!1;c!=="not specified"&&(e.authenticatorAttachment=c,i=!0),p!=="not specified"&&(p==="Yes"?e.requireResidentKey=!0:e.requireResidentKey=!1,i=!0),d!=="not specified"&&(e.userVerification=d,i=!0),i&&(t.authenticatorSelection=e);const r=q(v);r.length>0&&(t.excludeCredentials=r),parseInt(l)!==0&&(t.timeout=parseInt(l)*1e3),navigator.credentials.create({publicKey:t}).then(n=>{if(n instanceof PublicKeyCredential&&n.response instanceof AuthenticatorAttestationResponse){const{getTransports:h}=n.response;window.result=n;const O=n.rawId;if(m.value=a.stringify(new Uint8Array(n.response.attestationObject),{pad:!1}),A.value=a.stringify(new Uint8Array(n.response.clientDataJSON),{pad:!1}),w.value=a.stringify(new Uint8Array(O),{pad:!1}),typeof h=="function"){const b=h();b&&(C.value=N(b))}else console.log("Your browser is not able to recognize supported transport media for the authenticator.");const y="WebAuthn Authenticator (Default Label)";let o=window.prompt("Please input your registered authenticator's label",y);o===null&&(o=y),g.value=o,s.submit()}}).catch(function(n){n.value=n,s.submit()})}}})});
=======
import{m as T}from"./assets/module.esm-a89a43e5.js";import{b as a}from"./assets/index-a7b84447.js";document.addEventListener("alpine:init",()=>{T.data("webAuthnRegister",function(){const{attestationObjectInput:m,authenticatorLabelInput:g,clientDataJSONInput:A,errorInput:I,publicKeyCredentialIdInput:w,registerForm:s,transportsInput:C}=this.$refs,{attestationConveyancePreference:u,authenticatorAttachment:c,challenge:K,createTimeout:l,excludeCredentialIds:v,requireResidentKey:p,rpEntityName:S,rpId:P,signatureAlgorithms:R,unsupportedBrowserText:x,userId:E,userVerificationRequirement:d,username:f}=this.$store.webAuthnRegister,L=t=>{const e=[];return t===""?(e.push({alg:-7,type:"public-key"}),e):(t.split(",").forEach(r=>{e.push({alg:parseInt(r),type:"public-key"})}),e)},q=t=>{const e=[];return t===""||t.split(",").forEach(r=>{e.push({id:a.parse(r,{loose:!0}),type:"public-key"})}),e},N=t=>{if(t===""||t.constructor!==Array)return"";let e="";return t.forEach(i=>{e+=i+","}),e.slice(0,-1)};return{registerSecurityKey:()=>{if(!window.PublicKeyCredential){I.value=x,s.submit();return}const t={challenge:a.parse(K,{loose:!0}),pubKeyCredParams:L(R),rp:{id:P,name:S},user:{displayName:f,id:a.parse(E,{loose:!0}),name:f}};u!=="not specified"&&(t.attestation=u);const e={};let i=!1;c!=="not specified"&&(e.authenticatorAttachment=c,i=!0),p!=="not specified"&&(p==="Yes"?e.requireResidentKey=!0:e.requireResidentKey=!1,i=!0),d!=="not specified"&&(e.userVerification=d,i=!0),i&&(t.authenticatorSelection=e);const r=q(v);r.length>0&&(t.excludeCredentials=r),parseInt(l)!==0&&(t.timeout=parseInt(l)*1e3),navigator.credentials.create({publicKey:t}).then(n=>{if(n instanceof PublicKeyCredential&&n.response instanceof AuthenticatorAttestationResponse){const{getTransports:h}=n.response;window.result=n;const O=n.rawId;if(m.value=a.stringify(new Uint8Array(n.response.attestationObject),{pad:!1}),A.value=a.stringify(new Uint8Array(n.response.clientDataJSON),{pad:!1}),w.value=a.stringify(new Uint8Array(O),{pad:!1}),typeof h=="function"){const b=h();b&&(C.value=N(b))}else console.log("Your browser is not able to recognize supported transport media for the authenticator.");const y="WebAuthn Authenticator (Default Label)";let o=window.prompt("Please input your registered authenticator's label",y);o===null&&(o=y),g.value=o,s.submit()}}).catch(function(n){n.value=n,s.submit()})}}})});
>>>>>>> 783a0ab (Small changes)
