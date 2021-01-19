(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/replay/components/common.js":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"k",(function(){return r})),n.d(t,"g",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return d})),n.d(t,"j",(function(){return m})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return h})),n.d(t,"e",(function(){return y}));const o="replay-";function r(e,...t){const n=null==e?"":e,o=[];for(let r=0;r<t.length;r++)t[r]&&o.push(n+t[r]);return o.join(" ")}const a=e=>e;function s({classes:e,selectClasses:t,classNames:n,classNamePrefix:o}){if(e&&t){const n=t(e);return Array.isArray(n)?n.filter(a).join(" "):n}if(n)return r(o,...n)}function i(e,t){const n=(t||e.currentTarget).getBoundingClientRect();let o;return o=e.touches&&e.touches.length>0?e.touches[0]:e.changedTouches&&e.changedTouches.length>0?e.changedTouches[0]:e,{x:Math.max(0,Math.min(o.pageX-n.left,n.width)),y:Math.max(0,Math.min(o.pageY-n.top,n.height)),width:n.width,height:n.height}}function l(e){return t=>{e.indexOf(t.key)>=0&&(t.preventDefault(),t.stopPropagation())}}const c=(e,t)=>e!==t&&(!(e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime())&&!(Number.isNaN(e)&&Number.isNaN(t))),p=e=>null!=e&&e.constructor==={}.constructor,d=(e,t)=>{if(e===t)return!0;if(p(e)&&p(t)){const n=Object.keys(e),o=Object.keys(t);return n.length===o.length&&(!(n.filter(n=>c(e[n],t[n])).length>0)&&0===o.filter(n=>c(t[n],e[n])).length)}if(Array.isArray(e)&&Array.isArray(t)&&e.length===t.length){for(let n=e.length;n--;)if(e[n]!==t[n])return!1;return!0}return!1};function u(e){if(null==e)return{};{const t={},n=e;return Object.keys(e).forEach(e=>{p(n[e])?t[e]=u(n[e]):t[e]=n[e]}),t}}function m(e,t){const n=u(e);if(t){const e=t;Object.getOwnPropertyNames(e).forEach(t=>{p(e[t])?p(n[t])?n[t]=m(n[t],e[t]):n[t]=u(e[t]):n[t]=e[t]})}return n}const g=(e,t="",n=!1,o=!0)=>n&&0===e?"":e<10&&o?"0".concat(e).concat(t):"".concat(e).concat(t),f=(e,t="-")=>{let n=Math.round(e),o="";"number"!==typeof e||isNaN(e)||e===1/0?n=0:n<0&&(n=-n,o=t);const r=Math.floor(n/86400),a=86400*r,s=Math.floor((n-a)/3600),i=a+3600*s,l=Math.floor((n-i)/60),c=n-i-60*l;return o+g(r,".",!0,!1)+g(s,":",0===r)+g(l,":",!1)+g(c)},h=e=>{const t=e instanceof Date&&!isNaN(e.getTime());let n=0,o=0,r=0;return t&&null!=e&&(n=t?e.getHours():0,o=t?e.getMinutes():0,r=t?e.getSeconds():0),g(n,":",!1)+g(o,":",!1)+g(r)},y=(e,t)=>{let n=null;return{start:()=>{n||(n=setInterval(e,1e3*t))},stop:()=>{n&&(clearInterval(n),n=null)}}}},"./src/replay/components/controls/GotoLiveButton/GotoLiveButton.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n("./src/replay/components/generic/ToggleButton/ToggleButton.js"),a=n("./src/replay/components/common.js");function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class i extends o.Component{constructor(...e){super(...e),s(this,"handleToggle",e=>{e&&this.props.setProperties&&this.props.setProperties({isAtLiveEdge:!0})})}render(){const e=this.props,t=e.playMode,n=e.isAtLiveEdge,a=e.isAtLiveEdgeContent,s=e.isNotAtLiveEdgeContent,i=e.label,l=e.classNamePrefix;return"livedvr"===t?o.createElement(r.a,{classNamePrefix:l,isOn:n,className:"goto-live-button",label:i,onToggle:this.handleToggle,toggledOnContent:a,toggledOffContent:s}):null}}s(i,"defaultProps",{classNamePrefix:a.a}),s(i,"streamStateKeysForObservation",["isAtLiveEdge","playMode"]),i.displayName="GotoLiveButton",t.a=i,i.__docgenInfo={description:"",methods:[{name:"handleToggle",docblock:null,modifiers:[],params:[{name:"value",type:{name:"boolean"}}],returns:null}],displayName:"GotoLiveButton",props:{classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},isAtLiveEdge:{required:!1,flowType:{name:"boolean"},description:"\u21d8\ufe0e The current timeshift state of the playback. False means timeshifting."},playMode:{required:!1,flowType:{name:"PlayMode"},description:"\u21d8\ufe0e The stream mode. Must be 'livedvr' in order for this control to render."},setProperties:{required:!1,flowType:{name:"signature",type:"function",raw:"({ isAtLiveEdge: true }) => void",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{ isAtLiveEdge: true }",signature:{properties:[{key:"isAtLiveEdge",value:{name:"literal",value:"true",required:!0}}]}}}],return:{name:"void"}}},description:"\u21d7 When the button is clicked, and the isAtLiveEdge prop is false, this callback is invoked with an object containing an isAtLiveEdge property with the value true."},isAtLiveEdgeContent:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed while isAtLiveEdge is true."},isNotAtLiveEdgeContent:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed while isAtLiveEdge is false, i.e. when timeshifting."}}}},"./src/replay/components/controls/GotoLiveButton/GotoLiveButton.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),s=n("./node_modules/docz/dist/index.m.js"),i=n("./src/replay/components/controls/GotoLiveButton/GotoLiveButton.js"),l=n("./src/replay/docs/mdx-helpers/ShowCase.js"),c=n("./src/replay/docs/mdx-helpers/SimpleTable.js"),p=n("./src/replay/docs/props-footnote.md");function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}class u extends r.a.Component{constructor(e){super(e),this.layout=null}render(){const e=this.props,t=e.components,n=d(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"gotolivebutton"}},"GotoLiveButton"),r.a.createElement(a.MDXTag,{name:"p",components:t},"Control bar button for resuming after timeshifting to the live edge of the stream. Only rendering/relevant for live DVR streams."),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"summary"}},"Summary"),r.a.createElement(a.MDXTag,{name:"p",components:t},"The GotoLiveButton is a toggle button, but it can only toggle if the prop ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isAtLiveEdge")," is ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"false"),". When clicking the button in this case, it invokes ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties({ isAtLiveEdge: true })"),". If the button prop ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isAtLiveEdge")," is ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"true"),", the button can present a different state, and clicking it has no effect."),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),r.a.createElement(s.Playground,{__codesandbox:"undefined",__position:0,__code:'<ShowCase\n  render={({ setProperties, isAtLiveEdge }) => (\n    <GotoLiveButton\n      isAtLiveEdge={isAtLiveEdge}\n      isAtLiveEdgeContent="Live"\n      isNotAtLiveEdgeContent="Go to live"\n      playMode="livedvr"\n      setProperties={setProperties}\n    />\n  )}\n/>',__scope:{props:this?this.props:n,GotoLiveButton:i.a,ShowCase:l.a,SimpleTable:c.a,Footnote:p.a}},r.a.createElement(l.a,{render:({setProperties:e,isAtLiveEdge:t})=>r.a.createElement(i.a,{isAtLiveEdge:t,isAtLiveEdgeContent:"Live",isNotAtLiveEdgeContent:"Go to live",playMode:"livedvr",setProperties:e})})),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),r.a.createElement(s.PropsTable,{of:i.a}),r.a.createElement(p.a,null),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"component-dom-with-class-names"}},"Component DOM with class names"),r.a.createElement(a.MDXTag,{name:"p",components:t},"Please read the ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/custom-replay/skins-styles"}},"general principles")," for Replay class names and styling."),r.a.createElement(c.a,{rows:[{Element:"div","Class name":"goto-live-button","Generic class name":"toggle-button",States:"toggled-off, toggled-on",Parent:""},{Element:"div","Class name":"","Generic class name":"",States:"",Parent:".goto-live-button"}]}))}}u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/components/generic/ToggleButton/ToggleButton.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n("./src/replay/components/common.js");function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=e=>e.toggleButtonOff||e.toggleButton,i=e=>e.toggleButtonOn||e.toggleButton;class l extends o.Component{constructor(...e){super(...e),a(this,"handleClick",()=>this.props.onToggle&&this.props.onToggle(!this.props.isOn)),a(this,"handleKeyDown",Object(r.f)(["Enter"," "])),a(this,"handleKeyUp",e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.handleClick())})}render(){const e=this.props,t=e.isOn,n=e.label,a=e.className,l=e.classNamePrefix,c=e.toggledOnContent,p=e.toggledOffContent,d=e.onRef,u=e.classes,m=t?"toggled-on":"toggled-off",g=Object(r.g)({classes:u,selectClasses:t?i:s,classNamePrefix:l,classNames:[a,"toggle-button",m]}),f=t?c:p;return o.createElement("div",{role:"button","aria-pressed":t,title:n,onClick:this.handleClick,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown,ref:d,className:g,tabIndex:0},o.createElement("div",{tabIndex:-1},f))}}a(l,"defaultProps",{useDefaultClassNaming:!0}),t.a=l,l.__docgenInfo={description:"Renders a button with two states - toggled on and off. When clicked, it reports back the opposite state.",methods:[{name:"handleClick",docblock:null,modifiers:[],params:[],returns:null},{name:"handleKeyUp",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null}],displayName:"ToggleButton",props:{useDefaultClassNaming:{defaultValue:{value:"true",computed:!1},required:!1},isOn:{required:!1,flowType:{name:"boolean"},description:"Set to true if the button should be in the toggled on mode."},label:{required:!1,flowType:{name:"string"},description:"The label will appear in the title attribute of the root DOM element of the toggle button."},toggledOffContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed when the button is toggled off."},toggledOnContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed when the button is toggled on."},onToggle:{required:!1,flowType:{name:"signature",type:"function",raw:"boolean => void",signature:{arguments:[{name:"",type:{name:"boolean"}}],return:{name:"void"}}},description:"A callback method that will be invoked when the button is clicked and the value toggled. If the button has been toggled on, true is passed to the callback."},onRef:{required:!1,flowType:{name:"signature",type:"function",raw:"(?HTMLElement) => void",signature:{arguments:[{name:"",type:{name:"HTMLElement",nullable:!0}}],return:{name:"void"}}},description:"A callback method invoked with the rendered button element, for focus purposes."}}}},"./src/replay/docs/mdx-helpers/ShowCase.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js");n("./src/replay/replay-default.css");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class s extends o.Component{constructor(e){super(e),a(this,"setProperties",e=>this.setState((e=>{const t={};return Object.keys(e).forEach(n=>{let o=e[n];switch(n){case"selectedAudioTrack":t.currentAudioTrack=o;break;case"selectedTextTrack":t.currentTextTrack=o;break;default:t[n]=o}}),t})(e))),this.state={}}render(){const e=this.setProperties,t=this.state,n=this.props,s=n.render,i=n.height,l=i?{width:"100%",height:i}:{width:"100%"};return o.createElement("div",null,o.createElement("div",{style:l}),o.createElement("div",{className:"replay-controls-bar",style:{justifyContent:"center"}},s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{setProperties:e}))))}}t.a=s,s.__docgenInfo={description:"",methods:[{name:"setProperties",docblock:null,modifiers:[],params:[{name:"props",type:{name:"PlaybackProps",alias:"PlaybackProps"}}],returns:null}],displayName:"ShowCase",props:{render:{required:!0,flowType:{name:"signature",type:"function",raw:"(VideoStreamState & { setProperties: PlaybackProps => void }) => React.Node",signature:{arguments:[{name:"",type:{name:"intersection",raw:"VideoStreamState & { setProperties: PlaybackProps => void }",elements:[{name:"VideoStreamState"},{name:"signature",type:"object",raw:"{ setProperties: PlaybackProps => void }",signature:{properties:[{key:"setProperties",value:{name:"signature",type:"function",raw:"PlaybackProps => void",signature:{arguments:[{name:"",type:{name:"PlaybackProps"}}],return:{name:"void"}},required:!0}}]}}]}}],return:{name:"ReactNode",raw:"React.Node"}}},description:""},height:{required:!1,flowType:{name:"string"},description:""}}}},"./src/replay/docs/mdx-helpers/SimpleTable.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const i={padding:0,tableLayout:"auto",boxShadow:"0 0 0 1px #CED4DE",borderSpacing:0,borderColor:"gray",borderCollapse:"collapse",borderStyle:"hidden",borderRadius:"4px",overflowY:"hidden",fontSize:"14px",color:"#13161F",width:"100%",display:"table"},l={color:"#7D899C",background:"#EEF1F5",textAlign:"left",fontSize:"14px",borderSpacing:0,borderCollapse:"collapse"},c={orderSpacing:0,borderCollapse:"collapse"},p={padding:"20px",verticalAlign:"top"},d=a({},p,{fontStyle:"italic",opacity:.5}),u=a({},p,{fontFamily:'"Source Code Pro",monospace',whiteSpace:"nowrap"}),m=({rows:e})=>{const t=e?e.map(e=>Object.values(e).join("-")).join("-"):"";if(e&&e.length){const n=Object.keys(e[0]);return o.createElement("table",{style:i},o.createElement("thead",{style:l},o.createElement("tr",{style:c},n.map(e=>o.createElement("th",{key:"header-"+e,style:p},e)))),o.createElement("tbody",null,e.map((e,n)=>o.createElement("tr",{key:t+"-row-"+n,style:c},Object.values(e).map((e,r)=>{return o.createElement("td",{key:t+"-cell-"+n+"-"+r,style:(a=e,""===a?d:u)},(e=>""===e?"none":e)(e));var a})))))}};t.a=m,m.__docgenInfo={description:"",methods:[],displayName:"SimpleTable",props:{rows:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}}],raw:"Array<{ [string]: string }>"},description:""}}}},"./src/replay/docs/props-footnote.md":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js");function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}class i extends r.a.Component{constructor(e){super(e),this.layout=null}render(){const e=this.props,t=e.components;s(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"p",components:t},"Props marked with \u21d8 are updated with the video streamer's ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/reference/observable-stream-state"}},"state property")," having the same name, when connected by the ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/connected-controls#connecting-the-controls"}},r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"connectControl()")," HOC"),". The \ufe0e",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties()")," callback prop is marked with \ufe0e\u21d7 because it is connected for changing the playback state. More info in the architecture description of ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/overview#arrows-and-boxes"}},"two-way data flow"),"."))}}i.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/replay-default.css":function(e,t,n){}}]);
//# sourceMappingURL=components-controls-goto-live-button-goto-live-button.37452ea1ad8b4153a011.js.map