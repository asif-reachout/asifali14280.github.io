"use strict";(self["webpackChunk_1timeused_quasar"]=self["webpackChunk_1timeused_quasar"]||[]).push([[301],{7671:(t,e,a)=>{a.d(e,{I:()=>r,U:()=>s});const s=(t,e)=>{const a=localStorage.getItem(t),s=localStorage.getItem(t+"_loaded_time"),r=60*e*1e3;return a&&s&&Date.now()-s<r?JSON.parse(a):null},r=(t,e)=>{localStorage.setItem(t,JSON.stringify(e)),localStorage.setItem(t+"_loaded_time",Date.now())}},1841:(t,e,a)=>{a.d(e,{Z:()=>d});a(702),a(4641),a(3269);var s=a(9981),r=a.n(s),n=a(4006);function o(t){n.Z}const l="https://1timeused.com/api/";class u{async request(t,e=null,a="GET",s="application/json"){o();let n={method:a,headers:{Accept:"application/json","Device-Id":"sdfsdsd","Device-Type":"web"}};"application/json"==s&&(n.headers["Content-Type"]=s),"GET"!==n.method?"multipart/form-data"==s.toLowerCase()?n.data=c(e):e&&"object"===typeof e&&(n.data=JSON.stringify(e)):e&&(t=this.appendParams(t,e)),n.url=this.url(t);try{const t=await r()(n);return{status:t.status,...await t.data}}catch(l){return console.log(l.response),l.response.data}}async get(t,e=null){return await this.request(t,e,"GET")}async post(t,e=null){return await this.request(t,e,"POST")}async put(t,e=null){return await this.request(t,e,"PUT")}async delete(t,e=null){return await this.request(t,e,"DELETE")}async patch(t,e=null){return await this.request(t,e,"PATCH")}async upload(t,e=null){return await this.request(t,e,"POST","multipart/form-data")}async formData(t,e=null){return await this.request(t,e,"POST","multipart/form-data")}appendParams(t,e){let a=new URL(this.url(t)),s=new URLSearchParams(a.search.slice(1));if(e&&"object"===typeof e)for(let r in e)s.append(r,e[r]);return t=t.split("?")[0]+"?"+s.toString(),t}url(t){return`${l}${l&&"/"==l.slice(l.length-1)?"":"/"}${t}`}}function c(t){const e=new FormData;for(const a in t)if(Array.isArray(t[a]))for(let s=0;s<t[a].length;s++)e.append(a+"[]",t[a][s]);else e.append(a,t[a]);return e}const d=new u},5413:(t,e,a)=>{a.d(e,{a:()=>o});var s=a(2502),r=(a(4006),a(7671)),n=a(1841);const o=(0,s.Q_)("productsStore ",{state:()=>({recentProducts:[],featuredProducts:[],loadedProduct:null}),getters:{},actions:{async loadRecentProducts(){if(this.recentProducts.length)return;const t="viewed_products",e=(0,r.U)(t,1);if(e)return void(this.recentProducts=e);const a=await n.Z.get("products/recentlyviewed");200==a.status?(this.recentProducts=a.data,(0,r.I)(t,a.data)):console.log("Error in Recently viewed",a)},async loadFeaturedProducts(){if(this.featuredProducts.length)return;const t=(0,r.U)("featured_products",2);if(t)return void(this.featuredProducts=t);const e=await n.Z.get("products/featured");200==e.status?(this.featuredProducts=e.data,(0,r.I)("featured_products",e.data)):console.log("Error in Featured",e)},async loadProductDetails(t){const e=await n.Z.get(`products/${t}`);return 200==e.status&&(this.loadedProduct=e.data),e}}})},5692:(t,e,a)=>{a.d(e,{Z:()=>P});var s=a(9835),r=a(499),n=a(6970);const o=t=>((0,s.dD)("data-v-0d1975c6"),t=t(),(0,s.Cn)(),t),l={class:"img-holder"},u={class:"ellipsis text-subtitle2 mobile-font"},c={class:"prise text-center"},d={class:"flex justify-between"},i={class:"q-mr-sm"},p=o((()=>(0,s._)("small",null," 12 april ",-1))),m={props:{product:Object},setup(t){const e=t,a="https://1timeused.com/",{product:o}=(0,r.BK)(e);return(t,e)=>{const m=(0,s.up)("q-img"),g=(0,s.up)("q-btn"),w=(0,s.up)("q-card-section"),f=(0,s.up)("q-card");return(0,s.wg)(),(0,s.j4)(f,{class:"product-card cursor-pointer my-card",onClick:e[0]||(e[0]=e=>t.$router.push(`/product_details/${(0,r.SU)(o).id}`))},{default:(0,s.w5)((()=>[(0,s._)("div",l,[(0,s.Wm)(m,{src:(0,r.SU)(a)+(0,r.SU)(o).gallery[0].path,class:"fit"},null,8,["src"])]),(0,s.Wm)(w,null,{default:(0,s.w5)((()=>[(0,s.Wm)(g,{round:"",size:"sm",color:"primary",icon:"favorite_border",class:"absolute",style:{top:"0",right:"12px",transform:"translateY(-50%)"}}),(0,s._)("p",u,(0,n.zw)((0,r.SU)(o).title),1),(0,s._)("p",c,"RS:"+(0,n.zw)((0,r.SU)(o).price),1),(0,s._)("div",d,[(0,s._)("small",i,(0,n.zw)((0,r.SU)(o).city),1),p])])),_:1})])),_:1})}}};var g=a(1639),w=a(4458),f=a(335),v=a(3190),h=a(9379),_=a(9984),y=a.n(_);const q=(0,g.Z)(m,[["__scopeId","data-v-0d1975c6"]]),P=q;y()(m,"components",{QCard:w.Z,QImg:f.Z,QCardSection:v.Z,QBtn:h.Z})},9301:(t,e,a)=>{a.r(e),a.d(e,{default:()=>F});var s=a(9835),r=a(499),n=a(7671),o=a(1841);const l={class:"slider-main"},u={setup(t){const e=(0,r.iH)(),a=(0,r.iH)([]);(0,s.bv)((async()=>{const t="banners",s=(0,n.U)(t,5);if(s)return a.value=s,void(e.value=a.value.length?a.value[0].id:0);const r=await o.Z.get("banners");200==r.status&&(a.value=r.data),e.value=a.value.length?a.value[0].id:0,(0,n.I)(t,r.data)}));const u="https://1timeused.com/";return(t,n)=>{const o=(0,s.up)("q-carousel-slide"),c=(0,s.up)("q-carousel");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(c,{animated:"",modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=t=>e.value=t),navigation:"",infinite:"",arrows:"","transition-prev":"slide-right","transition-next":"slide-left",onMouseenter:n[1]||(n[1]=e=>t.autoplay=!1),onMouseleave:n[2]||(n[2]=e=>t.autoplay=!0),class:"fit"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.value,(t=>((0,s.wg)(),(0,s.j4)(o,{name:t.id,key:t.id,"img-src":(0,r.SU)(u)+t.image},null,8,["name","img-src"])))),128))])),_:1},8,["modelValue"])])}}};var c=a(1639),d=a(960),i=a(1694),p=a(9984),m=a.n(p);const g=(0,c.Z)(u,[["__scopeId","data-v-5e8896e2"]]),w=g;m()(u,"components",{QCarousel:d.Z,QCarouselSlide:i.Z});var f=a(5692),v=a(5413);const h=t=>((0,s.dD)("data-v-49608996"),t=t(),(0,s.Cn)(),t),_={class:"conatiner flex justify-center items-center"},y={class:"column q-pb-xl"},q=h((()=>(0,s._)("h5",{class:"text-center q-pb-xl"},"Feature Products",-1))),P={class:"flex q-gutter-y-md q-gutter-x-sm q-mx-auto q-mb-lg justify-center items-center"},S={setup(t){const e=(0,v.a)();return(t,a)=>{const n=(0,s.up)("q-page-container");return(0,s.wg)(),(0,s.j4)(n,null,{default:(0,s.w5)((()=>[(0,s._)("div",_,[(0,s._)("div",y,[q,(0,s._)("div",P,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,r.SU)(e).featuredProducts,(t=>((0,s.wg)(),(0,s.j4)(f.Z,{product:t,key:t},null,8,["product"])))),128))])])])])),_:1})}}};var Z=a(2133);const b=(0,c.Z)(S,[["__scopeId","data-v-49608996"]]),U=b;m()(S,"components",{QPageContainer:Z.Z});var j=a(9302);const C=t=>((0,s.dD)("data-v-72c37e22"),t=t(),(0,s.Cn)(),t),x={class:"row text-center"},D={class:"col-12"},I=C((()=>(0,s._)("h5",{class:"text-center"},"Recent Products",-1))),k={class:"row fit justify-center items-center q-gutter-md q-col-gutter no-wrap"},Q={setup(t){const e=(0,v.a)(),a=(0,r.iH)(1),n=(0,j.Z)();(0,s.Fl)((()=>n.screen.xs?2:n.screen.sm?4:n.screen.md?6:n.screen.lg?8:10));return(t,n)=>{const o=(0,s.up)("q-carousel-slide"),l=(0,s.up)("q-carousel"),u=(0,s.up)("q-page-container");return(0,s.wg)(),(0,s.j4)(u,{class:"column section-main-div"},{default:(0,s.w5)((()=>[(0,s._)("div",x,[(0,s._)("div",D,[I,(0,s.Wm)(l,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=t=>a.value=t),"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"","control-color":"primary",navigation:"false",padding:"",arrows:""},{default:(0,s.w5)((()=>[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(8,(t=>(0,s.Wm)(o,{key:t,name:t,class:"column no-wrap"},{default:(0,s.w5)((()=>[(0,s._)("div",k,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,r.SU)(e).recentProducts,(t=>((0,s.wg)(),(0,s.j4)(f.Z,{key:t,product:t},null,8,["product"])))),128))])])),_:2},1032,["name"]))),64))])),_:1},8,["modelValue"])])])])),_:1})}}},T=(0,c.Z)(Q,[["__scopeId","data-v-72c37e22"]]),E=T;m()(Q,"components",{QPageContainer:Z.Z,QCarousel:d.Z,QCarouselSlide:i.Z});const H={class:"container"},O={setup(t){const e=(0,v.a)();return(0,s.bv)((()=>{e.loadRecentProducts(),e.loadFeaturedProducts()})),(t,a)=>{const n=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(n,null,{default:(0,s.w5)((()=>[(0,s.Wm)(w),(0,s._)("div",H,[(0,r.SU)(e).recentProducts.length?((0,s.wg)(),(0,s.j4)(E,{key:0})):(0,s.kq)("",!0),(0,r.SU)(e).featuredProducts.length?((0,s.wg)(),(0,s.j4)(U,{key:1})):(0,s.kq)("",!0)])])),_:1})}}};var R=a(9885);const W=O,F=W;m()(O,"components",{QPage:R.Z})}}]);