(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(23)},15:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),i=n.n(c),l=(n(15),n(1)),o=n(2),s=n(4),u=n(3),m=n(5),d=n(6),g=(n(8),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){n.props.clickable&&n.props.onClick(n.props.id)},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"number",style:{opacity:this.props.clickable?1:.3},onClick:this.handleClick},this.props.value)}}]),t}(a.Component)),p=n(18),h=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},f=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={gameStatus:"new",remainingSeconds:n.props.initialSeconds,selectedIds:[]},n.challengeNumbers=Array.from({length:n.props.challengeSize}).map(function(){return h.apply(void 0,Object(d.a)(n.props.challengeRange))}),n.target=p.sampleSize(n.challengeNumbers,n.props.challengeSize-2).reduce(function(e,t){return e+t},0),n.startGame=function(){n.setState({gameStatus:"playing"},function(){n.intervalId=setInterval(function(){n.setState(function(e){var t=e.remainingSeconds-1;return 0===t?(clearInterval(n.intervalId),{gameStatus:"lost",remainingSeconds:0}):{remainingSeconds:t}})},1e3)})},n.isNumberAvailable=function(e){return-1===n.state.selectedIds.indexOf(e)},n.selectNumber=function(e){"playing"===n.state.gameStatus&&n.setState(function(t){return{selectedIds:Object(d.a)(t.selectedIds).concat([e]),gameStatus:n.calcGameStatus(Object(d.a)(t.selectedIds).concat([e]))}},function(){"playing"!==n.state.gameStatus&&clearInterval(n.intervalId)})},n.calcGameStatus=function(e){var t=e.reduce(function(e,t){return e+n.challengeNumbers[t]},0);return t<n.target?"playing":t===n.target?"won":"lost"},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.autoPlay&&this.startGame()}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){var e=this,n=this.state,a=n.gameStatus,c=n.remainingSeconds;return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"target",style:{backgroundColor:t.bgColors[a]}},"new"===a?"?":this.target),r.a.createElement("div",{className:"challenge-numbers"},this.challengeNumbers.map(function(t,n){return r.a.createElement(g,{key:n,id:n,value:"new"===a?"?":t,clickable:e.isNumberAvailable(n),onClick:e.selectNumber})})),r.a.createElement("div",{className:"footer"},"new"===a?r.a.createElement("button",{onClick:this.startGame},"Start"):r.a.createElement("div",{className:"timer-value"},c),["won","lost"].includes(a)&&r.a.createElement("button",{onClick:this.props.onPlayAgain},"Play Again")))}}]),t}(a.Component);f.bgColors={playing:"#ccc",won:"green",lost:"red"};var b=f,v=(n(21),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={gameId:1},n.resetGame=function(){return n.setState(function(e){return{gameId:e.gameId+1}})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(b,{key:this.state.gameId,autoPlay:this.state.gameId>1,challengeSize:6,challengeRange:[2,9],initialSeconds:15,onPlayAgain:this.resetGame})}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){}},[[10,2,1]]]);
//# sourceMappingURL=main.17341d8e.chunk.js.map