(this.webpackJsonpwebtask=this.webpackJsonpwebtask||[]).push([[6],{128:function(t,e,i){},129:function(t,e,i){},130:function(t,e,i){},143:function(t,e,i){"use strict";i.r(e);var s=i(94),n=i.n(s),c=i(95),a=i(37),r=i(13),o=i(39),u=i(38),l=i(0),d=i(96),f=i.n(d),p="https://swapi.dev/api/films/1/",j="https://www.swapi.tech/api/films/1";var h=i.p+"static/media/illustration.406cf423.jpg",m=(i(128),i(2)),b=function(t){var e=t.title,i=t.description;return Object(m.jsx)("section",{className:"introduction container-body",children:Object(m.jsxs)("div",{className:"columns",children:[Object(m.jsxs)("div",{className:"introduction-text column is-4",children:[Object(m.jsx)("h1",{className:"title",children:e}),Object(m.jsx)("p",{className:"introduction-description",children:i})]}),Object(m.jsx)("div",{className:"column is-8",children:Object(m.jsx)("img",{className:"introduction-illustration",src:h,alt:"illustration"})}),Object(m.jsx)("div",{className:"introduction-text-mobile column is-4",children:Object(m.jsx)("p",{children:i})})]})})};b.defaultProps={title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum turpis orci."};var v=b,x=i.p+"static/media/direction.c0fb0284.png",O=(i(129),function(t){var e=t.feature;return Object(m.jsx)("div",{className:"feature column",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{className:"feature-icon",src:x,alt:"direction"}),Object(m.jsx)("h3",{className:"feature-title title is-4",children:e.title}),Object(m.jsx)("p",{children:e.description})]})})});O.defaultProps={};var w=O,N=(i(130),function(t){var e=t.title,i=t.features;return Object(m.jsxs)("section",{className:"features container-body",children:[Object(m.jsx)("h1",{className:"features-title title is-2",children:e}),Object(m.jsx)("div",{className:"columns is-variable is-4",children:i.map((function(t,e){return Object(m.jsx)(w,{feature:t},e)}))})]})});N.defaultProps={title:"Lorem Ipsum",features:[]};var g=N,k=function(t){Object(o.a)(i,t);var e=Object(u.a)(i);function i(t){var s;return Object(a.a)(this,i),(s=e.call(this,t)).fetchAboutInfo=Object(c.a)(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get(p).then((function(t){var e=t.data;s.setState({title:e.title,description:e.opening_crawl},(function(){s.generateFeatures()}))})).catch((function(){s.fetchAboutInfoBackup()}));case 2:case"end":return t.stop()}}),t)}))),s.fetchAboutInfoBackup=Object(c.a)(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get(j).then((function(t){var e=t.data.result.properties;s.setState({title:e.title,description:e.opening_crawl},(function(){s.generateFeatures()}))})).catch((function(){s.setState({title:void 0,description:void 0})}));case 2:case"end":return t.stop()}}),t)}))),s.state={title:"",description:"",features:[]},s}return Object(r.a)(i,[{key:"componentDidMount",value:function(){this.fetchAboutInfo()}},{key:"generateFeatures",value:function(){for(var t=this.state,e=t.title,i=t.description,s=[],n=0;n<4;n++)s.push({title:e,description:i});this.setState({features:s})}},{key:"render",value:function(){var t=this.state,e=t.title,i=t.description,s=t.features;return Object(m.jsxs)("div",{className:"about page",children:[Object(m.jsx)(v,{title:e,description:i}),s.length>0&&Object(m.jsx)(g,{title:e,features:s})]})}}]),i}(l.Component);e.default=k}}]);
//# sourceMappingURL=6.5ddf71b0.chunk.js.map