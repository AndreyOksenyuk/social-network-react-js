(this["webpackJsonptest-react-app"]=this["webpackJsonptest-react-app"]||[]).push([[3],{437:function(e,a,t){e.exports={dialog:"Message_dialog__3LJwE",messages:"Message_messages__2KDfa"}},438:function(e,a,t){},439:function(e,a,t){e.exports={form:"AddMessageForm_form__1yZMz",textarea:"AddMessageForm_textarea__1FubE",noValid:"AddMessageForm_noValid__2mluG"}},440:function(e,a,t){e.exports={dialog:"Dialog_dialog___V64F",active:"Dialog_active__uvKFc",listItem:"Dialog_listItem__1xS0B"}},441:function(e,a,t){e.exports={dialog_inner:"DialogMessage_dialog_inner__2dvTV"}},444:function(e,a,t){"use strict";t.r(a);var n=t(54),s=t(55),r=t(57),i=t(56),c=t(0),l=t.n(c),o=t(437),m=t.n(o),u=t(177),d=(t(438),t(204)),g=t(205),f=t(31),_=t(439),b=t.n(_),p=function(e){var a=e.input,t=e.meta,n=Object(f.a)(e,["input","meta"]);return l.a.createElement("div",{className:b.a.form},l.a.createElement("textarea",Object.assign({},a,n,{className:t.valid?b.a.textarea:b.a.noValid})),!t.valid&&l.a.createElement("p",null,t.error))},E=t(93),v=Object(g.a)({form:"FormAddMessage"})((function(e){return l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement(d.a,{name:"addMessage",component:p,validate:[E.b]}),l.a.createElement("button",null,"add message"))})),M=function(e){return l.a.createElement("div",{className:"addMessage"},l.a.createElement(v,{onSubmit:function(a){e.addMessage(a.addMessage)}}))},j=t(12),O=t(43),x=Object(j.b)((function(e){return{}}),(function(e){return{addMessage:function(a){e(Object(u.a)(a)),e(Object(O.a)("FormAddMessage"))}}}))(M),N=t(440),F=t.n(N),h=t(18),k=t(73),y=t.n(k),A=function(e){var a=e.dialog;return l.a.createElement(h.b,{to:"/message/"+a.id,className:F.a.dialog,activeClassName:F.a.active},l.a.createElement("div",{className:F.a.listItem},l.a.createElement("img",{src:y.a,alt:"ava"}),l.a.createElement("p",null,a.user)))},D=function(e){return l.a.createElement("div",null,e.dialogs.map((function(e){return l.a.createElement(A,{dialog:e,key:e.id})})))},V=Object(j.b)((function(e){return{dialogs:e.messagePage.dialogs}}),(function(e){return{}}))(D),S=t(441),w=t.n(S),I=function(e){return l.a.createElement("div",{className:w.a.dialog_inner},e.message.map((function(e){return l.a.createElement("p",{key:e.id}," ",e.message," ")})))},J=Object(j.b)((function(e){return{message:e.messagePage.message}}))(I),C=function(e){return l.a.createElement("div",{className:m.a.messages},l.a.createElement(V,null),l.a.createElement("div",{className:m.a.dialog},l.a.createElement(J,null),l.a.createElement(x,null)))},K=t(125),P=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(C,null)}}]),t}(c.Component);a.default=Object(K.a)(P)}}]);
//# sourceMappingURL=3.f52bbd11.chunk.js.map