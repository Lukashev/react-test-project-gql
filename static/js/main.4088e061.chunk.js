(this["webpackJsonpreact-test-project-gql"]=this["webpackJsonpreact-test-project-gql"]||[]).push([[0],{27:function(e,n,t){e.exports=t(38)},32:function(e,n,t){},33:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(3),c=t.n(a),r=t(19),o=t.n(r),i=(t(32),t(26)),l=t(20),s=t(15),u=t(14),d=(t(33),c.a.createContext()),m=function e(n){var t=n.name,r=n.id,o=n.children,i=Object(a.useContext)(d),l=i.activeCards,s=i.setActiveCard,u=Object(a.useMemo)((function(){return l.find((function(e){return e===r}))}),[l,r]),m={style:{display:u?"block":"none"}},v={style:{fontWeight:u&&o?"bold":"normal"}},f=Object(a.useCallback)((function(e){var n=o&&o.length?l.includes(e)?l.filter((function(n){return n!==e})):l.concat(e):l.filter((function(e){return!e.includes(r.substring(0,2))}));s(n)}),[s,l,o,r]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",Object.assign({className:"card__container",onClick:f.bind(null,r)},v),c.a.createElement("div",null,t)),c.a.createElement("div",Object.assign({className:"card__container_list"},m),o&&o.map((function(n,t){var a="".concat(r).concat(n.code).concat(t);return c.a.createElement(e,Object.assign({key:a},n,{id:a}))}))))};function v(){var e=Object(l.a)(["\n  {\n    continents(filter: {}) {\n      code\n      name\n      children: countries {\n        code\n        name\n        children: languages {\n          code\n          name\n        }\n      }\n    }\n  }\n"]);return v=function(){return e},e}var f=Object(u.b)(v());var b=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1],o=Object(s.a)(f),l=o.loading,u=o.error,v=o.data,b=void 0===v?{}:v;return l?c.a.createElement("p",null,"Loading..."):u?c.a.createElement("p",null,"Error :("):c.a.createElement(d.Provider,{value:{activeCards:t,setActiveCard:r}},c.a.createElement("div",{className:"App"},b.continents.map((function(e,n){var t="".concat(e.code).concat(n);return c.a.createElement(m,Object.assign({key:t},e,{id:t}))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=t(8),h=new u.a({uri:"https://countries.trevorblades.com/"});o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g.a,{client:h},c.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.4088e061.chunk.js.map