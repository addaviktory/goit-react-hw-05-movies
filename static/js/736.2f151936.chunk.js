"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{9736:function(e,n,t){t.r(n),t.d(n,{Cast:function(){return _}});var r,a,c,i=t(5861),s=t(9439),o=t(4687),p=t.n(o),u=t(7689),h=t(1243),l=t(812),f=t(2791),d=t(168),g=t(5706),m=g.Z.ul(r||(r=(0,d.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 40px;\n}"]))),v=g.Z.li(a||(a=(0,d.Z)(["\n  height: 370px;\n  width: 200px;\n"]))),x=g.Z.img(c||(c=(0,d.Z)(["\n  width: 200px;\n  height: 300px;\n"]))),w=t(184),_=function(){var e=(0,f.useState)(null),n=(0,s.Z)(e,2),t=n[0],r=n[1],a=(0,u.UO)().movieId;return(0,f.useEffect)((function(){var e=function(){var e=(0,i.Z)(p().mark((function e(){var n,t,c;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.Z.get("https://api.themoviedb.org/3/movie/".concat(a,"/credits?api_key=").concat(l.$,"&language=en-US"));case 3:n=e.sent,t=n.data.cast,c=t.map((function(e){var n=e.character,t=e.id,r=e.name,a=e.profile_path;return{id:t,name:r,character:n,profile:a?"https://image.tmdb.org/t/p/w500".concat(a):"https://e7.pngegg.com/pngimages/491/220/png-clipart-woman-question-mark-mysterious-people-woman.png"}})),r(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[a]),(0,w.jsx)(w.Fragment,{children:null!==t&&0!==t.length?(0,w.jsx)(m,{children:t.map((function(e){var n=e.id,t=e.name,r=e.character,a=e.profile;return(0,w.jsxs)(v,{children:[(0,w.jsx)(x,{src:a,alt:t}),(0,w.jsx)("h3",{children:t}),(0,w.jsxs)("p",{children:["Character: ",r]})]},n)}))}):(0,w.jsx)("p",{children:"Sorry, but we don't have a list of cast for this movie."})})}},812:function(e,n,t){t.d(n,{$:function(){return r}});var r="41f29f5c6b11a1b10a09d857703d2b78"}}]);
//# sourceMappingURL=736.2f151936.chunk.js.map