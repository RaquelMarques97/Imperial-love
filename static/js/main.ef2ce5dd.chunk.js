(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{56:function(e,t,a){e.exports=a(74)},61:function(e,t,a){},62:function(e,t,a){},67:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(31),o=a.n(i),l=(a(61),a(62),a(77)),s=a(80);var c=function(){return r.a.createElement(l.a,{bg:"light",expand:"lg"},r.a.createElement(l.a.Brand,{href:"#/"},"IMPERIAL SPARK"),r.a.createElement(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(l.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(s.a,{className:"mr-auto"},r.a.createElement(s.a.Link,{href:"#/"},"Home"),r.a.createElement(s.a.Link,{href:"#my-profile"},"My profile"),r.a.createElement(s.a.Link,{href:"#my-preferences"},"Your Preferences"),r.a.createElement(s.a.Link,{href:"#match"},"Find a Match"))))},m=a(52),u=a(23),f=a(44);var p=function(){return r.a.createElement("div",{className:"Homepage"},r.a.createElement("h1",null,"Make the first move!"),r.a.createElement("img",{src:"https://i.pinimg.com/originals/39/1e/18/391e18a819289cb0fdf8d856ccb2d0fe.jpg",height:"300px"}),r.a.createElement("p",null," Don't be shy... you never know where love is..."),r.a.createElement(r.a.Fragment,null,r.a.createElement("style",{type:"text/css"},"\n    .btn-flat {\n      background-color: purple;\n      color: white;\n    }\n\n    .btn-xxl {\n      padding: 1rem 1.5rem;\n      font-size: 1.5rem;\n    }\n    "),r.a.createElement(f.a,{href:"#my-profile",variant:"flat",size:"xxl"},"Create your Profile")))},h=a(45),E=a(17),v=a(18),d=a(21),b=a(19),g=a(22),y=a(76),w=a(79),L=function(e){function t(e){var a;Object(E.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).onC=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.submit=function(e){e.preventDefault(),localStorage.setItem("profile",JSON.stringify(a.state))};var n=JSON.parse(localStorage.getItem("profile"));return a.state=null===n?{nomePessoa:"",bornLocation:"",species:"",mass:"",affiliation:"",picture:""}:{nomePessoa:n.nomePessoa||"",bornLocation:n.bornLocation||"",species:n.species||"",mass:n.mass||"",affiliation:n.affiliation||"",picture:n.picture||""},a}return Object(g.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{className:"userprofile"},r.a.createElement("h1",null,"YOUR PROFILE"),r.a.createElement(w.a,{onSubmit:this.submit},r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,null,"Name:"),r.a.createElement(w.a.Control,{type:"text",id:"name",name:"nomePessoa",onChange:this.onC,value:this.state.nomePessoa,autoComplete:"off"})),r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,null,"Born Location:"),r.a.createElement(w.a.Control,{type:"text",id:"bornLocation",name:"bornLocation",onChange:this.onC,value:this.state.bornLocation})),r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,null,"Species:"),r.a.createElement(w.a.Control,{type:"text",id:"species",name:"species",onChange:this.onC,value:this.state.species})),r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,null,"Mass:"),r.a.createElement(w.a.Control,{type:"number",id:"mass",name:"mass",onChange:this.onC,value:this.state.mass})),r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,null,"Afilliation:"),r.a.createElement(w.a.Control,{type:"text",id:"affiliation",name:"affiliation",onChange:this.onC,value:this.state.affiliation})),r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,null,"Picture:"),r.a.createElement(w.a.Control,{type:"file",id:"picture",name:"picture"})),r.a.createElement(f.a,{href:"#my-preferences",variant:"primary",type:"submit"},"Submit")))}}]),t}(r.a.Component),P=function(e){function t(e){var a;Object(E.a)(this,t),a=Object(d.a)(this,Object(b.a)(t).call(this,e));var n=JSON.parse(localStorage.getItem("profile"));return a.state=null===n?{nomePessoa:"",bornLocation:"",species:"",mass:"",affiliation:"",picture:""}:{nomePessoa:n.nomePessoa,bornLocation:n.bornLocation,species:n.species,mass:n.mass,affiliation:n.affiliation,picture:n.picture},a}return Object(g.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return console.log(this.savedProfile),r.a.createElement("div",null,r.a.createElement("h1",null,this.state.nomePessoa))}}]),t}(r.a.Component),S=a(81),j=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).getPersons=function(){fetch("https://melroune.github.io/starwars-api/api/all.json").then((function(e){return e.json()})).then((function(e){a.setState({starWarsPersons:e,isLoading:!1,isError:!1},a.findMatches)}),(function(e){a.setState({isLoading:!1,isError:!0})}))},a.findMatches=function(){var e,t=window.myPreferences.favAffiliation;e=a.state.starWarsPersons.filter((function(e){return e.affiliations.includes(t)})),a.setState({matches:e})},a.state={starWarsPersons:[],matches:[],isLoading:!0,isError:!1},a}return Object(g.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){console.log(window.myPreferences),this.getPersons()}},{key:"render",value:function(){return console.log(this.state.matches),r.a.createElement("div",{className:"match"},r.a.createElement("div",{style:{fontSize:"50px"}},"Hello ",r.a.createElement(P,null)," you got these options:"),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",marginLeft:"7%"}},this.state.matches.map((function(e){return r.a.createElement(S.a,{style:{width:"400px",margin:"50px"}},r.a.createElement(S.a.Img,{variant:"top",src:e.image}),r.a.createElement(S.a.Body,{style:{backgroundColor:"grey",height:"auto"}},r.a.createElement(S.a.Title,null,"Name: ",e.name),r.a.createElement(S.a.Text,{style:{color:"white"}},r.a.createElement("ul",null,r.a.createElement("li",null,"Species: ",e.species," "),r.a.createElement("li",null,r.a.createElement("ul",null,"Affiliations:",e.affiliations.map((function(e){return r.a.createElement("li",{className:"affiliations"}," ",e)})))),r.a.createElement("li",null,"mass: ",e.mass,"kg "))),r.a.createElement(S.a.Link,{style:{color:"black"},href:"#success"},r.a.createElement(f.a,null,"Like!"))))}))),r.a.createElement(f.a,{href:"#my-preferences"},"Try Again..."))}}]),t}(n.Component),O=a(55),C=a(78),k=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).getPersons=function(){fetch("https://melroune.github.io/starwars-api/api/all.json").then((function(e){return e.json()})).then((function(e){a.setState({starWarsPersons:e,isLoading:!1,isError:!1})}),(function(e){a.setState({isLoading:!1,isError:!0})}))},a.selectSpecies=function(e){a.setState({favSpecies:e})},a.selectAffiliation=function(e){a.setState({favAffiliation:e})},a.selectHomeworld=function(e){a.setState({favHomeworld:e})},a.state={starWarsPersons:[],favSpecies:[],favAffiliation:[],favHomeworld:[],favMass:[]},a}return Object(g.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.getPersons()}},{key:"componentDidUpdate",value:function(){window.myPreferences=this.state}},{key:"render",value:function(){return r.a.createElement(y.a,{className:"preferences"},r.a.createElement("h4",null,"Hello ",r.a.createElement(P,null)," Choose the Affiliation you prefer:"),r.a.createElement("div",null,r.a.createElement(C.a,{onSelect:this.selectAffiliation},r.a.createElement(C.a.Toggle,{variant:"success",id:"dropdown-basic"},"Favorite Affiliation"),r.a.createElement(C.a.Menu,{onSelect:this.selectAffiliation},Object(O.a)(new Set(this.state.starWarsPersons.map((function(e){return e.affiliations})).reduce((function(e,t){return e.concat(t)}),[]))).sort().map((function(e){return r.a.createElement(C.a.Item,{name:"favAffiliation",eventKey:e},e,";")})))),r.a.createElement("p",{className:"favspecie"},this.state.favAffiliation)),r.a.createElement(f.a,{variant:"primary",href:"#match"},"check your matches"))}}]),t}(n.Component);a(67);var x=function(){return r.a.createElement("div",{className:"success-body"},r.a.createElement("div",{class:"fade"}),r.a.createElement("section",{class:"star-wars"},r.a.createElement("div",{class:"crawl"},r.a.createElement("div",{class:"title"},r.a.createElement("p",null,"Episode IV"),r.a.createElement("h1",null,"A New Hope")),r.a.createElement("p",null,"The Imperial Love you've found! A message to your Imperial Love we've sent. A new chapter begins... May the force be with you!"))))};var A=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{basename:"/StarLove"},r.a.createElement(c,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:p}),r.a.createElement(u.a,{exact:!0,path:"/my-profile",component:L}),r.a.createElement(u.a,{exact:!0,path:"/my-preferences",component:k}),r.a.createElement(u.a,{exact:!0,path:"/match",component:j}),r.a.createElement(u.a,{exact:!0,path:"/success",component:x}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(70),a(71),a(72),a(73);o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.ef2ce5dd.chunk.js.map