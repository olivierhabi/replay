(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/replay/components/controls/TimeDisplay/TimeDisplay.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n("./src/replay/components/common.js"),a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(r.c)(null==e?0:Math[n?"min":"max"](0,e),t)},i=function(e){var t,n=e.position,i=e.duration,s=e.absolutePosition,l=e.playMode,c=e.liveDisplayMode,p=void 0===c?"clock-time":c,m=e.negativeMark,u=e.label,d=e.positionLabel,f=e.durationLabel,y=(e.clockTimeLabel,e.classNamePrefix),h=void 0===y?r.a:y;return"ondemand"===l?o.createElement("div",{className:Object(r.k)(h,"time-display"),title:u},o.createElement("span",{className:Object(r.k)(h,"time-display-position"),title:d},a(n,m)),o.createElement("span",{className:Object(r.k)(h,"time-display-duration"),title:f},a(i,m))):("live-offset"!==p||"livedvr"!==l)&&((t=s)instanceof Date&&!isNaN(t.getTime())&&t.getTime()>15147612e5)?o.createElement("div",{className:Object(r.k)(h,"time-display","time-display-no-duration"),title:u},o.createElement("span",{className:Object(r.k)(h,"time-display-clock-time"),title:d},Object(r.b)(s))):o.createElement("div",{className:Object(r.k)(h,"time-display"),title:u},o.createElement("span",{className:Object(r.k)(h,"time-display-position"),title:d},a((n||i||0)-(i||0),m,!0)),"livedvr"===l&&o.createElement("span",{className:Object(r.k)(h,"time-display-duration"),title:f},a(i,m)))};i.streamStateKeysForObservation=["position","duration","absolutePosition","playMode"],t.a=i,i.__docgenInfo={description:"",methods:[],displayName:"TimeDisplay",props:{liveDisplayMode:{defaultValue:{value:"'clock-time'",computed:!1},required:!1,flowType:{name:"union",raw:"'clock-time' | 'live-offset'",elements:[{name:"literal",value:"'clock-time'"},{name:"literal",value:"'live-offset'"}]},description:"When set to 'live-offset', DVR times will be displayed as offsets from the live edge. Default is 'clock-time'."},classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},position:{required:!1,flowType:{name:"number"},description:"\u21d8\ufe0e The relative playback position, used for on demand position and timeshift offset display."},duration:{required:!1,flowType:{name:"number"},description:"\u21d8\ufe0e The duration of the stream, used for on demand position and timeshift offset display."},absolutePosition:{required:!1,flowType:{name:"Date",nullable:!0},description:"\u21d8\ufe0e The clock time, used for live streams and DVR streams when liveDisplayMode is set to 'live-offset'."},playMode:{required:!1,flowType:{name:"PlayMode"},description:"\u21d8\ufe0e Play mode is used to decide what times to display."},negativeMark:{required:!1,flowType:{name:"string"},description:""},positionLabel:{required:!1,flowType:{name:"string"},description:""},durationLabel:{required:!1,flowType:{name:"string"},description:""},clockTimeLabel:{required:!1,flowType:{name:"string"},description:""}}}},"./src/replay/components/controls/Timeline/Timeline.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n("./src/replay/components/common.js"),a=n("./src/replay/components/generic/Slider/Slider.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=l(t).call(this,e),n=!r||"object"!==i(r)&&"function"!==typeof r?p(o):r,m(p(p(n)),"timeoutId",void 0),m(p(p(n)),"handleSliderChange",function(e){n.props.setProperties&&n.props.setProperties({position:e})}),m(p(p(n)),"handleDrag",function(){n.setState({isDragging:!0}),n.timeoutId&&clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.setState({isDragging:!1}),n.timeoutId=null},800)}),n.state={isDragging:!1},n}var n,r,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o["Component"]),n=t,(r=[{key:"componentWillUnmount",value:function(){this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}},{key:"render",value:function(){var e=this.props,t=e.position,n=e.duration,r=e.isSeeking,i=e.label,s=e.classNamePrefix,l=e.children,c=e.handleContent,p=e.trackContent,m=e.reduceDragGlitch;return o.createElement(a.a,{label:i,value:t,maxValue:n,isUpdateBlocked:r||this.state.isDragging,handleContent:c,trackContent:p,onValueChange:this.handleSliderChange,onDrag:m?this.handleDrag:void 0,classNamePrefix:s,className:"timeline",trackClassName:"timeline-track",handleClassName:"timeline-handle"},l)}}])&&s(n.prototype,r),u&&s(n,u),t}();m(u,"defaultProps",{classNamePrefix:r.a,reduceDragGlitch:!0}),m(u,"streamStateKeysForObservation",["position","duration","isSeeking"]),t.a=u,u.__docgenInfo={description:"",methods:[{name:"handleSliderChange",docblock:null,modifiers:[],params:[{name:"position",type:{name:"number"}}],returns:null},{name:"handleDrag",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Timeline",props:{classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},reduceDragGlitch:{defaultValue:{value:"true",computed:!1},required:!1,flowType:{name:"boolean"},description:"If set to false, glitches after dragging completes will occur, while the stream reports a position before seeking is performed. When true glitches are prevented by activating a timer for a small time after dragging has completed."},position:{required:!1,flowType:{name:"number"},description:"\u21d8\ufe0e The current playback position in seconds (with decimals). A value between 0 and duration."},duration:{required:!1,flowType:{name:"number"},description:"\u21d8\ufe0e The stream's duration or seekable range in seconds (with decimals)."},isSeeking:{required:!1,flowType:{name:"boolean"},description:"\u21d8\ufe0e True if a seeking operation is ongoing. This prop is used by the component to avoid glitching while dragging."},children:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"Elements that will display on top of the timeline slider track, but below the timeline handle."},handleContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"Can be set for custom graphics or content in the slider handle."},trackContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"Can be set for custom graphics or content representing the slider track."},setProperties:{required:!1,flowType:{name:"signature",type:"function",raw:"({ position: number }) => void",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{ position: number }",signature:{properties:[{key:"position",value:{name:"number",required:!0}}]}}}],return:{name:"void"}}},description:"\u21d7 If the volume slider handle position is changed, this callback is invoked with { position: newPosition }"}}}},"./src/replay/components/controls/Timeline/Timeline.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v});var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),s=n("./src/replay/components/controls/Timeline/Timeline.js"),l=n("./src/replay/components/controls/TimeDisplay/TimeDisplay.js"),c=n("./src/replay/components/controls/TimelineInformation/TimelineInformation.js"),p=n("./src/replay/docs/mdx-helpers/ShowCase.js"),m=n("./src/replay/docs/mdx-helpers/SimpleTable.js"),u=n("./src/replay/docs/props-footnote.md");function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=h(this,b(t).call(this,e))).layout=null,n}var n,o,d;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components,n=f(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"timeline-control"}},"Timeline control"),r.a.createElement(a.MDXTag,{name:"p",components:t},"A ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Slider/>")," displaying the playback progress from start to end. It can be used for seeking in the stream."),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"summary"}},"Summary"),r.a.createElement(a.MDXTag,{name:"p",components:t},"Technically, it presenting the seekable range of the open stream, and changing the handle position by click or dragging, changes the playback position (i.e. seeks). It operates both on live DVR streams and on demand streams. Regardless of the stream type, the video streamer exposes stream state properties for ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"position")," and ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"duration"),". Correspondingly, the ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Timeline/>")," component has two props with the same names. The rule for those values is ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"0")," \u2264 ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"position")," \u2264 ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"duration"),". I.e. the position is relative to the first available position in the seekable range, and the value will not exceed the duration value."),r.a.createElement(a.MDXTag,{name:"p",components:t},"When playing live streams with a sliding DVR window, the relative position and duration will stay constant, and the slider handle will be positioned at the same location. If playing at the live edge, the handle will stay at the right end of the slider, also for live stream events where the DVR window expands, i.e. duration increases."),r.a.createElement(a.MDXTag,{name:"p",components:t},"When dragging/clicking the slider, ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties({ position value })")," will be called with the value corresponding to the relative position according to the rule above."),r.a.createElement(a.MDXTag,{name:"p",components:t},"The component accepts children for putting more content on the timeline. The slider handle will typically stay on top. For now, ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<TimelineInformation/>")," is such relevant extra content. Chapters and markers might be added later."),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),r.a.createElement(i.Playground,{__codesandbox:"undefined",__position:0,__code:'<ShowCase\n  height="20px"\n  render={({ setProperties, position }) => {\n    const duration = 333\n    return (\n      <>\n        <Timeline\n          position={position}\n          duration={duration}\n          setProperties={setProperties}\n        >\n          <TimelineInformation playMode="ondemand" duration={duration} />\n        </Timeline>\n        <TimeDisplay\n          position={position}\n          duration={duration}\n          playMode="ondemand"\n        />\n      </>\n    )\n  }}\n/>',__scope:{props:this?this.props:n,Timeline:s.a,TimeDisplay:l.a,TimelineInformation:c.a,ShowCase:p.a,SimpleTable:m.a,Footnote:u.a}},r.a.createElement(p.a,{height:"20px",render:function(e){var t=e.setProperties,n=e.position;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{position:n,duration:333,setProperties:t},r.a.createElement(c.a,{playMode:"ondemand",duration:333})),r.a.createElement(l.a,{position:n,duration:333,playMode:"ondemand"}))}})),r.a.createElement(a.MDXTag,{name:"p",components:t},"The example includes also ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<TimeDisplay/>")," and ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<TimelineInformation/>"),", in order to illustrate the ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"position")," and ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"duration")," values and changes."),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),r.a.createElement(i.PropsTable,{of:s.a}),r.a.createElement(u.a,null),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"component-dom-with-class-names"}},"Component DOM with class names"),r.a.createElement(a.MDXTag,{name:"p",components:t},"Please read the ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/custom-replay/skins-styles"}},"general principles")," for Replay class names and styling."),r.a.createElement(m.a,{rows:[{Element:"div","Class name":"timeline","Generic class name":"slider",States:"dragging",Parent:""},{Element:"div","Class name":"timeline-track","Generic class name":"slider-track",States:"",Parent:".timeline"},{Element:"div","Class name":"timeline-handle","Generic class name":"slider-handle",States:"",Parent:".timeline"}]}),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"styling-requirements"}},"Styling requirements"),r.a.createElement(a.MDXTag,{name:"p",components:t},"The styling of the timeline slider needs to follow some rules in order to get sensible responses from user interactions:"),r.a.createElement(a.MDXTag,{name:"ul",components:t},r.a.createElement(a.MDXTag,{name:"li",components:t,parentName:"ul"},"The draggable or clickable area will be the size of the track element, ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"li"},".timeline-track"),". Remember how margin, borders, padding, box-sizing, etc. affects the size."),r.a.createElement(a.MDXTag,{name:"li",components:t,parentName:"ul"},"The ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"li"},".timeline-handle")," positioning (between 0 and 100 percent from left or bottom) should align with the track size and placement."),r.a.createElement(a.MDXTag,{name:"li",components:t,parentName:"ul"},"The styling needs to take into account the size of the handle itself. The component will not subtract the size of the component in its positioning and value calculations."),r.a.createElement(a.MDXTag,{name:"li",components:t,parentName:"ul"},"The handle should ideally be shifted by half its width to the left for horizontal sliders, or half its height down for vertical sliders. It is the center coordinate that should count.")))}}])&&y(n.prototype,o),d&&y(n,d),t}();v.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/components/controls/TimelineInformation/TimelineInformation.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n("./src/replay/components/common.js");function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,l(t).apply(this,arguments))}var n,a,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.absoluteStartPosition,n=e.duration,a=e.playMode,i=e.previewValue,s=e.isDragging,l=e.isPointerInside,c=e.classNamePrefix,p=function(e,t,n){return null!=n?"livedvr"===e&&t instanceof Date&&t.getTime()>0?Object(r.b)(new Date(t.getTime()+1e3*n)):Object(r.c)(n):""}(a,t,i),m=((i||0)/(n||1)*100).toFixed(2),u=Object(r.k)(c,"timeline-information"),d=Object(r.k)(c,"timeline-tooltip",s||l?"timeline-tooltip-visible":null);return o.createElement("div",{className:u},o.createElement("div",{className:d,style:{left:"".concat(m,"%")}},p))}}])&&i(n.prototype,a),p&&i(n,p),t}();p(m,"streamStateKeysForObservation",["absoluteStartPosition","duration","playMode"]),p(m,"defaultProps",{classNamePrefix:r.a}),t.a=m,m.__docgenInfo={description:"",methods:[],displayName:"TimelineInformation",props:{classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},absoluteStartPosition:{required:!1,flowType:{name:"Date"},description:"\u21d8\ufe0e For previewing live clock time positions, this should contain the date/time corresponding to the start of the timeline.."},playMode:{required:!1,flowType:{name:"PlayMode"},description:"\u21d8\ufe0e Used for selecting relative position or clock time display."},duration:{required:!1,flowType:{name:"number"},description:"\u21d8\ufe0e Used for computing the tooltip position."},previewValue:{required:!1,flowType:{name:"number",nullable:!0},description:"The relative preview position, passed automatically from a Timeline parent."},isPointerInside:{required:!1,flowType:{name:"boolean"},description:"The Timeline parent manages mouse pointer state, and passes to this component. If true, the tooltip is displayed."},isDragging:{required:!1,flowType:{name:"boolean",nullable:!0},description:"Passed from the Timeline parent. When dragging, it is set to true, and the tooltip displays."}}}},"./src/replay/docs/mdx-helpers/ShowCase.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js");n("./src/replay/replay-default.css");function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){var t={};return Object.keys(e).forEach(function(n){var o=e[n];switch(n){case"selectedAudioTrack":t.currentAudioTrack=o;break;case"selectedTextTrack":t.currentTextTrack=o;break;default:t[n]=o}}),t},m=function(e){function t(e){var n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,a=i(t).call(this,e),n=!a||"object"!==r(a)&&"function"!==typeof a?l(o):a,c(l(l(n)),"setProperties",function(e){return n.setState(p(e))}),n.state={},n}var n,m,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o["Component"]),n=t,(m=[{key:"render",value:function(){var e=this.setProperties,t=this.state,n=this.props,r=n.render,a=n.height,i=a?{width:"100%",height:a}:{width:"100%"};return o.createElement("div",null,o.createElement("div",{style:i}),o.createElement("div",{className:"replay-controls-bar",style:{justifyContent:"center"}},r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){c(e,t,n[t])})}return e}({},t,{setProperties:e}))))}}])&&a(n.prototype,m),u&&a(n,u),t}();t.a=m,m.__docgenInfo={description:"",methods:[{name:"setProperties",docblock:null,modifiers:[],params:[{name:"props",type:{name:"PlaybackProps",alias:"PlaybackProps"}}],returns:null}],displayName:"ShowCase",props:{render:{required:!0,flowType:{name:"signature",type:"function",raw:"(VideoStreamState & { setProperties: PlaybackProps => void }) => React.Node",signature:{arguments:[{name:"",type:{name:"intersection",raw:"VideoStreamState & { setProperties: PlaybackProps => void }",elements:[{name:"VideoStreamState"},{name:"signature",type:"object",raw:"{ setProperties: PlaybackProps => void }",signature:{properties:[{key:"setProperties",value:{name:"signature",type:"function",raw:"PlaybackProps => void",signature:{arguments:[{name:"",type:{name:"PlaybackProps"}}],return:{name:"void"}},required:!0}}]}}]}}],return:{name:"ReactNode",raw:"React.Node"}}},description:""},height:{required:!1,flowType:{name:"string"},description:""}}}},"./src/replay/docs/mdx-helpers/SimpleTable.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js");function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i={padding:0,tableLayout:"auto",boxShadow:"0 0 0 1px #CED4DE",borderSpacing:0,borderColor:"gray",borderCollapse:"collapse",borderStyle:"hidden",borderRadius:"4px",overflowY:"hidden",fontSize:"14px",color:"#13161F",width:"100%",display:"table"},s={color:"#7D899C",background:"#EEF1F5",textAlign:"left",fontSize:"14px",borderSpacing:0,borderCollapse:"collapse"},l={orderSpacing:0,borderCollapse:"collapse"},c={padding:"20px",verticalAlign:"top"},p=r({},c,{fontStyle:"italic",opacity:.5}),m=r({},c,{fontFamily:'"Source Code Pro",monospace',whiteSpace:"nowrap"}),u=function(e){var t=e.rows,n=t?t.map(function(e){return Object.values(e).join("-")}).join("-"):"";if(t&&t.length){var r=Object.keys(t[0]);return o.createElement("table",{style:i},o.createElement("thead",{style:s},o.createElement("tr",{style:l},r.map(function(e){return o.createElement("th",{key:"header-"+e,style:c},e)}))),o.createElement("tbody",null,t.map(function(e,t){return o.createElement("tr",{key:n+"-row-"+t,style:l},Object.values(e).map(function(e,r){return o.createElement("td",{key:n+"-cell-"+t+"-"+r,style:(a=e,""===a?p:m)},function(e){return""===e?"none":e}(e));var a}))})))}};t.a=u,u.__docgenInfo={description:"",methods:[],displayName:"SimpleTable",props:{rows:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}}],raw:"Array<{ [string]: string }>"},description:""}}}},"./src/replay/docs/props-footnote.md":function(e,t,n){"use strict";n.d(t,"a",function(){return u});var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,p(t).call(this,e))).layout=null,n}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components;s(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"p",components:t},"Props marked with \u21d8 are updated with the video streamer's ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/reference/observable-stream-state"}},"state property")," having the same name, when connected by the ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/connected-controls#connecting-the-controls"}},r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"connectControl()")," HOC"),". The \ufe0e",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties()")," callback prop is marked with \ufe0e\u21d7 because it is connected for changing the playback state. More info in the architecture description of ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/overview#arrows-and-boxes"}},"two-way data flow"),"."))}}])&&l(n.prototype,o),i&&l(n,i),t}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=components-controls-timeline-timeline.f10614faa7b10e915396.js.map