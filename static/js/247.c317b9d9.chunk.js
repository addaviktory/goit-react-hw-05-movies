(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{1247:function(t,e,n){"use strict";n.r(e),n.d(e,{Cast:function(){return f}});var r=n(5861),a=n(9439),c=n(4687),s=n.n(c),i=n(7689),o=n(1243),u=n(812),p=n(2791),h=n(5811),l=n(184),f=function(){var t=(0,p.useState)(null),e=(0,a.Z)(t,2),n=e[0],c=e[1],f=(0,i.UO)().movieId;return(0,p.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){var e,n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("https://api.themoviedb.org/3/movie//".concat(f,"/credits?api_key=").concat(u.$,"&language=en-US"));case 3:e=t.sent,n=e.data.cast,r=n.map((function(t){var e=t.character,n=t.id,r=t.name,a=t.profile_path;return{id:n,name:r,character:e,profile:a?"https://image.tmdb.org/t/p/w500".concat(a):"https://e7.pngegg.com/pngimages/491/220/png-clipart-woman-question-mark-mysterious-people-woman.png"}})),c(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[f]),(0,l.jsx)(l.Fragment,{children:null!==n&&0!==n.length?(0,l.jsx)(h.CastList,{children:n.map((function(t){var e=t.id,n=t.name,r=t.character,a=t.profile;return(0,l.jsxs)(h.CasstItem,{children:[(0,l.jsx)(h.CastItemImg,{src:a,alt:n}),(0,l.jsx)("h3",{children:n}),(0,l.jsxs)("p",{children:["Character: ",r]})]},e)}))}):(0,l.jsx)("p",{children:"Sorry, but we don't have a list of cast for this movie."})})}},5811:function(){},812:function(t,e,n){"use strict";n.d(e,{$:function(){return r}});var r="41f29f5c6b11a1b10a09d857703d2b78"}}]);
//# sourceMappingURL=247.c317b9d9.chunk.js.map