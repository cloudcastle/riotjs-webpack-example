!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){(function(t){"use strict";n(3),t.mount("meet")}).call(e,n(2))},function(t,e){"use strict";function n(t){return null!==t&&"object"==typeof t}function r(t,e){return Object.hasOwnProperty.call(t,e)}function o(t,e,r){if(n(t)){var o=void 0===r?this:r;Object.keys(t).forEach(function(n){e.call(o,t[n],n)})}}function i(t,e){return n(t)||(t={}),n(e)?(o(e,function(e,n){t[n]=e}),t):t}function u(t){if(!n(t))return{};var e={};return o(t,function(t,n){e[n]=t}),e}function a(t){var e=[];return o(t,function(t,n){(t||0===t)&&n&&e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}),e.join("&")}var s={plain:"text/plain; charset=utf-8",json:"application/json; charset=utf-8",form:"application/x-www-form-urlencoded; charset=utf-8"};e.types=s;var c={plain:/text\/plain/i,json:/application\/json/i,form:/application\/x-www-form-urlencoded/i};e.typeRegs=c,e.isObject=n,e.ownProp=r,e.forOwn=o,e.assign=i,e.toHash=u,e.formEncode=a},function(t,e,n){var r;!function(o,i){"use strict";function u(t,e,n){var r={};return r[t.key]=e,t.pos&&(r[t.pos]=n),r}function a(t,e){for(var n,r=e.length,o=t.length;r>o;)n=e[--r],e.splice(r,1),n.unmount()}function s(t,e){Object.keys(t.tags).forEach(function(n){var r=t.tags[n];P(r)?y(r,function(t){M(t,n,e)}):M(r,n,e)})}function c(t,e,n){var r,o=t._root;for(t._virts=[];o;)r=o.nextSibling,n?e.insertBefore(o,n._root):e.appendChild(o),t._virts.push(o),o=r}function f(t,e,n,r){for(var o,i=t._root,u=0;r>u;u++)o=i.nextSibling,e.insertBefore(i,n._root),i=o}function p(t,e,n){C(t,"each");var r,o=typeof O(t,"no-reorder")!==it||C(t,"no-reorder"),i=R(t),p=tt[i]||{tmpl:w(t)},l=ct.test(i),d=t.parentNode,g=document.createTextNode(""),m=N(t),v="option"===i.toLowerCase(),y=[],b=[],_="VIRTUAL"==t.tagName;n=gt.loopKeys(n),d.insertBefore(g,t),e.one("before-mount",function(){t.parentNode.removeChild(t),d.stub&&(d=e.root)}).on("update",function(){var w=gt(n.val,e),x=document.createDocumentFragment();P(w)||(r=w||!1,w=r?Object.keys(w).map(function(t){return u(n,t,w[t])}):[]);for(var E=0,C=w.length;C>E;E++){var T=w[E],O=o&&T instanceof Object&&!r,j=b.indexOf(T),N=~j&&O?j:E,A=y[N];T=!r&&n.key?u(n,T,E):T,!O&&!A||O&&!~j||!A?(A=new h(p,{parent:e,isLoop:!0,hasImpl:!!tt[i],root:l?d:t.cloneNode(),item:T},t.innerHTML),A.mount(),_&&(A._root=A.root.firstChild),E!=y.length&&y[E]?(_?c(A,d,y[E]):d.insertBefore(A.root,y[E].root),b.splice(E,0,T)):_?c(A,x):x.appendChild(A.root),y.splice(E,0,A),N=E):A.update(T,!0),N!==E&&O&&y[E]&&(_?f(A,d,y[E],t.childNodes.length):d.insertBefore(A.root,y[E].root),n.pos&&(A[n.pos]=E),y.splice(E,0,y.splice(N,1)[0]),b.splice(E,0,b.splice(N,1)[0]),!m&&A.tags&&s(A,E)),A._item=T,I(A,"_parent",e)}if(a(w,y),v){if(d.appendChild(x),dt&&!d.multiple)for(var M=0;M<d.length;M++)if(d[M].__riot1374){d.selectedIndex=M,delete d[M].__riot1374;break}}else d.insertBefore(x,g);m&&(e.tags[i]=y),b=w.slice()})}function l(t,e,n,r){F(t,function(t){if(1==t.nodeType){if(t.isLoop=t.isLoop||t.parentNode&&t.parentNode.isLoop||O(t,"each")?1:0,n){var o=N(t);o&&!t.isLoop&&n.push(L(o,{root:t,parent:e},t.innerHTML,e))}t.isLoop&&!r||Y(t,e,[])}})}function d(t,e,n){function r(t,e,r){gt.hasExpr(e)&&n.push($({dom:t,expr:e},r))}F(t,function(t){var n,o=t.nodeType;return 3==o&&"STYLE"!=t.parentNode.tagName&&r(t,t.nodeValue),1==o?(n=O(t,"each"))?(p(t,e,n),!1):(y(t.attributes,function(e){var n=e.name,o=n.split("__")[1];return r(t,e.value,{attr:o||n,bool:o}),o?(C(t,n),!1):void 0}),N(t)?!1:void 0):void 0})}function h(t,e,n){function r(){var t=m&&g?f:h||f;y(O.attributes,function(e){var n=e.value;p[T(e.name)]=gt.hasExpr(n)?gt(n,t):n}),y(Object.keys(A),function(e){p[T(e)]=gt(A[e],t)})}function o(t){for(var e in w)typeof f[e]!==at&&H(f,e)&&(f[e]=t[e])}function u(){f.parent&&g&&y(Object.keys(f.parent),function(t){var e=!ft.test(t)&&k(M,t);(typeof f[t]===at||e)&&(e||M.push(t),f[t]=f.parent[t])})}function a(t){f.update(t,!0)}function s(t){if(y(x,function(e){e[t?"mount":"unmount"]()}),h){var e=t?"on":"off";g?h[e]("unmount",f.unmount):h[e]("update",a)[e]("unmount",f.unmount)}}var c,f=Q.observable(this),p=z(e.opts)||{},h=e.parent,g=e.isLoop,m=e.hasImpl,w=D(e.item),_=[],x=[],O=e.root,N=O.tagName.toLowerCase(),A={},M=[];t.name&&O._tag&&O._tag.unmount(!0),this.isMounted=!1,O.isLoop=g,O._tag=this,I(this,"_riot_id",++X),$(this,{parent:h,root:O,opts:p,tags:{}},w),y(O.attributes,function(t){var e=t.value;gt.hasExpr(e)&&(A[t.name]=e)}),c=mt(t.tmpl,n),I(this,"update",function(t,e){return t=D(t),u(),t&&E(w)&&(o(t),w=t),$(f,t),r(),f.trigger("update",t),v(_,f),e&&f.parent?f.parent.one("updated",function(){f.trigger("updated")}):yt(function(){f.trigger("updated")}),this}),I(this,"mixin",function(){return y(arguments,function(t){var e;t=typeof t===it?Q.mixin(t):t,b(t)?(e=new t,t=t.prototype):e=t,y(Object.getOwnPropertyNames(t),function(t){"init"!=t&&(f[t]=b(e[t])?e[t].bind(f):e[t])}),e.init&&e.init.bind(f)()}),this}),I(this,"mount",function(){r();var e=Q.mixin(et);if(e)for(var n in e)e.hasOwnProperty(n)&&f.mixin(e[n]);if(t.fn&&t.fn.call(f,p),d(c,f,_),s(!0),t.attrs&&q(t.attrs,function(t,e){j(O,t,e)}),(t.attrs||m)&&d(f.root,f,_),f.parent&&!g||f.update(w),f.trigger("before-mount"),g&&!m)O=c.firstChild;else{for(;c.firstChild;)O.appendChild(c.firstChild);O.stub&&(O=h.root)}I(f,"root",O),g&&l(f.root,f.parent,null,!0),!f.parent||f.parent.isMounted?(f.isMounted=!0,f.trigger("mount")):f.parent.one("mount",function(){U(f.root)||(f.parent.isMounted=f.isMounted=!0,f.trigger("mount"))})}),I(this,"unmount",function(t){var e,n=O,r=n.parentNode,o=W.indexOf(f);if(f.trigger("before-unmount"),~o&&W.splice(o,1),r){if(h)e=S(h),P(e.tags[N])?y(e.tags[N],function(t,n){t._riot_id==f._riot_id&&e.tags[N].splice(n,1)}):e.tags[N]=i;else for(;n.firstChild;)n.removeChild(n.firstChild);t?(C(r,ot),C(r,rt)):r.removeChild(n)}this._virts&&y(this._virts,function(t){t.parentNode&&t.parentNode.removeChild(t)}),f.trigger("unmount"),s(),f.off("*"),f.isMounted=!1,delete O._tag}),l(c,this,x)}function g(t,e,n,r){n[t]=function(t){var i,u=r._parent,a=r._item;if(!a)for(;u&&!a;)a=u._item,u=u._parent;t=t||o.event,H(t,"currentTarget")&&(t.currentTarget=n),H(t,"target")&&(t.target=t.srcElement),H(t,"which")&&(t.which=t.charCode||t.keyCode),t.item=a,e.call(r,t)===!0||/radio|check/.test(n.type)||(t.preventDefault&&t.preventDefault(),t.returnValue=!1),t.preventUpdate||(i=a?S(u):r,i.update())}}function m(t,e,n){t&&(t.insertBefore(n,e),t.removeChild(e))}function v(t,e){y(t,function(t,n){var r=t.dom,o=t.attr,i=gt(t.expr,e),u=t.dom.parentNode;if(t.bool?i=!!i:null==i&&(i=""),t.value!==i){if(t.value=i,!o)return i+="",void(u&&("TEXTAREA"===u.tagName?(u.value=i,lt||(r.nodeValue=i)):r.nodeValue=i));if("value"===o)return void(r.value=i);if(C(r,o),b(i))g(o,i,r,e);else if("if"==o){var a=t.stub,s=function(){m(a.parentNode,a,r)},c=function(){m(r.parentNode,r,a)};i?a&&(s(),r.inStub=!1,U(r)||F(r,function(t){t._tag&&!t._tag.isMounted&&(t._tag.isMounted=!!t._tag.trigger("mount"))})):(a=t.stub=a||document.createTextNode(""),r.parentNode?c():(e.parent||e).one("updated",c),r.inStub=!0)}else"show"===o?r.style.display=i?"":"none":"hide"===o?r.style.display=i?"none":"":t.bool?(r[o]=i,i&&j(r,o,o),dt&&"selected"===o&&"OPTION"===r.tagName&&(r.__riot1374=i)):(0===i||i&&typeof i!==ut)&&(Z(o,nt)&&o!=rt&&(o=o.slice(nt.length)),j(r,o,i))}})}function y(t,e){for(var n,r=t?t.length:0,o=0;r>o;o++)n=t[o],null!=n&&e(n,o)===!1&&o--;return t}function b(t){return typeof t===st||!1}function w(t){if(t.outerHTML)return t.outerHTML;var e=B("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}function _(t,e){if(typeof t.innerHTML!=at)t.innerHTML=e;else{var n=(new DOMParser).parseFromString(e,"application/xml");t.appendChild(t.ownerDocument.importNode(n.documentElement,!0))}}function x(t){return~pt.indexOf(t)}function E(t){return t&&typeof t===ut}function C(t,e){t.removeAttribute(e)}function T(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})}function O(t,e){return t.getAttribute(e)}function j(t,e,n){t.setAttribute(e,n)}function N(t){return t.tagName&&tt[O(t,ot)||O(t,rt)||t.tagName.toLowerCase()]}function A(t,e,n){var r=n.tags[e];r?(P(r)||r!==t&&(n.tags[e]=[r]),k(n.tags[e],t)||n.tags[e].push(t)):n.tags[e]=t}function M(t,e,n){var r,o=t.parent;o&&(r=o.tags[e],P(r)?r.splice(n,0,r.splice(r.indexOf(t),1)[0]):A(t,e,o))}function L(t,e,n,r){var o=new h(t,e,n),i=R(e.root),u=S(r);return o.parent=u,o._parent=r,A(o,i,u),u!==r&&A(o,i,r),e.root.innerHTML="",o}function S(t){for(var e=t;!N(e.root)&&e.parent;)e=e.parent;return e}function I(t,e,n,r){return Object.defineProperty(t,e,$({value:n,enumerable:!1,writable:!1,configurable:!0},r)),t}function R(t){var e=N(t),n=O(t,"name"),r=n&&!gt.hasExpr(n)?n:e?e.name:t.tagName.toLowerCase();return r}function $(t){for(var e,n=arguments,r=1;r<n.length;++r)if(e=n[r])for(var o in e)H(t,o)&&(t[o]=e[o]);return t}function k(t,e){return~t.indexOf(e)}function P(t){return Array.isArray(t)||t instanceof Array}function H(t,e){var n=Object.getOwnPropertyDescriptor(t,e);return typeof t[e]===at||n&&n.writable}function D(t){if(!(t instanceof h||t&&typeof t.trigger==st))return t;var e={};for(var n in t)ft.test(n)||(e[n]=t[n]);return e}function F(t,e){if(t){if(e(t)===!1)return;for(t=t.firstChild;t;)F(t,e),t=t.nextSibling}}function q(t,e){for(var n,r=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;n=r.exec(t);)e(n[1].toLowerCase(),n[2]||n[3]||n[4])}function U(t){for(;t;){if(t.inStub)return!0;t=t.parentNode}return!1}function B(t,e){return e?document.createElementNS("http://www.w3.org/2000/svg","svg"):document.createElement(t)}function K(t,e){return(e||document).querySelectorAll(t)}function G(t,e){return(e||document).querySelector(t)}function z(t){function e(){}return e.prototype=t,new e}function V(t){return O(t,"id")||O(t,"name")}function Y(t,e,n){var r,o=V(t),i=function(i){k(n,o)||(r=P(i),i?(!r||r&&!k(i,t))&&(r?i.push(t):e[o]=[i,t]):e[o]=t)};o&&(gt.hasExpr(o)?e.one("mount",function(){o=V(t),i(e[o])}):i(e[o]))}function Z(t,e){return t.slice(0,e.length)===e}function J(t,e,n){var r=tt[e],o=t._innerHTML=t._innerHTML||t.innerHTML;return t.innerHTML="",r&&t&&(r=new h(r,{root:t,opts:n},o)),r&&r.mount&&(r.mount(),k(W,r)||W.push(r)),r}var Q={version:"v2.4.0",settings:{}},X=0,W=[],tt={},et="__global_mixin",nt="riot-",rt=nt+"tag",ot="data-is",it="string",ut="object",at="undefined",st="function",ct=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,ft=/^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|parent|opts|trigger|o(?:n|ff|ne))$/,pt=["altGlyph","animate","animateColor","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","filter","font","foreignObject","g","glyph","glyphRef","image","line","linearGradient","marker","mask","missing-glyph","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tref","tspan","use"],lt=0|(o&&o.document||{}).documentMode,dt=o&&!!o.InstallTrigger;Q.observable=function(t){function e(t,e){for(var n,r,o=t.split(" "),i=o.length,u=0;i>u;u++)n=o[u],r=n.indexOf("."),n&&e(~r?n.substring(0,r):n,u,~r?n.slice(r+1):null)}t=t||{};var n={},r=Array.prototype.slice;return Object.defineProperties(t,{on:{value:function(r,o){return"function"!=typeof o?t:(e(r,function(t,e,r){(n[t]=n[t]||[]).push(o),o.typed=e>0,o.ns=r}),t)},enumerable:!1,writable:!1,configurable:!1},off:{value:function(r,o){return"*"!=r||o?e(r,function(t,e,r){if(o||r)for(var i,u=n[t],a=0;i=u&&u[a];++a)(i==o||r&&i.ns==r)&&u.splice(a--,1);else delete n[t]}):n={},t},enumerable:!1,writable:!1,configurable:!1},one:{value:function(e,n){function r(){t.off(e,r),n.apply(t,arguments)}return t.on(e,r)},enumerable:!1,writable:!1,configurable:!1},trigger:{value:function(o){for(var i,u=arguments.length-1,a=new Array(u),s=0;u>s;s++)a[s]=arguments[s+1];return e(o,function(e,o,u){i=r.call(n[e]||[],0);for(var s,c=0;s=i[c];++c)s.busy||(s.busy=1,u&&s.ns!=u||s.apply(t,s.typed?[e].concat(a):a),i[c]!==s&&c--,s.busy=0);n["*"]&&"*"!=e&&t.trigger.apply(t,["*",e].concat(a))}),t},enumerable:!1,writable:!1,configurable:!1}}),t},function(t){function e(t){return t.split(/[\/?#]/)}function n(t,e){var n=new RegExp("^"+e[C](/\*/g,"([^/?#]+?)")[C](/\.\./,".*")+"$"),r=t.match(n);return r?r.slice(1):void 0}function r(t,e){var n;return function(){clearTimeout(n),n=setTimeout(t,e)}}function i(t){h=r(p,1),A[x](T,h),A[x](O,h),M[x](R,l),t&&p(!0)}function u(){this.$=[],t.observable(this),k.on("stop",this.s.bind(this)),k.on("emit",this.e.bind(this))}function a(t){return t[C](/^\/|\/$/,"")}function s(t){return"string"==typeof t}function c(t){return(t||S.href)[C](b,"")}function f(t){return"#"==g[0]?(t||S.href||"").split(g)[1]||"":(S?c(t):t||"")[C](g,"")}function p(t){var e=0==D;if(!(D>=N)&&(D++,H.push(function(){var e=f();(t||e!=m)&&(k[j]("emit",e),m=e)}),e)){for(;H.length;)H[0](),H.shift();D=0}}function l(t){if(!(1!=t.which||t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){for(var e=t.target;e&&"A"!=e.nodeName;)e=e.parentNode;!e||"A"!=e.nodeName||e[E]("download")||!e[E]("href")||e.target&&"_self"!=e.target||-1==e.href.indexOf(S.href.match(b)[0])||(e.href==S.href||e.href.split("#")[0]!=S.href.split("#")[0]&&("#"==g||0===c(e.href).indexOf(g))&&d(f(e.href),e.title||M.title))&&t.preventDefault()}}function d(t,e,n){return L?(t=g+a(t),e=e||M.title,n?L.replaceState(null,e,t):L.pushState(null,e,t),M.title=e,P=!1,p(),P):k[j]("emit",f(t))}var h,g,m,v,y,b=/^.+?\/\/+[^\/]+/,w="EventListener",_="remove"+w,x="add"+w,E="hasAttribute",C="replace",T="popstate",O="hashchange",j="trigger",N=3,A="undefined"!=typeof o&&o,M="undefined"!=typeof document&&document,L=A&&history,S=A&&(L.location||A.location),I=u.prototype,R=M&&M.ontouchstart?"touchstart":"click",$=!1,k=t.observable(),P=!1,H=[],D=0;I.m=function(t,e,n){!s(t)||e&&!s(e)?e?this.r(t,e):this.r("@",t):d(t,e,n||!1)},I.s=function(){this.off("*"),this.$=[]},I.e=function(t){this.$.concat("@").some(function(e){var n=("@"==e?v:y)(a(t),a(e));return"undefined"!=typeof n?(this[j].apply(null,[e].concat(n)),P=!0):void 0},this)},I.r=function(t,e){"@"!=t&&(t="/"+a(t),this.$.push(t)),this.on(t,e)};var F=new u,q=F.m.bind(F);q.create=function(){var t=new u,e=t.m.bind(t);return e.stop=t.s.bind(t),e},q.base=function(t){g=t||"#",m=f()},q.exec=function(){p(!0)},q.parser=function(t,r){t||r||(v=e,y=n),t&&(v=t),r&&(y=r)},q.query=function(){var t={},e=S.href||m;return e[C](/[?&](.+?)=([^&]*)/g,function(e,n,r){t[n]=r}),t},q.stop=function(){$&&(A&&(A[_](T,h),A[_](O,h),M[_](R,l)),k[j]("stop"),$=!1)},q.start=function(t){$||(A&&("complete"==document.readyState?i(t):A[x]("load",function(){setTimeout(function(){i(t)},1)})),$=!0)},q.base(),q.parser(),t.route=q}(Q);var ht=function(t){function e(t){return t}function n(t,e){return e||(e=v),new RegExp(t.source.replace(/{/g,e[2]).replace(/}/g,e[3]),t.global?c:"")}function r(t){if(t===h)return g;var e=t.split(" ");if(2!==e.length||/[\x00-\x1F<>a-zA-Z0-9'",;\\]/.test(t))throw new Error('Unsupported brackets "'+t+'"');return e=e.concat(t.replace(/(?=[[\]()*+?.^$|])/g,"\\").split(" ")),e[4]=n(e[1].length>1?/{[\S\s]*?}/:g[4],e),e[5]=n(t.length>3?/\\({|})/g:g[5],e),e[6]=n(g[6],e),e[7]=RegExp("\\\\("+e[3]+")|([[({])|("+e[3]+")|"+l,c),e[8]=t,e}function o(t){return t instanceof RegExp?a(t):v[t]}function i(t){(t||(t=h))!==v[8]&&(v=r(t),a=t===h?e:n,v[9]=a(g[9])),m=t}function u(t){var e;t=t||{},e=t.brackets,Object.defineProperty(t,"brackets",{set:i,get:function(){return m},enumerable:!0}),s=t,i(e)}var a,s,c="g",f=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,p=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,l=p.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,d={"(":RegExp("([()])|"+l,c),"[":RegExp("([[\\]])|"+l,c),"{":RegExp("([{}])|"+l,c)},h="{ }",g=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+l,c),h,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/],m=t,v=[];return o.split=function(t,e,n){function r(t){e||u?c.push(t&&t.replace(n[5],"$1")):c.push(t)}function o(t,e,n){var r,o=d[e];for(o.lastIndex=n,n=1;(r=o.exec(t))&&(!r[1]||(r[1]===e?++n:--n)););return n?t.length:o.lastIndex}n||(n=v);var i,u,a,s,c=[],f=n[6];for(u=a=f.lastIndex=0;i=f.exec(t);){if(s=i.index,u){if(i[2]){f.lastIndex=o(t,i[2],f.lastIndex);continue}if(!i[3])continue}i[1]||(r(t.slice(a,s)),a=f.lastIndex,f=n[6+(u^=1)],f.lastIndex=a)}return t&&a<t.length&&r(t.slice(a)),c},o.hasExpr=function(t){return v[4].test(t)},o.loopKeys=function(t){var e=t.match(v[9]);return e?{key:e[1],pos:e[2],val:v[0]+e[3].trim()+v[1]}:{val:t.trim()}},o.array=function(t){return t?r(t):v},Object.defineProperty(o,"settings",{set:u,get:function(){return s}}),o.settings="undefined"!=typeof Q&&Q.settings||{},o.set=i,o.R_STRINGS=p,o.R_MLCOMMS=f,o.S_QBLOCKS=l,o}(),gt=function(){function t(t,r){return t?(a[t]||(a[t]=n(t))).call(r,e):t}function e(e,n){t.errorHandler&&(e.riotData={tagName:n&&n.root&&n.root.tagName,_riot_id:n&&n._riot_id},t.errorHandler(e))}function n(t){var e=r(t);return"try{return "!==e.slice(0,11)&&(e="return "+e),new Function("E",e+";")}function r(t){var e,n=[],r=ht.split(t.replace(p,'"'),1);if(r.length>2||r[0]){var o,u,a=[];for(o=u=0;o<r.length;++o)e=r[o],e&&(e=1&o?i(e,1,n):'"'+e.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"')&&(a[u++]=e);e=2>u?a[0]:"["+a.join(",")+'].join("")'}else e=i(r[1],0,n);return n[0]&&(e=e.replace(l,function(t,e){return n[e].replace(/\r/g,"\\r").replace(/\n/g,"\\n")})),e}function i(t,e,n){function r(e,n){var r,o=1,i=d[e];for(i.lastIndex=n.lastIndex;r=i.exec(t);)if(r[0]===e)++o;else if(!--o)break;n.lastIndex=o?t.length:i.lastIndex}if(t=t.replace(f,function(t,e){return t.length>2&&!e?s+(n.push(t)-1)+"~":t}).replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1")){for(var o,i=[],a=0;t&&(o=t.match(c))&&!o.index;){var p,l,h=/,|([[{(])|$/g;for(t=RegExp.rightContext,p=o[2]?n[o[2]].slice(1,-1).trim().replace(/\s+/g," "):o[1];l=(o=h.exec(t))[1];)r(l,h);l=t.slice(0,o.index),t=RegExp.rightContext,i[a++]=u(l,1,p)}t=a?a>1?"["+i.join(",")+'].join(" ").trim()':i[0]:u(t,e)}return t}function u(t,e,n){var r;return t=t.replace(g,function(t,e,n,o,i){return n&&(o=r?0:o+t.length,"this"!==n&&"global"!==n&&"window"!==n?(t=e+'("'+n+h+n,o&&(r="."===(i=i[o])||"("===i||"["===i)):o&&(r=!m.test(i.slice(o)))),t}),r&&(t="try{return "+t+"}catch(e){E(e,this)}"),n?t=(r?"function(){"+t+"}.call(this)":"("+t+")")+'?"'+n+'":""':e&&(t="function(v){"+(r?t.replace("return ","v="):"v=("+t+")")+';return v||v===0?v:""}.call(this)'),t}var a={};t.haveRaw=ht.hasRaw,t.hasExpr=ht.hasExpr,t.loopKeys=ht.loopKeys,t.errorHandler=null;var s="⁗",c=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,f=RegExp(ht.S_QBLOCKS,"g"),p=/\u2057/g,l=/\u2057(\d+)~/g,d={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g},h='"in this?this:'+("object"!=typeof o?"global":"window")+").",g=/[,{][$\w]+:|(^ *|[^$\w\.])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,m=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;return t.parse=function(t){return t},t.version=ht.version="v2.4.0",t}(),mt=function bt(){function bt(n,r){var o=n&&n.match(/^\s*<([-\w]+)/),i=o&&o[1].toLowerCase(),u=B("div",x(i));return n=e(n,r),a.test(i)?u=t(u,n,i):_(u,n),u.stub=!0,u}function t(t,e,n){var r="o"===n[0],o=r?"select>":"table>";if(t.innerHTML="<"+o+e.trim()+"</"+o,o=t.firstChild,r)o.selectedIndex=-1;else{var i=u[n];i&&1===o.childElementCount&&(o=G(i,o))}return o}function e(t,e){if(!n.test(t))return t;var u={};return e=e&&e.replace(o,function(t,e,n){return u[e]=u[e]||n,""}).trim(),t.replace(i,function(t,e,n){return u[e]||n||""}).replace(r,function(t,n){return e||n||""})}var n=/<yield\b/i,r=/<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,o=/<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,i=/<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,u={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},a=lt&&10>lt?ct:/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;return bt}(),vt=function(t){if(!o)return{add:function(){},inject:function(){}};var e=function(){var t=B("style");j(t,"type","text/css");var e=G("style[type=riot]");return e?(e.id&&(t.id=e.id),e.parentNode.replaceChild(t,e)):document.getElementsByTagName("head")[0].appendChild(t),t}(),n=e.styleSheet,r="";return Object.defineProperty(t,"styleNode",{value:e,writable:!0}),{add:function(t){r+=t},inject:function(){r&&(n?n.cssText+=r:e.innerHTML+=r,r="")}}}(Q),yt=function(t){var e=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame;if(!e||/iP(ad|hone|od).*OS 6/.test(t.navigator.userAgent)){var n=0;e=function(t){var e=Date.now(),r=Math.max(16-(e-n),0);setTimeout(function(){t(n=e+r)},r)}}return e}(o||{});Q.util={brackets:ht,tmpl:gt},Q.mixin=function(){var t={},e=t[et]={},n=0;return function(r,o,i){if(E(r))return void Q.mixin("__unnamed_"+n++,r,!0);var u=i?e:t;return o?void(u[r]=$(u[r]||{},o)):u[r]}}(),Q.tag=function(t,e,n,r,o){return b(r)&&(o=r,/^[\w\-]+\s?=/.test(n)?(r=n,n=""):r=""),n&&(b(n)?o=n:vt.add(n)),t=t.toLowerCase(),tt[t]={name:t,tmpl:e,attrs:r,fn:o},t},Q.tag2=function(t,e,n,r,o){return n&&vt.add(n),tt[t]={name:t,tmpl:e,attrs:r,fn:o},t},Q.mount=function(t,e,n){function r(t){var e="";return y(t,function(t){/[^-\w]/.test(t)||(t=t.trim().toLowerCase(),e+=",["+ot+'="'+t+'"],['+rt+'="'+t+'"]')}),e}function o(){var t=Object.keys(tt);return t+r(t)}function i(t){if(t.tagName){var r=O(t,ot)||O(t,rt);e&&r!==e&&(r=e,j(t,ot,e),j(t,rt,e));var o=J(t,r||t.tagName.toLowerCase(),n);o&&s.push(o)}else t.length&&y(t,i)}var u,a,s=[];if(vt.inject(),E(e)&&(n=e,e=0),typeof t===it?("*"===t?t=a=o():t+=r(t.split(/, */)),u=t?K(t):[]):u=t,"*"===e){if(e=a||o(),u.tagName)u=K(e,u);else{var c=[];y(u,function(t){c.push(K(e,t))}),u=c}e=0}return i(u),s},Q.update=function(){return y(W,function(t){t.update()})},Q.vdom=W,Q.Tag=h,typeof e===ut?t.exports=Q:"function"===st&&typeof n(7)!==at?(r=function(){return Q}.call(e,n,e,t),!(r!==i&&(t.exports=r))):o.riot=Q}("undefined"!=typeof window?window:void 0)},function(t,e,n){(function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}var r=n(9),o=e(r);t.tag2("meet",'<a href="{join}" target="_blank"> <img riot-src="{url}" width="{this.opts.size || 200}" height="{this.opts.size || 200}"> <h3>{name}</h3> </a>',"meet { display: inline-block; padding: 1em; text-align: center; } meet img { background-color: rgb(211, 211, 211); border: 5px solid rgb(255, 255, 255); border-radius: 100%; box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 7px; margin: auto; }","",function(t){var e=this;this.name=this.opts.me,this.join="https://gotomeet.me/"+this.opts.me,this.url="https://cdn.gotomeet.at/images/web-portal/gotomeet/avatar.png",(0,o["default"])({method:"get",url:"https://crossorigin.me/https://gotomeet.me/api/profiles/"+this.opts.me}).then(function(t){e.name=t.name||t.profileId,e.url=t.avatarUrl.replace("www.filepicker.io","d1ho4l1jd34cw6.cloudfront.net"),e.join="https://app.gotomeeting.com/index.html?meetingid="+t.meetingId,e.update()})["catch"](function(t){return console.error(t)})})}).call(e,n(2))},function(t,e,n){var r;(function(t,o,i){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.0.2
	 */
(function(){"use strict";function u(t){return"function"==typeof t||"object"==typeof t&&null!==t}function a(t){return"function"==typeof t}function s(t){return"object"==typeof t&&null!==t}function c(t){V=t}function f(t){Q=t}function p(){return function(){t.nextTick(m)}}function l(){return function(){z(m)}}function d(){var t=0,e=new tt(m),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function h(){var t=new MessageChannel;return t.port1.onmessage=m,function(){t.port2.postMessage(0)}}function g(){return function(){setTimeout(m,1)}}function m(){for(var t=0;J>t;t+=2){var e=rt[t],n=rt[t+1];e(n),rt[t]=void 0,rt[t+1]=void 0}J=0}function v(){try{var t=n(13);return z=t.runOnLoop||t.runOnContext,l()}catch(e){return g()}}function y(){}function b(){return new TypeError("You cannot resolve a promise with itself")}function w(){return new TypeError("A promises callback cannot return that same promise.")}function _(t){try{return t.then}catch(e){return at.error=e,at}}function x(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function E(t,e,n){Q(function(t){var r=!1,o=x(n,e,function(n){r||(r=!0,e!==n?O(t,n):N(t,n))},function(e){r||(r=!0,A(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,A(t,o))},t)}function C(t,e){e._state===it?N(t,e._result):e._state===ut?A(t,e._result):M(e,void 0,function(e){O(t,e)},function(e){A(t,e)})}function T(t,e){if(e.constructor===t.constructor)C(t,e);else{var n=_(e);n===at?A(t,at.error):void 0===n?N(t,e):a(n)?E(t,e,n):N(t,e)}}function O(t,e){t===e?A(t,b()):u(e)?T(t,e):N(t,e)}function j(t){t._onerror&&t._onerror(t._result),L(t)}function N(t,e){t._state===ot&&(t._result=e,t._state=it,0!==t._subscribers.length&&Q(L,t))}function A(t,e){t._state===ot&&(t._state=ut,t._result=e,Q(j,t))}function M(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+it]=n,o[i+ut]=r,0===i&&t._state&&Q(L,t)}function L(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,u=0;u<e.length;u+=3)r=e[u],o=e[u+n],r?R(n,r,o,i):o(i);t._subscribers.length=0}}function S(){this.error=null}function I(t,e){try{return t(e)}catch(n){return st.error=n,st}}function R(t,e,n,r){var o,i,u,s,c=a(n);if(c){if(o=I(n,r),o===st?(s=!0,i=o.error,o=null):u=!0,e===o)return void A(e,w())}else o=r,u=!0;e._state!==ot||(c&&u?O(e,o):s?A(e,i):t===it?N(e,o):t===ut&&A(e,o))}function $(t,e){try{e(function(e){O(t,e)},function(e){A(t,e)})}catch(n){A(t,n)}}function k(t,e){var n=this;n._instanceConstructor=t,n.promise=new t(y),n._validateInput(e)?(n._input=e,n.length=e.length,n._remaining=e.length,n._init(),0===n.length?N(n.promise,n._result):(n.length=n.length||0,n._enumerate(),0===n._remaining&&N(n.promise,n._result))):A(n.promise,n._validationError())}function P(t){return new ct(this,t).promise}function H(t){function e(t){O(o,t)}function n(t){A(o,t)}var r=this,o=new r(y);if(!Z(t))return A(o,new TypeError("You must pass an array to race.")),o;for(var i=t.length,u=0;o._state===ot&&i>u;u++)M(r.resolve(t[u]),void 0,e,n);return o}function D(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(y);return O(n,t),n}function F(t){var e=this,n=new e(y);return A(n,t),n}function q(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function U(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function B(t){this._id=ht++,this._state=void 0,this._result=void 0,this._subscribers=[],y!==t&&(a(t)||q(),this instanceof B||U(),$(this,t))}function K(){var t;if("undefined"!=typeof o)t=o;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;n&&"[object Promise]"===Object.prototype.toString.call(n.resolve())&&!n.cast||(t.Promise=gt)}var G;G=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var z,V,Y,Z=G,J=0,Q=({}.toString,function(t,e){rt[J]=t,rt[J+1]=e,J+=2,2===J&&(V?V(m):Y())}),X="undefined"!=typeof window?window:void 0,W=X||{},tt=W.MutationObserver||W.WebKitMutationObserver,et="undefined"!=typeof t&&"[object process]"==={}.toString.call(t),nt="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,rt=new Array(1e3);Y=et?p():tt?d():nt?h():void 0===X?v():g();var ot=void 0,it=1,ut=2,at=new S,st=new S;k.prototype._validateInput=function(t){return Z(t)},k.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},k.prototype._init=function(){this._result=new Array(this.length)};var ct=k;k.prototype._enumerate=function(){for(var t=this,e=t.length,n=t.promise,r=t._input,o=0;n._state===ot&&e>o;o++)t._eachEntry(r[o],o)},k.prototype._eachEntry=function(t,e){var n=this,r=n._instanceConstructor;s(t)?t.constructor===r&&t._state!==ot?(t._onerror=null,n._settledAt(t._state,e,t._result)):n._willSettleAt(r.resolve(t),e):(n._remaining--,n._result[e]=t)},k.prototype._settledAt=function(t,e,n){var r=this,o=r.promise;o._state===ot&&(r._remaining--,t===ut?A(o,n):r._result[e]=n),0===r._remaining&&N(o,r._result)},k.prototype._willSettleAt=function(t,e){var n=this;M(t,void 0,function(t){n._settledAt(it,e,t)},function(t){n._settledAt(ut,e,t)})};var ft=P,pt=H,lt=D,dt=F,ht=0,gt=B;B.all=ft,B.race=pt,B.resolve=lt,B.reject=dt,B._setScheduler=c,B._setAsap=f,B._asap=Q,B.prototype={constructor:B,then:function(t,e){var n=this,r=n._state;if(r===it&&!t||r===ut&&!e)return this;var o=new this.constructor(y),i=n._result;if(r){var u=arguments[r-1];Q(function(){R(r,o,u,i)})}else M(n,o,t,e);return o},"catch":function(t){return this.then(null,t)}};var mt=K,vt={Promise:gt,polyfill:mt};n(6).amd?(r=function(){return vt}.call(e,n,e,i),!(void 0!==r&&(i.exports=r))):"undefined"!=typeof i&&i.exports?i.exports=vt:"undefined"!=typeof this&&(this.ES6Promise=vt),mt()}).call(this)}).call(e,n(5),function(){return this}(),n(8)(t))},function(t,e){function n(){c&&u&&(c=!1,u.length?s=u.concat(s):f=-1,s.length&&r())}function r(){if(!c){var t=setTimeout(n);c=!0;for(var e=s.length;e;){for(u=s,s=[];++f<e;)u&&u[f].run();f=-1,e=s.length}u=null,c=!1,clearTimeout(t)}}function o(t,e){this.fun=t,this.array=e}function i(){}var u,a=t.exports={},s=[],c=!1,f=-1;a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new o(t,e)),1!==s.length||c||setTimeout(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=i,a.addListener=i,a.once=i,a.off=i,a.removeListener=i,a.removeAllListeners=i,a.emit=i,a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},function(t,e){(function(e){t.exports=e}).call(e,{})},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e,n){"use strict";var r=n(4).Promise,o=n(12);t.exports=o(r)},function(t,e,n){"use strict";function r(t){t=o.toHash(t),o.assign(this,u),o.assign(this,t),this.$parseMethod(),this.$parseUrl(),this.$parseHeaders(),this.$parseData()}var o=n(1),i=["timeout","withCredentials"],u={timeout:1e4,withCredentials:!1};r.prototype.$parseMethod=function(){var t=this.method;"string"==typeof t&&t?this.method=t.toUpperCase():this.method="GET"},r.prototype.$parseUrl=function(){if("string"!=typeof this.url||!this.url)throw new Error("an URL string is required");this.url=this.url+this.$makeParams()},r.prototype.$makeParams=function(){var t=o.formEncode(this.params);return t&&(t="?"+t),t},r.prototype.$parseHeaders=function(){if(this.headers=o.toHash(this.headers),(null==this.contentType||this.contentType)&&!this.headers["Content-Type"]){var t=o.types[this.type]||this.$guessContentType();t&&(this.headers["Content-Type"]=t)}},r.prototype.$guessContentType=function(){return this.hasOwnProperty("data")?"string"==typeof this.data?o.types.plain:o.isObject(this.data)?o.types.json:void 0:void 0},r.prototype.$parseData=function(){if((null==this.processData||this.processData)&&this.hasOwnProperty("data")){if(this.$safeMethod())return void(this.data=null);if("string"!=typeof this.data){var t=this.headers["Content-Type"];return o.typeRegs.json.test(t)?void(this.data=JSON.stringify(this.data)):o.typeRegs.form.test(t)?void(this.data=o.formEncode(this.data)):void 0}}},r.prototype.$safeMethod=function(){return"GET"===this.method||"HEAD"===this.method||"OPTIONS"===this.method},r.prototype.$simpleOptions=function(){var t={};return o.forOwn(this,function(e,n){~i.indexOf(n)&&(t[n]=e)}),t},t.exports=r},function(t,e,n){"use strict";function r(t){var e,n,r,o={};return t.split("&").forEach(function(t){e=t.split("="),n=decodeURIComponent(e[0]),r=decodeURIComponent(e[1]),o[n]=r}),o}function o(t){var e=t.responseText,n=t.getResponseHeader("Content-Type");return i.typeRegs.json.test(n)?JSON.parse(e):i.typeRegs.form.test(n)&&"string"==typeof e?r(e):e}var i=n(1);t.exports=o},function(t,e,n){"use strict";var r=n(10),o=n(1),i=n(11);t.exports=function(t){function e(t){return t.status>=200&&t.status<=299}function n(t,e){if(204===t.status)return e.forEach(function(e){e(null,t)}),null;var n=i(t);return e.forEach(function(e){var r=e(n,t);void 0!==r&&(n=r)}),n}function u(i){return new t(function(t,a){var s=new XMLHttpRequest;o.isObject(i)||(i={}),o.isObject(i.headers)||(i.headers={}),u.requestInterceptors.forEach(function(t){var e=t(i);o.isObject(e)&&(i=e)}),i=new r(i),s.open(i.method,i.url,!0,i.username,i.password),o.forOwn(i.headers,function(t,e){s.setRequestHeader(e,t)}),o.assign(s,i.$simpleOptions()),s.onerror=s.onabort=s.ontimeout=function(){a(n(s,u.errorInterceptors))},s.onload=function(){e(s)?t(n(s,u.responseInterceptors)):a(n(s,u.errorInterceptors))},s.send(i.data)})}var a="function"==typeof t&&"function"==typeof t.prototype.then&&"function"==typeof t.prototype["catch"];if(!a)throw new Error("the argument must be a promise constructor");return u.requestInterceptors=[],u.responseInterceptors=[],u.errorInterceptors=[],u.interceptRequest=function(t){if("function"!=typeof t)throw new Error("An interceptor must be a function, got: "+t);1!==t.length&&console.warn("Request interceptor's arity is expected to be 1, got "+t.length+":",t),u.requestInterceptors.push(t)},u.interceptResponse=function(t){if("function"!=typeof t)throw new Error("An interceptor must be a function, got: "+t);u.responseInterceptors.push(t)},u.interceptError=function(t){if("function"!=typeof t)throw new Error("An interceptor must be a function, got: "+t);u.errorInterceptors.push(t)},u}},function(t,e){}]);