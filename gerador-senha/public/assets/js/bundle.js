(()=>{"use strict";var r={958:(r,n,o)=>{o.d(n,{A:()=>i});var e=o(354),a=o.n(e),t=o(314),A=o.n(t)()(a());A.push([r.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),A.push([r.id,':root {\n  --primary-color: rgb(0, 128, 0); /* Verde principal */\n  --primary-color-darker: rgb(0, 100, 0); /* Verde mais escuro */\n  --background-dark: rgb(10, 10, 10); /* Preto profundo */\n  --text-light: rgb(200, 200, 200); /* Cinza claro para textos */\n  --checkbox-bg: rgb(20, 30, 20); /* Fundo das checkboxes */\n  --checkbox-border: var(--primary-color); /* Borda das checkboxes */\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--background-dark);\n  font-family: \'Open Sans\', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n  color: var(--text-light);\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: var(--background-dark);\n  border: 1px solid var(--primary-color);\n  padding: 20px;\n  border-radius: 10px;\n  color: var(--text-light);\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n  background: rgb(20, 20, 20);\n  color: var(--text-light);\n  border: 1px solid var(--primary-color);\n  border-radius: 5px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: linear-gradient(45deg, var(--primary-color), var(--primary-color-darker));\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n  border-radius: 5px;\n  transition: background 0.3s, transform 0.2s, box-shadow 0.2s;\n}\n\nform button:hover {\n  background: linear-gradient(45deg, var(--primary-color-darker), var(--primary-color));\n  transform: translateY(-3px);\n  box-shadow: 0 4px 8px rgba(0, 128, 0, 0.4);\n}\n\n.senha-gerada {\n  font-size: 2em;\n  color: var(--primary-color);\n  margin: 40px 0;\n}\n\ninput[type="checkbox"] {\n  width: 24px;\n  height: 24px;\n  background: var(--checkbox-bg);\n  border: 2px solid var(--checkbox-border);\n  border-radius: 4px;\n  transition: background 0.3s, border-color 0.3s;\n}\n\ninput[type="checkbox"]:hover {\n  background: var(--primary-color);\n  border-color: var(--primary-color-darker);\n}\n\ninput[type="checkbox"]:checked {\n  background: var(--primary-color-darker);\n  border-color: var(--primary-color);\n}\n\nbutton {\n  display: block;\n  margin: 40px 0;\n  font-size: 1em;\n  background: linear-gradient(45deg, var(--primary-color), var(--primary-color-darker));\n  color: var(--text-light);\n  border: none;\n  padding: 10px 20px;\n  border-radius: 5px;\n  transition: background 0.3s, transform 0.2s, box-shadow 0.2s;\n}\n\nbutton:hover {\n  background: linear-gradient(45deg, var(--primary-color-darker), var(--primary-color));\n  transform: translateY(-3px);\n  box-shadow: 0 4px 8px rgba(0, 128, 0, 0.4);\n}\n',"",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;EACE,+BAA+B,EAAE,oBAAoB;EACrD,sCAAsC,EAAE,sBAAsB;EAC9D,kCAAkC,EAAE,mBAAmB;EACvD,gCAAgC,EAAE,4BAA4B;EAC9D,8BAA8B,EAAE,yBAAyB;EACzD,uCAAuC,EAAE,yBAAyB;AACpE;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;EACV,kCAAkC;EAClC,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kCAAkC;EAClC,sCAAsC;EACtC,aAAa;EACb,mBAAmB;EACnB,wBAAwB;AAC1B;;AAEA;EACE,cAAc;EACd,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;EACf,2BAA2B;EAC3B,wBAAwB;EACxB,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,qFAAqF;EACrF,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,4DAA4D;AAC9D;;AAEA;EACE,qFAAqF;EACrF,2BAA2B;EAC3B,0CAA0C;AAC5C;;AAEA;EACE,cAAc;EACd,2BAA2B;EAC3B,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,wCAAwC;EACxC,kBAAkB;EAClB,8CAA8C;AAChD;;AAEA;EACE,gCAAgC;EAChC,yCAAyC;AAC3C;;AAEA;EACE,uCAAuC;EACvC,kCAAkC;AACpC;;AAEA;EACE,cAAc;EACd,cAAc;EACd,cAAc;EACd,qFAAqF;EACrF,wBAAwB;EACxB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,4DAA4D;AAC9D;;AAEA;EACE,qFAAqF;EACrF,2BAA2B;EAC3B,0CAA0C;AAC5C",sourcesContent:['@import url(\'https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap\');\r\n\r\n:root {\r\n  --primary-color: rgb(0, 128, 0); /* Verde principal */\r\n  --primary-color-darker: rgb(0, 100, 0); /* Verde mais escuro */\r\n  --background-dark: rgb(10, 10, 10); /* Preto profundo */\r\n  --text-light: rgb(200, 200, 200); /* Cinza claro para textos */\r\n  --checkbox-bg: rgb(20, 30, 20); /* Fundo das checkboxes */\r\n  --checkbox-border: var(--primary-color); /* Borda das checkboxes */\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  outline: 0;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: var(--background-dark);\r\n  font-family: \'Open Sans\', sans-serif;\r\n  font-size: 1.3em;\r\n  line-height: 1.5em;\r\n  color: var(--text-light);\r\n}\r\n\r\n.container {\r\n  max-width: 640px;\r\n  margin: 50px auto;\r\n  background: var(--background-dark);\r\n  border: 1px solid var(--primary-color);\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  color: var(--text-light);\r\n}\r\n\r\nform input, form label, form button {\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n  font-size: 24px;\r\n  height: 50px;\r\n  padding: 0 20px;\r\n  background: rgb(20, 20, 20);\r\n  color: var(--text-light);\r\n  border: 1px solid var(--primary-color);\r\n  border-radius: 5px;\r\n}\r\n\r\nform input:focus {\r\n  outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n  border: none;\r\n  background: linear-gradient(45deg, var(--primary-color), var(--primary-color-darker));\r\n  color: #fff;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  height: 50px;\r\n  cursor: pointer;\r\n  margin-top: 30px;\r\n  border-radius: 5px;\r\n  transition: background 0.3s, transform 0.2s, box-shadow 0.2s;\r\n}\r\n\r\nform button:hover {\r\n  background: linear-gradient(45deg, var(--primary-color-darker), var(--primary-color));\r\n  transform: translateY(-3px);\r\n  box-shadow: 0 4px 8px rgba(0, 128, 0, 0.4);\r\n}\r\n\r\n.senha-gerada {\r\n  font-size: 2em;\r\n  color: var(--primary-color);\r\n  margin: 40px 0;\r\n}\r\n\r\ninput[type="checkbox"] {\r\n  width: 24px;\r\n  height: 24px;\r\n  background: var(--checkbox-bg);\r\n  border: 2px solid var(--checkbox-border);\r\n  border-radius: 4px;\r\n  transition: background 0.3s, border-color 0.3s;\r\n}\r\n\r\ninput[type="checkbox"]:hover {\r\n  background: var(--primary-color);\r\n  border-color: var(--primary-color-darker);\r\n}\r\n\r\ninput[type="checkbox"]:checked {\r\n  background: var(--primary-color-darker);\r\n  border-color: var(--primary-color);\r\n}\r\n\r\nbutton {\r\n  display: block;\r\n  margin: 40px 0;\r\n  font-size: 1em;\r\n  background: linear-gradient(45deg, var(--primary-color), var(--primary-color-darker));\r\n  color: var(--text-light);\r\n  border: none;\r\n  padding: 10px 20px;\r\n  border-radius: 5px;\r\n  transition: background 0.3s, transform 0.2s, box-shadow 0.2s;\r\n}\r\n\r\nbutton:hover {\r\n  background: linear-gradient(45deg, var(--primary-color-darker), var(--primary-color));\r\n  transform: translateY(-3px);\r\n  box-shadow: 0 4px 8px rgba(0, 128, 0, 0.4);\r\n}\r\n'],sourceRoot:""}]);const i=A},314:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var o="",e=void 0!==n[5];return n[4]&&(o+="@supports (".concat(n[4],") {")),n[2]&&(o+="@media ".concat(n[2]," {")),e&&(o+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),o+=r(n),e&&(o+="}"),n[2]&&(o+="}"),n[4]&&(o+="}"),o})).join("")},n.i=function(r,o,e,a,t){"string"==typeof r&&(r=[[null,r,void 0]]);var A={};if(e)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(A[c]=!0)}for(var s=0;s<r.length;s++){var d=[].concat(r[s]);e&&A[d[0]]||(void 0!==t&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=t),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},354:r=>{r.exports=function(r){var n=r[1],o=r[3];if(!o)return n;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),t="/*# ".concat(a," */");return[n].concat([t]).join("\n")}return[n].join("\n")}},72:r=>{var n=[];function o(r){for(var o=-1,e=0;e<n.length;e++)if(n[e].identifier===r){o=e;break}return o}function e(r,e){for(var t={},A=[],i=0;i<r.length;i++){var c=r[i],s=e.base?c[0]+e.base:c[0],d=t[s]||0,p="".concat(s," ").concat(d);t[s]=d+1;var l=o(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)n[l].references++,n[l].updater(u);else{var b=a(u,e);e.byIndex=i,n.splice(i,0,{identifier:p,updater:b,references:1})}A.push(p)}return A}function a(r,n){var o=n.domAPI(n);return o.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;o.update(r=n)}else o.remove()}}r.exports=function(r,a){var t=e(r=r||[],a=a||{});return function(r){r=r||[];for(var A=0;A<t.length;A++){var i=o(t[A]);n[i].references--}for(var c=e(r,a),s=0;s<t.length;s++){var d=o(t[s]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}t=c}}},659:r=>{var n={};r.exports=function(r,o){var e=function(r){if(void 0===n[r]){var o=document.querySelector(r);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(r){o=null}n[r]=o}return n[r]}(r);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(o)}},540:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},56:(r,n,o)=>{r.exports=function(r){var n=o.nc;n&&r.setAttribute("nonce",n)}},825:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(o){!function(r,n,o){var e="";o.supports&&(e+="@supports (".concat(o.supports,") {")),o.media&&(e+="@media ".concat(o.media," {"));var a=void 0!==o.layer;a&&(e+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),e+=o.css,a&&(e+="}"),o.media&&(e+="}"),o.supports&&(e+="}");var t=o.sourceMap;t&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")),n.styleTagTransform(e,r,n.options)}(n,r,o)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},113:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function o(e){var a=n[e];if(void 0!==a)return a.exports;var t=n[e]={id:e,exports:{}};return r[e](t,t.exports,o),t.exports}o.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return o.d(n,{a:n}),n},o.d=(r,n)=>{for(var e in n)o.o(n,e)&&!o.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},o.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),o.nc=void 0;var e=o(72),a=o.n(e),t=o(825),A=o.n(t),i=o(659),c=o.n(i),s=o(56),d=o.n(s),p=o(540),l=o.n(p),u=o(113),b=o.n(u),g=o(958),C={};C.styleTagTransform=b(),C.setAttributes=d(),C.insert=c().bind(null,"head"),C.domAPI=A(),C.insertStyleElement=l(),a()(g.A,C),g.A&&g.A.locals&&g.A.locals})();
//# sourceMappingURL=bundle.js.map