(this["webpackJsonpdana-task"]=this["webpackJsonpdana-task"]||[]).push([[7],{125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(94),s=a.n(n),c=a(95),i=a(37),o=a(13),r=a(39),l=a(38),u=a(0),h=a(96),p=a.n(h),j="https://api.chucknorris.io/jokes/random",b="https://jsonplaceholder.typicode.com/photos";a(125);var d=a(2),m=function(e){var t=e.title,a=e.subtitle,n=e.image;return Object(d.jsx)("section",{className:"hero",style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('".concat(n,"')")},children:Object(d.jsx)("div",{className:"hero-body",children:Object(d.jsxs)("div",{className:"container has-text-centered",children:[Object(d.jsx)("h1",{className:"hero-title title",children:t}),Object(d.jsx)("h3",{className:"hero-subtitle subtitle",children:a}),Object(d.jsx)("button",{className:"hero-button button is-primary is-outlined",children:"More Info"})]})})})};m.defaultProps={title:"Lorem Ipsum",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum turpis orci.",image:"/images/placeholder_hero.jpg"};var g=m,f=a(24),O=a(105),x=a(29),v=(a(126),function(e){var t=e.photos;return Object(d.jsx)("div",{className:"photo-grid container-body",children:Object(d.jsx)("div",{className:"columns is-multiline",children:t.map((function(e){return Object(d.jsxs)("div",{className:"column is-3-desktop is-4-tablet",children:[Object(d.jsxs)("div",{className:"photo-actions",children:[Object(d.jsx)(f.a,{icon:O.b,color:"#FF0000",style:{marginRight:"0.25rem"}}),Object(d.jsx)("span",{className:"like-count",style:{marginLeft:0},children:"124"}),Object(d.jsxs)("span",{className:"action-share",children:[Object(d.jsx)(f.a,{icon:O.c}),Object(d.jsxs)("div",{className:"share-social-media",children:[Object(d.jsx)(f.a,{icon:x.a}),Object(d.jsx)(f.a,{icon:x.b}),Object(d.jsx)(f.a,{icon:x.c})]})]})]}),Object(d.jsx)("img",{className:"photo-grid-item",src:e.thumbnailUrl,alt:e.title}),Object(d.jsx)("figcaption",{className:"photo-caption",children:e.title})]},e.id)}))})})});v.defaultProps={photos:[]};var N=v,k=a(142),P=(a(127),function(e){var t=e.pages,a=e.currentPage,n=e.onChange;return Object(d.jsx)("nav",{className:"page-controller pagination is-centered",role:"navigation","aria-label":"pagination",children:Object(d.jsx)(k.a,{count:t,page:a,onChange:function(e,t){n(t)},color:"primary"})})});P.defaultProps={pages:1,currentPage:1,onChange:function(){}};var y=P,C=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).fetchSubtitle=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(j).then((function(e){var t=e.data;n.setState({subtitle:t.value})})).catch((function(e){}));case 2:case"end":return e.stop()}}),e)}))),n.fetchPhotos=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(b).then((function(e){var t=e.data;n.setState({photos:t,pages:Math.ceil(t.length/16)})})).catch((function(){}));case 2:case"end":return e.stop()}}),e)}))),n.onChangePage=function(e){n.setState({page:e})},n.state={subtitle:"",photos:[],pages:1,page:1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchSubtitle(),this.fetchPhotos()}},{key:"paginate",value:function(e,t,a){return e.slice((a-1)*t,a*t)}},{key:"render",value:function(){var e=this.state,t=e.subtitle,a=e.photos,n=e.pages,s=e.page;return Object(d.jsxs)("div",{className:"home page",children:[Object(d.jsx)(g,{title:"Photos",subtitle:t,image:"https://source.unsplash.com/random"}),Object(d.jsx)(N,{photos:this.paginate(a,16,s)}),Object(d.jsx)(y,{pages:n,currentPage:s,onChange:this.onChangePage})]})}}]),a}(u.Component);t.default=C}}]);
//# sourceMappingURL=7.6ebe2597.chunk.js.map