(this["webpackJsonptest-react-app"]=this["webpackJsonptest-react-app"]||[]).push([[4],{434:function(e,t,a){e.exports={profile:"Profile_profile__2vAFG",topImg:"Profile_topImg__xBcl6",posts:"Profile_posts__3LWhr"}},435:function(e,t,a){e.exports={user:"User_user__3IBa4",user__inner:"User_user__inner__1OZ5U",UserImgBtnStatus:"User_UserImgBtnStatus__2Ksbi",avatar:"User_avatar__1aLe1",followedBtn:"User_followedBtn__KRXTl",UserInformData:"User_UserInformData__2zMpF"}},436:function(e,t,a){e.exports=a.p+"static/media/ProfileHeader.25a77d8f.jpg"},445:function(e,t,a){"use strict";a.r(t);var r=a(54),s=a(55),o=a(57),l=a(56),n=a(0),i=a.n(n),u=a(434),c=a.n(u),p=a(435),m=a.n(p),f=a(73),g=a.n(f),_=a(208),d=a(209),U=function(e){var t=void 0!==e.photos&&e.photos.large;return i.a.createElement("div",{className:m.a.user},i.a.createElement("div",{className:m.a.user__inner},i.a.createElement("div",{className:m.a.UserImgBtnStatus},i.a.createElement("img",{src:t||g.a,alt:"avatar",className:m.a.avatar}),i.a.createElement("div",{className:m.a.followedBtn,onClick:function(){return e.FollowToggle()}},i.a.createElement(_.a,{id:e.userId,userFollowed:e.followedUser})),i.a.createElement("h2",null,e.fullName),e.userStatus?i.a.createElement("i",null,e.userStatus):i.a.createElement("i",null,"\u0431\u0435\u0437 \u0441\u0442\u0430\u0442\u0443\u0441\u0430")),i.a.createElement("div",{className:m.a.UserInformData},i.a.createElement(d.a,{user:e.user}))))},h=a(436),w=a.n(h),v=a(88),E=i.a.memo((function(e){return i.a.createElement("div",{className:c.a.profile},i.a.createElement("img",{src:w.a,alt:"img",className:c.a.topImg}),e.isPutData?i.a.createElement(v.a,null):i.a.createElement(U,Object.assign({},e.User,{followedUser:e.followedUser,FollowToggle:e.FollowToggle,userStatus:e.userStatus,authorization:e.authorization,user:e.User})))})),P=a(12),I=a(22),b=a(36),S=a(10),j=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;this.props.getUserStatus(e),this.props.getUserProfile(e),this.props.getFollow(e),this.props.setUserIdProfile(e)}},{key:"render",value:function(){return i.a.createElement(E,Object.assign({},this.props,{followedUser:this.props.followedUser}))}}]),a}(i.a.Component);t.default=Object(S.d)(I.g,Object(P.b)((function(e){return{User:e.profilePage.User,userStatus:e.profilePage.userStatus,followedUser:e.profilePage.followedUser,isPutData:e.profilePage.isPutData,authorization:e.auth.login}}),{getUserProfile:b.i,getFollow:b.h,getUserStatus:b.j,FollowToggle:b.a,setUserIdProfile:b.m}))(j)}}]);
//# sourceMappingURL=4.f934e5da.chunk.js.map