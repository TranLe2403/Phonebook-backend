(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{42:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t(2),c=t(18),o=t.n(c),u=t(3),i=t(8),d=t(6),s=function(e){var n=e.searchName,t=e.handleSearchChange;return Object(r.jsxs)("div",{children:["Filter shown with:"," ",Object(r.jsx)("input",{value:n,onChange:t})]})},b=function(e){var n=e.handleClickAdd,t=e.name,a=e.number,c=e.handleNameChange,o=e.handleNumberChange;return Object(r.jsxs)("form",{onSubmit:n,children:[Object(r.jsxs)("div",{children:["Name: ",Object(r.jsx)("input",{value:t,onChange:c})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{children:["Number: ",Object(r.jsx)("input",{value:a,onChange:o})]}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"Add"})})]})},l=function(e){var n=e.persons,t=e.searchName,a=e.deletePersonHandler;return Object(r.jsx)("div",{children:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(r.jsxs)("p",{children:[e.name," ",e.number,Object(r.jsx)("button",{onClick:function(){return a(e.id)},children:"Delete"})]},e.number)}))})},j=t(5),h=t.n(j),m="/api/persons",f={getAllPersons:function(){return h.a.get(m).then((function(e){return e.data}))},addPerson:function(e){return h.a.post(m,e).then((function(e){return e.data}))},deletePerson:function(e){return h.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},updatePersonInfo:function(e,n){return h.a.put("".concat(m,"/").concat(e),n)}},O=function(e){var n=e.message;if(null===n)return null;var t={color:null!==n&&n.includes("has already been removed from server")||n.includes("validation failed")?"red":"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{style:t,children:n}),Object(r.jsx)("br",{})]})},v=function(){var e=Object(a.useState)([]),n=Object(d.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)({name:"",number:""}),j=Object(d.a)(o,2),h=j[0],m=j[1],v=Object(a.useState)(""),p=Object(d.a)(v,2),x=p[0],g=p[1],C=Object(a.useState)(null),w=Object(d.a)(C,2),N=w[0],P=w[1];Object(a.useEffect)((function(){f.getAllPersons().then((function(e){c(e)}))}),[]);var k=function(e){P(e),setTimeout((function(){P(null)}),3e3)};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(O,{message:N}),Object(r.jsx)(s,{searchName:x,handleSearchChange:function(e){g(e.target.value)}}),Object(r.jsx)("h3",{children:"Add a new"}),Object(r.jsx)(b,{handleClickAdd:function(e){e.preventDefault();var n={name:h.name,number:h.number},r=Object(i.a)(t),a=r.findIndex((function(e){return e.name===n.name}));a>-1?function(e){var n=Object(i.a)(t);if(window.confirm("".concat(n[e].name," is already added to phonebook, replacethe old number with a new one?"))){var r=Object(u.a)(Object(u.a)({},n[e]),{},{number:h.number});f.updatePersonInfo(n[e].id,r).then((function(t){c(n.map((function(r){return r.id!==n[e].id?r:t.data}))),m({name:"",number:""}),k("".concat(n[e].name,"'s has changed successfully!"))})).catch((function(t){k("Information of ".concat(n[e].name,"'s has already been removed from server!")),c(n.filter((function(t){return t.id!==n[e].id})))}))}}(a):f.addPerson(n).then((function(e){var n=r.concat(e);c(n),k("Added ".concat(h.name)),m({name:"",number:""})})).catch((function(e){k(e.response.data.error)}))},name:h.name,number:h.number,handleNameChange:function(e){m(Object(u.a)(Object(u.a)({},h),{},{name:e.target.value}))},handleNumberChange:function(e){m(Object(u.a)(Object(u.a)({},h),{},{number:e.target.value}))}}),Object(r.jsx)("h3",{children:"Numbers"}),Object(r.jsx)(l,{persons:t,searchName:x,deletePersonHandler:function(e){var n=t.findIndex((function(n){return n.id===e}));window.confirm("Delete ".concat(t[n].name,"?"))&&f.deletePerson(e).then((function(){var e=Object(i.a)(t);e.splice(n,1),c(e)}))}})]})};o.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.84860625.chunk.js.map