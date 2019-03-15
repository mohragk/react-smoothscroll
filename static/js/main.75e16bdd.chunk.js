(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(38)},25:function(e,t,a){},26:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),c=a.n(i),o=(a(25),a(1)),l=a(2),s=a(4),h=a(3),u=a(5),m=(a(26),a(10)),p=(a(36),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).scrollToTop=function(){m.animateScroll.scrollToTop()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"nav",id:"navbar"},r.a.createElement("div",{className:"nav-content"},r.a.createElement("h3",{className:"nav-logo",onClick:this.scrollToTop},"Sander Vermeer"),r.a.createElement("ul",{className:"nav-items"},r.a.createElement("li",{className:"nav-item",id:"blue"},r.a.createElement(m.Link,{activeClass:"activeGold",to:"projectsSection",spy:!0,smooth:!0,offset:-80,duration:500},"Projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.Link,{activeClass:"activePurple",to:"contactSection",spy:!0,smooth:!0,offset:-80,duration:500},"Contact")))))}}]),t}(n.Component)),d=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=(e.subtitle,e.dark),n=e.id,i={minHeight:"100vh",backgroundColor:a?"#eee":"#fff"},c={color:this.props.color};return r.a.createElement("div",{style:i,id:n},r.a.createElement("div",{style:{paddingTop:"60px",paddingBottom:"60px"}},r.a.createElement("h1",{style:{textAlign:"center",fontSize:"62px"}},t,r.a.createElement("span",{style:c},"."))),r.a.createElement("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:"40px"}},this.props.children))}}]),t}(n.Component),g=(a(37),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={height:this.props.height,background:"url(".concat(this.props.imgUrl,")"),backgroundColor:"#FF6663"},t={position:"relative",top:"".concat(this.props.height-60,"px"),left:"20px",color:"white",fontSize:"30px"};return r.a.createElement("div",{style:e},r.a.createElement("h2",{style:t},this.props.title))}}]),t}(n.Component)),f=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{fontFamily:"sans-serif",fontWeight:"bold",paddingTop:"1.5em",paddingBottom:"1.5em",paddingLeft:"10px",margin:0}},this.props.text)}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={width:600,height:a.getHeight},a.getHeight=function(){return a.state.width+20},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={height:this.state.height,width:this.state.width,marginRight:"20px"};return r.a.createElement("a",{href:this.props.targetUrl,target:"_blank"},r.a.createElement("div",{className:"card",style:e,id:this.props.id,height:this.state.height,width:this.state.width},r.a.createElement(g,{title:this.props.title,height:.65*this.state.width,imgUrl:this.props.imgUrl}),r.a.createElement(f,{text:this.props.text})))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{overflow:"hidden"}},r.a.createElement(b,{id:"card1",title:"Monosynth-1 (c++)",text:"An analogue modelled VST synthesizer made with the Juce framework.",imgUrl:"./img/monosynth-card.png",targetUrl:"https://github.com/mohragk/VermeerMonosynth-1"}),r.a.createElement(b,{id:"card2",title:"Fouries Serial Visualisation (P5.js)",text:"A visualisation of the Fouries Series, made with P5.js.",imgUrl:"./img/fourier-card.png",targetUrl:"https://editor.p5js.org/mohragk/full/BkMiw4KxV"}),r.a.createElement(b,{id:"card3",title:"Matrix Effect (P5.js)",text:"A remake of a classic.",imgUrl:"./img/matrix-card.png",targetUrl:"https://editor.p5js.org/mohragk/full/Sk2QPOsWE"}),r.a.createElement(b,{id:"card4",title:"Wordy Clock (P5.js)",text:"A clock that literally tells time.",imgUrl:"./img/wordyclock-card.png",targetUrl:"https://editor.p5js.org/mohragk/full/cuRLIK3Pq"}))}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{minHeight:"500px"}},r.a.createElement("h2",null,"Contact info"))}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{minHeight:"500px"}},r.a.createElement("h2",null,"My name is Sander Vermeer."),r.a.createElement("h2",null,"I'm a Dutch based developer, designer, music lover and all round tinkerer."))}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{minHeight:"100px",backgroundColor:"#CCC",padding:"40px"}},r.a.createElement("p",null,"copyright Sander Vermeer ",(new Date).getFullYear()," (c)."))}}]),t}(n.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(d,{title:"hello",dark:!1,color:"skyblue",id:"helloSection"},r.a.createElement(O,null)),r.a.createElement(d,{title:"projects",dark:!0,color:"gold",id:"projectsSection"},r.a.createElement(j,null)),r.a.createElement(d,{title:"contact",dark:!1,color:"crimson",id:"contactSection"},r.a.createElement(v,null)),r.a.createElement(y,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.75e16bdd.chunk.js.map