(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,n){e.exports=n.p+"static/media/logo.e403987b.png"},45:function(e,t,n){e.exports=n.p+"static/media/dual-ring-spinner-0.5s-200px.438ede40.svg"},47:function(e,t,n){e.exports=n(85)},56:function(e,t,n){},62:function(e,t,n){},83:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(25),r=n.n(i),c=n(4),s=n(17),u=n(20),l=(n(56),n(5)),d=n(6),m=n(8),p=n(7),g=n(9),h={home:"/",view:"/view",options:"/options",camera:"/camera",share:"/share",loading:"/loading",codes:"/codes",loadImage:"/v/:code",tac:"/terms-and-conditions"},b={},f=function(e){return b.push(e)},v=function(e){b.push(h.loading,{next:e})},O=n(1),w=n(2),j="#282c34",x="white",y="#e93578",C="#f4f4f4",I="AguafinaScript",k={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"top"},S={padding:"5px",color:x,fontSize:"2rem"},T=Object(w.a)({},k,{justifyContent:"center",padding:"10px"}),E=Object(w.a)({},S,{marginBottom:"10px"}),R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:420,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:420;return new Promise(function(a,o){if(e&&e.length>2e3){var i=document.createElement("img");i.onload=function(){var e=document.createElement("canvas"),r=e.getContext("2d");r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high";var c=i.height,s=i.width;if(s>c?s>n&&(c*=n/s,s=n):c>t&&(s*=t/c,c=t),e.height=c,e.width=s,s>0&&c>0){r.drawImage(i,0,0,s,c);var u=e.toDataURL("image/jpeg");a(u)}else o("Failed to load image.")},i.onerror=function(){return o(i.error)},i.src=e}else o("Failed to load file OR img too small.")})},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:420,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:420;return new Promise(function(a,o){try{var i=new FileReader;i.onload=function(e){var i=e.target.result;R(i,t,n).then(function(e){return a(e)},function(e){return o(e)})},i.onerror=function(){return o(i.error)},i.readAsDataURL(e)}catch(r){o(r)}})},D=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t?90:-90,a=document.createElement("canvas");a.height=e.height,a.width=e.width;var o=a.getContext("2d");o.imageSmoothingEnabled=!0,o.imageSmoothingQuality="high",o.drawImage(e,0,0),o.clearRect(0,0,e.width,e.height),o.save(),a.width=e.height,a.height=e.width,o.translate(0,-e.height/2),o.rotate(n*Math.PI/180),t?o.drawImage(e,e.height/2,-e.height):o.drawImage(e,-e.width-e.height/2,0),o.restore(),e.src=a.toDataURL("image/png")},A=function(e){return{type:"IMG_UPDATE",img:e}},M=function(e){return e&&e.tacReducer&&e.tacReducer.visible},L={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"top"},N=Object(w.a)({backgroundColor:"#282c34",minHeight:"100vh"},L,{fontSize:"calc(10px + 2vmin)",color:"white"}),F={fontFamily:"AguafinaScript",fontSize:"3rem",marginTop:"20px"},G=Object(w.a)({position:"relative",bottom:"0px",width:"100%",height:"40px"},L,{justifyContent:"center",a:{color:"white",textDecoration:"none"}}),z=Object(w.a)({},L,{marginTop:"20px",width:"100%"}),P=n(42),V=n.n(P),U=Object(c.b)(function(e){return{showTac:M(e)}})(function(e){return Object(O.a)("div",{css:N},Object(O.a)("div",{css:F},"SeeMeOnce"),e.showLogo&&Object(O.a)("div",null,Object(O.a)("img",{src:V.a,alt:""})),Object(O.a)("div",{css:z},e.children),e.showTac&&Object(O.a)("div",{css:G,style:e.tacBottom&&{position:"absolute"}},Object(O.a)(s.b,{to:h.tac},"Terms & Conditions")))}),H=Object(w.a)({width:"100%"},k),B={input:{width:"300px",height:"46px",borderRadius:"8px",borderColor:y,color:y,textAlign:"center",fontSize:"1.8rem",boxSizing:"unset",padding:"4px","&::placeholder":{color:C},"&:focus":{outline:"none"}}},W=Object(w.a)({},S,{fontSize:"1.2rem",padding:"2px"}),Y=Object(c.b)(function(e){return{}},function(e){return{rdxTacShow:function(){return e({type:"TAC_SHOW"})},rdxTacHide:function(){return e({type:"TAC_HIDE"})}}})(function(e){var t=e.title,n=e.value,a=e.placeholder,o=e.size,i=e.inputStyle,r=e.onChange,c=e.onClick,s=e.getRef,u=e.inputProps,l=e.disableTacHidding,d=e.rdxTacShow,m=e.rdxTacHide;return Object(O.a)("div",{css:H},Object(O.a)("div",{css:"sm"===o?W:S},Object(O.a)("span",null,t)),Object(O.a)("div",{css:B},Object(O.a)("input",Object.assign({style:i,type:"text",placeholder:a},n&&{value:n},{onChange:function(e){return r?r(e.target.value):function(){return null}},onClick:c,onFocus:l?function(){return null}:m,onBlur:l?function(){return null}:d,ref:function(e){return s&&s(e)}},u))))}),q={backgroundColor:y,color:x,width:"304px",height:"50px",borderRadius:"8px",fontSize:"1.2rem",fontFamily:"AllertaStencil",borderStyle:"none","&:active":{border:"1px solid ".concat(x),borderRadius:"8px"},"&:focus":{border:"1px solid ".concat(x),borderRadius:"8px",outline:"none"}},J=function(e){var t=e.text,n=e.onClick;return Object(O.a)("button",{css:q,onClick:n},t)},X=n(44),Q=n.n(X),K=Object(w.a)({},k,{zIndex:"20",marginTop:"15px",color:x}),Z=(n(62),n(63),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).getCroppedImg=function(e,t,n){var a=document.createElement("canvas");return a.width=t.width,a.height=t.height,a.getContext("2d").drawImage(e,t.x,t.y,t.width,t.height,0,0,t.width,t.height),a.toDataURL("image/jpeg")},n.onRotate=function(){n.cropInfo.image&&D(n.cropInfo.image,!1)},n.state={crop:{aspect:1,x:20,y:10,height:50}},n.cropInfo={},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return Object(O.a)("div",null,Object(O.a)("div",{className:"img-resize-mask"}),",",Object(O.a)("div",{className:"img-resize-container"},Object(O.a)(Q.a,{src:this.props.dataUrl,crop:this.state.crop,keepSelection:!0,onChange:function(t){e.setState({crop:t})},onComplete:function(t,n){e.cropInfo=Object(w.a)({},e.cropInfo,{pixelCrop:n}),console.log("cropInfo: ",e.cropInfo)},onImageLoaded:function(t,n){e.cropInfo={image:t,pixelCrop:n}}}),Object(O.a)("div",{css:K},Object(O.a)("i",{className:"fas fa-sync fa-2x",onClick:function(){return e.onRotate()}})),Object(O.a)("div",{css:K},Object(O.a)("div",null,Object(O.a)("button",{className:"btn btn-success btn-lg",onClick:function(){return e.props.onSave(e.getCroppedImg(e.cropInfo.image,e.cropInfo.pixelCrop))}},Object(O.a)("i",{className:"fas fa-plus fa-sm"}),"Save"),Object(O.a)("button",{className:"btn btn-danger btn-lg",onClick:this.props.onCancel},Object(O.a)("i",{className:"fas fa-times fa-sm"}),"Cancel")))))}}]),t}(a.Component)),$=function(){return Object(O.a)(a.Fragment,null,Object(O.a)("div",{css:T},"--OR--"),Object(O.a)(J,{text:"Share Image Annonimously",onClick:function(){return f(h.share)}}))},ee=function(e){var t=e.code;return Object(O.a)(a.Fragment,null,Object(O.a)("br",null),Object(O.a)(J,{text:"View Image",onClick:function(){return f("".concat(h.view,"/").concat(t))}}))},te=function(e){var t=e.code,n=e.showViewBtn,a=e.onCodeChange;return Object(O.a)("div",null,Object(O.a)(Y,{title:"Have A View Code?",placeholder:"Enter Code Here",onChange:a}),n?Object(O.a)(ee,{code:t}):Object(O.a)($,null))},ne=function(e){var t=e.uploadInput,n=e.handleImage,a=e.askForImage;return Object(O.a)("div",{css:k},Object(O.a)("div",{css:E},"Choose How To Share"),Object(O.a)(J,{text:"Share From File",onClick:a}),Object(O.a)("div",{css:T},"--OR--"),Object(O.a)(J,{text:"Take A Photo",onClick:function(){return f(h.camera)}}),Object(O.a)("input",{type:"file",ref:t,onChange:n,accept:"image/*",hidden:!0}))},ae=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).onCodeChange=function(e){return n.setState({code:e,showViewBtn:!!e})},n.handleImage=function(e){if(e.target.files.length>0){var t=e.target.files[0];_(t).then(function(e){return n.setState({imageToCrop:e})})}},n.askForImage=function(){n.uploadInput.current.click()},n.handleCroppedImage=function(e){R(e,420,420).then(function(e){n.setState({imageToCrop:null},function(){n.props.rdxUpdateImg(e),f(h.options)})})},n.handleCropCancel=function(){window.location.reload(!0)},n.state={showViewBtn:!1,code:"",imageToCrop:null},n.uploadInput=o.a.createRef(),n.cropInfo={},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.showViewBtn,o=t.code,i=t.imageToCrop;return Object(O.a)(a.Fragment,null,i&&Object(O.a)(Z,{dataUrl:this.state.imageToCrop,onSave:function(t){return e.handleCroppedImage(t)},onCancel:function(){return e.handleCropCancel()}}),Object(O.a)(U,{showLogo:!0},Object(O.a)(u.c,null,Object(O.a)(u.a,{path:h.share,render:function(t){return Object(O.a)(ne,{uploadInput:e.uploadInput,handleImage:e.handleImage,askForImage:e.askForImage})}}),Object(O.a)(u.a,{exact:!0,path:h.home,render:function(t){return Object(O.a)(te,{showViewBtn:n,code:o,onCodeChange:e.onCodeChange})}}))))}}]),t}(a.Component),oe=Object(c.b)(function(e){return{}},function(e){return{rdxUpdateImg:function(t){return e(A(t))}}})(ae),ie={img:{border:"1px solid gray",borderRadius:"20px"}},re=Object(w.a)({},k,{justifyContent:"center",textAlign:"center",padding:"5px",color:x}),ce=Object(w.a)({},k,{width:"304px",padding:"5px",margin:"10px 0px"}),se=function(e){var t="".concat(e," sec");if(e>60){var n=e%60,a=Math.floor(e/60);t="".concat(a," min ").concat(n," sec")}return t},ue=function(e){return e&&e.imgReducer&&e.imgReducer.img},le=function(e){return e&&e.imgReducer&&e.imgReducer.viewDuration},de=function(e){return e&&e.imgReducer&&{img:e.imgReducer.img,viewDuration:e.imgReducer.viewDuration}},me=n(13),pe=n.n(me),ge=n(18),he=n(22),be=n.n(he),fe="https://localhost:5000/api",ve=("".concat("https://localhost:3000"),"".concat(fe),"".concat(fe,"/code"),"".concat(fe,"/img"),{isDebugMode:!1,baseUrlFE:"".concat("https://seemeonce.net"),baseUrlBE:"".concat("https://see-me-once.azurewebsites.net/api"),api:{code:{path:"".concat("https://see-me-once.azurewebsites.net/api","/ImagePush?code=IaS1Li5YcJP0TEwVuH7YMVVsIzZabevrNU1LtVMVeELUrCsCYMW8SQ=="),method:"POST"},img:{path:"".concat("https://see-me-once.azurewebsites.net/api","/ImagePull?code=DujTlQjiGXrSNvOpe7rF7AF/S8o5qS390hq5ZHbmzTJKalbl9dB21A=="),method:"GET"}}}),Oe=function e(t){ve.isDebugMode&&console.log("exception >> ",e)},we=function(e){ve.isDebugMode&&console.log("warning >> ",e)};be.a.interceptors.response.use(null,function(e){return e.response&&e.response.status>=400&&e.response.status<500||Oe(e),Promise.reject(e)});be.a.get,be.a.post,be.a.put,be.a.delete;var je=function(e,t){e&&t&&localStorage.setItem(e,JSON.stringify(t))},xe=function(e){var t=void 0;if(e){var n=localStorage.getItem(e);n&&(t=JSON.parse(n))}return t},ye=function(e){return new Promise(function(t,n){return setTimeout(function(){var n="FAS99XX000B".concat(Math.floor(1e4*Math.random())),a=xe("see_me_once")||{};a[n]=e,je("see_me_once",a),t({code:n})},1e3)})},Ce=function(){var e=Object(ge.a)(pe.a.mark(function e(t){var n,a;return pe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=null,!(t&&t.img&&t.viewDuration)){e.next=8;break}return e.next=4,ye(t);case 4:(a=e.sent)&&a.code&&(n=a.code),e.next=9;break;case 8:we("[codeService.getCode()]: invalid payload");case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Ie=function(){return{type:"GET_CODE_START"}},ke=function(e){return{type:"GET_CODE_COMPLETE",code:e}},Se=function(e){return{type:"GET_CODE_ERROR",msg:e}},Te=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).toSeconds=function(e){return 6*e},n.fromSeconds=function(e){return e/6},n.handleGetCode=function(){n.props.rdxGetCode(),v(h.codes)},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.rdxPhoto,a=t.rdxViewDuration,o=t.rdxSetViewDuration;return n||f(h.share),Object(O.a)("div",null,Object(O.a)(U,null,Object(O.a)("div",{css:ie},Object(O.a)("img",{src:n,height:"300",width:"300",alt:""})),Object(O.a)("div",{css:re},"How long will the image stay on the screen before being destroyed?"),Object(O.a)("div",{css:ce},Object(O.a)("input",{className:"custom-range ",type:"range",name:"duration",min:"1",max:"20",step:"1",value:this.fromSeconds(a),onChange:function(t){return o(e.toSeconds(t.target.value))}}),se(a)),Object(O.a)(J,{text:"Get Share Link",onClick:this.handleGetCode})))}}]),t}(a.PureComponent),Ee=Object(c.b)(function(e){return{rdxPhoto:ue(e),rdxViewDuration:le(e)}},function(e){return{rdxSetViewDuration:function(t){return e({type:"IMG_SET_VIEW_DURATION",viewDuration:t})},rdxGetCode:function(t){return e(function(){var e=Object(ge.a)(pe.a.mark(function e(t,n){var a,o,i;return pe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(Ie()),a=n(),o=de(a),console.log("payload",o),e.next=6,Ce(o);case 6:i=e.sent,t(i?ke(i):Se("Failed to get Code!"));case 8:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}())}}})(Te),Re=Object(w.a)({},k,{position:"relative",img:{border:"1px solid gray",borderRadius:"20px"}}),_e=(Object(w.a)({},k,{justifyContent:"center",textAlign:"center",padding:"5px",color:x}),Object(w.a)({},k,{width:"304px",padding:"5px",margin:"10px 0px"}),{minHeight:"36px",width:"100%",textAlign:"center",fontSize:"1rem",fontStyle:"italic",color:"orange",padding:"5px"}),De={position:"absolute",right:"15px",bottom:"10px",color:x,borderRadius:"30%",padding:"2px",paddingTop:"0px",textAlign:"center",backgroundColor:" rgba(0, 0, 0, 0.20)"},Ae=function(){var e="getSelection"in window?window.getSelection():"selection"in document?document.selection:null;"removeAllRanges"in e?e.removeAllRanges():"empty"in e&&e.empty()},Me=function(e){return e&&e.codeReducer&&e.codeReducer.code},Le=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={copied:""},n.copyToClipboard=function(e,t){e.select(),document.execCommand("copy"),Ae(),n.setState({copied:"Your ".concat(t," was coppied to the clipboard!")})},n.inputStyle={fontSize:"1.2rem",fontStyle:"italic",fontWeight:"bold"},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.rdxPhoto,a=t.rdxCode,o=t.rdxViewDuration;n&&a||f(h.home);var i=this.state.copied,r=h.loadImage.includes("/:")?h.loadImage.split("/:")[0]:h.loadImage,c="".concat(ve.baseUrlFE).concat(r,"/").concat(a);return Object(O.a)("div",null,Object(O.a)(U,null,Object(O.a)("div",{css:Re},Object(O.a)("div",{css:De},se(o)),Object(O.a)("img",{src:n,height:"300",width:"300",alt:""})),Object(O.a)(Y,{title:"Your Share Code",size:"sm",inputStyle:this.inputStyle,value:a,onClick:function(t){return e.copyToClipboard(e.codeRef,"Code")},getRef:function(t){return e.codeRef=t},disableTacHidding:!0}),Object(O.a)(Y,{title:"Your Share Link",size:"sm",inputStyle:this.inputStyle,value:c,onClick:function(t){return e.copyToClipboard(e.urlRef,"Share Link")},getRef:function(t){return e.urlRef=t},disableTacHidding:!0}),Object(O.a)("div",{css:_e},i),Object(O.a)(J,{text:"Share Another Image",onClick:function(){return f(h.share)}})))}}]),t}(a.PureComponent),Ne=Object(c.b)(function(e){return{rdxPhoto:ue(e),rdxCode:Me(e),rdxViewDuration:le(e)}},function(e){return{rdxClearImg:function(){return e({type:"CLEAR_IMG"})},rdxClearCode:function(){return e({type:"CLEAR_CODE"})}}})(Le),Fe=n(19),Ge=n.n(Fe),ze={color:"gray",textAlign:"center",marginBottom:"10px",span:{padding:"5px"}},Pe={color:"orange"},Ve=(n(82),n(83),function(e){var t=e.mode,n=e.onClick;return Object(O.a)("div",{css:ze},Object(O.a)("span",{css:t===Fe.FACING_MODES.USER&&Pe,onClick:function(){return n(Fe.FACING_MODES.USER)}},"FRONT"),Object(O.a)("span",null,"|"),Object(O.a)("span",{css:t===Fe.FACING_MODES.ENVIRONMENT&&Pe,onClick:function(){return n(Fe.FACING_MODES.ENVIRONMENT)}},"BACK"))}),Ue=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={cameraOn:!0,cameraFacingMode:Fe.FACING_MODES.ENVIRONMENT},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"onTakePhoto",value:function(e){this.setState({cameraOn:!1}),this.props.rdxUpdateImg(e)}},{key:"onCameraError",value:function(e){Oe(e)}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;console.log("camera-props",this.props);var t=this.state,n=t.cameraOn,o=t.cameraFacingMode,i=this.props.rdxImg;return Object(O.a)("div",{className:"oui-camera-container"},n?Object(O.a)(a.Fragment,null,(window.isMobile||window.isApple)&&Object(O.a)(Ve,{mode:o,onClick:function(t){return e.setState({cameraFacingMode:t})}}),Object(O.a)(Ge.a,{onTakePhoto:function(t){e.onTakePhoto(t)},onCameraError:function(t){e.onCameraError(t)},idealFacingMode:o,idealResolution:{width:420,height:420},imageType:Fe.IMAGE_TYPES.JPG,imageCompression:.97,isMaxResolution:!1,isImageMirror:!1,isDisplayStartCameraError:!0,sizeFactor:1,onCameraStop:function(){}})):Object(O.a)("div",{className:"react-html5-camera-photo"},Object(O.a)("img",{src:i,alt:""}),Object(O.a)("div",{className:"oui-camera-preview-ctrls"},Object(O.a)("i",{className:"fas fa-4x fa-undo-alt",onClick:function(){return e.setState({cameraOn:!0})}}),Object(O.a)(s.b,{to:{pathname:h.options}},Object(O.a)("i",{className:"far fa-4x fa-check-circle"})))))}}]),t}(a.Component),He=Object(c.b)(function(e){return{rdxImg:ue(e)}},function(e){return{rdxUpdateImg:function(t){return e(A(t))}}})(Ue),Be={width:"100%",minWidth:"300px",maxWidth:"420px",minHeight:"300px",maxHeight:"420px",borderRadius:"10px",border:"1px solid #474747",marginBottom:"2px"},We={width:"100%",maxWidth:"420px"},Ye={marginTop:"20px",textAlign:"center",fontSize:"2rem",color:"orange"},qe=function(e){return new Promise(function(t,n){var a=xe("see_me_once");if(a&&e in a){var o={img:a[e].img,viewTime:a[e].viewDuration};setTimeout(function(){return t(o)},1e3),je("see_me_once",a)}else n("Image Not Found!")})},Je=function(){var e=Object(ge.a)(pe.a.mark(function e(t){var n,a;return pe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=null,!t){e.next=8;break}return e.next=4,qe(t);case 4:(a=e.sent)&&a.img&&a.viewTime&&(n=a),e.next=9;break;case 8:we("[imgService.getImgData()]: no code");case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Xe=function(e){return{type:"IMG_LOAD_COMPLETE",isLoading:!1,img:e.img,viewTime:e.viewTime}},Qe=function(e){return{type:"IMG_LOAD_ERROR",isLoading:!1,errorMsg:e}},Ke=function(e){return{type:"IMG_COUNT_DOWN",viewTime:e}},Ze="IMG_LOAD_START",$e="IMG_LOAD_COMPLETE",et="IMG_LOAD_ERROR",tt="IMG_COUNT_DOWN",nt="CLEAR_LOADED_IMG",at=function(e){return function(){var t=Object(ge.a)(pe.a.mark(function t(n){var a;return pe.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"IMG_LOAD_START",isLoading:!0}),t.prev=1,t.next=4,Je(e);case 4:a=t.sent,n(a?Xe(a):Qe("Failed to fetch Image!")),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),n(Qe("Failed to fetch Image!")),console.log("[viewImgActions.fetchImage]:",t.t0);case 12:case"end":return t.stop()}},t,null,[[1,8]])}));return function(e){return t.apply(this,arguments)}}()},ot=function(e){return function(t,n){var a=n();if(a.viewImgReducer){var o=a.viewImgReducer.viewTime,i=o-e;t(o>0?Ke(i>0?i:0):{type:"CLEAR_LOADED_IMG"})}}},it=function(e){if(e&&e.viewImgReducer){var t=e.viewImgReducer,n=t.initialViewTime>0?100*t.viewTime/t.initialViewTime:0;return{img:t.img,viewTime:t.viewTime,progress:n}}},rt=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={timer:null},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.rdxPayload,n=t.img,a=t.viewTime;if(!n||a<=0)f(h.home);else{var o=setInterval(function(){e.props.rdxCountDown(1)},1e3);this.setState({timer:o})}}},{key:"render",value:function(){var e=this.props.rdxPayload,t=e.img,n=e.progress,a=e.viewTime;return(!t||a<=0)&&(clearInterval(this.state.timer),f(h.home)),Object(O.a)(U,{tacBottom:!0},Object(O.a)("div",{css:Be},Object(O.a)("img",{src:t,alt:""})),Object(O.a)("div",{css:We},Object(O.a)("div",{className:"progress"},Object(O.a)("div",{className:"progress-bar",style:{width:"".concat(n,"%")}})),Object(O.a)("div",{css:Ye},se(a))))}}]),t}(a.PureComponent),ct=Object(c.b)(function(e){return{rdxPayload:it(e)}},function(e){return{rdxCountDown:function(t){return e(ot(t))}}})(rt),st=Object(w.a)({},k,{justifyContent:"center",backgroundColor:j,height:"100vh",color:x,fontSize:"calc(16px + 2vmin)",fontFamily:"AllertaStencil"}),ut=n(45),lt=n.n(ut),dt=Object(c.b)(function(e){return{rdxIsLoading:(t=e,t&&(t.codeReducer&&t.codeReducer.isLoading||t.viewImgReducer&&t.viewImgReducer.isLoading))};var t})(function(e){if(!e.rdxIsLoading){var t=b&&b.location.state;t&&t.next?f(t.next):f(h.home)}return Object(O.a)("div",{css:st},Object(O.a)("div",null,"Loading.."),Object(O.a)("div",null,Object(O.a)("img",{src:lt.a,alt:""})))}),mt=Object(w.a)({},k,{backgroundColor:j,height:"100vh",width:"100%"}),pt=Object(c.b)(function(e){return{}},function(e){return{rdxFetchImg:function(t){return e(at(t))}}})(function(e){if(e.match&&e.match.params&&e.match.params.code){var t=e.match.params.code;console.log("received code",t),e.rdxFetchImg(t),v(h.view)}return Object(O.a)("div",{css:mt})}),gt=Object(w.a)({backgroundColor:j,minHeight:"100vh",width:"100%"},k,{fontSize:"calc(10px + 2vmin)",color:x,i:{color:"green",marginBottom:"15px"}}),ht={fontFamily:I,fontSize:"3rem",marginTop:"20px"},bt={maxWith:"420px",padding:"10px"},ft=function(){return Object(O.a)("div",{css:gt},Object(O.a)("div",{css:ht},"SeeMeOnce"),Object(O.a)("div",{css:bt},Object(O.a)("p",null,"This app allows you to anonymously share images in a simple and straight forward way. Once an image is delivered it can only be seen for the amount of time specified by you. It is deleted from our servers as soon as it goes out to it's destination. It is destroyed immediately after the allotted time expires on recipients device. SeeMeOnce is a free service. As such it comes with no warranty of any kind.",Object(O.a)("br",null),"Terms of use:"),Object(O.a)("ul",null,Object(O.a)("li",null,"We do not store any of your data beyond the time of delivering your image to it's recipient. Image is deleted permanently from our server when delivered."),Object(O.a)("li",null,"You must not use this service to distribute illegal content of any kind."),Object(O.a)("li",null,"You are fully responsible for the images you share. SeeMeOnce carries absolutely no responsibility for the content you share or the way in which you use this service."),Object(O.a)("li",null,"Use this service responsibly.")),Object(O.a)("p",null,"You can only use the app if you agree with the rules listed here.")),Object(O.a)("div",null,Object(O.a)("i",{className:"fa fa-check fa-2x","aria-hidden":"true",onClick:function(){return f(h.home)}})))},vt=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e;return e=this.props.history,b=e,o.a.createElement(u.c,null,o.a.createElement(u.a,{path:h.loading,component:dt}),o.a.createElement(u.a,{path:h.loadImage,component:pt}),o.a.createElement(u.a,{path:h.options,component:Ee}),o.a.createElement(u.a,{path:h.codes,component:Ne}),o.a.createElement(u.a,{path:h.camera,component:He}),o.a.createElement(u.a,{path:h.view,component:ct}),o.a.createElement(u.a,{path:h.tac,component:ft}),o.a.createElement(u.a,{path:h.home,component:oe}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ot=n(21),wt=n(46),jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{img:null,viewDuration:12},t=arguments.length>1?arguments[1]:void 0;if(!t||!t.type)return e;var n={};switch(t.type){case"IMG_UPDATE":n=Object(w.a)({},e,{img:t.img});break;case"IMG_SET_VIEW_DURATION":n=Object(w.a)({},e,{viewDuration:t.viewDuration});break;case"CLEAR_IMG":n=Object(w.a)({},e,{img:null});break;default:n=Object(w.a)({},e)}return n},xt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{visible:!0},t=arguments.length>1?arguments[1]:void 0;if(!t||!t.type)return e;var n={};if(window.isMobile)switch(t.type){case"TAC_HIDE":n=Object(w.a)({},e,{visible:!1});break;case"TAC_SHOW":n=Object(w.a)({},e,{visible:!0});break;default:n=Object(w.a)({},e)}else n=e;return n},yt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{code:null,isLoading:!1},t=arguments.length>1?arguments[1]:void 0;if(!t||!t.type)return e;var n={};switch(t.type){case"GET_CODE_START":n=Object(w.a)({},e,{code:null,isLoading:!0});break;case"GET_CODE_COMPLETE":n=Object(w.a)({},e,{code:t.code,isLoading:!1});break;case"GET_CODE_ERROR":n=Object(w.a)({},e,{codeError:t.msg,isLoading:!1});break;case"CLEAR_CODE":n=Object(w.a)({},e,{code:null,isLoading:!1});break;default:n=Object(w.a)({},e)}return n},Ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{img:null,viewTime:0,initialViewTime:0,isLoading:!1},t=arguments.length>1?arguments[1]:void 0;if(!t||!t.type)return e;var n={};switch(t.type){case Ze:n=Object(w.a)({},e,{isLoading:!0});break;case $e:n=Object(w.a)({},e,{img:t.img,viewTime:t.viewTime,initialViewTime:t.viewTime,isLoading:!1});break;case et:n=Object(w.a)({},e,{errorMsg:t.errorMsg,isLoading:!1});break;case nt:n=Object(w.a)({},e,{img:null,viewTime:0,initialViewTime:0,isLoading:!1});break;case tt:n=Object(w.a)({},e,{viewTime:t.viewTime});break;default:n=e}return n},It=Object(Ot.c)({imgReducer:jt,tacReducer:xt,codeReducer:yt,viewImgReducer:Ct}),kt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ot.d,St=Object(Ot.e)(It,kt(Object(Ot.a)(wt.a))),Tt=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t},Et=(n(84),document.getElementById("root"));window.isMobile=Tt(),window.isApple=navigator.vendor&&navigator.vendor.indexOf("Apple")>-1,r.a.render(o.a.createElement(function(){return o.a.createElement(c.a,{store:St},o.a.createElement(s.a,null,o.a.createElement(u.a,{path:"/",component:vt})))},null),Et),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.7b6ee4ec.chunk.js.map