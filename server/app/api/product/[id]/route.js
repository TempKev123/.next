"use strict";(()=>{var e={};e.id=44,e.ids=[44],e.modules={1185:e=>{e.exports=require("mongoose")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3736:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>g,patchFetch:()=>y,requestAsyncStorage:()=>c,routeModule:()=>s,serverHooks:()=>m,staticGenerationAsyncStorage:()=>l});var o={};t.r(o),t.d(o,{DELETE:()=>u,GET:()=>d});var i=t(6360),n=t(445),p=t(475),a=t(1354);async function d(e,{params:r}){let t=r.id,o=await a.Z.findById(t).populate("category");return console.log({product:o}),Response.json(o)}async function u(e,{params:r}){let t=r.id;return Response.json(await a.Z.findByIdAndDelete(t))}let s=new i.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/product/[id]/route",pathname:"/api/product/[id]",filename:"route",bundlePath:"app/api/product/[id]/route"},resolvedPagePath:"C:\\Users\\kevin\\mongo\\next-mongo-master\\app\\api\\product\\[id]\\route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:c,staticGenerationAsyncStorage:l,serverHooks:m}=s,g="/api/product/[id]/route";function y(){return(0,p.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:l})}},1354:(e,r,t)=>{t.d(r,{Z:()=>p});var o=t(1185),i=t.n(o);let n=new(i()).Schema({code:{type:String,required:!0},name:{type:String,required:!0},description:{type:String,required:!0},price:{type:Number,required:!0},category:{type:i().Schema.Types.ObjectId,ref:"category"}}),p=i().models.product||i().model("product",n)},6360:(e,r,t)=>{e.exports=t(517)}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[603],()=>t(3736));module.exports=o})();