(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6280:function(e,t,s){Promise.resolve().then(s.bind(s,128)),Promise.resolve().then(s.t.bind(s,8877,23))},128:function(e,t,s){"use strict";s.d(t,{App:function(){return E}});var n=s(7437),r=s(8160),o=s.n(r),a=s(3121),l=s.n(a);let i=e=>(0,n.jsx)("div",{className:"".concat(l().overlay," ").concat(e.isOpened&&l()["overlay_is-opened"]),onClick:e.closePopup});var c=s(7999),u=s.n(c),_=s(2265),m=s(3001),d=s(6932),f=s(7695);let p=()=>{let e=(0,f.o)(),[t,s]=(0,_.useState)({email:"",password:""}),[r,o]=(0,_.useState)({status:null,text:null}),a=e=>{s({...t,[e.target.name]:e.target.value})},l=async s=>{s.preventDefault();let n=await (0,m.m3)(d.H.auth,t,e.typeForm);(0,m.d8)(n)?(e.login({...n,id:n._id},n.jwt),o({status:"success",text:"Вы авторизовались!"})):o({status:"error",text:"Неверные почта или пароль"})};return(0,_.useEffect)(()=>{let t;return e.user&&(t=setTimeout(()=>{e.closePopup(),o({status:null,text:null})},1e3)),()=>clearTimeout(t)},[e.user]),(0,n.jsxs)("form",{onSubmit:l,className:u().form,children:[(0,n.jsx)("h2",{className:u().form__title,children:"Авторизация"}),(0,n.jsxs)("div",{className:u().form__fields,children:[(0,n.jsxs)("label",{className:u().form__field,children:[(0,n.jsx)("span",{className:u()["form__field-title"],children:"Email"}),(0,n.jsx)("input",{className:u()["form__field-input"],onInput:a,name:"email",type:"email",placeholder:"hello@world.com"})]}),(0,n.jsxs)("label",{className:u().form__field,children:[(0,n.jsx)("span",{className:u()["form__field-title"],children:"Пароль"}),(0,n.jsx)("input",{className:u()["form__field-input"],onInput:a,name:"password",type:"password",placeholder:"***********"})]})]}),r.status&&(0,n.jsx)("p",{className:u().form__message,children:r.text}),(0,n.jsxs)("div",{className:u().form__actions,children:[(0,n.jsx)("button",{className:u().form__reset,type:"reset",children:"Очистить"}),(0,n.jsx)("button",{className:u().form__submit,type:"submit",children:"Войти"})]})]})},h=()=>{let e=(0,f.o)(),[t,s]=(0,_.useState)({username:"",email:"",password:""}),[r,o]=(0,_.useState)({status:null,text:null}),a=e=>{s({...t,[e.target.name]:e.target.value})},l=async s=>{s.preventDefault();let n=await (0,m.m3)(d.H.register,t,e.typeForm);(0,m.d8)(n)?(e.login({...n,id:n._id},n.jwt),o({status:"success",text:"Вы зарегистрировались!"})):o({status:"error",text:"Ошибка при регистрации"})};return(0,_.useEffect)(()=>{let t;return e.user&&(t=setTimeout(()=>{e.closePopup(),o({status:null,text:null})},1e3)),()=>clearTimeout(t)},[e.user]),(0,n.jsxs)("form",{onSubmit:l,className:u().form,children:[(0,n.jsx)("h2",{className:u().form__title,children:"Регистрация"}),(0,n.jsxs)("div",{className:u().form__fields,children:[(0,n.jsxs)("label",{className:u().form__field,children:[(0,n.jsx)("span",{className:u()["form__field-title"],children:"Ваш ник"}),(0,n.jsx)("input",{className:u()["form__field-input"],onInput:a,name:"username",type:"text",placeholder:"Иван"})]}),(0,n.jsxs)("label",{className:u().form__field,children:[(0,n.jsx)("span",{className:u()["form__field-title"],children:"Email"}),(0,n.jsx)("input",{className:u()["form__field-input"],onInput:a,name:"email",type:"email",placeholder:"hello@world.com"})]}),(0,n.jsxs)("label",{className:u().form__field,children:[(0,n.jsx)("span",{className:u()["form__field-title"],children:"Пароль"}),(0,n.jsx)("input",{className:u()["form__field-input"],onInput:a,name:"password",type:"password",placeholder:"***********"})]})]}),r.status&&(0,n.jsx)("p",{className:u().form__message,children:r.text}),(0,n.jsxs)("div",{className:u().form__actions,children:[(0,n.jsx)("button",{className:u().form__reset,type:"reset",children:"Очистить"}),(0,n.jsx)("button",{className:u().form__submit,type:"submit",children:"Зарегистрироваться"})]})]})};var x=s(3424),j=s.n(x);let g=e=>(0,n.jsxs)("div",{className:"".concat(j().popup," ").concat(e.isOpened&&j()["popup_is-opened"]),children:[(0,n.jsx)("button",{className:j().close,onClick:e.closePopup,children:(0,n.jsx)("svg",{className:j()["close-icon"],xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 25",children:(0,n.jsx)("path",{fill:"#7E8292",d:"M15.3321 18.34c.04.0667.06.1533.06.26 0 .0933-.0467.1867-.14.28-.08.08-.18.12-.3.12h-4.5c-.36 0-.63332-.1533-.81999-.46l-1.74-2.68-1.66 2.68c-.18667.3067-.46.46-.82.46h-4.36c-.120001 0-.226667-.04-.320001-.12-.08-.0933-.12-.1867-.12-.28 0-.1067.02-.1933.06-.26l4.200001-6.5-3.78-6.18c-.04-.08-.06-.16667-.06-.26s.04-.18.12-.26c.09333-.09333.2-.14.32-.14h4.34c.37333 0 .65333.16667.84.5l1.4 2.44 1.52-2.44c.18667-.33333.46669-.5.83999-.5h4.14c.12 0 .22.04667.3.14.0933.08.14.17333.14.28 0 .09333-.02.17333-.06.24l-3.86 6.12 4.26 6.56Z"})})}),(0,n.jsx)("div",{className:j().content,children:e.children})]});var N=s(7138),v=s(1169);let y=()=>{let e=(0,f.o)(),t=(0,v.usePathname)();return(0,n.jsxs)("header",{className:o().header,children:["/"===t?(0,n.jsx)("div",{className:o().logo,children:(0,n.jsx)("img",{className:o().logo__image,src:"../images/logo.svg",alt:"Логотип Pindie"})}):(0,n.jsx)(N.default,{href:"/",className:o().logo,children:(0,n.jsx)("img",{className:o().logo__image,src:"../images/logo.svg",alt:"Логотип Pindie"})}),(0,n.jsxs)("nav",{className:o().menu,children:[(0,n.jsxs)("ul",{className:o().menu__list,children:[(0,n.jsx)("li",{className:o().menu__item,children:(0,n.jsx)(N.default,{href:"/new",className:"".concat(o().menu__link," ").concat("/new"===t?o().menu__link_active:""),children:"Новинки"})}),(0,n.jsx)("li",{className:o().menu__item,children:(0,n.jsx)(N.default,{href:"/popular",className:"".concat(o().menu__link," ").concat("/popular"===t?o().menu__link_active:""),children:"Популярные"})}),(0,n.jsx)("li",{className:o().menu__item,children:(0,n.jsx)(N.default,{href:"/shooters",className:"".concat(o().menu__link," ").concat("/shooters"===t?o().menu__link_active:""),children:"Шутеры"})}),(0,n.jsx)("li",{className:o().menu__item,children:(0,n.jsx)(N.default,{href:"/runners",className:"".concat(o().menu__link," ").concat("/runners"===t?o().menu__link_active:""),children:"Ранеры"})}),(0,n.jsx)("li",{className:o().menu__item,children:(0,n.jsx)(N.default,{href:"/pixel-games",className:"".concat(o().menu__link," ").concat("/pixel-games"===t?o().menu__link_active:""),children:"Пиксельные"})}),(0,n.jsx)("li",{className:o().menu__item,children:(0,n.jsx)(N.default,{href:"/tds",className:"".concat(o().menu__link," ").concat("/tds"===t?o().menu__link_active:""),children:"TDS"})})]}),(0,n.jsx)("div",{className:o().auth,children:e.isAuth?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(N.default,{href:"/profile",className:o().auth__button,children:"Профиль"}),(0,n.jsx)(N.default,{href:"/",className:o().auth__button,onClick:()=>{e.logout()},children:"Выйти"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{className:o().auth__button,onClick:()=>{e.openPopup("auth")},children:"Войти"}),(0,n.jsx)("button",{className:o().register__button,onClick:()=>{e.openPopup("register")},children:"Зарегистрироваться"})]})})]}),(0,n.jsx)(i,{isOpened:e.popupIsOpened,closePopup:e.closePopup}),(0,n.jsx)(g,{isOpened:e.popupIsOpened,closePopup:e.closePopup,children:"auth"===e.typeForm?(0,n.jsx)(p,{}):(0,n.jsx)(h,{})})]})};var b=s(4100),w=s.n(b);let k=()=>{let e=(0,v.usePathname)();return(0,n.jsxs)("footer",{className:w().footer,children:["/"===e?(0,n.jsxs)("div",{className:w().footer__logo,children:[(0,n.jsx)("span",{className:w()["footer__logo-name"],children:"pindie"}),(0,n.jsx)("span",{className:w()["footer__logo-copy"],children:", XXI век"})]}):(0,n.jsxs)(N.default,{href:"/",className:w().footer__logo,children:[(0,n.jsx)("span",{className:w()["footer__logo-name"],children:"pindie"}),(0,n.jsx)("span",{className:w()["footer__logo-copy"],children:", XXI век"})]}),(0,n.jsxs)("ul",{className:w()["social-list"],children:[(0,n.jsx)("li",{className:w()["social-list__item"],children:(0,n.jsx)("a",{href:"https://youtube.com",className:"button ".concat(w()["social-list__link"]),children:"YT"})}),(0,n.jsx)("li",{className:w().social_list__item,children:(0,n.jsx)("a",{href:"https://vk.com",className:"button ".concat(w()["social-list__link"]),children:"ВК"})}),(0,n.jsx)("li",{className:w().social_list__item,children:(0,n.jsx)("a",{href:"https://t.me",className:"button ".concat(w()["social-list__link"]),children:"TG"})})]})]})},E=e=>{let t=(0,f.o)();return(0,_.useEffect)(()=>{t.checkAuth()},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{}),e.children,(0,n.jsx)(k,{})]})}},3001:function(e,t,s){"use strict";s.d(t,{BJ:function(){return i},BZ:function(){return h},Fw:function(){return f},Ns:function(){return x},ZB:function(){return m},d8:function(){return n},jo:function(){return p},li:function(){return c},lp:function(){return u},m3:function(){return _},v_:function(){return d}});let n=e=>!(e instanceof Error),r=async e=>{try{let t=await fetch(e);if(200!==t.status)throw Error();return await t.json()}catch(e){return e}},o=e=>{let t=JSON.stringify(e),s=JSON.parse(t=t.replaceAll("_id","id"));return{...s,category:s.categories}},a=e=>e.map(e=>o(e)),l=(e,t)=>(e=a(e)).filter(e=>e.users.find(e=>e.id===t)),i=async(e,t)=>{let s=await r("".concat(e,"?categories.name=").concat(t));return n(s)?a(s):s},c=async(e,t)=>{let s=await r("".concat(e,"/").concat(t));return n(s)?o(s):s},u=async(e,t)=>{let s=await r(e);return n(s)?l(s,t):s},_=async(e,t,s)=>{try{let n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(200!==n.status&&"auth"===s)throw Error("Ошибка авторизации");if(200!==n.status&&"register"===s)throw Error("Ошибка регистрации");return await n.json()}catch(e){return e}},m=e=>{localStorage.setItem("jwt",e)},d=()=>localStorage.getItem("jwt"),f=()=>{localStorage.removeItem("jwt")},p=async(e,t)=>{try{let s=await fetch(e,{method:"GET",headers:{Authorization:"Bearer ".concat(t)}});if(200!==s.status)throw Error("Ошибка получения данных");return await s.json()}catch(e){return e}},h=(e,t)=>e.users.find(e=>e.id===t),x=async(e,t,s)=>{try{let n=await fetch(e,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({users:s})});if(200!==n.status)throw Error("Ошибка голосования");return await n.json()}catch(e){return e}}},6932:function(e,t,s){"use strict";s.d(t,{H:function(){return r}});let n="https://brotherback.nomorepartiesco.ru/api",r={games:"".concat(n,"/games"),auth:"".concat(n,"/auth/login"),me:"".concat(n,"/me"),register:"".concat(n,"/registration")}},7695:function(e,t,s){"use strict";let n;s.d(t,{o:function(){return p}});let r=e=>{let t;let s=new Set,n=(e,n)=>{let r="function"==typeof e?e(t):e;if(!Object.is(r,t)){let e=t;t=(null!=n?n:"object"!=typeof r||null===r)?r:Object.assign({},t,r),s.forEach(s=>s(t,e))}},r=()=>t,o={setState:n,getState:r,getInitialState:()=>a,subscribe:e=>(s.add(e),()=>s.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),s.clear()}},a=t=e(n,r,o);return o},o=e=>e?r(e):r;var a=s(2265),l=s(5006);let{useDebugValue:i}=a,{useSyncExternalStoreWithSelector:c}=l,u=!1,_=e=>e,m=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?o(e):e,s=(e,s)=>(function(e,t=_,s){s&&!u&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),u=!0);let n=c(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,s);return i(n),n})(t,e,s);return Object.assign(s,t),s};var d=s(3001),f=s(6932);let p=(n=e=>({isAuth:!1,popupIsOpened:!1,typeForm:null,user:null,token:null,login:(t,s)=>{e({isAuth:!0,user:t,token:s}),(0,d.ZB)(s)},logout:()=>{e({isAuth:!1,user:null,token:null}),(0,d.Fw)()},checkAuth:async()=>{let t=(0,d.v_)();if(t){let s=await (0,d.jo)(f.H.me,t);s instanceof Error?(e({isAuth:!1,user:null,token:null}),(0,d.Fw)()):(e({isAuth:!0,user:{...s,id:s._id},token:t}),(0,d.ZB)(t))}},openPopup:t=>{e({popupIsOpened:!0,typeForm:t})},closePopup:()=>{e({popupIsOpened:!1,typeForm:null})}}))?m(n):m},4492:function(e,t,s){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=s(2265),r="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useState,a=n.useEffect,l=n.useLayoutEffect,i=n.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!r(e,s)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var s=t(),n=o({inst:{value:s,getSnapshot:t}}),r=n[0].inst,u=n[1];return l(function(){r.value=s,r.getSnapshot=t,c(r)&&u({inst:r})},[e,s,t]),a(function(){return c(r)&&u({inst:r}),e(function(){c(r)&&u({inst:r})})},[e]),i(s),s};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:u},5107:function(e,t,s){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=s(2265),r=s(554),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=r.useSyncExternalStore,l=n.useRef,i=n.useEffect,c=n.useMemo,u=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,s,n,r){var _=l(null);if(null===_.current){var m={hasValue:!1,value:null};_.current=m}else m=_.current;var d=a(e,(_=c(function(){function e(e){if(!i){if(i=!0,a=e,e=n(e),void 0!==r&&m.hasValue){var t=m.value;if(r(t,e))return l=t}return l=e}if(t=l,o(a,e))return t;var s=n(e);return void 0!==r&&r(t,s)?t:(a=e,l=s)}var a,l,i=!1,c=void 0===s?null:s;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,s,n,r]))[0],_[1]);return i(function(){m.hasValue=!0,m.value=d},[d]),u(d),d}},554:function(e,t,s){"use strict";e.exports=s(4492)},5006:function(e,t,s){"use strict";e.exports=s(5107)},8877:function(){},4100:function(e){e.exports={footer:"Footer_footer__YgQC9",footer__logo:"Footer_footer__logo__Mmgbk","footer__logo-name":"Footer_footer__logo-name__OLRT5","social-list":"Footer_social-list__fwHMn","social-list__link":"Footer_social-list__link__x1pN7"}},7999:function(e){e.exports={form:"Forms_form__6CB_j",form__title:"Forms_form__title__Py9By",form__fields:"Forms_form__fields__3PdS3",form__field:"Forms_form__field___diRi","form__field-title":"Forms_form__field-title__ZvmAO","form__field-input":"Forms_form__field-input__x0jsR",form__message:"Forms_form__message__TfSec",form__actions:"Forms_form__actions__ZDzg8",form__reset:"Forms_form__reset__bnwba",form__submit:"Forms_form__submit__tHIEE"}},8160:function(e){e.exports={header:"Header_header__hrF4W",logo:"Header_logo__0h7JC",logo__image:"Header_logo__image__512Hy",menu:"Header_menu__8FCNf",menu__list:"Header_menu__list__8hP64",menu__item:"Header_menu__item__sjT_f",menu__link:"Header_menu__link__ZucvR",menu__link_active:"Header_menu__link_active__KYq02",auth:"Header_auth__XjkQJ",auth__button:"Header_auth__button__7tPqk",register__button:"Header_register__button__I_q96"}},3121:function(e){e.exports={overlay:"Overlay_overlay__87APJ","overlay_is-opened":"Overlay_overlay_is-opened__QKW4v"}},3424:function(e){e.exports={popup:"Popup_popup__lJxRt","popup_is-opened":"Popup_popup_is-opened__R8NFO",close:"Popup_close__efpry","close-icon":"Popup_close-icon__QfKYp"}}},function(e){e.O(0,[701,138,971,23,744],function(){return e(e.s=6280)}),_N_E=e.O()}]);