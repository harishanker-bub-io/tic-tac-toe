import{L as A,_ as B,M as D,r as l,o as O,v as s,N as n,x as d,y as P,O as w,P as T,Q as Y,t as o,C as E,D as Q}from"./-99BGy-y.js";const J=A("/loader.webp"),N=y=>(E("data-v-357d3c1f"),y=y(),Q(),y),V={class:"text-white w-screen h-screen bg-slate-500 flex items-center justify-center"},W={key:0,class:"notification"},z={key:1},F=["src"],G={key:2},H={key:0,class:"flex flex-col gap-2"},K=["src"],X={key:1,class:"flex w-[90vw] aspect-square max-w-[700px] border-blue-700 bg-slate-700 flex-wrap"},Z=["onClick"],ee=["src"],te=["src"],se={key:2},oe={key:2,class:"m-auto justify-center"},ne=N(()=>d("img",{src:J,alt:"Loading..."},null,-1)),ae=N(()=>d("h1",null,"loading....",-1)),le=[ne,ae],ce={__name:"index",setup(y){const C=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],I=D().query.queryId,p=l(null),_=l(null),m=l(!1),f=l(null),g=l(null);let b,i;const v=l(!1),x=l(!1),M=l(""),t={player:l([]),opponent:l([])};O(async()=>{await U()});const U=async()=>{b=new Peer,b.on("open",e=>{I?(i=b.connect(I),i.on("open",()=>{q(),h({type:"connection-established",message:"guest"})})):($(e),b.on("connection",r=>{i=r,console.log("guest connected",i),q()}))})},q=()=>{i.on("data",e=>{const{type:r,message:a}=JSON.parse(e);switch(r){case"connection-established":if(a==="guest")h({type:"connection-established",message:"host"}),p.value=null,_.value=null,m.value=!0;else{const u=Math.random()>.5;h({type:"toss",message:u}),m.value=!0}break;case"toss":f.value===null&&(v.value=a,f.value=a,h({type:"toss",message:!a}),c(a?"You go first":"You go second"));break;case"selected":t.opponent.value.push(a),v.value=!0,C.some(u=>u.every(S=>t.opponent.value.includes(S)))?(c("You Lost!"),R("lost"),k(!1)):t.player.value.length+t.opponent.value.length===9&&(c("Draw Match!"),k(!0));break;default:console.error(`Invalid data type ${r}`,a)}})},j=e=>{if(!v.value){c("its not your turn");return}if(t.player.value.includes(e)||t.opponent.value.includes(e)){c("already selected");return}t.player.value.push(e),v.value=!1,h({type:"selected",message:e}),C.some(r=>r.every(a=>t.player.value.includes(a)))?(c("You Won!!!"),R("won"),k(!0)):t.player.value.length+t.opponent.value.length===9&&(c("Draw Match!"),k(!1))},k=e=>{t.player.value=[],t.opponent.value=[],v.value=e},h=e=>i.send(JSON.stringify(e)),$=e=>{_.value=`${location.href}?queryId=${e}`,p.value=`https://api.qrserver.com/v1/create-qr-code/?data=${_.value}`},L=async()=>{const e=document.createElement("textarea");e.value=_.value,document.body.appendChild(e),e.select();try{document.execCommand("copy"),c("URL copied to clipboard")}catch(r){console.error("Unable to copy to clipboard",r)}finally{document.body.removeChild(e)}},c=e=>{g.value=e,setTimeout(()=>{g.value=null},3e3)},R=e=>{x.value=!0,M.value=e,setTimeout(()=>{x.value=!1},3e3)};return(e,r)=>(o(),s("div",V,[n(g)?(o(),s("div",W,[d("span",null,P(n(g)),1)])):w("",!0),n(x)?(o(),s("div",z,[d("img",{src:n(M)==="won"?"/win.webp":"/lost.gif",alt:"Result Image"},null,8,F)])):(o(),s("div",G,[n(p)?(o(),s("div",H,[d("img",{src:n(p),class:"m-auto",onClick:L},null,8,K),d("label",{class:"p-2 border-2 border-black text-center cursor-pointer",onClick:L},"Click to copy the URL")])):w("",!0),n(m)?(o(),s("div",X,[(o(!0),s(T,null,Y(new Array(9),(a,u)=>(o(),s("div",{class:"min-w-[33.3%] min-h-[33.3%] max-w-[33.3%] border-2 border-white flex justify-center items-center cursor-pointer",key:u,onClick:S=>j(u)},[t.opponent.value.includes(u)?(o(),s("img",{key:0,class:"object-cover",src:n(f)?"/o.png":"/x.png",alt:"Opponent"},null,8,ee)):t.player.value.includes(u)?(o(),s("img",{key:1,class:"object-cover",src:n(f)?"/x.png":"/o.png",alt:"Player"},null,8,te)):(o(),s("span",se," click me!! "))],8,Z))),128))])):w("",!0),!n(m)&&!n(p)?(o(),s("div",oe,le)):w("",!0)]))]))}},ie=B(ce,[["__scopeId","data-v-357d3c1f"]]);export{ie as default};
