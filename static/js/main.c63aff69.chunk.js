(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,img:"ACO",src:"/assets/images/zeoliteImages/ACO_001.jpg",clicked:!1},{id:2,img:"BEA",src:"/assets/images/zeoliteImages/BEA_100.jpg",clicked:!1},{id:3,img:"EAB",src:"/assets/images/zeoliteImages/EAB_110.jpg",clicked:!1},{id:4,img:"ETR",src:"/assets/images/zeoliteImages/ETR_001.jpg",clicked:!1},{id:5,img:"GOO",src:"/assets/images/zeoliteImages/GOO_110.jpg",clicked:!1},{id:6,img:"JNT",src:"/assets/images/zeoliteImages/JNT_100.jpg",clicked:!1},{id:7,img:"LOV",src:"/assets/images/zeoliteImages/LOV_100.jpg",clicked:!1},{id:8,img:"MAZ",src:"/assets/images/zeoliteImages/MAZ_001.jpg",clicked:!1},{id:9,img:"MRT",src:"/assets/images/zeoliteImages/MRT_100.jpg",clicked:!1},{id:10,img:"NSI",src:"/assets/images/zeoliteImages/NSI_010.jpg",clicked:!1},{id:11,img:"RRO",src:"/assets/images/zeoliteImages/RRO_proj_001.jpg",clicked:!1},{id:12,img:"PUN",src:"/assets/images/zeoliteImages/PUN_010.jpg",clicked:!1},{id:13,img:"SGT",src:"/assets/images/zeoliteImages/SGT.jpg",clicked:!1},{id:14,img:"SOD",src:"/assets/images/zeoliteImages/SOD_001.jpg",clicked:!1},{id:15,img:"SSO",src:"/assets/images/zeoliteImages/SSO_010.jpg",clicked:!1},{id:16,img:"YFI",src:"/assets/images/zeoliteImages/YFI_100.jpg",clicked:!1}]},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),c=a(3),r=a.n(c),n=(a(15),{nav:{backgroundColor:"#e6c400",boxShadow:"0px 2px 25px 1px rgba(0,0,0,0.45)"},restartButton:{fontFamily:"sSharp"},h1:{fontFamily:"sSharp",fontSize:"100px",fontWeight:500}});var l=function(){return i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar navbar-light",style:n.nav},i.a.createElement("span",{style:n.h1},"Z-O-LITE"),i.a.createElement("span",null,"Click the images to get points but clicking an image twice will reset."),i.a.createElement("p",null,i.a.createElement("span",null,i.a.createElement("a",{href:"https://www.explainthatstuff.com/zeolites.html",target:"_blank"},"Click here to learn more!")))))},m=a(4),o=a(5),g=a(7),d=a(6),p=a(8),h={width:"10rem",backgroundColor:"#ddd"};var u=function(e){return i.a.createElement("div",{className:"card",style:h,onClick:function(){return e.handleClick(e.id)}},i.a.createElement("img",{className:"card-img-top",src:e.src,alt:e.img}))},k=a(1),f={row:{display:"flex"},score:{fontFamily:"sSharp",fontSize:"2rem"},pipe:{color:"#e6c400",fontSize:"3rem"},message:{fontFamily:"sSharp",fontSize:"2.5rem"}},E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={images:k,clickedImages:[],score:0,high_score:0,message:"",href:"#",framework:""},a.shuffle=function(e){for(var t,a,s=e.length;0!==s;)a=Math.floor(Math.random()*s),t=e[s-=1],e[s]=e[a],e[a]=t;return e},a.handleClick=function(e){var t=a.state.clickedImages,s=k.filter(function(t){return e===t.id});a.state.clickedImages.includes(s[0].img)?(a.setState({images:k}),a.setState({clickedImages:[]}),a.state.score>a.state.high_score&&a.setState({high_score:a.state.score}),a.setState({score:0}),a.setState({message:"RESET"})):(t.push(s[0].img),a.setState({clickedImages:t}),a.setState({score:a.state.score+1}),a.setState({images:a.shuffle(k)}),a.setState({message:"CORRECT"}),a.setState({framework:s[0].img}))},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container",style:f.container},i.a.createElement("div",null,i.a.createElement("span",{style:f.score},"Score: ",this.state.score," ",i.a.createElement("span",{style:f.pipe},"|")," High Score: ",this.state.high_score)),i.a.createElement("div",null,i.a.createElement("p",{style:f.message},this.state.message),i.a.createElement("p",null,"Framework: ",this.state.framework)),i.a.createElement("div",{className:"row",style:f.row},k.map(function(t){return i.a.createElement(u,{className:"col-3",id:t.id,key:t.id,src:t.src,name:t.img,clicked:t.clicked,handleClick:e.handleClick})})))}}]),t}(s.Component);a(16);var S=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(l,null),i.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.c63aff69.chunk.js.map