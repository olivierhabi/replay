(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/replay/components/controls/QualitySelector/QualitySelector.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),o=n("./src/replay/components/generic/Selector/Selector.js"),a=n("./src/replay/components/common.js");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return r=this,o=(e=s(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==l(o)&&"function"!==typeof o?c(r):o,p(c(c(n)),"handleSelect",function(e){n.props.setProperties&&("fix-bitrate"===n.props.selectionStrategy?n.props.setProperties({bitrateFix:e}):n.props.setProperties({bitrateCap:e}))}),p(c(c(n)),"bitrateToItem",function(e){return{id:e,label:e===1/0?n.props.autoLabel:n.props.formatBitrateLabel(e,e===n.props.currentBitrate),data:e}}),p(c(c(n)),"isSelected",function(e,t,r){var o=n.props,a=o.bitrateFix,l=o.bitrateCap,i=o.selectionStrategy,s=null!=a&&null!=l?"fix-bitrate"===i?a:l:a||l;return"min"===s?1===t:"max"===s?t===r.length-1:e===s}),n}var n,a,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.bitrates,n=e.label,a=e.toggleContent,l=e.classNamePrefix;if(Array.isArray(t)&&t.length>1){var i=[1/0].concat(t),s=i.filter(this.isSelected)[0]||i[0];return r.createElement(o.a,{items:i,itemMapper:this.bitrateToItem,classNamePrefix:l,className:"quality-selector",selectedItem:s,label:n,onSelect:this.handleSelect,reverseOrder:!0,expandedToggleContent:a,collapsedToggleContent:a})}return null}}])&&i(n.prototype,a),m&&i(n,m),t}();p(m,"defaultProps",{classNamePrefix:a.a,selectionStrategy:"cap-bitrate"}),p(m,"streamStateKeysForObservation",["bitrates","currentBitrate","bitrateFix","bitrateCap"]),m.displayName="QualitySelector",t.a=m,m.__docgenInfo={description:"",methods:[{name:"handleSelect",docblock:null,modifiers:[],params:[{name:"bitrate",type:{name:"number"}}],returns:null},{name:"bitrateToItem",docblock:null,modifiers:[],params:[{name:"bitrate",type:{name:"number"}}],returns:null},{name:"isSelected",docblock:null,modifiers:[],params:[{name:"bitrate",type:{name:"number"}},{name:"index",type:{name:"number"}},{name:"arr",type:{name:"Array",elements:[{name:"number"}],raw:"Array<number>",alias:"Array"}}],returns:null}],displayName:"QualitySelector",props:{classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},selectionStrategy:{defaultValue:{value:"'cap-bitrate'",computed:!1},required:!1,flowType:{name:"union",raw:"'cap-bitrate' | 'fix-bitrate'",elements:[{name:"literal",value:"'cap-bitrate'"},{name:"literal",value:"'fix-bitrate'"}]},description:"Configures whether the selector should specify bitrate cap or fixing."},bitrates:{required:!1,flowType:{name:"Array",elements:[{name:"number"}],raw:"Array<number>"},description:"\u21d8\ufe0e The list of bitrates available for adaptive selection, and for being fixed or set as cap level."},currentBitrate:{required:!1,flowType:{name:"number"},description:"\u21d8\ufe0e The currently playing bitrate."},bitrateFix:{required:!1,flowType:{name:"number",nullable:!0},description:"\u21d8\ufe0e If playback is (already) fixed to one bitrate, this prop is set."},bitrateCap:{required:!1,flowType:{name:"number",nullable:!0},description:"\u21d8\ufe0e If adaptive bitrate selection is (already) capped at a level, this prop is set."},toggleContent:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:"The content of the toggle button of the selector."},setProperties:{required:!1,flowType:{name:"signature",type:"function",raw:"({ bitrateFix: ?number } | { bitrateCap: ?number }) => void",signature:{arguments:[{name:"",type:{name:"union",raw:"{ bitrateFix: ?number } | { bitrateCap: ?number }",elements:[{name:"signature",type:"object",raw:"{ bitrateFix: ?number }",signature:{properties:[{key:"bitrateFix",value:{name:"number",nullable:!0,required:!0}}]}},{name:"signature",type:"object",raw:"{ bitrateCap: ?number }",signature:{properties:[{key:"bitrateCap",value:{name:"number",nullable:!0,required:!0}}]}}]}}],return:{name:"void"}}},description:"\u21d7 When one item is clicked, this callback is invoked with an object having a property with either the name bitrateCap or bitrateFix and a value according to the selected bitrate. For the auto option, the value is Infinity."},autoLabel:{required:!0,flowType:{name:"string"},description:"The label for the selector item used for resetting capped or fixed bitrate."},formatBitrateLabel:{required:!0,flowType:{name:"signature",type:"function",raw:"(number, boolean) => string",signature:{arguments:[{name:"",type:{name:"number"}},{name:"",type:{name:"boolean"}}],return:{name:"string"}}},description:"Should return the item text to be displayed for each bitrate. The second argument indicates if the bitrate is currently playing."}}}},"./src/replay/components/generic/Selector/Selector.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),o=n("./src/replay/components/common.js"),a=n("./src/replay/components/generic/ToggleButton/ToggleButton.js");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){return e.selectorItem},d=function(e){return e.selectorItemSelected||e.selectorItem},f=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,u=new Array(i),m=0;m<i;m++)u[m]=arguments[m];return r=this,a=(e=s(t)).call.apply(e,[this].concat(u)),n=!a||"object"!==l(a)&&"function"!==typeof a?c(r):a,p(c(c(n)),"handleRef",function(e){n.props.onRef(e,n.props.index)}),p(c(c(n)),"handleClick",function(){return n.props.onSelect&&n.props.onSelect(n.props.item.data)}),p(c(c(n)),"handleKeyDown",Object(o.f)(["Enter"," "])),p(c(c(n)),"handleKeyUp",function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),n.handleClick())}),n}var n,a,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.className,n=e.classNamePrefix,a=e.classes,l=e.defaultItemClassName,i=e.item,s=e.isSelected,u=e.canReceiveFocus,c=e.selectedClassName,p=i.label,f=Object(o.g)({classes:a,classNamePrefix:n,selectClasses:s?d:m,classNames:[t,l,s?c:null]}),y=u?0:void 0;return r.createElement("div",{role:"option","aria-selected":s,className:f,ref:this.handleRef,onClick:this.handleClick,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,tabIndex:y},r.createElement("div",{tabIndex:-1},p))}}])&&i(n.prototype,a),f&&i(n,f),t}();function y(e,t,n,r){for(var o=(t?n.slice(0).reverse():n).concat(r),a=0;a<o.length;a++)if(o[a]===document.activeElement)if(e){if(a>0)for(var l=a-1;l>=0;l--){var i=o[l];if(i)return i.focus(),i}}else if(a<o.length-1)for(var s=a+1;s<o.length;s++){var u=o[s];if(u)return u.focus(),u}}function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}f.__docgenInfo={description:"",methods:[{name:"handleRef",docblock:null,modifiers:[],params:[{name:"element",type:{name:"HTMLElement",nullable:!0}}],returns:null},{name:"handleClick",docblock:null,modifiers:[],params:[],returns:null},{name:"handleKeyUp",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null}],displayName:"SelectorItem",props:{item:{required:!0,flowType:{name:"signature",type:"object",raw:"{\n  label: string,\n  id?: Id,\n  data?: any\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"id",value:{name:"Id",required:!1}},{key:"data",value:{name:"any",required:!1}}]}},description:""},index:{required:!0,flowType:{name:"number"},description:""},isSelected:{required:!0,flowType:{name:"boolean"},description:""},canReceiveFocus:{required:!0,flowType:{name:"boolean"},description:""},defaultItemClassName:{required:!0,flowType:{name:"string"},description:""},selectedClassName:{required:!0,flowType:{name:"string"},description:""},onSelect:{required:!1,flowType:{name:"signature",type:"function",raw:"any => void",signature:{arguments:[{name:"",type:{name:"any"}}],return:{name:"void"}}},description:""},onRef:{required:!0,flowType:{name:"signature",type:"function",raw:"(?HTMLElement, number) => void",signature:{arguments:[{name:"",type:{name:"HTMLElement",nullable:!0}},{name:"",type:{name:"number"}}],return:{name:"void"}}},description:""}}};var O="selector-item",k="selected",x=function(e){return e.selectorCollapsed||e.selector},S=function(e){return e.selectorExpanded||e.selector},E=function(e){return e.selectorItemsContainer},C=function(e){function t(e){var n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,a=h(t).call(this,e),n=!a||"object"!==b(a)&&"function"!==typeof a?w(o):a,T(w(w(n)),"focusableItems",[]),T(w(w(n)),"toggleElement",null),T(w(w(n)),"onToggleRef",function(e){n.toggleElement=e}),T(w(w(n)),"handleToggle",function(e){return n.setState({isExpanded:e})}),T(w(w(n)),"handleItemRef",function(e,t){n.focusableItems[t]=e}),T(w(w(n)),"renderSelectorItem",function(e,t){var o=n.props.itemMapper(e);return r.createElement(f,{key:o.id,item:o,index:t,onSelect:n.props.onSelect,onRef:n.handleItemRef,isSelected:e===n.props.selectedItem,canReceiveFocus:n.state.isExpanded,selectedClassName:k,defaultItemClassName:O,className:n.props.itemClassName,classes:n.props.classes,classNamePrefix:n.props.classNamePrefix})}),T(w(w(n)),"handleKeyDown",function(e){switch(e.key){case"ArrowUp":case"Up":return void e.preventDefault();case"ArrowDown":case"Down":return void(n.state.isExpanded&&e.preventDefault());default:return}}),T(w(w(n)),"handleKeyUp",function(e){n.state.isExpanded?("ArrowUp"!==e.key&&"Up"!==e.key||(e.preventDefault(),y(!0,n.props.reverseOrder||!1,n.focusableItems,n.toggleElement)),("ArrowDown"===e.key||"Down"===e.key)&&(e.preventDefault(),y(!1,n.props.reverseOrder||!1,n.focusableItems,n.toggleElement)===n.toggleElement&&n.setState({isExpanded:!1}))):"ArrowUp"!==e.key&&"Up"!==e.key||(e.preventDefault(),n.setState({isExpanded:!0}))}),T(w(w(n)),"handleMouseLeave",function(){n.setState({isExpanded:!1})}),n.state={isExpanded:!1},n}var n,l,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,r["Component"]),n=t,(l=[{key:"render",value:function(){var e=this.props,t=e.className,n=e.classNamePrefix,l=e.classes,i=e.items,s=e.collapsedToggleContent,u=e.expandedToggleContent,c=e.reverseOrder,p=e.label,m=i?c?i.map(this.renderSelectorItem).reverse():i.map(this.renderSelectorItem):null,d=Object(o.g)({classes:l,classNamePrefix:n,selectClasses:this.state.isExpanded?S:x,classNames:[t,"selector",this.state.isExpanded?"expanded":"collapsed"]}),f=Object(o.g)({classes:l,selectClasses:E,classNamePrefix:n,classNames:["selector-items"]}),y=l?{toggleButtonOff:l.selectorToggle||l.selectorToggleOff,toggleButtonOn:l.selectorToggleOn}:null;return r.createElement("div",{className:d,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown,onMouseLeave:this.handleMouseLeave},r.createElement(a.a,{isOn:this.state.isExpanded,className:"selector-toggle",classNamePrefix:n,classes:y,label:p,onToggle:this.handleToggle,onRef:this.onToggleRef,toggledOffContent:s,toggledOnContent:u}),r.createElement("div",{role:"listbox",className:f},m))}}])&&g(n.prototype,l),i&&g(n,i),t}();T(C,"defaultProps",{useDefaultClassNaming:!0});t.a=C;C.__docgenInfo={description:"",methods:[{name:"onToggleRef",docblock:null,modifiers:[],params:[{name:"toggleElement",type:{name:"HTMLElement",nullable:!0}}],returns:null},{name:"handleToggle",docblock:null,modifiers:[],params:[{name:"isOn",type:{name:"boolean"}}],returns:null},{name:"handleItemRef",docblock:null,modifiers:[],params:[{name:"itemElement",type:{name:"HTMLElement",nullable:!0}},{name:"index",type:{name:"number"}}],returns:null},{name:"renderSelectorItem",docblock:null,modifiers:[],params:[{name:"item",type:{name:"any"}},{name:"index",type:{name:"number"}}],returns:null},{name:"handleKeyDown",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null},{name:"handleKeyUp",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null},{name:"handleMouseLeave",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Selector",props:{useDefaultClassNaming:{defaultValue:{value:"true",computed:!1},required:!1},items:{required:!0,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"},description:""},selectedItem:{required:!1,flowType:{name:"any"},description:""},reverseOrder:{required:!1,flowType:{name:"boolean"},description:""},itemClassName:{required:!1,flowType:{name:"string"},description:""},collapsedToggleContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},expandedToggleContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},label:{required:!1,flowType:{name:"string"},description:""},itemMapper:{required:!0,flowType:{name:"signature",type:"function",raw:"any => ItemData",signature:{arguments:[{name:"",type:{name:"any"}}],return:{name:"ItemData"}}},description:""},onSelect:{required:!1,flowType:{name:"signature",type:"function",raw:"any => void",signature:{arguments:[{name:"",type:{name:"any"}}],return:{name:"void"}}},description:""}}}},"./src/replay/components/generic/ToggleButton/ToggleButton.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),o=n("./src/replay/components/common.js");function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){return e.toggleButtonOff||e.toggleButton},m=function(e){return e.toggleButtonOn||e.toggleButton},d=function(e){function t(){var e,n,r,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,p=new Array(s),m=0;m<s;m++)p[m]=arguments[m];return r=this,l=(e=i(t)).call.apply(e,[this].concat(p)),n=!l||"object"!==a(l)&&"function"!==typeof l?u(r):l,c(u(u(n)),"handleClick",function(){return n.props.onToggle&&n.props.onToggle(!n.props.isOn)}),c(u(u(n)),"handleKeyDown",Object(o.f)(["Enter"," "])),c(u(u(n)),"handleKeyUp",function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),n.handleClick())}),n}var n,d,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r["Component"]),n=t,(d=[{key:"render",value:function(){var e=this.props,t=e.isOn,n=e.label,a=e.className,l=e.classNamePrefix,i=e.toggledOnContent,s=e.toggledOffContent,u=e.onRef,c=e.classes,d=t?"toggled-on":"toggled-off",f=Object(o.g)({classes:c,selectClasses:t?m:p,classNamePrefix:l,classNames:[a,"toggle-button",d]}),y=t?i:s;return r.createElement("div",{role:"button","aria-pressed":t,title:n,onClick:this.handleClick,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown,ref:u,className:f,tabIndex:0},r.createElement("div",{tabIndex:-1},y))}}])&&l(n.prototype,d),f&&l(n,f),t}();c(d,"defaultProps",{useDefaultClassNaming:!0}),t.a=d,d.__docgenInfo={description:"Renders a button with two states - toggled on and off. When clicked, it reports back the opposite state.",methods:[{name:"handleClick",docblock:null,modifiers:[],params:[],returns:null},{name:"handleKeyUp",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null}],displayName:"ToggleButton",props:{useDefaultClassNaming:{defaultValue:{value:"true",computed:!1},required:!1},isOn:{required:!1,flowType:{name:"boolean"},description:"Set to true if the button should be in the toggled on mode."},label:{required:!1,flowType:{name:"string"},description:"The label will appear in the title attribute of the root DOM element of the toggle button."},toggledOffContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed when the button is toggled off."},toggledOnContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed when the button is toggled on."},onToggle:{required:!1,flowType:{name:"signature",type:"function",raw:"boolean => void",signature:{arguments:[{name:"",type:{name:"boolean"}}],return:{name:"void"}}},description:"A callback method that will be invoked when the button is clicked and the value toggled. If the button has been toggled on, true is passed to the callback."},onRef:{required:!1,flowType:{name:"signature",type:"function",raw:"(?HTMLElement) => void",signature:{arguments:[{name:"",type:{name:"HTMLElement",nullable:!0}}],return:{name:"void"}}},description:"A callback method invoked with the rendered button element, for focus purposes."}}}}}]);
//# sourceMappingURL=components-controls-quality-selector-quality-selector~docs-advanced-playback-adaptive-streaming~docs~7a24572f.40378a7a57184a431b29.js.map