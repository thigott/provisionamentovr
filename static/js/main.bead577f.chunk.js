(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),o=(a(75),a(76),a(77),a(78),a(7)),s=a(19),i=(a(82),a(83),function(e){return l.a.createElement("header",{className:"header d-none d-sm-flex flex-column"},l.a.createElement("h1",{className:"mt-3"},l.a.createElement("i",{className:"fa fa-".concat(e.icon)})," ",e.title),l.a.createElement("p",{className:"lead text-muted"},e.subtitle))}),u=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,e),l.a.createElement("main",{className:"content container-fluid"},l.a.createElement("div",{className:"p-3 mt-3"},e.children)))},m=function(e){return l.a.createElement(u,{icon:"home",title:"In\xedcio",subtitle:"Segundo Projeto do cap\xedtulo de React."},l.a.createElement("div",{className:"display-4"}," Bem Vindo! "),l.a.createElement("hr",null),l.a.createElement("p",{className:"mb-0"}," Sistema para exemplificar a constru\xe7\xe3o de um cadastro desenvolvido em React!"))},d=a(9),E=a.n(d),h=a(18),f=a(8),v=a(13),p=a(14),b=a(16),N=a(15),g=a(17),y=a(24),k=a(3),C=a.n(k),O=C.a.create({baseURL:"http://192.168.2.4:8080/TesteWebservice/onuconfig"}),w=a(132),S={icon:"key",title:"Gerenciamento de ONUs",subtitle:"Altera SSID e senha. Cadastro de ONUs: Inclui, Lista, Altera e Exclui."},x="http://localhost:3001/onu",j={user:{id:"",mac:"",number:"",olt:"",pon:"4",slot:"4"},list:[],meumac:"",meussid:"",show:!1},A=function(e){function t(e,a){var n;return Object(v.a)(this,t),(n=Object(b.a)(this,Object(N.a)(t).call(this,e,a))).state=Object(f.a)({},j),n.trocarSSID=Object(h.a)(E.a.mark(function e(){var t,a,l,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.getElementById("mac").value,a=document.getElementById("ssid").value,l=document.getElementById("senha").value,console.log(t),console.log(a),console.log(l),""!=a){e.next=14;break}return console.log("ssid vazio"),e.next=10,O.get("/roteador/trocarsenha/"+t+"/"+l);case 10:r=e.sent,console.log(r),e.next=23;break;case 14:if(""!=l){e.next=22;break}return console.log("senha vazia"),e.next=18,O.get("/roteador/trocarssid/"+t+"/"+a);case 18:r=e.sent,console.log(r),e.next=23;break;case 22:console.log("Passou direto");case 23:n.handleShow();case 24:case"end":return e.stop()}},e)})),n.handleShow=n.handleShow.bind(Object(y.a)(Object(y.a)(n))),n.handleClose=n.handleClose.bind(Object(y.a)(Object(y.a)(n))),n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this;C()(x).then(function(t){e.setState({list:t.data})})}},{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"clear",value:function(){this.setState({user:j.user})}},{key:"save",value:function(){var e=this,t=this.state.user,a=t.id?"put":"post",n=t.id?"".concat(x,"/").concat(t.id):x;C.a[a](n,t).then(function(t){var a=e.getUpdatedList(t.data);e.setState({user:j.user,list:a})})}},{key:"load",value:function(e){this.setState({user:e})}},{key:"remove",value:function(e){var t=this;C.a.delete("".concat(x,"/").concat(e.id)).then(function(a){var n=t.getUpdatedList(e,!1);t.setState({list:n})})}},{key:"getUpdatedList",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=this.state.list.filter(function(t){return t.id!==e.id});return t&&a.unshift(e),a}},{key:"updateField",value:function(e){var t=Object(f.a)({},this.state.user);t[e.target.name]=e.target.value,this.setState({user:t})}},{key:"renderTable",value:function(){return l.a.createElement("table",{className:"table mt-4"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"MAC Adress"),l.a.createElement("th",null,"OLT"),l.a.createElement("th",null,"Pon"),l.a.createElement("th",null,"Slot"),l.a.createElement("th",null,"A\xe7\xf5es"))),l.a.createElement("tbody",null,this.renderRows()))}},{key:"renderRows",value:function(){var e=this;return this.state.list.map(function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.id),l.a.createElement("td",null,t.mac),l.a.createElement("td",null,t.olt),l.a.createElement("td",null,t.pon),l.a.createElement("td",null,t.slot),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-warning",onClick:function(){return e.load(t)}},l.a.createElement("i",{className:"fa fa-retweet"})),l.a.createElement("button",{className:"btn btn-danger ml-2",onClick:function(){return e.remove(t)}},l.a.createElement("i",{className:"fa fa-trash"}))))})}},{key:"renderForm",value:function(){var e=this;return l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"MAC Adress*"),l.a.createElement("input",{type:"text",className:"form-control",id:"mac",placeholder:"Digite o MAC Adress..."}))),l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"OLT"),l.a.createElement("input",{type:"text",className:"form-control",name:"olt",value:this.state.user.olt,onChange:function(t){return e.updateField(t)},placeholder:"Digite o olt..."})))),l.a.createElement("hr",null),l.a.createElement("th",null,"Alterar SSID e senha"),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"SSID*"),l.a.createElement("input",{type:"text",className:"form-control",id:"ssid",onChange:function(t){return e.setState(t)},placeholder:"Digite o novo SSID..."}))),l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Senha*"),l.a.createElement("input",{type:"text",className:"form-control",id:"senha",placeholder:"Digite a nova senha..."})))),l.a.createElement("label",{className:"col-14 d-flex justify-content-end"},"*",l.a.createElement("span",{className:"text-danger"}," Campos obrigat\xf3rios")),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 d-flex justify-content-end"},l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.trocarSSID()}},"Aplicar altera\xe7\xe3o"),l.a.createElement("button",{className:"btn btn-secondary ml-2",onClick:function(t){return e.clear(t)}},"Cancelar"),l.a.createElement("button",{className:"btn btn-secondary ml-2",onClick:this.handleShow},"Launch demo modal"))))}},{key:"renderPopup",value:function(){return l.a.createElement(w.a,{show:this.state.show,onHide:this.handleClose},l.a.createElement(w.a.Header,{closeButton:!0},l.a.createElement(w.a.Title,null,"Altera\xe7\xe3o de SSID e senha")),l.a.createElement(w.a.Body,null,"Requisi\xe7\xe3o enviada com sucesso"),l.a.createElement(w.a.Footer,null,l.a.createElement("button",{className:"btn btn-secondary ml-2",onClick:this.handleClose},"Sair"),l.a.createElement("button",{className:"btn btn-primary ml-2",onClick:this.handleClose},"OK")))}},{key:"render",value:function(){return l.a.createElement(u,S,this.renderForm(),this.renderTable(),this.renderPopup())}}]),t}(n.Component),P={icon:"wifi",title:"Gerenciamento de ONUs",subtitle:"Cadastro de ONUs: Inclui, Lista, Altera e Exclui."},M={user:{id:"",mac:"",number:"",olt:"",pon:"4",slot:"4"},list:[],novoCanal:""},L=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(l)))).state=Object(f.a)({},M),a.trocarCanal=Object(h.a)(E.a.mark(function e(){var t,a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("canal"),a=t.options[t.selectedIndex].value,console.log(a);case 3:case"end":return e.stop()}},e)})),a.teste=Object(h.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get();case 2:t=e.sent,console.log(t.data);case 4:case"end":return e.stop()}},e)})),a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this;C()("http://localhost:3001/onu").then(function(t){e.setState({list:t.data})})}},{key:"clear",value:function(){this.setState({user:M.user})}},{key:"save",value:function(){var e=this,t=this.state.user,a=t.id?"put":"post",n=t.id?"".concat("http://localhost:3001/onu","/").concat(t.id):"http://localhost:3001/onu";C.a[a](n,t).then(function(t){var a=e.getUpdatedList(t.data);e.setState({user:M.user,list:a})})}},{key:"load",value:function(e){this.setState({user:e})}},{key:"remove",value:function(e){var t=this;C.a.delete("".concat("http://localhost:3001/onu","/").concat(e.id)).then(function(a){var n=t.getUpdatedList(e,!1);t.setState({list:n})})}},{key:"getUpdatedList",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=this.state.list.filter(function(t){return t.id!==e.id});return t&&a.unshift(e),a}},{key:"updateField",value:function(e){var t=Object(f.a)({},this.state.user);t[e.target.name]=e.target.value,this.setState({user:t})}},{key:"renderTable",value:function(){return l.a.createElement("table",{className:"table mt-4"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"MAC Adress"),l.a.createElement("th",null,"OLT"),l.a.createElement("th",null,"Pon"),l.a.createElement("th",null,"Slot"),l.a.createElement("th",null,"A\xe7\xf5es"))),l.a.createElement("tbody",null,this.renderRows()))}},{key:"renderRows",value:function(){var e=this;return this.state.list.map(function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.id),l.a.createElement("td",null,t.mac),l.a.createElement("td",null,t.olt),l.a.createElement("td",null,t.pon),l.a.createElement("td",null,t.slot),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-warning",onClick:function(){return e.load(t)}},l.a.createElement("i",{className:"fa fa-retweet"})),l.a.createElement("button",{className:"btn btn-danger ml-2",onClick:function(){return e.remove(t)}},l.a.createElement("i",{className:"fa fa-trash"}))))})}},{key:"renderForm",value:function(){var e=this;return l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"MAC Adress*"),l.a.createElement("input",{type:"text",className:"form-control",id:"mac",placeholder:"Digite o MAC Adress..."}))),l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"OLT"),l.a.createElement("input",{type:"text",className:"form-control",name:"olt",value:this.state.user.olt,onChange:function(t){return e.updateField(t)},placeholder:"Digite o olt..."})))),l.a.createElement("hr",null),l.a.createElement("th",null,"Alterar Canal"),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Canal*"),l.a.createElement("select",{type:"text",className:"form-control",id:"canal"},l.a.createElement("option",{value:"",defaultValue:!0}," Selecione o novo canal... "),l.a.createElement("option",{value:"canal1"}," Canal 1: 2.412 MHz "),l.a.createElement("option",{value:"canal2"}," Canal 2: 2.417 MHz "),l.a.createElement("option",{value:"canal3"}," Canal 3: 2.422 MHz "),l.a.createElement("option",{value:"canal4"}," Canal 4: 2.427 MHz "),l.a.createElement("option",{value:"canal5"}," Canal 5: 2.432 MHz "),l.a.createElement("option",{value:"canal6"}," Canal 6: 2.437 MHz "),l.a.createElement("option",{value:"canal7"}," Canal 7: 2.442 MHz "),l.a.createElement("option",{value:"canal8"}," Canal 8: 2.447 MHz "),l.a.createElement("option",{value:"canal9"}," Canal 9: 2.452 MHz "),l.a.createElement("option",{value:"canal10"}," Canal 10: 2.457 MHz "),l.a.createElement("option",{value:"canal11"}," Canal 11: 2.462 MHz "),l.a.createElement("option",{value:"canal12"}," Canal 12: 2.467 MHz "),l.a.createElement("option",{value:"canal13"}," Canal 13: 2.472 MHz "))))),l.a.createElement("label",{className:"col-14 d-flex justify-content-end"},"* ",l.a.createElement("span",{className:"text-danger"}," Campos obrigat\xf3rios")),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 d-flex justify-content-end"},l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.trocarCanal()}},"Aplicar altera\xe7\xe3o"),l.a.createElement("button",{className:"btn btn-secondary ml-2",onClick:function(t){return e.clear(t)}},"Cancelar"),l.a.createElement("button",{className:"btn btn-secondary ml-2",onClick:function(){return e.teste()}},"Teste"))))}},{key:"render",value:function(){return l.a.createElement(u,P,this.renderForm(),this.renderTable())}}]),t}(n.Component),D={icon:"user",title:"Configura\xe7\xe3o PPoE",subtitle:"Configurar usu\xe1rio e senha PPoE. Lista e exclui ONUs."},F="http://localhost:3001/onu",U={user:{id:"",mac:"",number:"",olt:"",pon:"4",slot:"4"},list:[],usuarioPPOE:"",senhaPPOE:""},I=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(l)))).state=Object(f.a)({},U),a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this;C()(F).then(function(t){e.setState({list:t.data})})}},{key:"configPPOE",value:function(e,t,a){C.a.get("http://192.168.2.126:8080/TesteWebservice/roteador/configppoe/".concat(e.mac,"/").concat(t,"/").concat(a)).then(function(e){console.log(e.data),console.log(e.status)})}},{key:"clear",value:function(){this.setState({user:U.user})}},{key:"save",value:function(){var e=this,t=this.state.user,a=t.id?"put":"post",n=t.id?"".concat(F,"/").concat(t.id):F;C.a[a](n,t).then(function(t){var a=e.getUpdatedList(t.data);e.setState({user:U.user,list:a})})}},{key:"load",value:function(e){this.setState({user:e})}},{key:"remove",value:function(e){var t=this;C.a.delete("".concat(F,"/").concat(e.id)).then(function(a){var n=t.getUpdatedList(e,!1);t.setState({list:n})})}},{key:"getUpdatedList",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=this.state.list.filter(function(t){return t.id!==e.id});return t&&a.unshift(e),a}},{key:"updateField",value:function(e){var t=Object(f.a)({},this.state.user);t[e.target.name]=e.target.value,this.setState({user:t})}},{key:"renderTable",value:function(){return l.a.createElement("table",{className:"table mt-4"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"MAC Adress"),l.a.createElement("th",null,"OLT"),l.a.createElement("th",null,"Pon"),l.a.createElement("th",null,"Slot"),l.a.createElement("th",null,"A\xe7\xf5es"))),l.a.createElement("tbody",null,this.renderRows()))}},{key:"renderRows",value:function(){var e=this;return this.state.list.map(function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.id),l.a.createElement("td",null,t.mac),l.a.createElement("td",null,t.olt),l.a.createElement("td",null,t.pon),l.a.createElement("td",null,t.slot),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-warning",onClick:function(){return e.load(t)}},l.a.createElement("i",{className:"fa fa-retweet"})),l.a.createElement("button",{className:"btn btn-danger ml-2",onClick:function(){return e.remove(t)}},l.a.createElement("i",{className:"fa fa-trash"}))))})}},{key:"renderForm",value:function(){var e=this;return l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"MAC Adress*"),l.a.createElement("input",{type:"text",className:"form-control",name:"mac",value:this.state.user.mac,onChange:function(t){return e.updateField(t)},placeholder:"Digite o MAC Adress..."}))),l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"OLT"),l.a.createElement("input",{type:"text",className:"form-control",name:"olt",value:this.state.user.olt,onChange:function(t){return e.updateField(t)},placeholder:"Digite o olt..."})))),l.a.createElement("hr",null),l.a.createElement("th",null,"Configurar usu\xe1rio e senha PPoE"),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Usu\xe1rio*"),l.a.createElement("input",{type:"text",className:"form-control",name:"usuarioPPOE",value:this.state.usuarioPPOE,placeholder:"Digite o usu\xe1rio PPOE..."}))),l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Senha*"),l.a.createElement("input",{type:"text",className:"form-control",name:"senhaPPOE",placeholder:"Digite a senha..."})))),l.a.createElement("label",{className:"col-14 d-flex justify-content-end"},"* ",l.a.createElement("span",{className:"text-danger"}," Campos obrigat\xf3rios")),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 d-flex justify-content-end"},l.a.createElement("button",{className:"btn btn-primary",onClick:function(t){return e.configPPOE(t,e.state.user,e.state.usuarioPPOE,e.state.senhaPPOE)}},"Aplicar altera\xe7\xe3o"),l.a.createElement("button",{className:"btn btn-secondary ml-2",onClick:function(t){return e.clear(t)}},"Cancelar"))))}},{key:"render",value:function(){return l.a.createElement(u,D,this.renderForm(),this.renderTable())}}]),t}(n.Component),T={icon:"wifi",title:"Gerenciamento de ONUs",subtitle:"Habilita e desabilita ONUs."},H={user:{id:"",mac:"",number:"",olt:"",pon:"4",slot:"4"},list:[],novoCanal:""},z=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(l)))).state=Object(f.a)({},H),a.teste=Object(h.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get().then(function(e){this.setState({list:e.data})});case 2:t=e.sent,console.log(t.data);case 4:case"end":return e.stop()}},e)})),a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this;C()("http://localhost:3001/onu").then(function(t){e.setState({list:t.data})})}},{key:"onuONOFF",value:function(e,t){var a=t.options[t.selectedIndex].value;O.get("http://192.168.2.126:8080/TesteWebservice/roteador/trocarcanal/".concat(e.mac,"/").concat(a)).then(function(e){console.log(e.data),console.log(e.status)})}},{key:"clear",value:function(){this.setState({user:H.user})}},{key:"save",value:function(){var e=this,t=this.state.user,a=t.id?"put":"post",n=t.id?"".concat("http://localhost:3001/onu","/").concat(t.id):"http://localhost:3001/onu";C.a[a](n,t).then(function(t){var a=e.getUpdatedList(t.data);e.setState({user:H.user,list:a})})}},{key:"load",value:function(e){this.setState({user:e})}},{key:"remove",value:function(e){var t=this;C.a.delete("".concat("http://localhost:3001/onu","/").concat(e.id)).then(function(a){var n=t.getUpdatedList(e,!1);t.setState({list:n})})}},{key:"getUpdatedList",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=this.state.list.filter(function(t){return t.id!==e.id});return t&&a.unshift(e),a}},{key:"updateField",value:function(e){var t=Object(f.a)({},this.state.user);t[e.target.name]=e.target.value,this.setState({user:t})}},{key:"renderTable",value:function(){return l.a.createElement("table",{className:"table mt-4"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"MAC Adress"),l.a.createElement("th",null,"OLT"),l.a.createElement("th",null,"Pon"),l.a.createElement("th",null,"Slot"),l.a.createElement("th",null,"A\xe7\xf5es"))),l.a.createElement("tbody",null,this.renderRows()))}},{key:"renderRows",value:function(){var e=this;return this.state.list.map(function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.id),l.a.createElement("td",null,t.mac),l.a.createElement("td",null,t.olt),l.a.createElement("td",null,t.pon),l.a.createElement("td",null,t.slot),l.a.createElement("td",null,l.a.createElement(o.b,{to:"/"},l.a.createElement("button",{className:"btn btn-warning",onClick:function(){return e.load(t)}},l.a.createElement("i",{className:"fa fa-retweet"}))),l.a.createElement("button",{className:"btn btn-danger ml-2",onClick:function(){return e.remove(t)}},l.a.createElement("i",{className:"fa fa-trash"}))))})}},{key:"renderForm",value:function(){var e=this;return l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"MAC Adress*"),l.a.createElement("input",{type:"text",className:"form-control",name:"mac",value:this.state.user.mac,onChange:function(t){return e.updateField(t)},placeholder:"Digite o MAC Adress..."}))),l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"OLT"),l.a.createElement("input",{type:"text",className:"form-control",name:"olt",value:this.state.user.olt,onChange:function(t){return e.updateField(t)},placeholder:"Digite a olt..."})))),l.a.createElement("hr",null),l.a.createElement("th",null,"Alterar Habilitado/Desabilitado"),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Situa\xe7\xe3o*"),l.a.createElement("select",{type:"text",className:"form-control",id:"novaSituacao"},l.a.createElement("option",{value:"",defaultValue:!0}," Selecione a nova op\xe7\xe3o... "),l.a.createElement("option",{value:"habilitado"}," Habilitado "),l.a.createElement("option",{value:"desabilitado"}," Desabilitado "))))),l.a.createElement("label",{className:"col-14 d-flex justify-content-end"},"* ",l.a.createElement("span",{className:"text-danger"}," Campos obrigat\xf3rios")),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 d-flex justify-content-end"},l.a.createElement("button",{className:"btn btn-primary",onClick:function(t){return e.onuONOFF(t,e.state.user,document.getElementById("novaSituacao"))}},"Aplicar altera\xe7\xe3o"),l.a.createElement("button",{className:"btn btn-secondary ml-2",onClick:function(t){return e.clear(t)}},"Cancelar"))))}},{key:"render",value:function(){return l.a.createElement(u,T,this.renderForm(),this.renderTable())}}]),t}(n.Component),R={icon:"list",title:"Gerenciamento de ONUs",subtitle:"Lista de ONUs."},W={user:{id:"",mac:"",number:"",olt:"",pon:"4",slot:"4"},list:[],novoCanal:""},B=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(l)))).state=Object(f.a)({},W),a.teste=Object(h.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get().then(function(e){this.setState({list:e.data})});case 2:t=e.sent,console.log(t.data);case 4:case"end":return e.stop()}},e)})),a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this;C()("http://localhost:3001/onu").then(function(t){e.setState({list:t.data})})}},{key:"onuONOFF",value:function(e,t){var a=t.options[t.selectedIndex].value;O.get("http://192.168.2.126:8080/TesteWebservice/roteador/trocarcanal/".concat(e.mac,"/").concat(a)).then(function(e){console.log(e.data),console.log(e.status)})}},{key:"clear",value:function(){this.setState({user:W.user})}},{key:"save",value:function(){var e=this,t=this.state.user,a=t.id?"put":"post",n=t.id?"".concat("http://localhost:3001/onu","/").concat(t.id):"http://localhost:3001/onu";C.a[a](n,t).then(function(t){var a=e.getUpdatedList(t.data);e.setState({user:W.user,list:a})})}},{key:"load",value:function(e){this.setState({user:e})}},{key:"remove",value:function(e){var t=this;C.a.delete("".concat("http://localhost:3001/onu","/").concat(e.id)).then(function(a){var n=t.getUpdatedList(e,!1);t.setState({list:n})})}},{key:"getUpdatedList",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=this.state.list.filter(function(t){return t.id!==e.id});return t&&a.unshift(e),a}},{key:"updateField",value:function(e){var t=Object(f.a)({},this.state.user);t[e.target.name]=e.target.value,this.setState({user:t})}},{key:"renderTable",value:function(){return l.a.createElement("table",{className:"table mt-4"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"MAC Adress"),l.a.createElement("th",null,"OLT"),l.a.createElement("th",null,"Pon"),l.a.createElement("th",null,"Slot"),l.a.createElement("th",null,"A\xe7\xf5es"))),l.a.createElement("tbody",null,this.renderRows()))}},{key:"renderRows",value:function(){var e=this;return this.state.list.map(function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.id),l.a.createElement("td",null,t.mac),l.a.createElement("td",null,t.olt),l.a.createElement("td",null,t.pon),l.a.createElement("td",null,t.slot),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-warning",onClick:function(){return e.load(t)}},l.a.createElement("i",{className:"fa fa-pencil"})),l.a.createElement(o.b,{to:"/canal"},l.a.createElement("button",{className:"btn btn-style-background-green ml-2"},l.a.createElement("i",{className:"fa fa-key"}))),l.a.createElement("button",{className:"btn btn-danger ml-2",onClick:function(){return e.remove(t)}},l.a.createElement("i",{className:"fa fa-trash"}))))})}},{key:"renderForm",value:function(){var e=this;return l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"MAC Adress*"),l.a.createElement("input",{type:"text",className:"form-control",name:"mac",value:this.state.user.mac,onChange:function(t){return e.updateField(t)},placeholder:"Digite o MAC Adress..."}))),l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"OLT"),l.a.createElement("input",{type:"text",className:"form-control",name:"olt",value:this.state.user.olt,onChange:function(t){return e.updateField(t)},placeholder:"Digite a olt..."})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 d-flex justify-content-end"},l.a.createElement("button",{className:"btn btn-primary",onClick:function(t){return e.save(t)}},"Aplicar altera\xe7\xe3o"),l.a.createElement("button",{className:"btn btn-secondary ml-2",onClick:function(t){return e.clear(t)}},"Cancelar"))))}},{key:"render",value:function(){return l.a.createElement(u,R,this.renderForm(),this.renderTable())}}]),t}(n.Component),G=function(e){return l.a.createElement(s.c,null,l.a.createElement(s.b,{exact:!0,path:"/",component:m}),l.a.createElement(s.b,{path:"/users",component:A}),l.a.createElement(s.b,{path:"/canal",component:L}),l.a.createElement(s.b,{path:"/ppoe",component:I}),l.a.createElement(s.b,{path:"/onoff",component:z}),l.a.createElement(s.b,{path:"/listaonu",component:B}),l.a.createElement(s.a,{from:"*",to:"/"}))},V=(a(127),a(68)),J=a.n(V),q=function(e){return l.a.createElement("aside",{className:"logo"},l.a.createElement(o.b,{to:"/",className:"logo"},l.a.createElement("img",{src:J.a,alt:"logo"})))},K=(a(128),function(e){return l.a.createElement("aside",{className:"menu-area"},l.a.createElement("nav",{className:"menu"},l.a.createElement(o.b,{to:"/"},l.a.createElement("i",{className:"fa fa-home mr-2"})," In\xedcio"),l.a.createElement(o.b,{to:"/listaonu"},l.a.createElement("i",{className:"fa fa-list mr-2"})," Lista de ONUs"),l.a.createElement(o.b,{to:"/users"},l.a.createElement("i",{className:"fa fa-key mr-2"})," Alterar SSID e senha"),l.a.createElement(o.b,{to:"/canal"},l.a.createElement("i",{className:"fa fa-wifi mr-2"})," Alterar Canal"),l.a.createElement(o.b,{to:"/ppoe"},l.a.createElement("i",{className:"fa fa-user mr-2"})," Configura\xe7\xe3o PPoE"),l.a.createElement(o.b,{to:"/onoff"},l.a.createElement("i",{className:"fa fa-power-off mr-2"})," Habilita/Desabilita ONU")))}),$=(a(129),function(e){return l.a.createElement("footer",{className:"footer"},l.a.createElement("span",null,"Desenvolvido com ",l.a.createElement("strong",null," ",l.a.createElement("span",{className:"text-danger"},"React"))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(function(e){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"app"},l.a.createElement(q,null),l.a.createElement(K,null),l.a.createElement(G,null),l.a.createElement($,null)))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,a){e.exports=a.p+"static/media/logoviareal.a5bb7cca.png"},69:function(e,t,a){e.exports=a(130)},75:function(e,t,a){},78:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.bead577f.chunk.js.map