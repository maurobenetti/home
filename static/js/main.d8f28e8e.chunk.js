(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{104:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),i=t.n(r),c=(t(73),t(22)),s=t(17),o=(t(74),t(75),t(77),t(4)),m=t(32),d=t(7),u=t(50),p=t.n(u),g=function(){var e=Object(n.useState)(new Array(o.j.length).fill("socialicons")),a=Object(d.a)(e,2),t=a[0],r=a[1],i=function(e){var a=Object(m.a)(t);return"enter"===e.event?(a[e.icon.id]="socialiconshover",r(a)):"leave"===e.event?(a[e.icon.id]="socialicons",r(a)):void 0};return l.a.createElement("div",null,l.a.createElement("div",{id:"home",className:"title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},l.a.createElement("div",{id:"stars"}),l.a.createElement("div",{className:"container container-fluid text-center "},l.a.createElement("h1",{className:"display-1"},o.a+" "+o.c+" "+o.b),l.a.createElement(p.a,{className:"lead"}," ",o.f),l.a.createElement("div",{className:"p-5"},o.j.map((function(e){return l.a.createElement("a",{key:e.id,target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},l.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x ").concat(t[e.id]),onMouseOver:function(){return i({icon:e,event:"enter"})},onMouseOut:function(){return i({icon:e,event:"leave"})}}))}))),l.a.createElement("a",{className:"btn btn-outline-light btn-lg",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me"))))},h=t(19),b=t.n(h),f=t(37),E=t.n(f),v=t(51),N=t.n(v),y=(t(95),{display:"flex",flexDirection:"row",alignItems:"center"}),w=function(){var e=Object(n.useState)(""),a=Object(d.a)(e,2),t=(a[0],a[1]),r=Object(n.useState)(o.p),i=Object(d.a)(r,2),c=i[0],s=i[1],m=Object(n.useState)(E.a),u=Object(d.a)(m,1)[0];Object(n.useEffect)((function(){c&&p()}),[c]);var p=function(e){b.a.get(o.k+o.m+o.l).then((function(e){return t(e.data.graphql.user.profile_pic_url_hd)})).catch((function(e){return s(!1),console.error(e.message)})).finally((function(){}))};return l.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"#f7f7f7"}},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"row",style:y},l.a.createElement("div",{className:"col-5 d-none d-lg-inline align-self-center"},l.a.createElement("img",{className:"border border-secondary rounded-circle",src:N.a,alt:"profilepicture",width:"375",height:"375"})),l.a.createElement("div",{className:"col d-lg-inline align-self-center"},l.a.createElement("h1",{className:"display-4 mb-5 text-center"},o.e),l.a.createElement("p",{className:"lead text-center"},o.d),l.a.createElement("br",null),u&&l.a.createElement("p",{className:"lead text-center"},l.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:E.a,target:"_blank",rel:"noreferrer noopener",role:"button"},"Resume"))))))},A=function(e){var a=e.value,t=Object(n.useState)([]),r=Object(d.a)(t,2),i=r[0],c=r[1],s=Object(n.useCallback)((function(e){b.a.get(a).then((function(e){return c(e.data)})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[a]);Object(n.useEffect)((function(){s()}),[s]);var o=[],m=0;for(var u in i)o.push(u),m+=i[u];return l.a.createElement("div",{className:"pb-3"},"Languages:"," ",o.map((function(e){return l.a.createElement("p",{key:e,className:"badge badge-light card-link"},e,": ",Math.trunc(i[e]/m*1e3)/10," %")})))},k=function(e){var a=e.value,t=Object(n.useState)("0 mints"),r=Object(d.a)(t,2),i=r[0],c=r[1],s=Object(n.useCallback)((function(e){var t=new Date(a.pushed_at),n=(new Date).getTime()-t.getTime(),l=Math.trunc(n/1e3/60/60);if(l<24)return c("".concat(l.toString()," hours ago"));var r=t.getDate(),i=t.getMonth(),s=t.getFullYear();return c("on ".concat(r," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][i]," ").concat(s))}),[a.pushed_at]);Object(n.useEffect)((function(){s()}),[s]);var o=a.name,m=a.description,u=a.svn_url,p=a.stargazers_count,g=a.languages_url;return l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},o," "),l.a.createElement("p",{className:"card-text"},m," "),l.a.createElement("a",{href:"".concat(u,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},l.a.createElement("i",{className:"fab fa-github"})," Clone Project"),l.a.createElement("a",{href:u,target:" _blank",className:"btn btn-outline-secondary"},l.a.createElement("i",{className:"fab fa-github"})," Repo"),l.a.createElement("hr",null),l.a.createElement(A,{value:g}),l.a.createElement("p",{className:"card-text"},l.a.createElement("span",{className:"text-dark card-link mr-4"},l.a.createElement("i",{className:"fab fa-github"})," Stars"," ",l.a.createElement("span",{className:"badge badge-dark"},p)),l.a.createElement("small",{className:"text-muted"},"Updated ",i)))))},x=function(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],r=a[1],i=Object(n.useCallback)((function(e){b.a.get(o.g+o.i+o.h).then((function(e){return r(e.data.slice(0,o.o))})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[]);return Object(n.useEffect)((function(){i()}),[i]),l.a.createElement("div",{id:"projects",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"#f7f7f7"}},t.length&&l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("h1",{className:"display-4 pb-5 text-center"},o.n),l.a.createElement("div",{className:"row"},t.map((function(e){return l.a.createElement(k,{key:e.id,id:e.id,value:e})})))))},I=function(){var e=Object(n.useState)({backgroundColor:"#f5f5f5"}),a=(Object(d.a)(e,1)[0],Object(n.useState)(new Array(o.j.length).fill("sociali"))),t=Object(d.a)(a,2);t[0],t[1];return l.a.createElement("div",{id:"contact",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"#f7f7f7"}},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"d-inline align-self-center"},l.a.createElement("h2",{className:"display-4 pb-3 text-center"},"Get In Touch"),l.a.createElement("p",{className:"lead text-center",style:{fontSize:"22px"}},"I would love to be helpful for your project. Please do not hesitate to contact me, my email is",l.a.createElement("a",{href:"mailto:mauro.benetti@gmail.com"}," ","mauro.benetti@gmail.com"),"."),l.a.createElement("footer",{style:{backgroundColor:"#f7f7f7"},className:"mt-auto py-3 text-center"},l.a.createElement("i",{className:"fas fa-code"})," with ",l.a.createElement("i",{className:"fas fa-heart"})," by"," ",l.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/mbenetti","aria-label":"My GitHub"},"Mauro Benetti")," ","using ",l.a.createElement("i",{className:"fab fa-react"})))))},j=function(e){var a=Object(n.useState)(!0),t=Object(d.a)(a,2),r=t[0],i=t[1];return Object(n.useEffect)((function(){document.addEventListener("scroll",(function(){var e=window.scrollY<200;e!==r&&i(e)}))}),[r]),l.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-light ".concat(r?"bg-transparent":"bg-gradient"," ")},l.a.createElement("a",{className:"navbar-brand",href:"/home/#home"},"<".concat(o.a," />")),l.a.createElement("button",{className:"d-none navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},l.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link lead",href:"/home/#aboutme"},l.a.createElement("b",null,"About"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link lead",href:"/home/#experience"},l.a.createElement("b",null,"Experience"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link lead",href:"/home/#projects"},l.a.createElement("b",null,"Projects"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link lead",href:"/home/#leadership"},l.a.createElement("b",null,"Competencies"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link lead",href:"/home/#skills"},l.a.createElement("b",null,"Skills"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link lead",href:"/home/#interests"},l.a.createElement("b",null,"Interests"))))))},C=t(54),O=function e(a){var t=this,r=a.title,i=a.image,c=a.description;Object(C.a)(this,e),this.list=[],this.addParagraph=function(e){return t.list.push(l.a.createElement("p",{key:t.list.length,className:"lead"},e)),t},this.addHeading=function(e){return t.list.push(l.a.createElement(n.Fragment,{key:t.list.length},l.a.createElement("h1",{className:""},e),l.a.createElement("hr",null))),t},this.getBlog=function(){return l.a.createElement("div",{className:"container-lg"},t.list)},this.title=r,this.image=i,this.description=c},q=[],B=new O({title:"My First Blog",image:"img",description:"Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, dolores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia provident similique corporis rem ullam odio excepturi voluptas harum, architecto sit!"}).addHeading("Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"),U=new O({title:"My Second Blog",image:"img",description:"Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore aut neque consectetur voluptatem quam nihil, facere earum adipisci, animi beatae dicta maiores, ipsam delectus ab molestias dolorum aperiam? Sapiente?"}).addHeading("Heading").addParagraph("1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?").addHeading("New Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?");q.push(U),q.push(B);var S=t(14),P=t(57),Z=t.n(P),D=t(58),Q=t.n(D),J=t(59),H=t.n(J),T=t(60),X=t.n(T),M=t(61),R=t.n(M),z=t(62),V=t.n(z),L=t(63),G=t.n(L),K=t(64),W=t.n(K),F=function(){return l.a.createElement("div",{id:"leadership",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"white"}},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col d-lg-inline align-self-center"},l.a.createElement("h1",{className:"display-4 mb-3 text-center"},"Competencies"),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col d-lg-inline align-self-center"},l.a.createElement("p",{className:"lead text-left"},"Throughout my professional career, I have been grateful to have many opportunities to learn from my peers and share many experiences. My path was unconventional, from ",l.a.createElement("b",null,"Electronics")," to ",l.a.createElement("b",null,"Telecommunications")," then to ",l.a.createElement("b",null,"Engineering")," and finally to ",l.a.createElement("b",null,"BI & Analytics"),". I received formal training in ",l.a.createElement("b",null,"Situation Leadership"),", and I have a wide variety of courses from ",l.a.createElement("b",null,"SAP")," and ",l.a.createElement("b",null,"Microsoft"),". Today is fair to say the only constant is change, and I believe that the most valuables skills are adaptation and constant learning.")),l.a.createElement("div",{className:"col d-lg-inline align-self-center"},l.a.createElement(S.a,null,l.a.createElement(S.a.Item,null,l.a.createElement("img",{className:"rounded",src:Q.a,alt:"culture",width:"600",height:"400"})),l.a.createElement(S.a.Item,null,l.a.createElement("img",{className:"rounded",src:Z.a,alt:"service",width:"600",height:"400"})),l.a.createElement(S.a.Item,null,l.a.createElement("img",{className:"rounded",src:G.a,alt:"SEC",width:"600",height:"400"})),l.a.createElement(S.a.Item,null,l.a.createElement("img",{className:"rounded",src:R.a,alt:"zilker",width:"600",height:"400"})),l.a.createElement(S.a.Item,null,l.a.createElement("img",{className:"rounded",src:W.a,alt:"custodialappreciation",width:"600",height:"400"})),l.a.createElement(S.a.Item,null,l.a.createElement("img",{className:"rounded",src:H.a,alt:"committee",width:"600",height:"400"})),l.a.createElement(S.a.Item,null,l.a.createElement("img",{className:"rounded",src:X.a,alt:"volunteer",width:"600",height:"400"})),l.a.createElement(S.a.Item,null,l.a.createElement("img",{className:"rounded",src:V.a,alt:"family",width:"600",height:"400"})))))))))},Y=t(65),_=t.n(Y),$=t(66),ee=t.n($),ae={display:"flex",flexDirection:"row",alignItems:"center"},te=function(){return l.a.createElement("div",{id:"experience",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"white"}},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col d-lg-inline align-self-center"},l.a.createElement("h1",{className:"display-4 mb-5 text-center"},"Previous experiences"),l.a.createElement("div",{className:"row",style:ae},l.a.createElement("div",{className:"col text-center"},l.a.createElement("img",{src:ee.a,alt:"dell technologies logo",width:"270",height:"66"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",{className:"lead text-center",style:{fontSize:"22px"}},"For two years I was a Field Manager in the implementation of more than 200 site 3G and 4G along the South and West of Argentina. This also includes transmission systems and subcontractor management.",l.a.createElement("br",null))),l.a.createElement("div",{className:"col text-center"},l.a.createElement("img",{src:_.a,alt:"boeing logo",width:"350",height:"95"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",{className:"lead text-center",style:{fontSize:"22px"}},"For over 6 years I was Group Leader and Expert in transmission systems. I personally implemented or supervised rollouts in Argentina, Mexico, Guatemala, Costa Rica, El Salvador, and Brazil.",l.a.createElement("br",null))))))))},ne={display:"flex",flexDirection:"row",alignItems:"center"},le=function(){return l.a.createElement("div",{id:"interests",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"white"}},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col d-lg-inline align-self-center"},l.a.createElement("h1",{className:"display-4 pb-4 text-center"},"Interests"),l.a.createElement("div",{className:"row",style:ne},l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center",style:{fontSize:"28px"}},"Data Science "),l.a.createElement("img",{src:"https://img.icons8.com/ios/72/bot.png"}),l.a.createElement("p",{className:"lead text-center"},"Every day I read or learn something new about this fascinating fields. I believed that soon, Cognitive Systems will continue enhancing human capabilities to the point we would be able to spend more time doing what we want and less working for the living.")),l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center",style:{fontSize:"28px"}},"Reading"),l.a.createElement("img",{src:"https://img.icons8.com/wired/64/000000/reading.png"}),l.a.createElement("p",{className:"lead text-center"},"I love reading, my favorite author is Wilbur Smith, I finished the Egyptian Saga and I am in the middle of the Courtney Family Saga. Other authors I enjoy reading are: Nassim Taleb, James Gleick, Ken Wilber, Eric Siegel, and Roger Lewin")),l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center",style:{fontSize:"28px"}},"Meditation and Chi kung"),l.a.createElement("img",{src:"https://img.icons8.com/dotty/80/000000/floating-guru.png"}),l.a.createElement("p",{className:"lead text-center"},"This is an important part of my life. I practice meditation in its many forms since I was young, and for a long time, I also practice Chi Kung. The practice of this body-mind activities brings me balance and serenity to my day.")),l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center",style:{fontSize:"28px"}},"Riding my bicycle"),l.a.createElement("img",{src:"https://img.icons8.com/dotty/80/000000/cycling-mountain-bike.png"}),l.a.createElement("p",{className:"lead text-center"},"I love riding my bicycle long distances, before coming to Germany I traveled for one month in Patagonia with my tend and my bike. In Germany I travel the route that connects the origin of the Danube river to Black Sea. I already have 500 kms and my plan is continuing next year.")))))))},re=t(13),ie=t(67),ce=t(40),se={display:"flex",flexDirection:"row",alignItems:"center"},oe=function(){return l.a.createElement("div",{id:"skills",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"#d6d6d6"}},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"d-inline align-self-center"},l.a.createElement("h1",{className:"display-4 pb-5 text-center"},"Skills"),l.a.createElement(ie.a,{defaultActiveKey:"home",justify:!0,variant:"tabs",transition:!1,id:"skills-tabs",style:{backgroundColor:"#f7f7f7",fontSize:"1.25rem"}},l.a.createElement(ce.a,{eventKey:"home",title:"Hard Skills"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("br",null),l.a.createElement("p",{className:"lead"},"Analytics & Data Science",l.a.createElement(re.a,{now:90,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"Business Intelligence",l.a.createElement(re.a,{now:87,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"Project Management",l.a.createElement(re.a,{now:80,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"Data Engineering",l.a.createElement(re.a,{now:70,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"IIoT and Edge computing",l.a.createElement(re.a,{now:60,style:{width:"490px",backgroundColor:"white"}}))),l.a.createElement("div",{className:"col"},l.a.createElement("br",null),l.a.createElement("p",{className:"lead"},"Python, R and C",l.a.createElement(re.a,{now:85,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"Docker container and Micro Service Architecture",l.a.createElement(re.a,{now:85,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"Cloud technologies: SAP Cloud and Micrisoft Azure",l.a.createElement(re.a,{now:80,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"Linux SUSE, Ubuntu, Raspbian, RedHat",l.a.createElement(re.a,{now:75,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"SQL, Cypher(Graph), NOSQL",l.a.createElement(re.a,{now:40,style:{width:"490px",backgroundColor:"white"}}))))),l.a.createElement(ce.a,{eventKey:"soft",title:"Soft Skills"},l.a.createElement("div",{className:"col d-lg-inline align-self-center"},l.a.createElement("br",null),l.a.createElement("div",{className:"row",style:se},l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center"},"Leadership"),l.a.createElement("img",{src:"https://img.icons8.com/ios-filled/50/000000/leadership.png"})),l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center"},"Problem Solving"),l.a.createElement("img",{src:"https://img.icons8.com/ios-filled/50/000000/mind-map.png"})),l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center"},"Business Focus"),l.a.createElement("img",{src:"https://img.icons8.com/ios-filled/50/000000/purposeful-man.png"})),l.a.createElement("br",null),l.a.createElement("div",{className:"row",style:se},l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center"},"Effective Comunication"),l.a.createElement("img",{src:"https://img.icons8.com/pastel-glyph/64/000000/communication--v1.png"})),l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center"},"Organization"),l.a.createElement("img",{src:"https://img.icons8.com/ios-filled/50/000000/task.png"})),l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center"},"Critical Thinking"),l.a.createElement("img",{src:"https://img.icons8.com/ios-filled/50/000000/critical-thinking.png"})),l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center"},"Intellectual Curiosity"),l.a.createElement("img",{src:"https://img.icons8.com/metro/52/000000/book.png"}))))))))))},me=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(g,null),l.a.createElement(w,null),l.a.createElement(te,null),l.a.createElement(x,null),l.a.createElement(F,null),l.a.createElement(oe,null),l.a.createElement(le,null))},de=function(){return l.a.createElement(c.a,{basename:"/home/"},o.q&&l.a.createElement(j,null),l.a.createElement(s.a,{path:"/",exact:!0,component:me}),l.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},37:function(e,a,t){e.exports=t.p+"static/media/CVBenettiMEng2020.1d0cc7b9.pdf"},4:function(e){e.exports=JSON.parse('{"a":"Mauro","c":"","b":"Benetti","f":"Changing the world with technology.","j":[{"id":0,"image":"fa-github","url":"https://github.com/mbenetti","style":"socialicons"},{"id":1,"image":"fa-linkedin","url":"https://www.linkedin.com/in/maurobenetti/?locale=en_US","style":"socialicons"},{"id":2,"image":"fa-microsoft","url":"https://docs.microsoft.com/en-us/users/benettimauroanibal-3010/","style":"socialicons"}],"e":"About Me","p":false,"k":"https://www.instagram.com/","m":"mau.8420","l":"/?__a=1","d":"Hello! My name is Mauro, and I am an Engineer with a Master on Business Intelligence and Analytics. I work as a Consultant at Datagroup GmbH, and I use Azure and SAP for Analytics and Data Science projects. I have extensive experience leading projects and I have occupied Senior positions in big tech companies. In many occasions I coordinate multiple cross-functional teams to meet the project deadlines. Leading is part of my character but I also enjoy working independently crunching data and making models. Day by day I built up stronger my skills in Analytics and Data Science. My hobbies are retro computing, ride my bicycle long distances, and long walks in the forest. Now I am living in the south of Germany enjoying the challenges of living in a different culture and learning a new language. I am most passionate about the use of Data and AI in our daily life","n":"Recent Data Analytics solutions and projects on GitHub","g":"https://api.github.com/users/","i":"mbenetti","h":"/repos?sort=updated&direction=desc","o":6,"q":true}')},51:function(e,a,t){e.exports=t.p+"static/media/Profile.19be5a4f.jpg"},57:function(e,a,t){e.exports=t.p+"static/media/service.497d47f0.jpg"},58:function(e,a,t){e.exports=t.p+"static/media/culture.ac1bcc62.jpg"},59:function(e,a,t){e.exports=t.p+"static/media/committee.60381589.jpg"},60:function(e,a,t){e.exports=t.p+"static/media/park.31979142.jpg"},61:function(e,a,t){e.exports=t.p+"static/media/zilker.0cd01491.jpg"},62:function(e,a,t){e.exports=t.p+"static/media/retreat.f9a5e4d9.jpg"},63:function(e,a,t){e.exports=t.p+"static/media/sec.181917e5.jpg"},64:function(e,a,t){e.exports=t.p+"static/media/custodians.216242f4.jpg"},65:function(e,a){e.exports="data:image/jpeg;base64,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"},66:function(e,a,t){e.exports=t.p+"static/media/dell-logo.142d61c4.png"},68:function(e,a,t){e.exports=t(104)},73:function(e,a,t){},77:function(e,a,t){}},[[68,1,2]]]);
//# sourceMappingURL=main.d8f28e8e.chunk.js.map