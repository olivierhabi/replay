(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/replay/components/player/VideoStreamer/ShakaVideoStreamer/ShakaVideoStreamer.js":function(e,t,r){"use strict";r.r(t);var a=r("./node_modules/shaka-player/dist/shaka-player.compiled.js"),n=r.n(a),i=r("./src/replay/components/player/VideoStreamer/common/createVideoStreamerComponent.js"),s=r("./src/replay/components/player/VideoStreamer/types.js");const o=new Date(0);var c=(e,t,r)=>{const a=r&&r.liveEdgeMargin||10;return{adjustForDvrStartOffset:function(){if(e&&e.paused&&t.isLive()){const r=t.seekRange().start||0;r>=e.currentTime&&(e.currentTime=r+10)}},calculateNewState:function(){const r=t.seekRange(),n=t.isLive(),i=n?t.getPresentationStartTimeAsDate():new Date,s=e.currentTime-r.start,c=0!==r.end||0!==r.start?r.end-r.start:e.duration===1/0||isNaN(e.duration)?0:e.duration,l=function(e,t){return t?e===1/0||0===e||e<100?"live":"livedvr":"ondemand"}(c,n),u=n&&s>c-a,d=function(e,t,r,a){if(e){if(isNaN(t)){const e=new Date,t=new Date(e.getTime()-1e3*a);return{absolutePosition:e,absoluteStartPosition:t}}return{absolutePosition:new Date(t.getTime()+1e3*(a+r.start)),absoluteStartPosition:new Date(t.getTime()+1e3*r.start)}}return{absolutePosition:o,absoluteStartPosition:o}}(n,i,r,s);return{position:s,duration:c,playMode:l,isAtLiveEdge:u,absolutePosition:d.absolutePosition,absoluteStartPosition:d.absoluteStartPosition}},setPosition:function(r){isNaN(r)&&r===1/0||(e.currentTime=t.seekRange().start+r)},gotoLive:function(){t.isLive()&&(e.currentTime=t.seekRange().end)}}};const l={3016:function(e){return e.data&&e.data[0]&&3===e.data[0]?{classification:"STREAM_ERROR_DECODE"}:{classification:"STREAM_ERROR"}},4012:{classification:"STREAM_ERROR"},6001:{classification:"STREAM_ERROR_DRM_CLIENT_UNAVAILABLE"},6002:{classification:"STREAM_ERROR_DRM_CLIENT_UNAVAILABLE"},6003:{classification:"STREAM_ERROR"},6007:{classification:"STREAM_ERROR_DOWNLOAD"},6008:{classification:"STREAM_ERROR_DOWNLOAD"},6013:{classification:"STREAM_ERROR"},7e3:{classification:""},1:{classification:"STREAM_ERROR_DOWNLOAD"},2:{classification:"STREAM_ERROR_DECODE"},3:{classification:"STREAM_ERROR_DECODE"},4:{classification:"STREAM_ERROR_DECODE"},5:{classification:"STREAM_ERROR_DECODE"},6:{classification:"STREAM_ERROR_DECODE"}},u={classification:"STREAM_ERROR"};function d(e,t){return Object.keys(t).filter(r=>t[r]===parseInt(e,10))[0]}function f(e,t){if(1001===t.code&&t.data){if(t.data[0]&&/\.ttml|\.vtt|\.srt|subtitle/.test(t.data[0]))return"WARNING";if(502===t.data[1])return"FATAL"}return 4012===t.code||e&&t.code<2e3||2===t.category?"WARNING":"FATAL"}var p=function(e,t,r,a,n){if(r instanceof s.a)return r;const i=function(e){if(e.code){const t=l[e.code]||l[Math.floor(e.code/1e3)];return"function"===typeof t?t(e)||u:t||u}return u}(r).classification;if((r.message||"").indexOf("MediaSource")>=0)return new s.a("STREAM_ERROR_TECHNOLOGY_UNSUPPORTED","shaka","This browser does not support playing MPEG-DASH streams with Shaka Player.","FATAL",r);if(i){if("STREAM_ERROR_DRM_CLIENT_UNAVAILABLE"===i&&function(e,t){return t&&"http:"===t.protocol&&0!==t.hostname.indexOf("localhost")&&e&&e.indexOf("Edge")<0&&e.indexOf("Chrome")>0}(a,n)){const e="DRM playback is blocked in Chrome. Likely reason: This page is not served with HTTPS.";return new s.a("STREAM_ERROR","shaka",e,f(t,r),r)}return new s.a(i,"shaka",function(e,t,r){if(1001===t.code&&null!=t.data[1])return"Shaka request failed with status "+t.data[1]+" for URL "+t.data[0];if(1002===t.code)return"Shaka request could not be performed for URL "+t.data[0];if(1003===t.code)return"Shaka request timed out for URL "+t.data[0];if(t.message)return t.message;if("STREAM_ERROR_DRM_CLIENT_UNAVAILABLE"===r)return"Playback of protected content appears to be disabled in the browser.";if("STREAM_ERROR_DRM_OUTPUT_BLOCKED"===r)return"Playback of protected content appears to be disallowed, perhaps due to a non-secure or HDCP-less screen being connected.";const a=d(t.code,e.util.Error.Code),n="Shaka error "+d(t.category,e.util.Error.Category)+"/"+a+" reported";return t.data[0]?t.data[0].message?n+": "+t.data[0].message:n+". See the sourceError property for more details.":n+" with no further details."}(e,r,i),f(t,r),r)}return new s.a("STREAM_ERROR","shaka","Unknown error reported from Shaka Player.","WARNING",r)},g=r("./src/replay/components/player/VideoStreamer/common/sourceNormalizer.js");function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const R="com.widevine.alpha",T="com.microsoft.playready";function h(e,t,r,a){const n=r.licenseUrl,i=r.drmType,s=r.licenseAcquisitionDetails||{},o=a&&a.licenseAcquisition||{},c=s.widevineServiceCertificateUrl||o.widevine&&o.widevine.serviceCertificateUrl,l=function(e,t){return/Android(.*)Chrome/.test(e)?{audioRobustness:"SW_SECURE_CRYPTO",videoRobustness:"SW_SECURE_CRYPTO",serviceCertificate:t,_classification:"Android Chrome 58 and newer"}:{audioRobustness:"SW_SECURE_CRYPTO",videoRobustness:"SW_SECURE_DECODE",serviceCertificate:t,_classification:"Desktop"}}(navigator.userAgent,c),u=s.licenseRequestHeaders,d=s.robustness,f=d&&d[R]?{audioRobustness:d[R].audio,videoRobustness:d[R].video}:o.widevine&&o.widevine.robustness?{audioRobustness:o.widevine.robustness.audio,videoRobustness:o.widevine.robustness.video}:{audioRobustness:l.audioRobustness,videoRobustness:l.videoRobustness},p=d&&d[T]?{audioRobustness:d[T].audio,videoRobustness:d[T].video}:o.playReady&&o.playReady.robustness?{audioRobustness:o.playReady.robustness.audio,videoRobustness:o.playReady.robustness.video}:{videoRobustness:"SW_SECURE_DECODE",audioRobustness:"SW_SECURE_CRYPTO"};u&&Object.keys(u).length>0&&function(e,t,r){t.getNetworkingEngine().registerRequestFilter((t,a)=>{t===e.net.NetworkingEngine.RequestType.LICENSE&&Object.entries(r).forEach(([e,t])=>{a.headers[e]=t})})}(e,t,u);const g=i?{[i]:n}:{[R]:n,[T]:n};return t.configure({drm:{servers:g,advanced:{"com.widevine.alpha":k({},f,{serverCertificate:l.serviceCertificate}),"com.microsoft.playready":p}}}),Promise.resolve()}var E=(e,t)=>(r,a)=>{const n=r.shakaRequestFilter,i=r.shakaResponseFilter,s=Object(g.a)(r.source);if(s)return function(e,t,r){const a=e.getNetworkingEngine();return a&&(a.clearAllRequestFilters(),a.clearAllResponseFilters(),t&&a.registerRequestFilter(t),r&&a.registerResponseFilter(r)),Promise.resolve()}(t,n,i).then(()=>h(e,t,s,r.configuration)).then(()=>t.load(s.streamUrl,s.startPosition)).catch(t=>{if(t&&t.code!==e.util.Error.Code.LOAD_INTERRUPTED)throw p(e,!1,t,navigator.userAgent,document.location)});if(a&&a.source){const e=t.getNetworkingEngine();return e.clearAllRequestFilters(),e.clearAllResponseFilters(),t.unload()}return Promise.resolve()},y=r("./src/replay/components/player/VideoStreamer/common/filteredStreamStateUpdater.js"),v=r("./src/replay/components/player/VideoStreamer/common/propertyApplier.js"),S=r("./src/replay/components/player/VideoStreamer/common/playbackLifeCycleManager.js"),O=r("./src/replay/components/player/VideoStreamer/BasicVideoStreamer/basicVideoEventHandlers.js");function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var A=({streamer:e,videoElement:t,shakaPlayer:r,shakaLib:a,streamRangeHelper:n,configuration:i,applyProperties:s,updateStreamState:o,log:c})=>{const l=Object(O.a)({streamer:e,videoElement:t,thirdPartyPlayer:r,streamRangeHelper:n,configuration:i,log:c,applyProperties:s,updateStreamState:o}),u=l.videoElementEventHandlers,d=l.pauseStreamRangeUpdater;let f={setStage:e=>{},getStage:()=>{}};const g={error:({detail:r})=>{c&&c("shaka.error");const n=p(a,"started"===f.getStage(),r,navigator.userAgent,document.location);e.props.onPlaybackError&&e.props.onPlaybackError(n),t.error&&o({error:t.error}),"FATAL"===n.severity&&(f.setStage("dead"),o({playState:"inactive",isBuffering:!1,isSeeking:!1})),d.stop()},loading:()=>{if(c&&c("shaka.loading"),"new"===f.getStage()){if(f.setStage("starting"),e.props.initialPlaybackProps){const t=e.props.initialPlaybackProps,r=t.isMuted,a=t.volume;s({isMuted:r,volume:a})}o({playState:"starting",isBuffering:!0,volume:t.volume,isMuted:t.muted,isPipAvailable:l.isPipAvailable()})}},streaming:()=>{if(c&&c("shaka.streaming"),e.props.initialPlaybackProps){const r=e.props.initialPlaybackProps,a=r.isPaused,n=r.bitrateFix,i=r.bitrateCap;s({bitrateFix:n,bitrateCap:i}),a&&t.pause(),null==n&&o({bitrateFix:null}),null==i&&o({bitrateCap:null})}else o({bitrateFix:null,bitrateCap:null});o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({isMuted:t.muted,volume:t.volume},n.calculateNewState()))},buffering:({buffering:e})=>{c&&c("shaka.buffering."+e.toString()),"started"===f.getStage()?o({isBuffering:e,playState:e?"buffering":t.paused?"playing":"paused"}):o({isBuffering:e})}};return Object.entries(g).forEach(([e,t])=>{r.addEventListener(e,t)}),{videoElementEventHandlers:{onCanPlay:u.onCanPlay,onPlaying:u.onPlaying,onPause:u.onPause,onSeeking:u.onSeeking,onSeeked:u.onSeeked,onDurationChange:u.onDurationChange,onTimeUpdate:u.onTimeUpdate,onVolumeChange:u.onVolumeChange,onProgress:u.onProgress,onEnded:u.onEnded},pauseStreamRangeUpdater:d,setLifeCycleManager:function(e){f=e,l.setLifeCycleManager(e)},cleanup:function(){l.cleanup(),Object.entries(g).forEach(([e,t])=>{r.removeEventListener(e,t)})}}},L=r("./src/replay/components/player/VideoStreamer/common/renderers.js"),_=r("./src/replay/components/player/VideoStreamer/common/logger.js"),C=r("./src/replay/components/common.js");function j(e){return e&&e.bandwidth||0}function x(e,t){return e-t}function D(e,t){return e.bandwidth-t.bandwidth}function M(e){return e&&Math.ceil(e.bandwidth/1e3)||0}function N(e){return e&&e.active&&"variant"===e.type}function V(e,t,r){return r.indexOf(e)===t}const U={abr:{enabled:!0,restrictions:{maxBandwidth:1/0}}};var B=(e,t,r,a)=>{let n=[];function i(){let e=t.getVariantTracks();const a=M(e.filter(N)[0]),i=e.map(M).filter(V).sort(x),s={};a&&(s.currentBitrate=M(e.filter(N)[0])),Object(C.i)(n,i)||(n=i,s.bitrates=i),Object.keys(s).length>0&&r(s)}const s={loading:()=>{n=[]},streaming:i,adaptation:i,trackschanged:i};return Object.entries(s).forEach(([e,r])=>{t.addEventListener(e,r)}),{cleanup:function(){Object.entries(s).forEach(([e,r])=>{t.removeEventListener(e,r)})},fixBitrate:function(e){if("string"===typeof e)try{const n=t.getVariantTracks().slice(0).sort(D),i="min"===e?n[0]:"max"===e?n[n.length-1]:null;i?(t.configure({abr:{enabled:!1,restrictions:{maxBandwidth:1/0}}}),t.selectVariantTrack(i),r({bitrateFix:M(i)})):(t.configure(U),r({bitrateFix:null}),a&&a("Unknown string specified for bitrate lock. Please use a value of type number if a bitrate specified by kbps is intended.",e))}catch(n){t.configure(U),r({bitrateFix:null}),a&&a("Attempting to set "+e+"imum bitrate, but no tracks found. A bit too early, maybe?",t.getVariantTracks())}else if(isNaN(e)||null==e||e<0||!e)t.configure(U),r({bitrateFix:null}),a&&a("Resetting bitrate locking.");else{const n=t.getVariantTracks().filter((function(t){return M(t)===e}))[0];n?(t.configure({abr:{enabled:!1,restrictions:{maxBandwidth:1/0}}}),t.selectVariantTrack(n),r({bitrateFix:M(n)}),a&&a("Locking at bitrate "+e+".",n)):(t.configure(U),r({bitrateFix:null}),a&&a("Could not finding matching track for specified lock bitrate "+e+".",t.getVariantTracks()))}},capBitrate:function(e){if(isNaN(e)||e===1/0||null==e||e<0)a&&a("Resetting restrictions for bitrate."),t.configure(U),r({bitrateCap:null});else{const n=t.getVariantTracks().map(j).sort(x)[0];if(n){const i=Math.max(1e3*e,n),s={maxBandwidth:i};t.configure({abr:{enabled:!0,restrictions:s}}),r({bitrateCap:Math.ceil(i/1e3)}),s.maxBandwidth===n?a&&a("Applying restrictions for bitrate, but aligning to lowest available bitrate.",s):a&&a("Applying restrictions for bitrate.",s)}else a&&a("Bitrate range not found. Not safe to applying restrictions for bitrate.",t.getVariantTracks())}}}};const F=["id","language","kind","label"];function H(e,t){return e&&t&&F.filter(r=>function(e,t){return e===t||null==e&&null==t||Number.isNaN(e)&&Number.isNaN(t)}(e[r],t[r])).length===F.length||!e&&!t}function I(e,t,r){return{id:e,kind:"subtitle"===r.kind?"subtitles":r.kind||"",label:r.label||"",language:r.language||"",origin:t}}const q=["text/vtt","application/ttml+xml"];function W(e){const t=e.contentType;return t&&q.filter(e=>0===t.indexOf(e)).length>0}var G=function(e,t){let r=[],a=S.b;function n(){return(e.getTextTracks()||[]).filter(e=>e.active)[0]}function i(i){let s=null,o=null;try{o=e.isTextTrackVisible()?n():null}catch(c){}if(o){const e=r.filter(e=>!e.isBlacklisted&&null!=e.selectableTrack&&H(e.shakaTrack,o))[0];s=e?e.selectableTrack:null}if(i){const e=r.filter(e=>e.selectableTrack).map(e=>e.selectableTrack);Object(C.i)(e,a)?t({textTracks:a,currentTextTrack:s}):(a=e,t({textTracks:e,currentTextTrack:s}))}else t({currentTextTrack:s})}function s(){r.length=0,i(!0)}function o(t){const a=t.filter(W);return e.removeEventListener("trackschanged",l.trackschanged),function(e){const t=e.map(e=>{const t={id:null,sourceTrack:e.sourceTrack,shakaTrack:null,isBlacklisted:!1,isLoaded:!1,error:null,selectableTrack:null,shakaLoadPromise:e.addPromise.then(e=>(t.isLoaded=!0,t.shakaTrack=e,t.selectableTrack=I(e.id,"side-loaded",e),e),r=>(t.error=r||new Error("Shaka rejected adding a track with the URL "+e.sourceTrack.src),t.isBlacklisted=!0,t.isLoaded=!0,null))};return t});return r=r.concat(t),Promise.all(t.map(e=>e.shakaLoadPromise))}(a.filter(e=>{const t=r.filter(t=>t.sourceTrack&&t.sourceTrack.src===e.src&&t.shakaTrack);if(0===t.length)return!0;{const r=t[0];return!!r.shakaTrack&&(r.sourceTrack=e,r.isBlacklisted=!1,r.isLoaded=!0,r.shakaTrack&&(r.selectableTrack=I(r.shakaTrack.id,"side-loaded",r.shakaTrack)),r.error=null,r.loadPromise=Promise.resolve(),!1)}}).map(t=>{let r=t.contentType;const a=r?r.indexOf(";charset"):-1;return a>0&&(r=r&&r.substr(0,a)),{addPromise:Promise.resolve(e.addTextTrack(t.src,t.language,t.kind,r,null,t.label)),sourceTrack:t}})).then(()=>{e.addEventListener("trackschanged",l.trackschanged),i(!0)})}function c(){const t=e.isTextTrackVisible()?n():null;r.filter(e=>null!=e.sourceTrack).forEach(r=>{r.selectableTrack&&(r.selectableTrack=null),t&&r.shakaTrack&&r.shakaTrack.active&&H(t,r.shakaTrack)&&e.setTextTrackVisibility(!1),r.isBlacklisted=!0})}const l={loading:s,trackschanged:function(){const t=e.getTextTracks()||[];if(0===t.length)s();else{const e=r.filter(e=>1===t.filter(t=>H(t,e.shakaTrack)).length),a=e.length<r.length;if(t.length>e.length){const a=t.filter(t=>0===e.filter(e=>H(t,e.shakaTrack)).length).map(e=>({sourceTrack:null,shakaTrack:e,isBlacklisted:!1,selectableTrack:I(e.id,"in-stream",e),isLoaded:!0,error:null}));r=e.concat(a),i(!0)}else a&&(r=e,i(!0))}},texttrackvisibility:()=>i(!1)};return Object.entries(l).forEach(([t,r])=>{e.addEventListener(t,r)}),{handleSelectedTextTrackChange:function(t){const a=t&&r.filter(e=>e.selectableTrack===t)[0];var n;(n=a&&a.shakaTrack)?(e.removeEventListener("texttrackvisibility",l.texttrackvisibility),e.isTextTrackVisible()||e.setTextTrackVisibility(!0),window.setTimeout(()=>{const t=(e.getTextTracks()||[]).filter(e=>H(e,n))[0];t?e.selectTextTrack(t):n&&e.selectTextTrack(n),i(!1),e.addEventListener("texttrackvisibility",l.texttrackvisibility)},1)):e.isTextTrackVisible()&&e.setTextTrackVisibility(!1)},handleTextTracksPropChange:function(e){c(),o(Array.isArray(e.textTracks)?e.textTracks:[])},handleSourcePropChange:function(e){let t=Array.isArray(e.textTracks)?e.textTracks:[];const r=Object(g.a)(e.source);r&&r.textTracks?o(t.concat(r.textTracks)):o(t)},clear:function(){c()},cleanup:function(){s(),Object.entries(l).forEach(([t,r])=>{e.removeEventListener(t,r)})}}};const Y=({language:e,role:t},r)=>({selectableTrack:{id:e+t||r,kind:t,label:"",language:e,origin:"in-stream"},language:e,role:t});var J=(e,t)=>{let r=[];function a(){const a=e.getVariantTracks().filter(e=>e.active)[0],n=a&&r.filter(e=>((e,{language:t,role:r})=>e.language===t&&(!r||e.roles&&e.roles.indexOf(r)>=0))(a,e)).map(e=>e.selectableTrack)[0];t({currentAudioTrack:n})}function n(){r=e.getAudioLanguagesAndRoles().map(Y);const n=r.map(e=>e.selectableTrack);t({audioTracks:n}),a()}const i={loading:n,trackschanged:n,adaptation:a};return Object.entries(i).forEach(([t,r])=>{e.addEventListener(t,r)}),{cleanup:function(){Object.entries(i).forEach(([t,r])=>{e.removeEventListener(t,r)})},handleSourceChange:function(){r.length=0},handleSelectedAudioTrackChange:function(t){const n=r.filter(e=>e.selectableTrack===t)[0];n&&(e.selectAudioLanguage(n.language,n.role),a())}}};const z=e=>(t,r,a)=>{let n;try{n=function(e,t,r){if(window.MediaSource&&MediaSource.isTypeSupported){const a=new e.Player(t);if(r&&r.shakaPlayer){const t=r.shakaPlayer;t.installPolyfills&&e.polyfill.installAll(),t.customConfiguration&&a.configure(t.customConfiguration)}const n=e.log&&e.log,i=r&&r.logLevel;return null!=i&&n&&("VERBOSE"===i?n.setLevel(n.Level.V2):n.setLevel(n.Level[i])),a}throw new s.a("STREAM_ERROR_TECHNOLOGY_UNSUPPORTED","shaka","MPEG-DASH playback with Shaka Player is not supported in this browser.")}(e,a,r)}catch(C){return Promise.reject(p(e,!1,C))}const i=c(a,n,r),o=E(e,n),l=Object(y.a)(t),u=G(n,l),d=J(n,l),f=B(t,n,l,Object(_.a)(window,"bitrateManager").log),g=Object(v.a)(a,i,u,d,f),b=Object(_.a)(window,"videoEvents").log,k=A({shakaLib:e,streamer:t,videoElement:a,shakaPlayer:n,streamRangeHelper:i,configuration:r,applyProperties:g,updateStreamState:l,log:b}),m=k.videoElementEventHandlers,R=k.setLifeCycleManager,T=Object(S.a)(l,k.pauseStreamRangeUpdater,Object(_.a)(window,"lifecycle").log);R(T);const h=T.startPlaybackSession,O=T.endPlaybackSession,P=n,w=L.a;return Promise.resolve({cleanup:function(){return u.cleanup(),d.cleanup(),T.cleanup(),k.cleanup(),f.cleanup(),function(e){return Promise.resolve(e&&e.destroy())}(n)},render:w,textTrackManager:u,audioTrackManager:d,thirdPartyPlayer:P,applyProperties:g,handleSourceChange:o,startPlaybackSession:h,endPlaybackSession:O,videoElementEventHandlers:m})};const K=(e=>Object(i.a)("ShakaVideoStreamer",z(e)))(n.a);t.default=K}}]);
//# sourceMappingURL=3.37452ea1ad8b4153a011.js.map