(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"./src/replay/docs/custom-replay/skins-styles.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d});var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function m(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,n){return!n||"object"!==s(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var d=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=i(this,c(n).call(this,e))).layout=null,t}var t,a,s;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}(n,o.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components;l(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"custom-skins-and-styles"}},"Custom skins and styles"),o.a.createElement(r.MDXTag,{name:"p",components:n},"This chapter describes the styling system and how to modify the appearance of the Replay player."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Replay is at this time not prepared for CSS-in-JS solutions, and requires traditional CSS rules based on class names. Use the following sources of information in order to understand how to modify or replace the default style rules."),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"The individual documentation pages in the ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"li"},"Controls reference")," list class names and DOM parts for each of the controls. "),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"This chapter describes the strategies and patterns to styling Replay. "),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Inspect a rendered Replay player with the browser's dev tools' element inspector to see how rules come into effect and what's applied to the DOM elements.")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"how-to-override-or-replace-the-default-replay-stylesheet"}},"How to override or replace the default Replay stylesheet"),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"overrides"}},"Overrides"),o.a.createElement(r.MDXTag,{name:"p",components:n},"For small changes, some extra style rules placed on top of the cascade (i.e. having selectors taking precedence) is the simplest approach. E.g. after referring the default Replay stylesheet, add your own:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"import 'vimond-replay/index.css';\nimport './my-skin.css';\n")),o.a.createElement(r.MDXTag,{name:"h4",components:n,props:{id:"content-of-my-skincss"}},"Content of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h4"},"my-skin.css")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-css"}},".replay-controls-bar, .replay-selector-items, .replay-exit-button, .replay-playback-monitor-close-button, .replay-buffering-indicator, .replay-goto-live-button.replay-toggled-on:hover {\n    color: green;\n}\n\n.replay-slider-handle {\n    background-color: green;\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},'This would change the "primary colour" (icon and button surfaces) into green.'),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"building-a-new-stylesheet"}},"Building a new stylesheet"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The default stylesheet can be completely replaced. For this, either reuse some individual ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/vimond/replay/tree/master/src/replay/default-player/default-skin"}},"CSS modules from the Replay library")," and substitute some others (like ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"colors.css"),") with your own. Another alternative is simply creating and modifying a copy of the file found at the npm path ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"'vimond-replay/index.css'"),". If reusing individual modules, they need to be referred individually by either a preprocessor (e.g. SASS, PostCSS, Webpack), or the browser itself."),o.a.createElement(r.MDXTag,{name:"p",components:n},'Please see the chapter below, "CSS module organisation", and refer the source code, in order to look into individual CSS modules.'),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"worth-to-know-when-reading-the-domclass-names-table-in-the-controls-reference"}},"Worth to know when reading the DOM/class names table in the Controls reference"),o.a.createElement(r.MDXTag,{name:"p",components:n},"When reading the DOM and class name table in the controls reference, please keep in mind:"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"All class names are prefixed for the prevention of style conflicts or coexisting page styles interfering with player styles. By default the prefix is ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"replay-"),". This means e.g. ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"audio-selector")," must be read as ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"replay-audio-selector"),", unless the class name prefix is changed."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Many controls are just concrete usages of generic components. E.g. both the fullscreen and play/pause button is a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"<ToggleButton/>"),". These share behaviour and also have common generic class names listed in the DOM and class name table."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"The table does not include children or content elements."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Some components might be unrendered based on their props values indicating that they are irrelevant. This is not described in the table."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Some controls have elements with two state class names. When the DOM and style table's state column only lists one class name, this means there is also a distinct state without any state class name.")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"skin-toggling-and-css-scoping-with-prefixed-class-names"}},"Skin toggling and CSS scoping with prefixed class names"),o.a.createElement(r.MDXTag,{name:"p",components:n},"All class names applied to DOM elements of controls and container components are prefixed. The default prefix is ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"replay-"),", and a full class name will then for instance be ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"replay-play-pause-button"),". The prefix can be changed when creating custom players, or simply by including a ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/custom-replay/configuration"}},"configuration override"),". In this way, the player can get different skins coexisting in the same CSS scope. "),o.a.createElement(r.MDXTag,{name:"p",components:n},"I.e. a common site-wide CSS bundle can contain different skins for Replay players branded differently according to e.g. content category. The prefix also ensures that frequently used class names, like ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"expanded"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"selected"),", are not in conflict because being used both in the player and in the page. The Replay class names will be ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"replay-expanded")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"replay-selected")," with the default prefix."),o.a.createElement(r.MDXTag,{name:"p",components:n},"See ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/custom-replay/configuration#changing-the-class-name-prefix"}},"Changing the class name prefix")," for how to toggle skins based on prefixed class names."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"not-bem-but-rather"}},"Not ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{href:"http://getbem.com/naming/"}},"BEM"),", but rather..."),o.a.createElement(r.MDXTag,{name:"p",components:n},"The controls' DOM elements typically have several class names: One corresponding to the control's name and purpose, and one for the generic component(s) implementing the control, and maybe one or more for the state of the control. For instance the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<PlayPauseButton/>"),"'s root element gets the following class attribute with the default prefix: "),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-html"}},'<div class="replay-play-pause-button replay-toggle-button replay-toggled-off">...</div>\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},"The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<FullscreenButton/>")," looks similar, but has one different class name."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-html"}},'<div class="replay-fullscreen-button replay-toggle-button replay-toggled-off">...</div>\n')),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"dry-and-common-rule-oriented-stylesheets"}},"DRY and common-rule oriented stylesheets"),o.a.createElement(r.MDXTag,{name:"p",components:n},"In the example above, the class names imply that all toggle buttons can get common styles applied by adding rules with the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".replay-toggle-button")," selector, while extra styles or overrides targeting the play/pause button can be set with the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".replay-play-pause-button"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},'With this approach, the CSS is organised with as few rules as possibly applying to many distinct components or controls. This is the traditional CSS approach, contrary to an "object-oriented" stylesheet, where CSS rules are tightly coupled to components and possibly repeated several times.'),o.a.createElement(r.MDXTag,{name:"p",components:n},"The intended outcome is to be DRY, in the sense that common styles and properties are only defined once, and some exceptions are simply overriding what's common through more targeted selectors."),o.a.createElement(r.MDXTag,{name:"p",components:n},"In summary:"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Some style rules apply to multiple controls. I.e. all control buttons share a lot of styling through common class names."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"The container element for the full UI sets a lot of class names based on the player state. This can be, and is used to create style rules with descendant selector.")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"css-module-organisation"}},"CSS module organisation"),o.a.createElement(r.MDXTag,{name:"p",components:n},"For reference, in the Replay code base, the ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/vimond/replay/blob/master/src/replay/replay-default.css"}},"default stylesheet")," is built with several CSS files with the following setup. However, replacement stylesheets can be organised independently of the default one."),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Some distinct, but general CSS files when there is a requirement for styles specifically for a component/control. These are located next to the components in the ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/vimond/replay/tree/master/src/replay/components"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"components/")," hierarchy"),", and contain no skin or layout styles."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"There are no CSS or SASS variables used."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Style rules for the default skin, are organised in different files, ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/vimond/replay/tree/master/src/replay/default-player/default-skin"}},"located in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"default-player/default-skin/")),": ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"sizesAndLayout.css"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"colors.css"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"animations.css"),", and assembled with some more styles in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"index.css"),". This kind of separation makes it fairly easy to change e.g. only the colours on all controls while being DRY."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"replay-default.css")," includes all above and constitutes the full default stylesheet.")))}}])&&m(t.prototype,a),s&&m(t,s),n}();d.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=docs-custom-replay-skins-styles.40378a7a57184a431b29.js.map