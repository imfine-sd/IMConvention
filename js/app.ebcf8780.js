(function(e){function t(t){for(var o,r,s=t[0],c=t[1],l=t[2],d=0,f=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},i={app:0},a=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/IMConvention/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"2fc2":function(e,t,n){},4404:function(e,t,n){"use strict";n("a7e6")},4537:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticClass:"app_main"},[n("router-view",{ref:"views"})],1)},a=[],r=n("5530"),s=(n("ade3"),{}),c="IMFINE_SD_STORAGE",l="STR_USER_NAME",u="STR_WEB_RTC_URL",d="STR_WEB_RTC_RECEIVE_STREAM",f="STR_WEB_RTC_SENDER_STREAM",v="STR_WEB_RTC_VIDEO_BITRATE",h="STR_WEB_RTC_AUDIO_BITRATE",m="STR_WEB_RTC_FRAME_SIZE",p="STR_WEB_RTC_FRMAE_RATE",g={STR_USER_NAME:l,STR_WEB_RTC_URL:u,STR_WEB_RTC_RECEIVE_STREAM:d,STR_WEB_RTC_SENDER_STREAM:f,STR_WEB_RTC_VIDEO_BITRATE:v,STR_WEB_RTC_AUDIO_BITRATE:h,STR_WEB_RTC_FRAME_SIZE:m,STR_WEB_RTC_FRMAE_RATE:p},_={STR_USER_NAME:"",STR_WEB_RTC_URL:"5f852799e11d1",STR_WEB_RTC_RECEIVE_STREAM:"",STR_WEB_RTC_SENDER_STREAM:"Test",STR_WEB_RTC_VIDEO_BITRATE:2e3,STR_WEB_RTC_AUDIO_BITRATE:64,STR_WEB_RTC_FRAME_SIZE:"default",STR_WEB_RTC_FRMAE_RATE:30};function b(){console.log("SD CONFIG START");var e=localStorage.getItem(c);s=JSON.parse(e)}function E(e){var t=s;return t&&t[e]?t[e]:_[e]}var S=n("2f62"),C={name:"App",components:{},created:function(){b(),this.loadMessage()},beforeDestroy:function(){this.DELETE_MESSAGE_EVENT()},data:function(){return{}},methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(S["d"])(["SET_NAME","DELETE_MESSAGE_EVENT"])),Object(S["b"])(["LOAD_MESSAGES","SET_MESSAGE_EVENT"])),{},{loadMessage:function(){var e=this;this.LOAD_MESSAGES().then((function(){console.log("load all messsage"),e.SET_MESSAGE_EVENT()}))}})},T=C,R=(n("034f"),n("2877")),w=n("6544"),O=n.n(w),A=n("7496"),y=Object(R["a"])(T,i,a,!1,null,null,null),B=y.exports;O()(y,{VApp:A["a"]});var M=n("9483");Object(M["a"])("".concat("/IMConvention/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var I=n("8c4f"),P=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"child",style:e.contents_style},[o("img",{staticClass:"logo",attrs:{src:n("f75f")}}),o("div",{staticClass:"version"},[e._v("Build ("+e._s(this.app_version)+")")]),o("div",{staticClass:"field_list"},[o("v-text-field",{attrs:{value:"John Doe",label:"CODE",outlined:""}}),o("v-text-field",{attrs:{value:"John Doe",label:"NICK NAME",outlined:""}})],1),o("v-btn",{staticClass:"btn",attrs:{text:"",color:"#03DAC5"},on:{click:e.gotoPreset}},[o("div",{staticClass:"font"},[e._v("CONTINUE")])])],1)},D=[],x=(n("b0c0"),{data:function(){return{app_version:0,contents_style:{height:document.documentElement+"px"}}},created:function(){this.app_version="25"},methods:{gotoPreset:function(){this.$router.push("/event/preset")},submit:function(){this.$v.$touch()},clear:function(){this.$v.$reset(),this.name="",this.email="",this.select=null,this.checkbox=!1}}}),W=x,N=(n("bbc2"),n("8336")),k=n("8654"),j=Object(R["a"])(W,P,D,!1,null,"55f0aa39",null),L=j.exports;O()(j,{VBtn:N["a"],VTextField:k["a"]});var U,$,V,z,F,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"root"},[n("HLSVideo",{style:{display:e.is_video_show}}),n("router-view",{staticClass:"contents"})],1),n("div",{class:e.sender_class},[n("WebRTCSender",{attrs:{width:e.sender_width,height:e.sender_height}})],1)])},G=[],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("video",{ref:"hls_player",attrs:{id:"player",muted:"",controls:""},domProps:{muted:!0}})},Z=[],K="EVENT_SET_EVENT_TYPE",Y="EVENT_UPDATE_LIST",q="EVENT_PUBLISH_WEBRTC",Q="EVENT_SHOW_SNACKBAR",X="EVENT_SET_VIDEO_LIST",ee="EVENT_SET_AUDIO_LIST",te="EVENT_SET_CAMERA_ID",ne=new o["a"],oe=window.Hls,ie=new oe,ae={data:function(){return{window_width:0,window_height:0}},computed:Object(r["a"])({},Object(S["c"])(["getHlsUrl"])),props:["props_tab"],created:function(){var e=this;this.$nextTick((function(){var t=9*window.innerWidth/16;e.$refs.hls_player.style.height=t+"px"})),this.$store.dispatch("LOAD_HLS_URL").then((function(){oe.isSupported()&&(ie.attachMedia(e.$refs.hls_player),ie.on(oe.Events.MEDIA_ATTACHED,(function(){ie.loadSource(e.getHlsUrl)})))})),ne.$on(K,(function(t){"/event/live"===t&&e.playVideo()}))},methods:{playVideo:function(){this.$refs.hls_player.play()}}},re=ae,se=(n("6be5"),Object(R["a"])(re,J,Z,!1,null,null,null)),ce=se.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("video",{staticClass:"video",attrs:{id:"wowza-sender",autoplay:"",playsinline:"",muted:""},domProps:{muted:!0}})},ue=[],de=(n("ac1f"),n("5319"),n("1276"),n("d81d"),n("b680"),n("d3b7"),n("3ca3"),n("498a"),n("ddb0"),n("2b3d"),n("53ca")),fe=(n("96cf"),n("1da1")),ve=(n("caad"),n("c975"),n("fb6a"),n("a9e3"),n("4d63"),n("25f0"),n("2532"),n("466d"),n("2ca0"),n("d093")),he=ve["a"].browserDetails;function me(e,t){var n=e.split(/\r\n/),o="",i=!1;for(var a in n){var r=n[a];r.length<=0||(o+=r,o+="\r\n",0=="a=rtcp-mux".localeCompare(r)&&0==i&&(o+=t,i=!0))}return o}function pe(e,t){var n=e.split(/\r\n/),o="",i=!1,a=!1,r=!1;for(var s in n){var c=n[s];c.length<=0||(c.includes("a=rtcp-rsize")&&(a=!0),c.includes("a=rtcp-mux")&&(r=!0,console.log(r)))}for(var l in n){var u=n[l];o+=u,o+="\r\n",0=="a=rtcp-rsize".localeCompare(u)&&0==i&&1==a&&(o+=t,i=!0),0=="a=rtcp-mux".localeCompare(u)&&1==i&&0==a&&(o+=t,i=!0),0=="a=rtcp-mux".localeCompare(u)&&0==i&&0==a&&(i=!0)}return o}function ge(e,t){for(var n in U){var o=U[n];if(o.includes(e)){if(e.includes("VP9")||e.includes("VP8")){var i="",a=o.split(/\r\n/);for(var r in a){var s=a[r];i+=s,i+="\r\n"}return t.includes("audio")&&(F=n),t.includes("video")&&(z=n),i}return t.includes("audio")&&(F=n),t.includes("video")&&(z=n),o}}return""}function _e(e){if(e.startsWith("a=rtpmap")||e.startsWith("a=rtcp-fb")||e.startsWith("a=fmtp")){var t=e.split(":");if(t.length>1){var n=t[1].split(" ");if(!isNaN(n[0])&&!n[1].startsWith("http")&&!n[1].startsWith("ur")){var o=U[n[0]];return o||(o=""),o+=e+"\r\n",U[n[0]]=o,!1}}}return!0}function be(e){var t=new RegExp("a=rtpmap:(\\d+) (\\w+)/(\\d+)"),n=e.match(t);return n&&n.length>=3?n:null}function Ee(e,t){U=new Object,$="42e01f",V="opus",z=-1,F=-1;var n=e.split(/\r\n/),o="header",i=!1,a="";for(var r in null!=t.videoCodec&&""!==t.videoCodec&&($=t.videoCodec),null!=t.audioCodec&&""!==t.audioCodec&&(V=t.audioCodec),n){var s=n[r];if(!(s.length<=0)){var c=_e(s);c&&(a+=s,a+="\r\n")}}for(var l in a=me(a,ge(V,"audio")),a=pe(a,ge($,"video")),e=a,n=e.split(/\r\n/),a="",n){var u=n[l];if(!(u.length<=0)){if("chrome"===he.browser){var d=void 0;if(0==u.indexOf("m=audio")&&-1!==F){d=u.split(" "),a+=d[0]+" "+d[1]+" "+d[2]+" "+F+"\r\n";continue}if(0==u.indexOf("m=video")&&-1!==z){d=u.split(" "),a+=d[0]+" "+d[1]+" "+d[2]+" "+z+"\r\n";continue}}if(a+=u,0===u.indexOf("m=audio")?(o="audio",i=!1):0===u.indexOf("m=video")?(o="video",i=!1):0==u.indexOf("a=rtpmap")&&(o="bandwidth",i=!1),"chrome"===he.browser&&(0===u.indexOf("a=mid:")||0==u.indexOf("a=rtpmap"))&&!i)if(0=="audio".localeCompare(o))void 0!==t.audioBitrate&&(a+="\r\nb=CT:"+t.audioBitrate,a+="\r\nb=AS:"+t.audioBitrate),i=!0;else if(0=="video".localeCompare(o))void 0!==t.videoBitrate&&(a+="\r\nb=CT:"+t.videoBitrate,a+="\r\nb=AS:"+t.videoBitrate,void 0!==t.videoFrameRate&&(a+="\r\na=framerate:"+t.videoFrameRate)),i=!0;else if(0=="bandwidth".localeCompare(o)){var f=void 0;if(f=be(u),null!==f){var v=f[2].toLowerCase();0!="vp9".localeCompare(v)&&0!="vp8".localeCompare(v)&&0!="h264".localeCompare(v)&&0!="red".localeCompare(v)&&0!="ulpfec".localeCompare(v)&&0!="rtx".localeCompare(v)||void 0!==t.videoBitrate&&(a+="\r\na=fmtp:"+f[1]+" x-google-min-bitrate="+t.videoBitrate+";x-google-max-bitrate="+t.videoBitrate),0!="opus".localeCompare(v)&&0!="isac".localeCompare(v)&&0!="g722".localeCompare(v)&&0!="pcmu".localeCompare(v)&&0!="pcma".localeCompare(v)&&0!="cn".localeCompare(v)||void 0!==t.audioBitrate&&(a+="\r\na=fmtp:"+f[1]+" x-google-min-bitrate="+t.audioBitrate+";x-google-max-bitrate="+t.audioBitrate)}}if(("firefox"===he.browser||"safari"===he.browser)&&0==u.indexOf("c=IN")){if(0=="audio".localeCompare(o)){""!==t.audioBitrate&&(a+="\r\nb=TIAS:"+1e3*Number(t.audioBitrate)+"\r\n",a+="b=AS:"+1e3*Number(t.audioBitrate)+"\r\n",a+="b=CT:"+1e3*Number(t.audioBitrate)+"\r\n");continue}if(0=="video".localeCompare(o)){""!==t.videoBitrate&&(a+="\r\nb=TIAS:"+1e3*Number(t.videoBitrate)+"\r\n",a+="b=AS:"+1e3*Number(t.videoBitrate)+"\r\n",a+="b=CT:"+1e3*Number(t.videoBitrate)+"\r\n");continue}}a+="\r\n"}}return a}var Se=void 0,Ce=void 0,Te=void 0,Re=void 0,we=void 0,Oe=void 0,Ae={videoBitrate:"",audioBitrate:"",videoFrameRate:"30",videoCodec:"42e01f",audioCodec:"opus"},ye=void 0,Be=void 0,Me=void 0,Ie=void 0,Pe={iceServers:[]};Pe=null;var De=void 0,xe=void 0;function We(e){console.log("WowzaPeerConnectionPublish.gotDescription: SDP:");var t=new Object;null!=Ae.audioBitrate&&(t.audioBitrate=Ae.audioBitrate),null!=Ae.videoBitrate&&(t.videoBitrate=Ae.videoBitrate),null!=Ae.videoFrameRate&&(t.videoFrameRate=Ae.videoFrameRate),null!=Ae.videoCodec&&(t.videoCodec=Ae.videoCodec),null!=Ae.audioCodec&&(t.audioCodec=Ae.audioCodec),null!=Se&&(e.sdp=Se(e.sdp,t)),console.log("WowzaPeerConnectionPublish.gotDescription: Setting local description SDP: "),Ie.setLocalDescription(e).then((function(){return Me.send('{"direction":"publish", "command":"sendOffer", "streamInfo":'+JSON.stringify(Oe)+', "sdp":'+JSON.stringify(e)+', "userData":'+JSON.stringify(ye)+"}")})).catch((function(e){var t=Object(r["a"])({message:"Peer connection failed"},e);Ve(t)}))}function Ne(e){return function(){null!=Ie&&Ie.getStats(null).then(e,(function(e){return console.log(e)}))}}function ke(e){try{Me=new WebSocket(e)}catch(t){return void Ve(t)}Me.binaryType="arraybuffer",Me.onopen=function(){console.log("WowzaPeerConnectionPublish.wsConnection.onopen"),Ie=new RTCPeerConnection(Pe),De=void 0,xe=void 0,Ie.onicecandidate=function(e){null!=e.candidate&&console.log("WowzaPeerConnectionPublish.gotIceCandidate: "+{ice:e.candidate})},Ie.onconnectionstatechange=function(e){null!=Ce&&Ce(e)},Ie.onnegotiationneeded=function(){Ie.createOffer(We,Ve)};var e=we.getTracks();for(var t in e){var n=Ie.addTrack(e[t],we);"audio"===e[t].type?xe=n:"video"===e[t].type&&(De=n)}},Me.onmessage=function(e){var t=JSON.parse(e.data),n=Number(t["status"]);if(200!=n)Ue(),Ve({message:t["statusDescription"]});else{var o=t["sdp"];if(void 0!==o){var i=new Object;void 0!==Ae.audioBitrate&&(i.audioBitrate=Ae.audioBitrate),void 0!==Ae.videoBitrate&&(i.videoBitrate=Ae.videoBitrate),console.log("WowzaPeerConnectionPublish.wsConnection.onmessage: Setting remote description SDP:"),Ie.setRemoteDescription(new RTCSessionDescription(o),(function(){}),Ve)}var a=t["iceCandidates"];if(void 0!==a)for(var r in a)console.log("WowzaPeerConnectionPublish.wsConnection.iceCandidates: "+a[r]),Ie.addIceCandidate(new RTCIceCandidate(a[r]))}},Me.onclose=function(){console.log("WowzaPeerConnectionPublish.wsConnection.onclose")},Me.onerror=function(t){console.log("wsConnection.onerror"),console.log(t);var n="Websocket connection failed: "+e;console.log(n);var o=Object(r["a"])({message:n},t);Ue(),Ve(o)}}function je(e,t){null!=Ie&&(console.log(Ie),"audio"===e?null!=xe?xe.replaceTrack(t):xe=Ie.addTrack(t):"video"===e&&(null!=De?De.replaceTrack(t):De=Ie.addTrack(t)))}function Le(e){var t=e.wsURL;we=e.localStream,null!=e.streamInfo&&(Oe=e.streamInfo),null!=e.mediaInfo&&(Ae=e.mediaInfo),null!=e.userData&&(ye=e.userData),null!=e.mungeSDP&&(Se=e.mungeSDP),null!=e.onconnectionstatechange&&(Ce=e.onconnectionstatechange),null!=e.onstop&&(Te=e.onstop),null!=e.onerror&&(Re=e.onerror),null!=e.onstats&&(Be=setInterval(Ne(e.onstats),5e3)),null==Ie?(null!=Me&&Me.close(),Me=null,console.log("WowzaPeerConnectionPublish.start: wsURL:"+t+" streamInfo:"+JSON.stringify(Oe)),ke(t)):console.log("WowzaPeerConnectionPublish.start: peerConnection already in use, not starting")}function Ue(){null!=Ie&&Ie.close(),Ie=void 0,De=void 0,xe=void 0,null!=Me&&Me.close(),Me=void 0,null!=Be&&(clearInterval(Be),Be=void 0),null!=Te&&Te()}function $e(){return null!=Ie}function Ve(e){console.trace(),null!=Re&&Re(e)}var ze={connect:ke,start:Le,stop:Ue,isStarted:$e,replaceTrack:je};function Fe(e){this.context=e,this.instant=0,this.slow=0,this.clip=0,this.script=e.createScriptProcessor(2048,1,1);var t=this;this.script.onaudioprocess=function(e){var n,o=e.inputBuffer.getChannelData(0),i=0,a=0;for(n=0;n<o.length;++n)i+=o[n]*o[n],Math.abs(o[n])>.99&&(a+=1);t.instant=Math.sqrt(i/o.length),t.slow=.95*t.slow+.05*t.instant,t.clip=a/o.length}}Fe.prototype.connectToSource=function(e,t){try{this.mic=this.context.createMediaStreamSource(e),this.mic.connect(this.script),this.script.connect(this.context.destination),"undefined"!==typeof t&&t(null)}catch(n){console.error(n),"undefined"!==typeof t&&t(n)}},Fe.prototype.stop=function(){this.mic.disconnect(),this.script.disconnect()};var He=Fe;window.AudioContext=window.AudioContext||window.webkitAudioContext||!1;var Ge={ready:!1,connectionState:"stopped",videoElementPublish:void 0,stream:void 0,isScreenSharing:!1,constraints:{video:{width:{min:"640",ideal:"1280",max:"1920"},height:{min:"360",ideal:"720",max:"1080"},frameRate:"30"},audio:!0},sdpURL:"",streamInfo:{applicationName:"",streamName:"",sessionId:"[empty]"},mediaInfo:{videoBitrate:"",audioBitrate:"",videoFrameRate:"30",videoCodec:"VP8",audioCodec:"opus"},userData:{param1:"value1"},audioEnabled:!0,videoEnabled:!0,useSoundMeter:!1,cameras:[],microphones:[]},Je=void 0,Ze=void 0,Ke={},Ye=function(e){return new Promise((function(t){Ge=Object(r["a"])(Object(r["a"])({},Ge),e),null!=Ke.onStateChanged&&Ke.onStateChanged(Ge),t(Ge)}))},qe=function(){return Ge},Qe=function(e){Ke=e},Xe=function(){var e=Object(fe["a"])(regeneratorRuntime.mark((function e(t){var n,o,i,a,s,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("WowzaWebRTC.set"),console.log(t),n=qe(),o=Object(r["a"])({},n.streamInfo),i=Object(r["a"])({},n.mediaInfo),a={},s=!1,null!=t.videoElementPublish&&(a["videoElementPublish"]=t.videoElementPublish),null!=t.useSoundMeter&&(a["useSoundMeter"]=t.useSoundMeter),null!=t.sdpURL&&(a["sdpURL"]=t.sdpURL.trim()),null!=t.applicationName&&(o["applicationName"]=t.applicationName.trim()),null!=t.streamName&&(o["streamName"]=t.streamName.trim()),null!=t.sessionId&&(o["sessionId"]=t.sessionId),null!=t.streamInfo&&(o=Object(r["a"])(Object(r["a"])({},o),t.streamInfo)),a["streamInfo"]=o,null!=t.videoBitrate&&(i.videoBitrate=t.videoBitrate),null!=t.audioBitrate&&(i.audioBitrate=t.audioBitrate),null!=t.videoFrameRate&&(i.videoFrameRate=t.videoFrameRate,a["constraints"]=Object(r["a"])({},n.constraints),"boolean"!==typeof a["constraints"]["video"]&&(""===i.videoFrameRate?delete a["constraints"]["video"]["frameRate"]:a["constraints"]["video"]["frameRate"]=t.videoFrameRate)),null!=t.videoCodec&&(i.videoCodec=t.videoCodec),null!=t.audioCodec&&(i.audioCodec=t.audioCodec),null!=t.mediaInfo&&(i=Object(r["a"])(Object(r["a"])({},i),t.streamInfo)),a["mediaInfo"]=i,null!=t.userData&&(a["userData"]=Object(r["a"])({},t.userData)),null!=t.constraints&&(a["constraints"]=t.constraints),null!=a.constraints&&JSON.stringify(n.constraints)!==JSON.stringify(a.constraints)&&(s=!0),e.prev=25,e.next=28,Ye(a);case 28:if(c=e.sent,null!=c.stream){e.next=32;break}return e.next=32,tt();case 32:return e.next=34,nt();case 34:if(l=e.sent,!s||null==l.stream){e.next=38;break}return e.next=38,et(l.stream,l.constraints);case 38:return e.abrupt("return",qe());case 41:return e.prev=41,e.t0=e["catch"](25),vt(e.t0),e.abrupt("return",null);case 45:case"end":return e.stop()}}),e,null,[[25,41]])})));return function(t){return e.apply(this,arguments)}}(),et=function(e,t){var n=[],o=e.getAudioTracks(),i=e.getVideoTracks();for(var a in o)n.push(o[a].applyConstraints(t["audio"]));for(var r in i)n.push(i[r].applyConstraints(t["video"]));return Promise.all(n)},tt=function(e){return e=e||"both",new Promise((function(t,n){console.log("WowzaWebRTCPublish.getUserMedia");var o=qe(),i=[],a=[];function r(e){return s.apply(this,arguments)}function s(){return s=Object(fe["a"])(regeneratorRuntime.mark((function n(r){var s,c,l,u,d,f,v,h;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("audio"===e&&a.length>0){for(c in s=r.getVideoTracks(),s)r.removeTrack(s[c]);r.addTrack(a[0])}else if("video"===e&&i.length>0){for(u in l=r.getAudioTracks(),l)r.removeTrack(l[u]);r.addTrack(i[0])}if(d={stream:r},"audio"!==e&&o.isScreenSharing){for(f in a)a[f].stop();d["isScreenSharing"]=!1}try{o.videoElementPublish.srcObject=r,d["ready"]=!0}catch(m){console.log("getUserMediaSuccess: error connecting stream to videoElementPublish, trying createObjectURL"),console.log(m),o.videoElementPublish.src=window.URL.createObjectURL(r),d["ready"]=!0}try{"video"!==e&&window.AudioContext&&o.useSoundMeter&&(v=new AudioContext,h=new He(v),h.connectToSource(r,(function(e){e?console.log(e):Ze=setInterval((function(){var e=qe().audioEnabled?h.instant.toFixed(2):0;null!=Ke.onSoundMeter&&Ke.onSoundMeter(e)}),200)})))}catch(p){console.log("getUserMediaSuccess: error creating audio meter"),console.log(p)}return n.next=7,Ye(d);case 7:t(d);case 8:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}null!=o.stream&&(i=o.stream.getAudioTracks(),a=o.stream.getVideoTracks()),"video"!==e&&(null!=Je&&Je.stop(),null!=Ze&&clearInterval(Ze)),null==o.videoElementPublish&&n({message:"videoElementPublish not set"}),navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia(o.constraints).then(r).catch(vt):navigator.getUserMedia?navigator.getUserMedia(o.constraints,r,(function(e){vt(e),n(e)})):(vt({message:"Your browser does not support WebRTC"}),n())}))},nt=function(){return new Promise((function(e,t){console.log("WowzaWebRTCPublish.getDevices"),navigator.mediaDevices.enumerateDevices().then((function(t){for(var n=Object(r["a"])({},qe().constraints),o=[],i=[],a=0;a<t.length;a++)"videoinput"===t[a].kind?(0===o.length&&(n.video=Object.assign({},n.video,{deviceId:t[a].deviceId})),o.push(t[a])):"audioinput"===t[a].kind&&(0===i.length&&(n.audio=Object.assign({},n.audio,{deviceId:t[a].deviceId})),i.push(t[a]));var s={cameras:o,microphones:i,constraints:n};e(Ye(s))})).catch((function(e){console.log("unable to detect AV devices: "+e),t(e)}))}))};function ot(e){null!=e.target&&null!=e.target.connectionState&&Ye({connectionState:e.target.connectionState})}function it(){Ye({connectionState:"stopped"})}function at(e,t){var n=qe();null!=n.stream&&null!=n.stream.getTracks&&n.stream.getTracks().map((function(n){n.kind===e&&(n.enabled=t)}))}function rt(e){console.log("WowzaWebRTC.setAudioEnabled:"+e),at("audio",e),Ye({audioEnabled:e})}function st(e){console.log("WowzaWebRTC.setVideoEnabled:"+e),at("video",e),Ye({videoEnabled:e})}function ct(){return new Promise((function(e,t){var n=qe().stream;function o(o){var i={stream:o,isScreenSharing:!0};n.getAudioTracks().length>0&&o.addTrack(n.getAudioTracks()[0]);try{qe().videoElementPublish.srcObject=o,i["ready"]=!0}catch(a){t(a)}Ye(i),e(o)}var i={video:!0};navigator.getDisplayMedia?navigator.getDisplayMedia(i).then((function(e){o(e,i)})).catch((function(e){t(e)})):navigator.mediaDevices.getDisplayMedia?navigator.mediaDevices.getDisplayMedia(i).then((function(e){o(e,i)})).catch((function(e){t(e)})):(i={video:{mediaSource:"screen"}},navigator.mediaDevices.getUserMedia(i).then((function(e){o(e,i)})).catch((function(e){t(e)})))}))}var lt=function e(t){if(console.log("WowzaWebRTC.setCamera: "+t),"screen"===t)ct().then((function(t){var n=qe();at("audio",n.audioEnabled),at("video",n.videoEnabled),t.getVideoTracks()[0].onended=function(){var t=qe();t.cameras.length>0&&e(t.cameras[0].deviceId)},ze.isStarted()&&(ft(),dt()),null!=Ke.onCameraChanged&&Ke.onCameraChanged("screen")}));else{var n=Object(r["a"])({},Ge.constraints);"boolean"===typeof n.video&&(n.video={}),n.video=Object.assign({},n.video,{deviceId:t}),Ye({constraints:n}).then((function(){tt("video").then((function(){var e=qe();at("audio",e.audioEnabled),at("video",e.videoEnabled),ze.isStarted()&&(ft(),dt()),null!=Ke.onCameraChanged&&Ke.onCameraChanged(t)}))}))}},ut=function(e){console.log("WowzaWebRTC.setMicrophone: "+e);var t=Object(r["a"])({},Ge.constraints);"boolean"===typeof t.audio&&(t.audio={}),t.audio=Object.assign({},t.audio,{deviceId:e}),Ye({constraints:t}).then((function(){tt("audio").then((function(){var t=qe();at("audio",t.audioEnabled),at("video",t.videoEnabled),ze.isStarted()&&(ft(),dt()),null!=Ke.onMicrophoneChanged&&Ke.onMicrophoneChanged(e)}))}))},dt=function(){var e=qe();console.log("WowzaWebRTC.start()"),ze.start({wsURL:e.sdpURL,localStream:e.stream,streamInfo:e.streamInfo,mediaInfo:e.mediaInfo,userData:e.userData,mungeSDP:Ee,onconnectionstatechange:ot,onstop:it,onstats:Ke.onStats||void 0,onerror:vt})},ft=function(){console.log("WowzaWebRTC.stop()"),ze.stop()},vt=function(e){console.log("WowzaWebRTC ERROR:"),console.log(e),null==e.message&&null!=e.target&&console.log("typeof error.target: "+Object(de["a"])(e.target)),null!=Ke.onError&&Ke.onError(e)},ht={on:Qe,set:Xe,getState:qe,start:dt,stop:ft,setAudioEnabled:rt,setVideoEnabled:st,setCamera:lt,setMicrophone:ut},mt=ht;window.WowzaWebRTCPublish=mt;var pt=ve["a"].browserDetails;function gt(){return{sdpURL:"wss://".concat(E(g.STR_WEB_RTC_URL),".streamlock.net/webrtc-session.json"),applicationName:"live",streamName:E(g.STR_WEB_RTC_SENDER_STREAM),audioBitrate:E(g.STR_WEB_RTC_AUDIO_BITRATE),audioCodec:"opus",videoBitrate:E(g.STR_WEB_RTC_VIDEO_BITRATE),videoCodec:"VP8",videoFrameRate:E(g.STR_WEB_RTC_FRMAE_RATE),frameSize:E(g.STR_WEB_RTC_FRAME_SIZE)}}var _t=null,bt=null,Et={publishing:!1,pendingPublish:!1,pendingPublishTimeout:void 0,muted:!1,video:!0,selectedCam:"",selectedMic:"",settings:gt()},St=function(e,t,n,o,i){kt(),mt.on({onStateChanged:function(o){console.log("WowzaWebRTCPublish.onStateChanged"),"connected"===o.connectionState?e():"failed"===o.connectionState?t():n()},onCameraChanged:function(e){e!==Et.selectedCam&&(Et.selectedCam=e)},onMicrophoneChanged:function(e){e!==Et.selectedMic&&(Et.selectedMic=e)},onError:o,onSoundMeter:i}),mt.set({videoElementPublish:document.getElementById("wowza-sender"),useSoundMeter:!1}).then((function(e){ne.$emit(X,e.cameras),ne.$emit(ee,e.microphones);var t=e.cameras[0].deviceId.replace("CameraMobile_","");mt.setCamera(t),Et.selectedCam=t}))},Ct=function(){if(""===Et.settings.sdpURL)throw"No stream configured.";if(""===Et.settings.applicationName)throw"Missing application name.";if(""===Et.settings.streamName)throw"Missing stream name.";return!0},Tt=function(e){var t=JSON.parse(JSON.stringify(mt.getState().constraints));if("default"===e)t.video["width"]={min:"640",ideal:"1280",max:"1920"},t.video["height"]={min:"360",ideal:"720",max:"1080"};else{var n=e.split("x");t.video["width"]={exact:n[0]},t.video["height"]={exact:n[1]}}mt.set({constraints:t})},Rt=function(e){return Et.settings=e,mt.set(e)},wt=function(){Ct()&&mt.start()},Ot=function(){mt.stop()},At=function(){mt.setVideoEnabled(!0)},yt=function(){mt.setAudioEnabled(!1)},Bt=function(e){var t;"OverconstrainedError"==e.name?(console.log("OverconstrainedError"),Tt("default")):t=e.message?e.message:e,Pt(t),Ot()},Mt=function e(t){t?(console.log("Publish Disable"),Et.pendingPublish=!0,Et.pendingPublishTimeout=setTimeout((function(){Ot(),Bt({message:"Publish failed. Unable to connect."}),e(!1)}),1e4)):(Et.pendingPublish=!1,null!=Et.pendingPublishTimeout&&(clearTimeout(Et.pendingPublishTimeout),Et.pendingPublishTimeout=void 0))},It=function(){return Rt(Et.settings)},Pt=function(e){console.log("showErrorPanel",e),_t(e)},Dt=function(){console.log("hideErrorPanel"),bt()},xt=function(){Et.publishing=!0,Mt(!1),Dt(),console.log("onPublishPeerConnected")},Wt=function(){Mt(!1),xt(),Bt({message:"Peer connection failed."}),console.log("onPublishPeerConnectionFailed")},Nt=function(){Et.pendingPublish||(Et.publishing=!1,console.log("onPublishPeerConnectionStopped"))},kt=function(){At(),yt(),ne.$on(te,(function(e){mt.setCamera(e),Et.selectedCam=e}))},jt=function(e,t){_t=e,bt=t;var n=function(){var e=Et.settings;null!=e.frameSize&&""!==e.frameSize&&"default"!==e.frameSize&&Tt(e.frameSize),"safari"===pt.browser&&console.log("Safari don't support VP9")};n(),St(xt,Wt,Nt,Bt)};function Lt(){Ot();try{At(),Dt(),console.log("PPPPPublish"),Et.settings=gt(),console.log(Et.settings.videoBitrate),It().then((function(){Mt(!0),wt()}))}catch(e){Bt(e)}}var Ut={created:function(){var e=function(e){ne.$emit(Q,e)},t=function(){console.log("### onHide")};this.$nextTick((function(){console.log("Sender Created"),jt(e,t)})),ne.$on(q,(function(){console.log("RECEIVE PUBLISH")}))}},$t=Ut,Vt=(n("ff7a"),Object(R["a"])($t,le,ue,!1,null,"7acb88da",null)),zt=Vt.exports,Ft={data:function(){return{is_video_show:"none",sender_class:"preset_sender",sender_width:0,sender_height:0,sender_size:0}},components:{WebRTCSender:zt,HLSVideo:ce},created:function(){var e=this;ne.$on(K,(function(){e.setLiveStatus()})),console.log(this.$router.history.current.path);var t=window.innerWidth;this.sender_width=t,this.sender_height=t,"/event/live"===this.$router.history.current.path&&(console.log("setLiveStatus"),this.setLiveStatus())},methods:{goBack:function(){this.$router.go(-1)},gotoHome:function(){this.$router.push("/info")},setLiveStatus:function(){console.log("!!!!"),this.is_video_show="block",this.sender_class="live_sender";var e=9*window.innerWidth/16;this.sender_width=9*e/16,this.sender_height=e,console.log(e,window.innerWidth),console.log(this.sender_width,this.sender_height)}}},Ht=Ft,Gt=(n("c3bb"),Object(R["a"])(Ht,H,G,!1,null,"28e96f0a",null)),Jt=Gt.exports,Zt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"root"},[n("div",{staticClass:"title",style:{height:e.option_height}},[e._v(" 장비의 상태를 확인하세요. ")]),n("div",{staticClass:"option",style:{height:e.option_height}},[n("v-btn",{staticClass:"btn ok_btn",attrs:{rounded:"",outlined:""},on:{click:e.gotoLive}},[e._v(" 입장 ")]),n("v-btn",{staticClass:"btn cancle_btn",attrs:{rounded:"",outlined:""},on:{click:e.gotoHome}},[e._v(" 취소 ")])],1)])},Kt=[],Yt={data:function(){return{option_height:"0px"}},created:function(){var e=this;this.$nextTick((function(){var t=window.innerHeight-window.innerWidth;e.option_height=.5*t+"px"}))},methods:{gotoLive:function(){console.log("PUBLISH"),Lt(),this.$router.push("/event/live")},gotoHome:function(){this.$router.push("/")}}},qt=Yt,Qt=(n("9ea9"),Object(R["a"])(qt,Zt,Kt,!1,null,"25ed932b",null)),Xt=Qt.exports;O()(Qt,{VBtn:N["a"]});var en=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"root"},[n("Chatting")],1)},tn=[],nn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"bg",staticClass:"tab_bg"},[n("ChattingList",{staticClass:"list"}),n("div",{staticClass:"shadow_up"}),n("ChattingInput",{staticClass:"input"})],1)},on=[],an=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"outline"},[n("form",{staticClass:"form"},[n("input",{staticClass:"text_input",attrs:{type:"text"},domProps:{value:e.input_data},on:{input:e.updataInput,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage(t)}}})]),n("v-btn",{ref:"btn",class:{send_btn:1==this.isEdit,wait_btn:0==this.isEdit},style:1==this.isEdit&&{color:"white"},attrs:{icon:""},on:{click:e.sendMessage}},[n("v-icon",[e._v("mdi-arrow-up")])],1)],1)},rn=[],sn={data:function(){return{input_data:"",isEdit:!1}},methods:{sendMessage:function(){var e=this;if(this.input_data){var t=this.input_data;this.$store.dispatch("SEND_MESSAGE",t).then((function(t){console.log("RR = ",t),t||(e.input_data="",e.isEdit=!1,ne.$emit(Y))}))}},getBtnClass:function(){return 1==this.$refs.input.value?"send_btn":"wait_btn"},updataInput:function(e){this.input_data=e.target.value,this.isEdit=this.input_data.length>0}}},cn=sn,ln=(n("a21f"),n("132d")),un=Object(R["a"])(cn,an,rn,!1,null,"61310718",null),dn=un.exports;O()(un,{VBtn:N["a"],VIcon:ln["a"]});var fn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"root"},[n("ul",{ref:"rlist",staticClass:"chatting_list"},e._l(e.getMessages,(function(t){return n("li",{key:t.index},[n("div",{class:!!t.isMine&&e.msg_right},[n("div",{staticClass:"msg_item",class:t.isMine?e.msg_mine:e.msg_other},[n("div",{staticClass:"msg_top"},[n("div",{staticClass:"msg_user"},[e._v(" "+e._s(t.user)+" ")]),n("div",{staticClass:"msg_time"},[e._v(" "+e._s(e.getFormatDate(t.time))+" ")])]),n("div",{staticClass:"msg_contents"},[e._v(" "+e._s(t.message)+" ")])])])])})),0)])},vn=[],hn={data:function(){return{msg_right:"msg_right",msg_mine:"msg_mine",msg_other:"msg_other"}},computed:Object(r["a"])({},Object(S["c"])(["getMessages"])),created:function(){var e=this;ne.$on(Y,(function(){e.scrollToBottom()})),this.$nextTick((function(){var t=e.$refs.rlist,n=window.innerHeight-t.getBoundingClientRect().y-50;console.log("##",n),t.style.height=n+"px"}))},mounted:function(){var e=this;this.$nextTick((function(){e.scrollToBottom()}))},watch:{getMessages:function(){console.log("add item"),this.$nextTick((function(){this.scrollToBottom()}))}},methods:{getFormatDate:function(e){var t=new Date(e);return t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})},scrollToBottom:function(){var e=this.$refs.rlist;e.scrollTop=e.scrollHeight}}},mn=hn,pn=(n("890d"),Object(R["a"])(mn,fn,vn,!1,null,"4779c1e9",null)),gn=pn.exports,_n={components:{ChattingInput:dn,ChattingList:gn},created:function(){var e=this;this.$nextTick((function(){var t=e.$refs.bg.getBoundingClientRect().top,n=window.innerHeight-t;console.log(t,n),e.$refs.bg.style.height=n-55+"px"}))}},bn=_n,En=(n("80d3"),Object(R["a"])(bn,nn,on,!1,null,"4bf3f9c6",null)),Sn=En.exports,Cn={components:{Chatting:Sn},data:function(){return{video_width:0,video_height:0}},created:function(){this.video_width=window.innerWidth,this.video_height=9*window.innerWidth/16}},Tn=Cn,Rn=(n("4404"),Object(R["a"])(Tn,en,tn,!1,null,"c818e0c8",null)),wn=Rn.exports;o["a"].use(I["a"]);var On=function(e,t,n){"/event/preset"===t.path&&"/event/live"===e.path||"/info"===t.path&&"/event/preset"===e.path?(n(),ne.$emit(K,e.path)):yn.push("/")},An=[{path:"/",redirect:"/info"},{path:"/info",component:L},{path:"/event",component:Jt,children:[{path:"preset",component:Xt,beforeEnter:On},{path:"live",component:wn,beforeEnter:On}]}],yn=new I["a"]({routes:An}),Bn=yn,Mn=(n("99af"),n("4160"),n("159b"),n("260b")),In=(n("66ce"),{apiKey:"AIzaSyBtnFzSNMp30pWM2CNva-U9ZM1sdE8lzts",authDomain:"fir-ca8ad.firebaseapp.com",databaseURL:"https://fir-ca8ad.firebaseio.com",projectId:"fir-ca8ad",storageBucket:"fir-ca8ad.appspot.com",messagingSenderId:"371247898053",appId:"1:371247898053:web:a657c9fb4898a89947bfac",measurementId:"G-BWCDY22QJR"});function Pn(e){return Mn["a"].database().ref("/messages").orderByChild("time").limitToLast(e).once("value")}function Dn(e){return Mn["a"].database().ref("/messages").orderByChild("time").startAt(e+1).once("value")}function xn(e,t){var n=Mn["a"].database().ref("/"+e).child("data").push().key,o="/"+n,i={};return i[e+"/"+o]=Object(r["a"])({},t),Mn["a"].database().ref().update(i,(function(e){return e}))}function Wn(){return Mn["a"].database().ref("/").once("value").then((function(e){var t=e.val()&&e.val().hls_url||"";return t}))}Mn["a"].initializeApp(In),o["a"].use(S["a"]);var Nn,kn=100,jn=new S["a"].Store({state:{dic_list:[],video_items:["SENDER","RECIVER","HLS"],tab_items:["Info","Chatting","Emoji"],hrl_url:"",last_timestamp:0,messages:[],user_name:"",emoji_list:["😍","🥳","✌🏻","😺","🤡","👍🏻","💋","⭐️","🌹"],tab_contents_height:0},getters:{getMessages:function(e){return e.messages},getHlsUrl:function(e){return e.hrl_url}},mutations:{SET_TAB_CONTENS_HEIGHT:function(e,t){e.tab_contents_height=t},ADD_MESSAGES:function(e,t){e.messages.length>=kn&&e.messages.shift(),e.messages=e.messages.concat(t)},SET_NAME:function(e,t){e.user_name=t},SET_HLS_URL:function(e,t){e.hrl_url=t},DELETE_MESSAGE_EVENT:function(){clearTimeout(Nn),Nn=null}},actions:{LOAD_MESSAGES:function(e){var t=e.state,n=e.commit;return Pn(kn).then((function(e){var o=[];return e.forEach((function(e){t.dic_list.push(e.key);var n=e.val();t.last_timestamp=n.time;var i=n.type||"MESSAGE";if("MESSAGE"===i){a&&(n.isMine=!0),n.index=e.key;var a=n.user===t.user_name;o.push(n)}})),n("ADD_MESSAGES",o),e}))},SET_MESSAGE_EVENT:function(e){var t=e.state,n=e.commit;Nn=setInterval(Object(fe["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:Dn(t.last_timestamp).then((function(e){var o=null,i=[];e.forEach((function(e){var n=e.val();o=n;var a=-1!=t.dic_list.indexOf(e.key);if(!a){var r=n.type||"MESSAGE";if("MESSAGE"===r){n.index=e.key;var s=n.user===t.user_name;s||i.push(e.val())}else ne.$emit("RECIEVE_DATA",e.val());t.dic_list.push(e.key)}})),i.length>0&&(n("ADD_MESSAGES",i),1==o&&(t.last_timestamp=o.time))}));case 1:case"end":return e.stop()}}),e)}))),1e3)},SEND_MESSAGE:function(e,t){var n=e.commit,o=e.state,i={type:"MESSAGE",user:o.user_name,time:(new Date).getTime(),message:t};xn("messages",i).then((function(e){return console.log("SEND_RESULT",e),e||n("ADD_MESSAGES",Object(r["a"])(Object(r["a"])({},i),{},{isMine:!0})),e}))},LOAD_HLS_URL:function(e){return Object(fe["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Wn();case 3:o=t.sent,n("SET_HLS_URL",o);case 5:case"end":return t.stop()}}),t)})))()},ADD_EMOJI:function(e,t){var n=e.state,o={type:"EMOJI",user:n.user_name,time:(new Date).getTime(),message:t};xn("messages",o).then((function(e){return console.log("SEND_EMOJI_RESULT",e),e}))}},modules:{}}),Ln=n("f309");o["a"].use(Ln["a"]);var Un=new Ln["a"]({});o["a"].config.productionTip=!1,new o["a"]({router:Bn,store:jn,vuetify:Un,render:function(e){return e(B)}}).$mount("#app")},"5b4a":function(e,t,n){},"65b0":function(e,t,n){},"6be5":function(e,t,n){"use strict";n("d229")},"80d3":function(e,t,n){"use strict";n("5b4a")},"85ec":function(e,t,n){},"890d":function(e,t,n){"use strict";n("4537")},"9ea9":function(e,t,n){"use strict";n("2fc2")},a21f:function(e,t,n){"use strict";n("65b0")},a7e6:function(e,t,n){},bbc2:function(e,t,n){"use strict";n("ec54")},c29e:function(e,t,n){},c3bb:function(e,t,n){"use strict";n("c29e")},d229:function(e,t,n){},ec54:function(e,t,n){},eefa:function(e,t,n){},f75f:function(e,t,n){e.exports=n.p+"img/LOGO-1.a61f62f6.gif"},ff7a:function(e,t,n){"use strict";n("eefa")}});
//# sourceMappingURL=app.ebcf8780.js.map