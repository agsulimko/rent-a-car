"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[995],{4995:function(e,n,t){t.r(n),t.d(n,{default:function(){return ne}});var r,i,o,a,s,l,c,d,h,u,p,f,g,x,m,v,b,Z,j,w=t(3433),P=t(9439),k=t(2791),y=t(4420),C=t(6351),S=t(7801),N=t(4372),F=t(168),I=t(7924),_=t(1439),z=I.ZP.li(r||(r=(0,F.Z)(["\n  position: relative;\n  width: 274px;\n  height: 426px;\n\n  transition: all 0.5s ease;\n  overflow: hidden;\n\n  & img {\n  }\n  &:hover,\n  &:focus {\n    filter: drop-shadow(4px 4px 12px rgba(0, 0, 0, 0.3));\n  }\n"]))),L=I.ZP.ul(i||(i=(0,F.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 100px;\n\n  gap: 24px;\n"]))),W=I.ZP.div(o||(o=(0,F.Z)(["\n  margin-bottom: 14px;\n  overflow: hidden;\n  border-radius: 15px;\n"]))),M=I.ZP.img(a||(a=(0,F.Z)(["\n  width: 401px;\n  height: 268px;\n  border-radius: 15px;\n  object-fit: cover;\n  max-width: 120%;\n  overflow: hidden;\n"]))),O=I.ZP.div(s||(s=(0,F.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),A=I.ZP.h3(l||(l=(0,F.Z)(["\n  font-weight: ",";\n  margin-bottom: 0;\n  color: ",";\n  font-size: 16px;\n  line-height: 1.5;\n  /* line-height: 150%; */\n"])),_.r.fontWeight.medium,_.r.color.black_light),D=I.ZP.h3(c||(c=(0,F.Z)(["\n  margin-bottom: 0;\n  font-size: 16px;\n  line-height: 1.5;\n  font-weight: ",";\n"])),_.r.fontWeight.medium),E=I.ZP.span(d||(d=(0,F.Z)(["\n  color: ",";\n"])),_.r.color.blue_light),J=I.ZP.div(h||(h=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: ",";\n  font-size: 12px;\n  line-height: 1.5;\n\n  color: rgba(18, 20, 23, 0.5);\n"])),_.r.fontWeight.regular),B=I.ZP.div(u||(u=(0,F.Z)(["\n  display: flex;\n  gap: 5px;\n"]))),G=I.ZP.div(p||(p=(0,F.Z)(["\n  display: flex;\n  gap: 5px;\n"]))),R=I.ZP.div(f||(f=(0,F.Z)(["\n  width: 1.8px;\n  height: 16px;\n  background-color: rgba(18, 20, 23, 0.1);\n"]))),T=(I.ZP.p(g||(g=(0,F.Z)(["\n  color: #f8f8f8;\n\n  margin-bottom: 16px;\n  height: 30px;\n\n  overflow: hidden;\n  width: 303px;\n  font-size: 12px;\n  line-height: 16px;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n"]))),I.ZP.div(x||(x=(0,F.Z)(["\n  overflow: hidden;\n  border-radius: 15px;\n"]))),I.ZP.p(m||(m=(0,F.Z)(["\n  position: absolute;\n  bottom: 22px;\n  left: 16px;\n  font-size: 14px;\n  color: #f8f8f8;\n"]))),I.ZP.button(v||(v=(0,F.Z)(["\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 0;\n  width: 46px;\n  height: 46px;\n\n  &:hover g,\n  &:focus g {\n    fill: #34ffaa;\n    stroke-width: 1px;\n    stroke: #3470ff;\n  }\n"])))),U=I.ZP.button(b||(b=(0,F.Z)(["\n  margin: 0;\n  margin-top: 28px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  font-family: 'Manrope', sans-serif;\n  font-size: 16px;\n  font-weight: ",";\n  width: 100%;\n  line-height: 1.43;\n\n  border-radius: 12px;\n  color: ",";\n  background-color: ",";\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),_.r.fontWeight.semiBold,_.r.color.white_full,_.r.color.blue_light,_.r.color.blue_dark),q=I.ZP.button(Z||(Z=(0,F.Z)(["\n  display: block;\n  margin-left: 565px;\n  margin-bottom: 20px;\n\n  text-decoration: underline;\n  font-size: 16px;\n  font-weight: ",";\n\n  border-radius: 8px;\n  color: ",";\n\n  line-height: 1.5;\n  /* line-height: 150%; */\n  text-decoration: underline;\n  color: #3470ff;\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),_.r.fontWeight.medium,_.r.color.blue_light,_.r.color.blue_dark),H=I.ZP.button(j||(j=(0,F.Z)(["\n  padding-bottom: 150px;\n  display: block;\n  margin-left: 546px;\n  text-decoration: underline;\n  font-size: 16px;\n  font-weight: ",";\n\n  border-radius: 8px;\n  color: ",";\n\n  line-height: 1.5;\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),_.r.fontWeight.medium,_.r.color.blue_light,_.r.color.blue_dark),K=t(5474),Q=t(718),V=t(7323),X=t(184),Y=function(e){var n=e.currentFavoriteAdverts,t=e.favorites,r=e.toggleFavorite,i=e.handlePageChange,o=e.currentPage,a=e.favoriteAdverts,s=e.handleLearnMore,l=e.handleReloadComponentFavorites,c=(e.hasFavorites,e.currentPageFavorites);return(0,X.jsx)(N.W,{children:(0,X.jsxs)("div",{className:"div-cards-list",children:[(0,X.jsx)(L,{className:"cards-list",children:n.map((function(e,n){return(0,X.jsxs)(z,{className:"cards-item","data-category":e.category,"data-aos":"flip-left","data-aos-duration":"1000",children:[(0,X.jsxs)("picture",{children:[(0,X.jsx)("source",{srcSet:e.make,type:"image/webp"}),(0,X.jsx)("source",{srcSet:e.make,type:"image/jpeg"}),(0,X.jsx)(W,{children:(0,X.jsx)(M,{src:e.img,width:"401",height:"268",alt:e.make,className:"card-img",loading:"lazy"})})]}),(0,X.jsx)("div",{className:"test-div",children:(0,X.jsx)(T,{type:"button",className:"btn-heard-icone",onClick:function(){return r(e.id)},children:t.includes(e.id)?(0,X.jsx)(K.vG,{children:(0,X.jsx)("use",{href:"".concat(V.Z,"#icon-heard_active")})}):(0,X.jsx)(K.AD,{children:(0,X.jsx)("use",{href:"".concat(V.Z,"#icon-heard")})})})}),(0,X.jsxs)(O,{className:"DivTitle ",children:[(0,X.jsxs)(A,{className:"cards-item-title",children:[e.make,e.model.length<8&&(0,X.jsxs)(E,{children:[" ",e.model]}),", ",e.year]}),(0,X.jsx)(D,{children:e.rentalPrice})]}),(0,X.jsxs)(J,{className:"div-text-info",children:[(0,X.jsxs)(B,{className:"DivFirst ",children:[(0,X.jsx)("p",{className:"City",children:e.address.split(",")[1].trim().split(" ")[0]}),(0,X.jsx)(R,{}),(0,X.jsx)("p",{className:"Country",children:e.address.split(",").slice(2).join(",").trim().split(" ")[0]}),(0,X.jsx)(R,{}),(0,X.jsx)("p",{className:"rentalCompany",children:e.rentalCompany}),e.rentalCompany.length<19&&(0,X.jsx)(R,{}),e.rentalCompany.length<19&&(0,X.jsx)("p",{className:"Class auto",children:e.accessories.map((function(e){return e.toLowerCase().includes("premium")?"Premium":""})).find((function(e){return"Premium"===e}))||""})]}),(0,X.jsxs)(G,{className:"DivSecond ",children:[(0,X.jsxs)("p",{children:[" ",e.type," "]}),(0,X.jsx)(R,{}),(0,X.jsxs)("p",{children:[" ",e.make," "]}),(0,X.jsx)(R,{}),(0,X.jsxs)("p",{children:[" ",e.id," "]}),e.type.length<6&&(0,X.jsx)(R,{}),e.type.length<6&&(0,X.jsx)("p",{children:e.accessories.map((function(e){var n=Q.Z.find((function(n){return e.toLowerCase().includes(n.toLowerCase())}));return n?n.charAt(0).toUpperCase()+n.slice(1):""})).filter(Boolean)[0]||""})]})]}),(0,X.jsx)(U,{type:"button",className:"cards-item-btn","aria-label":"Open modal Learn more",id:e.id,onClick:function(){s(e.id)},children:"Learn more"})]},n)}))}),c>1&&(0,X.jsx)(q,{onClick:function(){l()},children:"To up \u21c8"}),a.length>0&&a.length>=12&&n.length>=12&&c!==a.length/12&&(0,X.jsx)(H,{type:"button",className:"cards-item-btn",onClick:function(){return i(o+1)},children:"Load more \u21ca"})]})})},$=t(44),ee=t(8998),ne=function(){var e=(0,y.I0)(),n=(0,k.useState)(parseInt(localStorage.getItem("currentPageFavorites"),10)||1),t=(0,P.Z)(n,2),r=t[0],i=t[1],o=(0,k.useState)(JSON.parse(localStorage.getItem("favorites"))||[]),a=(0,P.Z)(o,2),s=a[0],l=a[1],c=(0,k.useState)(""),d=(0,P.Z)(c,2),h=d[0],u=d[1],p=(0,k.useState)(parseInt(localStorage.getItem("currentPageFavorites"),10)||1),f=(0,P.Z)(p,2),g=f[0],x=f[1],m=(0,k.useState)(!1),v=(0,P.Z)(m,2),b=v[0],Z=v[1],j=(0,k.useState)(null),F=(0,P.Z)(j,2),I=F[0],_=F[1],z=(0,k.useState)(!1),L=(0,P.Z)(z,2),W=L[0],M=L[1],O=(0,y.v9)(C.OG);(0,k.useEffect)((function(){e((0,S.O)())}),[e,W,r]),(0,k.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favorites"))||[];l(e)}),[]);var A=O.filter((function(e){return s.includes(e.id)})),D=function(){i(1),localStorage.setItem("currentPageFavorites",1)};(0,k.useEffect)((function(){D()}),[]);var E=12*g,J=E-12,B=A.slice(J,E);return(0,X.jsxs)(N.W,{children:[(0,X.jsx)($.Z,{handleMakeChange:function(e){u(e.target.value)},selectedMake:h}),(0,X.jsx)(Y,{currentFavoriteAdverts:B,favorites:s,toggleFavorite:function(e){var n=s.includes(e)?s.filter((function(n){return n!==e})):[].concat((0,w.Z)(s),[e]);l(n),localStorage.setItem("favorites",JSON.stringify(n))},handlePageChange:function(e){x(e),i(e),localStorage.setItem("currentPageFavorites",e)},currentPage:g,favoriteAdverts:A,handleLearnMore:function(e){_(e),Z(!0)},handleLoadMore:function(){i((function(e){var n=e+1;return i(n),localStorage.setItem("currentPageFavorites",n),n}))},handleReloadComponentFavorites:function(){M((function(e){return!e})),D(),x(1)},reloadComponentFavorites:W,currentPageFavorites:r}),(0,X.jsx)(ee.Z,{isOpen:b,closeModal:function(){Z(!1)},currentItems:B,selectedItemId:I})]})}}}]);
//# sourceMappingURL=995.080a02ae.chunk.js.map