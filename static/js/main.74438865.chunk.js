(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),i=n(8),c=n.n(i),r=(n(7),n(2)),l=n(3),d=n(5),o=n(4),h=n(9),j=n(0),u=function(t){Object(d.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).addItem=t.props.addItem,t.state={task:"",time:""},t.handleSubmit=function(e){e.preventDefault(),t.props.addItem(t.state),t.setState({task:"",time:""})},t.handleChange=function(e){t.setState(Object(h.a)({},e.target.id,e.target.value))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("input",{type:"text",placeholder:"Enter task",id:"task",onChange:this.handleChange,value:this.state.task}),Object(j.jsx)("input",{type:"text",placeholder:"time",id:"time",onChange:this.handleChange,value:this.state.time}),Object(j.jsx)("input",{type:"submit",value:"Add"})]})})}}]),n}(s.Component),m=function(t){var e=t.DeleteItem,n=t.items;return n=n.length>0?n.map((function(t){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{className:"task",children:["  ",t.task," "]}),Object(j.jsxs)("span",{className:"time",children:["  ",t.time," "]}),Object(j.jsx)("span",{onClick:function(){return e(t.id)},className:"action icon",children:"  \xd7 "})]},t.id)})):Object(j.jsx)("p",{children:" There is no items to show "}),Object(j.jsxs)("div",{className:"listitem",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"task title",children:" Task"}),Object(j.jsx)("span",{className:"time title",children:" Expected time"}),Object(j.jsx)("span",{className:"action title",children:" Action"})]}),n]})},b=(n(15),function(t){Object(d.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={list:[{id:1,task:"Math lecture",time:"2 hours"},{id:2,task:"Physics sheet",time:"50 min"},{id:3,task:"Project Phase 1",time:"8 days"}]},t.DeleteItem=function(e){var n=t.state.list.filter((function(t){return t.id!==e}));t.setState({list:n})},t.addItem=function(e){e.id=Math.random();var n=t.state.list;n.push(e),t.setState({list:n})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"text-center color-white",children:" Todo List "}),Object(j.jsx)(m,{items:this.state.list,DeleteItem:this.DeleteItem}),Object(j.jsx)(u,{addItem:this.addItem})]})}}]),n}(s.Component)),p=b,O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),s(t),a(t),i(t),c(t)}))};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),O()},7:function(t,e,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.74438865.chunk.js.map