(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/replay/components/common.js":function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return o}),n.d(t,"k",function(){return a}),n.d(t,"g",function(){return s}),n.d(t,"d",function(){return c}),n.d(t,"f",function(){return l}),n.d(t,"h",function(){return u}),n.d(t,"i",function(){return p}),n.d(t,"j",function(){return g}),n.d(t,"c",function(){return d}),n.d(t,"b",function(){return h}),n.d(t,"e",function(){return b});var o="replay-";function a(e){for(var t=null==e?"":e,n=[],r=0;r<(arguments.length<=1?0:arguments.length-1);r++)(r+1<1||arguments.length<=r+1?void 0:arguments[r+1])&&n.push(t+(r+1<1||arguments.length<=r+1?void 0:arguments[r+1]));return n.join(" ")}var i=function(e){return e};function s(e){var t=e.classes,n=e.selectClasses,o=e.classNames,s=e.classNamePrefix;if(t&&n){var c=n(t);return Array.isArray(c)?c.filter(i).join(" "):c}if(o)return a.apply(void 0,[s].concat(r(o)))}function c(e,t){var n,r=(t||e.currentTarget).getBoundingClientRect();return n=e.touches&&e.touches.length>0?e.touches[0]:e.changedTouches&&e.changedTouches.length>0?e.changedTouches[0]:e,{x:Math.max(0,Math.min(n.pageX-r.left,r.width)),y:Math.max(0,Math.min(n.pageY-r.top,r.height)),width:r.width,height:r.height}}function l(e){return function(t){e.indexOf(t.key)>=0&&(t.preventDefault(),t.stopPropagation())}}var u=function(e,t){return e!==t&&(!(e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime())&&!(Number.isNaN(e)&&Number.isNaN(t)))},A=function(e){return null!=e&&e.constructor==={}.constructor},p=function(e,t){if(e===t)return!0;if(A(e)&&A(t)){var n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&(!(n.filter(function(n){return u(e[n],t[n])}).length>0)&&0===r.filter(function(n){return u(t[n],e[n])}).length)}if(Array.isArray(e)&&Array.isArray(t)&&e.length===t.length){for(var o=e.length;o--;)if(e[o]!==t[o])return!1;return!0}return!1};function f(e){if(null==e)return{};var t={},n=e;return Object.keys(e).forEach(function(e){A(n[e])?t[e]=f(n[e]):t[e]=n[e]}),t}function g(e,t){var n=f(e);if(t){var r=t;Object.getOwnPropertyNames(r).forEach(function(e){A(r[e])?A(n[e])?n[e]=g(n[e],r[e]):n[e]=f(r[e]):n[e]=r[e]})}return n}var m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return n&&0===e?"":e<10&&r?"0".concat(e).concat(t):"".concat(e).concat(t)},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=Math.round(e),r="";"number"!==typeof e||isNaN(e)||e===1/0?n=0:n<0&&(n=-n,r=t);var o=Math.floor(n/86400),a=86400*o,i=Math.floor((n-a)/3600),s=a+3600*i,c=Math.floor((n-s)/60),l=n-s-60*c;return r+m(o,".",!0,!1)+m(i,":",0===o)+m(c,":",!1)+m(l)},h=function(e){var t=e instanceof Date&&!isNaN(e.getTime()),n=0,r=0,o=0;return t&&null!=e&&(n=t?e.getHours():0,r=t?e.getMinutes():0,o=t?e.getSeconds():0),m(n,":",!1)+m(r,":",!1)+m(o)},b=function(e,t){var n=null;return{start:function(){n||(n=setInterval(e,1e3*t))},stop:function(){n&&(clearInterval(n),n=null)}}}},"./src/replay/components/controls/ControlsBar/ControlsBar.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),o=n("./src/replay/components/common.js");function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,c=new Array(i),A=0;A<i;A++)c[A]=arguments[A];return r=this,n=!(o=(e=s(t)).call.apply(e,[this].concat(c)))||"object"!==a(o)&&"function"!==typeof o?l(r):o,u(l(l(n)),"baseClassName","container"),u(l(l(n)),"selectClasses",function(e){return e.container}),n}var n,A,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,r["Component"]),n=t,(A=[{key:"render",value:function(){var e=this.props,t=e.className,n=e.classNamePrefix,a=e.classes,i=e.children,s=this.selectClasses,c=Object(o.g)({classes:a,selectClasses:s,classNamePrefix:n,classNames:[t,this.baseClassName]});return r.createElement("div",{className:c},i)}}])&&i(n.prototype,A),p&&i(n,p),t}();u(A,"defaultProps",{classNamePrefix:o.a,useDefaultClassNaming:!0});var p=A;function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}A.__docgenInfo={description:"",methods:[{name:"selectClasses",docblock:null,modifiers:[],params:[{name:"classes",type:null}],returns:null}],displayName:"Container",props:{classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},useDefaultClassNaming:{defaultValue:{value:"true",computed:!1},required:!1},children:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:"The controls to be included in the container."}}};var h=function(e){function t(){var e,n,r,o,a,i,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,l=new Array(c),u=0;u<c;u++)l[u]=arguments[u];return r=this,n=!(o=(e=g(t)).call.apply(e,[this].concat(l)))||"object"!==f(o)&&"function"!==typeof o?d(r):o,a=d(d(n)),s="controls-bar",(i="baseClassName")in a?Object.defineProperty(a,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[i]=s,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,p),t}();t.a=h},"./src/replay/components/controls/ControlsBar/ControlsBar.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=(n("./src/replay/replay-default.css"),n("./node_modules/docz/dist/index.m.js")),s=n("./src/replay/components/controls/ControlsBar/ControlsBar.js"),c=n("./src/replay/docs/mdx-helpers/SimpleTable.js");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=p(this,f(t).call(this,e))).layout=null,n}var n,r,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=u(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"controlsbar-component"}},"ControlsBar component"),o.a.createElement(a.MDXTag,{name:"p",components:t},"This is the container element for the bottom-aligned bar with player controls."),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"summary"}},"Summary"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Except for adhering to the conventions on class names, there is no functionality in this component."),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),o.a.createElement(i.Playground,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZ2k9OABHISQunJVwAUQqBkKtGAwDCKACA-OA4H9AV7SmRwaCEKA4BvVwjmNOVoMkWD4NQ5DASdah9DgViyMoCjJFItEeMo6i-JA8ihIEQjIPYZwiNgSxXA8WA3RNejGIQmAkIBQ9OKIdAsAtTYoDhTiZL_eTFJgSTiPYIMpWUuizSVO0NXYYB2E0Hx5Hs-UAAEYCIEQBlQViunacFUF0VFjlOAAvZwCESbF2G4Vz1iiARnlQK52gABnYZMZiwdp9xrGZOxYWdsoAFkK9gADZCuK9YwBAgAxH1oESbL-GcQ5EUdTB2AABSEfglgCn44DKxEmprFqaBkmLLnYABGKqSvkcLIqmABBOZkvYSM3PIGwoHQcN2HkTlkrEQ6YxkdhUUSmBuGAQ84oS7F5G3WtgBO6BzuCAAyIHxkSeZKGaf6zou7g4flMBQgintUHadgAH4NgB8NI2uq5ocB1BNprKQZGrd8zFhFzMCw0IcMO67uFu6MSb2lca0TWzcNazIUmvAgftrNdRMEqiji3VcpC5nAedcPn9B-qQ2fJsxvxANTmJQjS0MSDDaZwvCtAoED9AYCxjBMS2retm3bbtvlzGMdhtXgCAUmCuBtjQEJ3coVFYiLLpHs--B2F5MwLbtqPo9th2zB8oiXPaT4NxoTjNIySQhp1jIAFUGn41w0Ez7PkLzguQKLl0BEN_0E6k5O2MzAhOLSavYkkZwFy2CIBE77upWFWvVVQevrMbjMOKedJ-ng5woC4TP58XmuzgIkex6TlP2LT6f2_gm9wgiYLD5uahh_CzeHQn1OW64gTeIANR40Jj0kZ-oFf_817rxPr-35unFdAP04vxMSYsRLcQomLC-o8_5QQAVPYBYlJCWAFAuYuDRUAtQEFEFGqD0ELxdFgnBeCgqwKvggpuSCRa8VLokDwkptj6moC8YUWcdaMJ2Cw1AbDV74V_g3RBu8M590fovSg8UzTHjERIqREoZGwPWJHGOJgHbsCdi7fWUxPbe3DsFVRVs45wIbjTbClpRHSEwuYi0ujgqqGwLAtWGttYsWEXfZBglIEgIgWA0W1EAJG2AnoMCIBHjsB8mAKAowI6SHgWHEIdgubeQVOaKyLlC7Fxou6aCnocCejbhkDumTq7eKrhkf0ZhyBoXwo6KB4kYRYFAugOwJSMipRrIwuAMB7A1LgAAOR9N0FKjd6kWkYRJEexNKZYGsmYumJFaHiRHs4uC6lNLSFODpPSBkFzGU7rJGA5lYCBKAsA024FwmROiSMZyDojCJJslqFJjlXwjzMAleYw1Bx2BSsAdYQgRhwHRlcHaAhMiJEYG5AA2qiGcKQAC6Vw4UFEutWeQ7yIrUCigQBSsB4rPV-R0iwZUuwFCuDlEqFhcUWQADLIX2NlMIERZoWGqM4PwJwRjZTyry1atUADE9hzzaiqtqc8rL2BeAENOZw01yXsEpesaV05HDRPLPKFIELJUqoyGqtCdxlqNwSLMbpOrhSypDtlGwXY6DmplRkUUnYIB5Gqo1KlexWAZCiaMAAmtargmBUYevmgQRaRq1ruvWFQdV2UBUrWTCtOqK1WqStxOgCY2UVo5RygAUklSwKaOtso0r9GYDFW1sVTAmBKdABKkp_OjTxYUcaADs2oAAcABOLt9gdVMK1W0DAcbzznlaimgArJK2gTSdoL3dtlWAYBXwhpAuGrNNUioet1QIOVkoFVKs6RavVPEDXdOyjGs9lly2Yu2uMXdIciX_JrMe3d8rKqKu3a-_VpqjWXt_WFImt6q3jDrY-g6z6SXlQVe0AATDlKNNYvUiliPEOdbssrygiDMQDFaAxYtQDi9AzZ4ixHraHRtNZ8k4AIGBwlq6FpWvlC8Uj5BJWUHlQlClOAJ03srYR6t6BHAuHA5Riw1HaPkbgAxgg7UiCdW6iAXqfR-rCe6CNSgY0Jp-2mpZD1IwbC0D3YibKPwRiZBw3x_Dd7ZjkkSFJg65ysxM2JZwZokYnNTDhiMt8rmLBdAIH0cwtGSML3IFJkeFgvILm6X5ycY4gugbUxF9YxM8NVJA6Q6I_FXQpU8zdVzEB3P5e8_KXzkHawBcS-0H4Lp_RRZhBRboFX_MJYEOYTzkXLpWYywJ6ShzjnDMOm5QFdh5BXA03cRmt0Kt3u2DARIVFYspVGxjScow4A4CiDMSMgKCuRl1B4dQPccCsHiIyOAu3RiciuMiTkAFKBoCfBaN8931CPdQM93z2V6tucOqtkG62gU4FgLOCY10WtFj65sTsGQiWHeO1KHA83EiXdG9CnKCLPyriq-1u6HNayMFLd0J6sBXrE6k99VcQsicw5yKTl6wAa2dkp4LIWhO0TB2euTh9hKqcE_Z79OncOtuzEjMLo4LmWaC5l3WQsKPXrtAly99gABqXwtaMheQZ-TujX02ey6FsACXxNDfs6kBMA3MvOSclN4bi3Agrc7mZ-gJ3cuvDoESG7iwwBRui521dkYSwIDTfx2bxMnOFfABR0t7o6v2gWkBSr9XEBtchx56z6nhvgAHaOyds7n94CB5uyEVAiR7vbcjJGAvjIljqFD9L8PNPaPsCjzHykav5QWkRAkZPnBO8J7Rur9QafufAFs0kKT1fzswFt977PWWCA5ZoNPwvtus9m4t67jf1v18C5lw7-fNu7eC4tx7r3WeLd4pgGz7HNY0uYqpg6eZ9NTLkiOdflZSh1ZrM1qxSeu8hSs8ZSWSIB1cpy2gnmhgkgESPqtyvCUkDy_gTy5oLyWo6SDobkeAiQ50WQvS_gAyQy0mYMXy6YE0AA4jPLEJNsQS_kvn0oMseCNJhBAJ5CkvkpIBwZ8BNJUjQODOpj8gdGQdQJQfvDQewKDBVhbFYJsFDiAsOFKt0GgNUqEJgDkN7DWnIeUjXGHOoljDDHQFcNLP0sWD1hFH0nUrilko0s0kklqDgOuDvAQIwDQTNsqpSPgfhIwUNqMlYdXL9t0rAFKJ4d0vcMNuwLCmiAUEihjCirOJdKHujHEXOAAD4YxgoQqMBJFRGzi3R5Z9IUa3TVIEHwAfCVxZKYoWCojRABx0HiFia1jFFeFDLMGQBYBXB0EhHeGtGsEeoWB5AwBaLmJdEdQfpoiMipaVHxYRgCC4xxZ3rHQMFDJLBNGEFMFdBtErEFHEEEwXTjbfIcZEoTC2A4ADiHFdYWALGPQDz0ElFjYHTHFwAXFQ5RSrHeFErYG4G0AjHHiXaQ6XHbF9G1iBE9whHwBAkAkEHdEbG9FZ5vFEFXDQrwnHhLCPE4BdI9JLHHgIqrhXTPG47mCxgcDImM4klwDfR_SnSEzyCkxxhdZpbhRP5TB0GWHaFf7KAuIbLuJAKRATQQHGwhIGCXKSDXIxL4afLdBglPoRHJExHZHwqXSP6zIuQSmOhEAUFUHkD1GuarHwAgoYxSkeokk9FYD6nJFGlYkwBmk5GFBAaMnKkOiqnCGoDamzaWkmnWnwoepoSBBQCekFBmFMkkHdAPgHTJHsBpGoCvyBACCYpOnCAypoBZDSntHsBRlEAxlLBdRpnRkZBLDpqZo5kZl5ka5uyEBXDpkxmKn2nWR3qdHukwk-AjKawvZKnWSIzIxBT9iNk_FF4DgsGpnykFBLDUaoAInsAZHIRZHJFiAl7hmzYgbEgvAQBLToAmkHT9ltHJQpRRkJBrbtBoxXCbmsFdZ3okmTnJApTQoIpdY4KHSwDjgHQ5TKj96MBplEEg50ApATAvkQCq6q4Q6rjhLnjURJB7AzAxDyYVAoxXCtTCjsDRIcacB2ABRByYRgA9xsDdATDuDsDbaSCQA4QZDUarhFaHRjm_HQoQBY5xaQnNHHgXmnF5B4CRhLkxCrnrnq4UXwBUVY7PF2524Ek9CWmMXvZPZoxvhTLhTGBBkdlShdkeChAAy9mXYDFDELI_EKroxeA8QSioBkiNlXBDmzgjn5LcVhEXnTk2mznIo2muZCVqXWIaVYmoqYzHlYAqWRjuWmU4DmV4zvmUWY4RlpEHlTL6K9ZRS2BaLFw5ApQvD-QFbxVEBtkuRyUoy-A4GZDfGWl_HRqAnrAgnBH5U1hkkWlQktGNnlpXBul3FGWGkFU3FSlXBSkFbGWpHpHgpTltViBlX0V6mgqdWQrdW9VrEwAem2Xwrlol5tWFbFbbESGgyFW3H4TwCAUE53pLXZAtUpRLVSkebbF35CxkWRiMW2AXmsU3FbUHVrWC5CWbVCbbE4CEW0CzFRUsEujoBvYfZPjyiHW1jRZNa0XxaBZ473VSn8WpaNaxbHVkk3WVZtbmDuWeXGmNk-Ww30nlo1mpVIzyUshng3hDoVQpDnheo0COAWpJm0CXYwCsAEC3Zl5LDdz8z6kAASlg-otKl4_k-gJe5NiZY5VNrm4S2oRWkAvQ9MEQRYg0jx-YeIwcs81a4MqK3srg7AAAUs4BaBxpBX2CMMhPUPFLEF7PEZLciEaPBZoTTSeE2n1taOKHZClJGEza6CkWkTTbhL0OCvoPJBlGOPdvjYTQUL0hAPoPbQQLjF1g-TYZkFKNkCTfoF1sde7TRm0CdKHIDsnREKEGnZtqDt-fiLdDlHDRYNgGiOaHHaTV5jCLTSndnZsHABjjeZDTFkoe5snSdO4GkOgJYKnfXQtdXR7X4LONkD3XXaUXnYWIXcXdHeXegPHc5gPR8EPV3aPTnY3fSVDc1quKXTHbQHPZXQdO7RjTWEJZDqmfqNEHgKLlgJGJSuwBfRMFtk9jvbPfPbhGVGkAABrsAWjRREBh2fnLpLB20nYFl4A25AnZkP1X1RA3133QNP2fYv2x370ngf0wC-o_1_0APYbAORAAObBlkEAQOrhgMdH4OgNcATBAmEMpDlnYMna0OECTGY34ayU43pVngADSC2Xg1EdawwIovQBAN40SOwUYKOcAPdN4MAojpw826AA1mRM5JePDDClA_Db9BWrAj2OQFWQlkYKOfDMqb9VwajxjqDNAoekOx1kj0jsjYjCjOADiWAuoYAhjvDGjJjldyOC210YgKURdQNRjXjlj79XQld6lOEEdWeITmjPjqIHGk2csNR1AMTBOAlUlbDDpUwd6UVotFwC9kYrg9NiQSwHgpT1j6wx1qtpWHg09QlWETWx9FgNTnAAm7giIkMzsWQ_dHg7T1REUMA3T2ovTgOrgp4Y4aCx4cxdTkzBA0zMAuMDTCNRo8Q3SLTwNiWAAhJGP0rmTXLYIMv0sU9dIDvs8WYc4QSc_U3fuli6Dky8eOHAAjj3AdJGJQEdkZcAFdAVp8-oOwNszuXTFAP3f82UQJuiIPJLvDD8xC3Ctnb3ClQ6Hk3AByvEDcueAAI6hB9iO0lOl5lNSqVNXA6UUjmAuYVZtN1MrMg3BbogwAb0t1_aRi2CvNSinP91st54cu3PzEgaSM7QHTsu4SSOnPPFzYLaUTCs8uitSuRj1PPG2NSs7Sflg74hAspSSM3hqv53T2tZ0trPNO4mrh1kFPhgEA7SOBIxV2CtPXQAvUeOXm3T5NgAYUWvFPQoo4IrlNesLZY73YT14BKvuYsBuuFOWvWtZhT1A2NPrOMsmsE5CXav2tEWzEo6JVwAi3hseseB-uJA-shD5sBu6uFilbPnN2A3HWnVwDnWuBnOgw1vnX1P90TNBvbkpTvBBvT13mRhR0QAHRttfk_mcAWgWgvn6ssuuC8WAvwx5vUXXRxvGsZM46rPjEJv36b1xbhImGcBBoxBxCgswA4ukYJSruGtNMbOpaBmPNpVdmYAaS9LsQfNfMYw_Ml4_OzWHT_Pbk5mLhxan14YNbMuQ5nnRIugQZAeNEgbChuxJmgspT_PPEiu-Oo4vv15PXCggUnROsFb_EsvcuI7h2weZTxDFs25A0AnsTFsHQPszBPsugfP9CkdQDkfPHAeA34dUcug0eIfMfwfFvsfdYZN_UGuJbVLsTH3TIPPtkcNdm_AZD9CYAKuUjfNKCeqKeLxhHozvtXAis6kgZUAzCXnHBBD0fgdLMYl_XHUKfgpafT13ql10D5DUDVVeSIfIZKfwAvnhIcptBnSKG5CoAuiIj4TUSJDbOrgodni6gjAumDgZAJTvFV5OeEZBRuc26YcCDYcsUZuUtZ7HWEc9xO1NLOdBTkeTutPuZFcctGeJAVeUfQfGe8cad2fKd1fFuM2ldpfUBsc74A2xZcdNf1feu0dmcMdLOpcueoB9f75RZZ4Ddb1zdFjNejcpRTflfetCcn4JGbNCV1dZMzK1mZbCh4KLOOHNzvPVN6BpAaqVl5kNVlRZUtry2oo-Yer-QQX3hgAABaGQlApLwg5LB0l7MAHqpKgPuluFKU67ZgVTJ9qzn3CUTQf3QgXLN37S5b-5h57TtAt3dYq0eUgOpKa2xQOUAAJMAGgHj1rpT90k99EMKPIMUOwFcMUJT9TzALd_IHTxpNRIzwIMz1Msi7kyd7gtEIs-890roC0hWQc0sC6CkDUV6hfQINsBNW913r5vlzWFHUIEjGoQdAg_rxgBdTL3AH9f2-YaodkP0lz8rzAKr7sD5one5hKd09L9QC0rOyMvdxJMFchcc2b17xbwH57xgL8vDCQmgC8OXgB4TXmIE0y1W-5ib4b2-UE5Dmn4nz_dn-gEq9b2oXb0rzECr9RM72mfb6X47-X5s3WchESggz6sKFdgb3mDAR2nVFVDmn9fX6jlgl3Ob7Rw3wkp393xWyVSBsMH0I35fU9YhbMa3xGDkL_egA3wP1sCH9dDAcmHVD36eVP4cLWxgKM_36gIPyH8P2fxfxH53tPwIHYA8rvzmgf31vJlGYLSlE3wv1Xnn1g_f8f3QCn84AG_c3tv3qhF1X-UUaXkSj_6_0ABO0E_uv3P6b9b-v9d_uEFDgPI9-XWAxqRUL628q-WFJ3mrlXCL5zu1CFfGv1RxLBoIxUe9LXiNbdJroquMgadwl7oILu-gcXEf1oGIB6B1AyPoExYFsDxeCzTgZQPDoYCqafA-gaDxEEE5yBEggAuHRgHvgLAdzEXk83NpiCn2OwSXo7TX60AjKozWgPD0uIgZbAj8UjEAN6YpQjBShDpkMxGZjNQY2zI5q4BOYOD5mizZZpHTHC-Aj-T5fwS2DQCYCiUE_CwFHXD7e8k-1TarnAGsELxbBtAfug4NnZ_soA09XztADArbQoW0oeCnAUyEbAtg2wHAKuAAEHQrBNg0wd0ExjeCzwLNI_nMQpTPFpBFGZCkkK4B1C1sjQscPqDCFU1WhiqZ4jEKJQ1DkhvQhoVkHmY38WkIwyIcJzE545G8FgJQceC4Er4ABsgpYPIM7wbCekkgyMB0OILtB-Bew-NiwJ0FndlBt8YPhH3UHsBNBWNFFiBjPBYIXqBeUUEjGrjvNjwEwJwFcFma3QdGXAYPHoAEAF55hYRP3uYIQoBDOeUI-IA0G1BGVPhGQAvKiIOi7koAuA1ZpDmqIihgR8Io6u5ncGQisR2oSrrj0xEojtQYZMcBiORFQAThY4YYIsFpEsiYRCSbNPvwW64kgSiTGYCSLw4FdqulI-kTSOqQSgBAzIgvKy0lFQBURondnEiKpE4iQW23RNlFmF6qxv800bYHLH_CaBqAZyE2KEgqz8BuK_AK4PwCBDEgqg3gDIBaF_Dv4xo6wfgMhmm62j2A_AHKDgADE5QPRNYfgOUHID9AIKQUX0fwCFb5A_wjSH0O_lM7khKAiQPMHkFRSvJu8xYR0aCAEAhiLA_AKIGgBjEqAIwGgOAIWL9EgBMA8wCMBFBDpVikAcWfgK8jLEAA9JNDgDqg4Bkw1YosYIC1BWhIgnY7sb2P7EgBr2RMZxCCG8AQtIAKQQJGaMgIWihSIAf5CAFoC-gsgto-0WaFoCJ5hxtmfgPIAUDyB5AQAA",__position:0,__code:"<ControlsBar />",__scope:{props:this?this.props:n,ControlsBar:s.a,SimpleTable:c.a}},o.a.createElement(s.a,null)),o.a.createElement(a.MDXTag,{name:"p",components:t},"The example shows an empty controls bar."),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),o.a.createElement(i.PropsTable,{of:s.a}),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"component-dom-with-class-names"}},"Component DOM with class names"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Please read the ",o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/custom-replay/skins-styles"}},"general principles")," for Replay class names and styling."),o.a.createElement(c.a,{rows:[{Element:"div","Class name":"controls-bar","Generic class name":"",States:"",Parent:""}]}))}}])&&A(n.prototype,r),l&&A(n,l),t}();m.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/docs/mdx-helpers/SimpleTable.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js");function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i={padding:0,tableLayout:"auto",boxShadow:"0 0 0 1px #CED4DE",borderSpacing:0,borderColor:"gray",borderCollapse:"collapse",borderStyle:"hidden",borderRadius:"4px",overflowY:"hidden",fontSize:"14px",color:"#13161F",width:"100%",display:"table"},s={color:"#7D899C",background:"#EEF1F5",textAlign:"left",fontSize:"14px",borderSpacing:0,borderCollapse:"collapse"},c={orderSpacing:0,borderCollapse:"collapse"},l={padding:"20px",verticalAlign:"top"},u=o({},l,{fontStyle:"italic",opacity:.5}),A=o({},l,{fontFamily:'"Source Code Pro",monospace',whiteSpace:"nowrap"}),p=function(e){var t=e.rows,n=t?t.map(function(e){return Object.values(e).join("-")}).join("-"):"";if(t&&t.length){var o=Object.keys(t[0]);return r.createElement("table",{style:i},r.createElement("thead",{style:s},r.createElement("tr",{style:c},o.map(function(e){return r.createElement("th",{key:"header-"+e,style:l},e)}))),r.createElement("tbody",null,t.map(function(e,t){return r.createElement("tr",{key:n+"-row-"+t,style:c},Object.values(e).map(function(e,o){return r.createElement("td",{key:n+"-cell-"+t+"-"+o,style:(a=e,""===a?u:A)},function(e){return""===e?"none":e}(e));var a}))})))}};t.a=p,p.__docgenInfo={description:"",methods:[],displayName:"SimpleTable",props:{rows:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}}],raw:"Array<{ [string]: string }>"},description:""}}}},"./src/replay/replay-default.css":function(e,t,n){}}]);
//# sourceMappingURL=components-controls-controls-bar-controls-bar.f10614faa7b10e915396.js.map