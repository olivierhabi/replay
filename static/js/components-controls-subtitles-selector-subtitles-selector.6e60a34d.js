(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./src/replay/components/common.js":function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return o}),n.d(t,"k",function(){return a}),n.d(t,"g",function(){return i}),n.d(t,"d",function(){return s}),n.d(t,"f",function(){return c}),n.d(t,"h",function(){return u}),n.d(t,"i",function(){return f}),n.d(t,"j",function(){return d}),n.d(t,"c",function(){return b}),n.d(t,"b",function(){return g}),n.d(t,"e",function(){return h});var o="replay-";function a(e){for(var t=null==e?"":e,n=[],r=0;r<(arguments.length<=1?0:arguments.length-1);r++)(r+1<1||arguments.length<=r+1?void 0:arguments[r+1])&&n.push(t+(r+1<1||arguments.length<=r+1?void 0:arguments[r+1]));return n.join(" ")}var l=function(e){return e};function i(e){var t=e.classes,n=e.selectClasses,o=e.classNames,i=e.classNamePrefix;if(t&&n){var s=n(t);return Array.isArray(s)?s.filter(l).join(" "):s}if(o)return a.apply(void 0,[i].concat(r(o)))}function s(e,t){var n,r=(t||e.currentTarget).getBoundingClientRect();return n=e.touches&&e.touches.length>0?e.touches[0]:e.changedTouches&&e.changedTouches.length>0?e.changedTouches[0]:e,{x:Math.max(0,Math.min(n.pageX-r.left,r.width)),y:Math.max(0,Math.min(n.pageY-r.top,r.height)),width:r.width,height:r.height}}function c(e){return function(t){e.indexOf(t.key)>=0&&(t.preventDefault(),t.stopPropagation())}}var u=function(e,t){return e!==t&&(!(e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime())&&!(Number.isNaN(e)&&Number.isNaN(t)))},p=function(e){return null!=e&&e.constructor==={}.constructor},f=function(e,t){if(e===t)return!0;if(p(e)&&p(t)){var n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&(!(n.filter(function(n){return u(e[n],t[n])}).length>0)&&0===r.filter(function(n){return u(t[n],e[n])}).length)}if(Array.isArray(e)&&Array.isArray(t)&&e.length===t.length){for(var o=e.length;o--;)if(e[o]!==t[o])return!1;return!0}return!1};function m(e){if(null==e)return{};var t={},n=e;return Object.keys(e).forEach(function(e){p(n[e])?t[e]=m(n[e]):t[e]=n[e]}),t}function d(e,t){var n=m(e);if(t){var r=t;Object.getOwnPropertyNames(r).forEach(function(e){p(r[e])?p(n[e])?n[e]=d(n[e],r[e]):n[e]=m(r[e]):n[e]=r[e]})}return n}var y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return n&&0===e?"":e<10&&r?"0".concat(e).concat(t):"".concat(e).concat(t)},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=Math.round(e),r="";"number"!==typeof e||isNaN(e)||e===1/0?n=0:n<0&&(n=-n,r=t);var o=Math.floor(n/86400),a=86400*o,l=Math.floor((n-a)/3600),i=a+3600*l,s=Math.floor((n-i)/60),c=n-i-60*s;return r+y(o,".",!0,!1)+y(l,":",0===o)+y(s,":",!1)+y(c)},g=function(e){var t=e instanceof Date&&!isNaN(e.getTime()),n=0,r=0,o=0;return t&&null!=e&&(n=t?e.getHours():0,r=t?e.getMinutes():0,o=t?e.getSeconds():0),y(n,":",!1)+y(r,":",!1)+y(o)},h=function(e,t){var n=null;return{start:function(){n||(n=setInterval(e,1e3*t))},stop:function(){n&&(clearInterval(n),n=null)}}}},"./src/replay/components/controls/SubtitlesSelector/SubtitlesSelector.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),o=n("./src/replay/components/generic/Selector/Selector.js"),a=n("./src/replay/components/common.js");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(e){return e}).join(".")},m=function(e){var t=e.label,n=e.kind,r=void 0===n?"subtitles":n,o=e.language,a=void 0===o?"unknown":o;return t||("subtitles"!==r?"[".concat(a,"] ").concat(r):"[".concat(a,"]"))||""},d=function(e){return e.noTrack?{id:0,label:e.label||"",data:e}:{id:e.id||f(e.language,e.kind,e.origin)||e.label,label:m(e),data:e}},y=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=s(t).call(this,e),n=!o||"object"!==l(o)&&"function"!==typeof o?u(r):o,p(u(u(n)),"handleSelect",function(e){n.props.setProperties&&(e.noTrack?n.props.setProperties({selectedTextTrack:null}):n.props.setProperties({selectedTextTrack:e}))}),n.state={noSubtitlesItem:{noTrack:!0,label:n.props.noSubtitlesLabel}},n}var n,a,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.textTracks,n=e.currentTextTrack,a=e.label,l=e.toggleContent,i=e.classNamePrefix;if(Array.isArray(t)&&t.length>0){var s=[this.state.noSubtitlesItem].concat(t),c=this.state.noSubtitlesItem;if(n){var u=t.indexOf(n)+1;u>0&&(c=s[u])}return r.createElement(o.a,{items:s,itemMapper:d,classNamePrefix:i,className:"subtitles-selector",selectedItem:c,label:a,onSelect:this.handleSelect,reverseOrder:!0,expandedToggleContent:l,collapsedToggleContent:l})}return null}}])&&i(n.prototype,a),f&&i(n,f),t}();p(y,"defaultProps",{classNamePrefix:a.a}),p(y,"streamStateKeysForObservation",["textTracks","currentTextTrack"]),y.displayName="SubtitlesSelector",t.a=y,y.__docgenInfo={description:"",methods:[{name:"handleSelect",docblock:null,modifiers:[],params:[{name:"item",type:{name:"any"}}],returns:null}],displayName:"SubtitlesSelector",props:{classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},textTracks:{required:!1,flowType:{name:"Array",elements:[{name:"AvailableTrack"}],raw:"Array<AvailableTrack>"},description:"\u21d8\ufe0e The list of text tracks available for selection."},currentTextTrack:{required:!1,flowType:{name:"AvailableTrack"},description:"\u21d8 The currently displaying text track. Must be strict equal one of the items in the text track list. Set to null if no subtitles are displayed."},setProperties:{required:!1,flowType:{name:"signature",type:"function",raw:"({ selectedTextTrack: ?AvailableTrack }) => void",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{ selectedTextTrack: ?AvailableTrack }",signature:{properties:[{key:"selectedTextTrack",value:{name:"AvailableTrack",nullable:!0,required:!0}}]}}}],return:{name:"void"}}},description:"\u21d7 When one item is clicked, this callback is invoked with an object having an selectedTextTrack property with the textTrack object corresponding to the selection."},noSubtitlesLabel:{required:!0,flowType:{name:"string"},description:"The label to use on the selector option for not displaying subtitles."},toggleContent:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:"Element displayed in the control bar for expanding/collapsing the selector items."}}}},"./src/replay/components/controls/SubtitlesSelector/SubtitlesSelector.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),l=n("./node_modules/docz/dist/index.m.js"),i=n("./src/replay/components/controls/SubtitlesSelector/SubtitlesSelector.js"),s=n("./src/replay/docs/mdx-helpers/ShowCase.js"),c=n("./node_modules/react-feather/dist/index.js"),u=n("./src/replay/docs/mdx-helpers/SimpleTable.js"),p=n("./src/replay/docs/props-footnote.md");function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=y(this,b(t).call(this,e))).layout=null,n}var n,r,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=m(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"subtitlesselector"}},"SubtitlesSelector"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Control bar widget for controlling subtitle display and language selections."),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"summary"}},"Summary"),o.a.createElement(a.MDXTag,{name:"p",components:t},"The subtitles selector lists the stream's available text tracks, and controls what track to display, if any. The control is only rendered if there are one or more text tracks."),o.a.createElement(a.MDXTag,{name:"p",components:t},"The subtitles selector uses the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Selector />")," generic component, and is implemented similar patterns to ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<AudioSelector />")," and partly ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<QualitySelector />"),". Upon clicking on one selector item representing a track, it invokes ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties({ selectedTextTrack: track })")," where ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"track")," is the clicked selector item. The selector also contains one item for turning off display of subtitles. This item must be given a label through the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"noSubtitlesLabel"),' prop. If the "No subtitles" item is selected, ',o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties({ selectedTextTrack: null })")," is invoked."),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),o.a.createElement(l.Playground,{__codesandbox:"undefined",__position:0,__code:"() => {\n  const textTracks = [\n    { label: 'Finnish', language: 'fi', kind: 'subtitles' },\n    { label: 'German', language: 'de', kind: 'subtitles' },\n    { label: 'Spanish', languag: 'es', kind: 'subtitles' },\n  ]\n  return (\n    <ShowCase\n      height=\"90px\"\n      render={({ setProperties, currentTextTrack }) => (\n        <SubtitlesSelector\n          setProperties={setProperties}\n          currentTextTrack={currentTextTrack}\n          noSubtitlesLabel=\"No subtitles\"\n          toggleContent={<Type />}\n          textTracks={textTracks}\n        />\n      )}\n    />\n  )\n}",__scope:{props:this?this.props:n,SubtitlesSelector:i.a,ShowCase:s.a,Type:c.Type,SimpleTable:u.a,Footnote:p.a}},function(){var e=[{label:"Finnish",language:"fi",kind:"subtitles"},{label:"German",language:"de",kind:"subtitles"},{label:"Spanish",languag:"es",kind:"subtitles"}];return o.a.createElement(s.a,{height:"90px",render:function(t){var n=t.setProperties,r=t.currentTextTrack;return o.a.createElement(i.a,{setProperties:n,currentTextTrack:r,noSubtitlesLabel:"No subtitles",toggleContent:o.a.createElement(c.Type,null),textTracks:e})}})}),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),o.a.createElement(l.PropsTable,{of:i.a}),o.a.createElement(p.a,null),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"component-dom-with-class-names"}},"Component DOM with class names"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Please read the ",o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/custom-replay/skins-styles"}},"general principles")," for Replay class names and styling."),o.a.createElement(u.a,{rows:[{Element:"div","Class name":"subtitles-selector","Generic class name":"selector",States:"collapsed, expanded",Parent:""},{Element:"div","Class name":"selector-toggle","Generic class name":"toggle-button",States:"toggled-on, toggled-off",Parent:".subtitles-selector"},{Element:"div","Class name":"","Generic class name":"",States:"",Parent:".selector-toggle"},{Element:"div","Class name":"selector-items","Generic class name":"",States:"",Parent:".subtitles-selector"},{Element:"div (0..n)","Class name":"selector-item","Generic class name":"",States:"selected",Parent:".selector-items"},{Element:"div (0..n)","Class name":"","Generic class name":"",States:"",Parent:".selector-item"}]}))}}])&&d(n.prototype,r),f&&d(n,f),t}();h.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/components/generic/Selector/Selector.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),o=n("./src/replay/components/common.js"),a=n("./src/replay/components/generic/ToggleButton/ToggleButton.js");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){return e.selectorItem},m=function(e){return e.selectorItemSelected||e.selectorItem},d=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,c=new Array(i),f=0;f<i;f++)c[f]=arguments[f];return r=this,a=(e=s(t)).call.apply(e,[this].concat(c)),n=!a||"object"!==l(a)&&"function"!==typeof a?u(r):a,p(u(u(n)),"handleRef",function(e){n.props.onRef(e,n.props.index)}),p(u(u(n)),"handleClick",function(){return n.props.onSelect&&n.props.onSelect(n.props.item.data)}),p(u(u(n)),"handleKeyDown",Object(o.f)(["Enter"," "])),p(u(u(n)),"handleKeyUp",function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),n.handleClick())}),n}var n,a,d;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.className,n=e.classNamePrefix,a=e.classes,l=e.defaultItemClassName,i=e.item,s=e.isSelected,c=e.canReceiveFocus,u=e.selectedClassName,p=i.label,d=Object(o.g)({classes:a,classNamePrefix:n,selectClasses:s?m:f,classNames:[t,l,s?u:null]}),y=c?0:void 0;return r.createElement("div",{role:"option","aria-selected":s,className:d,ref:this.handleRef,onClick:this.handleClick,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,tabIndex:y},r.createElement("div",{tabIndex:-1},p))}}])&&i(n.prototype,a),d&&i(n,d),t}();function y(e,t,n,r){for(var o=(t?n.slice(0).reverse():n).concat(r),a=0;a<o.length;a++)if(o[a]===document.activeElement)if(e){if(a>0)for(var l=a-1;l>=0;l--){var i=o[l];if(i)return i.focus(),i}}else if(a<o.length-1)for(var s=a+1;s<o.length;s++){var c=o[s];if(c)return c.focus(),c}}function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}d.__docgenInfo={description:"",methods:[{name:"handleRef",docblock:null,modifiers:[],params:[{name:"element",type:{name:"HTMLElement",nullable:!0}}],returns:null},{name:"handleClick",docblock:null,modifiers:[],params:[],returns:null},{name:"handleKeyUp",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null}],displayName:"SelectorItem",props:{item:{required:!0,flowType:{name:"signature",type:"object",raw:"{\n  label: string,\n  id?: Id,\n  data?: any\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"id",value:{name:"Id",required:!1}},{key:"data",value:{name:"any",required:!1}}]}},description:""},index:{required:!0,flowType:{name:"number"},description:""},isSelected:{required:!0,flowType:{name:"boolean"},description:""},canReceiveFocus:{required:!0,flowType:{name:"boolean"},description:""},defaultItemClassName:{required:!0,flowType:{name:"string"},description:""},selectedClassName:{required:!0,flowType:{name:"string"},description:""},onSelect:{required:!1,flowType:{name:"signature",type:"function",raw:"any => void",signature:{arguments:[{name:"",type:{name:"any"}}],return:{name:"void"}}},description:""},onRef:{required:!0,flowType:{name:"signature",type:"function",raw:"(?HTMLElement, number) => void",signature:{arguments:[{name:"",type:{name:"HTMLElement",nullable:!0}},{name:"",type:{name:"number"}}],return:{name:"void"}}},description:""}}};var k="selector-item",S="selected",O=function(e){return e.selectorCollapsed||e.selector},E=function(e){return e.selectorExpanded||e.selector},j=function(e){return e.selectorItemsContainer},x=function(e){function t(e){var n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,a=h(t).call(this,e),n=!a||"object"!==b(a)&&"function"!==typeof a?w(o):a,T(w(w(n)),"focusableItems",[]),T(w(w(n)),"toggleElement",null),T(w(w(n)),"onToggleRef",function(e){n.toggleElement=e}),T(w(w(n)),"handleToggle",function(e){return n.setState({isExpanded:e})}),T(w(w(n)),"handleItemRef",function(e,t){n.focusableItems[t]=e}),T(w(w(n)),"renderSelectorItem",function(e,t){var o=n.props.itemMapper(e);return r.createElement(d,{key:o.id,item:o,index:t,onSelect:n.props.onSelect,onRef:n.handleItemRef,isSelected:e===n.props.selectedItem,canReceiveFocus:n.state.isExpanded,selectedClassName:S,defaultItemClassName:k,className:n.props.itemClassName,classes:n.props.classes,classNamePrefix:n.props.classNamePrefix})}),T(w(w(n)),"handleKeyDown",function(e){switch(e.key){case"ArrowUp":case"Up":return void e.preventDefault();case"ArrowDown":case"Down":return void(n.state.isExpanded&&e.preventDefault());default:return}}),T(w(w(n)),"handleKeyUp",function(e){n.state.isExpanded?("ArrowUp"!==e.key&&"Up"!==e.key||(e.preventDefault(),y(!0,n.props.reverseOrder||!1,n.focusableItems,n.toggleElement)),("ArrowDown"===e.key||"Down"===e.key)&&(e.preventDefault(),y(!1,n.props.reverseOrder||!1,n.focusableItems,n.toggleElement)===n.toggleElement&&n.setState({isExpanded:!1}))):"ArrowUp"!==e.key&&"Up"!==e.key||(e.preventDefault(),n.setState({isExpanded:!0}))}),T(w(w(n)),"handleMouseLeave",function(){n.setState({isExpanded:!1})}),n.state={isExpanded:!1},n}var n,l,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,r["Component"]),n=t,(l=[{key:"render",value:function(){var e=this.props,t=e.className,n=e.classNamePrefix,l=e.classes,i=e.items,s=e.collapsedToggleContent,c=e.expandedToggleContent,u=e.reverseOrder,p=e.label,f=i?u?i.map(this.renderSelectorItem).reverse():i.map(this.renderSelectorItem):null,m=Object(o.g)({classes:l,classNamePrefix:n,selectClasses:this.state.isExpanded?E:O,classNames:[t,"selector",this.state.isExpanded?"expanded":"collapsed"]}),d=Object(o.g)({classes:l,selectClasses:j,classNamePrefix:n,classNames:["selector-items"]}),y=l?{toggleButtonOff:l.selectorToggle||l.selectorToggleOff,toggleButtonOn:l.selectorToggleOn}:null;return r.createElement("div",{className:m,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown,onMouseLeave:this.handleMouseLeave},r.createElement(a.a,{isOn:this.state.isExpanded,className:"selector-toggle",classNamePrefix:n,classes:y,label:p,onToggle:this.handleToggle,onRef:this.onToggleRef,toggledOffContent:s,toggledOnContent:c}),r.createElement("div",{role:"listbox",className:d},f))}}])&&g(n.prototype,l),i&&g(n,i),t}();T(x,"defaultProps",{useDefaultClassNaming:!0});t.a=x;x.__docgenInfo={description:"",methods:[{name:"onToggleRef",docblock:null,modifiers:[],params:[{name:"toggleElement",type:{name:"HTMLElement",nullable:!0}}],returns:null},{name:"handleToggle",docblock:null,modifiers:[],params:[{name:"isOn",type:{name:"boolean"}}],returns:null},{name:"handleItemRef",docblock:null,modifiers:[],params:[{name:"itemElement",type:{name:"HTMLElement",nullable:!0}},{name:"index",type:{name:"number"}}],returns:null},{name:"renderSelectorItem",docblock:null,modifiers:[],params:[{name:"item",type:{name:"any"}},{name:"index",type:{name:"number"}}],returns:null},{name:"handleKeyDown",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null},{name:"handleKeyUp",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null},{name:"handleMouseLeave",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Selector",props:{useDefaultClassNaming:{defaultValue:{value:"true",computed:!1},required:!1},items:{required:!0,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"},description:""},selectedItem:{required:!1,flowType:{name:"any"},description:""},reverseOrder:{required:!1,flowType:{name:"boolean"},description:""},itemClassName:{required:!1,flowType:{name:"string"},description:""},collapsedToggleContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},expandedToggleContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},label:{required:!1,flowType:{name:"string"},description:""},itemMapper:{required:!0,flowType:{name:"signature",type:"function",raw:"any => ItemData",signature:{arguments:[{name:"",type:{name:"any"}}],return:{name:"ItemData"}}},description:""},onSelect:{required:!1,flowType:{name:"signature",type:"function",raw:"any => void",signature:{arguments:[{name:"",type:{name:"any"}}],return:{name:"void"}}},description:""}}}},"./src/replay/components/generic/ToggleButton/ToggleButton.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),o=n("./src/replay/components/common.js");function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){return e.toggleButtonOff||e.toggleButton},f=function(e){return e.toggleButtonOn||e.toggleButton},m=function(e){function t(){var e,n,r,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,p=new Array(s),f=0;f<s;f++)p[f]=arguments[f];return r=this,l=(e=i(t)).call.apply(e,[this].concat(p)),n=!l||"object"!==a(l)&&"function"!==typeof l?c(r):l,u(c(c(n)),"handleClick",function(){return n.props.onToggle&&n.props.onToggle(!n.props.isOn)}),u(c(c(n)),"handleKeyDown",Object(o.f)(["Enter"," "])),u(c(c(n)),"handleKeyUp",function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),n.handleClick())}),n}var n,m,d;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r["Component"]),n=t,(m=[{key:"render",value:function(){var e=this.props,t=e.isOn,n=e.label,a=e.className,l=e.classNamePrefix,i=e.toggledOnContent,s=e.toggledOffContent,c=e.onRef,u=e.classes,m=t?"toggled-on":"toggled-off",d=Object(o.g)({classes:u,selectClasses:t?f:p,classNamePrefix:l,classNames:[a,"toggle-button",m]}),y=t?i:s;return r.createElement("div",{role:"button","aria-pressed":t,title:n,onClick:this.handleClick,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown,ref:c,className:d,tabIndex:0},r.createElement("div",{tabIndex:-1},y))}}])&&l(n.prototype,m),d&&l(n,d),t}();u(m,"defaultProps",{useDefaultClassNaming:!0}),t.a=m,m.__docgenInfo={description:"Renders a button with two states - toggled on and off. When clicked, it reports back the opposite state.",methods:[{name:"handleClick",docblock:null,modifiers:[],params:[],returns:null},{name:"handleKeyUp",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null}],displayName:"ToggleButton",props:{useDefaultClassNaming:{defaultValue:{value:"true",computed:!1},required:!1},isOn:{required:!1,flowType:{name:"boolean"},description:"Set to true if the button should be in the toggled on mode."},label:{required:!1,flowType:{name:"string"},description:"The label will appear in the title attribute of the root DOM element of the toggle button."},toggledOffContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed when the button is toggled off."},toggledOnContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed when the button is toggled on."},onToggle:{required:!1,flowType:{name:"signature",type:"function",raw:"boolean => void",signature:{arguments:[{name:"",type:{name:"boolean"}}],return:{name:"void"}}},description:"A callback method that will be invoked when the button is clicked and the value toggled. If the button has been toggled on, true is passed to the callback."},onRef:{required:!1,flowType:{name:"signature",type:"function",raw:"(?HTMLElement) => void",signature:{arguments:[{name:"",type:{name:"HTMLElement",nullable:!0}}],return:{name:"void"}}},description:"A callback method invoked with the rendered button element, for focus purposes."}}}},"./src/replay/docs/mdx-helpers/ShowCase.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js");n("./src/replay/replay-default.css");function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e){var t={};return Object.keys(e).forEach(function(n){var r=e[n];switch(n){case"selectedAudioTrack":t.currentAudioTrack=r;break;case"selectedTextTrack":t.currentTextTrack=r;break;default:t[n]=r}}),t},p=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=l(t).call(this,e),n=!a||"object"!==o(a)&&"function"!==typeof a?s(r):a,c(s(s(n)),"setProperties",function(e){return n.setState(u(e))}),n.state={},n}var n,p,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,r["Component"]),n=t,(p=[{key:"render",value:function(){var e=this.setProperties,t=this.state,n=this.props,o=n.render,a=n.height,l=a?{width:"100%",height:a}:{width:"100%"};return r.createElement("div",null,r.createElement("div",{style:l}),r.createElement("div",{className:"replay-controls-bar",style:{justifyContent:"center"}},o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){c(e,t,n[t])})}return e}({},t,{setProperties:e}))))}}])&&a(n.prototype,p),f&&a(n,f),t}();t.a=p,p.__docgenInfo={description:"",methods:[{name:"setProperties",docblock:null,modifiers:[],params:[{name:"props",type:{name:"PlaybackProps",alias:"PlaybackProps"}}],returns:null}],displayName:"ShowCase",props:{render:{required:!0,flowType:{name:"signature",type:"function",raw:"(VideoStreamState & { setProperties: PlaybackProps => void }) => React.Node",signature:{arguments:[{name:"",type:{name:"intersection",raw:"VideoStreamState & { setProperties: PlaybackProps => void }",elements:[{name:"VideoStreamState"},{name:"signature",type:"object",raw:"{ setProperties: PlaybackProps => void }",signature:{properties:[{key:"setProperties",value:{name:"signature",type:"function",raw:"PlaybackProps => void",signature:{arguments:[{name:"",type:{name:"PlaybackProps"}}],return:{name:"void"}},required:!0}}]}}]}}],return:{name:"ReactNode",raw:"React.Node"}}},description:""},height:{required:!1,flowType:{name:"string"},description:""}}}},"./src/replay/docs/mdx-helpers/SimpleTable.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js");function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={padding:0,tableLayout:"auto",boxShadow:"0 0 0 1px #CED4DE",borderSpacing:0,borderColor:"gray",borderCollapse:"collapse",borderStyle:"hidden",borderRadius:"4px",overflowY:"hidden",fontSize:"14px",color:"#13161F",width:"100%",display:"table"},i={color:"#7D899C",background:"#EEF1F5",textAlign:"left",fontSize:"14px",borderSpacing:0,borderCollapse:"collapse"},s={orderSpacing:0,borderCollapse:"collapse"},c={padding:"20px",verticalAlign:"top"},u=o({},c,{fontStyle:"italic",opacity:.5}),p=o({},c,{fontFamily:'"Source Code Pro",monospace',whiteSpace:"nowrap"}),f=function(e){var t=e.rows,n=t?t.map(function(e){return Object.values(e).join("-")}).join("-"):"";if(t&&t.length){var o=Object.keys(t[0]);return r.createElement("table",{style:l},r.createElement("thead",{style:i},r.createElement("tr",{style:s},o.map(function(e){return r.createElement("th",{key:"header-"+e,style:c},e)}))),r.createElement("tbody",null,t.map(function(e,t){return r.createElement("tr",{key:n+"-row-"+t,style:s},Object.values(e).map(function(e,o){return r.createElement("td",{key:n+"-cell-"+t+"-"+o,style:(a=e,""===a?u:p)},function(e){return""===e?"none":e}(e));var a}))})))}};t.a=f,f.__docgenInfo={description:"",methods:[],displayName:"SimpleTable",props:{rows:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}}],raw:"Array<{ [string]: string }>"},description:""}}}},"./src/replay/docs/props-footnote.md":function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,u(t).call(this,e))).layout=null,n}var n,r,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components;i(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"p",components:t},"Props marked with \u21d8 are updated with the video streamer's ",o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/reference/observable-stream-state"}},"state property")," having the same name, when connected by the ",o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/connected-controls#connecting-the-controls"}},o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"connectControl()")," HOC"),". The \ufe0e",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties()")," callback prop is marked with \ufe0e\u21d7 because it is connected for changing the playback state. More info in the architecture description of ",o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/overview#arrows-and-boxes"}},"two-way data flow"),"."))}}])&&s(n.prototype,r),l&&s(n,l),t}();f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/replay-default.css":function(e,t,n){}}]);
//# sourceMappingURL=components-controls-subtitles-selector-subtitles-selector.40378a7a57184a431b29.js.map