(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[752],{8240:function(e,r,s){Promise.resolve().then(s.bind(s,9204))},9204:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return a}});var t=s(7949),i=s(4571),c=s(5938),l=s(6265);function a(){let{register:e,handleSubmit:r}=(0,c.cI)(),[s,a]=(0,l.useState)([]),[d,n]=(0,l.useState)([]);async function o(){let e=await fetch("http://localhost:3000/api/product");a(await e.json())}async function u(){let e=await fetch("http://localhost:3000/api/category");n(await e.json())}let h=e=>async()=>{confirm("Are you sure?")&&(await fetch("http://localhost:3000/api/product/".concat(e),{method:"DELETE"}),o())};return(0,l.useEffect)(()=>{u(),o()},[]),(0,t.jsxs)("div",{className:"flex flex-row gap-4",children:[(0,t.jsx)("div",{className:"flex-1 w-64 ",children:(0,t.jsx)("form",{onSubmit:r(e=>{fetch("http://localhost:3000/api/product",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(()=>o())}),children:(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-4 m-4 w-1/2",children:[(0,t.jsx)("div",{children:"Code:"}),(0,t.jsx)("div",{children:(0,t.jsx)("input",{name:"code",type:"text",...e("code",{required:!0}),className:"border border-black w-full"})}),(0,t.jsx)("div",{children:"Name:"}),(0,t.jsx)("div",{children:(0,t.jsx)("input",{name:"name",type:"text",...e("name",{required:!0}),className:"border border-black w-full"})}),(0,t.jsx)("div",{children:"Description:"}),(0,t.jsx)("div",{children:(0,t.jsx)("textarea",{name:"description",...e("description",{required:!0}),className:"border border-black w-full"})}),(0,t.jsx)("div",{children:"Price:"}),(0,t.jsx)("div",{children:(0,t.jsx)("input",{name:"name",type:"number",...e("price",{required:!0}),className:"border border-black w-full"})}),(0,t.jsx)("div",{children:"Category:"}),(0,t.jsx)("div",{children:(0,t.jsx)("select",{name:"category",...e("category",{required:!0}),className:"border border-black w-full",children:d.map(e=>(0,t.jsx)("option",{value:e._id,children:e.name},e._id))})}),(0,t.jsx)("div",{className:"col-span-2",children:(0,t.jsx)("input",{type:"submit",value:"Add",className:"bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"})})]})})}),(0,t.jsxs)("div",{className:"border m-4 bg-slate-300 flex-1 w-64",children:[(0,t.jsxs)("h1",{className:"text-2xl",children:["Products (",s.length,")"]}),(0,t.jsx)("ul",{className:"list-disc ml-8",children:s.map(e=>(0,t.jsxs)("li",{children:[(0,t.jsx)("button",{className:"border border-black p-1/2",onClick:h(e._id),children:"❌"})," ",(0,t.jsx)(i.default,{href:"/product/".concat(e._id),className:"font-bold",children:e.name})," ","- ",e.description]},e._id))})]})]})}}},function(e){e.O(0,[339,47,623,744],function(){return e(e.s=8240)}),_N_E=e.O()}]);