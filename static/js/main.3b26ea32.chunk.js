(this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]=this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),u=(a(16),Object(n.createContext)());var i=function(){var e=Object(n.useContext)(u),t=e.data,a=e.filters,l=e.filtered,c=a.filterByName.name;if(void 0===t)return r.a.createElement("h3",null,"Carregando...");var i=void 0===l?t:l;return r.a.createElement("div",null,r.a.createElement("p",null,"Tabela"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,Object.keys(t[0]).map((function(e,t){return r.a.createElement("th",{key:t},e)})))),r.a.createElement("tbody",null,i.filter((function(e){return e.name.includes(c)})).map((function(e,t){return r.a.createElement("tr",{key:t},Object.values(e).map((function(e,t){return r.a.createElement("td",{key:t},e)})))})))))};var o=function(){var e=Object(n.useContext)(u).fetchApiPlanets;return Object(n.useEffect)((function(){e()}),[e]),r.a.createElement("header",null,r.a.createElement("h2",null,"StarWars Planets"))},m=a(5),s=a(3),f=a.n(s),b=a(10),p=a(1),d=a(7),v=a(2);var E=function(){var e=Object(n.useContext)(u),t=e.data,a=e.filterByNamePlanet,l=e.filters,c=e.setFilters,i=e.columnsOptions,o=Object(n.useState)({column:"",comparison:"",value:""}),s=Object(v.a)(o,2),E=s[0],j=s[1],O=function(){var e=Object(d.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(Object(p.a)(Object(p.a)({},l),{},{filterByNumericValues:[].concat(Object(b.a)(l.filterByNumericValues),[E])}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(e){var t=e.target,a=t.name,n=t.value;j(Object(p.a)(Object(p.a)({},E),{},Object(m.a)({},a,n)))};return void 0===t?r.a.createElement("h3",null,"Carregando..."):r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"filterName"},r.a.createElement("input",{type:"text",id:"filterName","data-testid":"name-filter",onChange:function(e){var t=e.target;return a(t.value)}})),r.a.createElement("label",{htmlFor:"column"},"Filtro de Colunas:",r.a.createElement("select",{name:"column",id:"column","data-testid":"column-filter",onChange:h},i.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement("label",{htmlFor:"comparison"},"Filtro de compara\xe7\xe3o:",r.a.createElement("select",{name:"comparison",id:"comparison","data-testid":"comparison-filter",onChange:h},r.a.createElement("option",{value:"-"},"-"),r.a.createElement("option",{value:"maior que"},"maior que"),r.a.createElement("option",{value:"menor que"},"menor que"),r.a.createElement("option",{value:"igual a"},"igual a"))),r.a.createElement("label",{htmlFor:"value"},"Filtrar Valor:",r.a.createElement("input",{type:"number",name:"value",id:"value","data-testid":"value-filter",onChange:h})),r.a.createElement("button",{type:"button","data-testid":"button-filter",onClick:O},"Filtrar"))};var j=function(){var e=Object(n.useContext)(u),t=e.filters,a=e.setFilters,l=e.setFiltered,c=t.filterByNumericValues;return r.a.createElement("div",{className:"filters-list"},c.length>0?c.map((function(e,n){return r.a.createElement("div",{key:n,"data-testid":"filter"},r.a.createElement("p",null,e.column),r.a.createElement("p",null,e.comparison),r.a.createElement("p",null,e.value),r.a.createElement("button",{type:"button",onClick:function(){return function(e,n){var r=c.splice(e,1);a(Object(p.a)(Object(p.a)({},t),{},{filterByNumericValues:[r]})),l(void 0)}(n)}},"X"))})):r.a.createElement("p",null," Filtragens Vazia... "))};var O=function(e){var t=e.children,a=Object(n.useState)(),l=Object(v.a)(a,2),c=l[0],i=l[1],o=Object(n.useState)({filterByName:{name:""},filterByNumericValues:[]}),m=Object(v.a)(o,2),s=m[0],b=m[1],E=Object(n.useState)(),j=Object(v.a)(E,2),O=j[0],h=j[1],y=Object(n.useState)(["population","orbital_period","diameter","rotation_period","surface_water"]),N=Object(v.a)(y,2),k=N[0],g=N[1],B=Object(n.useCallback)(Object(d.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://swapi-trybe.herokuapp.com/api/planets/").then((function(e){return e.json()})).then((function(e){e.results.forEach((function(e){return delete e.residents})),i(e.results)}));case 1:case"end":return e.stop()}}),e)}))),[]);return Object(n.useEffect)((function(){if(s.filterByNumericValues.length>0){var e=s.filterByNumericValues[0],t=e.column,a=e.value;switch(e.comparison){case"maior que":var n=c.filter((function(e){return Number(e[t])>Number(a)}));i(n);break;case"menor que":var r=c.filter((function(e){return Number(e[t])<Number(a)}));i(r);break;case"igual a":var l=c.filter((function(e){return Number(e[t])===Number(a)}));i(l);break;default:console.log("")}}}),[c,s.filterByNumericValues]),Object(n.useEffect)((function(){var e=k;s.filterByNumericValues.forEach((function(t){var a=t.column;e.splice(e.indexOf(a),1),g(e)}))}),[k,s.filterByNumericValues]),r.a.createElement(u.Provider,{value:{data:c,filters:s,filtered:O,columnsOptions:k,setFilters:b,setFiltered:h,fetchApiPlanets:B,filterByNamePlanet:function(e){b(Object(p.a)(Object(p.a)({},s),{},{filterByName:{name:e}}))}}},t)};var h=function(){return r.a.createElement(O,null,r.a.createElement(o,null),r.a.createElement(E,null),r.a.createElement(j,null),r.a.createElement(i,null))};c.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.3b26ea32.chunk.js.map