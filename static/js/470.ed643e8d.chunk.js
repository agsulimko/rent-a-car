"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[470],{4423:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var s=n(9439),a=n(2791),i=n(4420),r=n(7801),c=n(6351),l=n(3433),d=n(4372),o=n(5474),u=n(3909),m=n(4756),h=n(718),p=n(184),j=function(e){var t=e.currentItems,n=e.handleLoadMore,i=e.handleLearnMore,r=(0,a.useState)(!1),c=(0,s.Z)(r,1)[0],j=(0,a.useState)(JSON.parse(localStorage.getItem("favorites"))||[]),f=(0,s.Z)(j,2),x=f[0],g=f[1],v=function(e){var t=x.includes(e)?x.filter((function(t){return t!==e})):[].concat((0,l.Z)(x),[e]);g(t),localStorage.setItem("favorites",JSON.stringify(t))};return(0,p.jsx)(d.W,{children:(0,p.jsxs)("div",{className:"div-cards-list",children:[(0,p.jsx)(o.CS,{className:"cards-list",children:t.map((function(e,t){return(0,p.jsxs)(o.Ss,{className:"cards-item","data-category":e.category,"data-aos":"flip-left","data-aos-duration":"1000",children:[(0,p.jsxs)("picture",{children:[(0,p.jsx)("source",{srcSet:e.make,type:"image/webp"}),(0,p.jsx)("source",{srcSet:e.make,type:"image/jpeg"}),(0,p.jsx)(o.oM,{children:(0,p.jsx)(o.Ei,{src:e.img,width:"401",height:"268",alt:e.make,className:"card-img",loading:"lazy"})})]}),(0,p.jsx)("div",{className:"test-div",children:(0,p.jsx)(o.Lo,{type:"button",className:"btn-heard-icone","aria-label":x.includes(e.id)?(0,p.jsx)(u.W,{cartId:e.id,isFavorite:x.includes(e.id),onClick:function(){return v(e.id)}}):(0,p.jsx)(m.g,{cartId:e.id,isFavorite:x.includes(e.id),onClick:function(){return v(e.id)}}),onClick:function(){return v(e.id)},children:x.includes(e.id)?(0,p.jsx)(u.W,{cartId:e.id,isFavorite:x.includes(e.id),onClick:function(){return v(e.id)}}):(0,p.jsx)(m.g,{cartId:e.id,isFavorite:x.includes(e.id),onClick:function(){return v(e.id)}})})}),(0,p.jsxs)(o.Gd,{className:"DivTitle",children:[(0,p.jsxs)(o.PQ,{className:"cards-item-title",children:[e.make,e.model.length<8&&(0,p.jsxs)(o.yo,{children:[" ",e.model]}),", ",e.year]}),(0,p.jsx)(o.jp,{children:e.rentalPrice})]}),(0,p.jsxs)(o.lT,{className:"div-text-info",children:[(0,p.jsxs)(o.xS,{className:"DivFirst ",children:[(0,p.jsx)("p",{className:"City",children:e.address.split(",")[1].trim().split(" ")[0]}),(0,p.jsx)(o.OW,{}),(0,p.jsx)("p",{className:"Country",children:e.address.split(",").slice(2).join(",").trim().split(" ")[0]}),(0,p.jsx)(o.OW,{}),(0,p.jsx)("p",{className:"rentalCompany",children:e.rentalCompany}),e.rentalCompany.length<19&&(0,p.jsx)(o.OW,{}),e.rentalCompany.length<19&&(0,p.jsx)("p",{className:"Class auto",children:e.accessories.map((function(e){return e.toLowerCase().includes("premium")?"Premium":""})).find((function(e){return"Premium"===e}))||""})]}),(0,p.jsxs)(o.pZ,{className:"DivSecond ",children:[(0,p.jsxs)("p",{children:[" ",e.type," "]}),(0,p.jsx)(o.OW,{}),(0,p.jsxs)("p",{children:[" ",e.make," "]}),(0,p.jsx)(o.OW,{}),(0,p.jsxs)("p",{children:[" ",e.mileage," "]}),e.type.length<6&&(0,p.jsx)(o.OW,{}),e.type.length<6&&(0,p.jsx)("p",{children:e.accessories.map((function(e){var t=h.Z.find((function(t){return e.toLowerCase().includes(t.toLowerCase())}));return t?t.charAt(0).toUpperCase()+t.slice(1):""})).filter(Boolean)[0]||""})]})]}),(0,p.jsx)(o.Q5,{type:"button",className:"cards-item-btn","aria-label":"Open modal Learn more",id:e.id,onClick:function(){i(e.id),c(!0)},children:"Learn more"})]},t)}))}),t.length>0&&t.length>=12&&(0,p.jsx)(o.t,{type:"button",className:"cards-item-btn",onClick:n,children:"Load more"})]})})},f=n(44),x=n(4609),g=function(){var e=(0,i.I0)(),t=(0,i.v9)(c.OG)||[],n=(0,a.useState)(1),l=(0,s.Z)(n,2),o=l[0],u=l[1],m=(0,a.useState)(""),h=(0,s.Z)(m,2),g=h[0],v=h[1],C=(0,a.useState)(0),k=(0,s.Z)(C,2),y=k[0],S=k[1],N=(0,a.useState)(null),Z=(0,s.Z)(N,2),b=Z[0],I=Z[1],L=(0,a.useState)([]),O=(0,s.Z)(L,2),W=O[0],w=O[1],M=(0,a.useState)(!1),P=(0,s.Z)(M,2),F=P[0],D=P[1];(0,a.useEffect)((function(){e((0,r.Z)({page:o,make:g}))}),[e,o,g]);var _=12*o,E=_-12,G=t.slice(E,_),J=function(){var e=G.filter((function(e){return!g||e.make===g}));w(e)};return(0,p.jsxs)(d.W,{children:[(0,p.jsx)(f.Z,{handleSubmit:function(e){e.preventDefault(),J()},handleMakeChange:function(e){v(e.target.value)},handleRentalPriceChange:function(e){S(e.target.value)},selectedMake:g,selectedRentalPrice:y,onSearch:J}),(0,p.jsx)(j,{currentItems:W.length?W:G,handleLoadMore:function(){u((function(e){return e+1}))},handleLearnMore:function(e){I(e),D(!0)}}),(0,p.jsx)(x.Z,{isOpen:F,closeModal:function(){return D(!1)},currentItems:G,selectedItemId:b})]})}}}]);
//# sourceMappingURL=470.ed643e8d.chunk.js.map