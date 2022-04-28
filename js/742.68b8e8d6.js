"use strict";(self["webpackChunk_1timeused_quasar"]=self["webpackChunk_1timeused_quasar"]||[]).push([[742],{8742:(e,l,a)=>{a.r(l),a.d(l,{default:()=>E});a(8964);var s=a(9835),n=a(499),r=a(7526),t=a.n(r),o=a(4511),u=a(7539);const i=e=>((0,s.dD)("data-v-4b59d94d"),e=e(),(0,s.Cn)(),e),d={class:"login-bg-img flex justify-center items-center"},m={class:"container q-py-lg"},c={class:"column items-center w-100"},p=i((()=>(0,s._)("div",null,[(0,s._)("img",{src:t(),width:"200"})],-1))),v={class:"row q-pa-md account-tab"},_={class:"col-12"},b={class:"col-12"},w={class:"col-4"},h=i((()=>(0,s._)("img",{class:"q-mr-1",src:"https://flagicons.lipis.dev/flags/4x3/pk.svg",width:"20"},null,-1))),g=i((()=>(0,s._)("div",{class:"col-1"},null,-1))),f={class:"col-7"},y={class:"col-12"},q={class:"col-12"},V={class:"w-100 q-my-lg"},x={class:"text-center q-mb-lg"},W={class:"register text-center"},k=i((()=>(0,s._)("p",{class:"text-primary"},"Already have an account?",-1))),U=i((()=>(0,s._)("div",{class:"copyrights text-center"},[(0,s._)("p",{class:"text-grey"},[(0,s.Uk)(" All rights reserved by "),(0,s._)("a",{href:"#",class:"underline-none"},"1timeused"),(0,s._)("br"),(0,s.Uk)(" powered by "),(0,s._)("a",{href:"#",class:"underline-none"},"HORIZAM")])],-1))),S={setup(e){const{rules:l}=(0,u.Z)(),a=(0,n.iH)("+92"),r=(0,n.iH)("+92"),t=(0,o.t)(),i=((0,n.iH)(""),(0,n.iH)(!0)),S=(0,n.iH)(!0),j=(0,n.iH)({name:"",email:"",phone:"",password:"",password_confirmation:"",fcm_token:"xjjxjjxjjx"}),Z=()=>{j.value.phone.length<=1&&3!=j.value.phone.substring(0,1)?j.value.phone="3":j.value.phone=j.value.phone.replace(/[^0-9]/g,"")},C=()=>{t.register(j.value)};return(e,t)=>{const o=(0,s.up)("q-icon"),u=(0,s.up)("q-input"),H=(0,s.up)("q-select"),N=(0,s.up)("q-btn"),Q=(0,s.up)("q-form");return(0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("div",m,[(0,s._)("div",c,[p,(0,s.Wm)(Q,{onSubmit:C,class:"flex justify-center items-center w-100"},{default:(0,s.w5)((()=>[(0,s._)("div",v,[(0,s._)("div",_,[(0,s.Wm)(u,{modelValue:j.value.name,"onUpdate:modelValue":t[0]||(t[0]=e=>j.value.name=e),dense:e.dense,label:"Name",class:"q-mb-md",rules:[e=>e.length>=3||"Name must be atleast 3 characters"],clearable:""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(o,{name:"person"})])),_:1},8,["modelValue","dense","rules"])]),(0,s._)("div",b,[(0,s.Wm)(u,{modelValue:j.value.email,"onUpdate:modelValue":t[1]||(t[1]=e=>j.value.email=e),dense:e.dense,label:"Enter Your Email",class:"q-mb-md",rules:[(0,n.SU)(l).required,(0,n.SU)(l).email],clearable:""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(o,{name:"person"})])),_:1},8,["modelValue","dense","rules"])]),(0,s._)("div",w,[(0,s.Wm)(H,{modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=e=>a.value=e),options:e.options,"options-html":r.value},{prepend:(0,s.w5)((()=>[h])),_:1},8,["modelValue","options","options-html"])]),g,(0,s._)("div",f,[(0,s.Wm)(u,{modelValue:j.value.phone,"onUpdate:modelValue":t[3]||(t[3]=e=>j.value.phone=e),dense:e.dense,label:j.value.phone?"":"301-12345678",class:"q-mb-md",maxlength:"10",onKeyup:Z,type:"text",rules:[(0,n.SU)(l).required,e=>3==e.substring(0,1)||"Number must start from 3",e=>10==e.length||"Number must be 10 characters"],clearable:""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(o,{name:"phone"})])),_:1},8,["modelValue","dense","label","rules"])]),(0,s._)("div",y,[(0,s.Wm)(u,{modelValue:j.value.password,"onUpdate:modelValue":t[5]||(t[5]=e=>j.value.password=e),type:i.value?"password":"text",label:"Enter Your Password",rules:[(0,n.SU)(l).required,(0,n.SU)(l).password],clearable:""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(o,{name:"lock"})])),append:(0,s.w5)((()=>[(0,s.Wm)(o,{name:i.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[4]||(t[4]=e=>i.value=!i.value)},null,8,["name"])])),_:1},8,["modelValue","type","rules"])]),(0,s._)("div",q,[(0,s.Wm)(u,{modelValue:j.value.password_confirmation,"onUpdate:modelValue":t[7]||(t[7]=e=>j.value.password_confirmation=e),type:S.value?"password":"text",label:"Confirm Your Password",rules:[e=>e.length>=6||"Password must be atleast 6 characters",e=>e==j.value.password||"Password do not match"],clearable:""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(o,{name:"lock"})])),append:(0,s.w5)((()=>[(0,s.Wm)(o,{name:S.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[6]||(t[6]=e=>S.value=!S.value)},null,8,["name"])])),_:1},8,["modelValue","type","rules"])]),(0,s._)("div",V,[(0,s._)("div",x,[(0,s.Wm)(N,{color:"primary",type:"submit",label:"Signup",class:"w-100"})]),(0,s._)("div",W,[k,(0,s.Wm)(N,{flat:"",color:"primary",label:"Sign in Now",class:"text-underline",onClick:t[8]||(t[8]=l=>e.$router.push("/login"))})]),U])])])),_:1})])])])}}};var j=a(1639),Z=a(8326),C=a(6611),H=a(2857),N=a(6764),Q=a(9379),I=a(9984),P=a.n(I);const A=(0,j.Z)(S,[["__scopeId","data-v-4b59d94d"]]),E=A;P()(S,"components",{QForm:Z.Z,QInput:C.Z,QIcon:H.Z,QSelect:N.Z,QBtn:Q.Z})}}]);