(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{162:function(t,e,r){var content=r(164);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("265da9ba",content,!0,{sourceMap:!1})},163:function(t,e,r){"use strict";var n=r(162);r.n(n).a},164:function(t,e,r){(t.exports=r(44)(!1)).push([t.i,"body{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:#04286e}.container{margin:0 auto;min-height:80vh;display:flex;justify-content:center;align-items:center;text-align:center}.card{padding:48px;margin:12px;border-radius:8px;width:50%;max-width:720px;min-width:360px;box-shadow:0 0 4px 0 rgba(0,0,0,.14),0 3px 4px 0 rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.input{width:80%;border-color:#04286e}.input-wrap{position:relative;width:80%;margin:24px auto}.textbox{position:relative;display:block;width:100%;padding:15px;border:1px solid #04286e;border-radius:5px;font-size:16px;color:#04286e;outline:none;text-align:center}.result_active{margin-bottom:24px;background-color:#35495e;color:#fff;border-radius:12px;padding:36px 24px}.result_img{width:100%;margin-bottom:24px}.reqbtn{width:50%;background-color:#35495e;color:#fff;padding:12px 24px;border-radius:12px;cursor:pointer;font-size:1rem;margin:auto}@media screen and (max-width:480px){.container{margin:0 auto;display:inherit}.card{padding:24px;margin:auto;border-radius:8px;width:90%;max-width:720px;min-width:10px}}",""])},165:function(t,e,r){"use strict";r.r(e);r(29);var n=r(87),o=r.n(n),c={data:function(){return{name:null,result:null,src:null,isActive:!1}},methods:{getCard:function(){var t=this;o.a.get("https://ghlinkcard.com/api/v1/images/"+this.name).then(function(e){t.result=e.data.value,t.src=e.data.card_url,t.isActive=!0}).catch(function(e){console.error(e),t.result="Faild to create link card. Please make sure ".concat(t.name," exits")})}}},d=(r(163),r(22)),component=Object(d.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[r("div",{staticClass:"card"},[r("h1",[t._v("GitHub Link Card Creator")]),t._v(" "),r("div",{staticClass:"input-wrap"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"textbox",attrs:{type:"text",placeholder:"<user>/<repo>"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),r("div",{class:{result_active:t.isActive}},[t._v("\n      "+t._s(t.result)+"\n    ")]),t._v(" "),r("img",{staticClass:"result_img",attrs:{src:t.src}}),t._v(" "),r("div",{staticClass:"reqbtn",on:{click:t.getCard}},[t._v("\n      Create Card\n    ")])])])},[],!1,null,null,null);e.default=component.exports}}]);