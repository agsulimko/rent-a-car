"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[423],{4423:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var n=s(9439),a=s(2791),r=s(4420),i=s(7801),c=s(6351),l=s(3433),o=s(4372),d=s(5474),u=s(718),m=s(7323),h=s(184),p=function(e){var t=e.currentItems,s=e.handleLoadMore,r=e.handleLearnMore,i=(0,a.useState)(!1),c=(0,n.Z)(i,1)[0],p=(0,a.useState)(JSON.parse(localStorage.getItem("favorites"))||[]),j=(0,n.Z)(p,2),x=j[0],f=j[1];return(0,h.jsx)(o.W,{children:(0,h.jsxs)("div",{className:"div-cards-list",children:[(0,h.jsx)(d.CS,{className:"cards-list",children:t.map((function(e,t){return(0,h.jsxs)(d.Ss,{className:"cards-item","data-category":e.category,"data-aos":"flip-left","data-aos-duration":"1000",children:[(0,h.jsxs)("picture",{children:[(0,h.jsx)("source",{srcSet:e.make,type:"image/webp"}),(0,h.jsx)("source",{srcSet:e.make,type:"image/jpeg"}),(0,h.jsx)(d.oM,{children:(0,h.jsx)(d.Ei,{src:e.img,width:"401",height:"268",alt:e.make,className:"card-img",loading:"lazy"})})]}),(0,h.jsx)("div",{className:"test-div",children:(0,h.jsx)(d.Lo,{type:"button",className:"btn-heard-icone",onClick:function(){return function(e){var t=x.includes(e)?x.filter((function(t){return t!==e})):[].concat((0,l.Z)(x),[e]);f(t),localStorage.setItem("favorites",JSON.stringify(t))}(e.id)},children:x.includes(e.id)?(0,h.jsx)(d.vG,{children:(0,h.jsx)("use",{href:"".concat(m.Z,"#icon-heard_active")})}):(0,h.jsx)(d.AD,{children:(0,h.jsx)("use",{href:"".concat(m.Z,"#icon-heard")})})})}),(0,h.jsxs)(d.Gd,{className:"DivTitle",children:[(0,h.jsxs)(d.PQ,{className:"cards-item-title",children:[e.make,e.model.length<8&&(0,h.jsxs)(d.yo,{children:[" ",e.model]}),", ",e.year]}),(0,h.jsx)(d.jp,{children:e.rentalPrice})]}),(0,h.jsxs)(d.lT,{className:"div-text-info",children:[(0,h.jsxs)(d.xS,{className:"DivFirst ",children:[(0,h.jsx)("p",{className:"City",children:e.address.split(",")[1].trim().split(" ")[0]}),(0,h.jsx)(d.OW,{}),(0,h.jsx)("p",{className:"Country",children:e.address.split(",").slice(2).join(",").trim().split(" ")[0]}),(0,h.jsx)(d.OW,{}),(0,h.jsx)("p",{className:"rentalCompany",children:e.rentalCompany}),e.rentalCompany.length<19&&(0,h.jsx)(d.OW,{}),e.rentalCompany.length<19&&(0,h.jsx)("p",{className:"Class auto",children:e.accessories.map((function(e){return e.toLowerCase().includes("premium")?"Premium":""})).find((function(e){return"Premium"===e}))||""})]}),(0,h.jsxs)(d.pZ,{className:"DivSecond ",children:[(0,h.jsxs)("p",{children:[" ",e.type," "]}),(0,h.jsx)(d.OW,{}),(0,h.jsxs)("p",{children:[" ",e.make," "]}),(0,h.jsx)(d.OW,{}),(0,h.jsxs)("p",{children:[" ",e.id," "]}),e.type.length<6&&(0,h.jsx)(d.OW,{}),e.type.length<6&&(0,h.jsx)("p",{children:e.accessories.map((function(e){var t=u.Z.find((function(t){return e.toLowerCase().includes(t.toLowerCase())}));return t?t.charAt(0).toUpperCase()+t.slice(1):""})).filter(Boolean)[0]||""})]})]}),(0,h.jsx)(d.Q5,{type:"button",className:"cards-item-btn","aria-label":"Open modal Learn more",id:e.id,onClick:function(){r(e.id),c(!0)},children:"Learn more"})]},t)}))}),t.length>0&&t.length>=12&&(0,h.jsx)(d.t,{type:"button",className:"cards-item-btn",onClick:s,children:"Load more"})]})})},j=s(44),x=s(8998),f=function(){var e=(0,r.I0)(),t=(0,r.v9)(c.OG)||[],s=(0,a.useState)(1),l=(0,n.Z)(s,2),d=l[0],u=l[1],m=(0,a.useState)(""),f=(0,n.Z)(m,2),g=f[0],v=f[1],y=(0,a.useState)(0),S=(0,n.Z)(y,2),C=S[0],N=S[1],k=(0,a.useState)(null),Z=(0,n.Z)(k,2),b=Z[0],L=Z[1],O=(0,a.useState)([]),w=(0,n.Z)(O,2),I=w[0],M=w[1],W=(0,a.useState)(!1),P=(0,n.Z)(W,2),D=P[0],_=P[1];(0,a.useEffect)((function(){e((0,i.Z)({page:d,make:g}))}),[e,d,g]);var G=12*d,A=G-12,E=t.slice(A,G),J=function(){var e=E.filter((function(e){return!g||e.make===g}));M(e)};return(0,h.jsxs)(o.W,{children:[(0,h.jsx)(j.Z,{handleSubmit:function(e){e.preventDefault(),J()},handleMakeChange:function(e){v(e.target.value)},handleRentalPriceChange:function(e){N(e.target.value)},selectedMake:g,selectedRentalPrice:C,onSearch:J}),(0,h.jsx)(p,{currentItems:I.length?I:E,handleLoadMore:function(){u((function(e){return e+1}))},handleLearnMore:function(e){L(e),_(!0)}}),(0,h.jsx)(x.Z,{isOpen:D,closeModal:function(){return _(!1)},currentItems:E,selectedItemId:b})]})}}}]);
//# sourceMappingURL=423.d18ed19c.chunk.js.map