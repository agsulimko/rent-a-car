"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[27],{6027:function(e,n,t){t.r(n),t.d(n,{default:function(){return te}});var r,o,i,a,l,s,c,d,u,h,p,g,f,m,x,b,y=t(9439),k=t(2791),w=t(4420),j=t(7801),Z=t(6351),v=t(3433),S=t(4372),P=t(4670),M=t(7323),_=t(718),C=t(184),N=function(e){var n=e.cart,t=e.index,r=e.toggleFavorites,o=e.favorites,i=e.handleLearnMore;return(0,C.jsxs)(P.Ss,{className:"cards-item","data-category":n.category,"data-aos":"flip-left","data-aos-duration":"1000",children:[(0,C.jsxs)("picture",{children:[(0,C.jsx)("source",{srcSet:n.make,type:"image/webp"}),(0,C.jsx)("source",{srcSet:n.make,type:"image/jpeg"}),(0,C.jsx)(P.oM,{children:(0,C.jsx)(P.Ei,{src:n.img,width:"401",height:"268",alt:n.make,className:"card-img",loading:"lazy"})})]}),(0,C.jsx)("div",{className:"test-div",children:(0,C.jsx)(P.Lo,{type:"button",className:"btn-heard-icone",onClick:function(){return r(n.id)},children:o.includes(n.id)?(0,C.jsx)(P.vG,{children:(0,C.jsx)("use",{href:"".concat(M.Z,"#icon-heard_active")})}):(0,C.jsx)(P.AD,{children:(0,C.jsx)("use",{href:"".concat(M.Z,"#icon-heard")})})})}),(0,C.jsxs)(P.Gd,{className:"DivTitle",children:[(0,C.jsxs)(P.PQ,{className:"cards-item-title",children:[n.make,n.model.length<8&&(0,C.jsxs)(P.yo,{children:[" ",n.model]}),", ",n.year]}),(0,C.jsx)(P.jp,{children:n.rentalPrice})]}),(0,C.jsxs)(P.lT,{className:"div-text-info",children:[(0,C.jsxs)(P.xS,{className:"DivFirst ",children:[(0,C.jsx)("p",{className:"City",children:n.address.split(",")[1].trim().split(" ")[0]}),(0,C.jsx)(P.OW,{}),(0,C.jsx)("p",{className:"Country",children:n.address.split(",").slice(2).join(",").trim().split(" ")[0]}),(0,C.jsx)(P.OW,{}),(0,C.jsx)("p",{className:"rentalCompany",children:n.rentalCompany}),n.rentalCompany.length<19&&(0,C.jsx)(P.OW,{}),n.rentalCompany.length<19&&(0,C.jsx)("p",{className:"Class auto",children:n.accessories.map((function(e){return e.toLowerCase().includes("premium")?"Premium":""})).find((function(e){return"Premium"===e}))||""})]}),(0,C.jsxs)(P.pZ,{className:"DivSecond ",children:[(0,C.jsxs)("p",{children:[" ",n.type," "]}),(0,C.jsx)(P.OW,{}),(0,C.jsxs)("p",{children:[" ",n.make," "]}),(0,C.jsx)(P.OW,{}),(0,C.jsxs)("p",{children:[" ",n.id," "]}),n.type.length<6&&(0,C.jsx)(P.OW,{}),n.type.length<6&&(0,C.jsx)("p",{children:n.accessories.map((function(e){var n=_.Z.find((function(n){return e.toLowerCase().includes(n.toLowerCase())}));return n?n.charAt(0).toUpperCase()+n.slice(1):""})).filter(Boolean)[0]||""})]})]}),(0,C.jsx)(P.Q5,{type:"button",className:"cards-item-btn","aria-label":"Open modal Learn more",id:n.id,onClick:function(){i(n.id)},children:"Learn more"})]},t)},F=function(e){e.arrayMake;var n=e.arrayRentalPrice,t=e.arrayMileageFrom,r=e.arrayMileageTo,o=e.selectMake,i=e.selectRentalPrice,a=e.selectMileageFrom,l=e.selectMileageTo,s=e.handleLearnMore,c=e.handlePageChangeAutos,d=e.currentItemsAuto,u=e.currentPageAutos,h=e.handleReloadComponentAutos,p=(0,k.useState)(JSON.parse(localStorage.getItem("favorites"))||[]),g=(0,y.Z)(p,2),f=g[0],m=g[1],x=function(e){var n=f.includes(e)?f.filter((function(n){return n!==e})):[].concat((0,v.Z)(f),[e]);m(n),localStorage.setItem("favorites",JSON.stringify(n))},b=0===n.length&&i||0!==l.length&&0===r.length?[]:d.filter((function(e){return(!n.length||n.includes(e.id))&&(!t.length||t.includes(e.id))&&(!r.length||r.includes(e.id))}));return(0,C.jsx)(S.W,{children:(0,C.jsxs)("div",{className:"div-cards-list",children:[(0,C.jsx)(P.CS,{className:"cards-list",children:o||i||a||l?0===t.length&&0!==a.length&&0===l.length||0!==r.length&&0===t.length&&0!==l.length&&0!==a.length?[]:b.map((function(e,n){return(0,C.jsx)(N,{cart:e,toggleFavorites:x,favorites:f,handleLearnMore:s},n)})):d.map((function(e,n){return(0,C.jsx)(N,{cart:e,toggleFavorites:x,favorites:f,handleLearnMore:s},n)}))})," ",u>1&&(0,C.jsx)(P.J4,{onClick:function(){h()},children:"To up \u21c8 "}),b.length>=0&&b.length>=12&&(0,C.jsx)(P.t,{type:"button",className:"cards-item-btn",onClick:function(){return c(u+1)},children:"Load more \u21ca"})]})})},W=t(3299),I=t(1183),R=t(2143),A={"MuiSelect-select":"SearchForm_MuiSelect-select__UQXXI","MuiSelect-outlined":"SearchForm_MuiSelect-outlined__zFJqN","MuiInputBase-input":"SearchForm_MuiInputBase-input__wUK9R","MuiOutlinedInput-input":"SearchForm_MuiOutlinedInput-input__pfFxl","css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":"SearchForm_css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input__N+ODU"},z=t(168),O=t(7924),T=t(419),L=O.ZP.form(r||(r=(0,z.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 18px;\n\n  align-items: center;\n  margin-bottom: 50px;\n"]))),B=O.ZP.label(o||(o=(0,z.Z)(["\n  gap: 8px;\n  display: flex;\n  flex-direction: column;\n  font-family: ",";\n  font-weight: ",";\n  font-size: 14px;\n\n  color: ",";\n  line-height: 1.29;\n"])),T.r.fontFamily.manrope,T.r.fontWeight.medium,T.r.color.gray_full),D=(O.ZP.select(i||(i=(0,z.Z)(["\n  border-radius: 14px;\n  padding: 14px 89px 14px 18px;\n  width: 224px;\n  height: 48px;\n  border-color: ",";\n  font-size: 18px;\n  line-height: 1.11; //  111%;\n  color: ",";\n  background: ",";\n  font-family: ",";\n  font-weight: ",";\n\n  outline: transparent;\n  overflow-y: auto; /* \u0412\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u043a\u0440\u043e\u043b\u043b */\n  scrollbar-width: thin; /* \u0428\u0438\u0440\u0438\u043d\u0430 \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430 */\n  scrollbar-color: ","; /* \u0426\u0432\u0435\u0442 \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430 */\n\n  option {\n    background-color: ","; /* \u0411\u0435\u043b\u044b\u0439 \u0444\u043e\u043d \u0434\u043b\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u043f\u0438\u0441\u043a\u0430 */\n    color: rgba(18, 20, 23, 0.5);\n    /* color:  ","; */\n    /* \u0426\u0432\u0435\u0442 \u0442\u0435\u043a\u0441\u0442\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u043f\u0438\u0441\u043a\u0430 */\n    font-family: ","; /* \u0428\u0440\u0438\u0444\u0442 */\n    font-weight: ","; /* \u041d\u0430\u0441\u044b\u0449\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0448\u0440\u0438\u0444\u0442\u0430 */\n    font-size: 16px; /* \u0420\u0430\u0437\u043c\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430 */\n    line-height: 1.25; /* \u041c\u0435\u0436\u0441\u0442\u0440\u043e\u0447\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b */\n\n    margin-bottom: 8px;\n    padding-left: 18px;\n    padding-top: 14px;\n  }\n\n  &::-webkit-scrollbar {\n    width: 12px;\n    height: 130px;\n\n    /* \u0428\u0438\u0440\u0438\u043d\u0430 \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430 \u0432 Chrome/Safari */\n    /* \u0412\u044b\u0441\u043e\u0442\u0430 \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430 \u0432 Chrome/Safari */\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: rgba(\n      18,\n      20,\n      23,\n      0.2\n    ); /* \u0426\u0432\u0435\u0442 \u043f\u043e\u043b\u0437\u0443\u043d\u043a\u0430 \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430 \u0432 Chrome/Safari */\n\n    border-radius: 10px;\n    width: 12px;\n    height: 130px;\n    /* \u0420\u0430\u0434\u0438\u0443\u0441 \u0441\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0437\u0443\u043d\u043a\u0430 \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430 \u0432 Chrome/Safari */\n  }\n  &::-webkit-scrollbar-track {\n    background-color: ","; /* \u0426\u0432\u0435\u0442 \u0442\u0440\u0435\u043a\u0430 \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430 \u0432 Chrome/Safari */\n  }\n"])),T.r.color.white_dark,T.r.color.black_light,T.r.color.white_dark,T.r.fontFamily.manrope,T.r.fontWeight.medium,T.r.color.white_dark,T.r.color.white_full,T.r.color.black_light,T.r.fontFamily.manrope,T.r.fontWeight.medium,T.r.color.white_full),O.ZP.select(a||(a=(0,z.Z)(["\n  padding: 14px 18px;\n  margin-right: 0;\n\n  width: 125px;\n  height: 48px;\n  background-color: ",";\n  border-color: ",";\n  font-size: 18px;\n  line-height: 1.11; //  111%;\n  color: ",";\n  border-radius: 14px;\n  font-family: ",";\n  font-weight: ",";\n  font-size: 18px;\n  line-height: 1.11;\n\n  outline: transparent;\n\n  overflow-y: auto; /* \u0412\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u043a\u0440\u043e\u043b\u043b */\n  /* scrollbar-width: thin; */\n  /* \u0428\u0438\u0440\u0438\u043d\u0430 \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430 */\n\n  option {\n    background-color: ","; /* \u0411\u0435\u043b\u044b\u0439 \u0444\u043e\u043d \u0434\u043b\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u043f\u0438\u0441\u043a\u0430 */\n    color: rgba(18, 20, 23, 0.5);\n    /* color:  ","; */\n    /* \u0426\u0432\u0435\u0442 \u0442\u0435\u043a\u0441\u0442\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u043f\u0438\u0441\u043a\u0430 */\n    font-family: ","; /* \u0428\u0440\u0438\u0444\u0442 */\n    font-weight: ","; /* \u041d\u0430\u0441\u044b\u0449\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0448\u0440\u0438\u0444\u0442\u0430 */\n    font-size: 16px; /* \u0420\u0430\u0437\u043c\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430 */\n    line-height: 1.25; /* \u041c\u0435\u0436\u0441\u0442\u0440\u043e\u0447\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b */\n\n    margin-bottom: 8px;\n    padding-left: 18px;\n    padding-top: 14px;\n  }\n\n  &::-webkit-scrollbar {\n    width: 12px;\n    height: 200px;\n\n    /* \u0428\u0438\u0440\u0438\u043d\u0430 \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430 \u0432 Chrome/Safari */\n    /* \u0412\u044b\u0441\u043e\u0442\u0430 \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430 \u0432 Chrome/Safari */\n  }\n\n  & {\n    scrollbar-width: thin; /* \u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430 */\n    scrollbar-color: rgba(18, 20, 23, 0.2) ","; /* \u0426\u0432\u0435\u0442 \u043f\u043e\u043b\u0437\u0443\u043d\u043a\u0430 \u0438 \u0442\u0440\u0435\u043a\u0430 \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430 */\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: rgba(\n      18,\n      20,\n      23,\n      0.2\n    ); /* \u0426\u0432\u0435\u0442 \u043f\u043e\u043b\u0437\u0443\u043d\u043a\u0430 \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430 \u0432 Chrome/Safari */\n    border-radius: 10px;\n    height: 200px;\n\n    /* \u0420\u0430\u0434\u0438\u0443\u0441 \u0441\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0437\u0443\u043d\u043a\u0430 \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430 \u0432 Chrome/Safari */\n  }\n  &::-webkit-scrollbar-track {\n    background-color: ","; /* \u0426\u0432\u0435\u0442 \u0442\u0440\u0435\u043a\u0430 \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430 \u0432 Chrome/Safari */\n  }\n"])),T.r.color.white_dark,T.r.color.white_dark,T.r.color.black_light,T.r.fontFamily.manrope,T.r.fontWeight.medium,T.r.color.white_full,T.r.color.black_light,T.r.fontFamily.manrope,T.r.fontWeight.medium,T.r.color.white_full,T.r.color.white_full),O.ZP.div(l||(l=(0,z.Z)(["\n  display: flex;\n\n  align-items: flex-end;\n"])))),E=O.ZP.div(s||(s=(0,z.Z)(["\n  display: flex;\n"]))),G=O.ZP.input(c||(c=(0,z.Z)(["\n  width: 86px;\n  height: 44px;\n  /* border-top-left-radius: 14px;\n  border-bottom-left-radius: 14px; */\n  border-radius: 14px 0 0 14px;\n  font-family: ",";\n  font-weight: ",";\n  font-size: 18px;\n  line-height: 1.11; //  111%;\n\n  color: ",";\n  /* color: inherit; */\n  /* opacity: 1; */\n  background-color: #f7f7fb;\n  /* border-color: ","; */\n  /* border: 1px solid ","; */\n  /* border: none; */\n  padding-left: 70px;\n  border: 1px solid #aaaac2;\n  border-right: 0.5px solid #aaaac2;\n  outline: transparent;\n  transition-property: background-color;\n  &::-webkit-input-placeholder {\n    /* color: inherit; */\n    opacity: 1;\n    font-family: ",";\n    font-weight: ",";\n    font-size: 18px;\n    line-height: 1.11;\n    color: #121417;\n  }\n\n  &:hover {\n    border: 1px solid #000000;\n\n    border-right: 0.5px solid #aaaac2;\n  }\n\n  &:focus {\n    border: 2px solid #2f89dd;\n    height: 42px;\n    border-right: 0.5px solid #aaaac2;\n    width: 85px;\n  }\n"])),T.r.fontFamily.manrope,T.r.fontWeight.medium,T.r.color.black_light,T.r.color.white_dark,T.r.color.white_dark,T.r.fontFamily.manrope,T.r.fontWeight.medium),J=O.ZP.div(d||(d=(0,z.Z)(["\n  position: relative;\n"]))),U=O.ZP.p(u||(u=(0,z.Z)(["\n  position: absolute;\n  top: 15px;\n  right: 96px;\n  font-family: ",";\n  font-weight: ",";\n  font-size: 18px;\n  line-height: 1.11; //  111%;\n\n  color: ",";\n  /* color: inherit; */\n  color: #121417;\n"])),T.r.fontFamily.manrope,T.r.fontWeight.medium,T.r.color.black_dark),q=O.ZP.p(h||(h=(0,z.Z)(["\n  position: absolute;\n  top: 15px;\n  right: 116px;\n  font-family: ",";\n  font-weight: ",";\n  font-size: 18px;\n  line-height: 1.11; //  111%;\n\n  color: ",";\n  /* color: inherit; */\n  color: #121417;\n"])),T.r.fontFamily.manrope,T.r.fontWeight.medium,T.r.color.black_dark),Q=(O.ZP.p(p||(p=(0,z.Z)(["\n  position: absolute;\n  top: 14.5px;\n  right: 90px;\n  font-family: ",";\n  font-weight: ",";\n  font-size: 18px;\n  line-height: 1.11; //  111%;\n\n  color: ",";\n  /* color: inherit; */\n  color: #121417;\n"])),T.r.fontFamily.manrope,T.r.fontWeight.medium,T.r.color.black_dark),O.ZP.p(g||(g=(0,z.Z)(["\n  position: absolute;\n  top: 14.5px;\n  right: 27px;\n  font-family: ",";\n  font-weight: ",";\n  font-size: 18px;\n  line-height: 1.11; //  111%;\n\n  color: ",";\n  /* color: inherit; */\n  color: #121417;\n"])),T.r.fontFamily.manrope,T.r.fontWeight.medium,T.r.color.black_dark),O.ZP.input(f||(f=(0,z.Z)(["\n  width: 106px;\n  height: 44px;\n  border-top-right-radius: 14px;\n  border-bottom-right-radius: 14px;\n  font-family: ",";\n  font-weight: ",";\n  font-size: 18px;\n  line-height: 1.11; //  111%;\n  color: ",";\n  /* color: inherit; */\n  opacity: 1;\n  background-color: ",";\n\n  border: 1px solid #aaaac2;\n  border-left: 0;\n  /* border-left: 0.5px solid #aaaac2; */\n\n  padding-left: 52px;\n  outline: transparent;\n  transition-property: background-color;\n  &::-webkit-input-placeholder {\n    color: inherit;\n    opacity: 1;\n    font-family: ",";\n    font-weight: ",";\n    font-size: 18px;\n    line-height: 1.11;\n    color: #121417;\n  }\n\n  &:hover {\n    border: 1px solid #000000;\n    border-left: 0;\n    /* border-left: 0.5px solid #aaaac2; */\n  }\n  &:focus {\n    border-right: 2px solid #2f89dd;\n    border-bottom: 2px solid #2f89dd;\n    border-top: 2px solid #2f89dd;\n    /* border-left: 0.5px solid #aaaac2; */\n    border-left: 0;\n    height: 42px;\n    width: 105px;\n  }\n"])),T.r.fontFamily.manrope,T.r.fontWeight.medium,T.r.color.black_light,T.r.color.white_dark,T.r.fontFamily.manrope,T.r.fontWeight.medium)),H=O.ZP.button(m||(m=(0,z.Z)(["\n  font-weight: ",";\n  font-size: 14px;\n  line-height: 1.43;\n  /* line-height: 143%; */\n  border-radius: 12px;\n  padding: 14px 44px;\n  width: 136px;\n  height: 48px;\n  background-color: ",";\n  color: ",";\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),T.r.fontWeight.semiBold,T.r.color.blue_light,T.r.color.white_full,T.r.color.blue_dark),V=O.ZP.button(x||(x=(0,z.Z)(["\n  font-weight: ",";\n  font-size: 14px;\n  line-height: 1.43;\n  /* line-height: 143%; */\n  border-radius: 12px;\n  padding: -1px 44px;\n  width: 136px;\n  height: 48px;\n  background-color: ",";\n  color: ",";\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),T.r.fontWeight.semiBold,T.r.color.blue_light,T.r.color.white_full,T.r.color.blue_dark),X=O.ZP.div(b||(b=(0,z.Z)(["\n  display: flex;\n  gap: 18px;\n  /* margin-top: 24.5px; */\n  padding-top: 24.5px;\n"]))),Y=t(1955),$=t(5218),K=Array.from({length:100},(function(e,n){return 10*(n+1)})),ee=function(e){var n=e.handleMake,t=e.handleRentalPrice,r=e.handleMileageFrom,o=e.handleMileageTo,i=e.handleResetArrays,a=(0,k.useState)(""),l=(0,y.Z)(a,2),s=l[0],c=l[1],d=(0,k.useState)(""),u=(0,y.Z)(d,2),h=u[0],p=u[1],g=(0,k.useState)(""),f=(0,y.Z)(g,2),m=f[0],x=f[1],b=(0,k.useState)(""),j=(0,y.Z)(b,2),v=j[0],S=j[1],P=(0,k.useState)(!0),M=(0,y.Z)(P,2),_=M[0],N=M[1],F=(0,k.useState)(!0),z=(0,y.Z)(F,2),O=z[0],T=z[1];(0,w.v9)(Z.OG);return(0,C.jsxs)(L,{className:"form",children:[(0,C.jsxs)(W.Z,{sx:{m:1,minWidth:120,display:"flex",gap:1,margin:0},className:"label",children:[(0,C.jsx)(B,{id:"select-make-label",children:"Car brand"}),(0,C.jsxs)(I.Z,{className:"select-make",name:"Car brand",id:"select-make",value:s,onChange:function(e){var n=e.target.value;N(!1),c(n)},inputProps:{"aria-label":"Without label"},style:{margin:0,background:"rgb(247, 247, 251)",fontSize:18,color:"#121417",fontFamily:"Manrope",fontWeight:"500",borderRadius:14,width:224,height:48,minHeight:0},MenuProps:{PaperProps:{style:{width:10,height:272,border:1,borderColor:"rgba(28, 90, 184, 0.05)",borderRadius:14,marginTop:0,margginBotton:0,paddingTop:0,paddingBottom:0,fontSize:16,color:"#121417",fontFamily:"Manrope",fontWeight:"500"}},MenuListProps:{style:{borderRadius:10,color:"rgba(18, 20, 23, 0.5)",width:220,height:250,overflowY:"auto"}}},displayEmpty:!0,renderValue:function(e){return _?"Enter the text":e},onBlur:function(){s||N(!0)},children:[s&&(0,C.jsx)(R.Z,{value:"",children:"none"}),Y.Z.map((function(e,n){return(0,C.jsx)(R.Z,{value:e,style:{height:29},children:e},n)}))]})]}),(0,C.jsxs)(W.Z,{sx:{m:1,minWidth:120,display:"flex",gap:1,margin:0},className:"label",children:[(0,C.jsx)(B,{id:"select-RentalPrice-label",className:"label",children:"Price/1 hour"}),(0,C.jsx)(I.Z,{className:"select-RentalPrice",name:"RentalPrice",id:"select-Price",value:h,onChange:function(e){var n=Number(e.target.value);T(!1),p(n)},inputProps:{"aria-label":"Without label"},style:{margin:0,backgroundColor:"rgb(247, 247, 251)",fontSize:18,color:"#121417",fontFamily:"Manrope",fontWeight:"500",borderRadius:14,width:125,height:48,minHeight:0},MenuProps:{PaperProps:{style:{width:10,height:188,border:1,borderRadius:14,marginTop:0,margginBotton:0,paddingTop:0,paddingBottom:0,fontSize:16,color:"#121417",fontFamily:"Manrope",fontWeight:"500"}},MenuListProps:{style:{color:"rgba(18, 20, 23, 0.5)",borderRadius:10,width:121,height:164,overflowY:"auto"}}},displayEmpty:!0,renderValue:function(e){return O?"To $":"To "+e+"$"},onBlur:function(){h||T(!0)},children:K.map((function(e,n){return(0,C.jsx)(R.Z,{value:e,style:{height:29},children:e},n)}))})]}),(0,C.jsx)(D,{className:"DivMileage",children:(0,C.jsxs)(B,{className:"label",children:["Car mileage / km",(0,C.jsxs)(E,{children:[(0,C.jsxs)(J,{children:[(0,C.jsx)(G,{type:"number",pattern:"[0-9]*",name:"Car mileage / km",className:A.inputFrom,style:{},value:m,onChange:function(e){!function(e){var n=Number(e.target.value);x(n)}(e)}}),(0,C.jsx)(U,{children:"From"})]}),(0,C.jsxs)(J,{className:"input-wrap",children:[(0,C.jsx)(Q,{type:"number",pattern:"[0-9]*",name:"Car mileage / km",className:A.loaderWrap,value:v,onChange:function(e){!function(e){var n=Number(e.target.value);S(n)}(e)},style:{}}),(0,C.jsx)(q,{children:"To"})]})]})]})}),(0,C.jsxs)(X,{children:[(0,C.jsx)(H,{className:"btn",type:"button",onClick:function(e){!function(e){if(e.preventDefault(),!(s||h||m||v))return i(),void $.ZP.error("Nothing found, please make a new request!",{duration:3e3,position:"top-center"});Number(m)>Number(v)&&m&&v||0===v?$.ZP.error("From must be less than TO,choose other mileage values!",{duration:3e3,position:"top-center"}):(n(s),t(h),r(m,v),o(v,m))}(e)},children:"Search"}),(0,C.jsx)(V,{className:"btn",type:"button",onClick:function(e){!function(e){e.preventDefault(),N(!0),n(""),t(""),r(""),o(""),c(""),p(""),x(""),S(""),i()}(e)},children:"Reset Filters"})]})]})},ne=t(8998),te=function(e){var n=e.handleResetArrays,t=(0,w.I0)(),r=(0,w.v9)(Z.o9)||[],o=(0,k.useState)(""),i=(0,y.Z)(o,2),a=i[0],l=i[1],s=(0,k.useState)([]),c=(0,y.Z)(s,2),d=c[0],u=c[1],h=(0,k.useState)([]),p=(0,y.Z)(h,2),g=p[0],f=p[1],m=(0,k.useState)([]),x=(0,y.Z)(m,2),b=x[0],v=x[1],S=(0,k.useState)(0),P=(0,y.Z)(S,2),M=P[0],_=P[1],N=(0,k.useState)(0),W=(0,y.Z)(N,2),I=W[0],R=W[1],A=(0,k.useState)(""),z=(0,y.Z)(A,2),O=z[0],T=z[1],L=(0,k.useState)(parseInt(localStorage.getItem("currentPage"),10)||1),B=(0,y.Z)(L,2),D=B[0],E=B[1],G=(0,k.useState)(parseInt(localStorage.getItem("currentPageAutos"),10)||1),J=(0,y.Z)(G,2),U=J[0],q=J[1],Q=(0,k.useState)(null),H=(0,y.Z)(Q,2),V=H[0],X=H[1],Y=(0,k.useState)(!1),$=(0,y.Z)(Y,2),K=$[0],te=$[1],re=(0,k.useState)(!1),oe=(0,y.Z)(re,2),ie=oe[0],ae=oe[1],le=(0,k.useState)(!1),se=(0,y.Z)(le,2),ce=se[0],de=se[1];(0,k.useEffect)((function(){t((0,j.GA)({page:D}))}),[t,D,ie]),(0,k.useEffect)((function(){t((0,j.qZ)({make:a}))}),[t,a,U,ce]);var ue=12*U,he=ue-12,pe=r.slice(he,ue);(0,k.useEffect)((function(){q(1),localStorage.setItem("currentPageAutos",1)}),[]);n=function(){u(""),v([]),f([]),T("")};var ge=function(){ae((function(e){return!e})),E(1),localStorage.setItem("currentPage",1)};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(ee,{handleMake:function(e){console.log("inputMake=",e),l(e)},handleRentalPrice:function(e){var n=[];T(e),r.forEach((function(t){Number(t.rentalPrice.slice(1))<=e&&n.push(t.id)})),u(n)},handleMileageFrom:function(e,n){if(R(e),_(n),e>n&&0!==n.length)f([]);else{var t=r.filter((function(n){return n.mileage>=e})).map((function(e){return e.id}));f(t)}},handleMileageTo:function(e,n){if(R(n),_(e),n>e)v([]);else{var t=r.filter((function(n){return n.mileage<=e})).map((function(e){return e.id}));!n||n?v(t||[]):n>e&&v([])}},handleResetArrays:n,handleReloadAdverts:function(){t((0,j.GA)({page:1}))},handleReloadComponent:ge}),(0,C.jsx)(F,{currentItemsAuto:pe,handleLoadMore:function(){E((function(e){var n=e+1;return localStorage.setItem("currentPage",n),n}))},handleLearnMore:function(e){X(e),te(!0)},handleReloadComponent:ge,currentPage:D,currentPageAutos:U,arrayRentalPrice:d,arrayMileageTo:b,arrayMileageFrom:g,selectMake:a,selectMileageFrom:I,selectMileageTo:M,selectRentalPrice:O,handlePageChangeAutos:function(e){q(e),localStorage.setItem("currentPageAutos",e)},handleLoadMoreAutos:function(){q((function(e){var n=e+1;return q(n),localStorage.setItem("currentPageAutos",n),n}))},handleReloadComponentAutos:function(){de((function(e){return!e})),q(1),localStorage.setItem("currentPageAutos",1)}}),(0,C.jsx)(ne.Z,{isOpen:K,closeModal:function(){return te(!1)},currentItemsAuto:pe,selectedItemId:V})]})}}}]);
//# sourceMappingURL=27.0fe04195.chunk.js.map