(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{146:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(29),r=a.n(s),c=(a(70),a(71),a(13)),o=a(5),i=(a(72),a(19)),u=a(20),l=a(22),d=a(21),p=a(4),h=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(c.c,{className:"navbar-brand",to:"/",children:"NotesApp"}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(p.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(c.c,{className:"nav-link active","aria-current":"page",to:"/",children:"Notes"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(c.c,{className:"nav-link",to:"/create",children:"Create Note"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(c.c,{className:"nav-link",to:"/user",children:"Create User"})})]})})]})})}}]),a}(n.Component),j=a(7),m=a.n(j),b=a(15),v=a(11),f=a.n(v),x=a(63),O=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={notes:[]},e.getNotes=Object(b.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://crud-notes-mernstack.herokuapp.com/api/notes");case 2:a=t.sent,e.setState({notes:a.data});case 4:case"end":return t.stop()}}),t)}))),e.deleteNote=function(){var t=Object(b.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.delete("https://crud-notes-mernstack.herokuapp.com/api/notes/"+a);case 2:e.getNotes();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getNotes()}},{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"row",children:this.state.notes.map((function(t){return Object(p.jsx)("div",{className:"col-md-4 p-2",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsxs)("div",{className:"card-header d-flex justify-content-between",children:[Object(p.jsx)("h5",{children:t.title}),Object(p.jsx)(c.c,{className:"btn btn-secondary",to:"/edit/"+t._id,children:"Edit"})]}),Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("p",{children:t.content}),Object(p.jsx)("p",{children:t.author}),Object(p.jsx)("p",{children:Object(x.a)(t.date)})]}),Object(p.jsx)("div",{className:"card-footer",children:Object(p.jsx)("button",{className:"btn btn-danger",onClick:function(){e.deleteNote(t._id)},children:"Delete"})})]})},t._id)}))})})}}]),a}(n.Component),g=a(59),N=a(60),k=a.n(N),y=(a(100),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={users:[],userSelected:"",title:"",content:"",date:new Date,editing:!1,_id:""},e.onSubmit=function(){var t=Object(b.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n={title:e.state.title,content:e.state.content,date:e.state.date,author:e.state.userSelected},!e.state.editing){t.next=7;break}return t.next=5,f.a.put("https://crud-notes-mernstack.herokuapp.com/api/notes/"+e.state._id,n);case 5:t.next=9;break;case 7:return t.next=9,f.a.post("https://crud-notes-mernstack.herokuapp.com/api/notes",n);case 9:window.location.href="/";case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onInputChange=function(t){e.setState(Object(g.a)({},t.target.name,t.target.value))},e.onDateChange=function(t){e.setState({date:t})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://crud-notes-mernstack.herokuapp.com/api/users");case 2:if(t=e.sent,this.setState({users:t.data.user,userSelected:t.data.user[0].username}),!this.props.match.params.id){e.next=9;break}return e.next=7,f.a.get("https://crud-notes-mernstack.herokuapp.com/api/notes/"+this.props.match.params.id);case 7:a=e.sent,this.setState({userSelected:a.data.author,title:a.data.title,content:a.data.content,date:new Date(a.data.date),editing:!0,_id:this.props.match.params.id});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(p.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(p.jsx)("form",{onSubmit:this.onSubmit,children:Object(p.jsxs)("div",{className:"card card-body",children:[Object(p.jsx)("h4",{children:"Create a Note"}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("select",{className:"form-control mb-2",name:"userSelected",onChange:this.onInputChange,value:this.state.userSelected,children:this.state.users.map((function(e){return Object(p.jsx)("option",{value:e.username,children:e.username},e._id)}))})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Title",name:"title",onChange:this.onInputChange,value:this.state.title,required:!0})}),Object(p.jsx)("div",{className:"form-group mb-2",children:Object(p.jsx)("textarea",{name:"content",className:"form-control",placeholder:"Content",onChange:this.onInputChange,value:this.state.content,required:!0})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)(k.a,{className:"form-control mb-2",selected:this.state.date,onChange:this.onDateChange})}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})})})}}]),a}(n.Component)),w=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={users:[],username:""},e.getUsers=Object(b.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://crud-notes-mernstack.herokuapp.com/api/users");case 2:a=t.sent,e.setState({users:a.data.user});case 4:case"end":return t.stop()}}),t)}))),e.onchangeUsername=function(t){e.setState({username:t.target.value})},e.onSubmit=function(){var t=Object(b.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,f.a.post("https://crud-notes-mernstack.herokuapp.com/api/users",{username:e.state.username});case 3:e.setState({username:""}),e.getUsers();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteUser=function(){var t=Object(b.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.delete("https://crud-notes-mernstack.herokuapp.com/api/users/"+a);case 2:e.getUsers();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getUsers(),console.log(this.state.users);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsx)("form",{onSubmit:this.onSubmit,children:Object(p.jsxs)("div",{className:"card card-body",children:[Object(p.jsx)("h3",{children:"Create New User"}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",value:this.state.username,className:"form-control mb-2",onChange:this.onchangeUsername})}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})})}),Object(p.jsx)("div",{className:"col-md-8",children:Object(p.jsx)("ul",{className:"list-group",children:this.state.users.map((function(t){return Object(p.jsx)("li",{className:"list-group-item list-group-item-action",onDoubleClick:function(){return e.deleteUser(t._id)},children:t.username},t._id)}))})})]})}}]),a}(n.Component);var C=function(){return Object(p.jsxs)(c.a,{children:[Object(p.jsx)(h,{}),Object(p.jsxs)("div",{className:"container p-4",children:[Object(p.jsx)(o.a,{path:"/",exact:!0,component:O}),Object(p.jsx)(o.a,{path:"/edit/:id",component:y}),Object(p.jsx)(o.a,{path:"/create",component:y}),Object(p.jsx)(o.a,{path:"/user",component:w})]})]})};r.a.render(Object(p.jsx)(c.b,{children:Object(p.jsx)(C,{})}),document.getElementById("root"))},70:function(e,t,a){},71:function(e,t,a){}},[[146,1,2]]]);
//# sourceMappingURL=main.493d33df.chunk.js.map