<<<<<<< HEAD
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=window,e$3=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$4=new WeakMap;let o$3 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$3&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$4.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$4.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new o$3("string"==typeof t?t:t+"",void 0,s$3),S$1=(s,n)=>{e$3?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$1.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$2=window,r$1=e$2.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$2.reactiveElementPolyfillSupport,n$3={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$3,reflect:!1,hasChanged:a$1};let d$1 = class d extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$3).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$3;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};d$1.finalized=!0,d$1.elementProperties=new Map,d$1.elementStyles=[],d$1.shadowRootOptions={mode:"open"},null==o$2||o$2({ReactiveElement:d$1}),(null!==(s$2=e$2.reactiveElementVersions)&&void 0!==s$2?s$2:e$2.reactiveElementVersions=[]).push("1.4.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;const i$1=window,s$1=i$1.trustedTypes,e$1=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1=`lit$${(Math.random()+"").slice(9)}$`,n$2="?"+o$1,l$1=`<${n$2}>`,h=document,r=(t="")=>h.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,c=t=>u(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a=/-->/g,f=/>/g,_=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),m=/'/g,p=/"/g,$=/^(?:script|style|textarea|title)$/i,g=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),y=g(1),x=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),T=new WeakMap,A=h.createTreeWalker(h,129,null,!1),E=(t,i)=>{const s=t.length-1,n=[];let h,r=2===i?"<svg>":"",d=v;for(let i=0;i<s;i++){const s=t[i];let e,u,c=-1,g=0;for(;g<s.length&&(d.lastIndex=g,u=d.exec(s),null!==u);)g=d.lastIndex,d===v?"!--"===u[1]?d=a:void 0!==u[1]?d=f:void 0!==u[2]?($.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=_):void 0!==u[3]&&(d=_):d===_?">"===u[0]?(d=null!=h?h:v,c=-1):void 0===u[1]?c=-2:(c=d.lastIndex-u[2].length,e=u[1],d=void 0===u[3]?_:'"'===u[3]?p:m):d===p||d===m?d=_:d===a||d===f?d=v:(d=_,h=void 0);const y=d===_&&t[i+1].startsWith("/>")?" ":"";r+=d===v?s+l$1:c>=0?(n.push(e),s.slice(0,c)+"$lit$"+s.slice(c)+o$1+y):s+o$1+(-2===c?(n.push(void 0),i):y);}const u=r+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==e$1?e$1.createHTML(u):u,n]};class C{constructor({strings:t,_$litType$:i},e){let l;this.parts=[];let h=0,d=0;const u=t.length-1,c=this.parts,[v,a]=E(t,i);if(this.el=C.createElement(v,e),A.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(o$1)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(o$1),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:h,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?k:"@"===i[1]?H:S});}else c.push({type:6,index:h});}for(const i of t)l.removeAttribute(i);}if($.test(l.tagName)){const t=l.textContent.split(o$1),i=t.length-1;if(i>0){l.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)l.append(t[s],r()),A.nextNode(),c.push({type:2,index:++h});l.append(t[i],r());}}}else if(8===l.nodeType)if(l.data===n$2)c.push({type:2,index:h});else {let t=-1;for(;-1!==(t=l.data.indexOf(o$1,t+1));)c.push({type:7,index:h}),t+=o$1.length-1;}h++;}}static createElement(t,i){const s=h.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===x)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=P(t,r._$AS(t,i.values),r,e)),i}class V{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:h).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),l=0,r=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new I(n,this,t)),this.u.push(i),d=e[++r];}l!==(null==d?void 0:d.index)&&(n=A.nextNode(),l++);}return o}p(t){let i=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cm=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),d(t)?t===b||null==t||""===t?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==x&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):c(t)?this.k(t):this.g(t);}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}g(t){this._$AH!==b&&d(this._$AH)?this._$AA.nextSibling.data=t:this.T(h.createTextNode(t)),this._$AH=t;}$(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=C.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.p(s);else {const t=new V(o,this),i=t.v(this.options);t.p(s),this.T(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new C(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.O(r()),this.O(r()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===x&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===b?t=b:t!==b&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===b?void 0:t;}}const R=s$1?s$1.emptyScript:"";class k extends S{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==b?this.element.setAttribute(this.name,R):this.element.removeAttribute(this.name);}}class H extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:b)===x)return;const e=this._$AH,o=t===b&&e!==b||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==b&&(e===b||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class I{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=i$1.litHtmlPolyfillSupport;null==z||z(C,N),(null!==(t=i$1.litHtmlVersions)&&void 0!==t?t:i$1.litHtmlVersions=[]).push("2.4.0");const Z=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(r(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o;class s extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Z(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return x}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$1=globalThis.litElementPolyfillSupport;null==n$1||n$1({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i(e,n)}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

async function hass_base_el() {
    await Promise.race([
        customElements.whenDefined("home-assistant"),
        customElements.whenDefined("hc-main"),
    ]);
    const element = customElements.get("home-assistant")
        ? "home-assistant"
        : "hc-main";
    while (!document.querySelector(element))
        await new Promise((r) => window.setTimeout(r, 100));
    return document.querySelector(element);
}
async function hass() {
    const base = await hass_base_el();
    while (!base.hass)
        await new Promise((r) => window.setTimeout(r, 100));
    return base.hass;
}

const ID_STORAGE_KEY = "browser_mod-browser-id";
function BrowserID() {
    if (document.querySelector("hc-main"))
        return "CAST";
    if (localStorage[ID_STORAGE_KEY])
        return localStorage[ID_STORAGE_KEY];
    return "";
}

window.cardMod_template_cache =
    window.cardMod_template_cache || {};
const cachedTemplates = window
    .cardMod_template_cache;
function template_updated(key, result) {
    const cache = cachedTemplates[key];
    if (!cache) {
        return;
    }
    cache.value = result.result;
    cache.callbacks.forEach((f) => f(result.result));
}
function hasTemplate(str) {
    return String(str).includes("{%") || String(str).includes("{{");
}
async function bind_template(callback, template, variables) {
    const hs = await hass();
    const connection = hs.connection;
    const cacheKey = JSON.stringify([template, variables]);
    let cache = cachedTemplates[cacheKey];
    if (!cache) {
        unbind_template(callback);
        callback("");
        variables = Object.assign({ user: hs.user.name, browser: BrowserID(), hash: location.hash.substr(1) || "" }, variables);
        cachedTemplates[cacheKey] = cache = {
            template,
            variables,
            value: "",
            callbacks: new Set([callback]),
            unsubscribe: connection.subscribeMessage((result) => template_updated(cacheKey, result), {
                type: "render_template",
                template,
                variables,
            }),
        };
    }
    else {
        if (!cache.callbacks.has(callback))
            unbind_template(callback);
        callback(cache.value);
        cache.callbacks.add(callback);
    }
}
async function unbind_template(callback) {
    let unsubscriber;
    for (const [key, cache] of Object.entries(cachedTemplates)) {
        if (cache.callbacks.has(callback)) {
            cache.callbacks.delete(callback);
            if (cache.callbacks.size == 0) {
                unsubscriber = cache.unsubscribe;
                delete cachedTemplates[key];
            }
            break;
        }
    }
    if (unsubscriber)
        await (await unsubscriber)();
}

var name = "card-mod";
var version = "3.2.3";
var description = "";
var scripts = {
	build: "rollup -c",
	watch: "rollup -c --watch"
};
var keywords = [
];
var author = "Thomas Lovén";
var license = "MIT";
var devDependencies = {
	"rollup-plugin-terser": "^7.0.2"
};
var dependencies = {
	"@babel/core": "^7.20.2",
	"@rollup/plugin-babel": "^6.0.2",
	"@rollup/plugin-json": "^5.0.1",
	"@rollup/plugin-node-resolve": "^15.0.1",
	lit: "^2.4.1",
	rollup: "^3.4.0",
	"rollup-plugin-typescript2": "^0.34.1",
	typescript: "^4.9.3"
};
var pjson = {
	name: name,
	"private": true,
	version: version,
	description: description,
	scripts: scripts,
	keywords: keywords,
	author: author,
	license: license,
	devDependencies: devDependencies,
	dependencies: dependencies
};

const _load_yaml2json = async () => {
    if (customElements.get("developer-tools-event"))
        return;
    await customElements.whenDefined("partial-panel-resolver");
    const ppr = document.createElement("partial-panel-resolver");
    ppr.hass = {
        panels: [
            {
                url_path: "tmp",
                component_name: "developer-tools",
            },
        ],
    };
    ppr._updateRoutes();
    await ppr.routerOptions.routes.tmp.load();
    await customElements.whenDefined("developer-tools-router");
    const dtr = document.createElement("developer-tools-router");
    await dtr.routerOptions.routes.event.load();
};
const yaml2json = async (yaml) => {
    await _load_yaml2json();
    const el = document.createElement("ha-yaml-editor");
    el._onChange(new CustomEvent("yaml", { detail: { value: yaml } }));
    return el.value;
};

async function applyToElement(el, type, styles = "", variables = {}, entity_ids = null, // deprecated
shadow = true) {
    var _a;
    if (!el)
        return;
    if ((_a = el.localName) === null || _a === void 0 ? void 0 : _a.includes("-"))
        await customElements.whenDefined(el.localName);
    if (el.updateComplete)
        await el.updateComplete;
    if (el._cardMod === undefined) {
        el._cardMod = [];
    }
    let cardMod;
    for (const cm of el._cardMod) {
        if (cm.type === type) {
            cardMod = cm;
            break;
        }
    }
    if (!cardMod) {
        cardMod = document.createElement("card-mod");
        cardMod.type = type;
        el._cardMod.push(cardMod);
    }
    queueMicrotask(async () => {
        const target = el.modElement
            ? el.modElement
            : shadow
                ? el.shadowRoot || el
                : el;
        if (!target.contains(cardMod))
            target.appendChild(cardMod);
        cardMod.variables = variables;
        cardMod.styles = styles;
    });
    return cardMod;
}
async function get_theme(root) {
    var _a;
    if (!root.type)
        return null;
    const el = root.parentElement ? root.parentElement : root;
    const theme = window
        .getComputedStyle(el)
        .getPropertyValue("--card-mod-theme");
    const hs = await hass();
    if (!hs)
        return {};
    const themes = (_a = hs === null || hs === void 0 ? void 0 : hs.themes.themes) !== null && _a !== void 0 ? _a : {};
    if (!themes[theme])
        return {};
    if (themes[theme][`card-mod-${root.type}-yaml`]) {
        return yaml2json(themes[theme][`card-mod-${root.type}-yaml`]);
    }
    else if (themes[theme][`card-mod-${root.type}`]) {
        return { ".": themes[theme][`card-mod-${root.type}`] };
    }
    else {
        return {};
    }
}
function merge_deep(target, source) {
    const isObject = (i) => {
        return i && typeof i === "object" && !Array.isArray(i);
    };
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key])
                    Object.assign(target, { [key]: {} });
                if (typeof target[key] === "string")
                    target[key] = { ".": target[key] };
                merge_deep(target[key], source[key]);
            }
            else {
                if (target[key])
                    target[key] = source[key] + target[key];
                else
                    target[key] = source[key];
            }
        }
    }
    return target;
}
function compare_deep(a, b) {
    if (a === b)
        return true;
    if (typeof a !== typeof b)
        return false;
    if (!(a instanceof Object && b instanceof Object))
        return false;
    for (const x in a) {
        if (!a.hasOwnProperty(x))
            continue;
        if (!b.hasOwnProperty(x))
            return false;
        if (a[x] === b[x])
            continue;
        if (typeof a[x] !== "object")
            return false;
        if (!compare_deep(a[x], b[x]))
            return false;
    }
    for (const x in b) {
        if (!b.hasOwnProperty(x))
            continue;
        if (!a.hasOwnProperty(x))
            return false;
    }
    return true;
}
function findConfig(node) {
    if (node.config)
        return node.config;
    if (node._config)
        return node._config;
    if (node.host)
        return findConfig(node.host);
    if (node.parentElement)
        return findConfig(node.parentElement);
    if (node.parentNode)
        return findConfig(node.parentNode);
    return null;
}
function joinSet(dst, src) {
    for (const s of src)
        dst.add(s);
}
async function findParentCardMod(node, step = 0) {
    let cardMods = new Set();
    if (step == 10)
        return cardMods;
    if (!node)
        return cardMods;
    if (node._cardMod) {
        for (const cm of node._cardMod) {
            if (cm.styles)
                cardMods.add(cm);
        }
    }
    if (node.updateComplete)
        await node.updateComplete;
    if (node.parentElement)
        joinSet(cardMods, await findParentCardMod(node.parentElement, step + 1));
    else if (node.parentNode)
        joinSet(cardMods, await findParentCardMod(node.parentNode, step + 1));
    if (node.host)
        joinSet(cardMods, await findParentCardMod(node.host, step + 1));
    return cardMods;
}
function parentElement(el) {
    if (!el)
        return undefined;
    const node = el.parentElement || el.parentNode;
    if (!node)
        return undefined;
    return node.host ? node.host : node;
}
function getResources() {
    var _a, _b, _c;
    const scriptElements = document.querySelectorAll("script");
    const retval = [];
    for (const script of scriptElements) {
        if ((_b = (_a = script === null || script === void 0 ? void 0 : script.innerText) === null || _a === void 0 ? void 0 : _a.trim()) === null || _b === void 0 ? void 0 : _b.startsWith("import(")) {
            const imports = (_c = script.innerText.split("\n")) === null || _c === void 0 ? void 0 : _c.map((e) => e.trim());
            for (const imp of imports) {
                retval.push(imp.replace(/^import\(\"/, "").replace(/\"\);/, ""));
            }
        }
    }
    return retval;
}

const TIMEOUT_ERROR = "SELECTTREE-TIMEOUT";
async function await_element(el, hard = false) {
    var _a;
    if ((_a = el.localName) === null || _a === void 0 ? void 0 : _a.includes("-"))
        await customElements.whenDefined(el.localName);
    if (el.updateComplete)
        await el.updateComplete;
    if (hard) {
        if (el.pageRendered)
            await el.pageRendered;
        if (el._panelState) {
            let rounds = 0;
            while (el._panelState !== "loaded" && rounds++ < 5)
                await new Promise((r) => setTimeout(r, 100));
        }
    }
}
async function _selectTree(root, path, all = false) {
    let el = [root];
    if (typeof path === "string") {
        path = path.split(/(\$| )/);
    }
    while (path[path.length - 1] === "")
        path.pop();
    for (const [i, p] of path.entries()) {
        const e = el[0];
        if (!e)
            return null;
        if (!p.trim().length)
            continue;
        await_element(e);
        el = p === "$" ? [e.shadowRoot] : e.querySelectorAll(p);
    }
    return all ? el : el[0];
}
async function selectTree(root, path, all = false, timeout = 10000) {
    return Promise.race([
        _selectTree(root, path, all),
        new Promise((_, reject) => setTimeout(() => reject(new Error(TIMEOUT_ERROR)), timeout)),
    ]).catch((err) => {
        if (!err.message || err.message !== TIMEOUT_ERROR)
            throw err;
        return null;
    });
}

class CardMod extends s {
    static get applyToElement() {
        return applyToElement;
    }
    constructor() {
        super();
        this._rendered_styles = "";
        this._styleChildren = new Set();
        this._observer = new MutationObserver((mutations) => {
            for (const m of mutations) {
                if (m.target.localName === "card-mod")
                    return;
                if (m.addedNodes.length)
                    m.addedNodes.forEach((n) => {
                        if (n.localName !== "card-mod")
                            ;
                    });
                if (m.removedNodes.length)
                    m.removedNodes.forEach((n) => {
                        if (n.localName !== "card-mod")
                            ;
                    });
            }
            if (stop)
                return;
            this.refresh();
        });
        document.addEventListener("cm_update", () => {
            this.refresh();
        });
    }
    connectedCallback() {
        super.connectedCallback();
        this._connect();
        this.setAttribute("slot", "none");
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._disconnect();
    }
    set styles(stl) {
        if (compare_deep(stl, this._input_styles))
            return;
        this._input_styles = stl;
        (async () => {
            // Always work with yaml styles internally
            let styles = JSON.parse(JSON.stringify(stl || {}));
            if (typeof styles === "string")
                styles = { ".": styles };
            // Merge card_mod styles with theme styles
            const theme_styles = await get_theme(this);
            merge_deep(styles, theme_styles);
            this._fixed_styles = styles;
            this._connect();
        })();
    }
    get styles() {
        return this._styles;
    }
    refresh() {
        this._connect();
    }
    async _styleChildEl(element, value = undefined) {
        if (value === undefined) {
            // Find the style for the element
            const styles = this._fixed_styles;
            for (const [key, val] of Object.entries(styles)) {
                if (key === ".")
                    continue;
                const elements = await selectTree(this.parentElement || this.parentNode, key, true);
                elements.forEach((el) => {
                    if (el === element) {
                        value = val;
                    }
                });
                if (value !== undefined)
                    break;
            }
            if (value === undefined)
                return;
        }
        if (!element)
            return;
        const child = await applyToElement(element, `${this.type}-child`, value, this.variables, null, false);
        child.refresh;
        return child;
    }
    async _connect() {
        var _a;
        const styles = (_a = this._fixed_styles) !== null && _a !== void 0 ? _a : {};
        const styleChildren = new Set();
        let thisStyle = "";
        let hasChildren = false;
        const parent = this.parentElement || this.parentNode;
        for (const [key, value] of Object.entries(styles)) {
            if (key === ".") {
                thisStyle = value;
            }
            else {
                hasChildren = true;
                const elements = await selectTree(parent, key, true);
                if (!elements)
                    continue;
                for (const el of elements) {
                    const ch = await this._styleChildEl(el, value);
                    if (ch)
                        styleChildren.add(ch);
                }
            }
        }
        // Prune old child elements
        for (const oldCh of this._styleChildren) {
            if (!styleChildren.has(oldCh)) {
                if (oldCh)
                    oldCh.styles = "";
            }
        }
        this._styleChildren = styleChildren;
        if (this._styles === thisStyle)
            return;
        this._styles = thisStyle;
        if (this._styles && hasTemplate(this._styles)) {
            this._renderer = this._renderer || this._style_rendered.bind(this);
            bind_template(this._renderer, this._styles, this.variables);
        }
        else {
            this._style_rendered(this._styles || "");
        }
        if (hasChildren) {
            this._observer.disconnect();
            this._observer.observe(parentElement(this), { childList: true });
        }
    }
    async _disconnect() {
        this._observer.disconnect();
        this._styles = "";
        await unbind_template(this._renderer);
    }
    _style_rendered(result) {
        if (this._rendered_styles !== result)
            this._rendered_styles = result;
        this.dispatchEvent(new Event("card-mod-update"));
    }
    createRenderRoot() {
        return this;
    }
    render() {
        return y `
      <style>
        ${this._rendered_styles}
      </style>
    `;
    }
}
__decorate([
    e()
], CardMod.prototype, "_rendered_styles", void 0);
(async () => {
    // Wait for scoped customElements registry to be set up
    // otherwise the customElements registry card-mod is defined in
    // may get overwritten by the polyfill if card-mod is loaded as a module
    while (customElements.get("home-assistant") === undefined)
        await new Promise((resolve) => window.setTimeout(resolve, 100));
    if (!customElements.get("card-mod")) {
        customElements.define("card-mod", CardMod);
        console.info(`%cCARD-MOD ${pjson.version} IS INSTALLED`, "color: green; font-weight: bold");
    }
})();

customElements.whenDefined("ha-card").then(() => {
    const HaCard = customElements.get("ha-card");
    if (HaCard.prototype.cardmod_patched)
        return;
    HaCard.prototype.cardmod_patched = true;
    const _firstUpdated = HaCard.prototype.firstUpdated;
    HaCard.prototype.firstUpdated = function (...args) {
        var _a, _b;
        _firstUpdated === null || _firstUpdated === void 0 ? void 0 : _firstUpdated.bind(this)(...args);
        const config = findConfig(this);
        if ((_a = config === null || config === void 0 ? void 0 : config.card_mod) === null || _a === void 0 ? void 0 : _a.class)
            this.classList.add(config.card_mod.class);
        if (config === null || config === void 0 ? void 0 : config.type)
            this.classList.add(`type-${config.type.replace(":", "-")}`);
        applyToElement(this, "card", ((_b = config === null || config === void 0 ? void 0 : config.card_mod) === null || _b === void 0 ? void 0 : _b.style) || (config === null || config === void 0 ? void 0 : config.style) || "", { config }, null, false).then((cardMod) => {
            var _a;
            const pn = (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.host;
            if (!pn)
                return;
            if (pn.setConfig && !pn.setConfig.cm_patched) {
                // Patch the setConfig function to get live updates in GUI editor
                const _setConfig = pn.setConfig;
                pn.setConfig = function (config, ...rest) {
                    var _a;
                    _setConfig.bind(this)(config, ...rest);
                    cardMod.variables = { config };
                    cardMod.styles = ((_a = config.card_mod) === null || _a === void 0 ? void 0 : _a.style) || {};
                };
                pn.setConfig.cm_patched = true;
            }
            if (pn.update && !pn.update.cm_patched) {
                const _update = pn.update;
                pn.update = function (...args) {
                    _update.bind(this)(...args);
                    if (this.updateComplete)
                        this.updateComplete.then(() => {
                            cardMod.refresh();
                        });
                    else
                        cardMod.refresh();
                };
                pn.update.cm_patched = true;
            }
        });
    };
});

customElements.whenDefined("hui-entities-card").then(() => {
    const EntitiesCard = customElements.get("hui-entities-card");
    if (EntitiesCard.prototype.cardmod_patched)
        return;
    EntitiesCard.prototype.cardmod_patched = true;
    const _renderEntity = EntitiesCard.prototype.renderEntity;
    EntitiesCard.prototype.renderEntity = function (config, ...rest) {
        var _a;
        const retval = _renderEntity.bind(this)(config, ...rest);
        if (!retval || !retval.values)
            return retval;
        const row = retval.values[0];
        if (!row)
            return retval;
        if ((config === null || config === void 0 ? void 0 : config.type) === "custom:mod-card")
            return retval;
        if ((_a = config === null || config === void 0 ? void 0 : config.card_mod) === null || _a === void 0 ? void 0 : _a.class)
            row.classList.add(config.card_mod.class);
        if (config === null || config === void 0 ? void 0 : config.type)
            row.classList.add(`type-${config.type.replace(":", "-")}`);
        const apply = async () => {
            var _a;
            return applyToElement(row, "row", ((_a = config === null || config === void 0 ? void 0 : config.card_mod) === null || _a === void 0 ? void 0 : _a.style) || (config === null || config === void 0 ? void 0 : config.style) || "", { config });
        };
        (async () => {
            const cardMod = await apply();
            if (row.update && !row.update.cm_patched) {
                const _update = row.update;
                row.update = function (...args) {
                    _update.bind(this)(...args);
                    if (this.updateComplete)
                        this.updateComplete.then(() => {
                            cardMod.refresh();
                        });
                    else
                        cardMod.refresh();
                };
            }
        })();
        this.updateComplete.then(() => apply());
        if (retval.values[0])
            retval.values[0].addEventListener("ll-rebuild", apply);
        return retval;
    };
});

const ENTITY_STYLES = `
div {
  width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.name {
  min-height: var(--paper-font-body1_-_line-height, 20px);
}
state-badge {
  margin: 8px 0;
}
`;
customElements.whenDefined("hui-glance-card").then(() => {
    const GlanceCard = customElements.get("hui-glance-card");
    if (GlanceCard.prototype.cardmod_patched)
        return;
    GlanceCard.prototype.cardmod_patched = true;
    const _updated = GlanceCard.prototype.updated;
    GlanceCard.prototype.updated = function (...args) {
        var _a, _b;
        _updated === null || _updated === void 0 ? void 0 : _updated.bind(this)(...args);
        for (const e of this.shadowRoot.querySelectorAll("ha-card div.entity")) {
            if (!e.cardmod_patched) {
                e.cardmod_patched = true;
                // Move everything into a shadowRoot so it can be styled more easily
                const root = e.attachShadow({ mode: "open" });
                while (e.firstChild)
                    root.append(e.firstChild);
                // Add the default styles to the shadowRoot too
                const styletag = document.createElement("style");
                root.appendChild(styletag);
                styletag.innerHTML = ENTITY_STYLES;
            }
            const config = e.config || e.entityConf;
            if ((_a = config === null || config === void 0 ? void 0 : config.card_mod) === null || _a === void 0 ? void 0 : _a.class)
                e.classList.add(config.card_mod.class);
            applyToElement(e, "glance", ((_b = config === null || config === void 0 ? void 0 : config.card_mod) === null || _b === void 0 ? void 0 : _b.style) || (config === null || config === void 0 ? void 0 : config.style) || "", { config });
        }
    };
});

customElements.whenDefined("hui-state-label-badge").then(() => {
    const HuiStateLabelBadge = customElements.get("hui-state-label-badge");
    if (HuiStateLabelBadge.prototype.cardmod_patched)
        return;
    HuiStateLabelBadge.prototype.cardmod_patched = true;
    const _firstUpdated = HuiStateLabelBadge.prototype.firstUpdated;
    HuiStateLabelBadge.prototype.firstUpdated = function (...args) {
        var _a, _b;
        _firstUpdated === null || _firstUpdated === void 0 ? void 0 : _firstUpdated.bind(this)(...args);
        const config = this._config;
        if ((_a = config === null || config === void 0 ? void 0 : config.card_mod) === null || _a === void 0 ? void 0 : _a.class)
            this.classList.add(config.card_mod.class);
        applyToElement(this, "badge", ((_b = config === null || config === void 0 ? void 0 : config.card_mod) === null || _b === void 0 ? void 0 : _b.style) || (config === null || config === void 0 ? void 0 : config.style) || "", {
            config,
        });
    };
});

customElements.whenDefined("hui-view").then(() => {
    const HuiView = customElements.get("hui-view");
    if (HuiView.prototype.cardmod_patched)
        return;
    HuiView.prototype.cardmod_patched = true;
    const _firstUpdated = HuiView.prototype.updated;
    HuiView.prototype.updated = function (...args) {
        _firstUpdated === null || _firstUpdated === void 0 ? void 0 : _firstUpdated.bind(this)(...args);
        applyToElement(this, "view", "", {}, null, false);
    };
});

customElements.whenDefined("hui-root").then(() => {
    const HuiRoot = customElements.get("hui-root");
    if (HuiRoot.prototype.cardmod_patched)
        return;
    HuiRoot.prototype.cardmod_patched = true;
    const _firstUpdated = HuiRoot.prototype.firstUpdated;
    HuiRoot.prototype.firstUpdated = async function (...args) {
        _firstUpdated === null || _firstUpdated === void 0 ? void 0 : _firstUpdated.bind(this)(...args);
        applyToElement(this, "root");
    };
    selectTree(document, "home-assistant$home-assistant-main$partial-panel-resolver ha-panel-lovelace$hui-root", false).then((root) => {
        root === null || root === void 0 ? void 0 : root.firstUpdated();
    });
});

customElements.whenDefined("ha-more-info-dialog").then(() => {
    const HaMoreInfoDialog = customElements.get("ha-more-info-dialog");
    if (HaMoreInfoDialog.prototype.cardmod_patched)
        return;
    HaMoreInfoDialog.prototype.cardmod_patched = true;
    const _showDialog = HaMoreInfoDialog.prototype.showDialog;
    HaMoreInfoDialog.prototype.showDialog = function (params, ...rest) {
        _showDialog === null || _showDialog === void 0 ? void 0 : _showDialog.bind(this)(params, ...rest);
        this.requestUpdate();
        this.updateComplete.then(async () => {
            const haDialog = this.shadowRoot.querySelector("ha-dialog");
            if (haDialog) {
                applyToElement(haDialog, "more-info", "", { config: params }, null, false);
            }
        });
    };
    selectTree(document, "home-assistant$ha-more-info-dialog", false).then((root) => {
        if (root) {
            root.showDialog = HaMoreInfoDialog.prototype.showDialog.bind(root);
            root.showDialog({ entityId: root.entityId });
        }
    });
});

customElements.whenDefined("ha-sidebar").then(() => {
    const HaSidebar = customElements.get("ha-sidebar");
    if (HaSidebar.prototype.cardmod_patched)
        return;
    HaSidebar.prototype.cardmod_patched = true;
    const _firstUpdated = HaSidebar.prototype.firstUpdated;
    HaSidebar.prototype.firstUpdated = async function (...args) {
        _firstUpdated === null || _firstUpdated === void 0 ? void 0 : _firstUpdated.bind(this)(...args);
        applyToElement(this, "sidebar");
    };
    selectTree(document, "home-assistant$home-assistant-main$ ha-sidebar", false).then((root) => {
        root === null || root === void 0 ? void 0 : root.firstUpdated();
    });
});

customElements.whenDefined("hui-card-element-editor").then(() => {
    const HuiCardElementEditor = customElements.get("hui-card-element-editor");
    if (HuiCardElementEditor.prototype.cardmod_patched)
        return;
    HuiCardElementEditor.prototype.cardmod_patched = true;
    const _getConfigElement = HuiCardElementEditor.prototype.getConfigElement;
    HuiCardElementEditor.prototype.getConfigElement = async function () {
        const retval = await _getConfigElement.bind(this)();
        // Catch and patch the configElement
        if (retval) {
            const _setConfig = retval.setConfig;
            retval.setConfig = function (config, ...rest) {
                var _a, _b;
                // Strip card_mod from the data that's sent to the config element
                // and put it back after the config has been checked
                const newConfig = JSON.parse(JSON.stringify(config));
                this._cardModData = {
                    card: newConfig.card_mod,
                    entities: [],
                };
                if (newConfig.entities) {
                    for (const [i, e] of (_a = newConfig.entities) === null || _a === void 0 ? void 0 : _a.entries()) {
                        this._cardModData.entities[i] = e.card_mod;
                        delete e.card_mod;
                    }
                }
                delete newConfig.card_mod;
                _setConfig.bind(this)(newConfig, ...rest);
                if (newConfig.entities) {
                    for (const [i, e] of (_b = newConfig.entities) === null || _b === void 0 ? void 0 : _b.entries()) {
                        if (this._cardModData.entities[i])
                            e.card_mod = this._cardModData.entities[i];
                    }
                }
            };
        }
        return retval;
    };
    const _handleUIConfigChanged = HuiCardElementEditor.prototype._handleUIConfigChanged;
    HuiCardElementEditor.prototype._handleUIConfigChanged = function (ev, ...rest) {
        if (this._configElement && this._configElement._cardModData) {
            const cardMod = this._configElement._cardModData;
            if (cardMod.card)
                ev.detail.config.card_mod = cardMod.card;
        }
        _handleUIConfigChanged.bind(this)(ev, ...rest);
    };
});
customElements.whenDefined("hui-dialog-edit-card").then(() => {
    const HuiDialogEditCard = customElements.get("hui-dialog-edit-card");
    if (HuiDialogEditCard.prototype.cardmod_patched)
        return;
    HuiDialogEditCard.prototype.cardmod_patched = true;
    const _updated = HuiDialogEditCard.prototype.updated;
    HuiDialogEditCard.prototype.updated = function (...args) {
        _updated === null || _updated === void 0 ? void 0 : _updated.bind(this)(...args);
        this.updateComplete.then(async () => {
            var _a, _b, _c;
            if (!this._cardModIcon) {
                this._cardModIcon = document.createElement("ha-icon");
                this._cardModIcon.icon = "mdi:brush";
            }
            const button = this.shadowRoot.querySelector("mwc-button[slot=secondaryAction]");
            if (!button)
                return;
            button.appendChild(this._cardModIcon);
            if (((_a = this._cardConfig) === null || _a === void 0 ? void 0 : _a.card_mod) ||
                ((_c = (_b = this._cardConfig) === null || _b === void 0 ? void 0 : _b.entities) === null || _c === void 0 ? void 0 : _c.some((e) => e.card_mod))) {
                this._cardModIcon.style.visibility = "visible";
            }
            else {
                this._cardModIcon.style.visibility = "hidden";
            }
        });
    };
});

customElements.whenDefined("hui-picture-elements-card").then(() => {
    const HuiPictureElementsCard = customElements.get("hui-picture-elements-card");
    if (HuiPictureElementsCard.prototype.cardmod_patched)
        return;
    HuiPictureElementsCard.prototype.cardmod_patched = true;
    const _setConfig = HuiPictureElementsCard.prototype.setConfig;
    HuiPictureElementsCard.prototype.setConfig = function (...args) {
        var _a, _b;
        _setConfig === null || _setConfig === void 0 ? void 0 : _setConfig.bind(this)(...args);
        for (const [i, el] of this._elements.entries()) {
            const config = this._config.elements[i];
            if ((_a = config === null || config === void 0 ? void 0 : config.card_mod) === null || _a === void 0 ? void 0 : _a.class)
                el.classList.add(config.card_mod.class);
            if (config === null || config === void 0 ? void 0 : config.type)
                el.classList.add(`type-${config.type.replace(":", "-")}`);
            applyToElement(el, "element", (_b = config === null || config === void 0 ? void 0 : config.card_mod) === null || _b === void 0 ? void 0 : _b.style, { config });
        }
    };
});

const updateIcon = (el) => {
    const styles = window.getComputedStyle(el);
    const filter = styles.getPropertyValue("--card-mod-icon-dim");
    if (filter === "none")
        el.style.filter = "none";
    const icon = styles.getPropertyValue("--card-mod-icon");
    if (icon)
        el.icon = icon.trim();
    const color = styles.getPropertyValue("--card-mod-icon-color");
    if (color)
        el.style.color = color;
};
const bindCardMod = async (el) => {
    if (el.cardmod_bound)
        return;
    el.cardmod_bound = true;
    const _bind = async () => {
        const cardMods = await findParentCardMod(el);
        for (const cm of cardMods) {
            cm.addEventListener("card-mod-update", async () => {
                await cm.updateComplete;
                updateIcon(el);
            });
        }
        updateIcon(el);
        return cardMods;
    };
    if ((await _bind()).size == 0)
        window.setTimeout(() => _bind(), 1000);
};
customElements.whenDefined("ha-state-icon").then(() => {
    const HaStateIcon = customElements.get("ha-state-icon");
    if (HaStateIcon.prototype.cardmod_patched)
        return;
    HaStateIcon.prototype.cardmod_patched = true;
    const _updated = HaStateIcon.prototype.updated;
    HaStateIcon.prototype.updated = function (...args) {
        _updated.bind(this)(...args);
        bindCardMod(this);
        updateIcon(this);
    };
});
customElements.whenDefined("ha-icon").then(() => {
    const HaIcon = customElements.get("ha-icon");
    if (HaIcon.prototype.cardmod_patched)
        return;
    HaIcon.prototype.cardmod_patched = true;
    const _updated = HaIcon.prototype.updated;
    HaIcon.prototype.updated = function (...args) {
        _updated === null || _updated === void 0 ? void 0 : _updated.bind(this)(...args);
        bindCardMod(this);
    };
});
customElements.whenDefined("ha-svg-icon").then(() => {
    const HaSvgIcon = customElements.get("ha-svg-icon");
    if (HaSvgIcon.prototype.cardmod_patched)
        return;
    HaSvgIcon.prototype.cardmod_patched = true;
    const _updated = HaSvgIcon.prototype.updated;
    HaSvgIcon.prototype.updated = function (...args) {
        var _a, _b;
        _updated === null || _updated === void 0 ? void 0 : _updated.bind(this)(...args);
        if (((_b = (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.host) === null || _b === void 0 ? void 0 : _b.localName) === "ha-icon")
            return;
        bindCardMod(this);
    };
});

const NO_STYLE = `
ha-card {
  background: none;
  box-shadow: none;
  border: none;
  transition: none;
}`;
class ModCard extends s {
    setConfig(config) {
        var _a;
        this._config = JSON.parse(JSON.stringify(config));
        let style = ((_a = this._config.card_mod) === null || _a === void 0 ? void 0 : _a.style) || this._config.style;
        if (style === undefined) {
            style = NO_STYLE;
        }
        else if (typeof style === "string") {
            style = NO_STYLE + style;
        }
        else if (style["."]) {
            style["."] = NO_STYLE + style["."];
        }
        else {
            style["."] = NO_STYLE;
        }
        this._config.card_mod = { style };
        this.build_card(config.card);
    }
    async build_card(config) {
        if (this._hass === undefined)
            await new Promise((resolve) => (this._hassResolve = resolve));
        this._hassResolve = undefined;
        const helpers = await window.loadCardHelpers();
        this.card = await helpers.createCardElement(config);
        this.card.hass = this._hass;
    }
    firstUpdated() {
        window.setTimeout(() => {
            var _a, _b;
            if ((_b = (_a = this.card) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("ha-card")) {
                console.info("%cYou are doing it wrong!", "color: red; font-weight: bold");
                let cardName = this.card.localName.replace(/hui-(.*)-card/, "$1");
                console.info(`mod-card should NEVER be used with a card that already has a ha-card element, such as ${cardName}`);
            }
        }, 3000);
    }
    set hass(hass) {
        this._hass = hass;
        if (this.card)
            this.card.hass = hass;
        if (this._hassResolve)
            this._hassResolve();
    }
    render() {
        return y ` <ha-card modcard> ${this.card} </ha-card> `;
    }
    getCardSize() {
        if (this._config.report_size)
            return this._config.report_size;
        let ret = this.shadowRoot;
        if (ret)
            ret = ret.querySelector("ha-card card-maker");
        if (ret)
            ret = ret.getCardSize;
        if (ret)
            ret = ret();
        if (ret)
            return ret;
        return 1;
    }
}
__decorate([
    e()
], ModCard.prototype, "card", void 0);
(async () => {
    // See explanation in card-mod.ts
    while (customElements.get("home-assistant") === undefined)
        await new Promise((resolve) => window.setTimeout(resolve, 100));
    if (!customElements.get("mod-card")) {
        customElements.define("mod-card", ModCard);
    }
})();

function refresh_theme() {
    document.dispatchEvent(new Event("cm_update"));
}
const bases = [
    customElements.whenDefined("home-assistant"),
    customElements.whenDefined("hc-main"),
];
Promise.race(bases).then(() => {
    window.setTimeout(async () => {
        var _a, _b;
        const hs = await hass();
        while (!hs) {
            await new Promise((resolve) => window.setTimeout(resolve, 500));
        }
        hs.connection.subscribeEvents(() => {
            window.setTimeout(refresh_theme, 500);
        }, "themes_updated");
        (_a = document
            .querySelector("home-assistant")) === null || _a === void 0 ? void 0 : _a.addEventListener("settheme", refresh_theme);
        (_b = document
            .querySelector("hc-main")) === null || _b === void 0 ? void 0 : _b.addEventListener("settheme", refresh_theme);
    }, 1000);
});

const resources = getResources();
if (resources.some((r) => r.endsWith("card-mod.js"))) ;
else {
    console.info("You may not be getting optimal performance out of card-mod.\nSee https://github.com/thomasloven/lovelace-card-mod#performance-improvements");
}
=======
function t(t,e,o,s){var i,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,s);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(n<3?i(r):n>3?i(e,o,r):i(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r}const e=window,o=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;const n=t=>new class{constructor(t,e,o){if(this._$cssResult$=!0,o!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=i.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&i.set(e,t))}return t}toString(){return this.cssText}}("string"==typeof t?t:t+"",void 0,s),r=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return n(e)})(t):t;var a;const d=window,l=d.trustedTypes,c=l?l.emptyScript:"",h=d.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},p=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p};let f=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const s=this._$Ep(o,e);void 0!==s&&(this._$Ev.set(s,o),t.push(s))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,o,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{o?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((o=>{const s=document.createElement("style"),i=e.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=o.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=m){var s;const i=this.constructor._$Ep(t,o);if(void 0!==i&&!0===o.reflect){const n=(void 0!==(null===(s=o.converter)||void 0===s?void 0:s.toAttribute)?o.converter:u).toAttribute(e,o.type);this._$El=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$El=null}}_$AK(t,e){var o;const s=this.constructor,i=s._$Ev.get(t);if(void 0!==i&&this._$El!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(o=t.converter)||void 0===o?void 0:o.fromAttribute)?t.converter:u;this._$El=i,this[i]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,o){let s=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};var v;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:f}),(null!==(a=d.reactiveElementVersions)&&void 0!==a?a:d.reactiveElementVersions=[]).push("1.4.2");const _=window,y=_.trustedTypes,g=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,w="?"+$,E=`<${w}>`,b=document,A=(t="")=>b.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,O=/>/g,T=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),U=/'/g,M=/"/g,x=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),R=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),H=new WeakMap,L=b.createTreeWalker(b,129,null,!1),j=(t,e)=>{const o=t.length-1,s=[];let i,n=2===e?"<svg>":"",r=P;for(let e=0;e<o;e++){const o=t[e];let a,d,l=-1,c=0;for(;c<o.length&&(r.lastIndex=c,d=r.exec(o),null!==d);)c=r.lastIndex,r===P?"!--"===d[1]?r=N:void 0!==d[1]?r=O:void 0!==d[2]?(x.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=T):void 0!==d[3]&&(r=T):r===T?">"===d[0]?(r=null!=i?i:P,l=-1):void 0===d[1]?l=-2:(l=r.lastIndex-d[2].length,a=d[1],r=void 0===d[3]?T:'"'===d[3]?M:U):r===M||r===U?r=T:r===N||r===O?r=P:(r=T,i=void 0);const h=r===T&&t[e+1].startsWith("/>")?" ":"";n+=r===P?o+E:l>=0?(s.push(a),o.slice(0,l)+"$lit$"+o.slice(l)+$+h):o+$+(-2===l?(s.push(void 0),e):h)}const a=n+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==g?g.createHTML(a):a,s]};class I{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let i=0,n=0;const r=t.length-1,a=this.parts,[d,l]=j(t,e);if(this.el=I.createElement(d,o),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=L.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const o=l[n++];if(t.push(e),void 0!==o){const t=s.getAttribute(o.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(o);a.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?K:"@"===e[1]?Y:V})}else a.push({type:6,index:i})}for(const e of t)s.removeAttribute(e)}if(x.test(s.tagName)){const t=s.textContent.split($),e=t.length-1;if(e>0){s.textContent=y?y.emptyScript:"";for(let o=0;o<e;o++)s.append(t[o],A()),L.nextNode(),a.push({type:2,index:++i});s.append(t[e],A())}}}else if(8===s.nodeType)if(s.data===w)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=s.data.indexOf($,t+1));)a.push({type:7,index:i}),t+=$.length-1}i++}}static createElement(t,e){const o=b.createElement("template");return o.innerHTML=t,o}}function z(t,e,o=t,s){var i,n,r,a;if(e===R)return e;let d=void 0!==s?null===(i=o._$Co)||void 0===i?void 0:i[s]:o._$Cl;const l=S(e)?void 0:e._$litDirective$;return(null==d?void 0:d.constructor)!==l&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===l?d=void 0:(d=new l(t),d._$AT(t,o,s)),void 0!==s?(null!==(r=(a=o)._$Co)&&void 0!==r?r:a._$Co=[])[s]=d:o._$Cl=d),void 0!==d&&(e=z(t,d._$AS(t,e.values),d,s)),e}class q{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:o},parts:s}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:b).importNode(o,!0);L.currentNode=i;let n=L.nextNode(),r=0,a=0,d=s[0];for(;void 0!==d;){if(r===d.index){let e;2===d.type?e=new B(n,n.nextSibling,this,t):1===d.type?e=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(e=new Z(n,this,t)),this.u.push(e),d=s[++a]}r!==(null==d?void 0:d.index)&&(n=L.nextNode(),r++)}return i}p(t){let e=0;for(const o of this.u)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class B{constructor(t,e,o,s){var i;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=s,this._$Cm=null===(i=null==s?void 0:s.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),S(t)?t===k||null==t||""===t?(this._$AH!==k&&this._$AR(),this._$AH=k):t!==this._$AH&&t!==R&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==k&&S(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){var e;const{values:o,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=I.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.p(o);else{const t=new q(i,this),e=t.v(this.options);t.p(o),this.T(e),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new I(t)),e}k(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const i of t)s===e.length?e.push(o=new B(this.O(A()),this.O(A()),this,this.options)):o=e[s],o._$AI(i),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class V{constructor(t,e,o,s,i){this.type=1,this._$AH=k,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,s){const i=this.strings;let n=!1;if(void 0===i)t=z(this,t,e,0),n=!S(t)||t!==this._$AH&&t!==R,n&&(this._$AH=t);else{const s=t;let r,a;for(t=i[0],r=0;r<i.length-1;r++)a=z(this,s[o+r],e,r),a===R&&(a=this._$AH[r]),n||(n=!S(a)||a!==this._$AH[r]),a===k?t=k:t!==k&&(t+=(null!=a?a:"")+i[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends V{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===k?void 0:t}}const W=y?y.emptyScript:"";class K extends V{constructor(){super(...arguments),this.type=4}j(t){t&&t!==k?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class Y extends V{constructor(t,e,o,s,i){super(t,e,o,s,i),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=z(this,t,e,0))&&void 0!==o?o:k)===R)return;const s=this._$AH,i=t===k&&s!==k||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==k&&(s===k||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const F=_.litHtmlPolyfillSupport;null==F||F(I,B),(null!==(v=_.litHtmlVersions)&&void 0!==v?v:_.litHtmlVersions=[]).push("2.4.0");var G,Q;class X extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{var s,i;const n=null!==(s=null==o?void 0:o.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;n._$litPart$=r=new B(e.insertBefore(A(),t),t,void 0,null!=o?o:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return R}}X.finalized=!0,X._$litElement$=!0,null===(G=globalThis.litElementHydrateSupport)||void 0===G||G.call(globalThis,{LitElement:X});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:X}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.2");const et=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function ot(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):et(t,e)}var st;async function it(){const t=await async function(){await Promise.race([customElements.whenDefined("home-assistant"),customElements.whenDefined("hc-main")]);const t=customElements.get("home-assistant")?"home-assistant":"hc-main";for(;!document.querySelector(t);)await new Promise((t=>window.setTimeout(t,100)));return document.querySelector(t)}();for(;!t.hass;)await new Promise((t=>window.setTimeout(t,100)));return t.hass}null===(st=window.HTMLSlotElement)||void 0===st||st.prototype.assignedElements;window.cardMod_template_cache=window.cardMod_template_cache||{};const nt=window.cardMod_template_cache;async function rt(t,e,o){const s=await it(),i=s.connection,n=JSON.stringify([e,o]);let r=nt[n];r?(r.callbacks.has(t)||at(t),t(r.value),r.callbacks.add(t)):(at(t),t(""),o=Object.assign({user:s.user.name,browser:document.querySelector("hc-main")?"CAST":localStorage["browser_mod-browser-id"]?localStorage["browser_mod-browser-id"]:"",hash:location.hash.substr(1)||""},o),nt[n]=r={template:e,variables:o,value:"",callbacks:new Set([t]),unsubscribe:i.subscribeMessage((t=>function(t,e){const o=nt[t];o&&(o.value=e.result,o.callbacks.forEach((t=>t(e.result))))}(n,t)),{type:"render_template",template:e,variables:o})})}async function at(t){let e;for(const[o,s]of Object.entries(nt))if(s.callbacks.has(t)){s.callbacks.delete(t),0==s.callbacks.size&&(e=s.unsubscribe,delete nt[o]);break}e&&await(await e)()}var dt="3.2.2";const lt=async t=>{await(async()=>{if(customElements.get("developer-tools-event"))return;await customElements.whenDefined("partial-panel-resolver");const t=document.createElement("partial-panel-resolver");t.hass={panels:[{url_path:"tmp",component_name:"developer-tools"}]},t._updateRoutes(),await t.routerOptions.routes.tmp.load(),await customElements.whenDefined("developer-tools-router");const e=document.createElement("developer-tools-router");await e.routerOptions.routes.event.load()})();return document.createElement("developer-tools-event")._computeParsedEventData(t)};async function ct(t,e,o="",s={},i=null,n=!0){var r;if(!t)return;let a;(null===(r=t.localName)||void 0===r?void 0:r.includes("-"))&&await customElements.whenDefined(t.localName),t.updateComplete&&await t.updateComplete,void 0===t._cardMod&&(t._cardMod=[]);for(const o of t._cardMod)if(o.type===e){a=o;break}return a||(a=document.createElement("card-mod"),a.type=e,t._cardMod.push(a)),queueMicrotask((async()=>{const e=t.modElement?t.modElement:n&&t.shadowRoot||t;e.contains(a)||e.appendChild(a),a.variables=s,a.styles=o})),a}function ht(t,e){const o=t=>t&&"object"==typeof t&&!Array.isArray(t);if(o(t)&&o(e))for(const s in e)o(e[s])?(t[s]||Object.assign(t,{[s]:{}}),"string"==typeof t[s]&&(t[s]={".":t[s]}),ht(t[s],e[s])):t[s]?t[s]=e[s]+t[s]:t[s]=e[s];return t}function ut(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(!(t instanceof Object&&e instanceof Object))return!1;for(const o in t)if(t.hasOwnProperty(o)){if(!e.hasOwnProperty(o))return!1;if(t[o]!==e[o]){if("object"!=typeof t[o])return!1;if(!ut(t[o],e[o]))return!1}}for(const o in e)if(e.hasOwnProperty(o)&&!t.hasOwnProperty(o))return!1;return!0}function pt(t){return t.config?t.config:t._config?t._config:t.host?pt(t.host):t.parentElement?pt(t.parentElement):t.parentNode?pt(t.parentNode):null}function mt(t,e){for(const o of e)t.add(o)}async function ft(t,e=0){let o=new Set;if(10==e)return o;if(!t)return o;if(t._cardMod)for(const e of t._cardMod)e.styles&&o.add(e);return t.updateComplete&&await t.updateComplete,t.parentElement?mt(o,await ft(t.parentElement,e+1)):t.parentNode&&mt(o,await ft(t.parentNode,e+1)),t.host&&mt(o,await ft(t.host,e+1)),o}async function vt(t,e=!1){var o;if((null===(o=t.localName)||void 0===o?void 0:o.includes("-"))&&await customElements.whenDefined(t.localName),t.updateComplete&&await t.updateComplete,e&&(t.pageRendered&&await t.pageRendered,t._panelState)){let e=0;for(;"loaded"!==t._panelState&&e++<5;)await new Promise((t=>setTimeout(t,100)))}}async function _t(t,e,o=!1){let s=[t];for("string"==typeof e&&(e=e.split(/(\$| )/));""===e[e.length-1];)e.pop();for(const[t,o]of e.entries()){const t=s[0];if(!t)return null;o.trim().length&&(vt(t),s="$"===o?[t.shadowRoot]:t.querySelectorAll(o))}return o?s:s[0]}async function yt(t,e,o=!1,s=1e4){return Promise.race([_t(t,e,o),new Promise(((t,e)=>setTimeout((()=>e(new Error("SELECTTREE-TIMEOUT"))),s)))]).catch((t=>{if(!t.message||"SELECTTREE-TIMEOUT"!==t.message)throw t;return null}))}class gt extends X{static get applyToElement(){return ct}constructor(){super(),this._rendered_styles="",this._styleChildren=new Set,this._observer=new MutationObserver((t=>{for(const e of t){if("card-mod"===e.target.localName)return;e.addedNodes.length&&e.addedNodes.forEach((t=>{t.localName})),e.removedNodes.length&&e.removedNodes.forEach((t=>{t.localName}))}stop||this.refresh()})),document.addEventListener("cm_update",(()=>{this.refresh()}))}connectedCallback(){super.connectedCallback(),this._connect(),this.setAttribute("slot","none")}disconnectedCallback(){super.disconnectedCallback(),this._disconnect()}set styles(t){ut(t,this._input_styles)||(this._input_styles=t,(async()=>{let e=JSON.parse(JSON.stringify(t||{}));"string"==typeof e&&(e={".":e});ht(e,await async function(t){var e;if(!t.type)return null;const o=t.parentElement?t.parentElement:t,s=window.getComputedStyle(o).getPropertyValue("--card-mod-theme"),i=await it();if(!i)return{};const n=null!==(e=null==i?void 0:i.themes.themes)&&void 0!==e?e:{};return n[s]?n[s][`card-mod-${t.type}-yaml`]?lt(n[s][`card-mod-${t.type}-yaml`]):n[s][`card-mod-${t.type}`]?{".":n[s][`card-mod-${t.type}`]}:{}:{}}(this)),this._fixed_styles=e,this._connect()})())}get styles(){return this._styles}refresh(){this._connect()}async _styleChildEl(t,e){if(void 0===e){const o=this._fixed_styles;for(const[s,i]of Object.entries(o)){if("."===s)continue;if((await yt(this.parentElement||this.parentNode,s,!0)).forEach((o=>{o===t&&(e=i)})),void 0!==e)break}if(void 0===e)return}if(!t)return;const o=await ct(t,`${this.type}-child`,e,this.variables,null,!1);return o.refresh,o}async _connect(){var t;const e=null!==(t=this._fixed_styles)&&void 0!==t?t:{},o=new Set;let s="",i=!1;const n=this.parentElement||this.parentNode;for(const[t,r]of Object.entries(e))if("."===t)s=r;else{i=!0;const e=await yt(n,t,!0);if(!e)continue;for(const t of e){const e=await this._styleChildEl(t,r);e&&o.add(e)}}for(const t of this._styleChildren)o.has(t)||t&&(t.styles="");var r;(this._styleChildren=o,this._styles!==s)&&(this._styles=s,this._styles&&(r=this._styles,String(r).includes("{%")||String(r).includes("{{"))?(this._renderer=this._renderer||this._style_rendered.bind(this),rt(this._renderer,this._styles,this.variables)):this._style_rendered(this._styles||""),i&&(this._observer.disconnect(),this._observer.observe(function(t){if(!t)return;const e=t.parentElement||t.parentNode;return e?e.host?e.host:e:void 0}(this),{childList:!0})))}async _disconnect(){this._observer.disconnect(),this._styles="",await at(this._renderer)}_style_rendered(t){this._rendered_styles!==t&&(this._rendered_styles=t),this.dispatchEvent(new Event("card-mod-update"))}createRenderRoot(){return this}render(){return D`
      <style>
        ${this._rendered_styles}
      </style>
    `}}t([ot()],gt.prototype,"_rendered_styles",void 0),(async()=>{for(;void 0===customElements.get("home-assistant");)await new Promise((t=>window.setTimeout(t,100)));customElements.get("card-mod")||(customElements.define("card-mod",gt),console.info(`%cCARD-MOD ${dt} IS INSTALLED`,"color: green; font-weight: bold"))})(),customElements.whenDefined("ha-card").then((()=>{const t=customElements.get("ha-card");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.firstUpdated;t.prototype.firstUpdated=function(...t){var o,s;null==e||e.bind(this)(...t);const i=pt(this);(null===(o=null==i?void 0:i.card_mod)||void 0===o?void 0:o.class)&&this.classList.add(i.card_mod.class),(null==i?void 0:i.type)&&this.classList.add(`type-${i.type.replace(":","-")}`),ct(this,"card",(null===(s=null==i?void 0:i.card_mod)||void 0===s?void 0:s.style)||(null==i?void 0:i.style)||"",{config:i},null,!1).then((t=>{var e;const o=null===(e=this.parentNode)||void 0===e?void 0:e.host;if(o){if(o.setConfig&&!o.setConfig.cm_patched){const e=o.setConfig;o.setConfig=function(o,...s){var i;e.bind(this)(o,...s),t.variables={config:o},t.styles=(null===(i=o.card_mod)||void 0===i?void 0:i.style)||{}},o.setConfig.cm_patched=!0}if(o.update&&!o.update.cm_patched){const e=o.update;o.update=function(...o){e.bind(this)(...o),this.updateComplete?this.updateComplete.then((()=>{t.refresh()})):t.refresh()},o.update.cm_patched=!0}}}))}})),customElements.whenDefined("hui-entities-card").then((()=>{const t=customElements.get("hui-entities-card");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.renderEntity;t.prototype.renderEntity=function(t,...o){var s;const i=e.bind(this)(t,...o);if(!i||!i.values)return i;const n=i.values[0];if(!n)return i;if("custom:mod-card"===(null==t?void 0:t.type))return i;(null===(s=null==t?void 0:t.card_mod)||void 0===s?void 0:s.class)&&n.classList.add(t.card_mod.class),(null==t?void 0:t.type)&&n.classList.add(`type-${t.type.replace(":","-")}`);const r=async()=>{var e;return ct(n,"row",(null===(e=null==t?void 0:t.card_mod)||void 0===e?void 0:e.style)||(null==t?void 0:t.style)||"",{config:t})};return(async()=>{const t=await r();if(n.update&&!n.update.cm_patched){const e=n.update;n.update=function(...o){e.bind(this)(...o),this.updateComplete?this.updateComplete.then((()=>{t.refresh()})):t.refresh()}}})(),this.updateComplete.then((()=>r())),i.values[0]&&i.values[0].addEventListener("ll-rebuild",r),i}}));customElements.whenDefined("hui-glance-card").then((()=>{const t=customElements.get("hui-glance-card");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.updated;t.prototype.updated=function(...t){var o,s;null==e||e.bind(this)(...t);for(const t of this.shadowRoot.querySelectorAll("ha-card div.entity")){if(!t.cardmod_patched){t.cardmod_patched=!0;const e=t.attachShadow({mode:"open"});for(;t.firstChild;)e.append(t.firstChild);const o=document.createElement("style");e.appendChild(o),o.innerHTML="\ndiv {\n  width: 100%;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.name {\n  min-height: var(--paper-font-body1_-_line-height, 20px);\n}\nstate-badge {\n  margin: 8px 0;\n}\n"}const e=t.config||t.entityConf;(null===(o=null==e?void 0:e.card_mod)||void 0===o?void 0:o.class)&&t.classList.add(e.card_mod.class),ct(t,"glance",(null===(s=null==e?void 0:e.card_mod)||void 0===s?void 0:s.style)||(null==e?void 0:e.style)||"",{config:e})}}})),customElements.whenDefined("hui-state-label-badge").then((()=>{const t=customElements.get("hui-state-label-badge");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.firstUpdated;t.prototype.firstUpdated=function(...t){var o,s;null==e||e.bind(this)(...t);const i=this._config;(null===(o=null==i?void 0:i.card_mod)||void 0===o?void 0:o.class)&&this.classList.add(i.card_mod.class),ct(this,"badge",(null===(s=null==i?void 0:i.card_mod)||void 0===s?void 0:s.style)||(null==i?void 0:i.style)||"",{config:i})}})),customElements.whenDefined("hui-view").then((()=>{const t=customElements.get("hui-view");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.updated;t.prototype.updated=function(...t){null==e||e.bind(this)(...t),ct(this,"view","",{},null,!1)}})),customElements.whenDefined("hui-root").then((()=>{const t=customElements.get("hui-root");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.firstUpdated;t.prototype.firstUpdated=async function(...t){null==e||e.bind(this)(...t),ct(this,"root")},yt(document,"home-assistant$home-assistant-main$partial-panel-resolver ha-panel-lovelace$hui-root",!1).then((t=>{null==t||t.firstUpdated()}))})),customElements.whenDefined("ha-more-info-dialog").then((()=>{const t=customElements.get("ha-more-info-dialog");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.showDialog;t.prototype.showDialog=function(t,...o){null==e||e.bind(this)(t,...o),this.requestUpdate(),this.updateComplete.then((async()=>{const e=this.shadowRoot.querySelector("ha-dialog");e&&ct(e,"more-info","",{config:t},null,!1)}))},yt(document,"home-assistant$ha-more-info-dialog",!1).then((e=>{e&&(e.showDialog=t.prototype.showDialog.bind(e),e.showDialog({entityId:e.entityId}))}))})),customElements.whenDefined("ha-sidebar").then((()=>{const t=customElements.get("ha-sidebar");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.firstUpdated;t.prototype.firstUpdated=async function(...t){null==e||e.bind(this)(...t),ct(this,"sidebar")},yt(document,"home-assistant$home-assistant-main$ ha-sidebar",!1).then((t=>{null==t||t.firstUpdated()}))})),customElements.whenDefined("hui-card-element-editor").then((()=>{const t=customElements.get("hui-card-element-editor");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.getConfigElement;t.prototype.getConfigElement=async function(){const t=await e.bind(this)();if(t){const e=t.setConfig;t.setConfig=function(t,...o){var s,i;const n=JSON.parse(JSON.stringify(t));if(this._cardModData={card:n.card_mod,entities:[]},n.entities)for(const[t,e]of null===(s=n.entities)||void 0===s?void 0:s.entries())this._cardModData.entities[t]=e.card_mod,delete e.card_mod;if(delete n.card_mod,e.bind(this)(n,...o),n.entities)for(const[t,e]of null===(i=n.entities)||void 0===i?void 0:i.entries())this._cardModData.entities[t]&&(e.card_mod=this._cardModData.entities[t])}}return t};const o=t.prototype._handleUIConfigChanged;t.prototype._handleUIConfigChanged=function(t,...e){if(this._configElement&&this._configElement._cardModData){const e=this._configElement._cardModData;e.card&&(t.detail.config.card_mod=e.card)}o.bind(this)(t,...e)}})),customElements.whenDefined("hui-dialog-edit-card").then((()=>{const t=customElements.get("hui-dialog-edit-card");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.updated;t.prototype.updated=function(...t){null==e||e.bind(this)(...t),this.updateComplete.then((async()=>{var t,e,o;this._cardModIcon||(this._cardModIcon=document.createElement("ha-icon"),this._cardModIcon.icon="mdi:brush");const s=this.shadowRoot.querySelector("mwc-button[slot=secondaryAction]");s&&(s.appendChild(this._cardModIcon),(null===(t=this._cardConfig)||void 0===t?void 0:t.card_mod)||(null===(o=null===(e=this._cardConfig)||void 0===e?void 0:e.entities)||void 0===o?void 0:o.some((t=>t.card_mod)))?this._cardModIcon.style.visibility="visible":this._cardModIcon.style.visibility="hidden")}))}})),customElements.whenDefined("hui-picture-elements-card").then((()=>{const t=customElements.get("hui-picture-elements-card");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.setConfig;t.prototype.setConfig=function(...t){var o,s;null==e||e.bind(this)(...t);for(const[t,e]of this._elements.entries()){const i=this._config.elements[t];(null===(o=null==i?void 0:i.card_mod)||void 0===o?void 0:o.class)&&e.classList.add(i.card_mod.class),(null==i?void 0:i.type)&&e.classList.add(`type-${i.type.replace(":","-")}`),ct(e,"element",null===(s=null==i?void 0:i.card_mod)||void 0===s?void 0:s.style,{config:i})}}}));const $t=t=>{const e=window.getComputedStyle(t);"none"===e.getPropertyValue("--card-mod-icon-dim")&&(t.style.filter="none");const o=e.getPropertyValue("--card-mod-icon");o&&(t.icon=o.trim());const s=e.getPropertyValue("--card-mod-icon-color");s&&(t.style.color=s)},wt=async t=>{if(t.cardmod_bound)return;t.cardmod_bound=!0;const e=async()=>{const e=await ft(t);for(const o of e)o.addEventListener("card-mod-update",(async()=>{await o.updateComplete,$t(t)}));return $t(t),e};0==(await e()).size&&window.setTimeout((()=>e()),1e3)};customElements.whenDefined("ha-state-icon").then((()=>{const t=customElements.get("ha-state-icon");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.updated;t.prototype.updated=function(...t){e.bind(this)(...t),wt(this),$t(this)}})),customElements.whenDefined("ha-icon").then((()=>{const t=customElements.get("ha-icon");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.updated;t.prototype.updated=function(...t){null==e||e.bind(this)(...t),wt(this)}})),customElements.whenDefined("ha-svg-icon").then((()=>{const t=customElements.get("ha-svg-icon");if(t.prototype.cardmod_patched)return;t.prototype.cardmod_patched=!0;const e=t.prototype.updated;t.prototype.updated=function(...t){var o,s;null==e||e.bind(this)(...t),"ha-icon"!==(null===(s=null===(o=this.parentNode)||void 0===o?void 0:o.host)||void 0===s?void 0:s.localName)&&wt(this)}}));const Et="\nha-card {\n  background: none;\n  box-shadow: none;\n  border: none;\n  transition: none;\n}";class bt extends X{setConfig(t){var e;this._config=JSON.parse(JSON.stringify(t));let o=(null===(e=this._config.card_mod)||void 0===e?void 0:e.style)||this._config.style;void 0===o?o=Et:"string"==typeof o?o=Et+o:o["."]?o["."]=Et+o["."]:o["."]=Et,this._config.card_mod={style:o},this.build_card(t.card)}async build_card(t){void 0===this._hass&&await new Promise((t=>this._hassResolve=t)),this._hassResolve=void 0;const e=await window.loadCardHelpers();this.card=await e.createCardElement(t),this.card.hass=this._hass}firstUpdated(){window.setTimeout((()=>{var t,e;if(null===(e=null===(t=this.card)||void 0===t?void 0:t.shadowRoot)||void 0===e?void 0:e.querySelector("ha-card")){console.info("%cYou are doing it wrong!","color: red; font-weight: bold");let t=this.card.localName.replace(/hui-(.*)-card/,"$1");console.info(`mod-card should NEVER be used with a card that already has a ha-card element, such as ${t}`)}}),3e3)}set hass(t){this._hass=t,this.card&&(this.card.hass=t),this._hassResolve&&this._hassResolve()}render(){return D` <ha-card modcard> ${this.card} </ha-card> `}getCardSize(){if(this._config.report_size)return this._config.report_size;let t=this.shadowRoot;return t&&(t=t.querySelector("ha-card card-maker")),t&&(t=t.getCardSize),t&&(t=t()),t||1}}function At(){document.dispatchEvent(new Event("cm_update"))}t([ot()],bt.prototype,"card",void 0),(async()=>{for(;void 0===customElements.get("home-assistant");)await new Promise((t=>window.setTimeout(t,100)));customElements.get("mod-card")||customElements.define("mod-card",bt)})();const St=[customElements.whenDefined("home-assistant"),customElements.whenDefined("hc-main")];Promise.race(St).then((()=>{window.setTimeout((async()=>{var t,e;const o=await it();for(;!o;)await new Promise((t=>window.setTimeout(t,500)));o.connection.subscribeEvents((()=>{window.setTimeout(At,500)}),"themes_updated"),null===(t=document.querySelector("home-assistant"))||void 0===t||t.addEventListener("settheme",At),null===(e=document.querySelector("hc-main"))||void 0===e||e.addEventListener("settheme",At)}),1e3)}));const Ct=function(){var t,e,o;const s=document.querySelectorAll("script"),i=[];for(const n of s)if(null===(e=null===(t=null==n?void 0:n.innerText)||void 0===t?void 0:t.trim())||void 0===e?void 0:e.startsWith("import(")){const t=null===(o=n.innerText.split("\n"))||void 0===o?void 0:o.map((t=>t.trim()));for(const e of t)i.push(e.replace(/^import\(\"/,"").replace(/\"\);/,""))}return i}();Ct.some((t=>t.endsWith("card-mod.js")))||console.info("You may not be getting optimal performance out of card-mod.\nSee https://github.com/thomasloven/lovelace-card-mod#performance-improvements");
>>>>>>> fc29760c (Initial commit)
