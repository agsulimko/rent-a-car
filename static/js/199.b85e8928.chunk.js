"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[199],{5199:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(9439),r=a(2791),l=a(4420),s=a(7801),i=a(6351),o=a(3433),c=a(4372),u=a(4670),d=a(7323),h=a(718),m=a(184),g=function(e){var t=e.cart,a=e.index,n=e.toggleFavorites,r=e.favorites,l=e.handleLearnMore;return(0,m.jsxs)(u.Ss,{className:"cards-item","data-category":t.category,"data-aos":"flip-left","data-aos-duration":"1000",children:[(0,m.jsxs)("picture",{children:[(0,m.jsx)("source",{srcSet:t.make,type:"image/webp"}),(0,m.jsx)("source",{srcSet:t.make,type:"image/jpeg"}),(0,m.jsx)(u.oM,{children:(0,m.jsx)(u.Ei,{src:t.img,width:"401",height:"268",alt:t.make,className:"card-img",loading:"lazy"})})]}),(0,m.jsx)("div",{className:"test-div",children:(0,m.jsx)(u.Lo,{type:"button",className:"btn-heard-icone",onClick:function(){return n(t.id)},children:r.includes(t.id)?(0,m.jsx)(u.vG,{children:(0,m.jsx)("use",{href:"".concat(d.Z,"#icon-heard_active")})}):(0,m.jsx)(u.AD,{children:(0,m.jsx)("use",{href:"".concat(d.Z,"#icon-heard")})})})}),(0,m.jsxs)(u.Gd,{className:"DivTitle",children:[(0,m.jsxs)(u.PQ,{className:"cards-item-title",children:[t.make,t.model.length<8&&(0,m.jsxs)(u.yo,{children:[" ",t.model]}),", ",t.year]}),(0,m.jsx)(u.jp,{children:t.rentalPrice})]}),(0,m.jsxs)(u.lT,{className:"div-text-info",children:[(0,m.jsxs)(u.xS,{className:"DivFirst ",children:[(0,m.jsx)("p",{className:"City",children:t.address.split(",")[1].trim().split(" ")[0]}),(0,m.jsx)(u.OW,{}),(0,m.jsx)("p",{className:"Country",children:t.address.split(",").slice(2).join(",").trim().split(" ")[0]}),(0,m.jsx)(u.OW,{}),(0,m.jsx)("p",{className:"rentalCompany",children:t.rentalCompany}),t.rentalCompany.length<19&&(0,m.jsx)(u.OW,{}),t.rentalCompany.length<19&&(0,m.jsx)("p",{className:"Class auto",children:t.accessories.map((function(e){return e.toLowerCase().includes("premium")?"Premium":""})).find((function(e){return"Premium"===e}))||""})]}),(0,m.jsxs)(u.pZ,{className:"DivSecond ",children:[(0,m.jsxs)("p",{children:[" ",t.type," "]}),(0,m.jsx)(u.OW,{}),(0,m.jsxs)("p",{children:[" ",t.make," "]}),(0,m.jsx)(u.OW,{}),(0,m.jsxs)("p",{children:[" ",t.id," "]}),t.type.length<6&&(0,m.jsx)(u.OW,{}),t.type.length<6&&(0,m.jsx)("p",{children:t.accessories.map((function(e){var t=h.Z.find((function(t){return e.toLowerCase().includes(t.toLowerCase())}));return t?t.charAt(0).toUpperCase()+t.slice(1):""})).filter(Boolean)[0]||""})]})]}),(0,m.jsx)(u.Q5,{type:"button",className:"cards-item-btn","aria-label":"Open modal Learn more",id:t.id,onClick:function(){l(t.id)},children:"Learn more"})]},a)},p=function(e){var t=e.arrayMake,a=e.arrayRentalPrice,l=e.arrayMileageFrom,s=e.arrayMileageTo,i=e.selectMake,d=e.selectRentalPrice,h=(e.selectArrayMake,e.selectMileageFrom),p=e.selectMileageTo,f=(e.adverts,e.handleLoadMore,e.handleLearnMore),x=(e.handleReloadComponent,e.currentPage,e.handleResetSelects,e.handlePageChangeAutos),j=(e.handleLoadMoreAutos,e.currentItemsAuto),v=e.currentPageAutos,y=e.handleReloadComponentAutos,S=(0,r.useState)(JSON.parse(localStorage.getItem("favorites"))||[]),b=(0,n.Z)(S,2),N=b[0],C=b[1],P=function(e){var t=N.includes(e)?N.filter((function(t){return t!==e})):[].concat((0,o.Z)(N),[e]);C(t),localStorage.setItem("favorites",JSON.stringify(t))},k=0===a.length&&d||0===t&&i||0!==p.length&&0===s.length?[]:j.filter((function(e){return(!a.length||a.includes(e.id))&&(!l.length||l.includes(e.id))&&(!s.length||s.includes(e.id))}));return(0,m.jsx)(c.W,{children:(0,m.jsxs)("div",{className:"div-cards-list",children:[(0,m.jsx)(u.CS,{className:"cards-list",children:i||d||h||p?0===l.length&&0!==h.length&&0===p.length||0!==s.length&&0===l.length&&0!==p.length&&0!==h.length?[]:k.map((function(e,t){return(0,m.jsx)(g,{cart:e,toggleFavorites:P,favorites:N,handleLearnMore:f},t)})):j.map((function(e,t){return(0,m.jsx)(g,{cart:e,toggleFavorites:P,favorites:N,handleLearnMore:f},t)}))})," ",v>1&&(0,m.jsx)(u.J4,{onClick:function(){y()},children:"To up \u21c8"}),k.length>=0&&k.length>=12&&(0,m.jsx)(u.t,{type:"button",className:"cards-item-btn",onClick:function(){return x(v+1)},children:"Load more \u21ca"})]})})},f=a(6608),x=a(1955),j=a(5218),v=Array.from({length:100},(function(e,t){return 10*(t+1)})),y=function(e){var t=e.handleMake,a=e.handleRentalPrice,s=e.handleMileageFrom,o=e.handleMileageTo,c=e.handleResetArrays,u=(e.handleResetRentalPrice,(0,r.useState)("")),d=(0,n.Z)(u,2),h=d[0],g=d[1],p=(0,r.useState)(""),y=(0,n.Z)(p,2),S=y[0],b=y[1],N=(0,r.useState)(""),C=(0,n.Z)(N,2),P=C[0],k=C[1],M=(0,r.useState)(""),Z=(0,n.Z)(M,2),A=Z[0],R=Z[1];(0,l.v9)(i.OG);return(0,m.jsxs)(f.l0,{className:"form",children:[(0,m.jsxs)(f.__,{className:"label",children:["Car brand",(0,m.jsxs)(f.mB,{type:"text",name:"Car brand",placeholder:"Enter the text",className:"input-SelectBrand-make",value:h,onChange:function(e){!function(e){var t=e.target.value;g(t)}(e)},style:{margin:0,padding:10,border:"1px solid initial"},children:[(0,m.jsx)("option",{value:"",children:"Enter the text"}),x.Z.map((function(e,t){return(0,m.jsx)("option",{value:e,children:e},t)}))]})]}),(0,m.jsxs)(f.__,{className:"label",children:["Price/1 day",(0,m.jsxs)(f.sb,{type:"number",name:"Price/1 hour",placeholder:"To $",className:"input-SelectPrice-rentalPrice",value:S,onChange:function(e){!function(e){var t=Number(e.target.value);b(t)}(e)},style:{margin:0,padding:10,border:"1px solid initial"},children:[(0,m.jsx)("option",{value:"",children:"To $"}),v.map((function(e,t){return(0,m.jsx)("option",{value:e,children:e},t)}))]})]}),(0,m.jsxs)(f.yc,{children:[(0,m.jsxs)(f.__,{className:"label",children:["Car mileage / km",(0,m.jsx)(f.gv,{type:"number",pattern:"[0-9]*",name:"Car mileage / km",placeholder:"From",className:"input-mileage-From",style:{opacity:1,color:"black",border:"1px solid initial"},value:P,onChange:function(e){!function(e){var t=Number(e.target.value);k(t)}(e)}})]}),(0,m.jsx)(f.__,{className:"label",children:(0,m.jsx)(f.pq,{type:"number",pattern:"[0-9]*",name:"Car mileage / km",placeholder:"To",className:"input-mileage-To",value:A,onChange:function(e){!function(e){var t=Number(e.target.value);R(t)}(e)},style:{opacity:1,color:"black",border:"1px solid initial"}})})]}),(0,m.jsx)(f.ce,{className:"btn",type:"button",onClick:function(e){e.preventDefault(),h||S||P||0===P||A?Number(P)>Number(A)&&P&&A||0===A?j.ZP.error("From must be less than TO,choose other mileage values!",{duration:3e3,position:"top-center"}):(t(h),a(S),s(P,A),o(A,P)):j.ZP.error("Nothing found, please make a new request!",{duration:3e3,position:"top-center"})},children:"Search"}),(0,m.jsx)(f.h3,{className:"btn",type:"button",onClick:function(e){!function(e){e.preventDefault(),t(""),a(""),s(""),o(""),g(""),b(""),k(""),R(""),c()}(e)},children:"Reset Filters"})]})},S=a(8998),b=function(e){var t=e.handleResetArrays,a=e.handleResetRentalPrice,o=(0,l.I0)(),u=(0,l.v9)(i.o9)||[],d=(0,r.useState)(""),h=(0,n.Z)(d,2),g=h[0],f=h[1],x=(0,r.useState)([]),j=(0,n.Z)(x,2),v=j[0],b=j[1],N=(0,r.useState)([]),C=(0,n.Z)(N,2),P=C[0],k=C[1],M=(0,r.useState)([]),Z=(0,n.Z)(M,2),A=Z[0],R=Z[1],I=(0,r.useState)(0),L=(0,n.Z)(I,2),F=L[0],T=L[1],_=(0,r.useState)(0),O=(0,n.Z)(_,2),w=O[0],W=O[1],E=(0,r.useState)(""),D=(0,n.Z)(E,2),G=D[0],q=D[1],B=(0,r.useState)(parseInt(localStorage.getItem("currentPage"),10)||1),J=(0,n.Z)(B,2),Q=J[0],$=J[1],z=(0,r.useState)(parseInt(localStorage.getItem("currentPageAutos"),10)||1),U=(0,n.Z)(z,2),H=U[0],K=U[1],V=(0,r.useState)(null),X=(0,n.Z)(V,2),Y=X[0],ee=X[1],te=(0,r.useState)(!1),ae=(0,n.Z)(te,2),ne=ae[0],re=ae[1],le=(0,r.useState)(!1),se=(0,n.Z)(le,2),ie=se[0],oe=se[1],ce=(0,r.useState)(!1),ue=(0,n.Z)(ce,2),de=ue[0],he=ue[1];(0,r.useEffect)((function(){o((0,s.GA)({page:Q}))}),[o,Q,ie]),(0,r.useEffect)((function(){o((0,s.qZ)({make:g}))}),[o,g,H,de]);var me=12*H,ge=me-12,pe=u.slice(ge,me);(0,r.useEffect)((function(){K(1),localStorage.setItem("currentPageAutos",1)}),[]);t=function(){a(),R([]),k([]),q("")},a=function(){b("")},console.log("arrayMileageTo=",A),console.log("arrayMileageFrom=",P);var fe=function(){oe((function(e){return!e})),$(1),localStorage.setItem("currentPage",1)};return(0,m.jsxs)(c.W,{children:[(0,m.jsx)(y,{handleMake:function(e){f(e)},handleRentalPrice:function(e,t,a,n){var r=[];q(e),u.forEach((function(t){Number(t.rentalPrice.slice(1))<=e&&r.push(t.id)})),b(r)},handleMileageFrom:function(e,t){if(W(e),T(t),e>t&&0!==t.length||0!==e.length&&0!==t.length&&0===A.length)k([]);else{var a=u.filter((function(t){return t.mileage>=e})).map((function(e){return e.id}));k(a)}},handleMileageTo:function(e,t){if(W(t),T(e),t>e)R([]);else{var a=u.filter((function(t){return Number(t.mileage)<=e})).map((function(e){return e.id}));!t||t?R(a||[]):t>e&&R([])}},handleResetArrays:t,handleReloadAdverts:function(){o((0,s.GA)({page:1}))},handleReloadComponent:fe,handleResetRentalPrice:a}),(0,m.jsx)(p,{currentItemsAuto:pe,handleLoadMore:function(){$((function(e){var t=e+1;return localStorage.setItem("currentPage",t),t}))},handleLearnMore:function(e){ee(e),re(!0)},handleReloadComponent:fe,currentPage:Q,currentPageAutos:H,arrayRentalPrice:v,arrayMileageTo:A,arrayMileageFrom:P,selectMake:g,selectMileageFrom:w,selectMileageTo:F,selectRentalPrice:G,handlePageChangeAutos:function(e){K(e),localStorage.setItem("currentPageAutos",e)},handleLoadMoreAutos:function(){K((function(e){var t=e+1;return K(t),localStorage.setItem("currentPageAutos",t),t}))},handleReloadComponentAutos:function(){he((function(e){return!e})),K(1),localStorage.setItem("currentPageAutos",1)}}),(0,m.jsx)(S.Z,{isOpen:ne,closeModal:function(){return re(!1)},currentItemsAuto:pe,selectedItemId:Y})]})}}}]);
//# sourceMappingURL=199.b85e8928.chunk.js.map