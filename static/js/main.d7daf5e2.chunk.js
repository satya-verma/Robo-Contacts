(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(e,t,n){e.exports=n(46)},22:function(e,t,n){},27:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1),i=n.n(r),c=(n(22),n(5)),l=n(2),s=(n(27),n(3)),h=n(4),m=n(7),u=n(6),d=function(e){var t=e.email,n=e.name,a=e.id;return o.a.createElement("div",{className:"tc bg-yellow dib br3 pa3 ma3 grow shadow-4 "},o.a.createElement("div",{className:"tc"},o.a.createElement("img",{src:"https://robohash.org/".concat(a,"?size=200x200"),alt:""})),o.a.createElement("div",{className:"fc"},o.a.createElement("h2",null,n),o.a.createElement("p",null,t)))},f=function(e){var t=e.robots.map((function(e){return o.a.createElement(d,{key:e.id,id:e.id,name:e.name,email:e.email})}));return o.a.createElement("div",null,t)},g=function(e){var t=e.searchChange;return o.a.createElement("div",null,o.a.createElement("input",{"aria-label":"search robots",type:"text",placeholder:"Search",className:"tc pa3 bg-near-black yellow mb3",onChange:t}))},v=n(11),p=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"oops something went wrong!"):this.props.children}}]),n}(a.Component),b=[{id:1,name:"Hellen",email:"hellen@qoogle.com"},{id:2,name:"Rohan",email:"rohan@qoogle.com"},{id:3,name:"Sid",email:"sid@qoogle.com"},{id:4,name:"Virat",email:"virat@qoogle.com"},{id:5,name:"Sachin",email:"sachin@qoogle.com"},{id:6,name:"Yuvraj",email:"yuvraj@qoogle.com"},{id:7,name:"Shikhar",email:"shikhar@qoogle.com"},{id:8,name:"Raina",email:"raina@qoogle.com"},{id:9,name:"David",email:"david@qoogle.com"},{id:10,name:"Krish",email:"krish@qoogle.com"}],E=(n(44),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={robots:b},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state.robots,t=this.props,n=t.searchField,a=t.onSearchChange,r=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return e.length?o.a.createElement(v.Scrollbars,{style:{height:"100vh"}},o.a.createElement("div",{className:"pa1 tc"},o.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Quantico&display=swap",rel:"stylesheet"}),o.a.createElement("div",{id:"pallete",className:"tc ma3 pa1 br3 mt5 pb4 shadow-4 "},o.a.createElement("h1",{id:"title",className:"f1 garamond"},"Robo-Contacts"),o.a.createElement(g,{searchChange:a}),o.a.createElement(p,null,o.a.createElement(v.Scrollbars,{style:{height:350}},o.a.createElement(f,{className:"tc",robots:r})))))):o.a.createElement("div",null,o.a.createElement("h1",{className:"tc"},"Loading..."),o.a.createElement("h1",{className:"tc"},"refresh if does not load"))}}]),n}(o.a.Component)),w=Object(c.b)((function(e){return{searchField:e.searchField}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})}}}))(E),y=(n(45),{searchField:""}),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var j=Object(l.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}}));i.a.render(o.a.createElement(c.a,{store:j},o.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Robo-Contacts",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Robo-Contacts","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.d7daf5e2.chunk.js.map