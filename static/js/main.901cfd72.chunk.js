(this["webpackJsonptable-project"]=this["webpackJsonptable-project"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a,n=c(1),s=c.n(n),i=c(4),l=c.n(i),d=(c(14),c.p,c(15),c(5)),r=c(6),h=c(9),o=c(7),u=(c(16),c(2)),j=[{id:1,selected:!1,name:"smss.exe",device:"Stark",path:"\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",status:"scheduled",isAvailable:!1},{id:2,selected:!1,name:"netsh.exe",device:"Targaryen",path:"\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",status:"available",isAvailable:!0},(a={id:3,selected:!1,name:"Clementine Bauch"},Object(u.a)(a,"name","uxtheme.dll"),Object(u.a)(a,"device","Lannister"),Object(u.a)(a,"path","\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll"),Object(u.a)(a,"status","available"),Object(u.a)(a,"isAvailable",!0),a),{id:4,selected:!1,name:"cryptbase.dll",device:"Martell",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",status:"scheduled",isAvailable:!1},{id:5,selected:!1,name:"7za.exe",device:"Baratheon",path:"\\Device\\HarddiskVolume1\\temp\\7za.exe",status:"scheduled",isAvailable:!1}],b=c(8),m=c(0),v=function(e){Object(h.a)(c,e);var t=Object(o.a)(c);function c(e){var a;return Object(d.a)(this,c),(a=t.call(this,e)).state={List:j,MasterChecked:!1},a}return Object(r.a)(c,[{key:"onMasterCheck",value:function(e){var t=this.state.List;t.map((function(t){return t.selected=e.target.checked}));var c=t.filter((function(e){return e.selected})).length,a=document.querySelector(".header .showselected");document.querySelector(".mastercheckbox").indeterminate=!1,a.innerHTML="Selected ".concat(c),c<1&&(a.innerHTML="None Selected"),this.setState({MasterChecked:e.target.checked,List:t})}},{key:"onItemCheck",value:function(e,t){var c=this.state.List;c.map((function(c){return c.id===t.id&&(c.selected=e.target.checked),c}));var a=this.state.List.length,n=c.filter((function(e){return e.selected})).length,s=document.querySelector(".header .showselected");s.innerHTML="Selected ".concat(n),document.querySelector(".mastercheckbox").indeterminate=!0,n<1&&(s.innerHTML="None Selected",document.querySelector(".mastercheckbox").indeterminate=!1),n===document.querySelectorAll("input").length-1&&(document.querySelector(".mastercheckbox").indeterminate=!1),this.setState({MasterChecked:a===n,List:c})}},{key:"onDownload",value:function(){var e=this.state.List,t=e.filter((function(e){return e.selected})),c=[];t.forEach((function(e){"available"===e.status&&(c.push(e.device),c.push(e.path))})),0==c.length?alert("No file available for download"):alert(c.join("\n")),this.setState({List:e})}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("div",{className:"header-elements",children:Object(m.jsx)("input",{type:"checkbox",className:"mastercheckbox",checked:this.state.MasterChecked,onChange:function(t){return e.onMasterCheck(t)}})}),Object(m.jsx)("div",{className:"header-elements showselected",children:"None Selected"}),Object(m.jsxs)("div",{className:"header-elements",onClick:function(t){return e.onDownload()},children:[Object(m.jsx)(b.a,{}),"   Download Selected"]})]}),Object(m.jsx)("div",{children:Object(m.jsxs)("table",{className:"table-container",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{}),Object(m.jsx)("th",{children:"Name"}),Object(m.jsx)("th",{children:"Device"}),Object(m.jsx)("th",{children:"Path"}),Object(m.jsx)("th",{children:"Download"}),Object(m.jsx)("th",{children:"Status"})]})}),Object(m.jsx)("tbody",{className:"table-body",children:this.state.List.map((function(t){return Object(m.jsxs)("tr",{className:t.selected?"selected":"",children:[Object(m.jsx)("th",{children:Object(m.jsx)("input",{type:"checkbox",checked:t.selected,onChange:function(c){return e.onItemCheck(c,t)}})}),Object(m.jsx)("td",{children:t.name}),Object(m.jsxs)("td",{children:[" ",t.device]}),Object(m.jsxs)("td",{children:[t.path," "]}),Object(m.jsx)("td",{className:"".concat(t.isAvailable?"available":"notavailable")}),Object(m.jsx)("td",{children:t.status})]},t.id)}))})]})})]})}}]),c}(s.a.Component);var x=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(v,{})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};l.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),O()}},[[18,1,2]]]);
//# sourceMappingURL=main.901cfd72.chunk.js.map