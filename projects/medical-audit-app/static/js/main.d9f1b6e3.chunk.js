(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,a,t){e.exports=t(36)},24:function(e,a,t){},28:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(15),c=t.n(r),s=(t(24),t(2)),m=t(3),o=t(5),i=t(4),u=t(6),p=t(38),d=t(40),E=t(39),g=t(13),h=l.a.createContext(),b=function(e,a){switch(console.log(e.myQueue,a.payload),a.type){case"RANGE_UPDATE":var t=Math.ceil(101*Math.random()),n=Math.ceil(101*Math.random()),l=Math.ceil(101*Math.random()),r=[{name:"user1",range:parseInt(a.payload)},{name:"user2",range:t},{name:"user3",range:n},{name:"user4",range:l}],c=e.monthLeader;c.range=0;for(var s=r[0].range,m=0;m<r.length;m++)r[m].range>=c.range&&(c=r[m],s+=r[m].range);return s=parseInt(s/r.length),Object(g.a)({},e,{users:r.concat(),monthLeader:c,teamAverage:s});case"CASE_UPDATE":var o=e.myQueue;return o[2]=a.payload,Object(g.a)({},e,{myQueue:o});default:return e}},v=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={users:[{name:"user1",range:75},{name:"user2",range:81},{name:"user3",range:65},{name:"user4",range:34}],myQueue:[{id:"90221",numHospitals:2,category:"respiratory",balance:0,isComplete:!1},{id:"73221",numHospitals:4,category:"dentistry",balance:12021.97,isComplete:!1},{id:"10034",numHospitals:3,category:"bones",balance:0,isComplete:!0}],monthLeader:{name:"user2",range:75},teamAverage:64,hospitals:["Princeton Hospital","Memorial West","Radiology","Emergency"],dispatch:function(e){return t.setState(function(a){return b(a,e)})}},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(h.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),N=h.Consumer,f=t(37),y=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar sticky-top navbar-expand-md mr-auto navbar-light bg-light d-flex justify-content-between"},l.a.createElement(f.a,{className:"navbar-brand",to:"/"},l.a.createElement("img",{src:"http://alanthinks.com/projects/medical-audit-app/media/ev-logo.png",height:"30",alt:"Envision Logo"})),l.a.createElement("div",null,l.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0 dropleft"},l.a.createElement("span",{style:{marginTop:"12%"}}," Welcome Leo!"),l.a.createElement("li",{className:"nav-link","data-toggle":"modal","data-target":"#modalSettings","data-backdrop":"false"},l.a.createElement("img",{className:"user-picture",src:"http://alanthinks.com/projects/medical-audit-app/media/users/user1.jpg",alt:""})))))}}]),a}(n.Component),j=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(N,null,function(e){var a=e.users[0],t=e.users[1],n=e.users[2],r=e.users[3];return l.a.createElement("div",{className:"col-lg-7 week-stats"},l.a.createElement("h2",null,"Weekly Performance"),l.a.createElement("div",{className:"bar-graph-group-item"},l.a.createElement("img",{alt:"placeholder alt text",src:"http://alanthinks.com/projects/medical-audit-app/media/users/user1.jpg"}),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:a.range.toString()+"%"},"aria-valuenow":a.range,"aria-valuemin":"0","aria-valuemax":"100"},a.range<7?"":a.range.toString()+"%"," "))),l.a.createElement("div",{className:"bar-graph-group-item"},l.a.createElement("img",{alt:"placeholder alt text",src:"http://alanthinks.com/projects/medical-audit-app/media/users/user2.jpg"}),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:t.range.toString()+"%"},"aria-valuenow":t.range,"aria-valuemin":"0","aria-valuemax":"100"},t.range<7?"":t.range.toString()+"%"," "))),l.a.createElement("div",{className:"bar-graph-group-item"},l.a.createElement("img",{alt:"placeholder alt text",src:"http://alanthinks.com/projects/medical-audit-app/media/users/user3.jpg"}),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:n.range.toString()+"%"},"aria-valuenow":n.range,"aria-valuemin":"0","aria-valuemax":"100"},n.range<7?"":n.range.toString()+"%"," "))),l.a.createElement("div",{className:"bar-graph-group-item"},l.a.createElement("img",{alt:"placeholder alt text",src:"http://alanthinks.com/projects/medical-audit-app/media/users/user4.jpg"}),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:r.range.toString()+"%"},"aria-valuenow":r.range,"aria-valuemin":"0","aria-valuemax":"100"},r.range<7?"":r.range.toString()+"%"))))})}}]),a}(n.Component),O=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"col-lg-5 my-tasks"},l.a.createElement("h2",null,"My Tasks"),l.a.createElement("div",{className:"all-tasks"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2"},l.a.createElement("i",{className:"fas fa-info-circle"})),l.a.createElement("p",null,"Barcelona vs Real Madrid Oct/28")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2"},l.a.createElement("i",{className:"fas fa-question-circle"})),l.a.createElement("p",null,"Call Doctor Smith about Invoice #3434223")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2"},l.a.createElement("i",{className:"fas fa-smile-beam"})),l.a.createElement("p",null,"Follow Up with Mr. Smith at Memorial West")),l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"btn"},"New Task")),l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"btn"},"New Task"))))}}]),a}(n.Component),w=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(N,null,function(e){var a=e.teamAverage,t=e.users[0],n=e.monthLeader;return n.name.length<1&&(n.name="user2"),l.a.createElement("div",{className:"col-lg-7 summary"},l.a.createElement("h2",null,"Team Summary"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"circ1 col-lg-4"},l.a.createElement("h3",null,"October Leader"),l.a.createElement("div",{className:"circ1 c100 p".concat(n.range," big")},l.a.createElement("span",null,l.a.createElement("img",{alt:"This Week's Leader",src:"http://alanthinks.com/projects/medical-audit-app/media/users/".concat(n.name,".jpg")})),l.a.createElement("div",{className:"slice"},l.a.createElement("div",{className:"bar"}),l.a.createElement("div",{className:"fill"}))),l.a.createElement("p",null,l.a.createElement("span",{className:"dot"}),"Completed"),l.a.createElement("p",null,l.a.createElement("span",{className:"dot"}),"In Progress"),l.a.createElement("p",null,l.a.createElement("span",{className:"dot"}),"Under Review")),l.a.createElement("div",{className:"circ2 col-lg-4"},l.a.createElement("h3",null,"Team Average"),l.a.createElement("div",{className:"circ2 c100 p".concat(a," big")},l.a.createElement("span",null,a),l.a.createElement("div",{className:"slice"},l.a.createElement("div",{className:"bar"}),l.a.createElement("div",{className:"fill"}))),l.a.createElement("p",null,l.a.createElement("span",{className:"dot"}),"Completed"),l.a.createElement("p",null,l.a.createElement("span",{className:"dot"}),"In Progress"),l.a.createElement("p",null,l.a.createElement("span",{className:"dot"}),"Under Review")),l.a.createElement("div",{className:"circ3 col-lg-4"},l.a.createElement("h3",null,"Team Tasks"),l.a.createElement("div",{className:"circ3 c100 p".concat(t.range," big")},l.a.createElement("span",null,t.range),l.a.createElement("div",{className:"slice"},l.a.createElement("div",{className:"bar"}),l.a.createElement("div",{className:"fill"}))),l.a.createElement("p",null,l.a.createElement("span",{className:"dot"}),"Follow-Ups"),l.a.createElement("p",null,l.a.createElement("span",{className:"dot"}),"Corrections"),l.a.createElement("p",null,l.a.createElement("span",{className:"dot"}),"Verifications"))))})}}]),a}(n.Component),k=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).state={id:e.id,category:e.category,numHospitals:e.numHospitals,balance:e.balance,isComplete:e.isComplete},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"showBalance",value:function(){return this.state.balance<=0?"":l.a.createElement("div",{className:"balance"},"Balance:"," ",l.a.createElement("span",null,"$",this.state.balance.toString().replace(/\d(?=(\d{3})+\.)/g,"$&,")))}},{key:"complete",value:function(e,a){this.setState({isComplete:!this.state.isComplete}),a({type:"CASE_UPDATE",payload:this.state.isComplete})}},{key:"render",value:function(){var e=this;return l.a.createElement(N,null,function(a){var t=a.hospitals,n=a.dispatch;return l.a.createElement("div",{onClick:function(a){return e.complete(a,n)},className:"row btn-case ".concat(e.state.isComplete?"complete":"")},l.a.createElement("div",{className:"col-3"},l.a.createElement("img",{src:"http://alanthinks.com/projects/medical-audit-app/media/specialties/".concat(e.state.category,".png"),alt:"".concat(e.state.category," symbol")})),l.a.createElement("div",{className:"col pl-3"},l.a.createElement("h3",null,"#",e.state.id),l.a.createElement("i",{className:"fas fa-check"}),l.a.createElement("div",{className:"case-description"},l.a.createElement("ul",{className:"tags"},t.slice(0,e.state.numHospitals).map(function(e,a){return l.a.createElement("li",{key:a},e)})),e.showBalance())))})}}]),a}(n.Component),C=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(N,null,function(e){var a=e.myQueue;return l.a.createElement("div",{className:"col-lg-5 my-queue"},l.a.createElement("h2",null,"My Queue"),a.map(function(e,a){return l.a.createElement(k,{key:a,id:e.id,numHospitals:e.numHospitals,category:e.category,balance:e.balance,isComplete:e.isComplete})}))})}}]),a}(n.Component),S=t(16),T=t.n(S),A=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"dashboard-container"},l.a.createElement("div",{className:"row"},l.a.createElement(T.a,{minWidth:990},function(e){return e?l.a.createElement(l.a.Fragment,null,l.a.createElement(j,null),l.a.createElement(O,null),l.a.createElement(w,null),l.a.createElement(C,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(j,null),l.a.createElement(w,null),l.a.createElement(C,null))})))}}]),a}(n.Component),M=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"casesearch-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8"},l.a.createElement("h2",null,"Case Search"),l.a.createElement("button",null,"Open"),l.a.createElement("button",null,"Specialties"),l.a.createElement("button",null,"Hospital"),l.a.createElement("div",{className:"row"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},"case buttons"))),l.a.createElement("div",{className:"col"},l.a.createElement("h2",null,"My Queue"),l.a.createElement("button",null,"case1"),l.a.createElement("button",null,"case2"),l.a.createElement("button",null,"case3"))))}}]),a}(n.Component),x=t(10),I=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={id:"88888",numHospitals:2,category:"respiratory",balance:12,isComplete:!1},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"updateRange1",value:function(e,a){a({type:"RANGE_UPDATE",payload:e.target.value})}},{key:"updateCase",value:function(e,a){e({type:"CASE_UPDATE",payload:a})}},{key:"handleChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return l.a.createElement(N,null,function(a){var t=a.dispatch,n=a.myQueue[2],r=a.users[0].range;return l.a.createElement("div",{className:"modal fade",id:"modalSettings",tabIndex:"-1",role:"dialog"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header",style:{border:"none"}},l.a.createElement("h2",{className:"modal-title"},"Developer Test Settings"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("label",{htmlFor:"customRange1"},l.a.createElement("h3",null,"The following range selector does the following:")),l.a.createElement("div",{className:"ml-4"},l.a.createElement("ol",null,l.a.createElement("li",null,"Directly modifies User 1's bar"),l.a.createElement("li",null,"Randomizes the other 3 bars"))),l.a.createElement("h3",null,"Subsequently the following happens:"),l.a.createElement("div",{className:"ml-4"},l.a.createElement("ol",null,l.a.createElement("li",null,'The new "Monthly Leader" is shown'),l.a.createElement("li",null,"The team average is calculated"),l.a.createElement("li",null,'Placeholder: User 1\'s value is shown in "Team Tasks"'))),l.a.createElement("input",{onChange:function(a){return e.updateRange1(a,t)},value:r,type:"range",className:"custom-range",id:"customRange1"}),l.a.createElement("h3",null,'Modify third case in "My Queue":'),l.a.createElement("br",null),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"idNumberInput"},"ID Number"),l.a.createElement("input",{className:"form-control",id:"idNumberInput",name:"id",value:e.state.id,placeholder:n.id,onChange:function(a){return e.handleChange(a)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"specialtySelect"},"Specialty (Image)"),l.a.createElement("select",{className:"form-control",id:"specialtySelect"},l.a.createElement("option",null,"Orthopedic"),l.a.createElement("option",null,"Dentist"),l.a.createElement("option",null,"Neurology"),l.a.createElement("option",null,"Optometry"),l.a.createElement("option",null,"Respiratory"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"labelsSelect"},"Number of Labels"),l.a.createElement("select",{className:"form-control",id:"labelsSelect"},l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"balanceInput"},"Balance"),l.a.createElement("input",{className:"form-control",id:"balanceInput",placeholder:e.state.balance}))))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-primary disabled","data-dismiss":"modal",onClick:function(a){return e.updateCase(t,e.state)}},"Update (Working on it now)")))))})}}]),a}(n.Component),R=(t(28),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(v,null,l.a.createElement(p.a,{basename:"".concat("/projects/medical-audit-app")},l.a.createElement("div",{className:"container"},l.a.createElement(I,null),l.a.createElement(y,null),l.a.createElement(d.a,null,l.a.createElement(E.a,{exact:!0,path:"/",component:A}),"z",l.a.createElement(E.a,{exact:!0,path:"/allcases",component:M})))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.d9f1b6e3.chunk.js.map